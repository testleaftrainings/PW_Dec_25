"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Browser = void 0;
var Browser = /** @class */ (function () {
    //Default Constructor
    //  constructor(){
    // console.log("This is Default Constructor of Browser Class")
    //  }
    function Browser(browserVersion) {
        this.browserVersion = browserVersion;
        console.log("This is Parameterized Constructor of Browser Class with browser name: " + this.browserVersion);
    }
    Browser.prototype.launchBrowser = function () {
        console.log("Launch the Chrome Browser");
    };
    return Browser;
}());
exports.Browser = Browser;
//object need to create outside the class
//create object of the class
var object = new Browser(134);
object.launchBrowser();
console.log(object.browserVersion);
