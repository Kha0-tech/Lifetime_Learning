"use strict";
// 2. Implement the interface correctly in all classes
class EmailLogin {
    login() {
        console.log("Email login");
    }
}
class FacebookLogin {
    login() {
        console.log("Facebook login");
    }
}
class GithubLogin {
    login() {
        console.log("Github login");
    }
}
class AppLogin {
    login() {
        console.log("iCloud login");
    }
}
// 3. Fix LoginController to use the correct method
class LoginController {
    constructor(loginInterface) {
        this.loginInterface = loginInterface;
    }
    login() {
        this.loginInterface.login(); // ✅ Fixed typo from "loig" to "login"
    }
}
// 4. Usage Example (Using Dependency Injection)
const emailLogin = new EmailLogin();
const loginController = new LoginController(emailLogin);
loginController.login(); // Output: "Email login"
// Can easily swap authentication methods without modifying LoginController
const githubLogin = new GithubLogin();
const loginController2 = new LoginController(githubLogin);
loginController2.login(); // Output: "Github login"
