import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, CanActivate } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  myAuthority: number ;
  constructor(public auth: AuthService, public router: Router) {
    }
  ngOnInit() {

    this.auth.getAuthority().subscribe(res => {
      this.myAuthority = res
      console.log(this.myAuthority)
    });
    console.log(this.myAuthority);
  }

}
