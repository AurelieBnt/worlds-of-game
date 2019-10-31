import { Components } from "../../../shared/components/super-class/super.component";

export class UserFormComponent extends Components {

    constructor(){
        super();
    }

    display(div1){
        const form = super.createAppendElement(div1, "form");
        const title = super.createAppendElement(form, "h1");
        const titleText = super.createTextAndAppendElement(title, "Register");
        const gender = super.createAppendElement(form, "radio");
        super.setAttribute(gender, {type :""})

    }

}