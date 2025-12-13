import test, { chromium, firefox, webkit } from "@playwright/test"

//default nature browser-> headless mode
test("Launch the Browser",async()=>{

//launch the browser -> 
let browser= await chromium.launch({channel:"chrome",headless:false})
//launch window -> context
let context= await browser.newContext()
//open the page
let  page= await context.newPage()
//load the url -> goto
 await page.goto("https://www.facebook.com")

 await page.waitForTimeout(4000)

})