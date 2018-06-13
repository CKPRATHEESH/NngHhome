import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Content } from './../../../models/content';
import { ContentService } from './../../../services/content.service';

@Component({
  selector: 'app-agsn-softs',
  templateUrl: './agsn-softs.component.html',
  styleUrls: ['./agsn-softs.component.css']
})
export class AgsnSoftsComponent implements OnInit {
private content: Content[]=[];
 /*  private url = 'http://localhost:3000/TraderProducts'; */
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute/* ,
    private contentService: ContentService */
  ) { }

  ngOnInit() {
   /*  this.contentService.getContentDetails(this.url)
    .subscribe((content: Content[])=>{
      this.content = content;
    }) */
  }

}
