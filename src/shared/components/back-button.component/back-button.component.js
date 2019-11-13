import { Components } from "../super-class/super.component";
import { Router } from "../../router.services/router.services";

export class BackButtonComponent extends Components {

    constructor(text, type, name){
        super();
        this.text = text;
        this.type = type;
        this.name = name;
        this.router = new Router();
    }

    display(parent){
        this.divBackButton = super.createAppendElement(parent, "wog-back-button");
        this.button = super.createAppendElement(this.divBackButton, "button");
        super.createTextAndAppendElement(this.button, this.text);
        super.setAttribute(this.button, {type : this.type, id: this.text});
        this.button.addEventListener("click", (event) => {this.clickButton(event);});
    }

    hide(){
        this.divBackButton.parentNode.removeChild(this.divBackButton);
    }

    clickButton(){
        Router.navigate(this.name);
    }


}