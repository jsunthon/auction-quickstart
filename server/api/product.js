function productApi(app, dbConn) {

    /**
     * Get all products
     */
    app.get('/products/all', (req, res) => {
        let query = 'SELECT * from PRODUCTS';
        dbConn.query(query, (err, results, fields) => {
            if (err) {
                res.status(500).json(err);
            } else {
                res.status(200).json(results);
            }
        });
    });

    /**
     * Get searched products
     */
    app.get('/products/search', (req, res) => {
        dbConn.query(`SELECT * from PRODUCTS where title LIKE '%${req.query.term}%'`, (err, results, fields) => {
            if (err) {
                res.status(500).json(err);
            } else {
                console.log(results);
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

    app.delete('/products/:id', (req, res) => {
        let productId = parseInt(req.params.id, 10);
        let deleteStmt = "DELETE from reviews where productId = ?";
        dbConn.query(deleteStmt, [productId], (err, results, fields) => {
            if (err) {
                res.status(500).json(err);
            }
            deleteStmt = "DELETE from PRODUCTS where id = ?";
            dbConn.query(deleteStmt, [productId], (err, results, fields) => {
                if (err) {
                    res.status(500).json(err);
                } else {
                    res.status(201).json({status: 'successful'});
                }
            });
        });
    });

    /**
     * Updates the given product with the given id, and creating it if none yet exists
     */
    app.put('/products', (req, res) => {
        const body = req.body;
        const id = body.productId;
        const title = body.title;
        const price = body.price;
        const rating = body.rating;
        const description = body.description;
        const categories = body.categories.reduce((acc, curr, index, arr) => {
            acc += curr;
            if (index !== body.categories.length - 1) {
                acc += ', ';
            }
            return acc;
        }, '');
        let query = 'SELECT id from products where id = ?';
        dbConn.query(query, [id], (err, results, fields) => {
            if (results.length > 0) {
                query = "UPDATE products set title = ?, price = ?, rating = ?, description = ?, " +
                    "categories = ? where id = ?";
                dbConn.query(query, [title, price, rating, description, categories, id],
                    (err, results, fields) => {
                        sendResp(res, err, results);
                    });
            } else {
                // create a new record
                query = "INSERT INTO products (title, price, rating, description, categories)"
                    + " VALUES (?, ?, ?, ?, ?)";
                dbConn.query(query, [title, price, rating, description, categories],
                    (err, results, fields) => {
                        sendResp(res, err, results);
                    });
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

    app.get('/file/download/:name', (req, res, next) => {
        console.log(`download file:  ${req.params.name}`);
        let filePath = '/' + req.params.name;
        res.download(__dirname + filePath, req.params.name, err => {
            if (err) {
                res.send(err);
            } else {
                console.log('Successfully downloaded');
            }
        });
    });

    function sendResp(res, err, results) {
        if (err) {
            console.error(err.Error);
            res.sendStatus(500);
        } else {
            res.sendStatus(200);
        }
    }

    app.get('/c', [cb0], function (req, res, next) {
        console.log('From second func');
        next();
    }, function (req, res, next) {
        console.log(res);
        next();
    }, function (req, res) {
        res.redirect('products');
    });

    function cb0(req, res, next) {
        let x = 0;
        console.log('X from cb0:' + x);
        next();
    }

    function cb1(req, res, next) {
        console.log('Arguments in cb1: ' + arguments);
        next();
    }

    function cb2(req, res) {
        console.log('Arguments in cb2: ' + arguments);
        res.send('Hello from C!');
    }
}

module.exports = productApi;