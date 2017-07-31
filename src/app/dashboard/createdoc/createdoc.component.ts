import { Component, OnInit } from '@angular/core';
import { TokenService} from '../../_services/token.service';

@Component({
  selector: 'app-createdoc',
  templateUrl: './createdoc.component.html',
  styleUrls: ['./createdoc.component.css']
})
export class CreateDocComponent implements OnInit {
  private docs = [];
  _types = [
    {value: 'FA-0', viewValue: 'Facture d\'achat'},
    {value: 'FV-1', viewValue: 'Facture de vente'},
    {value: 'NCA-2', viewValue: 'Note de crédit sur achat'},
    {value: 'NCV-3', viewValue: 'Note de crédit sur vente'},
    {value: 'DEVIS-4', viewValue: 'Devis'}
  ];
  selectedValue: string;
  constructor(private tokenservice: TokenService) {
  }
  ngOnInit() {
    this.tokenservice.getJson('api/addDoc', {}, 'POST').subscribe(data => {
    console.log(data);
    // console.log(data[0].doc_type);
    this.docs = data;
    });
  }
  onSubmit(form:any):void {
    console.log('you submitted value::', form);
  }

}
