import {Component} from '@angular/core';
import {NgClass, NgFor,
  Control, ControlGroup, ControlArray, Validators, FormBuilder,
  CORE_DIRECTIVES, FORM_DIRECTIVES} from '@angular/common';

import {MultiSelect} from 'primeng/primeng';

import {Product, Review, ProductService} from '../../services/product-service';

@Component({
  selector: 'product-form',
  template: require('./product-form.html'),
  directives: [NgClass, NgFor],
  providers: [ProductService]
})
export default class ProductFormComponent {
  categories: SelectItem[];
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
      this.productService.searchEvent.emit(formValue);
  }


}
}

function positiveNumberValidator(control: Control): any {
  if (!control.value) return null;
  const price = parseInt(control.value);
  return price === null ||
    typeof price === 'number' &&
         price > 0 ? null : {positivenumber: true};
}
