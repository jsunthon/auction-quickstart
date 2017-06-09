import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'stars',
    templateUrl: './stars.component.html',
    styles: [` .starrating {color: #d17581}`]
})
export class StarsComponent implements OnInit {
    @Input() count: number = 5; //  type number, default is count
    @Input() rating: number = 0; // type number, default is 0
    stars: boolean[] = []; // array of boolean; default is empty

    // ngOnInit is called when the component has been successfully
    // instantiated and it's member variables populated w/ value
    ngOnInit() {
        for (let i = 1; i <= this.count; i++) {
            this.stars.push(i > this.rating);
        }
    }
}