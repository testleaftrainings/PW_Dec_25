import { customFixture } from "./Fixture";

customFixture("SalesForce Application Sanity Testing",async({SalesForce})=>{

   const title= await SalesForce.title()
 console.log("Title of the page:",title)

 await SalesForce.click("//div[@class='slds-icon-waffle']")


})