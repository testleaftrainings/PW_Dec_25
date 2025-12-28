import test from '@playwright/test'

test("Multiple Window",async({page,context})=>{

await page.goto("https://www.leafground.com/window.xhtml")

//create promise
const [allwindow]=await Promise.all([
//action
context.waitForEvent('page'),
 page.locator("//span[text()='Open Multiple']").click()
])

//[allwindow]-> [p,ch1,ch2.....]
const count=allwindow.context().pages()
console.log(count.length)
allwindow.waitForTimeout(4000)

//Title -> Best way to handle multiple window 
//DashBroad,WebTable -> child page name
let dashBroad:any
let webTable:any

for(let i=0;i<count.length;i++){
    const title=await count[i].title()
    // console.log(title) ->Web Table ,Dashboard
    // await page.waitForTimeout(4000)

    if(title==="Dashboard"){
        //resolve the promise
        dashBroad=count[i]
    }else if(title==="Web Table"){
        webTable=count[i]
    }
}
dashBroad.locator("//input[@id='email']").fill("dilip@testleaf.com")
dashBroad.waitForTimeout(5000)



})