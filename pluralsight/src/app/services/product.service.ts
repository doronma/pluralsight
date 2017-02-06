import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';


import { IProduct } from '../product/product';


@Injectable()
export class ProductService {

  constructor(private _http: Http) { }
  //private _productUrl = './res/products.json';
  private _productUrl = 'http://localhost:8080/products';

  getProducts(): Observable<IProduct[]> {
    return this._http.get(this._productUrl)
      .map((response: Response) => <IProduct[]>response.json())
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);

  }
  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

  getProductsWithPromise(): Promise<IProduct[]> {
    {
      console.log('getProductWithPromise...');
      const result = this._http.get(this._productUrl)
        .toPromise()
        .then(response => response.json() as IProduct[])
        .catch(this.handleError);
      console.log('returning result...');
      return result;
    }
  }

}
