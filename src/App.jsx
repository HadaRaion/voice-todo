import { useEffect, useMemo, useState } from 'react';
import './App.css';

import { ThemeContext } from './context/ThemeContext';

import Header from './components/Header';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

const filters = ['all', 'active', 'completed'];

function App() {
	const [isDark, setIsDark] = useState(false);
	const [listItems, setListItems] = useState([]);
	const [filter, setFilter] = useState(filters[0]);

	const onFilterChange = index => {
		setFilter(filters[index]);
	};

	const getFilteredList = () =>
		listItems.filter(item => {
			if (filter === 'all') {
				return listItems;
			}
			return item.state === filter;
		});

	let filteredList = useMemo(getFilteredList, [listItems, filter]);

	const onAdd = newItem => {
		setListItems(prev => [...prev, newItem]);
	};

	const onDelete = id => {
		setListItems(prev => prev.filter(item => item.id !== id));
		// const index = listItems.findIndex(item => item.id === id);
		// console.log('index :>> ', index);
		// listItems.splice(index, 1);
	};

	const onCheck = id => {
		setListItems(prev =>
			prev.map(item => {
				if (item.id === id) {
					const newState = item.state === 'active' ? 'completed' : 'active';
					const newItem = { ...item, state: newState };
					return newItem;
				} else {
					return item;
				}
			})
		);
	};

	useEffect(() => {
		const items = JSON.parse(localStorage.getItem('items'));
		if (items) {
			setListItems(items);
		}
	}, []);

	useEffect(() => {
		if (listItems.length > 0) {
			localStorage.setItem('items', JSON.stringify(listItems));
		}
	}, [listItems]);

	return (
		<ThemeContext.Provider value={{ isDark, setIsDark }}>
			<div className={`App ${isDark ? 'dark' : ''}`}>
				<Header filters={filters} filter={filter} onFilterChange={onFilterChange} />

				<ul className="lists">
					{filteredList.map(item => (
						<TodoList
							key={item.id}
							title={item.title}
							id={item.id}
							state={item.state}
							onDelete={onDelete}
							onCheck={onCheck}
						/>
					))}
				</ul>

				<AddTodo onAdd={onAdd} />
			</div>
		</ThemeContext.Provider>
	);
}

export default App;
