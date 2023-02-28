import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
	const [listItems, setListItems] = useState(initialState);

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
		console.log('id :>> ', id);

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

	return (
		<div className="App">
			<div className="wrapper">
				<Header />

				<ul>
					{listItems.map(item => (
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
		</div>
	);
}

const initialState = [
	{
		id: 'a',
		title: '장보기',
		state: 'active',
	},
	{
		id: 'b',
		title: '영화보기',
		state: 'active',
	},
	{
		id: 'c',
		title: '공부하기',
		state: 'active',
	},
];
export default App;
