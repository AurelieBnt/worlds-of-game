import { RegisterComponent } from "../../app/register/register.component";
import { HomeComponent } from "../../app/home/home.component";
import { LoginComponent } from "../../app/login/login.component";

const routes = {};
let route = null;

export class Router {

    constructor() {}

    static navigate(name) {
        if (route){
            route.component.hide();
        }
        route = routes[name];
        window.history.pushState(
            {},
            name,
            route.url
            );
        route.component.display();
    }

    static addComponent(name, url, component) {
        routes[name] = {
            url: url,
            component : component
        };
    }
}