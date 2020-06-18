import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/posts.service';

import { Post } from '../../interfaces/post';
import { Subscription } from 'rxjs';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'
import { EscapeHtmlPipe } from '../../pipes/keep-html.pipe'

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {

  post: Post;
  activeRoute: Subscription;
  postSlug: string;
  constructor(private route: ActivatedRoute, private postsService: PostsService, private sanitized: DomSanitizer) { }

  ngOnInit(): void {
    this.activeRoute = this.route.params.subscribe(params => {
      if (typeof params['slug'] != "undefined") {
        this.postSlug = params['slug'];
        this.loadPost(this.postSlug);
      }
    });
  }
  loadPost(slug) {
    this.postsService.getPost(slug).subscribe(
      response => {
        this.post = response;
      }
    )
  }

}
