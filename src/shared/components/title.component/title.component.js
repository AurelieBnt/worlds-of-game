import { Components } from "../super-class/super.component";

export class TitleComponent extends Components {

    constructor(titleText) {
        super();
        this.titleText = titleText    
    }

    display(div1){
        this.titleElement = super.createAppendElement(div1, "h1");
        const textNode = super.createTextAndAppendElement(this.titleElement, this.titleText); 
    }
    hide(){
        this.titleElement.parentNode.removeChild(this.titleElement);
    }
}