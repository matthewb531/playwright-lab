import { chromium } from '@playwright/test';

const USER_DATA_DIR = '.auth/.wa-profile';

(async () => {
  const ctx = await chromium.launchPersistentContext(USER_DATA_DIR, {
    headless: false, viewport: null,
  });
  try {
    const page = await ctx.newPage();
    await page.goto('https://web.whatsapp.com');
    const loggedIn = !!await page.getByRole('button', { name: 'Chats' }).isVisible().waitFor({ timeout: 60000 });
    if (loggedIn) {
      console.log("Already logged in.");
    } else {
      console.log("Please scan QR code...");
      await page.getByRole('button', { name: 'Chats' }).waitFor({ timeout: 60000 });
      console.log("Logged in.");
      const welcomeModal = !!await page.getByText('A fresh look').isVisible();
      if (welcomeModal) {
        await page.getByRole('button', { name: 'Continue' }).click();
        console.log("Closed welcome modal.");
      }
    }
  } finally {
    await ctx.close();
  }
})();
