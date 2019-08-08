import { Component, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Post } from './posts.model';
import { GlobalService } from './global-data.service';
import { PostRetrievalService } from './post-retrival.service';
import { I18nPluralPipe } from '@angular/common';
@Component({
    selector: '<edit-show-post>',
    templateUrl: './edit-show-post.component.html',
    styleUrls: ['./edit-show-post.component.scss']
})
export class EditShowPostComponent {
    @Input('posts') posts: Array<Post> = new Array<Post>();
    @Output() valueChange = new EventEmitter();
    index: number;


    constructor(private postRetrievalService: PostRetrievalService, private globalService: GlobalService, private chage: ChangeDetectorRef) {
        this.postModel = new Post(1, 1, '', '');
        this.globalService.editEmitter.subscribe(data => {
            this.postModel = data.data;
            this.index = data.index;
        })
    }

    postModel: Post = {
        userId: 1,
        id: 1,
        title: '',
        body: ''
    };

    /**
     * Editing Posts in the global list :
     */
    editPosts(addPostForm: any) {
        this.valueChange.emit({ post: this.postModel, index: this.index });
    }
}