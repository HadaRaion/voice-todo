import { useContext } from 'react';
import { BsFillSunFill } from 'react-icons/bs';
import { ThemeContext } from '../context/ThemeContext';

export default function Header({ filters, filter, onFilterChange }) {
	const { isDark, setIsDark } = useContext(ThemeContext);

	return (
		<header className={isDark ? 'dark' : ''}>
			<button className={`toggle ${isDark ? 'dark' : ''}`} onClick={() => setIsDark(!isDark)}>
				<BsFillSunFill />
			</button>
			<ul className="filters">
				{filters.map((value, index) => (
					<li className={filter === value ? 'underline' : ''}>
						<button onClick={() => onFilterChange(index)}>{value}</button>
					</li>
				))}
			</ul>
		</header>
	);
}
