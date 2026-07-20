const { test, expect } = require("@playwright/test");
const { validate } = require("../utils/validation");
const RegistrationPage = require("../pages/RegistrationPage");
const { readData } = require("../utils/data");

const source = process.env.DATA_SOURCE || "xlsx";

const file =
    source === "csv"
        ? "data/registration-data.csv"
        : "data/registration-data.xlsx";

const dataset = readData(file);
validate(dataset);
        
const filter = process.env.TEST_FILTER || "";

const filtered = dataset.filter(row =>
    row.testId.startsWith(filter)
);

filtered.forEach(row => {

    test(`${row.testId} - ${row.testCase}`, async ({ page }) => {

        const register = new RegistrationPage(page);

        await register.open();

        await register.register(row);

        if (row.expected === "pass") {
          await expect(page).toHaveURL(/login/);
          await expect(page.locator("#flash")).toContainText("Successfully registered, you can log in now.");
        } else {
            await expect(page.locator("body")).toContainText(row.expectedError);
        }
    });
});