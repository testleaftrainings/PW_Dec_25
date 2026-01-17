//access Modifiers-public,private,protected
//public-default-accessible everywhere
//private-only within the class
//protected-within the class and child class
var Locator = /** @class */ (function () {
    function Locator() {
        // function name(params:type) {
        // }
        this.css = "#id";
    }
    Locator.prototype.loactorType = function () {
        console.log("locatortype method in locator class");
    };
    Locator.prototype.xpath = function () {
        console.log("xpath method in locator class");
    };
    Locator.prototype.assertion = function () {
        console.log("assertion method in locator class");
    };
    Locator.prototype.access = function () {
        this.xpath();
        this.assertion();
    };
    return Locator;
}());
var object = new Locator();
object.loactorType();
console.log(object.css);
object.access();
