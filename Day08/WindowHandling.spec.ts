import test from '@playwright/test'

test("Handle Single window",async({page,context})=>{

await page.goto("https://www.amazon.in/")
const search= page.locator("#twotabsearchtextbox")
search.fill("Iphone 15")
search.press("Enter")

//create promise
//perform the action
//reslove it

//step 1
const promise=context.waitForEvent('page')

//step 2
await page.locator("//span[text()='iPhone 15 (128 GB) - Black']").first().click()

//switch child page -> resolve
const childPage=await promise

const  price= await childPage.locator("//span[@class='a-price-symbol']/following-sibling::span").first().innerText()
console.log(price)

childPage.close()
//after close the childpage -> control will pass to parent window

await page.locator("//a[contains(text(),'Today')]").click()

await page.waitForTimeout(4000)


})