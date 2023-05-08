
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

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;

    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName,
                }
            }
        ]
    };

    const jsonData = JSON.stringify(data);

    const url = "https://us21.api.,ailchimp.com/3.0/lists/bf207e9252";

    const options = {
        method: "POST",
        auth: "zach1:4b8d678e897e0eba2b4ad7b29c896963-us21"
    }

    https.request(url, options, function(response){
        response.on("data", function(data){
            console.log(JSON.parse(data));
        });
    })

    console.log(firstName);
    console.log(lastName);
    console.log(email);
});


// Api Key
// 4b8d678e897e0eba2b4ad7b29c896963-us21

// audience id
// bf207e9252