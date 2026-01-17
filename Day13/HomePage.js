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
var Pages_1 = require("./Pages");
var HomePage = /** @class */ (function (_super) {
    __extends(HomePage, _super);
    function HomePage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HomePage.prototype.verifyTitle = function () {
        console.log("Verify Home Page title");
    };
    HomePage.prototype.clickOnCrmsfa = function () {
        console.log("Clicked on Crmsfa link successfully");
    };
    HomePage.prototype.clickOnLogOut = function () {
        console.log("Clicked on LogOut link successfully");
    };
    return HomePage;
}(Pages_1.LoginPage));
var hp = new HomePage();
hp.launchApplication();
hp.locatorMethod();
hp.enterUserName();
hp.enterPassword();
hp.clickLogin();
hp.verifyTitle();
hp.clickOnCrmsfa();
