import { Components } from "../../../shared/components/super-class/super.component";
import { InputComponent } from "../../../shared/components/input.component/input.component";
import { LabelComponent } from "../../../shared/components/label.component/label.component";
import { Input } from "../../../shared/models/input.model";

export class UserFormComponent extends Components {

    constructor(){
        super();
    }

    display(div1){
        const form = super.createAppendElement(div1, "form");
        const title = super.createAppendElement(form, "h1");
        const titleText = super.createTextAndAppendElement(title, "Register");
        const divGender = super.createAppendElement(form, "div");
       
        const labelComponentMonsieur = new LabelComponent("Monsieur");
        labelComponentMonsieur.display(divGender);
        const monsieurRadio = new InputComponent(new Input("mister","gender", "Monsieur", null, "radio"));
        monsieurRadio.display(divGender);
        
        const labelComponentMadame = new LabelComponent("Madame");
        labelComponentMadame.display(divGender);
        const madameRadio = new InputComponent(new Input("miss","gender", "madame", null, "radio"));
        madameRadio.display(divGender);

        const divSurname = super.createAppendElement(form, "div");
        const labelSurname = new LabelComponent("Surname");
        labelSurname.display(divSurname);
        const surnameInput = new InputComponent(new Input("surname","surname", "", "", "input"));
        surnameInput.display(divSurname);

        const divFirstname = super.createAppendElement(form, "div");
        const labelFirstname = new LabelComponent("Firstname");
        labelFirstname.display(divFirstname);
        const firstnameInput = new InputComponent(new Input("firstname","firstname", "", "", "input"));
        firstnameInput.display(divFirstname);

        const divLastname = super.createAppendElement(form, "div");
        const labelLastname = new LabelComponent("Lastname");
        labelLastname.display(divLastname);
        const lastnameInput = new InputComponent(new Input("lastname","lastname", "", "", "input"));
        lastnameInput.display(divLastname);

        const divMail = super.createAppendElement(form, "div");
        const labelMail = new LabelComponent("Mail");
        labelMail.display(divMail);
        const mailInput = new InputComponent(new Input("mail","mail", "", "", "input"));
        mailInput.display(divMail);

        const divPhone = super.createAppendElement(form, "div");
        const labelPhone = new LabelComponent("Phone");
        labelPhone.display(divPhone);
        const phoneInput = new InputComponent(new Input("phone","phone", "", "", "input"));
        phoneInput.display(divPhone);

        const divAdress = super.createAppendElement(form, "div");
        const labelAdress = new LabelComponent("Adress");
        labelAdress.display(divAdress);
        const AdressInput = new InputComponent(new Input("adress","adress", "", "", "input"));
        AdressInput.display(divAdress);

        const divCity = super.createAppendElement(form, "div");
        const labelCity = new LabelComponent("City");
        labelCity.display(divCity);
        const cityInput = new InputComponent(new Input("city","city", "", "", "input"));
        cityInput.display(divCity);

        const divZipcode = super.createAppendElement(form, "div");
        const labelZipcode = new LabelComponent("ZipCode");
        labelZipcode.display(divZipcode);
        const zipcodeInput = new InputComponent(new Input("zipCode","zipCode", "", "", "input"));
        zipcodeInput.display(divZipcode);

        const divPassword = super.createAppendElement(form, "div");
        const labelPassword = new LabelComponent("Password");
        labelPassword.display(divPassword);
        const passwordInput = new InputComponent(new Input("password","password", "", "", "input"));
        passwordInput.display(divPassword);

        const divButton = super.createAppendElement(form, "div");
        const clearButton = super.createAppendElement(divButton, "button");
        super.createTextAndAppendElement(clearButton, "clear");
        const saveButton = super.createAppendElement(divButton, "button");
        super.createTextAndAppendElement(saveButton, "save");
    }
}