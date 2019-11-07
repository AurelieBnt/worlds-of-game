import { RegisterComponent } from "../../../app/register/register.component";
import { HomeComponent } from "../../../app/home/home.component";
import { LoginComponent } from "../../../app/login/login.component";

export class Router {

    constructor() {
        this.component;
    }

    navigate(name) {
        window.history.pushState(
            {},
            name,
            `/${name}`
        );
        document.body.innerHTML = "";
        switch (name) {
            case "home":
                const homeComponent = new HomeComponent();
                this.addComponent(name, `/${name}`, homeComponent);
                break;
            case "register":
                const registerComponent = new RegisterComponent();
                this.addComponent(name, `/${name}`, registerComponent);
                break;
            case "login":
                const loginComponent = new LoginComponent();
                this.addComponent(name, `/${name}`, loginComponent);
                break;
            }
        
    }

    addComponent(name, url, component) {
        component.display(document.body);
    }

}