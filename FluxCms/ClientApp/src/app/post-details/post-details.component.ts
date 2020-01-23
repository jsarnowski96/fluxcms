import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Posts } from '../models/posts';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Comment } from '../models/comments';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post: Posts;
  comments: Comment[];
  authority: number;
  id: number;
  constructor(private _ps: PostService, private auth: AuthService, private route: ActivatedRoute) {
    this.post = new Posts();
  }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this._ps.getPostByID(this.id).subscribe(res => {
      this.post = res;
      this._ps.getCommentsForPost(this.post.id).subscribe(res => {
        this.comments = res;


      });

    });

    this.auth.getAuthority().subscribe(res => {
      this.authority = res;
    });
  }

  banComment(event) {
    if (this.authority > 0) {
      var commentId = event.target.id;
      this._ps.banComment(commentId).subscribe(res => {
        if (res == 1)
          alert("Komentarz pomyślnie zbanowany")
        else
          alert("Wystąpił błąd podczas banowania komentarza")
      })
    }
  }
}
