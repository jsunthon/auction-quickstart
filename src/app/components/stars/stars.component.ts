import {
  Component,
  Input,
  OnInit,
  EventEmitter,
  Output
} from '@angular/core';

@Component({
  selector: 'stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  private _rating: number; // private input variable
  private stars: boolean[];
  private maxStars: number = 5;

  @Input() readonly: boolean = true; // by default, stars is read only

  @Input() get rating(): number {
    return this._rating;
  }

  set rating(value: number) {
    console.log('Rating changes value to: ' + value);
    this._rating = value || 0; // if value is undefined, _rating gets a default value of 0
    this.stars = Array(this.maxStars).fill(true, 0, this._rating);
  }

  @Output() ratingChange: EventEmitter<number> = new EventEmitter(); // enables the star component to communicate with it's parent

  // call ratingChange.emit(someNumber) to emit new ratings to subscribers
  fillStarsWithColor(index: number) {
    if (!this.readonly) {
      this.rating = index + 1;
      this.ratingChange.emit(this.rating); // subscribers or eventhandlers will receive this new value
    }
  }

  // ngOnInit is called when the component has been successfully
  // instantiated and it's member variables populated w/ value
  ngOnInit() {
  }
}
