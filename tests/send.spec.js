// @ts-check

import { test, expect } from '@playwright/test';
require('dotenv').config()

test('has title', async ({ page }) => {
  await page.goto('/');


  // Expect a title "to contain" a substring.
  await expect(page.getByText('wa-logowa-wordmark')).toBeVisible();
  await expect(page.getByRole('img', { name: 'Scan this QR code to link a' })).toBeVisible();
  await page.getByText('A fresh look for WhatsApp Web').waitFor({ timeout: 120000 }); 
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('textbox', { name: 'Search input textbox' }).fill('hi me');
  await page.getByRole('button', { name: 'hi me' }).click();
  await page.getByRole('textbox', { name: 'Type a message' }).fill('testing testing');
  await page.getByRole('button', { name: 'Send' }).click();
});

