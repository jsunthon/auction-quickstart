import {Injectable} from '@angular/core';
import {Review} from '../models/review.model';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';


@Injectable()
export class ReviewService {
  constructor(private http: Http) {
  }

  /**
   * Fetches all the reviews json , converts from JSON to Review class instances
   * @returns {[Review,Review,Review,Review,Review]}
   */
  getReviews(): Observable<Review[]> {
    return this.http.get('/reviews')
      .map(res => res.json());
  }

  /**
   * Return the reviews associated with a particular product
   * @param productId
   * @returns {undefined|{id: number, productId: number, timestamp: string, user: string, rating: number, comment: string}|{id: number,
    * productId: number, timestamp: string, user: string, rating: number, comment: string}}
   */
  getReviewsByProductId(productId: number): Observable<Review[]> {
    return this.http.get(`/reviews/${productId}`)
      .map(res => res.json());
  }
}

