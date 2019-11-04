import { Components } from "../../../shared/components/super-class/super.component";
import { InputComponent } from "../../../shared/components/input.component/input.component";
import { LabelComponent } from "../../../shared/components/label.component/label.component";
import { Input } from "../../../shared/models/input.model";

export class UserFormComponent extends Components {

    constructor(){
        super();
        this.user;
        
    }

    display(div1){
        const form = super.createAppendElement(div1, "form");
        const divGender = super.createAppendElement(form, "div");
        const labelComponentMonsieur = new LabelComponent("Mister");
        labelComponentMonsieur.display(divGender);
        const monsieurRadio = new InputComponent(new Input("mister","gender", "Monsieur", null, "radio"));
        monsieurRadio.display(divGender);
        
        const labelComponentMadame = new LabelComponent("Mrs");
        labelComponentMadame.display(divGender);
        const madameRadio = new InputComponent(new Input("miss","gender", "madame", null, "radio"));
        madameRadio.display(divGender);

        const labels = ["Surname", "Firstname", "Lastname", "Mail", "Phone", "Adress", "Zipcode", "City", "Password"]
        for (let i=0; i< labels.length; i++) {
            const div = super.createAppendElement(form, "div");
            const label = new LabelComponent(labels[i]);
            label.display(div);
            if(labels[i]=="Password"){
                const input = new InputComponent(new Input(labels[i],labels[i], "", "", "password"));
                input.display(div);
            }
            else {
                const input = new InputComponent(new Input(labels[i],labels[i], "", "", "input"));
                input.display(div);
            }
        }
        //super.setAttribute(label, {style : "width : 20px"})
        const divButton = super.createAppendElement(form, "div");
        const clearButton = super.createAppendElement(divButton, "button");
        super.createTextAndAppendElement(clearButton, "clear");
        const saveButton = super.createAppendElement(divButton, "button");
        super.createTextAndAppendElement(saveButton, "save");
        super.setAttribute(form, {method : "post", action : ""})
        super.setAttribute(saveButton, {type : "submit", id: "saveBtn"});
        saveButton.addEventListener("click", (event)=>{this.clickButton(event);});
    }

    clickButton(event) {
        event.preventDefault();
        console.log("Hellooooo !!!!");
    }
}