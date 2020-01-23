import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-standard-user-navbar',
  templateUrl: './standard-user-navbar.component.html',
  styleUrls: ['./standard-user-navbar.component.css']
})
export class StandardUserNavbarComponent implements OnInit {
  isExpanded = false;
  authority: number;
  isLoggedIn: boolean;
  constructor(private translate: TranslateService, private _auth: AuthService, private _router: Router) {
    translate.setDefaultLang('pl');
  }
  ngOnInit() {

    this.isLoggedInCheck();
    this.getAuthority();
  }
  useLanguage(language: string) {
    this.translate.use(language);
  }
  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
  isLoggedInCheck() {
    this._auth.isLoggedIn().subscribe(res => {
      this.isLoggedIn = res;
      this.getAuthority();

    });
  }
  getAuthority() {
    this._auth.getAuthority().subscribe(res => {
      this.authority = res;
      console.log(res)
    });
  }

  logout() {
    this._auth.logout().subscribe(res => {
      console.log(res)
      this.isLoggedIn = false;
      this.authority = 0;
      this._router.navigate(["/login"]);
      // return res as boolean;
    });
  }
}
