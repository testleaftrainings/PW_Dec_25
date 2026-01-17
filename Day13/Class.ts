export class Browser{

 browserVersion:number

 launchBrowser(){
    console.log("Launch the Chrome Browser")
 }

 //Default Constructor
//  constructor(){
// console.log("This is Default Constructor of Browser Class")
//  }

 constructor(browserVersion:number){
    this.browserVersion=browserVersion
    console.log("This is Parameterized Constructor of Browser Class with browser name: "+this.browserVersion)

}

 //this keyword-> reffer to current class instance variable,methods
 // differentiate local and instance variable


}
//object need to create outside the class
//create object of the class
let object=new Browser(134)
object.launchBrowser()
console.log(object.browserVersion)