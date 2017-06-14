import {Injectable} from '@angular/core';
import {Product} from '../models/product.model';

// mock
import {productsMock} from '../mock/products.mock';

@Injectable()
export class ProductService {
  getProducts(): Product[] {
    return productsMock.map((product) => {
      return new Product(
        product.id,
        product.title,
        product.price,
        product.rating,
        product.description,
        product.categories
      );
    });
  }

  /**
   * Returns the product with the specified ID.
   * @param id
   * @returns {undefined|Product}
   */
  getProductById(id: number): Product {
    return this.getProducts().find(product => product.id === id);
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
