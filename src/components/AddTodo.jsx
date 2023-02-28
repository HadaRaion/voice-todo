import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function AddTodo({ onAdd }) {
	const [title, setTitle] = useState('');

	const handleChange = e => setTitle(e.target.value);
	const handleSubmit = e => {
		e.preventDefault();
		if (title.trim() === '') {
			return;
		}

		const id = uuidv4();

		onAdd({
			id,
			title,
			state: 'active',
		});
		setTitle('');
	};

	return (
		<form action="" onSubmit={handleSubmit}>
			<input type="text" name="" value={title} onChange={handleChange} />
			<button>Add</button>
		</form>
	);
}
