//we cannot create the  object of Interface
//connecting class with Interface -> implements
var Implementation = /** @class */ (function () {
    function Implementation() {
    }
    Implementation.prototype.clearText = function (selector) {
        console.log("Clearing text from element with selector: ".concat(selector));
    };
    Implementation.prototype.innerText = function (selector) {
        console.log("Getting inner text from element with selector: ".concat(selector));
        return "Inner Text";
    };
    Implementation.prototype.locator = function (selector) {
        console.log("Locating element with selector: ".concat(selector));
    };
    return Implementation;
}());
var imp = new Implementation();
imp.clearText("#password");
imp.locator("//a[text()='click']");
var text = imp.innerText(".textclass");
console.log(text);
