import { Components } from "./super-component";
import { User } from "../models/user.model";

export class LoginForm extends Components {

    constructor(div1, user) {
        super();
        const form = super.createAppendElement(div1, "form");
        const divFormLogin = super.createAppendElement(form, "div");
        const loginInput = super.createAppendElement(divFormLogin, "input");
        const divFormPassword = super.createAppendElement(form, "div");
        const passwordInput = super.createAppendElement(divFormPassword, "input");
        const divGo = super.createAppendElement(form, "div");
        this.goButtonLink = super.createAppendElement(divGo, "a");
        const goButton = super.createAppendElement(this.goButtonLink, "button");
        this.goButtonText = super.createTextAndAppendElement(goButton,"Go");
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
    }
}