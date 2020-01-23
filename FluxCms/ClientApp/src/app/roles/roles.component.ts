import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  myAuthority: number;

  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit() {
    this._auth.getAuthority().subscribe(res => {
      this.myAuthority = res;
      if (res != 2)
        this._router.navigate([""])
    });
  }

}
