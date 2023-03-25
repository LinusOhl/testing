import { rest } from "msw";
import { Todo, TodoData } from "../types/Todo";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const dummyTodos: Todo[] = [
	{
		id: 1,
		title: "Todo1",
		completed: false,
	},
	{
		id: 2,
		title: "Todo2",
		completed: false,
	},
];

export const handlers = [
	// Mock get all todos
	// GET http://localhost:3001/todos
	rest.get(BASE_URL + "/todos", (_req, res, ctx) => {
		return res(ctx.status(200), ctx.json(dummyTodos));
	}),

	// Mock get single todo
	// GET http://localhost:3001/todos/:todoId
	rest.get(BASE_URL + "/todos/:todoId", (req, res, ctx) => {
		const todoId = Number(req.params.todoId);
		const todo = dummyTodos.find((todo) => todo.id === todoId);

		if (!todo) {
			return res(ctx.status(404));
		}

		return res(ctx.status(200), ctx.json(todo));
	}),

	// Mock create todo
	// POST http://localhost:3001/todos
	rest.post(BASE_URL + "/todos", async (req, res, ctx) => {
		const payload = await req.json<TodoData>();
		const id = Math.max(0, ...dummyTodos.map((todo) => todo.id)) + 1;
		const todo: Todo = {
			id: id,
			title: payload.title,
			completed: payload.completed,
		};

		dummyTodos.push(todo);

		return res(ctx.status(201), ctx.json(todo));
	}),

	// Mock update todo
	// PATCH http://localhost:3001/todos/:todoId
	rest.patch(BASE_URL + "/todos/:todoId", async (req, res, ctx) => {
		const todoId = Number(req.params.todoId);
		const payload = await req.json<Partial<TodoData>>();
		const todo = dummyTodos.find((todo) => todo.id === todoId);

		if (!todo) {
			return res(ctx.status(404));
		}

		todo.title = payload.title ?? todo.title;
		todo.completed = payload.completed ?? todo.completed;

		return res(ctx.status(200), ctx.json(todo));
	}),

	// Mock delete todo
	// DELETE http://localhost:3001/todos/:todoId
	rest.delete(BASE_URL + "/todos/:todoId", (req, res, ctx) => {
		const todoId = Number(req.params.todoId);
		const todo = dummyTodos.find((todo) => todo.id === todoId);

		if (!todo) {
			return res(ctx.status(404));
		}

		const index = dummyTodos.indexOf(todo);
		dummyTodos.splice(index, 1);

		return res(ctx.status(200));
	}),
];
