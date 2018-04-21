const todoController = require('../controller/todo.controller')
const express = require('express')
const todoRouter = express.Router()

todoRouter.route('/get')
  .get(todoController.getAll);
todoRouter.route('/create')
  .post(todoController.create);

todoRouter.route('/:id')
  .put(todoController.update)
  .delete(todoController.remove);

module.exports = todoRouter;