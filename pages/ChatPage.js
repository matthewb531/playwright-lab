import { expect } from '@playwright/test';
import 'dotenv/config';
import path from 'path';
export class ChatPage {
  constructor(page) {
    this.page = page;
    this.qrCode =  page.getByLabel('Scan this QR code to link a device!'); 
    this.freshLookModal = page.getByText('A fresh look');
    this.freshLookContinue = page.getByRole('button', { name: 'Continue' });
    this.chatWindow = page.getByRole('button', { name: 'Chats' });
    this.searchBox = page.getByRole('textbox', { name: 'Search input textbox' });
    this.attachBtn = page.getByRole('button', { name: 'Attach' });
    this.photosVideosBtn = page.getByRole('button', { name: 'Photos & videos' });
    this.fileInput = this.photosVideosBtn.locator('input[type="file"]');
    this.captionBox = page.getByRole('textbox', { name: 'Add a caption' });
    this.sendBtn = page.getByRole('button', { name: 'Send' });
    this.pendingLabel = page.getByLabel('Pending').first();
  }

  async goto() {
    await this.page.goto(process.env.BASE_URL);
    await this.page.waitForLoadState('domcontentloaded');
  }

  async searchAndOpenContact(name) {
    await this.searchBox.fill('');
    await this.searchBox.fill(name);
    const contactRowByTitle = this.page.getByTitle(name, { exact: true }).first();
    await expect(contactRowByTitle).toBeVisible({ timeout: 10000 });
    await contactRowByTitle.click();
  }

  async imageUpload() {
    await this.attachBtn.click();
    const fileInput = this.fileInput;
    if (fileInput) {
      const filePath = path.join(__dirname, '../fixtures/image.jpg');
      await fileInput.setInputFiles(filePath);
    } else {
      console.error('File input element not found');
    }
  }

  async sendImageWithCaption(caption) {
    await this.captionBox.fill(caption);
    await this.sendBtn.click();
  }

  async waitUntilSendComplete () {
    await this.pendingLabel.waitFor({ state: 'hidden' });
  }
}