// @ts-check
import { chromium } from '@playwright/test';
import { ChatPage } from '../pages/ChatPage.js';
const USER_DATA_DIR = '.auth/.wa-profile';

(async () => {
  const ctx = await chromium.launchPersistentContext(USER_DATA_DIR, {
    headless: false, viewport: null,
  });
  try {
    const page = await ctx.newPage();
    const Chatpage = new ChatPage(page);
    await Chatpage.gotoHomePage();
    const loggedIn = !!await Chatpage.qrCode.isVisible({ timeout: 10000 });
    if (loggedIn) {
      console.log("Already logged in.");
    } else {
      console.log("Please scan QR code...");
      await Chatpage.chatWindow.waitFor({ timeout: 60000 });
      console.log("Logged in.");
    }
    const welcomeModal = !!await Chatpage.freshLookModal.isVisible();
    if (welcomeModal) {
      await Chatpage.freshLookContinue.click();
      console.log("Closed welcome modal.");
    }
  } finally {
    await ctx.close();
  }
})();
