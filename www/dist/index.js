/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _shared_models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/models/user.model */ \"./src/shared/models/user.model.js\");\n/*\r\nconst logoLink = \"image/logo/logo.png\";\r\nlet pageTitle = \"Worlds of Game Society\";\r\nlet login = \"\";\r\nlet password = \"\";\r\n\r\nconst register = null;\r\nconst registerLink = \"/register\";\r\nconst registerText = \"Register\";\r\n\r\nconst go = null;\r\nconst goLink = \"/home\";\r\nconst goText = \"Go\";\r\n\r\nlet valid = false;\r\nconst div1 = document.createElement(\"div\");\r\nconst div2 = document.createElement(\"div\");\r\nconst paragrapheImage = document.createElement(\"p\");\r\nconst logo = document.createElement(\"img\");\r\nconst pageTitle = document.createElement(\"h1\");\r\nconst pageTitleText = document.createTextNode(\"Worlds of Game Session\");\r\nconst form = document.createElement(\"form\");\r\nconst divFormLogin = document.createElement(\"div\");\r\nconst loginInput = document.createElement(\"input\");\r\nconst divFormPassword = document.createElement(\"div\");\r\nconst passwordInput = document.createElement(\"input\");\r\nconst divGo = document.createElement(\"div\");\r\nconst goButtonLink = document.createElement(\"a\");\r\nconst goButton = document.createElement(\"button\");\r\nconst goButtonText = document.createTextNode(\"Go\");\r\nconst registerButton = document.createElement(\"button\");\r\nconst registerButtonText = document.createTextNode(\"Register\");\r\nconst registerButtonLink = document.createElement(\"a\");\r\n\r\ndiv1.setAttribute(\"class\", \"div1\");\r\ndiv2.setAttribute(\"class\", \"div2\");\r\nlogo.setAttribute(\"src\",\"assets/images/logo.png\");\r\nlogo.setAttribute(\"alt\",\"logo du site\");\r\nlogo.setAttribute(\"style\", \"height : 100px\");\r\npageTitle.setAttribute(\"class\", \"page-title\");\r\nform.setAttribute(\"method\", \"post\");\r\nform.setAttribute(\"action\", \"\");\r\nform.setAttribute(\"class\", \"form\");\r\nloginInput.setAttribute(\"placeholder\", \"email\");\r\nloginInput.setAttribute(\"type\", \"mail\");\r\npasswordInput.setAttribute(\"placeholder\", \"password\");\r\nregisterButton.setAttribute(\"type\", \"submit\");\r\ngoButton.setAttribute(\"type\", \"submit\");\r\nregisterButtonLink.setAttribute(\"href\",\"https://google.fr\")\r\ngoButtonLink.setAttribute(\"href\", \"https://fr.wikipedia.org\")\r\n\r\npageTitle.appendChild(pageTitleText);\r\nparagrapheImage.appendChild(logo);\r\nregisterButton.appendChild(registerButtonText);\r\ngoButton.appendChild(goButtonText);\r\ngoButtonLink.appendChild(goButton)\r\ndivFormLogin.appendChild(loginInput)\r\ndivFormPassword.appendChild(passwordInput)\r\ndivGo.appendChild(goButtonLink)\r\nform.appendChild(divFormLogin);\r\nform.appendChild(divFormPassword);\r\nform.appendChild(divGo);\r\ndiv2.appendChild(paragrapheImage)\r\ndiv2.appendChild(pageTitle);\r\ndiv1.appendChild(div2);\r\ndiv1.appendChild(form);\r\nregisterButtonLink.appendChild(registerButton)\r\ndiv1.appendChild(registerButtonLink)\r\ndocument.body.appendChild(div1)\r\n\r\nconst create = (element, balise) => {\r\n    element = document.createElement(balise);\r\n    return element;\r\n};\r\n\r\nconst attribute = (element, type, value) => {\r\n    element.setAttribute(type, value);\r\n    return true;\r\n};\r\n\r\nconst display = (elementParent, elementChild, balise1, balise2) => {\r\n    create(elementParent, balise1);\r\n    create(elementChild, balise2);\r\n    elementParent.appendChild(elementChild)\r\n    \r\n    return true;\r\n};\r\n\r\nfor(const key in attribute){\r\n    console.log(key);\r\n    console.log(attribute[key]);\r\n}\r\n*/\n\nvar newUser = new _shared_models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"User\"](\"test@test.com\", \"licorne\", \"Bisounours\");\nconsole.log(newUser); // const user = {\n//     login : \"\",\n//     password : \"\"\n// };\n\nvar setAttribute = function setAttribute(elem, json) {\n  for (var key in json) {\n    elem.setAttribute(key, json[key]);\n  }\n};\n\nvar div1 = document.createElement(\"div\");\nsetAttribute(div1, {\n  \"class\": \"div1\"\n});\n\nvar displayTitle = function displayTitle() {\n  var div2 = document.createElement(\"div\");\n  var titleElement = document.createElement(\"h1\");\n  var textNode = document.createTextNode(\"Worlds of Game\");\n  var logo = document.createElement(\"img\");\n  setAttribute(div2, {\n    \"class\": \"div2\"\n  });\n  setAttribute(logo, {\n    src: \"assets/images/logo.png\",\n    alt: \"logo du site\",\n    style: \"height : 100px\"\n  });\n  titleElement.appendChild(textNode);\n  div2.appendChild(logo);\n  div2.appendChild(titleElement);\n  div1.appendChild(div2);\n};\n\nvar displayLoginForm = function displayLoginForm() {\n  var valid = false;\n  var form = document.createElement(\"form\");\n  var divFormLogin = document.createElement(\"div\");\n  var loginInput = document.createElement(\"input\");\n  var divFormPassword = document.createElement(\"div\");\n  var passwordInput = document.createElement(\"input\");\n  var divGo = document.createElement(\"div\");\n  var goButtonLink = document.createElement(\"a\");\n  var goButton = document.createElement(\"button\");\n  var goButtonText = document.createTextNode(\"Go\");\n  setAttribute(form, {\n    method: \"post\",\n    action: \"\",\n    \"class\": \"form\"\n  });\n  setAttribute(loginInput, {\n    value: newUser.email,\n    placeholder: \"email\",\n    type: \"mail\"\n  });\n  setAttribute(passwordInput, {\n    value: newUser.password,\n    placeholder: \"password\"\n  });\n  setAttribute(goButton, {\n    type: \"submit\"\n  });\n  setAttribute(goButtonLink, {\n    href: \"/home.js\"\n  });\n  goButton.appendChild(goButtonText);\n  goButtonLink.appendChild(goButton);\n  divGo.appendChild(goButtonLink);\n  divFormLogin.appendChild(loginInput);\n  divFormPassword.appendChild(passwordInput);\n  form.appendChild(divFormLogin);\n  form.appendChild(divFormPassword);\n  form.appendChild(divGo);\n  div1.appendChild(form);\n};\n\nvar displayRegisterButton = function displayRegisterButton() {\n  var registerButton = document.createElement(\"button\");\n  var registerButtonText = document.createTextNode(\"Register\");\n  var registerButtonLink = document.createElement(\"a\");\n  setAttribute(registerButtonLink, {\n    href: \"https://google.fr\"\n  });\n  setAttribute(registerButton, {\n    type: \"submit\"\n  });\n  registerButton.appendChild(registerButtonText);\n  registerButtonLink.appendChild(registerButton);\n  div1.appendChild(registerButtonLink);\n};\n\nvar displayLogin = function displayLogin() {\n  displayTitle();\n  displayLoginForm();\n  displayRegisterButton();\n  document.body.appendChild(div1);\n};\n\ndisplayLogin();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/shared/models/user.model.js":
/*!*****************************************!*\
  !*** ./src/shared/models/user.model.js ***!
  \*****************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"User\", function() { return User; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar User = function User(email, password, surname) {\n  _classCallCheck(this, User);\n\n  this.email = email;\n  this.password = password;\n  this.surname = surname;\n};\n\n//# sourceURL=webpack:///./src/shared/models/user.model.js?");

/***/ })

/******/ });