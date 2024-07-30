const router = require('express').Router();
const ToDoController = require('../controller/todo_controller');

router.post('/storeTodo',ToDoController.createTodo);
router.post('/getUserTodoList',ToDoController.getUserTodoList);
router.post('/updateTodoData',ToDoController.updateTodoData);
router.post('/deleteTodoData',ToDoController.deleteTodoData);

module.exports = router;