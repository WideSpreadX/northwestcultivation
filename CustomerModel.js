const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
    f_name: {
        type: String
    },
    l_name: {
        type: String
    },
    business_name: {
        type: String
    },
    phone: {
        type: String
    },
    email: {
        type: String
    },
    country: {
        type: String
    },
    state: {
        type: String
    },
    favorites: {
        type: Array
    },
    cart: {
        type: Array
    }

});

const Customer = mongoose.model("Customer", CustomerSchema);

module.exports = Customer;