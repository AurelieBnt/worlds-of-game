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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _shared_models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/models/user.model */ \"./src/shared/models/user.model.js\");\n/* harmony import */ var _shared_components_title_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/components/title.component */ \"./src/shared/components/title.component.js\");\n/* harmony import */ var _shared_components_register_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/components/register-button.component */ \"./src/shared/components/register-button.component.js\");\n/* harmony import */ var _shared_components_loginForm_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/components/loginForm.component */ \"./src/shared/components/loginForm.component.js\");\n\n\n\n\nvar div1 = document.createElement(\"div\");\nvar titleComponent = new _shared_components_title_component__WEBPACK_IMPORTED_MODULE_1__[\"TitleComponent\"](div1); //titleComponent.logo.setAttribute(\"src\", \"assets/images/icone.jpg\" );\n\nnew _shared_components_loginForm_component__WEBPACK_IMPORTED_MODULE_3__[\"LoginForm\"](div1);\nnew _shared_components_register_button_component__WEBPACK_IMPORTED_MODULE_2__[\"RegisterButton\"](div1);\ndocument.body.appendChild(div1);\n/*\r\nconst logoLink = \"image/logo/logo.png\";\r\nlet pageTitle = \"Worlds of Game Society\";\r\nlet login = \"\";\r\nlet password = \"\";\r\n\r\nconst register = null;\r\nconst registerLink = \"/register\";\r\nconst registerText = \"Register\";\r\n\r\nconst go = null;\r\nconst goLink = \"/home\";\r\nconst goText = \"Go\";\r\n\r\nlet valid = false;\r\nconst div2 = document.createElement(\"div\");\r\nconst paragrapheImage = document.createElement(\"p\");\r\nconst logo = document.createElement(\"img\");\r\nconst pageTitle = document.createElement(\"h1\");\r\nconst pageTitleText = document.createTextNode(\"Worlds of Game Session\");\r\nconst form = document.createElement(\"form\");\r\nconst divFormLogin = document.createElement(\"div\");\r\nconst loginInput = document.createElement(\"input\");\r\nconst divFormPassword = document.createElement(\"div\");\r\nconst passwordInput = document.createElement(\"input\");\r\nconst divGo = document.createElement(\"div\");\r\nconst goButtonLink = document.createElement(\"a\");\r\nconst goButton = document.createElement(\"button\");\r\nconst goButtonText = document.createTextNode(\"Go\");\r\nconst registerButton = document.createElement(\"button\");\r\nconst registerButtonText = document.createTextNode(\"Register\");\r\nconst registerButtonLink = document.createElement(\"a\");\r\n\r\ndiv1.setAttribute(\"class\", \"div1\");\r\ndiv2.setAttribute(\"class\", \"div2\");\r\nlogo.setAttribute(\"src\",\"assets/images/logo.png\");\r\nlogo.setAttribute(\"alt\",\"logo du site\");\r\nlogo.setAttribute(\"style\", \"height : 100px\");\r\npageTitle.setAttribute(\"class\", \"page-title\");\r\nform.setAttribute(\"method\", \"post\");\r\nform.setAttribute(\"action\", \"\");\r\nform.setAttribute(\"class\", \"form\");\r\nloginInput.setAttribute(\"placeholder\", \"email\");\r\nloginInput.setAttribute(\"type\", \"mail\");\r\npasswordInput.setAttribute(\"placeholder\", \"password\");\r\nregisterButton.setAttribute(\"type\", \"submit\");\r\ngoButton.setAttribute(\"type\", \"submit\");\r\nregisterButtonLink.setAttribute(\"href\",\"https://google.fr\")\r\ngoButtonLink.setAttribute(\"href\", \"https://fr.wikipedia.org\")\r\n\r\npageTitle.appendChild(pageTitleText);\r\nparagrapheImage.appendChild(logo);\r\nregisterButton.appendChild(registerButtonText);\r\ngoButton.appendChild(goButtonText);\r\ngoButtonLink.appendChild(goButton)\r\ndivFormLogin.appendChild(loginInput)\r\ndivFormPassword.appendChild(passwordInput)\r\ndivGo.appendChild(goButtonLink)\r\nform.appendChild(divFormLogin);\r\nform.appendChild(divFormPassword);\r\nform.appendChild(divGo);\r\ndiv2.appendChild(paragrapheImage)\r\ndiv2.appendChild(pageTitle);\r\ndiv1.appendChild(div2);\r\ndiv1.appendChild(form);\r\nregisterButtonLink.appendChild(registerButton)\r\ndiv1.appendChild(registerButtonLink)\r\nconst create = (element, balise) => {\r\n    element = document.createElement(balise);\r\n    return element;\r\n};\r\n\r\nconst attribute = (element, type, value) => {\r\n    element.setAttribute(type, value);\r\n    return true;\r\n};\r\n\r\nconst display = (elementParent, elementChild, balise1, balise2) => {\r\n    create(elementParent, balise1);\r\n    create(elementChild, balise2);\r\n    elementParent.appendChild(elementChild)\r\n    \r\n    return true;\r\n};\r\n\r\nfor(const key in attribute){\r\n    console.log(key);\r\n    console.log(attribute[key]);\r\n}\r\n*/\n// const newUser = new User(\"test@test.com\", \"licorne\",\"Bisounours\");\n// console.log(newUser);\n// // const user = {\n// //     login : \"\",\n// //     password : \"\"\n// // };\n// const setAttribute = (elem, json) => {\n//     for(const key in json){\n//         elem.setAttribute(key, json[key])\n//     }\n// }\n// const div1 = document.createElement(\"div\");\n// setAttribute(div1, {class : \"div1\"});\n// const displayTitle = () => {\n//     title.div2 = document.createElement(\"div\");\n//     title.titleElement = document.createElement(\"h1\");\n//     title.textNode = document.createTextNode(\"Worlds of Game\");\n//     title.logo = document.createElement(\"img\");\n//     setAttribute(title.div2, {class : \"div2\"});\n//     setAttribute(title.logo, {\n//         src : \"assets/images/logo.png\",\n//         alt : \"logo du site\",\n//         style : \"height : 100px\"\n//     });\n//     title.titleElement.appendChild(title.textNode);\n//     title.div2.appendChild(title.logo);\n//     title.div2.appendChild(title.titleElement);\n//     div1.appendChild(title.div2);\n// };\n// const displayLoginForm = () => {\n//     let valid = false;\n//     const form = document.createElement(\"form\");\n//     const divFormLogin = document.createElement(\"div\");\n//     const loginInput = document.createElement(\"input\");\n//     const divFormPassword = document.createElement(\"div\");\n//     const passwordInput = document.createElement(\"input\");\n//     const divGo = document.createElement(\"div\");\n//     const goButtonLink = document.createElement(\"a\");\n//     const goButton = document.createElement(\"button\");\n//     const goButtonText = document.createTextNode(\"Go\");\n//     setAttribute(form, {\n//         method : \"post\",\n//         action : \"\",\n//         class :\"form\"\n//     });\n//     setAttribute(loginInput, {\n//         value : newUser.email,\n//         placeholder : \"email\",\n//         type : \"mail\",\n//     });\n//     setAttribute(passwordInput, {\n//         value : newUser.password,\n//         placeholder : \"password\"\n//     });\n//     setAttribute(goButton, {type : \"submit\"});\n//     setAttribute(goButtonLink, {href : \"/home.js\"});\n//     goButton.appendChild(goButtonText);\n//     goButtonLink.appendChild(goButton);\n//     divGo.appendChild(goButtonLink);\n//     divFormLogin.appendChild(loginInput);\n//     divFormPassword.appendChild(passwordInput);\n//     form.appendChild(divFormLogin);\n//     form.appendChild(divFormPassword);\n//     form.appendChild(divGo);\n//     div1.appendChild(form);\n// };\n// const displayRegisterButton = () => {\n//     const registerButton = document.createElement(\"button\");\n//     const registerButtonText = document.createTextNode(\"Register\");\n//     const registerButtonLink = document.createElement(\"a\");\n//     setAttribute(registerButtonLink, {href : \"https://google.fr\"});\n//     setAttribute(registerButton, {type : \"submit\"});\n//     registerButton.appendChild(registerButtonText);\n//     registerButtonLink.appendChild(registerButton);\n//     div1.appendChild(registerButtonLink);\n// };\n// const displayLogin = () => {\n//     displayTitle();\n//     displayLoginForm();\n//     displayRegisterButton();\n//     document.body.appendChild(div1);\n// };\n// displayLogin();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/shared/components/loginForm.component.js":
/*!******************************************************!*\
  !*** ./src/shared/components/loginForm.component.js ***!
  \******************************************************/
/*! exports provided: LoginForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LoginForm\", function() { return LoginForm; });\n/* harmony import */ var _super_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./super-component */ \"./src/shared/components/super-component.js\");\n/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/user.model */ \"./src/shared/models/user.model.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _get(target, property, receiver) { if (typeof Reflect !== \"undefined\" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }\n\nfunction _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar LoginForm =\n/*#__PURE__*/\nfunction (_Components) {\n  _inherits(LoginForm, _Components);\n\n  function LoginForm(div1) {\n    var _this;\n\n    _classCallCheck(this, LoginForm);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(LoginForm).call(this));\n    var user = new _models_user_model__WEBPACK_IMPORTED_MODULE_1__[\"User\"](\"licorne\", \"bisournours\");\n    var form = document.createElement(\"form\");\n    var divFormLogin = document.createElement(\"div\");\n    var loginInput = document.createElement(\"input\");\n    var divFormPassword = document.createElement(\"div\");\n    var passwordInput = document.createElement(\"input\");\n    var divGo = document.createElement(\"div\");\n    _this.goButtonLink = document.createElement(\"a\");\n    var goButton = document.createElement(\"button\");\n    _this.goButtonText = document.createTextNode(\"Go\");\n\n    _get(_getPrototypeOf(LoginForm.prototype), \"setAttribute\", _assertThisInitialized(_this)).call(_assertThisInitialized(_this), form, {\n      method: \"post\",\n      action: \"\",\n      \"class\": \"form\"\n    });\n\n    _get(_getPrototypeOf(LoginForm.prototype), \"setAttribute\", _assertThisInitialized(_this)).call(_assertThisInitialized(_this), loginInput, {\n      value: user.email,\n      placeholder: \"email\",\n      type: \"mail\"\n    });\n\n    _get(_getPrototypeOf(LoginForm.prototype), \"setAttribute\", _assertThisInitialized(_this)).call(_assertThisInitialized(_this), passwordInput, {\n      value: user.password,\n      placeholder: \"password\"\n    });\n\n    _get(_getPrototypeOf(LoginForm.prototype), \"setAttribute\", _assertThisInitialized(_this)).call(_assertThisInitialized(_this), goButton, {\n      type: \"submit\"\n    });\n\n    _get(_getPrototypeOf(LoginForm.prototype), \"setAttribute\", _assertThisInitialized(_this)).call(_assertThisInitialized(_this), _this.goButtonLink, {\n      href: \"/home.js\"\n    });\n\n    goButton.appendChild(_this.goButtonText);\n\n    _this.goButtonLink.appendChild(goButton);\n\n    divGo.appendChild(_this.goButtonLink);\n    divFormLogin.appendChild(loginInput);\n    divFormPassword.appendChild(passwordInput);\n    form.appendChild(divFormLogin);\n    form.appendChild(divFormPassword);\n    form.appendChild(divGo);\n    div1.appendChild(form);\n    return _this;\n  }\n\n  return LoginForm;\n}(_super_component__WEBPACK_IMPORTED_MODULE_0__[\"Components\"]);\n\n//# sourceURL=webpack:///./src/shared/components/loginForm.component.js?");

/***/ }),

/***/ "./src/shared/components/register-button.component.js":
/*!************************************************************!*\
  !*** ./src/shared/components/register-button.component.js ***!
  \************************************************************/
/*! exports provided: RegisterButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RegisterButton\", function() { return RegisterButton; });\n/* harmony import */ var _super_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./super-component */ \"./src/shared/components/super-component.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _get(target, property, receiver) { if (typeof Reflect !== \"undefined\" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }\n\nfunction _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\nvar RegisterButton =\n/*#__PURE__*/\nfunction (_Components) {\n  _inherits(RegisterButton, _Components);\n\n  function RegisterButton(div1) {\n    var _this;\n\n    _classCallCheck(this, RegisterButton);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(RegisterButton).call(this));\n    var registerButton = document.createElement(\"button\");\n    _this.registerButtonText = document.createTextNode(\"Register\");\n    _this.registerButtonLink = document.createElement(\"a\");\n\n    _get(_getPrototypeOf(RegisterButton.prototype), \"setAttribute\", _assertThisInitialized(_this)).call(_assertThisInitialized(_this), _this.registerButtonLink, {\n      href: \"https://google.fr\"\n    });\n\n    _get(_getPrototypeOf(RegisterButton.prototype), \"setAttribute\", _assertThisInitialized(_this)).call(_assertThisInitialized(_this), registerButton, {\n      type: \"submit\"\n    });\n\n    registerButton.appendChild(_this.registerButtonText);\n\n    _this.registerButtonLink.appendChild(registerButton);\n\n    div1.appendChild(_this.registerButtonLink);\n    return _this;\n  }\n\n  return RegisterButton;\n}(_super_component__WEBPACK_IMPORTED_MODULE_0__[\"Components\"]);\n\n//# sourceURL=webpack:///./src/shared/components/register-button.component.js?");

/***/ }),

/***/ "./src/shared/components/super-component.js":
/*!**************************************************!*\
  !*** ./src/shared/components/super-component.js ***!
  \**************************************************/
/*! exports provided: Components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Components\", function() { return Components; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Components =\n/*#__PURE__*/\nfunction () {\n  function Components(elem, json) {\n    _classCallCheck(this, Components);\n\n    this.elem = elem;\n    this.json = json;\n  }\n\n  _createClass(Components, [{\n    key: \"setAttribute\",\n    value: function setAttribute(elem, json) {\n      for (var key in json) {\n        elem.setAttribute(key, json[key]);\n      }\n\n      ;\n    }\n  }]);\n\n  return Components;\n}();\n\n//# sourceURL=webpack:///./src/shared/components/super-component.js?");

/***/ }),

/***/ "./src/shared/components/title.component.js":
/*!**************************************************!*\
  !*** ./src/shared/components/title.component.js ***!
  \**************************************************/
/*! exports provided: TitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TitleComponent\", function() { return TitleComponent; });\n/* harmony import */ var _super_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./super-component */ \"./src/shared/components/super-component.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _get(target, property, receiver) { if (typeof Reflect !== \"undefined\" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }\n\nfunction _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\nvar TitleComponent =\n/*#__PURE__*/\nfunction (_Components) {\n  _inherits(TitleComponent, _Components);\n\n  function TitleComponent(div1) {\n    var _this;\n\n    _classCallCheck(this, TitleComponent);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(TitleComponent).call(this));\n    var titleElement = document.createElement(\"h1\");\n    _this.textNode = document.createTextNode(\"Worlds of Game\");\n    _this.logo = document.createElement(\"img\");\n\n    _get(_getPrototypeOf(TitleComponent.prototype), \"setAttribute\", _assertThisInitialized(_this)).call(_assertThisInitialized(_this), _this.logo, {\n      src: \"assets/images/logo.png\",\n      alt: \"logo du site\",\n      style: \"height : 100px\"\n    });\n\n    titleElement.appendChild(_this.textNode);\n    div1.appendChild(_this.logo);\n    div1.appendChild(titleElement);\n    return _this;\n  }\n\n  return TitleComponent;\n}(_super_component__WEBPACK_IMPORTED_MODULE_0__[\"Components\"]);\n\n//# sourceURL=webpack:///./src/shared/components/title.component.js?");

/***/ }),

/***/ "./src/shared/models/user-adress.model.js":
/*!************************************************!*\
  !*** ./src/shared/models/user-adress.model.js ***!
  \************************************************/
/*! exports provided: UserAdress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserAdress\", function() { return UserAdress; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar UserAdress = function UserAdress(phone, adress, city, zipCode) {\n  _classCallCheck(this, UserAdress);\n\n  this.phone = phone;\n  this.adress = adress;\n  this.city = city;\n  this.zipcode = zipCode;\n};\n\n//# sourceURL=webpack:///./src/shared/models/user-adress.model.js?");

/***/ }),

/***/ "./src/shared/models/user-informations.model.js":
/*!******************************************************!*\
  !*** ./src/shared/models/user-informations.model.js ***!
  \******************************************************/
/*! exports provided: UserInformations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserInformations\", function() { return UserInformations; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar UserInformations = function UserInformations(gender, firstName, lastName) {\n  _classCallCheck(this, UserInformations);\n\n  this.gender = gender;\n  this.firstName = firstName;\n  this.lastName = lastName;\n};\n\n//# sourceURL=webpack:///./src/shared/models/user-informations.model.js?");

/***/ }),

/***/ "./src/shared/models/user.model.js":
/*!*****************************************!*\
  !*** ./src/shared/models/user.model.js ***!
  \*****************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"User\", function() { return User; });\n/* harmony import */ var _user_adress_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-adress.model */ \"./src/shared/models/user-adress.model.js\");\n/* harmony import */ var _user_informations_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-informations.model */ \"./src/shared/models/user-informations.model.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\nvar User = function User(email, password, surname) {\n  _classCallCheck(this, User);\n\n  this.email = email;\n  this.password = password;\n  this.surname = surname;\n  this.userAdress = new _user_adress_model__WEBPACK_IMPORTED_MODULE_0__[\"UserAdress\"]();\n  this.userInformations = new _user_informations_model__WEBPACK_IMPORTED_MODULE_1__[\"UserInformations\"]();\n};\n\n//# sourceURL=webpack:///./src/shared/models/user.model.js?");

/***/ })

/******/ });