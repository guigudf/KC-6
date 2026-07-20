# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\registration.dd.spec.js >> REG_VAL_003 - Valid User
- Location: tests\registration.dd.spec.js:21:5

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /login/
Received string:  "https://practice.expandtesting.com/register"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    14 × unexpected value "https://practice.expandtesting.com/register"

```

```yaml
- paragraph:
  - link "PMP Practice":
    - /url: https://pmp.expandtesting.com/
  - text: "| Free PMP Certification Mock Exam Test +900 Questions & Quizzes"
  - link "Educational Resources":
    - img
    - text: Educational Resources
- banner:
  - navigation "Main navigation":
    - link "SUT":
      - /url: /
      - 'img "Best Website for Practice Automation Testing: Free UI and REST API Examples and Apps. Using Cypress, Playwright, Selenium, WebdriverIO and Postman."'
      - text: Practice
    - list:
      - listitem:
        - button "Demos"
      - listitem:
        - link "Tools":
          - /url: /#tools
      - listitem:
        - link "Tips":
          - /url: /tips
      - listitem:
        - link "Test Cases":
          - /url: /test-cases
      - listitem:
        - link "API Testing":
          - /url: /notes/api/api-docs/
      - listitem:
        - link "About":
          - /url: /about
    - list
    - link "Free ISTQB Mock Exams":
      - /url: https://istqb.expandtesting.com/
- main:
  - alert:
    - text: An error occurred during registration. Please try again.
    - button "Close"
  - paragraph:
    - text: Do you enjoy this platform? ❤️
    - link "Buy us a coffee":
      - /url: https://www.buymeacoffee.com/expandtesting
  - insertion:
    - heading "These are topics related to the article that might interest you" [level=2]: Discover more
    - link "Software"
    - link "Educational Resources"
    - link "Quality Assurance training"
    - link "Open Source"
    - link "Factory Automation"
    - link "Development Tools"
    - link "Testing best practices"
    - link "Automation testing tools"
  - navigation "breadcrumb mb-2":
    - list:
      - listitem:
        - link "Home":
          - /url: /
      - listitem: / Register Page
  - heading "Test Register page for Automation Testing Practice" [level=1]
  - paragraph: This Test Register page is designed for automation testing practice. Test various positive and negative register scenarios in a testing environment.
  - paragraph:
    - text: You can use this register page for practicing with Selenium or other tools like Playwright, Cypress, etc.
    - link "API testing services":
      - img
      - text: API testing services
  - text: Username
  - textbox "Username"
  - text: Password
  - textbox "Password"
  - insertion:
    - heading "These are topics related to the article that might interest you" [level=2]: Discover more
    - link "Automation practice website"
    - link "Education"
    - link "Computer Science"
    - link "Chips & Processors"
    - link "Software Testing courses"
    - link "Standardized & Admissions Tests"
    - link "Selenium testing guide"
    - link "REST API testing"
  - text: Confirm Password
  - textbox "Confirm Password"
  - button "Register"
  - insertion:
    - heading "These are topics related to the article that might interest you" [level=2]: Discover more
    - link "Playwright testing examples"
    - link "Internet Software"
    - link "Fun & Trivia"
    - link "Computers & Electronics"
    - link "Web Apps & Online Tools"
    - link "API testing services"
    - link "Training & Certification"
    - link "Web Browsers"
- contentinfo:
  - heading "Practice Test Automation WebSite for Web UI and Rest API" [level=4]
  - paragraph:
    - text: "Version: e64cd80e | Copyright"
    - link "Expand Testing":
      - /url: https://expandtesting.com/
    - text: "2026"
- img
```

# Test source

```ts
  1  | const { test, expect } = require("@playwright/test");
  2  | 
  3  | const RegistrationPage = require("../pages/RegistrationPage");
  4  | const { readExcel } = require("../utils/excel");
  5  | 
  6  | const source = process.env.DATA_SOURCE || "xlsx";
  7  | 
  8  | const dataset =
  9  |     source === "csv"
  10 |         ? readCsv("data/registration-data.csv")
  11 |         : readExcel("data/registration-data.xlsx");
  12 |         
  13 |         const filter = process.env.TEST_FILTER || "";
  14 | 
  15 | const filtered = dataset.filter(row =>
  16 |     row.testId.startsWith(filter)
  17 | );
  18 | 
  19 | filtered.forEach(row => {
  20 | 
  21 |     test(`${row.testId} - ${row.testCase}`, async ({ page }) => {
  22 | 
  23 |         const register = new RegistrationPage(page);
  24 | 
  25 |         await register.open();
  26 | 
  27 |         await register.register(row);
  28 | 
  29 |         if (row.expected === "pass") {
> 30 |           await expect(page).toHaveURL(/login/);
     |                              ^ Error: expect(page).toHaveURL(expected) failed
  31 |           await expect(page.locator("#flash")).toContainText("Successfully registered, you can log in now.");
  32 |         } else {
  33 |             await expect(page.locator("body")).toContainText(row.expectedError);
  34 |         }
  35 |     });
  36 | });
```