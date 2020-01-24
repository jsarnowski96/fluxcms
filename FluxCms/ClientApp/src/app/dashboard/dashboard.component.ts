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
  username: string;
  postList: Posts[];

  addPost: boolean = false;
  constructor(public auth: AuthService, public router: Router, private _postService: PostService) {
    this.username = "";
    }
  ngOnInit() {

    this.auth.getAuthority().subscribe(res => {
      this.myAuthority = res
      console.log(this.myAuthority);
      if (res == 2) {
        this._postService.getPostsList().subscribe(res => {
          this.postList = res
          console.log(this.postList)
        });
      }

    });
    this.auth.getUserName().subscribe(res => {
      console.log(res)
      this.username = res
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
