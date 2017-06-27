import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../../models/product.model';
import {Review} from '../../models/review.model';
import {ReviewService} from '../../services/review.service';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'product-detail',
  templateUrl: 'app/components/product-detail/product-detail.html',
  providers: [{provide: ReviewService, useClass: ReviewService}]
})
export class ProductDetailComponent implements OnInit {
  private productId: number;
  private product: Product;
  private reviews: Review[];
  private newComment: string; // new string for the comment
  private newRating: number; // new string for the rating
  private isReviewHidden: boolean = true; // flag to show the review box or not

  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductService,
              private reviewService: ReviewService) {
    this.productId = parseInt(activatedRoute.snapshot.params['id'], 10);
  }

  ngOnInit() {
    this.productService.getProductById(this.productId)
      .subscribe(product => {
        this.product = product;
      });
    this.productService.getProductReviews(this.productId)
      .subscribe(reviews => this.reviews = reviews);
  }

  addReview(): void {
    if (this.newComment) {
      let body = {
        rating: this.newRating,
        comment: this.newComment,
        productId: this.productId,
        userId: 1
      }
      this.reviewService.addReview(body)
        .subscribe(() => {
          this.productService.getProductReviews(this.productId).subscribe(reviews => {
            this.reviews = reviews;
          });
        }, (err: any) => alert(JSON.stringify(err)));
      this.resetForm();
    }
  }

  /**
   * This function returns an average number of all the review
   * @param reviews
   */
  averageRating(reviews: Review[]): number {
    let reviewSum = reviews.reduce((runningSum, review) => {
      return runningSum + review.rating;
    }, 0);
    let averageRating = reviewSum / reviews.length;
    return averageRating;
  }

  resetForm() {
    this.newRating = 0;
    this.newComment = null;
    this.isReviewHidden = true;
  }
}
