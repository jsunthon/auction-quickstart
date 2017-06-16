const Product = require('../models/product'); // product model
const productMocks = require('../models/mock/products'); // simulate pulling data from db

function productApi(app) {
    console.log('Received express instance: ' + JSON.stringify(app));

    app.get('/products', (req, res) => {
        res.json(productMocks);
    });

    app.get('/products/:id', (req, res) => {
        let productId = parseInt(req.params.id, 10);
        console.log('got prudci d: ' + productId);
        let products = productMocks.find(product => product.id === productId);
        res.json(products);
    });
}

module.exports = productApi;