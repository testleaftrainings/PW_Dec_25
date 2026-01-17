import { LoginPage } from "./Pages";

class Logout extends LoginPage{

     public clickOnLogOut(){
        console.log("Clicked on LogOut link successfully");
    }
}

let lo=new Logout()
lo.launchApplication()
lo.locatorMethod()
lo.enterUserName()
lo.enterPassword()
lo.clickLogin()
lo.clickOnLogOut()