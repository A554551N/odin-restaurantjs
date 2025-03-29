export default class AboutPage {
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
        for(let i = 0; i< 5; i++) {
            const aboutParagraph = document.createElement("p");
            aboutParagraph.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
            "Cras sodales mi nulla, ac blandit velit cursus nec. Sed dapibus orci lacinia, "+
            "tincidunt justo sit amet, tempor est. Maecenas placerat auctor neque, nec vehicula "+
            "risus sodales sed. Nunc vitae diam vulputate neque congue rhoncus. Aenean sit amet neque "+
            "quis erat faucibus sollicitudin. Etiam dapibus dolor at rhoncus rhoncus. Phasellus placerat "+
            "iaculis tellus ut mattis. Phasellus sollicitudin tellus id urna iaculis, sed aliquet lectus rhoncus."
            content.appendChild(aboutParagraph);
        }
    }
}