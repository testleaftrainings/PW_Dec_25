import test from '@playwright/test'

test.use({storageState:"utils/SalesForce_Login.json"})

test("Use the Storage state",async({page})=>{
await page.goto("https://testleaf.lightning.force.com/lightning/page/home")
await page.locator("//span[text()='Accounts']").click()
})


test("Use the Storage state Leads ",async({page})=>{
await page.goto("https://testleaf.lightning.force.com/lightning/page/home")
await page.locator("//span[text()='Cases']").click()
})