const { injectAxe, checkA11y } = require('axe-playwright');

const { test } = require('@playwright/test');

test.describe.parallel('Pagination', () => {
  test.beforeEach(async ({ page }) => {
    // This is the URL of the Storybook Iframe
    await page.goto('/iframe.html?id=design-system-components-pagination--base&viewMode=story');
    await injectAxe(page);
  });

  test('triggers axe on the document', async ({ page }) => {
    await checkA11y(page);
  });
});
