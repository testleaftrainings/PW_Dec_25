import test from '@playwright/test' 

test("Handling DropDown with selectoptions",async({page})=>{

await page.goto("https://www.leafground.com/select.xhtml")

//.first(),.last(),.nth(index)
//nth(1),nth(2)
//await page.locator(".ui-selectonemenu").first()
//await page.locator(".inputLogin").first().fill("Demosalesmanager")


//await page.selectOption(".ui-selectonemenu",{value:""})
//await page.selectOption(".ui-selectonemenu",{label:"Playwright"})
await page.selectOption(".ui-selectonemenu",{index:3})
//index start from 0

//non select dropdown

await page.locator("[id='j_idt87:country_label']").click()
await page.locator("[id='j_idt87:country_2']").click()

})