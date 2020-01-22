import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
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
    });
  }

  logout() {
    this._auth.logout().subscribe(res => {
      console.log(res)
      this.isLoggedIn = false;
      this.authority = 0;
      this._router.navigate([""]);
     // return res as boolean;
    });
  }
}
