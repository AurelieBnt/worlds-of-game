import { Login, LoginComponent } from "./app/login/login.component";
import {User} from "./shared/models/user.model";

const loginComponent = new LoginComponent(new User("licorne","bisournours"));
loginComponent.display();

