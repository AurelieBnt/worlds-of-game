import { Components } from "../super-class/super.component";

export class ButtonComponent extends Components {

    constructor(text, type){
        super()
        this.text = text;
        this.type = type;
    }

    display(parent){
        this.button = super.createAppendElement(parent, "button");
        super.createTextAndAppendElement(this.button, this.text);
        super.setAttribute(this.button, {type : this.type, id: this.text});
    }
    hide(){
        this.button.parentNode.removeChild(this.button);
    }

}