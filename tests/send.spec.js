// @ts-check
import { test, expect } from '@playwright/test';
import { list, body } from '../list.js';
import 'dotenv/config';

test('send', async ({ page }) => {  
  await page.goto('/');
  await expect(page.getByText('wa-logowa-wordmark')).toBeVisible();
  await expect(page.getByRole('img', { name: 'Scan this QR code to link a' })).toBeVisible();
  await page.getByText('A fresh look').waitFor({ timeout: 120000 }); // Manually Scan QR code
  await page.getByRole('button', { name: 'Continue' }).click();
  
  // Loop and send
  for (let i = 0; i < list.length; i++) {
    console.log(i);
    await page.getByRole('textbox', { name: 'Search input textbox' }).fill(list[i].name);
    await page.getByTitle(list[i].name, { exact: true}).click();
    await page.getByRole('textbox', { name: 'Type a message' }).fill(body(list[i].name, list[i].message));
    await page.getByRole('button', { name: 'Send' }).click();
    await page.getByLabel('Pending').waitFor({ state: 'hidden'});
    console.log(list[i]);
  }
  await page.close();
});


