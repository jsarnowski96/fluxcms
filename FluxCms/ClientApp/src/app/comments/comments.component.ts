import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

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
