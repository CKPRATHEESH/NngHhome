import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Navigation } from './../models/navigation';
import { NavigationService } from './../services/navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class NavigationComponent implements OnInit {
  navigation: Navigation[];

  constructor(
    private navigationService: NavigationService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
   // console.log(this.navigationService.getLeftNavigations());
    /* this.navigation = this.navigationService.getLeftNavigations(); */
    this.navigationService.getLeftNavigations().subscribe((navigation: Navigation[]) => {
      this.navigation =  navigation;
    });
  }

}
