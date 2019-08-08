import { Component, OnInit } from '@angular/core';
import { Post } from './posts.model';
import { PostRetrievalService } from './post-retrival.service';
@Component({
    selector: '<parent>',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit{
    posts: Array<Post> = new Array<Post>();
    constructor(private postRetrievalService: PostRetrievalService){}

    ngOnInit(){
        this.postRetrievalService.getPosts().subscribe(data=>{
           
           for(let i in data){
            this.posts.push(data[i]);
           }
        }, error=>{
            console.log("error")
        });
    }
}