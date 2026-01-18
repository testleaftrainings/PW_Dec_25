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
var Wrapper = /** @class */ (function () {
    function Wrapper() {
    }
    Wrapper.prototype.clickElement = function (selector) {
        //await page.click(selector)
        console.log("Clicking on element with selector: ".concat(selector));
    };
    Wrapper.prototype.fillText = function (selector, text) {
        //await page.locator(selector).fill(text))
        console.log("Filling text '".concat(text, "' into element with selector: ").concat(selector));
    };
    return Wrapper;
}());
//for abstract class we cannot create the object
//let wp=new Wrapper()
var PlaywrightWrapper = /** @class */ (function (_super) {
    __extends(PlaywrightWrapper, _super);
    function PlaywrightWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PlaywrightWrapper.prototype.selectOption = function (selector, option) {
        console.log("Selecting option '".concat(option, "' from dropdown with selector: ").concat(selector));
    };
    return PlaywrightWrapper;
}(Wrapper));
var pw = new PlaywrightWrapper();
pw.clickElement(".Login");
pw.fillText("//input[@id='username']", "DemoSalesManager");
pw.selectOption("#dropdown", "Option1");
//pw.clickElement("#Submit")
