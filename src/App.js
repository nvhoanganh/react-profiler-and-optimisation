import React, { useCallback, useMemo, useRef, useState } from 'react';
import './App.css';
import Counter from './Counter';
import Fetch from './Fetch';
import Fetch2 from './Fetch2';
import LongList from './LongList';
import { RecoilRoot } from 'recoil';
import CounterRecoil from './CounterRecoil';

function App() {
	const [text, settext] = useState('');
	const [text2, settext2] = useState('');
	const rerenderCount = useRef(0);

	const clearTextBox = useCallback(() => settext(''), [settext]);

	const data = useMemo(
		() => ({
			fromParent: 'hello',
			parentText: text2,
		}),
		[text2]
	);

	return (
		<RecoilRoot>
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

				<Counter data={data} clearTextBox={clearTextBox}></Counter>
				<CounterRecoil></CounterRecoil>
				<Fetch2></Fetch2>
				<Fetch></Fetch>
			</div>
		</RecoilRoot>
	);
}

export default App;
