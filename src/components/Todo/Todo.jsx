import { useContext } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import { ThemeContext } from '../../context/ThemeContext';
import styles from './Todo.module.css';

export default function Todo({ todo, onDelete, onUpdate }) {
	const { id, text, status } = todo;
	const { isDark } = useContext(ThemeContext);

	const handleChange = e => {
		const status = e.target.checked ? 'completed' : 'active';
		onUpdate({ ...todo, status });
	};

	const handleDelete = () => onDelete(todo);

	return (
		<li className={styles.todo}>
			<input
				className={styles.checkbox}
				type="checkbox"
				id={id}
				name={id}
				checked={status === 'completed'}
				onChange={handleChange}
			/>
			<label className={styles.text} htmlFor={id}>
				{text}
			</label>
			<span className={styles.icon}>
				<button onClick={handleDelete} className={styles.button}>
					<BsFillTrashFill />
				</button>
			</span>
		</li>
	);
}
