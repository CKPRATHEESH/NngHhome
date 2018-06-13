import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';

import { Content } from './../models/content';

@Injectable()
export class ContentService {
  private content: Content[] = [];
 /*  private urlTest = 'http://localhost:3000/navigation'; */
  constructor(private http: Http) { }

  // tslint:disable-next-line:member-ordering
  getContentDetails(url): Observable<Content[]> {
    return this.http.get(url)
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  // tslint:disable-next-line:semicolon
  };

}
