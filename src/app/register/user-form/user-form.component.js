import { Components } from "../../../shared/components/super-class/super.component";
import { InputComponent } from "../../../shared/components/input.component/input.component";
import { LabelComponent } from "../../../shared/components/label.component/label.component";
import { User } from "../../../shared/models/user.model";
import $ from 'jquery';
import { UserService } from "../../../shared/services/user-services/user.services";
import { LoadingComponent } from "../../../shared/components/loading.component/loading.component";
import { ButtonComponent } from "../../../shared/components/button.component/button.component";
import { AlertComponent } from "../../../shared/components/alert.component/alert.component";

export class UserFormComponent extends Components {

    constructor() {
        super();
        this.loadingComponent = new LoadingComponent("Loading");
        this.inputs = [
            this.surname = new InputComponent("surname", "surname", "", "", "input"),
            this.firstName = new InputComponent("firstName", "firstName", "", "", "input"),
            this.lastName = new InputComponent("lastName", "lastName", "", "", "input"),
            this.email = new InputComponent("email", "email", "", "", "input"),
            this.phone = new InputComponent("phone", "phone", "", "", "input"),
            this.adress = new InputComponent("adress", "adress", "", "", "input"),
            this.zip = new InputComponent("zip", "zipcode", "", "", "input"),
            this.city = new InputComponent("city", "city", "", "", "input"),
            this.password = new InputComponent("password", "password", "", "", "password")
        ];
        this.monsieurRadio = new InputComponent("mister", "gender", "Monsieur", null, "radio");
        this.madameRadio = new InputComponent("miss", "gender", "madame", null, "radio");
        this.alert = new AlertComponent("");
    }

    display(div1) {
        this.userForm = super.createAppendElement(div1, "user-form")
        const form = super.createAppendElement(this.userForm, "form");
        const divGender = super.createAppendElement(form, "div");
        const labelComponentMonsieur = new LabelComponent("Mr");
        labelComponentMonsieur.display(divGender);
        this.monsieurRadio.display(divGender);
        const labelComponentMadame = new LabelComponent("Mrs");
        labelComponentMadame.display(divGender);
        this.madameRadio.display(divGender);

        for (const key in this.inputs) {
            const div = super.createAppendElement(form, "div");
            const label = new LabelComponent(this.inputs[key].name);
            label.display(div);
            this.inputs[key].display(div);
        }

        this.divButton = super.createAppendElement(form, "div");
        this.clearButton = new ButtonComponent("clear", "submit");
        this.clearButton.display(this.divButton);
        this.saveButton = new ButtonComponent("save", "submit");
        this.saveButton.display(this.divButton);
        super.setAttribute(form, { method: "post", action: "" })
        this.saveButton.button.addEventListener("click", (event) => { this.clickButton(event); });
    }

    clickButton(event) {
        event.preventDefault();
        const user = UserService.get();
        // //this.user.gender = this.madameRadio.element.checked?this.madameRadio.element.value:this.monsieurRadio.element.value;

        for (const key in this.inputs) {
            user[this.inputs[key].id] = this.inputs[key].element.value;
        }

        this.postStart();
        UserService.post()
            .then(
                (data) => {
                    this.postSuccess(data);
                    this.postEnd();
                }
                // (data)=>{console.log(data);}
            ).catch(
                (xhr) => {
                    this.postError(xhr.status);
                    this.postEnd();
                }
                // (xhr)=>{console.log(xhr.status);}
            );
    }

    postStart() {
        console.log("Start");
        if (this.alert.element && this.alert.element.parentNode) {
            this.alert.hide();
        }
        this.loadingComponent.display(this.saveButton.button.parentNode);
        this.saveButton.button.parentNode.removeChild(this.saveButton.button);
    }
    postSuccess(user) {
        console.log("Success");
        // this.label = super.createAppendElement(this.divButton, "label");
        // super.createTextAndAppendElement(this.label, "Success");
    }
    postError(status) {
        console.log("Error");
        this.alert.text = 409 === status
            ? "Account already exists"
            : (412 === status
                ? "User mal formed"
                : (500 === status ? "Service unavailable" : "network error"));

        this.alert.display(this.userForm);
    }

    postEnd() {
        console.log("End");
        this.loadingComponent.hide();
        this.saveButton = new ButtonComponent("save", "submit");
        this.saveButton.display(this.divButton);
        this.saveButton.button.addEventListener("click", (event) => { this.clickButton(event); });
    }
}

    //for (const key in this.inputs){
    //     user.[this.inputs[key].attributes.name] = this.inputs[key].input.value;
    // }

        // const labels = ["Surname", "Firstname", "Lastname", "Mail", "Phone", "Adress", "Zipcode", "City", "Password"]
        // for (let i=0; i< labels.length; i++) {
        //     const div = super.createAppendElement(form, "div");
        //     const label = new LabelComponent(labels[i]);
        //     label.display(div);
        //     if(labels[i]=="Password"){
        //         const input = new InputComponent(new Input(labels[i],labels[i], "", "", "password"));
        //         input.display(div);
        //         this.inputs[labels[i]] = input;
        //     }
        //     else {
        //         const input = new InputComponent(new Input(labels[i],labels[i], "", "", "input"));
        //         input.display(div);
        //         this.inputs[labels[i]] = input;
        //     }
        // }

        // const surname = this.inputs[key].getAttribute("name");
            // this.user[this.inputs[key].getAttribute("name")] = this.inputs[key]; 
            // console.log(this.user);
        //this.user.email = input.value;
        //console.log(input);


        // if(this.monsieurRadio.element.checked){
        //     this.user.gender = this.monsieurRadio.element.value;
        // }else {
        //     this.user.gender = this.madameRadio.element.value;
        // }