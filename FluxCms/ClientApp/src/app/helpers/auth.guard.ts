import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthGuardService implements CanActivate {
  baseUrl: string;
  constructor(public auth: AuthService, public router: Router, private http: HttpClient ) {
    this.baseUrl = window.location.origin;

  }
  canActivate(): boolean {
    var result = false;
    this.http.get(this.baseUrl + "/api/auth/CanAccess").subscribe(res => {

      result = res as boolean;
      if (result == false) {

        this.router.navigate(['/login']);
        return result
      }
      if (result == true)
        return result;

    },
      err => {
        console.log(err);
        return false;
      }
    )

 
    return true;
  }
}
