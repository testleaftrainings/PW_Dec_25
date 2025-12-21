import test, { expect } from '@playwright/test'

test("Playwright Assertion Auto retry",async({page})=>{

await page.goto("https://www.leafground.com/input.xhtml")

let enabled =page.getByPlaceholder("Babu Manickam")
//hard assert -> expect is failed it not run the next line code
//soft asser -> expect.soft(condition) -> expect is failed also it run line of code
//await expect.soft(enabled).toBeDisabled({timeout:10000})
await expect.soft(enabled).toBeEnabled()
enabled.fill("Dilip")
console.log("Assertion Passed")

await expect(page.getByPlaceholder("Disabled")).toBeDisabled()

})

test.only("Non retry assertion",async({page})=>{

await page.goto("http://leaftaps.com/opentaps/control/main")

const expectTitle =await page.title()
const actualTitle="LeafTaps"
expect(actualTitle).toEqual(expectTitle)
console.log("Assertion is passed...")


})