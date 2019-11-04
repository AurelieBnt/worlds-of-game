import { Components } from "../super-class/super.component";
import { TitleComponent } from "../title/title.component";

export class BrandTitleComponent extends Components {

    constructor(titleText, cheminImage, height) {
        super();
        this.height = height;
        this.cheminImage = cheminImage;
        this.titleText = titleText
        this.title = new TitleComponent(titleText)    
    }

    display(div1){
        this.title.display(div1);
        const logo = super.createAppendElement(div1,"img");
        super.setAttribute(logo, {
            src: this.cheminImage,
            alt: "logo du site",
            style: this.height
        }); 
    }
}