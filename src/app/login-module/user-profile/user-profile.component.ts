import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../authentication.service';
import {UserService} from '../../user.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
  }

}
