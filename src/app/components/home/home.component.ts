import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Product} from '../../models/product.model';
import {FormControl} from '@angular/forms';

import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  titleFilter: FormControl = new FormControl();
  filterCriteria: string = '';

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    // valueChanges returns an obsercable of elements received from the input element
    this.titleFilter.valueChanges
      .debounceTime(100)
      .subscribe(assignValue,
        error => console.error(error));

    function assignValue(value: string) {
      console.log('Got new assigned value: ' + value);
      this.filterCriteria = value;
      console.log('New filter criteria: ' + this.filterCriteria);
    }
  }
}
