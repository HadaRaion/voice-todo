import { useState } from 'react';
import './App.css';

import { ThemeContext } from './context/ThemeContext';

import Header from './components/Header';
import TodoList from './components/TodoList';

const filters = ['all', 'active', 'completed'];

function App() {
	const [isDark, setIsDark] = useState(false);
	const [filter, setFilter] = useState(filters[0]);

	return (
		<ThemeContext.Provider value={{ isDark, setIsDark }}>
			<div className={`App ${isDark ? 'dark' : ''}`}>
				<Header filters={filters} filter={filter} onFilterChange={setFilter} />
				<TodoList filter={filter} />
			</div>
		</ThemeContext.Provider>
	);
}

export default App;
