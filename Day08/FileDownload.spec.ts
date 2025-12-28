//File Dowmload -> event listener
//"download"

import test from '@playwright/test'

test("File Download",async({page})=>{

await page.goto("https://www.leafground.com/file.xhtml")

const fileDownload=page.waitForEvent('download')

await page.locator("//span[text()='Download']").click()

const fDL=await fileDownload

await fDL.saveAs("Data/Img1.png")

//await fDL.saveAs("Data/"+fDL.suggestedFilename())

})