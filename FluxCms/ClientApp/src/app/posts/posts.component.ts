import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Posts } from '../models/posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  postList: Posts[] = [];

  constructor(private _postService: PostService) {

  }

  ngOnInit() {
    this._postService.getPostsList().subscribe(res => {
      this.postList = res;
    });
  }
}
