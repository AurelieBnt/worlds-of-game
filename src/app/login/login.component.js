
import {TitleComponent } from "../../shared/components/title/title.component";
import { RegisterButton } from "./register-button/register-button.component";
import { LoginForm } from "./login-form/login-form.component";

export class Login{

    constructor(user){
        this.user = user;                
    }

    display(){
        const div1 = document.createElement("div");
        const titleComponent = new TitleComponent("Worlds of Java", "assets/images/logoOfficiel.png", "height : 150px");
        titleComponent.display(div1);
        const loginForm = new LoginForm("Go", "www.google.fr");
        loginForm.display(div1, this.user)
        const registerButton = new RegisterButton("Register", "https://google.fr");
        registerButton.display(div1);
        document.body.appendChild(div1)
    }

}