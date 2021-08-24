const { test, expect } = require('@playwright/test');

test.use({
	viewport: {
		width: 1200,
		height: 720,
	},
});

test('basic test', async ({ page }) => {
	// Go to http://localhost:3000/
	await page.goto('http://localhost:3000/');

	await expect(page.locator('text=Count Renders: 0')).toBeVisible();

	// Click text=Increment
	await page.click('text=Increment');

	// Click text=Count Renders: 1
	await expect(page.locator('text=Count Renders: 1')).toBeVisible();
});

test('basic snapshot test', async ({ page }) => {
	await page.goto('http://localhost:3000/');

	expect(await page.screenshot()).toMatchSnapshot('home-page.png');
});
