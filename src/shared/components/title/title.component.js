import { Components } from "../super-class/super.component";

export class TitleComponent extends Components {

    constructor(titleText) {
        super();
        this.titleText = titleText    
    }

    display(div1){
        const titleElement = super.createAppendElement(div1, "h1");
        const textNode = super.createTextAndAppendElement(titleElement, this.titleText); 
    }
}