import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Navigation } from './../models/navigation';

@Injectable()
export class NavigationService {
  // tslint:disable-next-line:whitespace
  private navigation: Navigation[] = [];
  private url = 'http://localhost:3000/navigation';
  constructor(private http: Http) { }
  getLeftNavigations(): Observable<Navigation[]> {
    return this.http.get(this.url)
      .map((response: Response) => response.json());
  }
}
