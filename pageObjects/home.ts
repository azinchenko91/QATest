export class HomePO {

    get loginBtn() { return $('.ssls-header-add-nav .ssls-toolbar__btn-text') }

    open() {
        browser.url('')
    };

    isPageLoaded() {
        browser.waitUntil(() => browser.getTitle() === 'Cheap SSL Certificates—Buy SSL Certs $3.77 & Save 52%', { timeout: 3000 })
    };

    clickLoginBtn() {
        this.loginBtn.click()
    }
}


export const Home = new HomePO