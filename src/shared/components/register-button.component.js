import { Components } from "./super-component";

export class RegisterButton extends Components {

    constructor (textNode, link) {
        super();
        this.registerButtonLink;
        this.link = link;
        this.textNode = textNode;
    }

    display (div1) {
        this.registerButtonLink = super.createAppendElement(div1, "a");
        const registerButton = super.createAppendElement(this.registerButtonLink, "button");
        const registerButtonText = super.createTextAndAppendElement(registerButton, this.textNode);
        super.setAttribute(this.registerButtonLink, {href : this.link});
        super.setAttribute(registerButton, {type : "submit"});
    }

}