export class ProfilePO{

    get pageTitle() { return $('.page-title') }
    get name() { return $('span[ng-hide*=name]') }
    get email() { return $('span[ng-hide*=email]') }
    get password() { return $('span[ng-hide*=password]') }
    get phone() { return $('span[ng-hide*=phone]') }
    get address() { return $('span[ng-hide*=address]') }
    get supportPin() { return $('[ng-class*=pin]  .description .text.ng-binding') }
    get newsletter() { return $('[ng-class*=newsletter] button') }


    isPageLoaded() {
        browser.waitUntil(() => this.pageTitle.getText() === 'Profile', { timeout: 3000 })
    }

    getProfileInfo() {
        const name = this.name.getText()
        const email = this.email.getText()
        const password = this.password.getText()
        const phone = this.phone.getText()
        console.log('PASSWORD' + password)
        const address = this.address.getText()
        const supportPin = this.supportPin.getText()
        const newsletterClassName = this.newsletter.getAttribute('class')
        let newsletterState = ''
        if (newsletterClassName === 'toggle-btn on') {
            newsletterState = 'active'
        }
        else {
            newsletterState = 'inactive'
        }
        return [name, email, password, phone, address, supportPin, newsletterState]
    }

    verifyProfileInfo(
        name: string,
        email: string,
        password: string,
        phone: string,
        address: string,
        supportPin: string,
        newsletterState: string
    ) {
        const name2 = this.name.getText()
        const email2 = this.email.getText()
        const password2 = this.password.getText()
        const phone2 = this.phone.getText()
        const address2 = this.address.getText()
        const supportPin2 = this.supportPin.getText()
        const newsletterClassName2 = this.newsletter.getAttribute('class')
        let newsletterState2 = ''
        if (newsletterClassName2 === 'toggle-btn on') {
            newsletterState2 = 'active'
        }
        else {
            newsletterState2 = 'inactive'
        }
        expect(name).toBe(name2)
        expect(email).toBe(email2)
        expect(password).toBe(password2)
        expect(password2).not.toEqual('')
        expect(phone).toBe(phone2)
        expect(address).toBe(address2)
        expect(supportPin).toBe(supportPin2)
        expect(newsletterState).toBe(newsletterState2)
    }
}


export const Profile = new ProfilePO