import React, { useRef, useState } from 'react';
import './App.css';

function App() {
  const [text, settext] = useState('');
  const rerenderCount = useRef(0)
	return (
		<div className='App'>
      <div>App Renders: { rerenderCount.current++ }</div>
			<input
				placeholder='text'
				value={text}
				onChange={(e) => settext(e.target.value)}
			></input>
		</div>
	);
}

export default App;
