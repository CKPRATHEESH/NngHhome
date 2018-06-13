import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Content } from './../../models/content';
import { ContentService } from './../../services/content.service';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {
content: Content[] = [];
private url = 'http://localhost:3000/Components';
  constructor(
    private router: Router,
    private contentService: ContentService
  ) { }

  ngOnInit() {
    this.contentService.getContentDetails(this.url)
    .subscribe((content: Content[]) => {
      this.content = content;
    });
  }

}
