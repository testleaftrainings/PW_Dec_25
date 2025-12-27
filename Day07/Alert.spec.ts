//default nature in playwright for alert is auto dismiss
//cancle your alert
import test from '@playwright/test'

test("Auto Dismiss Alert",async({page})=>{

await page.goto("https://www.leafground.com/alert.xhtml")
await page.locator("(//span[text()='Show'])[2]").click()
//await page.waitForTimeout(5000)
})

//Event Listener -> page.once , page.on
//page.once-> its going handle first alert only
test("Handle alert with Page.once",async({page})=>{
    //alert -> dialog
page.once('dialog',alertType=>{
    //what type of alert i'm getting in the webpage
    const type=alertType.type()
    console.log(type)
    //get message from alert box
    console.log(alertType.message())
    if(type==='alert'){
        alertType.accept()
    }else if(type==='confrim'){
        alertType.accept()
    }
})

await page.goto("https://www.leafground.com/alert.xhtml")
//simple
await page.locator("//span[text()='Show']").first().click()
//confrim
await page.locator("(//span[text()='Show'])[2]").click()
})


//page.on -> its going handel all the alerts e2e
test("Handle alert with Page.on",async({page})=>{
    //alert -> dialog
page.on('dialog',alertType=>{
    //what type of alert i'm getting in the webpage
    const type=alertType.type()
    console.log(type)
    //get message from alert box
    console.log(alertType.message())
    if(type==='alert'){
        alertType.accept()
    }else if(type==='confirm'){
        alertType.accept()
    }else if(type==='prompt'){
        alertType.accept("DIlip")
    }
})

await page.goto("https://www.leafground.com/alert.xhtml")
//simple
await page.locator("//span[text()='Show']").first().click()
//confrim
await page.locator("(//span[text()='Show'])[2]").click()
})


test.only("Sweet alert",async({page})=>{

    await page.goto("https://www.leafground.com/alert.xhtml")
await page.locator("(//span[text()='Show'])[3]").click()
await page.locator("//span[@class='ui-icon ui-icon-closethick']").first().click()
await page.waitForTimeout(3000)


})


