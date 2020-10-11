const TodoController = require('../../controllers/todo.controller');

describe("TodoController.createTodo", () => {
    it("Should have a createTodo fucntion", () => {
        
        expect(TodoController.createTodo).toBeDefined();
        expect(typeof TodoController.createTodo).toBe("function");
    });
})