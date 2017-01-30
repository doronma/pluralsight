import { Component, OnInit } from '@angular/core';


import { IProduct } from '../product/product';
import {StarComponent} from '../share/star/star.component'
import { ProductService } from '../services/product.service'

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string ;
    products: IProduct[] ;
        
    constructor(private _productService: ProductService) { }

    ngOnInit() {
        console.log('In product-list init...');
        this.products = this._productService.getProducts();
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    onRatingClicked(message: string): void{
        this.pageTitle = 'Product List:' + message;
    }

}
