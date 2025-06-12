import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
});

test('country dropdown selection works', async ({ page }) => {
  // Select Japan from dropdown
  await page.locator('#country').selectOption('Japan');
  await expect(page.locator('#country')).toHaveValue('japan');
  
  // Select another country
  await page.locator('#country').selectOption('Canada');
  await expect(page.locator('#country')).toHaveValue('canada');
});

test('colors dropdown selection works', async ({ page }) => {
  // Select Blue from dropdown
  await page.locator('#colors').selectOption('Blue');
  await expect(page.locator('#colors')).toHaveValue('blue');
  
  // Select Red
  await page.locator('#colors').selectOption('Red');
  await expect(page.locator('#colors')).toHaveValue('red');
});