import loginInfo from "../../Data/SalesForce.json"

import test from '@playwright/test'

for(let data of loginInfo){

test(`Read the Value from JSON ${data.Tc_No}`,async({page})=>{

    await page.goto("https://login.salesforce.com/?locale=in")
        await page.locator("#username").fill(data.Username)
        await page.locator("#password").fill(data.Password)
        await page.locator("#Login").click()

})



}