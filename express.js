/**
 * Created by ariel on 25/01/2017.
 */

const express = require('express');
const open = require('open');
const path = require('path');
var app = express();

app.use('/', express.static(_dirname));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname +'/index.html'));
    console.log('Someone was logging!');
});

app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
});

open("127.0.0.1:8080", 'chrome');