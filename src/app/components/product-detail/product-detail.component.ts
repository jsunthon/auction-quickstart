import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../../models/product.model';
import {Review} from '../../models/review.model';
import {ReviewService} from '../../services/review.service';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.html',
  providers: [{provide: ReviewService, useClass: ReviewService}]
})
export class ProductDetailComponent implements OnInit {
  private productId: number;
  private product: Product;
  private reviews: Review[];

  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductService,
              private reviewService: ReviewService) {
    this.productId = parseInt(activatedRoute.snapshot.params['id'], 10);
  }

  ngOnInit() {
    this.product = this.productService.getProductById(this.productId);
    this.reviews = this.reviewService.getReviewsByProductId(this.productId);
  }
}
