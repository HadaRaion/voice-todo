import { useContext } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import { ThemeContext } from '../context/ThemeContext';

export default function TodoList({ title, id, state, onDelete, onCheck }) {
	const { isDark } = useContext(ThemeContext);

	return (
		<li className={isDark ? 'dark' : ''}>
			<input
				type="checkbox"
				id={id}
				name={id}
				onChange={() => onCheck(id)}
				checked={state === 'completed' ? true : false}
			/>
			<label htmlFor={id} className={state}>
				{title}
			</label>
			<button onClick={() => onDelete(id)}>
				<BsFillTrashFill />
			</button>
		</li>
	);
}
