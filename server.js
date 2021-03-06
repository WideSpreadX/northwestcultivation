const express = require('express');
const router = express.Router();
const logger = require('morgan');
const mongoose = require('mongoose');
const Handlebars = require('handlebars')
const exphbs = require("express-handlebars");
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
const insecureHandlebars = allowInsecurePrototypeAccess(Handlebars);
const bodyParser = require('body-parser');

const todoRoute = require('./routes/todo');
// DB Models
/* const User = require('./userModel.js');
*/
const CustomerRequest = require('./CustomerRequestModel.js');
const Employee = require('./EmployeeModel.js');
const Customer = require('./CustomerModel.js');
/* const ClockIn = require('./ClockInModel.js');
const ClockOut = require('./ClockOutModel.js'); */
const Plant = require('./PlantModel.js');
const Flower = require('./FlowerModel.js');
const InventoryItem = require('./InventoryItemModel.js');
const ToDo = require('./ToDoModel.js');
// Create an instance of the express app.
const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;



app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(logger('dev'));
/* app.use(express.urlencoded({extended: true})); */
app.use(express.json());
app.use(express.static('public'));

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" },{
    handlebars: allowInsecurePrototypeAccess(Handlebars)}));
app.set("view engine", "handlebars");


mongoose.connect( process.env.MONGODB_URI || 'mongodb://localhost/nwc', {useNewUrlParser: true, useUnifiedTopology: true});


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

// Flowers
app.get('/flowers', (req, res) => {
    res.render('flowers');
})


// Products
app.get('/products', (req, res) => {
    res.render('products');
})



// All Products
app.get('/all-products', (req, res) => {
    res.render('all-products');
})

// New Customer Form

app.post('/customer/new', (req, res) => {
     Customer.create(req.body)
    .then(function(dbCustomer) {
        res.redirect('/request-sent');
    });

});

// Get All Customers
app.get('/customer/all', function(req, res) {
   Customer.find((err, data) => {
       if(!err){
           res.render('employee-customer-all', {customers: data});
        } else {
            console.log('Could not retrieve Customers')
        }
   });
   
});

// Contact Form

app.post('/needs-info', (req, res) => {
    CustomerRequest.create(req.body)
    .then(function(dbCustomerRequest) {
         res.redirect('/request-sent');
    });
})

app.get('/request-sent', function(req, res) {
    res.render('request-sent')
});

// Get All Contact Messages
app.get('/needs-info/all', function(req, res) {
    CustomerRequest.find((err, data) => {
        if(!err){
            res.render('customer-request-all', {customerRequests: data});
         } else {
             console.log('Could not retrieve Customer Requests')
         }
    });
 
});

/* Employees */


// Employee Dashboard
app.get('/employee', function(req, res) {
    res.render('employee-dashboard');
});


// ZunBudz
app.get('/zunbudz', function(req, res) {
    res.render('zunbudz');
});


// Add New Plant Form

app.post('/plant', (req, res) => {
    Plant.create(req.body)
    .then(function(dbPlant) {
        res.redirect('/request-sent');
    });
})


// Get All Plants
app.get('/plant/all', function(req, res) {
    Plant.find((err, data) => {
        if(!err){
            res.render('plant-all', {plant: data});
            console.log(data);
         } else {
             console.log('Could not retrieve Plants')
         }
    });
});

// Add New Flower Form

app.post('/flower', (req, res) => {
    Flower.create(req.body)
    .then(function(dbFlower) {
        res.redirect('/request-sent');
    });
})


// Get All Plants
app.get('/flower/all', function(req, res) {
    Flower.find((err, data) => {
        if(!err){
            res.render('flower-all', {flower: data});
            console.log(data);
         } else {
             console.log('Could not retrieve Plants')
         }
    });
});

// Add New Inventory Form

app.post('/inventory', (req, res) => {
    InventoryItem.create(req.body)
    .then(function(dbInventoryItem) {
        res.redirect('/request-sent');
    });
})


// Get All Plants
app.get('/inventory/all', function(req, res) {
    InventoryItem.find((err, data) => {
        if(!err){
            res.render('inventory-all', {inventoryItem: data});
         } else {
             console.log('Could not retrieve Inventory List')
         }
    });
});


// Add New Employee Form

app.post('/employee', (req, res) => {
    Employee.create(req.body)
    .then(function(dbEmployee) {
        res.redirect('/request-sent');
    });
})


// Get All Employees
app.get('/employee/all', function(req, res) {
    Employee.find((err, data) => {
        if(!err){
            res.render('employee-all', {employee: data});
         } else {
             console.log('Could not retrieve Employees')
         }
    });
});

// Clock In
app.put('/employee/clock-in', (req, res) => {
    Employee.findByIdAndUpdate(req.body)
    .then(function(dbEmployee) {
        res.redirect('/request-sent');
    })
})
/* Customers */


// Customer Dashboard
app.get('/customer', function(req, res) {
    res.render('customer-dashboard');
});

// Add New Customer Form

app.post('/customer', (req, res) => {
    Customer.create(req.body)
    .then(function(dbCustomer) {
        res.redirect('/request-sent');
    });
})



// Add New To Do Form
app.use('/to-do', todoRoute);

// Start Server
app.listen(PORT, function() {
    console.log(`App running on port ${PORT}`);
})