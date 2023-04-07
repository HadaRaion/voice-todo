import { useContext } from 'react';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { ThemeContext } from '../context/ThemeContext';

export default function Header({ filters, filter, onFilterChange }) {
	const { isDark, setIsDark } = useContext(ThemeContext);
	// const onFilterChange = index => {
	// 	setFilter(filters[index]);
	// };

	return (
		<header className={isDark ? 'dark' : ''}>
			<button className={`toggle ${isDark ? 'dark' : ''}`} onClick={() => setIsDark(!isDark)}>
				<BsFillSunFill />
			</button>
			<ul className="filters">
				{filters.map((value, index) => (
					<li key={index} className={filter === value ? 'underline' : ''}>
						<button onClick={() => onFilterChange(value)}>{value}</button>
					</li>
				))}
			</ul>
		</header>
	);
}
