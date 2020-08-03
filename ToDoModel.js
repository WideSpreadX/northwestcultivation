const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ToDoSchema = new Schema({
    todo: {
        type: String
    },
    todo_created: {
        type: Date,
        default: Date.now
    },
    todo_completed: {
        type: Boolean,
        default: false
    }
});

const ToDo = mongoose.model("ToDo", ToDoSchema);

module.exports = ToDo;