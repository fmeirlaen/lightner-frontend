import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { AuthenticationService } from '../../_services/index';

import { TokenService } from '../../_services/index';

@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.css']
})
export class DocComponent  {
  constructor(private http: Http, private tokenservice: TokenService) {
    tokenservice.getJson('api/docs', null, 'GET').subscribe(data => {
      console.log(data[0].contact_name);
    });
  }

  OnInit() {
  }

}
