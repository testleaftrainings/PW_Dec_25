import { test } from '@playwright/test'
import { parse } from 'csv-parse/sync'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

//read the value from the csv file -> set the path where file is saved
//fs and path
// const __dirname = path.dirname(fileURLToPath(import.meta.url))
// const value:any[] =parse(fs.readFileSync(path.join(__dirname,"../../Data/SalesForce.csv"),'utf-8'),{
//     columns:true
// })

const a:any[]=parse(fs.readFileSync("Data/SalesForce.csv"),{columns:true})

for(let data of a){

    test(`Read the value from CSV ${data.TCNo}`,async({page})=>{

        await page.goto("https://login.salesforce.com/?locale=in")
        await page.locator("#username").fill(data.Username)
        await page.locator("#password").fill(data.Password)
        await page.locator("#Login").click()
    })




}