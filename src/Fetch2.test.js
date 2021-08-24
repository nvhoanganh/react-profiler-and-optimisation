import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { setupServer } from 'msw/node';
import { rest } from 'msw';

import Fetch2 from './Fetch2';

const server = setupServer(
	rest.get(
		'https://petstore.swagger.io/v2/store/inventory',
		(req, res, ctx) => {
			return res(
				ctx.json({
					available: 1,
					pending: 2,
				})
			);
		}
	)
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('initial state should show label', async () => {
	render(<Fetch2 />);
	expect(screen.getByText('Click load button')).toBeVisible();

	// See: https://testing-library.com/docs/queries/about/#priority
	// fireEvent.click(screen.getByRole('button'));
	fireEvent.click(screen.getByTestId('fetchbutton'));
	// fireEvent.click(screen.getByRole('button', {name: 'Fetch Inventory'}));

	await waitFor(() => screen.getByText('Available: 1'));
});
