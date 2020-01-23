import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Posts } from '../models/posts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})

export class HomeComponent implements OnInit {
  postList: Posts[]=[];

  constructor(private _postService: PostService) {

  }
  ngOnInit() {
    this._postService.getPostsList().subscribe(res => {
      this.postList = res;
    });
  }
}
