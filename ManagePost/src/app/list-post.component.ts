import { Component, Input } from '@angular/core';
import { Post } from './posts.model';
import { GlobalService } from './global-data.service';
@Component({
    selector: '<list-post>',
    templateUrl: './list-post.component.html',
    styleUrls: ['./list-post.component.scss']
})
export class ListPostComponent {
    @Input('posts') posts: Array<Post> = new Array<Post>();
    constructor(private globalService: GlobalService) { }

    /**
     * Emitting the edit index for list :
     */
    edit(i: number) {
        this.globalService.getEditEmitter(this.posts[i], i);
    }

    /**
     * Deleting index form the list :
     */
    delete(i: number) {
        this.posts.splice(i, 1);
    }
}