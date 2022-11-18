import { injectAxe, checkA11y } from 'axe-playwright';

import { test, expect } from '@playwright/test';

test.describe.parallel('Popover', () => {
  test.describe('light mode', () => {
    test.describe('base', () => {
      test.beforeEach(async ({ page }) => {
        // This is the URL of the Storybook Iframe
        await page.goto('/iframe.html?id=design-system-components-popover--centered&viewMode=story');
        await injectAxe(page);
      });

      test('triggers axe on the document', async ({ page }) => {
        await checkA11y(page);
      });
    });

    test.describe('onReachEnd', () => {
      test.beforeEach(async ({ page }) => {
        // This is the URL of the Storybook Iframe
        await page.goto('/iframe.html?id=design-system-components-popover--on-reach-end&viewMode=story');
      });

      test('adds item when reaching the end', async ({ page }) => {
        await page.locator('#popover1').press('Enter');
        const lis = page.locator('#on-reach-end li');

        await expect(lis).toHaveCount(10);

        console.log(lis.innerHTML());

        await page.focus('#list');
        await page.keyboard.press('PageDown', { delay: 1000 });

        const lis2 = page.locator('#on-reach-end li');

        await expect(lis2).toHaveCount(15);
      });
    });
  });

  test.describe('dark mode', () => {
    test('triggers axe on the document', async ({ page }) => {
      // This is the URL of the Storybook Iframe
      await page.goto('/iframe.html?id=design-system-components-popover--centered&viewMode=story&theme=dark');
      await injectAxe(page);
      await checkA11y(page);
    });
  });
});
