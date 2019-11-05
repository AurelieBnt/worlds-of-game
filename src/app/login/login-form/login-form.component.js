import { Components } from "../../../shared/components/super-class/super.component";
import { InputComponent } from "../../../shared/components/input.component/input.component";
import { Input } from "../../../shared/models/input.model";


export class LoginFormComponent extends Components {

    constructor(textNode, link) {
        super();
        this.link = link;
        this.textNode = textNode;   
    }

    display(div1){
        const form = super.createAppendElement(div1, "form");
        const divFormLogin = super.createAppendElement(form, "div");
        const divFormPassword = super.createAppendElement(form, "div");

        const loginInput = new InputComponent(new Input("loginInput", "loginInput", "email", "email", "mail"));
        loginInput.display(divFormLogin);

        const passwordInput = new InputComponent(new Input("passwordInput","passwordInput", "password", "password", "password"));
        passwordInput.display(divFormPassword);

        const divGo = super.createAppendElement(form, "div");
        const goButtonLink = super.createAppendElement(divGo, "a");
        const goButton = super.createAppendElement(goButtonLink, "button");
        const goButtonText = super.createTextAndAppendElement(goButton,this.textNode);
        super.setAttribute(form, {
            method : "post",
            action : "",
            class :"form"
        });
        
        super.setAttribute(goButton, {type : "submit"});
        super.setAttribute(goButtonLink, {href : this.link});
    }
}