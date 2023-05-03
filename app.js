
const express = require('express');

const https = require('https');

const bodyParser = require('body-parser');

const app = express();

const request = require('request');

app.use(express.static("public"));

app.listen(3000, function () {
    console.log('listening on port 3000');
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/signup.html');
});

