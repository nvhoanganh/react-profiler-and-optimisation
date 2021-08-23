import React, { useState } from 'react';

function Fetch() {
	const [inventory, setInvetory] = useState();

	const fetchInvetory = () => {
		fetch('https://petstore.swagger.io/v2/store/inventory')
			.then((x) => x.json())
			.then((r) => setInvetory(r));
	};

	return (
		<>
			{inventory ? (
				<div>
					<div>Available: {inventory?.available}</div>
					<div>Pending: {inventory?.pending}</div>
				</div>
			) : (
				<div>Click load button</div>
			)}
			<button data-testid="fetchbutton" onClick={fetchInvetory}>Fetch Inventory</button>
		</>
	);
}

export default React.memo(Fetch);
