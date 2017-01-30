import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { IProduct } from '../product/product';


@Injectable()
export class ProductService {

  constructor(private _http: Http) { }
  private _productUrl = './res/products.json';

  getProducts(): Observable<IProduct[]>{
     return this._http.get(this._productUrl)
    .map((response: Response) => <IProduct[]>response.json())
    .do(data => console.log('All: ' + JSON.stringify(data)))
    .catch(this.handleError);
   
  }
  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
