import { Injectable, EventEmitter } from '@angular/core';
import { Post } from './posts.model';
@Injectable()
export class GlobalService{
    editEmitter: EventEmitter<any> = new EventEmitter<any>();
    constructor(){}

    /**
     * Global event emitter :
     */
    getEditEmitter(data, i){
        console.log(data);
        let userData = {
            data: data,
            index: i
        }
        this.editEmitter.emit(userData);
    }
}