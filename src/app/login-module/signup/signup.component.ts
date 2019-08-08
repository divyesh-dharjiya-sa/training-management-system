import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../authentication.service';
import {Router} from '@angular/router';
import {UserService} from '../../user.service';
import {first} from 'rxjs/operators';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  constructor(private router: Router,
              private authenticationService: AuthenticationService,
              private userService: UserService) {
    if (this.authenticationService.loggedIn()) {
      this.router.navigate(['/login']);
    }
  }

  ngOnInit() {
    this.signupForm = new FormGroup({
      firstName: new FormControl('', [Validators.required , Validators.minLength(5)]),
      lastName: new FormControl('', [Validators.required , Validators.minLength(5)]),
      gender: new FormControl('male', [Validators.required]),
      email: new FormControl('', [Validators.required , Validators.email]),
      password: new FormControl('', [Validators.required , Validators.minLength(6)])
    });
  }

  onSubmit() {
    this.authenticationService.registerUser(this.signupForm.value)
      .subscribe(
        res => {
          this.router.navigate(['/login']);
        },
        err => console.log(err)
      );
    this.signupForm.reset();
  }

}
