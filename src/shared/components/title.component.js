import { Components } from "./super-component";

export class TitleComponent extends Components {

    constructor(div1) {
        super();
        const titleElement = document.createElement("h1");
        this.textNode = document.createTextNode("Worlds of Game");
        this.logo = document.createElement("img");
        super.setAttribute(this.logo, {
            src: "assets/images/logo.png",
            alt: "logo du site",
            style: "height : 100px"
        });
        titleElement.appendChild(this.textNode);
        div1.appendChild(this.logo);
        div1.appendChild(titleElement);
        
    }

}