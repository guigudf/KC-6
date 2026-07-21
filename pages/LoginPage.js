const BasePage = require("./BasePage");
const { logger, maskSecret } = require("../utils/logger");


class LoginPage extends BasePage {

    static USERNAME = "#username";
    static PASSWORD = "#password";
    static LOGIN_BUTTON = "button[type='submit']";


    constructor(page) {
        super(page);
    }


    async open() {
        await this.navigate(
            "https://practice.expandtesting.com/login"
        );
    }


    async login(username, password) {

        logger.info(
            `Login attempt user=${username}, password=${maskSecret(password)}`
        );


        await this.type(
            LoginPage.USERNAME,
            username
        );


        await this.type(
            LoginPage.PASSWORD,
            password
        );


        await this.click(
            LoginPage.LOGIN_BUTTON
        );
    }

}

module.exports = LoginPage;