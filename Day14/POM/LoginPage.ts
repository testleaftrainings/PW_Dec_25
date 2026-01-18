
import {Page} from '@playwright/test'
export class LTLoginPage{

//step 1:
page:Page
//page -> variable(user defined)
//Page->imported from playwright

//step 2: constructor paramter
constructor(page:Page){
    this.page=page
}

//step 3: async method
async launchApp(url:string){
   await this.page.goto(url) 
}

async enterUsername(selector:string,username:string){
    await this.page.locator(selector).fill(username)
}

async enterPassword(selector:string,password:string){
    await this.page.locator(selector).fill(password)
}

async clickLogin(selector:string){
    await this.page.click(selector)
}

}