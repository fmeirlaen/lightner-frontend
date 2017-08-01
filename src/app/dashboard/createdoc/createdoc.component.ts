import { Component, OnInit } from '@angular/core';
import { TokenService} from '../../_services/token.service';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-createdoc',
  templateUrl: './createdoc.component.html',
  styleUrls: ['./createdoc.component.css']
})
export class CreateDocComponent implements OnInit {
  public myForm: FormGroup;
  private docs = [];
  _types = [
    {value: 'FA', viewValue: 'Facture d\'achat'},
    {value: 'FV', viewValue: 'Facture de vente'},
    {value: 'NCA', viewValue: 'Note de crédit sur achat'},
    {value: 'NCV', viewValue: 'Note de crédit sur vente'},
    {value: 'DEVIS', viewValue: 'Devis'}
  ];
  selectedValue: string;
  constructor(private tokenservice: TokenService, private _fb: FormBuilder) {
  }
  // onSubmit(form:any):void {
  //   console.log('you submitted value::', form);
  // }
  ngOnInit() {

    this.myForm = this._fb.group({
      doc_type: ['', [Validators.required]],
      doc_contact: ['', [Validators.required]],
      doc_date: ['', [Validators.required]],
      contact_address: ['', [Validators.required]],
      contact_codpost: ['', [Validators.required]],
      contact_country: ['', [Validators.required]],
      doc_reference: ['', [Validators.required]],
      lines: this._fb.array([
        this.initLine(),
      ])
    });
  }
  initLine() {
    return this._fb.group({
      line_description: ['', Validators.required],
      line_qtt: [''],
      line_price_unit: ['']
    });
  }

  addLine() {
    const control = <FormArray>this.myForm.controls['lines'];
    control.push(this.initLine());
  }

  removeLine(i: number) {
    const control = <FormArray>this.myForm.controls['lines'];
    control.removeAt(i);
  }

  save(model) {
    this.tokenservice.getJson('api/addDoc', model, 'POST').subscribe(data => {
      console.log(data);
      // console.log(data[0].doc_type);
      this.docs = data;
    });
    console.log(model);
  }

}
