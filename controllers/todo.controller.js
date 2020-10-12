const TodoModel = require('../model/todo.model');


const createTodo = (req, res, next) => {
    TodoModel.create(req.body);
    res.status(201);
}

module.exports = {createTodo}