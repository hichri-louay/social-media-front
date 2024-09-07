import { Component, NgModule, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [
    DatePipe,
    FormsModule,
  ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {

  public posts: any[] = [];
  public userComment: string = '';
  public userPostContent: string = '';

  constructor(
    private _postsService: PostsService,
    private _toaster: ToastrService
  ) { }

  ngOnInit(): void {
    this.getPosts()
   }

   getPosts(): void {
    this._postsService.getPosts().subscribe(
      (res) => {
        console.log({res})
        this.posts = res.data;
      },
      (err) => {
        this._toaster.error(err.error.message, 'Error');
      }
    );
   }

   createPost(): void {
    if(this.userPostContent != '') { 
      this._postsService.createPost(this.userPostContent).subscribe( 
        (res) => {
          this._toaster.success('Post created!', 'Success');
          this.getPosts();
          this.userPostContent = '';
        },
        (err) => {
          this._toaster.error(err.error.message, 'Error');
        }
      );
    }
    
   }

   likePost(postId: string): void { 
    this._postsService.likePost(postId).subscribe(
      (res) => {
        this._toaster.success('Post liked/disliked!', 'Success');
        this.getPosts();
      },
      (err) => {
        this._toaster.error(err.error.message, 'Error');
      }
    );

   }


   addComment(postId: string): void {
    if (this.userComment != '') {
      this._postsService.addComment(postId,this.userComment).subscribe(
        (res) => {
          this._toaster.success('Comment added!', 'Success');
          this.getPosts();
          this.userComment = '';
        },
        (err) => {
          this._toaster.error(err.error.message, 'Error');
        }
      );
    } else {
      this._toaster.warning('Please enter a comment.', 'Warning');
    }
   }

}
