import { WrapperMethods } from "./Wrapper";

export class LoginPage extends WrapperMethods{

    public enterUserName(){
        console.log("UserName entered successfully");
    }
    public enterPassword(){
        console.log("Password entered successfully");
    }
    public clickLogin(){
        console.log("Login button clicked successfully");
    }

    public verifyTitle(){
        console.log("Verify login Page title")
    }
}


// let lp=new LoginPage()
// lp.launchApplication()
// lp.locatorMethod()
// lp.enterUserName()
// lp.enterPassword()
// lp.clickLogin()