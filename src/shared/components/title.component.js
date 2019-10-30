import { Components } from "./super-component";

export class TitleComponent extends Components {

    constructor(div1) {
        super();
        const titleElement = super.createAppendElement(div1, "h1");
        this.logo = super.createAppendElement(div1,"img");
        this.textNode = super.createTextAndAppendElement(titleElement, "Worlds of Game");
        super.setAttribute(this.logo, {
            src: "assets/images/logo.png",
            alt: "logo du site",
            style: "height : 100px"
        });        
    }
}