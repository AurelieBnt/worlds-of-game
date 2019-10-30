import { Components } from "./super-component";
import { User } from "../models/user.model";

export class LoginForm extends Components {

    constructor(textNode) {
        super();
        this.goButtonLink;
        this.textNode = textNode;   
    }

    display(div1, user){
        const form = super.createAppendElement(div1, "form");
        const divFormLogin = super.createAppendElement(form, "div");
        const loginInput = super.createAppendElement(divFormLogin, "input");
        const divFormPassword = super.createAppendElement(form, "div");
        const passwordInput = super.createAppendElement(divFormPassword, "input");
        const divGo = super.createAppendElement(form, "div");
        this.goButtonLink = super.createAppendElement(divGo, "a");
        const goButton = super.createAppendElement(this.goButtonLink, "button");
        const goButtonText = super.createTextAndAppendElement(goButton,this.textNode);
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