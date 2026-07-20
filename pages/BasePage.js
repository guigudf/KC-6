class BasePage {

    constructor(page) {
        this.page = page;
    }

    async navigate(url) {
        await this.page.goto(url);
    }

    async click(locator) {
        await this.page.click(locator);
    }

    async type(locator, text) {
        await this.page.fill(locator, String(text));
    }

    async getText(locator) {
        return await this.page.textContent(locator);
    }

    async isVisible(locator) {
        return await this.page.locator(locator).isVisible();
    }

    async waitForElement(locator) {
        await this.page.locator(locator).waitFor();
    }

}

module.exports = BasePage;