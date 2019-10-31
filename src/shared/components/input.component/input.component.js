import { Components } from "../super-class/super.component";

export class InputComponent extends Components{

    constructor (input) {
        super(); 
        this.input = input
    }
    
    display (parent) {
    this.name = super.createAppendElement(parent, "input");
    super.setAttribute(this.name, this.input);
    }

}