import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Content } from './../../models/content';
import { ContentService } from './../../services/content.service';

@Component({
  selector: 'app-commodity-planning-procurement',
  templateUrl: './commodity-planning-procurement.component.html',
  styleUrls: ['./commodity-planning-procurement.component.css']
})
export class CommodityPlanningProcurementComponent implements OnInit {
  content: Content[] = [];
  private url = 'http://localhost:3000/CommodityAnalyticsCloud';
  constructor(
    private router: Router,
    private contentService: ContentService) { }

  ngOnInit() {
    this.content = this.content;
    this.retrieveData();
  }


  private retrieveData() {

    this.contentService.getContentDetails(this.url).subscribe((content: Content[]) => {
      this.content = content;
    });
  }
}
