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

        const tacoContainer = document.createElement("div");
        tacoContainer.classList.add("col2","menu-card");
        menuContainer.appendChild(tacoContainer);

        const tacoJpg = new Image();
        tacoJpg.src = tacosImg;
        tacoJpg.classList.add("menu-image");
        tacoContainer.appendChild(tacoJpg);

        const tacoCaption = document.createElement("div");
        tacoCaption.classList.add("menu-caption");
        tacoContainer.appendChild(tacoCaption);

        const tacoName = document.createElement("p");
        tacoName.textContent = "The Walker Taco";
        tacoName.classList.add("menu-item-name");
        tacoCaption.appendChild(tacoName);

        const tacoDescription = document.createElement("p");
        tacoDescription.textContent = "Walker doesn't run, but you will!";
        tacoDescription.classList.add("menu-item-description");
        tacoCaption.appendChild(tacoDescription);

        const friesContainer = document.createElement("div");
        friesContainer.classList.add("col3","menu-card");
        menuContainer.appendChild(friesContainer);

        const friesJpg = new Image();
        friesJpg.src = friesImg;
        friesJpg.classList.add("menu-image");
        friesContainer.appendChild(friesJpg);

        const friesCaption = document.createElement("div");
        friesCaption.classList.add("menu-caption");
        friesContainer.appendChild(friesCaption);

        const friesName = document.createElement("p");
        friesName.textContent = "The Rails";
        friesName.classList.add("menu-item-name");
        friesCaption.appendChild(friesName);

        const friesDescription = document.createElement("p");
        friesDescription.textContent = "Goes great with The Cole Train";
        friesDescription.classList.add("menu-item-description");
        friesCaption.appendChild(friesDescription);
    }
}