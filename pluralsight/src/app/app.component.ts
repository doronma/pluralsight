import { Component } from '@angular/core';

import { ProductService } from './services/product.service'

import {ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService]
})
export class AppComponent {
  pageTitle = 'Product Management';
}
