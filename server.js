const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
var exphbs = require("express-handlebars");

// DB Models
/* const User = require('./userModel.js');
*/
const CustomerRequest = require('./CustomerRequestModel.js');
// Create an instance of the express app.
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(logger('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

mongoose.connect('mongodb://localhost/nwc', {useNewUrlParser: true, useUnifiedTopology: true});

// Routes

// Landing Page
app.get('/', (req, res) => {
    res.render('index');
});



// About Us
app.get('/about', (req, res) => {
    res.render('about');
})

// Contact Us
app.get('/contact', (req, res) => {
    res.render('contact');
})


// Plants
app.get('/plants', (req, res) => {
    res.render('plants');
})


// Products
app.get('/products', (req, res) => {
    res.render('products');
})



// All Products
app.get('/all-products', (req, res) => {
    res.render('all-products');
})

// Contact Form

app.post('/needs-info', (req, res) => {
    CustomerRequest.create(req.body)
    .then(function(dbCustomerRequest) {
         res.json(dbCustomerRequest);
    });
})
// Start Server
app.listen(PORT, function() {
    console.log(`App running on port ${PORT}`);
})