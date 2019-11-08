import { Components } from "../super-class/super.component";

export class ButtonComponent extends Components {

    constructor(text, type){
        super()
        this.text = text;
        this.type = type;
    }

    display(parent){
        this.divButton = super.createAppendElement(parent, "wog-button-component");
        this.button = super.createAppendElement(this.divButton, "button");
        super.createTextAndAppendElement(this.button, this.text);
        super.setAttribute(this.button, {type : this.type, id: this.text});
    }
    hide(){
        this.divButton.parentNode.removeChild(this.divButton);
    }

}