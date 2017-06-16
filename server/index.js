const express = require('express');
const app = express();
const path = require('path');

const client = path.join(__dirname, '..', 'client');
app.use(express.static(client));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../client/app/index.html'))); // default home page

// api
require('./api/product')(app);
require('./api/review')(app);

const server = app.listen(8000, "localhost", () => {
    console.log('Hey!');
});



