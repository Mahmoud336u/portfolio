import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { readFile } from 'node:fs/promises';

const pages = ['/', '/work/meridian/', '/404/'];

for (const width of [320, 390, 768, 1440]) {
  test(`layouts, links, accessibility and console at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    const errors: string[] = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('console', message => { if (message.type() === 'error' && !message.text().includes('404')) errors.push(message.text()); });
    for (const route of pages) {
      await page.goto(route);
      await page.evaluate(() => document.fonts.ready);
      await expect(page.locator('h1')).toHaveCount(1);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
      expect(await page.locator('a').evaluateAll(links => links.every(link => link.hasAttribute('href') && link.getAttribute('href') !== '#'))).toBe(true);
      const result = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
      expect(result.violations).toEqual([]);
      if (width === 1440 || width === 390) await page.screenshot({ path: `test-results/${width}-${route === '/' ? 'home' : route.includes('meridian') ? 'meridian' : '404'}.png`, fullPage: true });
    }
    expect(errors).toEqual([]);
  });
}

test('mobile menu supports keyboard, escape, selection and resize', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  const toggle = page.getByRole('button', { name: 'Menu' });
  const nav = page.getByRole('navigation', { name: 'Main navigation' });
  await expect(nav).toBeHidden();
  await toggle.focus();
  await page.keyboard.press('Enter');
  await expect(toggle).toHaveAttribute('aria-expanded', 'true');
  await page.keyboard.press('Tab');
  await expect(nav.getByRole('link', { name: 'Work', exact: true })).toBeFocused();
  await page.keyboard.press('Escape');
  await expect(nav).toBeHidden();
  await expect(toggle).toBeFocused();
  await toggle.click();
  await nav.getByRole('link', { name: 'Experience', exact: true }).click();
  await expect(page).toHaveURL(/#experience$/);
  await expect(nav).toBeHidden();
  await toggle.click();
  await page.setViewportSize({ width: 1024, height: 900 });
  await expect(nav).toBeVisible();
  await page.setViewportSize({ width: 390, height: 844 });
  await expect(nav).toBeHidden();
});

test('skip link, project route, scope disclosure and contact work', async ({ page }) => {
  await page.goto('/');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Skip to content' })).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.locator('main')).toBeFocused();
  await page.getByRole('link', { name: 'Explore my work' }).click();
  await expect(page).toHaveURL(/#work$/);
  await page.getByText('Scope & repository evidence', { exact: false }).click();
  await expect(page.locator('details')).toHaveAttribute('open', '');
  await page.getByRole('link', { name: 'Read the case study' }).click();
  await expect(page).toHaveURL(/\/work\/meridian\/$/);
  await page.getByRole('link', { name: '04 / Evaluation' }).click();
  await expect(page).toHaveURL(/#evaluation$/);
  await expect(page.getByRole('heading', { name: 'Macro-F1 · classification' })).toBeVisible();
  await page.getByRole('link', { name: 'All selected work' }).click();
  await page.getByRole('link', { name: 'Get in touch' }).click();
  await expect(page).toHaveURL(/#contact$/);
  await expect(page.getByRole('link', { name: 'Find me on GitHub' })).toHaveAttribute('href', 'https://github.com/Mahmoud336u');
  await expect(page.locator('a[download]')).toHaveCount(3);
  await expect(page.getByRole('link', { name: 'Email Mahmoud' })).toHaveAttribute('href', 'mailto:mheshmat566@gmail.com');
  await expect(page.getByRole('link', { name: 'LinkedIn', exact: true })).toHaveAttribute('href', 'https://www.linkedin.com/in/mahmoud-heshmat-2455022b5/');
});

test('both supplied résumés download as the original PDF documents', async ({ page, request }) => {
  await page.goto('/');
  await expect(page.locator('.hero').getByRole('link', { name: 'AI Engineer Résumé' })).toHaveAttribute('download', '');
  for (const role of ['AI', 'Data']) {
    const filename = `Mahmoud_Heshmat_${role}_Engineer_Resume.pdf`;
    const expected = await readFile(`public/resumes/${filename}`);
    const response = await request.get(`/resumes/${filename}`);
    expect(response.ok()).toBe(true);
    expect(response.headers()['content-type']).toContain('application/pdf');
    expect((await response.body()).equals(expected)).toBe(true);
    expect(expected.subarray(0, 5).toString()).toBe('%PDF-');
    const downloadReady = page.waitForEvent('download');
    await page.locator('#contact').getByRole('link', { name: `${role} Engineer Résumé`, exact: true }).click();
    const download = await downloadReady;
    expect(download.suggestedFilename()).toBe(filename);
    expect(await download.failure()).toBeNull();
    const downloadedPath = await download.path();
    expect(downloadedPath).not.toBeNull();
    expect((await readFile(downloadedPath!)).equals(expected)).toBe(true);
  }
});

test('internal pages, fragments and static assets resolve', async ({ page, request }) => {
  const targets = new Set<string>();
  for (const route of pages) {
    await page.goto(route);
    const hrefs = await page.locator('a[href]').evaluateAll(links => links.map(link => (link as HTMLAnchorElement).href));
    for (const href of hrefs) if (href.startsWith('http://127.0.0.1:4321')) targets.add(href);
    const assets = await page.locator('link[rel="stylesheet"], link[rel="icon"], script[src]').evaluateAll(nodes => nodes.map(n => n.getAttribute('href') || n.getAttribute('src') || ''));
    for (const asset of assets) expect((await request.get(asset)).ok()).toBe(true);
  }
  for (const target of targets) {
    expect((await request.get(target)).ok()).toBe(true);
    const url = new URL(target);
    if (url.hash) { await page.goto(target); await expect(page.locator(url.hash)).toHaveCount(1); }
  }
  expect((await request.get('/does-not-exist/')).status()).toBe(404);
  expect((await request.get('/docs/content-evidence.md')).status()).toBe(404);
  expect((await request.get('/robots.txt')).ok()).toBe(true);
});

test('mobile navigation remains usable without JavaScript', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
  const page = await context.newPage();
  await page.goto('http://127.0.0.1:4321/');
  await expect(page.getByRole('navigation', { name: 'Main navigation' })).toBeVisible();
  await page.getByRole('link', { name: 'Experience', exact: true }).click();
  await expect(page).toHaveURL(/#experience$/);
  await context.close();
});

test('metadata has no invented canonical URL and reduced motion is honored', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  await expect(page).toHaveTitle('Mahmoud Heshmat — AI Engineer');
  await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /Python backends/);
  expect(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior)).toBe('auto');
  const canonical = page.locator('link[rel="canonical"]');
  if (await canonical.count()) await expect(canonical).toHaveAttribute('href', /^https:\/\//);
  await page.goto('/404/');
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex');
});
