import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { PlatformLocation } from '@angular/common';
import { Posts } from '../models/posts';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Comment } from '../models/comments';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  baseUrl: string;
  constructor(private http: HttpClient, pl: PlatformLocation) {
    this.baseUrl = window.location.origin;
  }


  addPost(post: Posts): Observable<number> {
    console.log(window.location.origin);
    let headers = new Headers({ 'enctype': 'multipart/form-data' });
    let opts = {
      headers: headers
    }
    return this.http.post<number>(this.baseUrl + "/api/posts/AddPost", post).pipe(
      (res) => {
        return res;
      }
    )
  }
  addComment(comment: Comment): Observable<number> {
 
    return this.http.post<number>(this.baseUrl + "/api/posts/AddComment", comment).pipe(
      (res) => {
        return res;
      }
    )
  } banComment(commentId: number): Observable<number> {
    console.log(commentId)
    return this.http.get<number>(this.baseUrl + "/api/posts/BanComment/" + commentId.toString()).pipe(
      (res) => {
        return res;
      }
    )
  }


  getPostsList(): Observable<Posts[]> {
    return this.http.get(this.baseUrl + "/api/posts/GetPostsList").pipe(map(res => { return res as Posts[] }));
  }
  getPostByID(id: number): Observable<Posts> {
    return this.http.get(this.baseUrl + "/api/posts/GetPost/" + id.toString()).pipe(map(res => { return res as Posts }));
  }
  getCommentsForPost(id: number): Observable<Comment[]> {
    return this.http.get(this.baseUrl + "/api/posts/GetCommentsForPost/" + id.toString()).pipe(map(res => { return res as Comment[] }));
  }
}
