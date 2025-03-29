import "./styles.css";
import HomePage from "./home.js";
const homePage = new HomePage();
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
})

const aboutButton = document.querySelector("#about-button");
menuButton.addEventListener("click",() => {
    clearScreen();
})