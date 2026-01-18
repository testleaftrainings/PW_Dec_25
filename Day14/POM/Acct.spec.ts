import test from '@playwright/test'
import { LTHomePage } from './MyHomePage'

test("POM -Leads",async({page})=>{

    let hp=new LTHomePage(page)
   await  hp.launchApp("http://leaftaps.com/opentaps/control/main")
    await hp.enterUsername("//input[@name='USERNAME']","DemoCsr2")
   await  hp.enterPassword("#password","crmsfa")
    await hp.clickLogin(".decorativeSubmit")
    await hp.clickOnCrmsfa("//a[contains(text(),'CRM')]")
    await hp.clickonAccounts("//a[text()='Accounts")
})