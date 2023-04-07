import { useContext } from 'react';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { ThemeContext } from '../../context/ThemeContext';
import styles from './Header.module.css';

export default function Header({ filters, filter, onFilterChange }) {
	const { isDark, setIsDark } = useContext(ThemeContext);

	return (
		<header className={styles.header}>
			<button onClick={() => setIsDark(!isDark)} className={styles.toggle}>
				<BsFillSunFill />
			</button>
			<ul className={styles.filters}>
				{filters.map((value, index) => (
					<li key={index}>
						<button
							className={`${styles.filter} ${filter === value && styles.selected}`}
							onClick={() => onFilterChange(value)}>
							{value}
						</button>
					</li>
				))}
			</ul>
		</header>
	);
}
