import test from '@playwright/test'

test("Page Fixture",async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")
await page.waitForTimeout(3000)
})