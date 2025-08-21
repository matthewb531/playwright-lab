// @ts-check
import { test, expect, chromium } from '@playwright/test';
import { list, body } from '../list.js';
import 'dotenv/config';

// QR auth and persist context
const USER_DATA_DIR = '.auth/.wa-profile';

test('Send messages', async () => {
  const ctx = await chromium.launchPersistentContext(USER_DATA_DIR, {
    headless: false
  });
  const page = await ctx.newPage();
  await page.goto('/');
  await expect(page.getByRole('button', { name: 'Chats' })).toBeVisible();
  
  // Loop and send
  await page.pause();
  for (let i = 0; i < list.length; i++) {
    await page.getByRole('textbox', { name: 'Search input textbox' }).fill(list[i].name);
    await page.getByTitle(list[i].name, { exact: true }).click();
    await page.getByRole('textbox', { name: 'Type a message' }).fill(body(list[i].name, list[i].message));
    await page.getByRole('button', { name: 'Send' }).click();
    await page.getByLabel('Pending').waitFor({ state: 'hidden' });
  }
  await ctx.close();
});
