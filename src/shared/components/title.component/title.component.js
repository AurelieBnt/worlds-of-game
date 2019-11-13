import { Components } from "../super-class/super.component";

export class TitleComponent extends Components {

    constructor(titleText) {
        super();
        this.titleText = titleText; 
    }

    display(parent){
        this.divTitle = super.createAppendElement(parent, "wog-title-component");
        this.titleElement = super.createAppendElement(this.divTitle, "h1");
        const textNode = super.createTextAndAppendElement(this.titleElement, this.titleText); 
    }
    hide(){
        this.divTitle.parentNode.removeChild(this.divTitle);
    }
}