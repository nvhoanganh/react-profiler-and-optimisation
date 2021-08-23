export const getTotalAvalable = () => {
	return fetch(
		'https://petstore.swagger.io/v2/pet/findByStatus?status=available'
	)
		.then((x) => x.json())
		.then((r) => r.length);
};

export const add = (num1, num2) => num1 + num2;
