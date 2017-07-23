import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Product} from '../../models/product.model';
import {FormGroup} from '@angular/forms';


@Component({
  selector: 'product-management',
  templateUrl: 'app/components/product-management/product-management.component.html'
})
export class ProductManagementComponent implements OnInit {
  private products: Array<Product>;
  private editForm: FormGroup;
  private addForm: FormGroup;
  private message: string;
  public action: string;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe(products => this.products = products,
        error => window.alert(error));
  }

  // Impl delete button
  deleteProduct(product: Product): void {
    this.productService.deleteProduct(product)
      .subscribe(deleted => {
        this.message = deleted ? 'Successfully deleted' : 'Could not delete';
      }, err => this.message = err);
  }

  // impl event handler for closing of any form on the page
  onFormClose(value: string) {
    if (value && value.length > 0) {
      this.action = '';
    }
  }
}
