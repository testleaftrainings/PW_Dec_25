import test from '@playwright/test'

test("Login Page",async({page})=>{

await page.goto("http://leaftaps.com/opentaps/control/main")
await page.locator("#username").fill("Demosalesmanager")
await page.locator("#password").fill("crmsfa")
await page.locator(".decorativeSubmit").click()

let title= await page.title()
console.log(title)

await page.locator("text='CRM/SFA'").click()


})