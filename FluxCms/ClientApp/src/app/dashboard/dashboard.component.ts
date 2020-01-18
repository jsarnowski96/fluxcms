import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, CanActivate } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, CanActivate {

  constructor(public auth: AuthService, public router: Router) { }
  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      console.log("dasz" + this.auth.isAuthenticated())
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
  ngOnInit() {
  }

}
