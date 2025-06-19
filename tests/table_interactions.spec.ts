import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

}); 
// Verify the static web table is visible and the title is correct
test('Static Web Table is visible and name is correct', async ({ page }) => {
  await expect(page.locator('table[name="BookT able"]')).toBeVisible();
  await expect(page.locator('#HTML1 h2.title')).toHaveText('Static Web Table');
});

  //Verify the static web table header titles are visible
test('Static Web Table header titles are visible', async ({ page }) => {
  await expect(page.locator('table[name="BookTable"] th')).toHaveCount(4);
  const expectedHeaders = ['BookName', 'Author', 'Subject', 'Price'];
  const actualHeaders = await page.locator('table[name="BookTable"] th').allTextContents();
  expect(actualHeaders).toEqual(expectedHeaders);
});


//Verify the number of header rows in the static web table
test('Count the number of header rows in the static web table', async ({ page }) => {
  const headerCount = await page.locator('table[name="BookTable"] tr th').count();
  expect(headerCount).toBe(4);
});

//Verify the number of non-header rows in the static web table
test ('Count the number of non-header rows in the static web table without counting header rows', async ({ page }) => {
  const rowCount = await page.locator('table[name="BookTable"] tr:has(td)').count();
  expect(rowCount).toBe(6);
});

//Verify the data in the static web table
test ('Verify the data in the static web table data rows', async ({ page }) => {
  const StaticFirstRow_Expected = ["Learn Selenium", "Amit", "Selenium", "300"]; 
  const StaticSecondRow_Expected = ["Learn Java", "Mukesh", "Java", "500"];
  const StaticThirdRow_Expected = ["Learn JS", "Animesh", "Javascript", "300"];
  const StaticFourthRow_Expected = ["Master In Selenium", "Mukesh", "Selenium", "3000"];
  const StaticFifthRow_Expected = ["Master In Java", "Amod", "JAVA", "2000"];
  const StaticSixthRow_Expected = ["Master In JS", "Amit", "Javascript", "1000"];

  const StaticFirstRow_Actual = await page.locator('table[name="BookTable"] tr:nth-child(2) > td').allTextContents();
  const StaticSecondRow_Actual = await page.locator('table[name="BookTable"] tr:nth-child(3) > td').allTextContents();
  const StaticThirdRow_Actual = await page.locator('table[name="BookTable"] tr:nth-child(4) > td').allTextContents();
  const StaticFourthRow_Actual = await page.locator('table[name="BookTable"] tr:nth-child(5) > td').allTextContents();
  const StaticFifthRow_Actual = await page.locator('table[name="BookTable"] tr:nth-child(6) > td').allTextContents();
  const StaticSixthRow_Actual = await page.locator('table[name="BookTable"] tr:nth-child(7) > td').allTextContents();

  expect(StaticFirstRow_Actual).toEqual(StaticFirstRow_Expected);
  expect(StaticSecondRow_Actual).toEqual(StaticSecondRow_Expected);
  expect(StaticThirdRow_Actual).toEqual(StaticThirdRow_Expected);
  expect(StaticFourthRow_Actual).toEqual(StaticFourthRow_Expected);
  expect(StaticFifthRow_Actual).toEqual(StaticFifthRow_Expected);
  expect(StaticSixthRow_Actual).toEqual(StaticSixthRow_Expected);
});


//Verify static table row data using a loop
test('Verify static table row data using a loop', async ({ page }) => {


  const expectedRows = [
    ["Learn Selenium", "Amit", "Selenium", "300"],
    ["Learn Java", "Mukesh", "Java", "500"],
    ["Learn JS", "Animesh", "Javascript", "300"],
    ["Master In Selenium", "Mukesh", "Selenium", "3000"],
    ["Master In Java", "Amod", "JAVA", "2000"],
    ["Master In JS", "Amit", "Javascript", "1000"]
  ];

  const tableRows = page.locator('table[name="BookTable"] tbody tr');
  const rowCount = await tableRows.count();

  for (let i = 0; i < rowCount; i++) {
    const cells = tableRows.nth(i).locator('td');
    const cellTexts = await cells.allTextContents();
    expect(cellTexts).toEqual(expectedRows[i]);
  }
});


