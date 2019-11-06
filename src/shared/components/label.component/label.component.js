import { Components } from "../super-class/super.component";

export class LabelComponent extends Components{

    constructor (text) {
        super(); 
        this.text = text;
    }
    
    display (parent) {        
    const label = super.createAppendElement(parent, "label");
    super.createTextAndAppendElement(label, this.text);
    }

}