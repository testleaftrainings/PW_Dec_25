import test from '@playwright/test'

test("Handle with index value",async({page})=>{

await page.goto("https://www.leafground.com/frame.xhtml")

const totalFrame=page.frames()
console.log("total number of frames :"+totalFrame.length)
//main page -> 1st frame
//index value start from '0' 
//mp-[0],f1[1],f2[2],f[3],f[4]
//swtiching to frame1
const frame1=totalFrame[1]
await frame1.locator("#Click").click()


//nested frame
const frame4=totalFrame[4]
await frame4.locator("#Click").click()

})