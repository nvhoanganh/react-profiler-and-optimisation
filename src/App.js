import React, { useRef, useState } from 'react';
import './App.css';
import Counter from './Counter';

function App() {
	const [text, settext] = useState('');
	const rerenderCount = useRef(0);
	const data = {
		fromParent: 'hello',
	};

	return (
		<div className='App'>
			<div>App Renders: {rerenderCount.current++}</div>
			<input
				placeholder='text'
				value={text}
				onChange={(e) => settext(e.target.value)}
			></input>

			<Counter data={data}></Counter>
		</div>
	);
}

export default App;
