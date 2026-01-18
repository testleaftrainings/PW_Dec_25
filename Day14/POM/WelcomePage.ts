import { LTLoginPage } from "./LoginPage";

export class LTWelcomepage extends LTLoginPage{

    async clickOnCrmsfa(selector:string){
        await this.page.click(selector)
    }

    async logOut(selector:string){
        await this.page.click(selector)
    }





}