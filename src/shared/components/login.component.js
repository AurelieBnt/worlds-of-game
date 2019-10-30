import {User} from "../models/user.model";
import {TitleComponent } from "./title.component";
import { RegisterButton } from "./register-button.component";
import { LoginForm } from "./loginForm.component";

export class Login{

    constructor(){
        this.div1;
        this.titleComponent;
        this.loginForm
        this.registerButton;
        
    }

    display(){
        const div1 = document.createElement("div");
        const titleComponent = new TitleComponent("Worlds of Java");
        titleComponent.display(div1);
        const user = new User("licorne","bisournours");
        const loginForm = new LoginForm("Go");
        loginForm.display(div1, user)
        const registerButton = new RegisterButton("Register", "https://google.fr");
        registerButton.display(div1);
        document.body.appendChild(div1)
    }

}