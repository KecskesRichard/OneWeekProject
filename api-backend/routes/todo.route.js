const todoController = require('../controller/todo.controller')
const express = require('express')
const todoRouter = express.Router()

/*todoRouter.route('/')
  .get(todoController.list)
  .post(todoController.create);

todoRouter.route('/:id')
  .get(todoController.find)
  .put(todoController.update)
  .delete(todoController.remove);*/

todoRouter.get('/get', todoController.getAll)
todoRouter.post('/post', todoController.create)
todoRouter.put('/put', todoController.update)
todoRouter.delete('/delete', todoController.remove)

module.exports = todoRouter