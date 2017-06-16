"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var StarsComponent = (function () {
    function StarsComponent() {
        this.maxStars = 5;
        this.readonly = true; // by default, stars is read only
        this.ratingChange = new core_1.EventEmitter(); // enables the star component to communicate with it's parent
    }
    Object.defineProperty(StarsComponent.prototype, "rating", {
        get: function () {
            return this._rating;
        },
        set: function (value) {
            // console.log('Rating changes value to: ' + value);
            this._rating = value || 0; // if value is undefined, _rating gets a default value of 0
            this.stars = Array(this.maxStars).fill(true, 0, this._rating);
        },
        enumerable: true,
        configurable: true
    });
    // call ratingChange.emit(someNumber) to emit new ratings to subscribers
    StarsComponent.prototype.fillStarsWithColor = function (index) {
        if (!this.readonly) {
            this.rating = index + 1;
            this.ratingChange.emit(this.rating); // subscribers or eventhandlers will receive this new value
        }
    };
    // ngOnInit is called when the component has been successfully
    // instantiated and it's member variables populated w/ value
    StarsComponent.prototype.ngOnInit = function () {
    };
    return StarsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], StarsComponent.prototype, "readonly", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], StarsComponent.prototype, "rating", null);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], StarsComponent.prototype, "ratingChange", void 0);
StarsComponent = __decorate([
    core_1.Component({
        selector: 'stars',
        templateUrl: 'app/components/stars/stars.component.html',
        styleUrls: ['app/components//stars/stars.component.css']
    })
], StarsComponent);
exports.StarsComponent = StarsComponent;
//# sourceMappingURL=stars.component.js.map