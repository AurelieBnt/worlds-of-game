import {User} from "../models/user.model";
import {TitleComponent } from "./title.component";
import { RegisterButton } from "./register-button.component";
import { LoginForm } from "./loginForm.component";

export class Login{

    constructor(){
        const div1 = document.createElement("div");
        new TitleComponent(div1);
        const user = new User("licorne","bisournours");
        new LoginForm(div1, user);
        new RegisterButton(div1);
        document.body.appendChild(div1)
    }

}