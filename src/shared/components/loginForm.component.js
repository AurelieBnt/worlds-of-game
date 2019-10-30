import { Components } from "./super-component";
import { User } from "../models/user.model";

export class LoginForm extends Components {

    constructor(div1) {
        super();
        const user = new User("licorne","bisournours");
        const form = document.createElement("form");
        const divFormLogin = document.createElement("div");
        const loginInput = document.createElement("input");
        const divFormPassword = document.createElement("div");
        const passwordInput = document.createElement("input");
        const divGo = document.createElement("div");
        this.goButtonLink = document.createElement("a");
        const goButton = document.createElement("button");
        this.goButtonText = document.createTextNode("Go");
        super.setAttribute(form, {
            method : "post",
            action : "",
            class :"form"
        });
        super.setAttribute(loginInput, {
            value : user.email,
            placeholder : "email",
            type : "mail",
        });
        super.setAttribute(passwordInput, {
            value : user.password,
            placeholder : "password"
        });
        super.setAttribute(goButton, {type : "submit"});
        super.setAttribute(this.goButtonLink, {href : "/home.js"});
        goButton.appendChild(this.goButtonText);
        this.goButtonLink.appendChild(goButton);
        divGo.appendChild(this.goButtonLink);
        divFormLogin.appendChild(loginInput);
        divFormPassword.appendChild(passwordInput);
        form.appendChild(divFormLogin);
        form.appendChild(divFormPassword);
        form.appendChild(divGo);
        div1.appendChild(form);

    }

}