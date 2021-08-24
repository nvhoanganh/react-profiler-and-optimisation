import React, { useRef, useState } from 'react';

function Counter({ data, clearTextBox }) {
	const [count, setCount] = useState(0);
	const renderCount = useRef(0);
	return (
		<div>
			<div>count: {count}</div>
			<div>Count Renders: {renderCount.current++}</div>
			<button
				onClick={() => {
					if (count % 2 === 0) {
						clearTextBox();
					}

					setCount((c) => c + 1);
				}}
			>
				Increment
			</button>
			<ChildElement data={data}></ChildElement>
		</div>
	);
}

export function ChildElement({ data }) {
	return <h1>This is child</h1>;
}
export default React.memo(Counter);
