export class AuthService{
  loggedIn = false; 

  itAuthenticated(){
    const promise = new Promise(
      (reslove, rejcet) => {
        setTimeout(() => {
          reslove(this.loggedIn)
        }, 800);
      }
    );
    return promise;
  }

  login(){
    this.loggedIn = true;
  }

  logout(){
    this.loggedIn = false;
  }
}