export class AuthService {
  loggedIn = false;

  isAuthenticated(): Promise<boolean> {
    console.log('Auth Guard Called....');
    const promise:Promise<boolean> = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.loggedIn);
        }, 5000);
      }
    );
    return promise;
  }


}
