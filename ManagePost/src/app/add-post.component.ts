import { Component, Input } from '@angular/core';
import { Post } from './posts.model';
import { PostRetrievalService } from './post-retrival.service';

@Component({
    selector: '<add-post>',
    templateUrl: './add-post.component.html',
    styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent {
    @Input('posts') posts: Array<Post> = new Array<Post>();
    postModel: Post = {
        userId: 1,
        id: 1,
        title: '',
        body: ''
    };
    constructor(private postRetrievalService: PostRetrievalService) {
        this.postModel = new Post(1, 1, '', '');
    }
    /**
     * Adding Posts to the global list :
     */
    addPosts(addPostForm: any) {
        this.postRetrievalService.addPosts(this.postModel).subscribe(data => {
            this.posts.push(data);
            addPostForm.reset();
        });
    }
}