import { injectAxe, checkA11y } from 'axe-playwright';

describe('HeaderLayout', () => {
  describe('base', () => {
    it('triggers axe on the document', async () => {
      await page.goto('http://localhost:6006/iframe.html?id=design-system-layouts-headerlayout--base&viewMode=story');
      await injectAxe(page);
      await checkA11y(page);
    });
  });

  describe('base without nav action', () => {
    it('triggers axe on the document', async () => {
      await page.goto(
        'http://localhost:6006/iframe.html?id=design-system-layouts-headerlayout--base-without-nav-action&args=&viewMode=story',
      );
      await injectAxe(page);
      await checkA11y(page);
    });
  });

  describe('sticky', () => {
    it('triggers axe on the document', async () => {
      await page.goto(
        'http://localhost:6006/iframe.html?id=design-system-layouts-headerlayout--sticky&args=&viewMode=story',
      );
      await injectAxe(page);
      await checkA11y(page);
    });
  });

  describe('combined w/ scroll', () => {
    it('triggers axe on the document', async () => {
      await page.goto(
        'http://localhost:6006/iframe.html?id=design-system-layouts-headerlayout--combined-w-scroll&args=&viewMode=story',
      );
      await injectAxe(page);
      await checkA11y(page);
    });

    it('displays the sticky header when scrolling', async () => {
      await page.goto(
        'http://localhost:6006/iframe.html?id=design-system-layouts-headerlayout--combined-w-scroll&args=&viewMode=story',
      );

      await expect(page).toHaveSelector('[data-strapi-header]');

      await page.evaluate(() => window.scrollTo(0, 400));
      await page.waitForTimeout(500);

      await expect(page).toHaveSelector('[data-strapi-header-sticky]');

      const headerLayout = await page.$$('[data-strapi-header]');
      expect(headerLayout.length).toBe(0);
    });
  });
});
