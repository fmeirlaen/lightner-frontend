import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { AuthenticationService } from './index';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TokenService {
  BASE_URL = 'http://localhost/lightner/web/app_dev.php/';
  constructor(private _http: Http, authenticationservice: AuthenticationService) {}

  getJson(url, fields, http_verb): Observable<any> {
    const headers = new Headers({ 'Content-type': 'application/json' });
    const token = JSON.parse(localStorage.getItem('currentUser'))['token'];
    headers.append('Authorization', 'Bearer ' + token);
    const options = new RequestOptions({ headers: headers});
    console.log(JSON.stringify(fields));
    if (http_verb === 'GET') {
      return this._http.get(`${this.BASE_URL}${url}`, options).map(x => x.json());
    }
    if (http_verb === 'POST') {
      return this._http.post(`${this.BASE_URL}${url}`, options).map(x => x.json());
    }
  }
}

// const headers: Headers = new Headers();
// headers.append({ 'Authorization': 'Bearer ' + this.authenticationService.token });
// const opts: RequestOptions = new RequestOptions;
// opts.headers = headers;
// const headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
// const options = new RequestOptions({ headers: headers });
