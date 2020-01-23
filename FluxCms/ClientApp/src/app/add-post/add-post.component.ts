import { Component, OnInit, Output } from '@angular/core';
import { Posts } from '../models/posts';
import { PostService } from '../services/post.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { SnotifyService } from 'ng-snotify';
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  newPost: Posts;
  postFG: FormGroup;
  public fileToUpload: any;
  constructor(private _postService: PostService, private fb: FormBuilder, private auth: AuthService, private snotifyService: SnotifyService) {

    this.newPost = new Posts();
  }
  @Output() addPostEvent = new EventEmitter();

  ngOnInit() {
    this.postFG = this.fb.group({
      formTitle: new FormControl(this.newPost.title, [Validators.required]),
      formbody: new FormControl(this.newPost.body, [Validators.required]),
    //  formThumbnail: new FormControl(this.fileToUpload, [Validators.required]),
      formTags: new FormControl(this.newPost.tags, [Validators.required])
    })


 
  }
  get formTitle() { return this.postFG.get('formTitle') }
  get formbody() { return this.postFG.get('formbody') }
 // get formThumbnail() { return this.postFG.get('formThumbnail') }
  get formTags() { return this.postFG.get('formTags') }


  handleFileInput(event: any) {
    let eventObj: MSInputMethodContext = <MSInputMethodContext>event;
    let target: HTMLInputElement = <HTMLInputElement>eventObj.target;
    let files: any = target.files;
    this.fileToUpload = files[0];

  }
 
  addNewPost(postForm: any) {
    this.auth.getAuthority().subscribe(res => {
 
      if (res == 2||res==1) {

        this.postFG.markAllAsTouched();
        if (this.postFG.valid) {


          this.newPost.title = postForm.controls.formTitle.value;
          this.newPost.body = postForm.controls.formbody.value;
          this.newPost.tags = postForm.controls.formTags.value;


          console.log(this.newPost);
          this._postService.addPost(this.newPost).subscribe(
            (res) => {
              if (res == 1) {
                //this.snotifyService.success("Logowanie udane!", "Login")
                this.addPostEvent.emit("ok");
              }
              else
                alert("Błąd podczas dodawania postu");
            }
          );
        }
        else
          alert("Uzupełnij poprawnie formularz")

      }

    });

  }
}
