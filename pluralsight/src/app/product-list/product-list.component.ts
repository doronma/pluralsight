import { Component, OnInit } from '@angular/core';


import { IProduct } from '../product/product';
import { StarComponent } from '../share/star/star.component'
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
    listFilter: string;
    products: IProduct[];
    errorMessage: string;
    dataOption: number = 2;

    constructor(private _productService: ProductService) { }

    ngOnInit() {
        console.log('In product-list init...');
        //op1

        //this.products = this._productService.getProducts();

        if (this.dataOption == 2) {
            // op2
            this._productService.getProducts()
                .subscribe(products => this.products = products
                , error => this.errorMessage = <any>error);
        } else if (this.dataOption == 3) {
            // op3
            this._productService.getProductsWithPromise()
                .then(products => {
                    console.log('in then' + products);
                    this.products = products
                });
        }
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List:' + message;
    }

}
