import test from '@playwright/test'

test("Playwright Locators",async({page})=>{

await page.goto("https://parabank.parasoft.com/parabank/index.htm")

//await page.getByRole('button',{name:'Log In'}).click()
await page.getByRole('link',{name:"Forgot login info?"}).click()
//await page.getByRole('combobox',{name:'day'}).selectOption("25")

//await page.getByAltText("ParaBank").click()
await page.getByTitle("ParaBank").click()
await page.getByText("Locations").first().click()

//await page.getByPlaceholder("Search").fill("")
//await page.getByTestId("").click()
})


test.only("getByLable",async({page})=>{

    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.getByLabel("Username").fill("Demosalesmanager")
})