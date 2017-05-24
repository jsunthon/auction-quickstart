import {Injectable} from '@angular/core';
import {Product} from '../models/product.model';


import {Http} from '@angular/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';
import {Review} from "../models/review.model";


@Injectable()
export class ProductService {
  constructor(private http: Http) {
  }

  getProducts(): Observable<Product[]> {
    return this.http.get('/products')
      .map(res => {
        let unparsed = res.json();
        return unparsed.map((jsonProd: any) => {
          let categories = jsonProd.categories.split(',');
          jsonProd.categories = categories;
          return jsonProd;
        });
      });
  };

  /**
   * Returns the product with the specified ID.
   * @param id
   * @returns {undefined|Product}
   */
  getProductById(id: number): Observable<Product> {
    return this.http.get(`/products/${id}`)
      .map(res => res.json()[0]);
  }

  /**
   * Return the reviews associated with a particular product
   * @param productId
   * @returns {undefined|{id: number, productId: number, timestamp: string, user: string, rating: number, comment: string}|{id: number,
    * productId: number, timestamp: string, user: string, rating: number, comment: string}}
   */
  getProductReviews(productId: number): Observable<Review[]> {
    return this.http.get(`/products/${productId}/reviews`)
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
