const TodoModel = require('../model/todo.model');


const createTodo = (req, res, next) => {
    TodoModel.create(req.body);
}

module.exports = {createTodo}