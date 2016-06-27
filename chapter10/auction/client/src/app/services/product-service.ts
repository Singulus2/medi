import {EventEmitter, Injectable} from 'angular2/core';
import {Http, URLSearchParams} from 'angular2/http';
import {Observable} from "rxjs/Observable";
import { Subject } from 'rxjs/Subject';

import {defaultFirebase, AngularFire, FIREBASE_PROVIDERS,
        FirebaseListObservable,FirebaseObjectObservable} from 'angularfire2';
import * as Firebase from 'firebase';



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

@Injectable()
export class ProductService {
  searchEvent: EventEmitter<any> = new EventEmitter();
  sizeSubject: Subject<any>;
  products: Observable<Product[]>;

  result: Product[];

  constructor(private http: Http, private af: AngularFire) {
    this.titleSubject = new Subject();
    this.products = af.database.list('/products', {
      query: {
        orderByChild: 'title',
        equalTo: this.titleSubject
      }
    });
  }
  
 filterBy(title: string) {
    this.sizeSubject.next(title); 
  }
  

  search(params: ProductSearchParams): Observable<Product[]> {
    return this.http
      .get('/api/products', {search: encodeParams(params)})
      .map(response => response.json());
  }

  getProducts(): Observable<Product[]> {
    //this.products.subscribe(p => this.result = p);
    return this.products;
  }

  getProductById(productId: string): Observable<Product> {
    return this.af.database.object(`/products/${productId}`);
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

  getAllCategories(): string[] {
    return ['Books', 'Electronics', 'Hardware'];
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
