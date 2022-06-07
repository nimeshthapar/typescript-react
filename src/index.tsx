import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TodoContextProvider from './stores/todo-context';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<TodoContextProvider>
		<App />
	</TodoContextProvider>
);
