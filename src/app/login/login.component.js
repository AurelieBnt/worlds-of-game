import { RegisterButtonComponent } from "./register-button/register-button.component";
import { LoginFormComponent } from "./login-form/login-form.component";
import { BrandTitleComponent } from "../../shared/components/brand-title.component/brand-title.component";
import { Components } from "../../shared/components/super-class/super.component";

export class LoginComponent extends Components {

    constructor() {
        super();
    }

    display() {
        this.divLogin = document.createElement("wog-login");
        this.brandTitleComponent = new BrandTitleComponent("Worlds of Java", "assets/images/logoOfficiel.png", "height : 150px");
        this.brandTitleComponent.display(this.divLogin);
        this.loginForm = new LoginFormComponent("Go", "www.google.fr");
        this.loginForm.display(this.divLogin)
        this.registerButton = new RegisterButtonComponent("Register");
        this.registerButton.display(this.divLogin);
        document.body.appendChild(this.divLogin)
    }

    hide() {
        this.loginForm.hide();
        this.brandTitleComponent.hide();
        this.registerButton.hide();
    }
}