import { Page, Locator, expect } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async gotoHome() {
    await this.page.goto('/');
    await expect(this.page).toHaveURL(/ushaaglobal\.com\/?$/);
  }

  topLevelMenuLinks(): Locator {
    const nav = this.page.getByRole('navigation').first();
    return nav.getByRole('link', { includeHidden: false });
  }
}