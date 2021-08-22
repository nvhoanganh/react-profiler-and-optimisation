import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from './Counter';

test('initial state should show count equals to 0', async () => {
	const data = {};
	render(<Counter data={data} clearTextBox={console.log} />);
	expect(screen.getByText('count: 0')).toBeVisible();
	expect(screen.getByText('Count Renders: 0')).toBeVisible();
	expect(screen.getByRole('button')).toBeVisible();
});

test('click on Increment button should increment the counter', async () => {
	const data = {};
	render(<Counter data={data} clearTextBox={console.log} />);
	expect(screen.getByText('count: 0')).toBeVisible();

	fireEvent.click(screen.getByText('Increment'));
	expect(screen.getByText('count: 1')).toBeVisible();
	expect(screen.getByText('Count Renders: 1')).toBeVisible();
});
