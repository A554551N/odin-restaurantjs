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
    }
}