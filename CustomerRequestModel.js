const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CustomerRequestSchema = new Schema({
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
    info_body: {
        type: String
    }
});

const CustomerRequest = mongoose.model("CustomerRequest", CustomerRequestSchema);

module.exports = CustomerRequest;