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
require("rxjs/add/operator/map");
var http_1 = require("@angular/http");
var ReviewService = (function () {
    function ReviewService(http) {
        this.http = http;
    }
    /**
     * Fetches all the reviews json , converts from JSON to Review class instances
     * @returns {[Review,Review,Review,Review,Review]}
     */
    ReviewService.prototype.getReviews = function () {
        return this.http.get('/reviews')
            .map(function (res) { return res.json(); });
    };
    /**
     * Return the reviews associated with a particular product
     * @param productId
     * @returns {undefined|{id: number, productId: number, timestamp: string, user: string, rating: number, comment: string}|{id: number,
      * productId: number, timestamp: string, user: string, rating: number, comment: string}}
     */
    ReviewService.prototype.getReviewsByProductId = function (productId) {
        return this.http.get("/reviews/" + productId)
            .map(function (res) { return res.json(); });
    };
    return ReviewService;
}());
ReviewService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ReviewService);
exports.ReviewService = ReviewService;
//# sourceMappingURL=review.service.js.map