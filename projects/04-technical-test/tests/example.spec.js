// @ts-check
import { test, expect } from '@playwright/test';

const LOCAL_URL = 'http://localhost:5173';
const PREFIX_IMG_URL = 'https://cataas.com/'

test('check fact and cat img', async ({ page }) => {
  await page.goto(LOCAL_URL);

  // Expect a title "to contain" a substring.
  const text = await page.getByRole('paragraph');
  const img = await page.getByRole('img');

  const textContent = await text.textContent();
  const imgSrc = await img.getAttribute('src');

  await expect(textContent?.length).toBeGreaterThan(0);
  await expect(imgSrc?.length).toBeGreaterThan(0);
});
