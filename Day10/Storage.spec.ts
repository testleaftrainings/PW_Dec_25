import { context } from '@cucumber/cucumber'
import test from '@playwright/test'

test("Storage State",async({page})=>{

await page.goto("http://leaftaps.com/opentaps/control/main")
await page.locator("#username").fill("Demosalesmanager")
await page.locator("#password").fill("crmsfa")
await page.locator(".decorativeSubmit").click()
await page.locator("//a[contains(text(),'CRM')]").click()

await page.context().storageState({path:'Data/LeafTapsLogin.json'})

})