import { Components } from "../../../shared/components/super-class/super.component";
import { InputComponent } from "../../../shared/components/input.component/input.component";
import { ButtonComponent } from "../../../shared/components/button.component/button.component";
import $ from 'jquery';
import { UserService } from "../../../shared/services/user-services/user.services";
import { AlertComponent } from "../../../shared/components/alert.component/alert.component";
import { LoadingComponent } from "../../../shared/components/loading.component/loading.component";
import { Router } from "../../../shared/router.services/router.services";
import { UserLocalService } from "../../../shared/services/user-local-services/user-local.services";


export class LoginFormComponent extends Components {

    constructor(textNode, link) {
        super();
        this.link = link;
        this.textNode = textNode;
        this.alert = new AlertComponent("");
        this.loadingComponent = new LoadingComponent("Loading");

    }

    display(parent) {
        
        this.divLoginComponent = super.createAppendElement(parent, "wog-login-form");
        this.form = super.createAppendElement(this.divLoginComponent, "form");
        const divFormLogin = super.createAppendElement(this.form, "div");
        const divFormPassword = super.createAppendElement(this.form, "div");

        this.loginInput = (UserLocalService.load() != null) ? new InputComponent("loginInput", "loginInput", UserLocalService.load().email, "email", "mail") : new InputComponent("loginInput", "loginInput", "", "email", "mail");
        this.loginInput.display(divFormLogin);

        this.passwordInput = (UserLocalService.load() != null) ? new InputComponent("passwordInput", "passwordInput", UserLocalService.load().password, "password", "password") : new InputComponent("passwordInput", "passwordInput", "", "password", "password");
        this.passwordInput.display(divFormPassword);

        this.divGo = super.createAppendElement(this.form, "div");
        this.goButton = new ButtonComponent("go", "submit");
        this.goButton.display(this.divGo);
        this.goButton.button.addEventListener("click", (event) => { this.clickButton(event); })

        super.setAttribute(this.form, { class: "form" });
    }

    clickButton() {
        event.preventDefault();
        const user = UserService.get();
        user.email = this.loginInput.element.value;
        user.password = this.passwordInput.element.value;

        this.loginStart();
        UserService.login()
            .then(
                (data) => {
                    this.loginSuccess(data);
                    this.loginEnd();
                }
            )
            .catch(
                (xhr) => {
                    this.loginError(xhr.status);
                    this.loginEnd();
                }
            );
    }

    loginStart() {
        if (this.alert.element && this.alert.element.parentNode) {
            this.alert.hide();
        }
        this.loadingComponent.display(this.goButton.button.parentNode);
        this.goButton.button.parentNode.removeChild(this.goButton.button);
    }
    loginSuccess(user) {
        UserService.get().token = user.token;
        Router.navigate("home");

    }
    loginError(status) {
        this.alert.text = 404 === status
            ? "User not found"
            : (412 === status
                ? "Missing email or password"
                : "Unknow error");
        this.alert.display(this.form)
    }

    loginEnd() {
        this.loadingComponent.hide();
        this.goButton = new ButtonComponent("Go", "submit");
        this.goButton.display(this.divGo);
        this.goButton.button.addEventListener("click", (event) => { this.clickButton(event); })

    }

    hide() {
        this.divLoginComponent.parentNode.removeChild(this.divLoginComponent);
    }

}