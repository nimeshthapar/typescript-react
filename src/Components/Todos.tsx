import { useContext } from 'react';
import { TodoContext } from '../stores/todo-context';
import TodoItem from './TodoItem';
import classes from './Todos.module.css';

const Todos = () => {
	const todoCtx = useContext(TodoContext);

	return (
		<ul className={classes.todos}>
			{todoCtx.items.map((item) => (
				<TodoItem todo={item.todo} key={item.id} id={item.id} />
			))}
		</ul>
	);
};

export default Todos;
