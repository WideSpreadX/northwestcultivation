const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ToDoSchema = new Schema({
    todo: {
        type: String
    }
});

const ToDo = mongoose.model("ToDo", ToDoSchema);

module.exports = ToDo;