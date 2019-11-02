import { Login, LoginComponent } from "./app/login/login.component";
import {User} from "./shared/models/user.model";
import { RegisterComponent } from "./app/register/register.component";

// const loginComponent = new LoginComponent(new User("licorne","bisournours"));
// loginComponent.display();

const registerComponent = new RegisterComponent();
registerComponent.display();

