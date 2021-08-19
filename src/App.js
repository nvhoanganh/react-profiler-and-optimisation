import React, { useMemo, useRef, useState } from 'react';
import './App.css';
import Counter from './Counter';

function App() {
	const [text, settext] = useState('');
	const [text2, settext2] = useState('');
	const rerenderCount = useRef(0);
	const data = useMemo(
		() => ({
			fromParent: 'hello',
			parentText: text2,
		}),
		[text2]
	);

	return (
		<div className='App'>
			<div>App Renders: {rerenderCount.current++}</div>
			<input
				placeholder='text1'
				value={text}
				onChange={(e) => settext(e.target.value)}
			></input>
			<input
				placeholder='text2'
				value={text2}
				onChange={(e) => settext2(e.target.value)}
			></input>

			<Counter data={data}></Counter>
		</div>
	);
}

export default App;
