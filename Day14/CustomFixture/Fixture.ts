//step1 
import {test as basePage, Page} from '@playwright/test'

//step2
export const customFixture=basePage.extend<{SalesForce:any}>({

    //step3
    SalesForce:async({page}:{ page: Page },use: (arg0: Page) => any)=>{

        //step 4
        await page.goto("https://login.salesforce.com/?locale=in")
        await page.fill("#username","dilipkumar.rajendran@testleaf.com")
        await page.fill("#password","TestLeaf@2025")
        await page.click("#Login")
        await page.waitForTimeout(10000)

        //step 5
        await use(page)
    }




})