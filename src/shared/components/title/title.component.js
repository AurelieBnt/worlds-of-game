import { Components } from "../super-class/super.component";

export class TitleComponent extends Components {

    constructor(titleText, cheminImage, height) {
        super();
        this.height = height;
        this.cheminImage = cheminImage;
        this.titleText = titleText    
    }

    display(div1){
        const titleElement = super.createAppendElement(div1, "h1");
        const logo = super.createAppendElement(div1,"img");
        const textNode = super.createTextAndAppendElement(titleElement, this.titleText);
        super.setAttribute(logo, {
            src: this.cheminImage,
            alt: "logo du site",
            style: this.height
        }); 
    }
}