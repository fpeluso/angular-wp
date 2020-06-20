import { PostsService } from './../../services/posts.service';
import { Post } from './../../interfaces/post';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Array<Post>;
  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.loadPosts();
  }
  loadPosts() {
    this.postsService.loadPosts().subscribe(
      response => {
        this.posts = response;
      }
    );
  }

}
