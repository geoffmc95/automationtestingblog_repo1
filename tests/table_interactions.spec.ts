import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
});

// Verify the static web table is visible and the name is correct
test('Static Web Table is visible and name is correct', async ({ page }) => {
  await expect(page.locator('table[name="BookTable"]')).toBeVisible();
  await expect(page.locator('#HTML1 h2.title')).toHaveText('Static Web Table');
});
//Verify the static web table header titles are visible
test('Static Web Table header titles are visible', async ({ page }) => {
const expectedHeaders = ['BookName', 'Author', 'Subject', 'Price'];
const actualHeaders = await page.locator('table[name="BookTable"] th').allTextContents();
expect(actualHeaders).toEqual(expectedHeaders);
});

//Verify the number of rows in the static web table


//Verify the static web table data is visible 
test('Static Web Table data is visible', async ({ page }) => {
  const expecteddata = 

});
