import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ShareModule } from '../share/share.module';

import { ProductListComponent } from '../product-list/product-list.component';
import { ProductFilterPipe } from '../product-list/product-filter.pipe';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductGuardService } from '../services/product-guard.service';
import { ProductService } from '../services/product.service';
import { ProductRoutingModule } from './product-routing.module';


@NgModule({
  imports: [
    ShareModule,
    ProductRoutingModule
    /*
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'product/:id', canActivate: [ProductGuardService], component: ProductDetailComponent }
    ])
    */

  ],
  declarations: [
    ProductListComponent,
    ProductFilterPipe,
    ProductDetailComponent
  ],
  providers: [
    ProductGuardService,
    ProductService
  ]
})
export class ProductModule { }
