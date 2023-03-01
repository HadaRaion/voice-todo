import { BsFillTrashFill } from 'react-icons/bs';

export default function TodoList({ title, id, state, onDelete, onCheck }) {
	return (
		<li>
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
