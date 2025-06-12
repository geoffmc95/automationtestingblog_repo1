import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
});

test('table contains expected data', async ({ page }) => {
  // Verify table headers
  const headers = page.locator('.widget-content table th');
  await expect(headers).toHaveCount(6);
  
  // Verify specific cell data
  await expect(page.locator('.widget-content table tr').nth(1).locator('td').nth(0)).toHaveText('1');
  await expect(page.locator('.widget-content table tr').nth(1).locator('td').nth(1)).toHaveText('Andy');
  
  // Count total rows
  const rowCount = await page.locator('.widget-content table tr').count();
  expect(rowCount).toBeGreaterThan(1); // Header + at least one data row
});

test('can search in table', async ({ page }) => {
  // Type in search box
  await page.locator('#myInput').fill('Michael');
  
  // Verify filtered results
  const visibleRows = page.locator('#myTable tr:visible');
  await expect(visibleRows).toContainText('Michael');
  
  // Clear search
  await page.locator('#myInput').clear();
});