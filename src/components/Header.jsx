import { BsFillSunFill } from 'react-icons/bs';
export default function Header() {
	return (
		<header>
			<button className="toggle">
				<BsFillSunFill />
			</button>
			<ul>
				<li>
					<button>All</button>
				</li>
				<li>
					<button>Active</button>
				</li>
				<li>
					<button>Completed</button>
				</li>
			</ul>
		</header>
	);
}
