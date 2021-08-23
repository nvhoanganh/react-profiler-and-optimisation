import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { setupServer } from 'msw/node';
import { rest } from 'msw';

import Fetch from './Fetch';

const server = setupServer(
	rest.get('https://petstore.swagger.io/v2/pet/findByStatus', (req, res, ctx) => {
		return res(
			ctx.json([
				{
					id: 'test1',
					name: 'test 1',
					status: 'available',
				},
				{
					id: 'test2',
					name: 'test 2',
					status: 'available',
				},
			])
		);
	})
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('initial state should show Loading...', async () => {
	render(<Fetch />);
	await waitFor(() => screen.getByText('loading...'));
});
