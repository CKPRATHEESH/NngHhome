import { Component, OnInit } from '@angular/core';

import { Content } from './../../models/content';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-trader-products',
  templateUrl: './trader-products.component.html',
  styleUrls: ['./trader-products.component.css']
})
export class TraderProductsComponent implements OnInit {
  content: Content[];
  private url = 'http://localhost:3000/TraderProducts';
  constructor(
    private contentService: ContentService
  ) { }

  ngOnInit() {
    this.contentService.getContentDetails(this.url)
    .subscribe((content: Content[]) => {
      this.content = content;
    });
  }

}
