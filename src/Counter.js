import React, { useRef, useState } from 'react';

function Counter({ data }) {
	const [count, setCount] = useState(0);
	const renderCount = useRef(0);
	return (
		<div>
			<div>count: {count}</div>
			<div>Count Renders: {renderCount.current++}</div>
			<button onClick={() => setCount((c) => c + 1)}>Increment</button>
		</div>
	);
}

export default React.memo(Counter, (previousProps, currentProps) => {
	if (previousProps.data.fromParent === currentProps.data.fromParent) {
		return true;
	}
	return false;
});
