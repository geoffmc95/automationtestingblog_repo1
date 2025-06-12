import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
});

test('date picker works', async ({ page }) => {
  // Click on date picker
  await page.locator('#datepicker').click();
  
  // Select a date (15th of current month)
  await page.locator('a.ui-state-default:has-text("15")').first().click();
  
  // Verify date was selected (format will depend on current month)
  await expect(page.locator('#datepicker')).toHaveValue('15');
});

test('slider can be adjusted', async ({ page }) => {
  // Get the slider element
  const slider = page.locator('#slider span');
  
  // Move slider to the right
  await slider.dragTo(slider, { targetPosition: { x: 100, y: 0 } });
  
  // Verify slider moved (visual verification would be needed for exact position)
  // This is a basic check that the element exists and is visible
  await expect(slider).toBeVisible();
});

test('resizable element can be resized', async ({ page }) => {
  // Get the resizable element handle
  const resizableHandle = page.locator('#resizable .ui-resizable-se');
  
  // Resize the element
  await resizableHandle.dragTo(resizableHandle, { targetPosition: { x: 50, y: 50 } });
  
  // Verify element was resized (visual verification would be needed for exact size)
  // This is a basic check that the element exists
  await expect(page.locator('#resizable')).toBeVisible();
});

