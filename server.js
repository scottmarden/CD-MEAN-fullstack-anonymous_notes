const express = require("express");

const session = require('express-session');

const app = express();

const path = require("path");

const bodyParser = require("body-parser");

const mongoose = require("mongoose");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './client/static')));

app.use(session({secret: 'laksngalkdsng;alsdkngoinalkneglksndgoin23oh3ot8h'}));

//if Angular file is named something other than public, change 'public' here
app.use(express.static(path.join(__dirname, '/public/dist')));

mongoose.Promise = global.Promise;

//connects to mongoose file and routes file
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.all("*", (req,res,next) => {
    res.sendfile(path.resolve("./public/dist/index.html"))
});

//Turns the server on.
var server = app.listen(3316, () => {
	console.log("App listening on port 3316");
});
