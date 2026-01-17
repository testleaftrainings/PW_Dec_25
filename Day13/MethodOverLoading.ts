
class Base{

ElementClick(locator:string):void
ElementClick(locator:string,forceClick:boolean):void


// ElementClick(locator:string){
//     console.log(`Clicking on element with locator: ${locator}`);
// }

ElementClick(locator:string,forceClick?:boolean){
    console.log(`Clicking on element with locator: ${locator} and force click: ${forceClick}`);

    if(forceClick){
        console.log("Performing force click action");
    }else{
        console.log("Performing regular click action");
    }
}
}

let obj=new Base()
obj.ElementClick("#Login")
obj.ElementClick("#Submit",true)