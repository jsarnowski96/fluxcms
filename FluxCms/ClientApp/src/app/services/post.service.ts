import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { PlatformLocation } from '@angular/common';
import { Posts } from '../models/posts';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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


  getPostsList(): Observable<Posts[]> {
    return this.http.get(this.baseUrl + "/api/posts/GetPostsList").pipe(map(res => { return res as Posts[] }));
  }
}
