import { useEffect, useMemo, useState } from 'react';
import './App.css';

import { ThemeContext } from './context/ThemeContext';

import Header from './components/Header';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

const filters = ['all', 'active', 'completed'];

function App() {
	const [isDark, setIsDark] = useState(false);
	const [todoLists, setTodoLists] = useState([]);
	const [filter, setFilter] = useState(filters[0]);

	const onFilterChange = index => {
		setFilter(filters[index]);
	};

	const getFilteredList = () =>
		todoLists.filter(item => {
			if (filter === 'all') {
				return todoLists;
			}
			return item.state === filter;
		});

	let filteredList = useMemo(getFilteredList, [todoLists, filter]);

	const handleAdd = newTodo => setTodoLists([...todoLists, newTodo]);
	const handleDelete = deleted => setTodoLists(todoLists.filter(todo => todo.id !== deleted.id));
	const handleUpdate = updated => {
		setTodoLists(todoLists.map(todo => (todo.id === updated.id ? updated : todo)));
	};

	useEffect(() => {
		const items = JSON.parse(localStorage.getItem('items'));
		if (items) {
			setTodoLists(items);
		}
	}, []);

	useEffect(() => {
		if (todoLists.length > 0) {
			localStorage.setItem('items', JSON.stringify(todoLists));
		}
	}, [todoLists]);

	return (
		<ThemeContext.Provider value={{ isDark, setIsDark }}>
			<div className={`App ${isDark ? 'dark' : ''}`}>
				<Header filters={filters} filter={filter} onFilterChange={onFilterChange} />

				<ul className="lists">
					{filteredList.map(item => (
						<TodoList key={item.id} todo={item} onDelete={handleDelete} onUpdate={handleUpdate} />
					))}
				</ul>

				<AddTodo onAdd={handleAdd} />
			</div>
		</ThemeContext.Provider>
	);
}

export default App;
