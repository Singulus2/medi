import {Component} from 'angular2/core';
import {NgClass, NgFor,
  Control, ControlGroup, ControlArray, Validators, FormBuilder,
  CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {SELECT_DIRECTIVES} from 'ng2-select/ng2-select';

import {Product, Review, ProductService} from '../../services/product-service';

@Component({
  selector: 'product-form',
  template: require('./product-form.html'),
  directives: [NgClass, NgFor, SELECT_DIRECTIVES],
  providers: [ProductService]
})
export default class ProductFormComponent {
  formModel: ControlGroup;
  categories: string[];
  product: Product;
  productService: ProductService;
  //emailsControlArray: ControlArray;
  //emails: string[] = [];



  constructor(productService: ProductService) {
    this.productService = productService;
    this.categories = this.productService.getAllCategories();

    const fb = new FormBuilder();
    //this.emailsControlArray = fb.array([]);
    this.formModel = fb.group({
        'title': [null, Validators.minLength(3)],
        //'category': [-1],
        //'emails': this.emailsControlArray,
        //'email': [-1]
      })
  }

  //addEmail(email: string) {
    //this.emails.push(email);
      //this.emailsControlArray.controls.push(new Control(email));
  //}

  save() {
    if (this.formModel.valid) {
      console.log(this.formModel.value);
      this.productService.searchEvent.emit(this.formModel.value);
  }


}
private value:any = {};
  private _disabledV:string = '0';
  private disabled:boolean = false;

  private get disabledV():string {
    return this._disabledV;
  }

  private set disabledV(value:string) {
    this._disabledV = value;
    this.disabled = this._disabledV === '1';
  }

  public selected(value:any):void {
    console.log('Selected value is: ', value);
  }

  public removed(value:any):void {
    console.log('Removed value is: ', value);
  }

  public typed(value:any):void {
    console.log('New search input: ', value);
  }

  public refreshValue(value:any):void {
    this.value = value;
  }
}

function positiveNumberValidator(control: Control): any {
  if (!control.value) return null;
  const price = parseInt(control.value);
  return price === null ||
    typeof price === 'number' &&
         price > 0 ? null : {positivenumber: true};
}
