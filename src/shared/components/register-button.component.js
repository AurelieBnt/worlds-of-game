import { Components } from "./super-component";

export class RegisterButton extends Components {

    constructor (div1) {
        super();
        this.registerButtonLink = super.createAppendElement(div1, "a");
        const registerButton = super.createAppendElement(this.registerButtonLink, "button");
        this.registerButtonText = super.createTextAndAppendElement(registerButton, "Register");
        super.setAttribute(this.registerButtonLink, {href : "https://google.fr"});
        super.setAttribute(registerButton, {type : "submit"});

    }

}