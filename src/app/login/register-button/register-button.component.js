import { Components } from "../../../shared/components/super-class/super.component";

export class RegisterButtonComponent extends Components {

    constructor (textNode, link) {
        super();
        this.link = link;
        this.textNode = textNode;
    }

    display (div1) {
        const registerButtonLink = super.createAppendElement(div1, "a");
        const registerButton = super.createAppendElement(registerButtonLink, "button");
        const registerButtonText = super.createTextAndAppendElement(registerButton, this.textNode);
        super.setAttribute(registerButtonLink, {href : this.link});
        super.setAttribute(registerButton, {type : "submit", id : this.textNode});
        // let registerLink = document.getElementById(this.textNode);
        // registerLink.addEventListener("click", ()=>{})
        
    }

}