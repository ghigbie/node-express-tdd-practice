const TodoController = require('../../controllers/todo.controller');
const TodoModel = require("../../model/todo.model");
const httpMocks = require("node-mocks-http");

const newTodo = require('../mock-data/new-todo.json');
const todoController = require('../../controllers/todo.controller');

TodoModel.create = jest.fn()

let req, res, next;
beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next = null;
})

describe("TodoController.createTodo", () => {

    beforeEach(() => {
        req.body = newTodo;
        TodoController.createTodo(req, res, next);
    })

    it("Should have a createTodo fucntion", () => {
        
        expect(TodoController.createTodo).toBeDefined();
        expect(typeof TodoController.createTodo).toBe("function");
    });

    it('should call TodoModel.create with the correct provided value', () => {
        expect(TodoModel.create).toBeCalledWith(newTodo);
    })

    it('should return a 201 status call for a successful request', () => {
        expect(res.statusCode).toBe(201);
        expect(res._isEndCalled()).toBeTruthy();
    });

    it('should return json body in response', () => {
        TodoModel.create.mockReturnValue(newTodo);
        todoController.createTodo(req, res, next);
        expect(res._getJSONData()).toStrictEqual(newTodo);
    });
})