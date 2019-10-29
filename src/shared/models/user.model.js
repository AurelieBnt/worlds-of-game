import {UserAdress} from "./user-adress.model";
import {UserInformations} from "./user-informations.model";

export class User {


    constructor (email, password, surname) {
        this.email = email;
        this.password = password;
        this.surname = surname; 
        this.userAdress = new UserAdress();
        this.userInformations = new UserInformations();
    };

}