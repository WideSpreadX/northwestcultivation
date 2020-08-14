const express = require('express');
const router = express.Router();

var ToDo = require('../ToDoModel.js');
/* GET home page. */
router.post('/', (req, res) => {
    ToDo.create(req.body)
    .then(function(dbToDo) {
        res.redirect('to-do/all');
    });
})
router.get('/all', async (req, res) => {
    // get all items from db collection
    const collection = 'ToDo'
    await ToDo.find({}) // <=> wrapper for Model.find() ...
      .then(documents => {
        // create context Object with 'usersDocuments' key
        const context = {
          usersDocuments: documents.map(document => {
            return {
              todo: document.todo,
              todo_completed: document.todo_completed
            }
          })
        }
        // rendering usersDocuments from context Object
        res.render('todo-all', {
          usersDocuments: context.usersDocuments
        })
      })
      .catch(error => res.status(500).send(error))
  })

module.exports = router;