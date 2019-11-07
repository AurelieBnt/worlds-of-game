import { Components } from "../../../shared/components/super-class/super.component";
import { ButtonComponent } from "../../../shared/components/button.component/button.component";
import { Router } from "../../../shared/services/router.services/router.services";

export class RegisterButtonComponent extends Components {

    constructor(textNode, link) {
        super();
        this.link = link;
        this.textNode = textNode;
        this.router = new Router();
    }

    display(parent) {
        this.divRegisterButton = super.createAppendElement(parent, "register-button");
        this.registerButton = new ButtonComponent("Register", "submit");
        this.registerButton.display(this.divRegisterButton);
        this.registerButton.button.addEventListener("click", (event) => { this.clickButton(event); })

    }
    hide() {
        this.divRegisterButton.parentNode.removeChild(this.divRegisterButton);
    }

    clickButton() {
        event.preventDefault();
        this.router.navigate("register");
    }
}