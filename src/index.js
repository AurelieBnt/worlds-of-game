import { Login, LoginComponent } from "./app/login/login.component";
import {User} from "./shared/models/user.model";
import { RegisterComponent } from "./app/register/register.component";
import { UserService } from "./shared/services/user-services/user.services";
import { HomeComponent } from "./app/home/home.component";
import { Router } from "./shared/services/router.services/router.services";

const router = new Router();

const loginComponent = new LoginComponent();
// const registerComponent = new RegisterComponent("Register");
// const homeComponent = new HomeComponent();

router.addComponent("login", "/login", loginComponent);

// registerComponent.display(document.body);
// homeComponent.display(document.body);

