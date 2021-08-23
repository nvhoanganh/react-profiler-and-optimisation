import { getTotalAvalable, add } from './api.service';

beforeEach(() => {
	fetch.resetMocks();
});

it('returns empty', async () => {
	fetch.mockResponseOnce(JSON.stringify([]));

	const rate = await getTotalAvalable();

	expect(rate).toEqual(0);
	expect(fetch).toHaveBeenCalledTimes(1);
});

it('returns 1 item', async () => {
	fetch.mockResponseOnce(JSON.stringify([{ data: 1 }]));

	const rate = await getTotalAvalable();

	expect(rate).toEqual(1);
});

it('add 2 numbers', () => {
	const total = add(1, 2);
	expect(total).toEqual(3);
});
