import { Component, OnInit } from '@angular/core';
import { Users } from '../models/users';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    user: Users;
    constructor(private _authService: AuthService) {
        this.user = new Users();

    }

  ngOnInit() {
  }

    login(loginForm: any) {
        this.user.username = loginForm.controls.username.value;
        this.user.password = loginForm.controls.password.value;
        console.log(this.user);
        this._authService.loginUser(this.user).subscribe(
            (res) => {
                if (res == true)
                    alert("Użytkownik zalogowany");
                else
                    alert("Błęd logowania");
            }
        );

    }
}