import { Components } from "../../shared/components/super-class/super.component";
import { UserFormComponent } from "./user-form/user-form.component";
import { TitleComponent } from "../../shared/components/title.component/title.component";
import { User } from "../../shared/models/user.model";

export class RegisterComponent extends Components {

    constructor (text) {
        super();
        this.text = text;
        this.user = new User();
    }

    display(parent){
        const div1 = document.createElement("div");
        this.title = new TitleComponent(this.text);
        this.title.display(div1);
        this.userFormComponent = new UserFormComponent(this.user);
        this.userFormComponent.display(div1);
        parent.appendChild(div1);
    }

    hide(){
        this.title.parentNode.removeChild(this.title);
        this.userFormComponent.hide();
    }

}