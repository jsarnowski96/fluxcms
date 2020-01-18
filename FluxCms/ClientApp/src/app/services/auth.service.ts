import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlatformLocation } from '@angular/common';
import { Users } from '../models/users';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

    baseUrl: string;
    constructor(private http: HttpClient, pl: PlatformLocation) {
        this.baseUrl = window.location.origin;
    }



  loginUser(user: Users): Observable<number> {
      console.log(window.location.origin);
      return this.http.post<number>(this.baseUrl + "/api/auth/Login", user).pipe(
            (res) => {
                return res;
            }
        )
  }
  getAuthority(): Observable<number>{
    return this.http.get(this.baseUrl + "/api/auth/GetAuthority").pipe(map(res => { return res as number }));
  }

}
