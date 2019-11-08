import { Components } from "../../../shared/components/super-class/super.component";
import { ButtonComponent } from "../../../shared/components/button.component/button.component";
import { Router } from "../../../shared/router.services/router.services";

export class RegisterButtonComponent extends Components {

    constructor(textNode) {
        super();
        this.textNode = textNode;
    }

    display(parent) {
        this.divRegisterButton = super.createAppendElement(parent, "wog-register-button");
        this.registerButton = new ButtonComponent("Register", "submit");
        this.registerButton.display(this.divRegisterButton);
        this.registerButton.button.addEventListener("click", (event) => Router.navigate("register"));

    }
    hide() {
        this.divRegisterButton.parentNode.removeChild(this.divRegisterButton);
    }
}