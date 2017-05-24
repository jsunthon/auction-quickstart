function productApi(app, dbConn) {
    /**
     * Get all products
     */
    app.get('/products', (req, res) => {
        dbConn.query('SELECT * from PRODUCTS', (err, results, fields) => {
            if (err) {
                res.status(500).json(err);
            } else {
                res.status(200).json(results);
            }
        });
    });

    /**
     * Get a product with a specific id
     */
    app.get('/products/:id', (req, res) => {
        let productId = parseInt(req.params.id, 10);
        let pStmt = 'SELECT * from products where id = ?';
        dbConn.query(pStmt, [productId], (err, products, fields) => {
            if (err) {
                res.status(500).json(err);
            } else {
                res.status(200).json(products);
            }
        });
    });

    /**
     * Get all the reviews for a particular product
     */
    app.get('/products/:id/reviews', (req, res) => {
        let productId = parseInt(req.params.id, 10);
        let pStmt = 'SELECT r.id, r.dateCreated, r.rating, r.comment, u.username' +
            ' FROM reviews r inner join users u on r.userId=u.id' +
            ' where productId = ?';
        dbConn.query(pStmt, [productId], (err, results, fields) => {
            if (err) {
                res.status(500).end();
            }
            let reviews = [];
            results.map(result => {
                let review = {};
                review.id = result.id;
                review.dateCreated = result.dateCreated;
                review.rating = result.rating;
                review.comment = result.comment;
                review.user = result.username;
                reviews.push(review);
            });
            res.status(200).json(reviews);
        });
    });
}

module.exports = productApi;