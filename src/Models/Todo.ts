class Todo {
	constructor(
		public todo: string,
		public id: string = new Date().toISOString() + Math.random().toString()
	) {}
}

export default Todo;
