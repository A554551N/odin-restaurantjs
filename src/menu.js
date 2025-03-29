import burgerImg from "./burger.jpg";
import friesImg from "./fries.jpg";
import tacosImg from "./tacos.jpg";

export default class MenuPage {
    constructor() {

    }

    renderPage() {
        const content = document.querySelector("#content");

        const pageTitle = document.createElement("h1");
        pageTitle.textContent = "The Badgers Barbecue";
        pageTitle.classList.add("title");
        content.appendChild(pageTitle);

        const subheader = document.createElement("p");
        subheader.textContent = "Menu";
        subheader.classList.add("subheader");
        content.appendChild(subheader);

        const menuContainer = document.createElement("div");
        menuContainer.id = "menu-container";
        content.appendChild(menuContainer);

        const burgerContainer = document.createElement("div");
        burgerContainer.classList.add("col1","menu-card");
        menuContainer.appendChild(burgerContainer);

        const burgerJpg = new Image();
        burgerJpg.src = burgerImg;
        burgerJpg.classList.add("menu-image");
        burgerContainer.appendChild(burgerJpg);

        const burgerCaption = document.createElement("div");
        burgerCaption.classList.add("menu-caption");
        burgerContainer.appendChild(burgerCaption);

        const burgerName = document.createElement("p");
        burgerName.textContent = "The Cole Train";
        burgerName.classList.add("menu-item-name");
        burgerCaption.appendChild(burgerName);

        const burgerDescription = document.createElement("p");
        burgerDescription.textContent = "It goes 'choo choo' into YOU";
        burgerDescription.classList.add("menu-item-description");
        burgerCaption.appendChild(burgerDescription);
    }
}