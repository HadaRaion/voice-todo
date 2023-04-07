import { useEffect, useState } from 'react';
import Todo from '../Todo/Todo';
import AddTodo from '../AddTodo/AddTodo';
import styles from './TodoList.module.css';

export default function TodoList({ filter }) {
	const [todoLists, setTodoLists] = useState(readTodoListsFromLocalStorage);

	const handleAdd = newTodo => setTodoLists([...todoLists, newTodo]);
	const handleDelete = deleted => setTodoLists(todoLists.filter(todo => todo.id !== deleted.id));
	const handleUpdate = updated =>
		setTodoLists(todoLists.map(todo => (todo.id === updated.id ? updated : todo)));

	useEffect(() => {
		localStorage.setItem('items', JSON.stringify(todoLists));
	}, [todoLists]);

	const filteredLists = getFilteredItems(todoLists, filter);

	return (
		<section>
			<ul>
				{filteredLists.map(item => (
					<Todo key={item.id} todo={item} onUpdate={handleUpdate} onDelete={handleDelete} />
				))}
			</ul>
			<AddTodo onAdd={handleAdd} />
		</section>
	);
}

function readTodoListsFromLocalStorage() {
	console.log('readTodoListsFromLocalStorage');
	const todoLists = localStorage.getItem('items');
	return todoLists ? JSON.parse(todoLists) : [];
}

function getFilteredItems(todoLists, filter) {
	if (filter === 'all') {
		return todoLists;
	}
	return todoLists.filter(todo => todo.status === filter);
}
