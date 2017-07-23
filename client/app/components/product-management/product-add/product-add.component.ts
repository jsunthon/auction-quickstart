import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'product-add',
  templateUrl: 'app/components/product-management/product-add/product-add.component.html'
})
export class ProductAddComponent implements OnInit {
  @Output() close: EventEmitter<string> = new EventEmitter();
  addProdForm: FormGroup;
  _categories: Array<Category> = [];
  categoriesServer: Array<Category> = [{
    name: 'electronics',
    selected: false
  },
    {
      name: 'hardware',
      selected: false
    }, {
      name: '',
      selected: false
    }];

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this._categories.push.apply(this._categories, this.categoriesServer);
    this.createForm();
  }

  createForm() {
    this.addProdForm = this.fb.group({
      title: '',
      price: '',
      description: '',
      categories: this.buildCategories()
    });
  }

  buildCategories() {
    const arr = this._categories.map(category => {
      return this.fb.control(category.selected);
    }); // [true, false, ...]
    return this.fb.array(arr);
  }

  get categories() {
    return this.addProdForm.get('categories');
  }

  closeForm() {
    this.close.emit('productAdd');
  }
}

class Category {
  name: string;
  selected: boolean;
}
