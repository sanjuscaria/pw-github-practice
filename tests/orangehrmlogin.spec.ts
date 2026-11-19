import { test, expect } from '@playwright/test';

test('logging into orangehrm', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill(process.env.HRM_USERNAME!);
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.HRM_PASSWORD!);
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/dashboard/);
});
