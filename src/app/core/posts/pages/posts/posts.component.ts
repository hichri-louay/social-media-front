import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {


  constructor(
    private _postsService: PostsService
  ) { }

  ngOnInit(): void {
    this._postsService.getPosts().subscribe(
      (res) => {
        console.log({res})
      },
      (err) => {
        console.log({err})
      }
    );
   }

}
