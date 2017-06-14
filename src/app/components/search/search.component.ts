import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  formModel: FormGroup;
  productCategories: string[];

  constructor(fb: FormBuilder, productService: ProductService) {
    this.productCategories = productService.getCategories();
    this.formModel = fb.group({
      'prodTitle': ['', this.titleValidator],
      'prodPrice': ['', this.priceValidator],
      'prodCategory': [this.productCategories[0]]
    });
  }

  titleValidator(formControl: FormControl): any {
    if (formControl.dirty) {
      let title = formControl.value || '';
      return title.length >= 3 ? null : {title: true};
    }
    return null;
  }

  priceValidator(formControl: FormControl): any {
    if (formControl.dirty) {
      let price = formControl.value;
      if (!price) {
        return {price: true};
      }
      return parseInt(price, 10) > 0 ? null : {price: true};
    }
    return null;
  }

  onSearch() {
    if (this.formModel.valid) {
      console.log(JSON.stringify(this.formModel.value));
    } else {
      console.log('Form is invalid!');
    }
  }
}
