const { test, expect } = require("@playwright/test");
const LoginPage = require("../pages/LoginPage");
const { maskSecret } = require("../utils/logger");


test("login with masked password", async ({ page }) => {

    const login = new LoginPage(page);

    const password = "SuperSecretPassword!";


    console.log(
        "Masked password:",
        maskSecret(password)
    );


    await login.open();

    await login.login(
        "practice",
        password
    );


    await expect(page)
        .toHaveURL(/secure/);

});