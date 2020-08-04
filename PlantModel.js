const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PlantSchema = new Schema({
    name: {
        type: String
    },
    s_name: {
        type: String
    },
    thc: {
        type: String
    },
    thcv: {
        type: String
    },
    cbd: {
        type: String
    },
    cbg: {
        type: String
    },
    cbn: {
        type: String
    },
    genetics: {
        type: Array
    },
    effect: {
        type: Array
    },
    description: {
        type: String
    },
    price1: {
        type: String
    },
    price2: {
        type: String
    },
    price3: {
        type: String
    }

});

const Plant = mongoose.model("Plant", PlantSchema);

module.exports = Plant;