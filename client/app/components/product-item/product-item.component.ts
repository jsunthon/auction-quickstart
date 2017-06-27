import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from '../../models/product.model';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'product-item',
  templateUrl: 'app/components/product-item/product-item.component.html',
  styleUrls: ['app/components/product-item/product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: Product;

  constructor() {
  }
}
