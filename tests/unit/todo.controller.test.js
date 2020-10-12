const TodoController = require('../../controllers/todo.controller');
const TodoModel = require("../../model/todo.model");

TodoModel.create = jest.fn()

describe("TodoController.createTodo", () => {
    it("Should have a createTodo fucntion", () => {
        
        expect(TodoController.createTodo).toBeDefined();
        expect(typeof TodoController.createTodo).toBe("function");
    });

    it("should call TodoModel.create with the default value", () => {
        const modelDefault = TodoModel.create();
        expect(TodoModel.create).toBeCalled();
        expect(modelDefault).toEqual({
            title: 'Walk dog',
            done: false
        })
    });
})