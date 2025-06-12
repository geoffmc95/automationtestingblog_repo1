import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
});

test('basic form fields are editable', async ({ page }) => {
  // Name field
  await page.getByRole('textbox', { name: 'Name' }).fill('John Test');
  
  // Email field
  await page.getByRole('textbox', { name: 'Email' }).fill('johntest@email.com');
  
  // Phone field
  await page.getByRole('textbox', { name: 'Phone' }).fill('1234567890');
  
  // Address field
  await page.locator('#textarea').fill('123 Test Street\nTest City, TS 12345');
  
  // Verify values were entered correctly
  await expect(page.getByRole('textbox', { name: 'Name' })).toHaveValue('John Test');
  await expect(page.getByRole('textbox', { name: 'Email' })).toHaveValue('johntest@email.com');
  await expect(page.getByRole('textbox', { name: 'Phone' })).toHaveValue('1234567890');
  await expect(page.locator('#textarea')).toHaveValue('123 Test Street\nTest City, TS 12345');
});

test('radio buttons can be selected', async ({ page }) => {
  // Select Male radio button
  await page.getByLabel('Male').check();
  await expect(page.getByLabel('Male')).toBeChecked();
  
  // Select Female radio button
  await page.getByLabel('Female').check();
  await expect(page.getByLabel('Female')).toBeChecked();
  await expect(page.getByLabel('Male')).not.toBeChecked();
});

test('checkboxes can be toggled', async ({ page }) => {
  // Check Sunday
  await page.getByLabel('Sunday').check();
  await expect(page.getByLabel('Sunday')).toBeChecked();
  
  // Check multiple days
  await page.getByLabel('Monday').check();
  await page.getByLabel('Saturday').check();
  
  await expect(page.getByLabel('Sunday')).toBeChecked();
  await expect(page.getByLabel('Monday')).toBeChecked();
  await expect(page.getByLabel('Saturday')).toBeChecked();
  
  // Uncheck Sunday
  await page.getByLabel('Sunday').uncheck();
  await expect(page.getByLabel('Sunday')).not.toBeChecked();
});