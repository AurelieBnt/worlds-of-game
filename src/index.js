import { Login, LoginComponent } from "./app/login/login.component";
import {User} from "./shared/models/user.model";
import { RegisterComponent } from "./app/register/register.component";
import { UserService } from "./shared/services/user-services/user.services";
import { HomeComponent } from "./app/home/home.component";

const loginComponent = new LoginComponent();
loginComponent.display(document.body);

// const registerComponent = new RegisterComponent("Register");
// registerComponent.display(document.body);

// const homeComponent = new HomeComponent();
// homeComponent.display(document.body);

