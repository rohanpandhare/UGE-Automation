import { test, devices } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.use({ ...devices['iPhone 13'] });

test.describe('Top-level menu navigation — Mobile', () => {
  test('click each top menu once and return home (mobile viewport)', async ({ page }) => {
    const home = new HomePage(page);
    await home.open();

    const candidates = [
      'button[aria-label*="menu" i]',
      'button[aria-label*="toggle" i]',
      'button[aria-controls*="menu" i]',
      'nav button:has(svg)',
      'button:has-text("Menu")'
    ];

    for (const sel of candidates) {
      const el = page.locator(sel);
      if (await el.first().isVisible().catch(() => false)) {
        await el.first().click().catch(() => {});
        break;
      }
    }

    await home.clickAllTopMenusReturningHome();
  });
});