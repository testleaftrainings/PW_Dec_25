import test from '@playwright/test'

test.skip("Test.Skip",async({page})=>{
    await page.goto("https://www.facebook.com")
})
test("Test",async({page})=>{
    await page.goto("https://www.google.com")
})

test.fail("test.fail",async({page})=>{
    await page.goto("https://www.amazon.in")
})

test.fixme("test.fixme",async({page})=>{
    await page.goto("https://login.salesforce.com/?locale=in")
        await page.locator("#username").fill("dilip@testleaf.com")
        await page.locator("#password").fill("Test@2026")
        await page.locator("#Login").click()
})

test("test.info",async({page})=>{

    test.info().annotations.push({type:'Smoke Testing',description:'Testing Login Function'},
        {type:'Author',description:'Dilip'})

    await page.goto("https://login.salesforce.com/?locale=in")
        await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")
        await page.locator("#password").fill("TestLeaf@2025")
        await page.locator("#Login").click()
})

test.only("test.only",async({page})=>{
    await page.goto("https://www.amazon.in")
})

