"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPage = void 0;
var Wrapper_1 = require("./Wrapper");
var LoginPage = /** @class */ (function (_super) {
    __extends(LoginPage, _super);
    function LoginPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LoginPage.prototype.enterUserName = function () {
        console.log("UserName entered successfully");
    };
    LoginPage.prototype.enterPassword = function () {
        console.log("Password entered successfully");
    };
    LoginPage.prototype.clickLogin = function () {
        console.log("Login button clicked successfully");
    };
    LoginPage.prototype.verifyTitle = function () {
        console.log("Verify login Page title");
    };
    return LoginPage;
}(Wrapper_1.WrapperMethods));
exports.LoginPage = LoginPage;
// let lp=new LoginPage()
// lp.launchApplication()
// lp.locatorMethod()
// lp.enterUserName()
// lp.enterPassword()
// lp.clickLogin()
