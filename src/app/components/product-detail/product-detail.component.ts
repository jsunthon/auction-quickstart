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
  private newComment: string; // new string for the comment
  private newRating: number; // new string for the rating
  private isReviewHidden: boolean = true; // flag to show the review box or not

  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductService,
              private reviewService: ReviewService) {
    this.productId = parseInt(activatedRoute.snapshot.params['id'], 10);
  }

  ngOnInit() {
    this.product = this.productService.getProductById(this.productId);
    this.reviews = this.reviewService.getReviewsByProductId(this.productId);
  }

  addReview(): void {
    if (this.newComment) {
      // create a new review
      let review = new Review(
        Math.random() + 100,
        this.product.id,
        new Date(),
        'Anonymous user',
        this.newRating,
        this.newComment); // create the new review
      console.log('Adding a new review: ' + JSON.stringify(review));

      // add a review to the product's reviews
      this.reviews = [...this.reviews, review];
      this.product.rating = this.averageRating(this.reviews);

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

    console.log('Got new rating: ' + averageRating);
    return averageRating;
  }

  resetForm() {
    this.newRating = 0;
    this.newComment = null;
    this.isReviewHidden = true;
  }

  newRatingHandler(event: any) {

    console.log('Got new event: ' + JSON.stringify(event));
  }
}
