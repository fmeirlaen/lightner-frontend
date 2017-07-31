import { Component, OnInit } from '@angular/core';
import { TokenService} from '../../_services/token.service';

@Component({
  selector: 'app-createdoc',
  templateUrl: './createdoc.component.html',
  styleUrls: ['./createdoc.component.css']
})
export class CreateDocComponent implements OnInit {
  private docs = [];
  constructor(private tokenservice: TokenService) {
    tokenservice.getJson('api/addDoc', null, 'POST').subscribe(data => {
      console.log(data);
      // console.log(data[0].doc_type);
      this.docs = data;
    });
  }

  ngOnInit() {
  }

}
