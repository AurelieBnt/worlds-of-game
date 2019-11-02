
import {TitleComponent } from "../../shared/components/title/title.component";
import { RegisterButtonComponent } from "./register-button/register-button.component";
import { LoginFormComponent } from "./login-form/login-form.component";

export class LoginComponent{

    constructor(user){
        this.user = user;                
    }

    display(){
        const div1 = document.createElement("div");
        const titleComponent = new TitleComponent("Worlds of Java", "assets/images/logoOfficiel.png", "height : 150px");
        titleComponent.display(div1);
        const loginForm = new LoginFormComponent("Go", "www.google.fr");
        loginForm.display(div1, this.user)
        const registerButton = new RegisterButtonComponent("Register", "/register.component.js");
        registerButton.display(div1);
        document.body.appendChild(div1)
    }

}