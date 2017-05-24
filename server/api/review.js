function reviewApi(app, dbConn) {

    // Get all the reviews
    app.get('/reviews', (req, res) => {
        let query = 'SELECT * FROM reviews';
        dbConn.query(query, (err, reviews, fields) => {
            if (err) {
                res.status(500).json(err);
            } else {
                res.status(200).json(reviews);
            }
        });
    });

    // Add a review
    app.post('/reviews', (req, res) => {
        let body = req.body;
        console.log(body);
        let pStmt = 'INSERT INTO reviews (rating, comment, productId, userId) ' +
            'values (?, ?, ?, ?)';
        dbConn.query(pStmt, [body.rating, body.comment, body.productId, body.userId],
            (err, results, fields) => {
                if (err) {
                    res.status(500).json(err);
                } else {
                    res.status(201).json(results);
                }
            });
    });
}

module.exports = reviewApi;