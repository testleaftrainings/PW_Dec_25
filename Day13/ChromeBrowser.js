"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Class_1 = require("./Class");
var obj1 = new Class_1.Browser(89);
obj1.launchBrowser();
console.log(obj1.browserVersion);
//export parent and then we import in the child class
