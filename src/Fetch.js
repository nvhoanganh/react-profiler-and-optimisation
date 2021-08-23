import React, { useEffect, useState } from 'react';

function Fetch() {
	const [pets, setPets] = useState();

	useEffect(() => {
		fetch(
			'https://petstore.swagger.io/v2/pet/findByStatus?status=available'
		)
			.then((x) => x.json())
			.then((r) => setPets(r));
	}, []);

	if (!pets) return <div>loading...</div>;

	return (
		<div>
			{(pets || []).map((x) => (
				<div key={x.id}>{x.name} : {x.status}</div>
			))}
		</div>
	);
}

export default React.memo(Fetch);
