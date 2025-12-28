import test from '@playwright/test'

//file upload-> directly upload and Event listener

//tag name -> input and type=file
test("Direct Uplaod the file",async({page})=>{
    await page.goto("https://www.leafground.com/file.xhtml")
    const file= page.locator("(//input[@type='file'])[1]")
    // setInputFiles(path)
    await file.setInputFiles("Data/XPath Cheat Sheet.pdf")

})

test("Upload File with Event listener",async({page})=>{
await page.goto("https://www.leafground.com/file.xhtml")
//not having tagname as input and type='file'
const filechooser=page.waitForEvent('filechooser')
await page.locator("(//input[@type='file'])[1]").click()
const res=await filechooser

await res.setFiles("Data/TestLeaf Logo (1).png")

})


test.only("Upload multiple files",async({page})=>{

await page.goto("https://www.leafground.com/file.xhtml")
const mulFiles= page.locator("(//input[@type='file'])[2]")
await mulFiles.setInputFiles(["Data/TestLeaf Logo (1).png", "Data/TestLeaf Logo (2).png"])

})