import {Component, ViewEncapsulation} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Product} from '../../models/product.model';

@Component({
    selector: 'app',
    templateUrl: 'app/components/app/app.component.html',
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    products: Array<Product> = []; // initialize and assign the product array

    constructor(private productService: ProductService) {
        this.productService.getProducts()
          .subscribe(products => {
            this.products = products;
          });
    }
}
