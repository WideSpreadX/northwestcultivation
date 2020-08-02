const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ClockInSchema = new Schema({
    time: {
        type: Date,
        default: Date.now
    }
});


const ClockIn = mongoose.model("ClockIn", ClockInSchema);

module.exports = ClockIn;