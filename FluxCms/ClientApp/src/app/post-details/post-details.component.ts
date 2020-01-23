import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Posts } from '../models/posts';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Comment } from '../models/comments';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post: Posts;
  comments: Comment[];
  newComment: Comment;
  commentFG: FormGroup;
  authority: number;
  id: number;
  constructor(private _ps: PostService, private auth: AuthService, private route: ActivatedRoute, private fb: FormBuilder) {
    this.post = new Posts();
    this.newComment = new Comment();
  }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this._ps.getPostByID(this.id).subscribe(res => {
      this.post = res;
      this._ps.getCommentsForPost(this.post.id).subscribe(res => {
        this.comments = res;


      });
     
    });
    this.commentFG = this.fb.group({
      nick: new FormControl(this.newComment.createdBy, [Validators.required]),
      comment: new FormControl(this.newComment.body, [Validators.required])
    })
    this.auth.getAuthority().subscribe(res => {
      this.authority = res;
    });
  }
  get nick() { return this.commentFG.get('nick') }
  get comment() { return this.commentFG.get('comment') }
  banComment(event) {
    if (this.authority > 0) {
      var commentId = event.target.id;
      this._ps.banComment(commentId).subscribe(res => {
        if (res == 1) {
          this._ps.getCommentsForPost(this.post.id).subscribe(ress => {
            this.comments = ress;
          });
          alert("Komentarz pomyślnie zbanowany")

        }
        else
          alert("Wystąpił błąd podczas banowania komentarza")
      })
    }
  }
  addComment(commentForm: any) {
    this.auth.getAuthority().subscribe(res => {

      if (res == 2 || res == 1) {

        this.commentFG.markAllAsTouched();
        if (this.commentFG.valid) {


          this.newComment.createdBy = commentForm.controls.nick.value;
          this.newComment.body = commentForm.controls.comment.value;
          this.newComment.pageId = this.post.id;


          this._ps.addComment(this.newComment).subscribe(
            (res) => {
              if (res == 1) {
                this._ps.getCommentsForPost(this.post.id).subscribe(res => {
                  this.comments = res;
                });
                this.newComment = new Comment();
               alert("Komentarz dodany!")
              }
              else
                alert("Błąd podczas dodawania komentarza");
            }
          );
        }
        else
          alert("Uzupełnij poprawnie formularz")

      }

    });

  }
}
