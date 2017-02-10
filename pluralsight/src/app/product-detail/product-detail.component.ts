import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';

import {IProduct  } from '../product/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

 pageTitle: string = 'Product Detail';
 product: IProduct;

  constructor( private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
     let id = +this._route.snapshot.params['id'];
     this.pageTitle += `: ${id}`;
  }

  onBack(): void {
    this._router.navigate(['/products']);
  }

}
