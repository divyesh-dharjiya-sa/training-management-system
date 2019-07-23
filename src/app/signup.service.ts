import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './login-module/user.model';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private httpClient: HttpClient) { }

  postUserData(user: User) {
    console.log(user);
    this.httpClient.post('http://localhost:4000/users/signup', user).subscribe((res) => {
          console.log(res);
    });
  }
}
