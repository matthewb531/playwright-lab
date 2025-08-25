// @ts-check
import { test, expect, chromium } from '@playwright/test';
import { contacts } from '../data/contacts.js';
import { randomGreeting, firstName, buildCaption } from '../utils/caption.js';
import 'dotenv/config';
import path from 'path';

// QR auth and persist context
const USER_DATA_DIR = '.auth/.wa-profile';

test('Send image with caption to contact list', async () => {
  const ctx = await chromium.launchPersistentContext(USER_DATA_DIR, {
    headless: false
  });
  const page = await ctx.newPage();
  await page.goto('/');
  await page.getByRole('button', { name: 'Chats' }).waitFor({ timeout: 60000 });
  // Loop and send:
  for (let i = 0; i < contacts.length; i++) {
    await page.getByRole('textbox', { name: 'Search input textbox' }).fill('');
    await page.getByRole('textbox', { name: 'Search input textbox' }).fill(contacts[i].name);
    await page.getByTitle(contacts[i].name, { exact: true }).first().click();
    // Image upload:
    await page.getByRole('button', { name: 'Attach' }).click();
    const fileInput = page.getByRole('button', { name: 'Photos & videos' }).locator('input[type="file"]');
    if (fileInput) {
      const filePath = path.join(__dirname, '../fixtures/image.jpg');
      await fileInput.setInputFiles(filePath);
    } else {
      console.error('File input element not found');
    }
    // Add caption to image:
    const caption = buildCaption(
          randomGreeting(),
          firstName(contacts[i].name),
          contacts[i].token,
        );
    await page.getByRole('textbox', { name: 'Add a caption' }).fill(caption);
    await page.getByRole('button', { name: 'Send' }).click();
    await page.getByLabel('Pending').waitFor({ state: 'hidden' });
  }
  await ctx.close();
});
