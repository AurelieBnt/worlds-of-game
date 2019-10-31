import {User} from "../models/user.model";
import {TitleComponent } from "./title.component";
import { RegisterButton } from "./register-button.component";
import { LoginForm } from "./loginForm.component";

export class Login{

    constructor(){
                
    }

    display(){
        const div1 = document.createElement("div");
        const titleComponent = new TitleComponent("Worlds of Java", "assets/images/logoOfficiel.png", "height : 150px");
        titleComponent.display(div1);
        const user = new User("licorne","bisournours");
        const loginForm = new LoginForm("Go", "www.google.fr");
        loginForm.display(div1, user)
        const registerButton = new RegisterButton("Register", "https://google.fr");
        registerButton.display(div1);
        document.body.appendChild(div1)
    }

}