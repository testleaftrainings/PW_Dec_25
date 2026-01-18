import { LTWelcomepage } from "./WelcomePage";

export class LTHomePage extends LTWelcomepage{

    async clickonLeads(selector:string){
        await this.page.click(selector)
    }

    async clickonAccounts(selector:string){
        await this.page.click(selector)
    }

    async clickonContacts(selector:string){
        await this.page.click(selector)
    }

}