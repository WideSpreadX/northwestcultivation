const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
var exphbs = require("express-handlebars");

// DB Models
/* const User = require('./userModel.js');
*/
const CustomerRequest = require('./CustomerRequestModel.js');
const Employee = require('./EmployeeModel.js');
const Customer = require('./CustomerModel.js');
/* const ClockIn = require('./ClockInModel.js');
const ClockOut = require('./ClockOutModel.js'); */
const Plant = require('./PlantModel.js');
const InventoryItem = require('./InventoryItemModel.js');
const ToDo = require('./ToDoModel.js');
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


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://nwcultivation:RootRoot!1@cluster0.c850c.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

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


// Get All Contact Messages
app.get('/needs-info/all', function(req, res) {
    CustomerRequest.find({})
    .then(function(dbCustomerRequest) {
        res.json(dbCustomerRequest);
    })
});

/* Employees */


// Employee Dashboard
app.get('/employee', function(req, res) {
    res.render('employee-dashboard');
});


// Add New Plant Form

app.post('/plant', (req, res) => {
    Plant.create(req.body)
    .then(function(dbPlant) {
         res.json(dbPlant);
    });
})


// Get All Plants
app.get('/plant/all', function(req, res) {
    Plant.find({})
    .then(function(dbPlant) {
        res.json(dbPlant);
    })
});

// Add New Inventory Form

app.post('/inventory', (req, res) => {
    InventoryItem.create(req.body)
    .then(function(dbInventoryItem) {
         res.json(dbInventoryItem);
    });
})


// Get All Plants
app.get('/inventory/all', function(req, res) {
    InventoryItem.find({})
    .then(function(dbInventoryItem) {
        res.json(dbInventoryItem);
    })
});


// Add New Employee Form

app.post('/employee', (req, res) => {
    Employee.create(req.body)
    .then(function(dbEmployee) {
         res.json(dbEmployee);
    });
})


// Get All Employees
app.get('/employee/all', function(req, res) {
    Employee.find({})
    .then(function(dbEmployee) {
        res.json(dbEmployee);
    })
});

// Clock In
/* app.put('/clock-in', (req, res) => {
    Employee.findByIdAndUpdate(req.body)
    .then(function(dbEmployee) {
        res.json(dbEmployee);
    })
}) */
/* Customers */


// Customer Dashboard
app.get('/customer', function(req, res) {
    res.render('customer-dashboard');
});

// Add New Customer Form

app.post('/customer', (req, res) => {
    Customer.create(req.body)
    .then(function(dbCustomer) {
         res.json(dbCustomer);
    });
})


// Get All Customers
app.get('/customer/all', function(req, res) {
    Customer.find({})
    .then(function(dbCustomer) {
        res.json(dbCustomer);
    })
});

// Add New To Do Form

app.post('/to-do', (req, res) => {
    ToDo.create(req.body)
    .then(function(dbToDo) {
         res.json(dbToDo);
    });
})


// Get All Customers
app.get('/to-do/all', function(req, res) {
    ToDo.find({})
    .then(function(dbToDo) {
        res.json(dbToDo);
    })
});

// Start Server
app.listen(PORT, function() {
    console.log(`App running on port ${PORT}`);
})