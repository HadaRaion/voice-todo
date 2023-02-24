import { BsFillTrashFill } from 'react-icons/bs';

export default function ListItem() {
	return (
		<li>
			<input type="checkbox" id="scales" name="scales" />
			<label for="scales">Scales</label>
			<button>
				<BsFillTrashFill />
			</button>
		</li>
	);
}
