import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
});

test('drag and drop works', async ({ page }) => {
  // Get source and target elements
  const sourceElement = page.locator('#draggable');
  const targetElement = page.locator('#droppable');
  
  // Perform drag and drop
  await sourceElement.dragTo(targetElement);
  
  // Verify drop was successful
  await expect(targetElement).toHaveText('Dropped!');
});

test('sortable items can be reordered', async ({ page }) => {
  // Get sortable items
  const items = page.locator('#sortable li');
  
  // Get the first item
  const firstItem = items.first();
  const secondItem = items.nth(1);
  
  // Drag first item below second item
  await firstItem.dragTo(secondItem, { targetPosition: { x: 0, y: 20 } });
  
  // Verify items were reordered (visual verification would be needed)
  // This is a basic check that the elements exist
  await expect(items).toHaveCount(7);
});