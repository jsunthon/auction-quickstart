const Review = require('../models/review');
const reviewMocks = require('../models/mock/reviews');

function reviewApi(app) {
    app.get('/reviews', (req, res) => {
        res.json(reviewMocks);
    });

    app.get('/reviews/:productId', (req, res) => {
        let productId = parseInt(req.params.productId, 10);
        let reviews = reviewMocks.filter((review) => {
            return review.productId == productId;
        });
        res.json(reviews);
    });
}

module.exports = reviewApi;