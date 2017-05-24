import {Injectable} from '@angular/core';
import {Review} from '../models/review.model';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';
import {Http, RequestOptions} from '@angular/http';
import {Headers} from '@angular/http';

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

  // Add a review for a product, by a particular user
  addReview(body: {}): any {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers});
    return this.http.post('/reviews', body, options)
      .map(res => res.json());
  }
}

