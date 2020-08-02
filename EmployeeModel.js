const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    f_name: {
        type: String
    },
    l_name: {
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
    department: {
        type: String
    },
    currently_clocked_in: {
        type: Boolean,
        default: false
    },
    clocked_in: {
        type: Array,
        $ref : "ClockIn"
    },
    clocked_out: {
        type: Array,
        $ref : "ClockOut"
    }


});

const Employee = mongoose.model("Employee", EmployeeSchema);

module.exports = Employee;