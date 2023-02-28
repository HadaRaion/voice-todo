import { BsFillTrashFill } from 'react-icons/bs';

export default function TodoList({ title, id, state, onDelete, onCheck }) {
	return (
		<li>
			<input type="checkbox" id={id} name={id} onChange={() => onCheck(id)} />
			<label
				htmlFor={id}
				className={state}
				style={{ textDecoration: state === 'completed' ? 'line-through' : 'blue' }}>
				{title}
			</label>
			<button onClick={() => onDelete(id)}>
				<BsFillTrashFill />
			</button>
		</li>
	);
}
