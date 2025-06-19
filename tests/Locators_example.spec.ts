import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
});

/*Examples of selectors:
-Text Selector: 'text=Home'
-Role Selector: 'role=button[name="Home"]'
-Id Selector: 'id=Home-Button'
-CSS Selector: 'div.container > ul > li.active'
-ID Selector: '#Home-Button'
-XPath Selector: '//table[@id="BookTable"]/tr[3]/td[1]'


Examples of locators with selectors:
-page.locator('text=Home')
-page.getByText('Home')
-page.getByID('Home-Button') 
-page.getByRole('button', { name: 'Home' })
-page.locator('div.container > ul > li.active')
-page.locator('#Home-Button')
-page.locator('//table[@id="BookTable"]/tr[3]/td[1]').textContent();
*/ 



// 1. CSS Selector
test('CSS selector: Check visibility of table by attribute', async ({ page }) => {
  await expect(page.locator('table[name="BookTable"]')).toBeVisible();
});

// 2. Role-based Locator (best for accessibility)
test('Role locator: Check table column headers', async ({ page }) => {
  await page.getByRole('link', { name: 'Home' }).click();
});

// 3. Role-based Locator with more specific locator
test('Role locator with specific locator: Check table column headers', async ({ page }) => {
  await page.locator('#PageList2').getByRole('link', { name: 'Home' }).click();
});

