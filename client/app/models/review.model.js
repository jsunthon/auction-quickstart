"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Review = (function () {
    function Review(id, productId, timestamp, user, rating, comment) {
        this.id = id;
        this.productId = productId;
        this.timestamp = timestamp;
        this.user = user;
        this.rating = rating;
        this.comment = comment;
    }
    return Review;
}());
exports.Review = Review;
//# sourceMappingURL=review.model.js.map