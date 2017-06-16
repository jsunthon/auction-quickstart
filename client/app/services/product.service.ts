import {Injectable} from '@angular/core';
import {Product} from '../models/product.model';


import {Http} from '@angular/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';


@Injectable()
export class ProductService {
  constructor(private http: Http) {
  }

  getProducts(): Observable<Product[]> {
    return this.http.get('/products')
      .map(res => res.json());
  };

  /**
   * Returns the product with the specified ID.
   * @param id
   * @returns {undefined|Product}
   */
  getProductById(id: number): Observable<Product> {
    return this.http.get(`/products/${id}`)
      .map(res => res.json());
  }

  getCategories(): string[] {
    return [
      'All categories',
      'electronics',
      'hardware',
      'books'
    ];
  }
}
