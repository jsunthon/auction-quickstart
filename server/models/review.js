class Review {
    constructor(id,
                productId,
                timestamp,
                user,
                rating,
                comment) {
        this.id = id;
        this.productId = productId;
        this.timestamp = timestamp;
        this.user = user;
        this.rating = rating;
        this.comment = comment;
    }
}


module.exports = Review;