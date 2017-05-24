class Review {
    constructor(id,
                dateCreated,
                rating,
                comment,
                productId,
                userId) {
        this.id = id;
        this.dateCreated = dateCreated;
        this.rating = rating;
        this.comment = comment;
        this.productId = productId;
        this.userId = userId;
    }
}

module.exports = Review;