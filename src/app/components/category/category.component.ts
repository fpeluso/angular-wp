import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';

import { Post } from '../../interfaces/post';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

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
