import { Login } from "./app/login/login.component";
import {User} from "./shared/models/user.model";

const login = new Login(new User("licorne","bisournours"));
login.display();

