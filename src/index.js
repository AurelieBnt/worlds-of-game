import { LoginComponent } from "./app/login/login.component";
import { RegisterComponent } from "./app/register/register.component";
import { HomeComponent } from "./app/home/home.component";
import { Router } from "./shared/router.services/router.services";


//loginComponent.display(document.body);

Router.addComponent("login", "/login", new LoginComponent());
Router.addComponent("register", "/register", new RegisterComponent("Register"));
Router.addComponent("home", "/home", new HomeComponent());

Router.navigate("login");

//router.addComponent("login", "/login", loginComponent);



