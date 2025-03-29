import "./styles.css";
import HomePage from "./home.js";
import MenuPage from "./menu.js";
const homePage = new HomePage();
const menuPage = new MenuPage();
menuPage.renderPage();

const content = document.querySelector("#content");
function clearScreen() {
    content.replaceChildren();
}

const homeButton = document.querySelector("#home-button");
homeButton.addEventListener("click",() => {
    clearScreen();
    homePage.renderPage();
})

const menuButton = document.querySelector("#menu-button");
menuButton.addEventListener("click",() => {
    clearScreen();
})

const aboutButton = document.querySelector("#about-button");
menuButton.addEventListener("click",() => {
    clearScreen();
})