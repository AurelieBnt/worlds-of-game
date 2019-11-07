import { Components } from "../../../shared/components/super-class/super.component";
import { InputComponent } from "../../../shared/components/input.component/input.component";
import { Input } from "../../../shared/models/input.model";
import { ButtonComponent } from "../../../shared/components/button.component/button.component";
import $ from 'jquery';
import { UserService } from "../../../shared/services/user-services/user.services";
import { AlertComponent } from "../../../shared/components/alert.component/alert.component";
import { LoadingComponent } from "../../../shared/components/loading.component/loading.component";
import { Router } from "../../../shared/services/router.services/router.services";
import { LoginComponent } from "../login.component";

export class LoginFormComponent extends Components {

    constructor(textNode, link) {
        super();
        this.link = link;
        this.textNode = textNode;
        this.alert = new AlertComponent("");
        this.loadingComponent = new LoadingComponent("Loading");
        this.router = new Router();
    }

    display(parent) {
        
        this.divLoginComponent = super.createAppendElement(parent, "login-form");
        this.form = super.createAppendElement(this.divLoginComponent, "form");
        const divFormLogin = super.createAppendElement(this.form, "div");
        const divFormPassword = super.createAppendElement(this.form, "div");

        this.loginInput = new InputComponent("loginInput", "loginInput", "", "email", "mail");
        this.loginInput.display(divFormLogin);

        this.passwordInput = new InputComponent("passwordInput", "passwordInput", "", "password", "password");
        this.passwordInput.display(divFormPassword);

        this.divGo = super.createAppendElement(this.form, "div");
        this.goButton = new ButtonComponent("go", "submit");
        this.goButton.display(this.divGo);
        this.goButton.button.addEventListener("click", (event) => { this.clickButton(event); })

        super.setAttribute(this.form, {
            method: "post",
            action: "",
            class: "form"
        });
    }

    clickButton() {
        event.preventDefault();
        const user = UserService.retrieve();
        user.email = this.loginInput.element.value;
        user.password = this.passwordInput.element.value;

        this.getStart();
        UserService.get()
            .then(
                (data) => {
                    this.getSuccess(data);
                    this.getEnd();
                }
            )
            .catch(
                (xhr) => {
                    this.getError(xhr.status);
                    this.getEnd();
                }

            );
    }

    getStart() {
        console.log("Start");
        if (this.alert.element && this.alert.element.parentNode) {
            this.alert.hide();
        }
        this.loadingComponent.display(this.goButton.button.parentNode);
        this.goButton.button.parentNode.removeChild(this.goButton.button);
    }
    getSuccess(user) {
        this.router.navigate("home");
    
    }
    getError(status) {
        this.alert.text = 404 === status
            ? "User not found"
            : (412 === status
                ? "Missing email or password"
                : "Unknow error");
        this.alert.display(this.form)
    }

    getEnd() {
        this.loadingComponent.hide();
        this.goButton = new ButtonComponent("Go", "submit");
        this.goButton.display(this.divGo);
        this.goButton.button.addEventListener("click", (event) => { this.clickButton(event); })

    }

    hide(){
        this.divLoginComponent.parentNode.removeChild(this.divLoginComponent);
    }

}