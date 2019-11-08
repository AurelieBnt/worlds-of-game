import { Components } from "../../shared/components/super-class/super.component";
import { UserFormComponent } from "./user-form/user-form.component";
import { BackButtonComponent } from "../../shared/components/back-button.component/back-button.component";

export class RegisterComponent extends Components {

    constructor (text) {
        super();
        this.text = text;
    }

    display(){
        const div1 = document.createElement("div");
        this.userFormComponent = new UserFormComponent("Register");
        this.userFormComponent.display(div1);
        this.backButton = new BackButtonComponent("back", "submit", "login");
        this.backButton.display(div1);
        document.body.appendChild(div1);
    }

    hide(){
        this.userFormComponent.hide();
        this.backButton.hide();
    }

}