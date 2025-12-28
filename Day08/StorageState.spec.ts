import test from '@playwright/test'

test("StorageState",async({page})=>{

await page.goto("https://login.salesforce.com/?locale=in")
await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")
await page.locator("#password").fill("TestLeaf@2025")
await page.click("#Login")

//storage state -> json -> key:value 
await page.context().storageState({path:"utils/SalesForce_Login.json"})


})