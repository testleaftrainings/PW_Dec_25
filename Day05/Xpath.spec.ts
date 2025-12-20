import test from '@playwright/test'

test("Using Xpath",async({page})=>{

await page.goto("http://leaftaps.com/opentaps/control/main")
await page.locator("//input[@id='username']").fill("Demosalesmanager")
await page.locator("(//input[@class='inputLogin'])[2]").fill("crmsfa")
await page.locator("//input[@class='decorativeSubmit']").click()

//await page.fill("//input[@id='username']","Demosalesmanager")

//let val=await page.locator("")
//await val.fill("Iphone")
//await val.press("Enter")

let title= await page.title()
console.log(title)

//await page.locator("text='CRM/SFA'").click()
await page.click("//a[contains(text(),'CRM')]")


})