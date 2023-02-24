import './App.css';
import Header from './components/Header';
import InputBox from './components/InputBox';
import ListItem from './components/ListItem';

function App() {
	return (
		<div className="App">
			<div className="wrapper">
				<Header />

				<ul>
					<ListItem />
					<ListItem />
					<ListItem />
				</ul>

				<InputBox />
			</div>
		</div>
	);
}

export default App;
