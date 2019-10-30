import { Components } from "./super-component";

export class TitleComponent extends Components {

    constructor(titleText) {
        super();
        this.logo;
        this.titleText = titleText    
    }

    display(div1){
        const titleElement = super.createAppendElement(div1, "h1");
        this.logo = super.createAppendElement(div1,"img");
        const textNode = super.createTextAndAppendElement(titleElement, this.titleText);
        super.setAttribute(this.logo, {
            src: "assets/images/logo.png",
            alt: "logo du site",
            style: "height : 100px"
        }); 
    }
}