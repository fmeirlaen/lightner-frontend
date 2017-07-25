import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { AuthenticationService } from '../../_services/index';

@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.css']
})
export class DocComponent  {
  constructor(private http: Http, private authenticationService: AuthenticationService) {
    const headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
    const options = new RequestOptions({ headers: headers });
    http.get(`http://localhost/lightner/web/app_dev.php/api/docs`, options)
      .subscribe(response => {
        console.log(response.json());
        // logs the array of races
      });
  }

  OnInit() {
  }

}
