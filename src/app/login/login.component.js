
import {TitleComponent } from "../../shared/components/title.component/title.component";
import { RegisterButtonComponent } from "./register-button/register-button.component";
import { LoginFormComponent } from "./login-form/login-form.component";
import { BrandTitleComponent } from "../../shared/components/brand-title.component/brand-title.component";
import { Components } from "../../shared/components/super-class/super.component";

export class LoginComponent extends Components{

    constructor(){
             super();           
    }

    display(parent){
        this.divLogin = document.createElement("login-component");
        const div1 = super.createAppendElement(this.divLogin, "div");
        super.setAttribute(div1, {class: "divGeneral"});
        this.brandTitleComponent = new BrandTitleComponent("Worlds of Java", "assets/images/logoOfficiel.png", "height : 150px");
        this.brandTitleComponent.display(div1);
        this.loginForm = new LoginFormComponent("Go", "www.google.fr");
        this.loginForm.display(div1)
        this.registerButton = new RegisterButtonComponent("Register", "/register.component.js");
        this.registerButton.display(div1);
        parent.appendChild(div1)
    }

    hide(){
        this.loginForm.hide();
        this.brandTitleComponent.hide();
        this.registerButton.hide();
        this.divLogin.parentNode.removeChild(this.divLogin);

    }

}