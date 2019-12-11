import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../services/registration.service';
import { Users } from '../models/users';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
    user: Users;
    constructor(private registrationService: RegistrationService, ) {
        this.user = new Users();

    }

  ngOnInit() {
  }

    addUser(registerForm:any) {
        console.log(registerForm);
        this.user.username = registerForm.controls.username.value;
        this.user.password = registerForm.controls.password.value;
        console.log(this.user);
        this.registrationService.register(this.user).subscribe(
            (res) => {
                if (res == 1)
                    alert("Użytkownik dodany");
                else
                    alert("Błąd podczas dodawania użytkownika");
            }
        );

    }
}
