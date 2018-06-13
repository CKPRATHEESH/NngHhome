import { Component, OnInit } from '@angular/core';
import { Content } from './../../models/content';
import { ContentService } from './../../services/content.service';

@Component({
  selector: 'app-commodity-analytics-cloud',
  templateUrl: './commodity-analytics-cloud.component.html',
  styleUrls: ['./commodity-analytics-cloud.component.css']
})
export class CommodityAnalyticsCloudComponent implements OnInit {
  content: Content[];
  constructor(private contentService: ContentService) { }
  private urlTest = 'http://localhost:3000/CommodityAnalyticsCloud';
  ngOnInit() {
    this.contentService.getContentDetails(this.urlTest).subscribe((content: Content[]) => {
      this.content = content;
    });
  }

}
