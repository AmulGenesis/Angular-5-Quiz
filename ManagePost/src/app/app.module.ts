import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ParentComponent } from './parent.component';
import { AddPostComponent } from './add-post.component';
import { ListPostComponent } from './list-post.component';
import { EditShowPostComponent } from './edit-show-post.component';
import { HttpClientModule } from '@angular/common/http'
import { PostRetrievalService } from './post-retrival.service';
import { ReactiveFormsModule, FormsModule } from  '@angular/forms';
import { CommonModule } from '@angular/common';
import { GlobalService } from './global-data.service';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ListPostComponent,
    EditShowPostComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ PostRetrievalService, GlobalService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
