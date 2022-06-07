import React, { useContext, useRef } from 'react';
import { TodoContext } from '../stores/todo-context';
import classes from './NewTodo.module.css';

const NewTodo = () => {
	const todoInputRef = useRef<HTMLInputElement>(null);

	const todoCtx = useContext(TodoContext);

	const newTodoSubmitHandler = (event: React.FormEvent) => {
		event.preventDefault();

		const enteredTodo = todoInputRef.current!.value;

		if (!enteredTodo.length) return;

		todoCtx.addTodo(enteredTodo);
	};

	return (
		<form className={classes.form} onSubmit={newTodoSubmitHandler}>
			<label htmlFor="todo">TODO</label>
			<input type="text" id="todo" ref={todoInputRef} />
			<button type="submit">Add Todo</button>
		</form>
	);
};

export default NewTodo;
