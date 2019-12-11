import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlatformLocation } from '@angular/common';
import { Users } from '../models/users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    baseUrl: string;
    constructor(private http: HttpClient, pl: PlatformLocation) {
        this.baseUrl = window.location.origin;
    }



    loginUser(user: Users): Observable<boolean> {
        console.log(window.location.origin);
        return this.http.post<boolean>(this.baseUrl + "/api/auth/Login", user).pipe(
            (res) => {
                return res;
            }
        )
    }
}
