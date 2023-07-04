import { test, expect } from '@playwright/test';

test('homepage has title and links', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await expect(page).toHaveTitle(/Immanuel Raj/);

  const twitter = page.getByRole('link', { name: '🐦 Twitter' });
  await expect(twitter).toHaveAttribute('href', 'https://twitter.com/iamimmanuelraj');

  const youtube = page.getByRole('link', { name: '📺 Youtube' });
  await expect(youtube).toHaveAttribute('href', 'https://www.youtube.com/@iamimmanuelraj');

  const github = page.getByRole('link', { name: '🐙 Github' });
  await expect(github).toHaveAttribute('href', 'https://github.com/iamimmanuelraj');

  const blog = page.getByRole('link', { name: '📝 Portfolio' });
  await expect(blog).toHaveAttribute('href', 'https://iamimmanuelraj.github.io');

  const email = page.getByRole('link', { name: '📪 Email me' });
  await expect(email).toHaveAttribute('href', 'mailto:iamimmanuelraj@gmail.com');
});
