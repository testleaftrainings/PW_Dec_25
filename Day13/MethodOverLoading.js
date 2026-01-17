var Base = /** @class */ (function () {
    function Base() {
    }
    // ElementClick(locator:string){
    //     console.log(`Clicking on element with locator: ${locator}`);
    // }
    Base.prototype.ElementClick = function (locator, forceClick) {
        console.log("Clicking on element with locator: ".concat(locator, " and force click: ").concat(forceClick));
        if (forceClick) {
            console.log("Performing force click action");
        }
        else {
            console.log("Performing regular click action");
        }
    };
    return Base;
}());
var obj = new Base();
obj.ElementClick("#Login");
obj.ElementClick("#Submit", true);
