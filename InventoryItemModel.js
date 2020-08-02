const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const InventoryItemSchema = new Schema({
    item_name: {
        type: String
    },
    item_location: {
        type: String
    },
    item_number: {
        type: String
    },
    item_category: {
        type: String
    },
    item_make: {
        type: String
    },
    item_model: {
        type: String
    },
    item_price: {
        type: String
    },
    item_qty: {
        type: Number
    },
    item_need: {
        type: Number
    },
    item_url: {
        type: String
    }

});

const InventoryItem = mongoose.model("InventoryItem", InventoryItemSchema);

module.exports = InventoryItem;