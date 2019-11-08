export class Brand {

    constructor(div1) {
        const titleElement = document.createElement("h1");
        this.textNode = document.createTextNode("Worlds of Game");
        this.logo = document.createElement("img");
        this.setAttribute(this.logo, {
            src: "assets/images/logo.png",
            alt: "logo du site",
            style: "height : 100px"
        });
        titleElement.appendChild(this.textNode);
        div1.appendChild(this.logo);
        div1.appendChild(titleElement);
        
    }

    setAttribute(elem, json) {
        for (const key in json) {
            elem.setAttribute(key, json[key]);
        }
    }

}