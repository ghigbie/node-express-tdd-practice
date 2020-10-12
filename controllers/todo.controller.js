const TodoModel = require('../model/todo.model');


const createTodo = (title = "Walk dog", done = "false") => {
    return TodoModel.create({
        title,
        done
    });
}

module.exports = {createTodo}