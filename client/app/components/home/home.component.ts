import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Product} from '../../models/product.model';
import {FormControl} from '@angular/forms';

import 'rxjs/add/operator/debounceTime';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'home',
  templateUrl: 'app/components/home/home.component.html',
  styleUrls: ['app/components/home/home.component.css']
})
export class HomeComponent implements OnInit {
  products: Observable<Product[]>;
  private searchTerms = new Subject<string>();
  titleFilter: FormControl = new FormControl();
  private startSearch = false;

  constructor(private productService: ProductService) {
  }

  search(key: string): void {
    if (!this.startSearch) {
      this.startSearch = true;
      this.products = this.searchTerms
        .debounceTime(300)
        .distinctUntilChanged()
        .switchMap(term => {
          console.log('Got new value: ' + key);
          return term ? this.productService.getProductsSearch(term) : Observable.of<Product[]>([]);
        })
        .catch(error => {
          console.error(error);
          return Observable.of<Product[]>([]);
        });
    }
    this.searchTerms.next(key);
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
}
