import { Components } from "../super-class/super.component";

export class AlertComponent extends Components{

    constructor (text) {
        super();  
        this.text = text;
        this.element = null;
    }
    
    display (parent) {
    this.element = super.createAppendElement(parent, "h4");    
    super.createTextAndAppendElement(this.element, this.text);
    parent.insertBefore(this.element, parent.firstChild);
    //super.setAttribute(this.element, {name : this.name, value : this.value});
    }

    hide(){
        this.element.parentNode.removeChild(this.element);
    }

}