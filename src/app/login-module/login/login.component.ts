import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../authentication.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginUserData = {};
  currentUser = new Subject<any> ();
  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService) {
    if (this.authenticationService.loggedIn()) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required , Validators.email]),
      password: new FormControl('', [Validators.required , Validators.minLength(6)])
    });

  }

  onSubmit() {
    this.authenticationService.loginUser(this.loginForm.value.email , this.loginForm.value.password)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          localStorage.setItem('currentUser' , res.currentUser);
          localStorage.setItem('userId' , res.userId);
          this.router.navigate(['/carousel']);
        },
        err => console.log(err)
      );
    this.loginForm.reset();
  }

}
