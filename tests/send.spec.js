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
  await Chatpage.goto();
  // Loop and send:
  for (let i = 0; i < contacts.length; i++) {
    await Chatpage.searchAndOpenContact(contacts[i].name);
    await Chatpage.imageUpload();

    const caption = buildCaption(
      randomGreeting(),
      firstName(contacts[i].name),
      contacts[i].token,
    );

    await Chatpage.sendImageWithCaption(caption);
    await Chatpage.waitUntilSendComplete();
  }
  await ctx.close();
});
