// @ts-check
import { test, chromium } from '@playwright/test';
import { contacts } from '../data/contacts.js';
import { randomGreeting, firstName, buildCaption } from '../utils/caption.js';
import { ChatPage } from '../pages/ChatPage.js';

// QR auth and persist context
const USER_DATA_DIR = '.auth/.wa-profile';

test('Send image with caption to contact list', async () => {
  const ctx = await chromium.launchPersistentContext(USER_DATA_DIR, {
    headless: false
  });
  const page = await ctx.newPage();
  const Chatpage = new ChatPage(page);

  await test.step('Open app and verify ready', async () => {
    await Chatpage.gotoHomePage();
  });
  // Loop and send:
  for (const c of contacts) {
    await test.step(`Send to: ${c.name}`, async () => {
      await Chatpage.searchAndOpenContact(c.name);
      await Chatpage.imageUpload();

      const caption = buildCaption(
        randomGreeting(),
        firstName(c.name),
        c.token,
      );

      await Chatpage.sendImageWithCaption(caption);
      await Chatpage.waitUntilSendComplete();
      await Chatpage.gentlePacing();
    });
  }
  await ctx.close();
});
