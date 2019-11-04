import { Components } from "../../../shared/components/super-class/super.component";
import { InputComponent } from "../../../shared/components/input.component/input.component";
import { LabelComponent } from "../../../shared/components/label.component/label.component";
import { User } from "../../../shared/models/user.model";

export class UserFormComponent extends Components {

    constructor(user, email, password, surname, gender, firstname, lastname, phone,adress, city, zipcode){
        super();
        this.user = user;    
        this.email = email;
        this.password = password; 
        this.surname = surname;
        this.gender = gender;
        this.firstname = firstname;
        this.lastname = lastname; 
        this.phone = phone;
        this.adress = adress;
        this.city = city;
        this.zipcode = zipcode;
         
    }

    display(div1){
        const form = super.createAppendElement(div1, "form");
        const divGender = super.createAppendElement(form, "div");
        const labelComponentMonsieur = new LabelComponent("Mister");
        labelComponentMonsieur.display(divGender);
        this.monsieurRadio = new InputComponent("mister","gender", "Monsieur", null, "radio");
        this.monsieurRadio.display(divGender);
        
        const labelComponentMadame = new LabelComponent("Mrs");
        labelComponentMadame.display(divGender);
        this.madameRadio = new InputComponent("miss","gender", "madame", null, "radio");
        this.madameRadio.display(divGender);

        const divSurname = super.createAppendElement(form, "div");
        const labelSurname = new LabelComponent("Surname");
        labelSurname.display(divSurname);
        this.surname = new InputComponent("surname","surname", "", "");
        this.surname.display(divSurname);

        const divFirstname = super.createAppendElement(form, "div");
        const labelFirsname = new LabelComponent("Firstname");
        labelFirsname.display(divFirstname);
        this.firstname = new InputComponent("firstname","firstname", "", "", "input");
        this.firstname.display(divFirstname);

        const divLastname = super.createAppendElement(form, "div");
        const labelLastname = new LabelComponent("Lastname");
        labelLastname.display(divLastname);
        this.lastname = new InputComponent("lastname","lastname", "", "", "input");
        this.lastname.display(divLastname);

        const divMail = super.createAppendElement(form, "div");
        const labelMail = new LabelComponent("Email");
        labelMail.display(divMail);
        this.email = new InputComponent("email","email", "", "", "input");
        this.email.display(divMail);

        const divPhone = super.createAppendElement(form, "div");
        const labelPhone = new LabelComponent("Phone");
        labelPhone.display(divPhone);
        this.phone = new InputComponent("phone","emaphoneil", "", "", "input");
        this.phone.display(divPhone);

        const divAdress = super.createAppendElement(form, "div");
        const labelAdress = new LabelComponent("Adress");
        labelAdress.display(divAdress);
        this.adress = new InputComponent("adress","adress", "", "", "input");
        this.adress.display(divAdress);

        const divZipcode = super.createAppendElement(form, "div");
        const labelZipcode = new LabelComponent("Zipcode");
        labelZipcode.display(divZipcode);
        this.zipcode = new InputComponent("zipcode","zipcode", "", "", "input");
        this.zipcode.display(divZipcode);

        const divCity = super.createAppendElement(form, "div");
        const labelCity = new LabelComponent("City");
        labelCity.display(divCity);
        this.city = new InputComponent("city","city", "", "", "input");
        this.city.display(divCity);

        const divPassword = super.createAppendElement(form, "div");
        const labelPassword = new LabelComponent("Password");
        labelPassword.display(divPassword);
        this.password = new InputComponent("password","password", "", "", "password");
        this.password.display(divPassword);

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
        this.user = new User();
        this.user.email = this.email.element.value;
        this.user.password = this.password.element.value;
        this.user.surname = this.surname.element.value;
        // console.log(this.monsieurRadio.element.checked);
        // if(this.monsieurRadio.element.checked){
        //     this.user.gender = this.monsieurRadio.element.value;
        // }else {
        //     this.user.gender = this.madameRadio.element.value;
        // }

        this.user.gender = this.madameRadio.element.checked?this.madameRadio.element.value:this.monsieurRadio.element.value;
        
        this.user.firstname = this.firstname.element.value;
        this.user.lastname = this.lastname.element.value;
        this.user.phone = this.phone.element.value;
        this.user.adress = this.adress.element.value;
        this.user.city = this.city.element.value;
        this.user.zipcode = this.zipcode.element.value;
        //this.user.email = this.email.value
        //email, password, surname, gender, firstname, lastname, phone,adress, city, zipCode
        console.log(this.user);            
    }
}


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