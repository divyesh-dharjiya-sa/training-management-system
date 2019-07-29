import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUser: string;
  constructor(private authService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.getCurrentUser();
  }
  getCurrentUser() {
    this.currentUser = localStorage.getItem('currentUser');
  }
}
