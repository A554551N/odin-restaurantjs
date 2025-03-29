import barImg from "./bar.jpg";
import beerImg from "./beer.jpg"; 

export default class HomePage { 
    constructor() {
        this.content = document.querySelector("#content");
    }

    renderPage() {
        const pageTitle = document.createElement("h1");
        pageTitle.textContent = "The Badgers Barbecue";
        pageTitle.classList.add("title");
        this.content.appendChild(pageTitle);

        const subheader = document.createElement("p");
        subheader.textContent = "Where the Pros Eat!";
        subheader.classList.add("subheader");
        this.content.appendChild(subheader);


        const imageContainer = document.createElement("div");
        imageContainer.id = "image-container";
        this.content.appendChild(imageContainer);

        const barImageContainer = document.createElement("div");
        barImageContainer.classList.add("image-container");
        imageContainer.appendChild(barImageContainer);
        
        const barImage = new Image();
        barImage.src = barImg;
        barImage.id = "bar-image";
        barImage.alt = "A shot of the bar";
        barImageContainer.appendChild(barImage); 

        const barImageCaption = document.createElement("p");
        barImageCaption.classList.add("caption");
        barImageCaption.textContent = "The Badgers Barbecue has plenty of seats for gameday.";
        barImageContainer.appendChild(barImageCaption);
        const beerImageContainer = document.createElement("div");
        beerImageContainer.classList.add("image-container");
        imageContainer.appendChild(beerImageContainer);

        const beerImage = new Image();
        beerImage.src = beerImg;
        beerImage.id = "beer-image";
        beerImage.alt = "A well-poured beer";
        beerImageContainer.appendChild(beerImage);

        const beerImageCaption = document.createElement("p");
        beerImageCaption.classList.add("caption");
        beerImageCaption.textContent = "All the finest drafts";
        beerImageContainer.appendChild(beerImageCaption);

    }
}