import { User } from "../../models/user.model";
import $ from 'jquery';

const user = new User;

export class UserService {

    static get(){
        return user;
    }

    static post(){
        return $.ajax({
            url : "http://worldsofgame.alwaysdata.net/user.php",
            method : "POST",
            contentType : "application/json",
            data : JSON.stringify(user),
            dataType : "json"
        })
        
    }
}