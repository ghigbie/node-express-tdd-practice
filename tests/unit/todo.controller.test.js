const TodoController = require('../../controllers/todo.controller');
const TodoModel = require("../../model/todo.model");
const httpMocks = require("node-mocks-http");

const newTodo = require('../mock-data/new-todo.json');

TodoModel.create = jest.fn()

let req, res, next;
beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next = null;
})

describe("TodoController.createTodo", () => {
    it("Should have a createTodo fucntion", () => {
        
        expect(TodoController.createTodo).toBeDefined();
        expect(typeof TodoController.createTodo).toBe("function");
    });

    it('should call TodoModel.create with the correct provided value', () => {
        req.body = newTodo;
        TodoController.createTodo(req.body);
        expect(TodoModel.create).toBeCalled();
    })
})