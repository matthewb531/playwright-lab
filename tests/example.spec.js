// @ts-check
import { test, expect } from '@playwright/test';
require('dotenv').config()

console.log("dotenv init", process.env)
test('has title', async ({ page }) => {
  await page.goto(process.env.BASE_URL);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(RegExp('WhatsApp Web'));
  await expect(page).toHaveTitle(/WhatsApp Web/);
});

test('get started link', async ({ page }) => {
  await page.goto(`${process.env.BASE_URL}`);

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
