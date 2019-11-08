import { Components } from "../super-class/super.component";
import { TitleComponent } from "../title.component/title.component";

export class BrandTitleComponent extends Components {

    constructor(titleText, cheminImage, height) {
        super();
        this.height = height;
        this.cheminImage = cheminImage;
        this.titleText = titleText;
        this.title = new TitleComponent(titleText); 
    }

    display(parent){
        this.divBrand = super.createAppendElement(parent, "brand-title-component");
        const logo = super.createAppendElement(this.divBrand,"img");
        super.setAttribute(logo, {
            src: this.cheminImage,
            alt: "logo du site",
            style: this.height
        }); 
        this.title.display(this.divBrand);
    }

    hide(){
        this.divBrand.parentNode.removeChild(this.divBrand);
    }
}