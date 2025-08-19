// TODO: WIP/unused

const { chromium } = require('@playwright/test');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('/');
  
  
    // Expect a title "to contain" a substring.
    await expect(page.getByText('wa-logowa-wordmark')).toBeVisible();
    await expect(page.getByRole('img', { name: 'Scan this QR code to link a' })).toBeVisible();
    // Scan QR code
    await page.getByText('A fresh look for WhatsApp Web').waitFor({ timeout: 120000 }); 
    await page.getByRole('button', { name: 'Continue' }).click();

  // Save the login state after QR code login succeeds
  await context.storageState({ path: 'auth.json' });
  await browser.close();
})();