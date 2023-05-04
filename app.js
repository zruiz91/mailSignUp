
const express = require('express');

const https = require('https');

const bodyParser = require('body-parser');

const app = express();

const request = require('request');

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, function () {
    console.log('listening on port 3000');
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/signup.html');
});

app.post('/', function (req, res) {

    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;

    console.log(firstName);
    console.log(lastName);
    console.log(email);
});