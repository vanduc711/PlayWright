// @ts-check
const { test, expect } = require('@playwright/test');

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });


//Focus a test
test.only('focus this test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
});


//Skip a test
test.skip('skip this test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
});


//Conditionally skip a test
test('skip this test 2', async ({ page, browserName }) => {
  await page.goto('https://playwright.dev/');
  test.skip(browserName === 'firefox', 'Still working on it');
});


//Use fixme in beforeEach hook
test.beforeEach(async ({ page, isMobile }) => {
  test.fixme(isMobile, 'Settings page does not work in mobile yet');
  await page.goto('https://playwright.dev/');
});

test('click Get started', async ({ page }) => {
  //
  await page.getByRole('link', { name: 'Get started' }).click();
});