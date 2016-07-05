import {EventEmitter, Injectable} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';
import {Observable} from "rxjs/Observable";
import { Subject } from 'rxjs/Subject';

import {defaultFirebase, AngularFire, FIREBASE_PROVIDERS,
        FirebaseListObservable,FirebaseObjectObservable} from 'angularfire2';
//import * as Firebase from 'firebase';
import {MultiSelect} from 'primeng/primeng';


@Injectable()
export class ProductService {
  searchEvent: EventEmitter<any> = new EventEmitter();
  titleSubject: Subject<any>;
  products: FirebaseListObservable<Product[]>;
  product: FirebaseObjectObservable<Product>;
  storageRef: any;
  result: Product[];
  resultProduct: Product;
  user: User;

  constructor(private http: Http, private af: AngularFire) {

    this.products = af.database.list('/products', {
      query: {
        orderByChild: 'title',
        equalTo: this.titleSubject
      }
    });
    this.titleSubject = new Subject();
  }

  search(params: ProductSearchParams): void {
    this.filterBy(params.title);

    //return this.http
      //.get('/api/products', {search: encodeParams(params)})
      //.map(response => response.json());
  }


   filterBy(title: string) {
      this.titleSubject.next(title);
    }


  getProducts(): Observable<Product[]> {
    //this.products.subscribe(p => this.result = p);
    return this.products;
  }

  getProductById(productId: string): Observable<Product> {
    this.product = this.af.database.object(`/products/${productId}`);
    this.product.subscribe(p => this.resultProduct = p);
    return this.product;
  }

  save(formValue: any) {
    user.name         = formValue.name;
    user.vorname      = formValue.vorname;
    user.titel        = formValue.titel;
    user.plz          = formValue.plz; 
    user.ort          = formValue.ort;
    user.strasse      = formValue.strasse;
    user.hausnummer   = formValue.hausnummer;
    user.stadtteil    = formValue.stadtteil;
    user.telefon      = formValue.telefon;
    user.mobil        = formValue.mobil;  
    user.email        = formValue.email;
    user.website      = formValue.website;
    user.fachgebiete  = formValue.fachgebiete;
    user.schwerpunkte = formValue.schwerpunkte;
    user.fachlichkeit = formValue.schwerpunkte;
    user.seit         = formValue.seit;
    user.ausbMediat   = formValue.ausbMediat;
    user.ausbQuellberufe   = formValue.ausbQuellberufe;
    user.quellberufe       = formValue.quellberufe;
    user.quellSchwerpunkte = formValue.quellSchwerpunkte;
    user.sonstTaetig       = formValue.sonstTaetig;
    user.branchen          = formValue.branchen,
    user.verbaende         = formValue.verbaende;
    user.medien            = formValue.verbaende;
    user.beratung          = formValue.beratung;
    user.gespraech         = formValue.gespraech;

    this.product.update(user);
  }
  
  update(formValue: any, valid: boolean) {
    this.product.update({ title: formValue.title });
    //this.ref.child('images/' + this.resultProduct.id).put(formValue.files);
  }
  
  delete() {
    this.product.remove();
  }


  getProductsBySearch(params = <any>{}): Product[] {
    if (params.title) {
      this.result = this.result.filter(
        p => p.title.toLowerCase().indexOf(params.title.toLowerCase()) !== -1);
    }
    if (parseInt(params.price) && this.result.length > 0) {
      this.result = this.result.filter(
        p => p.price <= parseInt(params.price));
    }
    if (params.category && this.result.length > 0) {
      this.result = this.result.filter(
        p => p.categories.indexOf(params.category.toLowerCase()) !== -1);
    }
    return this.result;
  }

 //getProductById(productId: number): any {
    //return this.products.forEach(next: (value: Product[]) => void, thisArg: any, PromiseCtor?: PromiseConstructor)                                                    //(p => p.id === productId);
//}

  //getReviewsByProductId(productId: number): Review[] {
    //return reviews.filter(r => r.productId === productId);
  //}

  getReviewsForProduct(productId: string): Observable<Review[]> {
    return this.af.database.list(`/products/${productId}/reviews`);
  } 

  getAllCategories(): any[] {
    return [{label:'Books', value:'Books'},
            {label:'Electronics', value:'Electronics'},
            {label:'Hardware', value:'Hardware'}
           ];
  }
}

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public description: string,
    public categories: Array<string>,
    public reviews: Array<Review>) {
  }

}

export class Review {
  constructor(
    public id: number,
    public productId: number,
    public timestamp: Date,
    public user: string,
    public rating: number,
    public comment: string) {
  }
}

export interface ProductSearchParams {
  title: string;
  price: number;
  category: string;
}

export class User {
  constructor(
    public id: number,
    public name: string,
    public vorname: string,
    public titel: string,
    public firma: string,
    public plz: string,
    public ort: string,
    public strasse: string,
    public hausnummer: string,
    public strZusatz: string,
    public stadtteil: string,
    public telefon: string,
    public mobil: string,
    public email: string,
    public website: string,
    public kontaktdaten: string,
    public fachgebiete: string[],
    public schwerpunkte: string[],
    public fachlichkeit: string[],
    public seit: string,
    public ausbMediat: string[],
    public praktAusb: string[],
    public ausbQuellberufe: string[],
    public quellberufe: string[],
    public quellSchwerpunkte: string[],
    public sonstTaetig: string[],
    public branchen: string[],
    public verbaende: string[],
    public medien: string[],
    public beratung: boolean,
    public gespraech: boolean,
    public rating: number,
    public reviews: Array<Review>) {
  }

}

/**
 * Encodes the object into a valid query string.
 */
function encodeParams(params: any): URLSearchParams {
  return Object.keys(params)
    .filter(key => params[key])
    .reduce((accum: URLSearchParams, key: string) => {
      accum.append(key, params[key]);
      return accum;
    }, new URLSearchParams());
}
