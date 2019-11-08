import { UserService } from "../user-services/user.services";

const userLocal = UserService.get();

export class UserLocalService {

    static store(){
        localStorage.setItem("user", JSON.stringify(userLocal));
    }

    static load(){
        return JSON.parse(localStorage.getItem("user"));
    }

}