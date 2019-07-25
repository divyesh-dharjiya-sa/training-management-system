import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private registerUrl = 'http://localhost:4000/users/signup';
  private loginUrl = 'http://localhost:4000/users/login';

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  registerUser(user) {
    return this.httpClient.post<any>(this.registerUrl, user);
  }

  loginUser(email: string , password: string) {
    return this.httpClient.post<any>(this.loginUrl, {email, password});
  }

  logoutUser() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }
}
