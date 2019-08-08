import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './posts.model';

const httpHeaders = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};
@Injectable()
export class PostRetrievalService {
    private getPostsUrl: string = "https://jsonplaceholder.typicode.com/posts";
    private addPostsUrl: string = "https://jsonplaceholder.typicode.com/posts";
    constructor(private http: HttpClient) { }

    public getPosts(): Observable<Post> {

        return this.http.get<Post>(this.getPostsUrl, httpHeaders);
    }

    public addPosts(body: any): Observable<Post> {
        let data = JSON.stringify(body);
        return this.http.post<Post>(this.addPostsUrl, data, httpHeaders);
    }
}