import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {AuthenticationService} from './authentication.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authenticationService: AuthenticationService) {}

  canActivate(): boolean {
      if (this.authenticationService.loggedIn()) {
        console.log('true');
        return true;
      } else {
        console.log('false');
        this.router.navigate(['/login']);
        return false;
      }
    }
  }