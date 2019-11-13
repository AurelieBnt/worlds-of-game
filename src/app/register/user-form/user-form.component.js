import { Components } from "../../../shared/components/super-class/super.component";
import { InputComponent } from "../../../shared/components/input.component/input.component";
import { LabelComponent } from "../../../shared/components/label.component/label.component";
import $ from "jquery";
import { UserService } from "../../../shared/services/user-services/user.services";
import { LoadingComponent } from "../../../shared/components/loading.component/loading.component";
import { ButtonComponent } from "../../../shared/components/button.component/button.component";
import { AlertComponent } from "../../../shared/components/alert.component/alert.component";
import { TitleComponent } from "../../../shared/components/title.component/title.component";
import { Router } from "../../../shared/router.services/router.services";
import { UserLocalService } from "../../../shared/services/user-local-services/user-local.services";

export class UserFormComponent extends Components {

    constructor(text) {
        super();
        this.text = text;
        this.inputs = [
            // this.monsieurRadio = new InputComponent("Mr", "gender", "", "", "radio"),
            // this.madameRadio = new InputComponent("Mrs", "gender", "", "", "radio"),
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
        this.monsieurRadio = new InputComponent("Mr", "gender", "", "", "radio");
        this.madameRadio = new InputComponent("Mrs", "gender", "", "", "radio");
        this.alert = new AlertComponent("");
        this.loadingComponent = new LoadingComponent("Loading");

    }

    display(div1) {
        this.userForm = super.createAppendElement(div1, "wog-user-form");
        this.title = new TitleComponent(this.text);
        this.title.display(this.userForm);
        const formGender = super.createAppendElement(this.userForm, "form-gender");
        const divMonsieur = super.createAppendElement(formGender, "div");
        const labelComponentMonsieur = new LabelComponent("Mr");
        labelComponentMonsieur.display(divMonsieur);
        this.monsieurRadio.display(divMonsieur);
        const divMadame = super.createAppendElement(formGender, "div");
        const labelComponentMadame = new LabelComponent("Mrs");
        labelComponentMadame.display(divMadame);
        this.madameRadio.display(divMadame);
        const form = super.createAppendElement(this.userForm, "form");

        for (const key in this.inputs) {
            const div = super.createAppendElement(form, "wog-user-form-div");
            const label = new LabelComponent(this.inputs[key].id);
            label.display(div);
            this.inputs[key].display(div);
            super.setAttribute(label.element, { class: "form" });
        }

        this.divButton = super.createAppendElement(this.userForm, "wog-div-button");
        this.clearButton = new ButtonComponent("clear", "submit");
        this.clearButton.display(this.divButton);
        this.saveButton = new ButtonComponent("save", "submit");
        this.saveButton.display(this.divButton);
        super.setAttribute(form, { method: "post", action: "" });
        this.saveButton.button.addEventListener("click", (event) => { this.clickButton(event); });
    }

    clickButton(event) {
        event.preventDefault();
        const user = UserService.get();
        //this.user.gender = this.madameRadio.element.checked?this.madameRadio.element.value:this.monsieurRadio.element.value;

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
            ).catch(
                (xhr) => {
                    this.postError(xhr.status);
                    this.postEnd();
                }
            );
    }

    postStart() {
        if (this.alert.element && this.alert.element.parentNode) {
            this.alert.hide();
        }
        this.loadingComponent.display(this.saveButton.button.parentNode);
        this.saveButton.button.parentNode.removeChild(this.saveButton.button);
    }
    postSuccess(user) {
        UserLocalService.store();
        Router.navigate("login");
    }
    postError(status) {
        this.alert.text = 409 === status
            ? "Account already exists"
            : (412 === status
                ? "User mal formed"
                : (500 === status ? "Service unavailable" : "network error"));

        this.alert.display(this.userForm);
    }
    postEnd() {
        this.loadingComponent.hide();
        this.saveButton = new ButtonComponent("save", "submit");
        this.saveButton.display(this.divButton);
        this.saveButton.button.addEventListener("click", (event) => { this.clickButton(event); });
    }

    hide() {
        this.userForm.parentNode.removeChild(this.userForm);
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