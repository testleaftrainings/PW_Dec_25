interface PlaywrightInterface{
    //100% abstract class
    clearText(selector:string):void
    innerText(selector:string):string
    locator(selector:string):void
}
//we cannot create the  object of Interface
//connecting class with Interface -> implements
class Implementation implements PlaywrightInterface{
    clearText(selector: string): void {
        console.log(`Clearing text from element with selector: ${selector}`);
    }
    innerText(selector: string): string {
       console.log(`Getting inner text from element with selector: ${selector}`);
       return "Inner Text"
    }
    locator(selector: string): void {
        console.log(`Locating element with selector: ${selector}`);
    }
}

let imp=new Implementation()
imp.clearText("#password")
imp.locator("//a[text()='click']")
const text=imp.innerText(".textclass")
console.log(text)