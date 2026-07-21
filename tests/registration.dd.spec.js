const { test, expect } = require("@playwright/test");

test.describe("Registration page smoke tests", () => {

    test("should open registration page", async ({ page }) => {

        await page.goto("https://practice.expandtesting.com/register");

        await expect(page).toHaveTitle(/Register/i);
    });


    test("should display registration fields", async ({ page }) => {

        await page.goto("https://practice.expandtesting.com/register");

        await expect(page.locator("#username")).toBeVisible();
        await expect(page.locator("#password")).toBeVisible();
        await expect(page.locator("#confirmPassword")).toBeVisible();
    });


    test("should show error with invalid registration", async ({ page }) => {

        await page.goto("https://practice.expandtesting.com/register");

        await page.fill("#username", "testuser");
        await page.fill("#password", "123");
        await page.fill("#confirmPassword", "456");

        await page.click("button[type='submit']");

        await expect(page.locator("body"))
            .toContainText(/password|error|invalid/i);
    });

});