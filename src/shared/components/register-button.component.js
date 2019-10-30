import { Components } from "./super-component";

export class RegisterButton extends Components {

    constructor (div1) {
        super();
        const registerButton = document.createElement("button");
        this.registerButtonText = document.createTextNode("Register");
        this.registerButtonLink = document.createElement("a");
        super.setAttribute(this.registerButtonLink, {href : "https://google.fr"});
        super.setAttribute(registerButton, {type : "submit"});
        registerButton.appendChild(this.registerButtonText);
        this.registerButtonLink.appendChild(registerButton);
        div1.appendChild(this.registerButtonLink);


    }

}