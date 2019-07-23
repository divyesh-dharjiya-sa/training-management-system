import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  loginUser(email: string, password: string) {
    this.httpClient.post('http://localhost:4000/users/login', {email , password}).subscribe((res) =>{
        console.log(res);
    });
  }
}
