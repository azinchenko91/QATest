export class HeaderPO {

    get loginBtn() { return $('button .ssls-icon-user-circle ~ .ssls-toolbar__btn-text') }
    get links() { return $$('a[type = "button"]') }
    get buttons() { return $$('button[type = "button"]') }

    clickLoginBtn() {
        this.loginBtn.click()
    };

    IsButtonNameChanged(email: string) {
        browser.waitUntil(() => this.loginBtn.getText() === email, { timeout: 9000 })
    }

    clickUserbutton() {
        this.loginBtn.click()
    }

    selectProfileOption() {
        const [profileOption] = this.links.filter((link) => link.getText() === 'Profile')
        profileOption.click()
    }

    logout() {
        this.loginBtn.click()
        const [logoutButton] = this.buttons.filter((button) => button.getText() === 'Log out')
        logoutButton.click()
    }

}


export const Header = new HeaderPO