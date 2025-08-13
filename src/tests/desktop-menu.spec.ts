import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('Top-level menu navigation — Desktop', () => {
  test('click each top menu once and return home', async ({ page }) => {
    const home = new HomePage(page);
    await home.open();
    await home.clickAllTopMenusReturningHome();
  });
});