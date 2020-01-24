import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';
import { Posts } from '../models/posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  postList: Posts[] = [];

  myAuthority: number;

    constructor(private _auth: AuthService, private _router: Router, private _postService: PostService) { }

  ngOnInit() {
    this._auth.getAuthority().subscribe(res => {
      this.myAuthority = res;
      if (res != 2)
        this._router.navigate([""])
    });
    this._postService.getPostsList().subscribe(res => {
      this.postList = res;
    });
  }


}
