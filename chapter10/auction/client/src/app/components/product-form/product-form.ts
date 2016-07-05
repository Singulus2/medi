import {Component} from '@angular/core';
import {NgClass, NgFor,Control, ControlGroup, ControlArray, Validators, FormBuilder,CORE_DIRECTIVES, FORM_DIRECTIVES} from '@angular/common';

import {MultiSelect,TabView,TabPanel} from 'primeng/primeng';

import {Product, Review, ProductService} from '../../services/product-service';

@Component({
  selector: 'product-form',
  template: require('./product-form.html'),
  directives: [NgClass, NgFor],
  providers: [ProductService]
})
export default class ProductFormComponent {
  categories: any[];
  selectedCategories: string[];
  product: Product;
  productService: ProductService;
  //emailsControlArray: ControlArray;
  //emails: string[] = [];
  //filesToUpload: Array<File>;
  pics: File; 



  constructor(productService: ProductService) {
    this.productService = productService;
    this.categories = this.productService.getAllCategories();
  }

  //addEmail(email: string) {
    //this.emails.push(email);
      //this.emailsControlArray.controls.push(new Control(email));
  //}

  addPics(pics: File) {
    this.pics = pics;
  }

  save(formValue: any, valid: boolean) {
    if (valid) {
      console.log(formValue);
      //this.productService.searchEvent.emit(formValue);
      this.productService.update(formValue);
  }
}

    public id: number;
    public name: string;
    public vorname: string;
    public titel: string;
    public firma: string;
    public plz: string;
    public ort: string;
    public strasse: string;
    public hausnummer: string;
    public strZusatz: string;
    public stadtteil: string;
    public telefon: string;
    public mobil: string;
    public email: string;
    public website: string;
    public kontaktdaten: string;
    public fachgebiete: string[];
    public schwerpunkte: string[];
    public fachlichkeit: string[];
    public seit: string;
    public ausbMediat: string[];
    public praktAusb: string;
    public ausbQuellberufe: string[];
    public quellberufe: string[];
    public quellSchwerpunkte: string[];
    public sonstTaetig: string;
    public branchen: string[];
    public verbaende: string[];
    public medien: string[];
    public beschreibung: string;
    public beratung: boolean;
    public gespraech: boolean;

    public optFachgebiete: string[] = [{label:'Familie', value:'Familie'},
                                        {label:'Wirtschaft', value:'Wirtschaft'},
                                        {label:'Sonstiges', value:'Sonstiges'}
                                      ];
    public optSchwerpunkte: string[] = [{label:'Baumediation', value:'Baumediation'},
                                        {label:'Scheidungsmediation', value:'Scheidungsmediation'},
                                        {label:'Erbschaftsmediation', value:'Erbschaftsmediation'}
                                      ];
    public optFachlichkeit: string[] = [{label:'juristisch', value:'juristisch'},
                                        {label:'kaufmännisch', value:'kaufmännisch'},
                                        {label:'künstlerisch', value:'künstlerisch'}
                                      ];
    public optAusbMediat: string[] = [{label:'Zertifikat Mediator', value:'Zertifikat Mediator'},
                                        {label:'Zertifikat Mediationssupervisor', value:'Zertifikat Mediationssupervisor'},
                                        {label:'Master of Mediation', value:'Master of Mediation'}
                                      ];
    public optAusbQuellberufe: string[] = [{label:'Ingenieur', value:'Ingenieur'},
                                        {label:'Sozialwissenschaften', value:'Sozialwissenschaften'},
                                        {label:'Jura', value:'Jura'}
                                      ];
    public optQuellberufe: string[] = [{label:'Angestellter', value:'Angestellter'},
                                        {label:'selbständig', value:'selbständig'},
                                        {label:'Jurist', value:'Jurist'}
                                      ];
    public optQuellSchwerpunkte: string[] = [{label:'Arbeitsrecht', value:'Arbeitsrecht'},
                                        {label:'Familienrecht', value:'Familienrecht'},
                                        {label:'Erbrecht', value:'Erbrecht'}
                                      ];
    public optSonstTaetig: string[] = [{label:'Cooperative Praxis', value:'Cooperative Praxis'},
                                        {label:'Konfliktmoderator', value:'Konfliktmoderator'},
                                        {label:'Ombudsmann', value:'Ombudsmann'}
                                      ];
    public optBranchen: string[] = [{label:'Banken', value:'Banken'},
                                        {label:'Industrie', value:'Industrie'},
                                        {label:'Versicherung', value:'Versicherung'}
                                      ];
    public optVerbaende: string[] = [{label:'DAV Mediation', value:'DAV Mediation'},
                                        {label:'Deutsches Forum für Mediation', value:'Deutsches Forum für Mediation'},
                                        {label:'Deutsche Gesellschaft für Mediation', value:'Deutsche Gesellschaft für Mediation'}
                                      ];
    public optMedien: string[] = [{label:'Telefonmediation', value:'Telefonmediation'},
                                        {label:'Onlinemediation', value:'Onlinemediation'},
                                        {label:'Skype', value:'Skype'}
                                      ];

}

function positiveNumberValidator(control: Control): any {
  if (!control.value) return null;
  const price = parseInt(control.value);
  return price === null ||
    typeof price === 'number' &&
         price > 0 ? null : {positivenumber: true};
}
