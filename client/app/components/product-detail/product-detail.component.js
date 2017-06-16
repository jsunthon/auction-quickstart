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
var router_1 = require("@angular/router");
var review_model_1 = require("../../models/review.model");
var review_service_1 = require("../../services/review.service");
var product_service_1 = require("../../services/product.service");
var ProductDetailComponent = (function () {
    function ProductDetailComponent(activatedRoute, productService, reviewService) {
        this.activatedRoute = activatedRoute;
        this.productService = productService;
        this.reviewService = reviewService;
        this.isReviewHidden = true; // flag to show the review box or not
        this.productId = parseInt(activatedRoute.snapshot.params['id'], 10);
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getProductById(this.productId)
            .subscribe(function (product) {
            _this.product = product;
        });
        this.reviewService.getReviewsByProductId(this.productId)
            .subscribe(function (reviews) { return _this.reviews = reviews; });
    };
    ProductDetailComponent.prototype.addReview = function () {
        if (this.newComment) {
            // create a new review
            var review = new review_model_1.Review(Math.random() + 100, this.product.id, new Date(), 'Anonymous user', this.newRating, this.newComment); // create the new review
            console.log('Adding a new review: ' + JSON.stringify(review));
            // add a review to the product's reviews
            this.reviews = this.reviews.concat([review]);
            this.product.rating = this.averageRating(this.reviews);
            this.resetForm();
        }
    };
    /**
     * This function returns an average number of all the review
     * @param reviews
     */
    ProductDetailComponent.prototype.averageRating = function (reviews) {
        var reviewSum = reviews.reduce(function (runningSum, review) {
            return runningSum + review.rating;
        }, 0);
        var averageRating = reviewSum / reviews.length;
        console.log('Got new rating: ' + averageRating);
        return averageRating;
    };
    ProductDetailComponent.prototype.resetForm = function () {
        this.newRating = 0;
        this.newComment = null;
        this.isReviewHidden = true;
    };
    ProductDetailComponent.prototype.newRatingHandler = function (event) {
        console.log('Got new event: ' + JSON.stringify(event));
    };
    return ProductDetailComponent;
}());
ProductDetailComponent = __decorate([
    core_1.Component({
        selector: 'product-detail',
        templateUrl: 'app/components/product-detail/product-detail.html',
        providers: [{ provide: review_service_1.ReviewService, useClass: review_service_1.ReviewService }]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        product_service_1.ProductService,
        review_service_1.ReviewService])
], ProductDetailComponent);
exports.ProductDetailComponent = ProductDetailComponent;
//# sourceMappingURL=product-detail.component.js.map