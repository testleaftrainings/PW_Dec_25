import test from '@playwright/test'

test.describe("Test Describe",()=>{

    test.describe.configure({mode:'parallel',retries:1})

    test("TestCase 1",async({page})=>{
    await page.goto("https://login.salesforce.com/?locale=in")
        await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")
        await page.locator("#password").fill("TestLeaf@2025")
        await page.locator("#Login").click()
    })

    test("TestCase 2",async({page})=>{
    await page.goto("https://login.salesforce.com/?locale=in")
        await page.locator("#usernam").fill("dilipkumar@testleaf.com")
        await page.locator("#password").fill("TestLeaf@2025")
        await page.locator("#Login").click()
    })

    test("TestCase 3",async({page})=>{
    await page.goto("https://login.salesforce.com/?locale=in")
        await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")
        await page.locator("#password").fill("TestLeaf@2025")
        await page.locator("#Login").click()
    })



















})