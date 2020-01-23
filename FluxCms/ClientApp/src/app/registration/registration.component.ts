import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../services/registration.service';
import { Users } from '../models/users';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user: Users;
  regisFG: FormGroup;
  constructor(private registrationService: RegistrationService, private fb: FormBuilder, private _router: Router) {
        this.user = new Users();

    }

  ngOnInit() {
    this.regisFG = this.fb.group({
      username: new FormControl(this.user.username, [Validators.required]),
      password: new FormControl(this.user.password, [Validators.required]),
      name: new FormControl(this.user.firstname, [Validators.required]),
      lastname: new FormControl(this.user.lastname, [Validators.required]),
      phoneNumber: new FormControl(this.user.phone, [Validators.required]),
      email: new FormControl(this.user.email, [Validators.required, Validators.email])
    })

  }
  get username() { return this.regisFG.get('username') }
  get password() { return this.regisFG.get('password') }
  get name() { return this.regisFG.get('name') }
  get lastname() { return this.regisFG.get('lastname') }
  get phoneNumber() { return this.regisFG.get('phoneNumber') }
  get email() { return this.regisFG.get('email') }

    addUser(registerForm:any) {

      this.regisFG.markAllAsTouched();


      if (this.regisFG.valid) {

        this.user.username = registerForm.controls.username.value;
        this.user.password = registerForm.controls.password.value;
        this.user.firstname = registerForm.controls.name.value;
        this.user.lastname = registerForm.controls.lastname.value;
        this.user.phone = parseInt(registerForm.controls.phoneNumber.value);
        this.user.email = registerForm.controls.email.value;

        this.user.authority = 1;

        this.registrationService.register(this.user).subscribe(
          (res) => {
            if (res == 1) {
              alert("Użytkownik dodany");
              this._router.navigate(["/login"]);

            }
            else
              alert("Błąd podczas dodawania użytkownika");
          }
        );
      }
    }
}
