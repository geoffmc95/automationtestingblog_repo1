import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
});

test('alert button shows alert', async ({ page }) => {
  // Set up listener for dialog
  page.once('dialog', async dialog => {
    expect(dialog.type()).toBe('alert');
    expect(dialog.message()).toBe('I am an alert box!');
    await dialog.accept();
  });
  
  // Click alert button
  await page.locator('button:has-text("Alert")').click();
});

test('confirm button shows confirm dialog', async ({ page }) => {
  // Set up listener for dialog
  page.once('dialog', async dialog => {
    expect(dialog.type()).toBe('confirm');
    expect(dialog.message()).toBe('Press a button!');
    await dialog.accept(); // Click OK
  });
  
  // Click confirm button
  await page.locator('button:has-text("Confirm Box")').click();
  
  // Verify result text
  await expect(page.locator('#demo')).toHaveText('You pressed OK!');
});

test('prompt button shows prompt dialog', async ({ page }) => {
  // Set up listener for dialog
  page.once('dialog', async dialog => {
    expect(dialog.type()).toBe('prompt');
    expect(dialog.message()).toBe('Please enter your name:');
    await dialog.accept('Test User'); // Enter text and click OK
  });
  
  // Click prompt button
  await page.locator('button:has-text("Prompt")').click();
  
  // Verify result text
  await expect(page.locator('#demo')).toHaveText('Hello Test User! How are you today?');
});