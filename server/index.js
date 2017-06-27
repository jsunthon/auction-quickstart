const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const dbConn = require('./database/dbConn');

app.use(bodyParser.json());

const client = path.join(__dirname, '..', 'client');
app.use(express.static(client));
app.get('/', (req, res) => res.sendFile(`${client}/app/index.html`)); // default home page

let server;

dbConn.connect(err => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('connected as id ' + dbConn.threadId);
    // api
    require('./api/product')(app, dbConn);
    require('./api/review')(app, dbConn);

    server = app.listen(8000, "localhost", () => {
        console.log('Hey!');
    });
});




