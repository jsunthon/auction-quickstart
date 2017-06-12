import {Injectable} from '@angular/core';
import {reviewsMock} from '../mock/reviews.mock';
import {Review} from '../models/review.model';

@Injectable()
export class ReviewService {
  constructor() {
  }

  /**
   * Fetches all the reviews json , converts from JSON to Review class instances
   * @returns {[Review,Review,Review,Review,Review]}
   */
  getReviews(): Review[] {
    return reviewsMock.map(reviewMock => {
      return new Review(
        reviewMock.id,
        reviewMock.productId,
        new Date(reviewMock.timestamp),
        reviewMock.user,
        reviewMock.rating,
        reviewMock.comment
      );
    });
  }

  /**
   * Return the reviews associated with a particular product
   * @param productId
   * @returns {undefined|{id: number, productId: number, timestamp: string, user: string, rating: number, comment: string}|{id: number,
    * productId: number, timestamp: string, user: string, rating: number, comment: string}}
   */
  getReviewsByProductId(productId: number): Review[] {
    let reviews: Review[] = this.getReviews();
    return reviews.filter(review => review.productId === productId);
  }
}

