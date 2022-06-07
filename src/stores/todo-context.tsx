import React, { useState } from 'react';
import Todo from '../Models/Todo';

export const TodoContext = React.createContext<{
	items: Todo[];
	addTodo: (enteredTodo: string) => void;
	removeTodo: (id: string) => void;
}>({
	items: [],
	addTodo: (enteredTodo: string) => {},
	removeTodo: (id: string) => {},
});

type TodoContextProviderProps = {
	children?: React.ReactNode;
};

const TodoContextProvider = ({ children }: TodoContextProviderProps) => {
	const [todos, setTodos] = useState<Todo[]>([]);

	const addTodoHandler = (enteredTodo: string) => {
		setTodos((prev) => [new Todo(enteredTodo), ...prev]);
	};

	const removeTodoHandler = (id: string) => {
		setTodos((prev) => prev.filter((p) => p.id !== id));
	};

	const todoContextValue = {
		items: todos,
		addTodo: addTodoHandler,
		removeTodo: removeTodoHandler,
	};

	return (
		<TodoContext.Provider value={todoContextValue}>
			{children}
		</TodoContext.Provider>
	);
};

export default TodoContextProvider;
