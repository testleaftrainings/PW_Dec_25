import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://login.salesforce.com/?locale=in');
  await page.getByRole('textbox', { name: 'Username' }).fill('dilipkumar.rajendran@testleaf.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('TestLeaf@2025');
  await page.getByRole('button', { name: 'Log In' }).click();;
  await page.getByRole('button', { name: 'App Launcher' }).click();
  await page.getByRole('option', { name: 'Sales', exact: true }).click();
  await page.getByRole('button', { name: 'Leads List' }).click();
  await page.getByRole('menuitem', { name: 'New Lead' }).click();
  await page.getByRole('combobox', { name: 'Lead Status' }).click();
  await page.getByText('Qualified', { exact: true }).click();
  await expect(page.getByRole('combobox', { name: 'Lead Status' })).toBeVisible();
});