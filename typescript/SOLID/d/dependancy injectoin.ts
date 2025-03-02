//depency injection
class LoginProcess {
  login() {
    console.log("Login with email");
  }
}

class LoginController {
  private loginProcess: LoginProcess;
  constructor(loginProcess: LoginProcess) {
    this.loginProcess = loginProcess;
  }

  login() {
    this.loginProcess.login();
  }
}

const emailLogin = new LoginProcess();
const userLogin = new LoginController(emailLogin);
userLogin.login();


