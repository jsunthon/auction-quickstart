import {Component, Input} from '@angular/core';
import {StarsComponent} from '../stars/stars.component';
import {Product} from '../../models/product.model';

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: Product;
}
