import { Components } from "../../shared/components/super-class/super.component";
import { LabelComponent } from "../../shared/components/label.component/label.component";
import { Input } from "../../shared/models/input.model";
import { InputComponent } from "../../shared/components/input.component/input.component";
import { UserFormComponent } from "./user-form/user-form.component";

export class RegisterComponent extends Components {

    constructor () {
        super();
    }

    display(){
        const div1 = document.createElement("div");
        const userFormComponent = new UserFormComponent();
        userFormComponent.display(div1);
        
        document.body.appendChild(div1);
    }

}