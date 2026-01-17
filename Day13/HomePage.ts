import { LoginPage } from "./Pages";

class HomePage extends LoginPage{
    
    public verifyTitle(){
        console.log("Verify Home Page title")
    }

    public clickOnCrmsfa(){
        console.log("Clicked on Crmsfa link successfully");
    }

    public clickOnLogOut(){
        console.log("Clicked on LogOut link successfully");
    }
}


let hp=new HomePage()
hp.launchApplication()
hp.locatorMethod()
hp.enterUserName()
hp.enterPassword()
hp.clickLogin()
hp.verifyTitle()
hp.clickOnCrmsfa()
