import { expect, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  readonly navLinks: Locator;

  constructor(page: any) {
    super(page);
    this.navLinks = this.topLevelMenuLinks();
  }

  async open() {
    await this.gotoHome();
    await expect(this.page).toHaveTitle(/Ushaa Global|Ushaa/i);
  }

  async clickAllTopMenusReturningHome(options?: { excludePatterns?: RegExp[] }) {
    const exclude = options?.excludePatterns ?? [/^mailto:/i, /^tel:/i];

    const count = await this.navLinks.count();
    const items: { text: string; href: string | null }[] = [];
    for (let i = 0; i < count; i++) {
      const link = this.navLinks.nth(i);
      const href = await link.getAttribute('href');
      const text = (await link.innerText()).trim();
      if (!href || exclude.some((r) => r.test(href))) continue;
      if (href.startsWith('#')) continue;
      if (!items.find((x) => x.href === href)) {
        items.push({ text, href });
      }
    }

    for (const item of items) {
      await this.page.goto(item.href!.startsWith('http') ? item.href! : item.href!.startsWith('/') ? item.href! : `/${item.href}`);
      await expect(this.page).not.toHaveURL(/\/$/);
      await this.gotoHome();
    }
  }
}