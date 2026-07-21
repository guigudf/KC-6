const { expect } = require("@playwright/test");

class BasePage {

    constructor(page) {
        this.page = page;
    }


    async navigate(url) {
        await this.page.goto(url);
    }


    async click(locator) {
        await this.page.locator(locator).click();
    }


    async type(locator, text) {
        await this.page.locator(locator).fill(String(text));
    }


    async getText(locator) {
        return await this.page.locator(locator).textContent();
    }


    async isVisible(locator) {
        return await this.page.locator(locator).isVisible();
    }


    async waitForElement(locator) {
        await this.page.locator(locator)
            .waitFor({
                state: "visible"
            });
    }


    async waitForText(locator, text) {
        await expect(this.page.locator(locator))
            .toContainText(text);
    }


    async waitForUrl(url) {
        await expect(this.page)
            .toHaveURL(url);
    }


    async waitForCount(locator, count) {
        await expect(this.page.locator(locator))
            .toHaveCount(count);
    }

}

module.exports = BasePage;