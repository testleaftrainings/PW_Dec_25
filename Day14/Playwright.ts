abstract class Wrapper{

 clickElement(selector:string){
    //await page.click(selector)
    console.log(`Clicking on element with selector: ${selector}`);
}
fillText(selector:string,text:string){
    //await page.locator(selector).fill(text))
    console.log(`Filling text '${text}' into element with selector: ${selector}`);
}
abstract selectOption(selector:string,option:string):void

//selector -> css,xpath
}
//for abstract class we cannot create the object
//let wp=new Wrapper()
class PlaywrightWrapper extends Wrapper{
    selectOption(selector: string, option: string): void {
        console.log(`Selecting option '${option}' from dropdown with selector: ${selector}`);
    }
    
}
let pw=new PlaywrightWrapper()
pw.clickElement(".Login")
pw.fillText("//input[@id='username']","DemoSalesManager")
pw.selectOption("#dropdown","Option1")

//pw.clickElement("#Submit")