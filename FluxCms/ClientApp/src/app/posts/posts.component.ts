import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

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
