import { useContext } from 'react';
import Todo from '../Models/Todo';
import { TodoContext } from '../stores/todo-context';
import classes from './TodoItem.module.css';

const TodoItem = ({ todo, id }: Todo) => {
	const todoCtx = useContext(TodoContext);
	return (
		<li
			className={classes.item}
			onClick={todoCtx.removeTodo.bind(null, id)}
		>
			{todo}
		</li>
	);
};

export default TodoItem;
