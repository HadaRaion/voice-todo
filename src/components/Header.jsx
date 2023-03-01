import { BsFillSunFill } from 'react-icons/bs';
export default function Header({ filters, filter, onFilterChange }) {
	return (
		<header>
			<button className="toggle">
				<BsFillSunFill />
			</button>
			<ul>
				{filters.map((value, index) => (
					<li>
						<button onClick={() => onFilterChange(index)}>{value}</button>
					</li>
				))}
			</ul>
		</header>
	);
}
