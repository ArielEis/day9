/**
 * Created by ariel on 25/01/2017.
 */


const express = require('express');
const open = require('open');
const path = require('path');
__dirname = path.resolve();
var cache = [];
var server = express();

server.use('/', express.static(__dirname));

server.get('/form', function (req, res) {

    var result = req.query;
    if (validateForm(result)){
        res.status(200).send('ok');
        cache.push(req.query);
        for (key in result){
            console.log(key +" = "+result[key]);
        }
        console.log("\n");
    } else {
        res.status(500).send('Error: 500');
        console.log("Error: Some fields are empty\n");
    }

   /* var full_name = req.param('full_name');
    var password = req.param('pass');
    var country = req.param('country');
    var gender = req.param('gender');
    var dog = req.param('dog');
    var cat = req.param('cat');
    var someWords = req.param('some_words');

    console.log("full_name = "+full_name);
    console.log("password = "+password);
    console.log("country = "+country);
    console.log("gender = "+gender);
    if (dog !== undefined){
        console.log("dog = yes");
    } else {
        console.log("dog = no");
    }

    if (cat !== undefined){
        console.log("cat = yes");
    } else {
        console.log("cat = no");
    }
    console.log("some_words = "+someWords); */

});

server.listen(8080);

open("127.0.0.1:8080", 'chrome');


function validateForm(result){
    for (key in result){
        if (result[key] === ""){
            return false
        }
    }
    return true;
}