const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ClockOutSchema = new Schema({
    time: {
        type: Date,
        default: Date.now
    }
});

const ClockOut = mongoose.model("ClockOut", ClockOutSchema);

module.exports = ClockOut;