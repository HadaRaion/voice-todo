import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function AddTodo({ onAdd }) {
	const [text, setText] = useState('');

	const handleChange = e => setText(e.target.value);
	const handleSubmit = e => {
		e.preventDefault();
		if (text.trim() === '') {
			return;
		}

		const id = uuidv4();

		onAdd({
			id,
			text,
			state: 'active',
		});
		setText('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" value={text} placeholder="Add Todo" onChange={handleChange} />
			<button>Add</button>
		</form>
	);
}
