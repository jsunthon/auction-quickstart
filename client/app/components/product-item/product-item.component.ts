import {Component, Input} from '@angular/core';
import {StarsComponent} from '../stars/stars.component';
import {Product} from '../../models/product.model';

@Component({
  selector: 'product-item',
  templateUrl: 'app/components/product-item/product-item.component.html',
  styleUrls: ['app/components/product-item/product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: Product;
}
