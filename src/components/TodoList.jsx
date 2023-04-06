import { useContext } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import { ThemeContext } from '../context/ThemeContext';

export default function TodoList({ todo, onDelete, onUpdate }) {
	const { id, text, status } = todo;
	const { isDark } = useContext(ThemeContext);

	const handleChange = e => {
		const status = e.target.checked ? 'completed' : 'active';
		onUpdate({ ...todo, status });
	};

	const handleDelete = () => onDelete(todo);

	return (
		<li className={isDark ? 'dark' : ''}>
			<input
				type="checkbox"
				id={id}
				name={id}
				checked={status === 'completed'}
				onChange={handleChange}
			/>
			<label htmlFor={id} className={status}>
				{text}
			</label>
			<button onClick={handleDelete}>
				<BsFillTrashFill />
			</button>
		</li>
	);
}
