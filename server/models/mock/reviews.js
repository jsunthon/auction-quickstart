const Review = require('../review');

const reviewsDb = [{
    "id": 0,
    "productId": 0,
    "timestamp": "2014-05-20T02:17:00+00:00",
    "user": "User 1",
    "rating": 5,
    "comment": "Aenean vestibulum velit id placerat posuere. Praesent..."
}, {
    "id": 1,
    "productId": 0,
    "timestamp": "2014-05-20T02:53:00+00:00",
    "user": "User 2",
    "rating": 3,
    "comment": "Aenean vestibulum velit id placerat posuere. Praesent... "
}, {
    "id": 2,
    "productId": 1,
    "timestamp": "2014-05-20T02:53:00+00:00",
    "user": "User 3",
    "rating": 3,
    "comment": "This product was awesome "
}];

const reviewsMock = reviewsDb.map(review => {
    return new Review(
        review.id,
        review.productId,
        review.timestamp,
        review.user,
        review.rating,
        review.comment
    );
});

module.exports = reviewsMock;
