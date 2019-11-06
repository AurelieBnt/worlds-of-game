import { Components } from "../super-class/super.component";

export class LabelComponent extends Components{

    constructor (text) {
        super(); 
        this.text = text;
        this.element = null;
    }
    
    display (parent) {        
    this.element = super.createAppendElement(parent, "label");
    super.createTextAndAppendElement(this.element, this.text);
    }

}