import { Components } from "../super-class/super.component";

export class InputComponent extends Components{

    constructor (id, name, value, placeholder, type) {
        super(); 
        this.id = id;       
        this.name = name;
        this.value = value;
        this.placeholder = placeholder;
        this.type = type;
        this.element = null;
    }
    
    display (parent) {
        this.divInput = super.createAppendElement(parent, "wog-input-component");
        this.element = super.createAppendElement(this.divInput, "input");    
        super.setAttribute(this.element, {id : this.id, name : this.name, value : this.value, placeholder : this.placeholder, type : this.type});
    }

}