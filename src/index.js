import {User} from "./shared/models/user.model";
import {TitleComponent } from "./shared/components/title.component";
import { RegisterButton } from "./shared/components/register-button.component";
import { LoginForm } from "./shared/components/loginForm.component";

const div1 = document.createElement("div");
const titleComponent = new TitleComponent(div1);
//titleComponent.logo.setAttribute("src", "assets/images/icone.jpg" );
new LoginForm(div1);
new RegisterButton(div1);
document.body.appendChild(div1)


/*
const logoLink = "image/logo/logo.png";
let pageTitle = "Worlds of Game Society";
let login = "";
let password = "";

const register = null;
const registerLink = "/register";
const registerText = "Register";

const go = null;
const goLink = "/home";
const goText = "Go";

let valid = false;
const div2 = document.createElement("div");
const paragrapheImage = document.createElement("p");
const logo = document.createElement("img");
const pageTitle = document.createElement("h1");
const pageTitleText = document.createTextNode("Worlds of Game Session");
const form = document.createElement("form");
const divFormLogin = document.createElement("div");
const loginInput = document.createElement("input");
const divFormPassword = document.createElement("div");
const passwordInput = document.createElement("input");
const divGo = document.createElement("div");
const goButtonLink = document.createElement("a");
const goButton = document.createElement("button");
const goButtonText = document.createTextNode("Go");
const registerButton = document.createElement("button");
const registerButtonText = document.createTextNode("Register");
const registerButtonLink = document.createElement("a");

div1.setAttribute("class", "div1");
div2.setAttribute("class", "div2");
logo.setAttribute("src","assets/images/logo.png");
logo.setAttribute("alt","logo du site");
logo.setAttribute("style", "height : 100px");
pageTitle.setAttribute("class", "page-title");
form.setAttribute("method", "post");
form.setAttribute("action", "");
form.setAttribute("class", "form");
loginInput.setAttribute("placeholder", "email");
loginInput.setAttribute("type", "mail");
passwordInput.setAttribute("placeholder", "password");
registerButton.setAttribute("type", "submit");
goButton.setAttribute("type", "submit");
registerButtonLink.setAttribute("href","https://google.fr")
goButtonLink.setAttribute("href", "https://fr.wikipedia.org")

pageTitle.appendChild(pageTitleText);
paragrapheImage.appendChild(logo);
registerButton.appendChild(registerButtonText);
goButton.appendChild(goButtonText);
goButtonLink.appendChild(goButton)
divFormLogin.appendChild(loginInput)
divFormPassword.appendChild(passwordInput)
divGo.appendChild(goButtonLink)
form.appendChild(divFormLogin);
form.appendChild(divFormPassword);
form.appendChild(divGo);
div2.appendChild(paragrapheImage)
div2.appendChild(pageTitle);
div1.appendChild(div2);
div1.appendChild(form);
registerButtonLink.appendChild(registerButton)
div1.appendChild(registerButtonLink)
const create = (element, balise) => {
    element = document.createElement(balise);
    return element;
};

const attribute = (element, type, value) => {
    element.setAttribute(type, value);
    return true;
};

const display = (elementParent, elementChild, balise1, balise2) => {
    create(elementParent, balise1);
    create(elementChild, balise2);
    elementParent.appendChild(elementChild)
    
    return true;
};

for(const key in attribute){
    console.log(key);
    console.log(attribute[key]);
}
*/

// const newUser = new User("test@test.com", "licorne","Bisounours");

// console.log(newUser);

// // const user = {
// //     login : "",
// //     password : ""
// // };

// const setAttribute = (elem, json) => {
//     for(const key in json){
//         elem.setAttribute(key, json[key])
//     }
// }

// const div1 = document.createElement("div");
// setAttribute(div1, {class : "div1"});

// const displayTitle = () => {
//     title.div2 = document.createElement("div");
//     title.titleElement = document.createElement("h1");
//     title.textNode = document.createTextNode("Worlds of Game");
//     title.logo = document.createElement("img");
//     setAttribute(title.div2, {class : "div2"});
//     setAttribute(title.logo, {
//         src : "assets/images/logo.png",
//         alt : "logo du site",
//         style : "height : 100px"
//     });
//     title.titleElement.appendChild(title.textNode);
//     title.div2.appendChild(title.logo);
//     title.div2.appendChild(title.titleElement);
//     div1.appendChild(title.div2);
// };

// const displayLoginForm = () => {
//     let valid = false;
//     const form = document.createElement("form");
//     const divFormLogin = document.createElement("div");
//     const loginInput = document.createElement("input");
//     const divFormPassword = document.createElement("div");
//     const passwordInput = document.createElement("input");
//     const divGo = document.createElement("div");
//     const goButtonLink = document.createElement("a");
//     const goButton = document.createElement("button");
//     const goButtonText = document.createTextNode("Go");
//     setAttribute(form, {
//         method : "post",
//         action : "",
//         class :"form"
//     });
//     setAttribute(loginInput, {
//         value : newUser.email,
//         placeholder : "email",
//         type : "mail",
//     });
//     setAttribute(passwordInput, {
//         value : newUser.password,
//         placeholder : "password"
//     });
//     setAttribute(goButton, {type : "submit"});
//     setAttribute(goButtonLink, {href : "/home.js"});
//     goButton.appendChild(goButtonText);
//     goButtonLink.appendChild(goButton);
//     divGo.appendChild(goButtonLink);
//     divFormLogin.appendChild(loginInput);
//     divFormPassword.appendChild(passwordInput);
//     form.appendChild(divFormLogin);
//     form.appendChild(divFormPassword);
//     form.appendChild(divGo);
//     div1.appendChild(form);
// };

// const displayRegisterButton = () => {
//     const registerButton = document.createElement("button");
//     const registerButtonText = document.createTextNode("Register");
//     const registerButtonLink = document.createElement("a");
//     setAttribute(registerButtonLink, {href : "https://google.fr"});
//     setAttribute(registerButton, {type : "submit"});
//     registerButton.appendChild(registerButtonText);
//     registerButtonLink.appendChild(registerButton);
//     div1.appendChild(registerButtonLink);
// };

// const displayLogin = () => {
//     displayTitle();
//     displayLoginForm();
//     displayRegisterButton();
//     document.body.appendChild(div1);
// };

// displayLogin();



