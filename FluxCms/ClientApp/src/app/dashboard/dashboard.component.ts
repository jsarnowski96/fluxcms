import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, CanActivate } from '@angular/router';
import { PostService } from '../services/post.service';
import { Posts } from '../models/posts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  myAuthority: number;
  postList: Posts[];

  addPost: boolean = false;
  constructor(public auth: AuthService, public router: Router, private _postService: PostService) {
    }
  ngOnInit() {

    this.auth.getAuthority().subscribe(res => {
      this.myAuthority = res
      console.log(this.myAuthority)
    });
    console.log(this.myAuthority);
    this._postService.getPostsList().subscribe(res => {
      this.postList = res
      console.log(this.postList)
    });
  }
  reloadPosts() {
    this._postService.getPostsList().subscribe(res => {
      this.postList = res
      console.log(this.postList)
    });
  }
  createPost() {
    this.addPost = !this.addPost;
  }

}
