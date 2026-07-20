const BasePage = require("./BasePage");

class RegistrationPage extends BasePage {

    static USERNAME = "#username";
    static PASSWORD = "#password";
    static CONFIRM_PASSWORD = "#confirmPassword";
    static REGISTER_BUTTON = "button[type='submit']";

    constructor(page) {
        super(page);
    }

    async open() {
        await this.navigate(
            "https://practice.expandtesting.com/register"
        );
    }

    async enterUsername(username) {
        await this.type(
            RegistrationPage.USERNAME,
            username
        );
    }

    async enterPassword(password) {
        await this.type(
            RegistrationPage.PASSWORD,
            password
        );
    }

    async enterConfirmPassword(confirmPassword) {
        await this.type(
            RegistrationPage.CONFIRM_PASSWORD,
            confirmPassword
        );
    }

    async clickRegister() {
        await this.click(
            RegistrationPage.REGISTER_BUTTON
        );
    }

    async register(user) {
        await this.enterUsername(user.username);
        await this.enterPassword(user.password);
        await this.enterConfirmPassword(user.confirmPassword);
        await this.clickRegister();

    }
}

module.exports = RegistrationPage;