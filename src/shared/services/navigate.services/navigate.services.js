import { LoginComponent } from "../../../app/login/login.component";
import { UserFormComponent } from "../../../app/register/user-form/user-form.component";

export class NavigateService {

    constructor(){
       
    }

    navigate(){
        new UserFormComponent().hide();
        const loginComponent = new LoginComponent();
        return loginComponent.display();
    }

    
}