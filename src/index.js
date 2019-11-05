import { Login, LoginComponent } from "./app/login/login.component";
import {User} from "./shared/models/user.model";
import { RegisterComponent } from "./app/register/register.component";
import { UserService } from "./shared/services/user-services/user.services";

// const loginComponent = new LoginComponent();
// loginComponent.display();

const registerComponent = new RegisterComponent("Register");
registerComponent.display(document.body);

