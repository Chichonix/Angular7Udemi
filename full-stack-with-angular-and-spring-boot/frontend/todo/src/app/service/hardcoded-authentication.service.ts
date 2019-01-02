import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password) {
    // console.log('before ', this.isUserLoggedIn())
    if (username === 'chicho' && password === 'password') {
      sessionStorage.setItem('athenticaterUser', username);
      // console.log('after ', this.isUserLoggedIn())
      return true;
    }
    return false;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('athenticaterUser');
    return !(user === null);
  }

  logout(){
    sessionStorage.removeItem('athenticaterUser');
  }
}
