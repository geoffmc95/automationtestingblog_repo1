import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
});

//Verify page title 
test('Page has correct title', async ({ page }) => {
  await expect(page).toHaveTitle('Automation Testing Practice');
});

//Verify page header 
test('Page has correct header', async ({ page }) => {
  await expect(page.locator('h1')).toHaveText('Automation Testing Practice');
});

//Verify navigation bar contains all expected links 
test('Navigation bar contains all expected links', async ({ page }) => {; 
  await expect(page.locator('#PageList2').getByRole('link', { name: 'Home' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Udemy Courses' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Online Trainings' })).toBeVisible();
  await expect(page.locator('#PageList2').getByRole('link', { name: 'Blog' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'PlaywrightPractice' })).toBeVisible();
});

//Verify navigation bar links are clickable and navigate correctly
test('Navigation bar links are clickable and navigate correctly', async ({ page }) => {
//Verify 'Home' Link
  await page.locator('#PageList2').getByRole('link', { name: 'Home' }).click();
  await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/');
//Verify 'Udemy Courses' Link
  await page.getByRole('link', { name: 'Udemy Courses' }).click();
  await expect(page).toHaveURL('https://www.pavanonlinetrainings.com/p/udemy-courses.html');
  await page.goBack(); 
  await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/');
//Verify 'Online Trainings' Link
  await page.getByRole('link', { name: 'Online Trainings' }).click();
  await expect(page).toHaveURL('https://www.pavanonlinetrainings.com/');
  await page.goBack(); 
  await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/');
//Verify 'Blog' Link
  await page.locator('#PageList2').getByRole('link', { name: 'Blog' }).click();
  await expect(page).toHaveURL('https://www.pavantestingtools.com/');
  await page.goBack(); 
  await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/');
//Verify 'PlaywrightPractice' Link
  await page.getByRole('link', { name: 'PlaywrightPractice' }).click();
  await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
  await page.goBack(); 
  await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/');

}); 
 
//Verify all GUI elements are present on the page
test('Gui elements are present on the page', async ({page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await expect(page.getByRole('link', { name: 'GUI Elements' })).toBeVisible();
  await expect(page.getByText('Name:')).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Enter Name' })).toBeVisible();
  await expect(page.getByText('Email:')).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Enter EMail' })).toBeVisible();
  await expect(page.getByText('Phone:')).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Enter Phone' })).toBeVisible();
  await expect(page.getByText('Address:')).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Address:' })).toBeVisible();
  await expect(page.getByText('Gender:')).toBeVisible();
  await expect(page.getByText('Male', { exact: true })).toBeVisible();
  await expect(page.getByRole('radio', { name: 'Male', exact: true })).toBeVisible();
  await expect(page.getByText('Female')).toBeVisible();
  await expect(page.getByRole('radio', { name: 'Female' })).toBeVisible();
  await expect(page.getByText('Days:')).toBeVisible();
  await expect(page.getByText('Sunday')).toBeVisible();
  await expect(page.locator('#post-body-1307673142697428135 div').filter({ hasText: 'Sunday' }).nth(1)).toBeVisible();
  await expect(page.getByText('Monday')).toBeVisible();
  await expect(page.getByRole('checkbox', { name: 'Monday' })).toBeVisible();
  await expect(page.getByText('Tuesday')).toBeVisible();
  await expect(page.getByRole('checkbox', { name: 'Tuesday' })).toBeVisible();
  await expect(page.getByText('Wednesday')).toBeVisible();
  await expect(page.getByRole('checkbox', { name: 'Wednesday' })).toBeVisible();
  await expect(page.getByText('Thursday')).toBeVisible();
  await expect(page.getByRole('checkbox', { name: 'Thursday' })).toBeVisible();
  await expect(page.getByText('Friday')).toBeVisible();
  await expect(page.getByRole('checkbox', { name: 'Friday' })).toBeVisible();
  await expect(page.getByText('Saturday')).toBeVisible();
  await expect(page.getByRole('checkbox', { name: 'Saturday' })).toBeVisible();
  await expect(page.getByText('Country:')).toBeVisible();
  await expect(page.getByLabel('Country:')).toBeVisible();
  await expect(page.getByText('Colors:')).toBeVisible();
  await expect(page.getByLabel('Colors:')).toBeVisible();
  await expect(page.getByText('Sorted List:')).toBeVisible();
  await expect(page.getByLabel('Sorted List:')).toBeVisible();
  await expect(page.getByText('Date Picker 1 (mm/dd/yyyy):')).toBeVisible();
  await expect(page.locator('#datepicker')).toBeVisible();
  await expect(page.getByText('Date Picker 2 (dd/mm/yyyy) :')).toBeVisible();
  await expect(page.locator('#txtDate')).toBeVisible();
  await expect(page.getByText('Date Picker 3: (Select a Date')).toBeVisible();
  await expect(page.getByPlaceholder('Start Date')).toBeVisible();
  await expect(page.getByPlaceholder('End Date')).toBeVisible();
  await expect(page.locator('#post-body-1307673142697428135').getByRole('button', { name: 'Submit' })).toBeVisible();
  await expect(page.getByText('Subscribe to: Posts (Atom)')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Posts (Atom)' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Upload Files' })).toBeVisible();
  await expect(page.locator('#singleFileInput')).toBeVisible();
  await expect(page.locator('#multipleFilesInput')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Upload Single File' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Upload Multiple Files' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Static Web Table' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Pagination Web Table' })).toBeVisible();
  await expect(page.getByText('Pagination Web Table ID Name')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Form' })).toBeVisible();
  await expect(page.getByText('Section 1 This is a paragraph in Section 1. Submit Section 2 This is a')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'ShadowDOM' })).toBeVisible();
  await expect(page.locator('#shadow_host')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Footer Links' })).toBeVisible();
  await expect(page.locator('#PageList1').getByRole('listitem').filter({ hasText: 'Home' })).toBeVisible();
  await expect(page.getByRole('listitem').filter({ hasText: 'Hidden Elements & AJAX' })).toBeVisible();
});


