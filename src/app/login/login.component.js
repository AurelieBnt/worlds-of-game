
import {TitleComponent } from "../../shared/components/title.component/title.component";
import { RegisterButtonComponent } from "./register-button/register-button.component";
import { LoginFormComponent } from "./login-form/login-form.component";
import { BrandTitleComponent } from "../../shared/components/brand-title.component/brand-title.component";

export class LoginComponent{

    constructor(){
                        
    }

    display(){
        const div1 = document.createElement("div");
        const brandTitleComponent = new BrandTitleComponent("Worlds of Java", "assets/images/logoOfficiel.png", "height : 150px");
        brandTitleComponent.display(div1);
        const loginForm = new LoginFormComponent("Go", "www.google.fr");
        loginForm.display(div1)
        const registerButton = new RegisterButtonComponent("Register", "/register.component.js");
        registerButton.display(div1);
        document.body.appendChild(div1)
    }

}