// @ts-check
import { test, expect, chromium } from '@playwright/test';
import { greetings, contacts, message } from '../list.js';
import 'dotenv/config';
import path from 'path';

// QR auth and persist context
const USER_DATA_DIR = '.auth/.wa-profile';

test('Send messages', async () => {
  const ctx = await chromium.launchPersistentContext(USER_DATA_DIR, {
    headless: false
  });
  const page = await ctx.newPage();
  await page.goto('/');
  await expect(page.getByRole('button', { name: 'Chats' })).toBeVisible();
  // Loop and send:
  for (let i = 0; i < contacts.length; i++) {
    await page.getByRole('textbox', { name: 'Search input textbox' }).fill(contacts[i].name);
    await page.getByTitle(contacts[i].name, { exact: true }).first().click();
    // Image upload:
    await page.getByRole('button', { name: 'Attach' }).click();
    const fileInput = page.getByRole('button', { name: 'Photos & videos' }).locator('input[type="file"]');
    if (fileInput) {
      const filePath = path.join(__dirname, './image.jpg');
      await fileInput.setInputFiles(filePath);
    } else {
      console.error('File input element not found');
    }
    // Add caption to image:
    await page.getByRole('textbox', { name: 'Add a caption' }).fill(message(greetings[Math.floor(Math.random() * greetings.length)],(contacts[i].name).trim().split(/\s+/)[0], contacts[i].message));
    await page.getByRole('button', { name: 'Send' }).click();
    await page.getByLabel('Pending').waitFor({ state: 'hidden' });
  }
  await ctx.close();
});
