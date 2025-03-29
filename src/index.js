import "./styles.css";
import HomePage from "./home.js";
import MenuPage from "./menu.js";
import AboutPage from "./about.js";
const homePage = new HomePage();
const menuPage = new MenuPage();
const aboutPage = new AboutPage();
homePage.renderPage();

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
    menuPage.renderPage();
})

const aboutButton = document.querySelector("#about-button");
aboutButton.addEventListener("click",() => {
    clearScreen();
    aboutPage.renderPage();
})