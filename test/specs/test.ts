import { Home, Authorization, Header, Profile } from "../../pageObjects/index"
const data = require('data/data.json');

afterEach(() => {
    browser.deleteCookies()
});

describe('Authorization', () => {
    it('Not registered user', () => {
        Home.open()
        Home.isPageLoaded()
        Header.clickLoginBtn()
        Authorization.isPageLoaded()
        Authorization.fillInAutorizationForm(data.invalidUser.email, data.invalidUser.password)
        Authorization.clickEyeIcon()
        Authorization.isPasswordVisible
        Authorization.clickLoginBtn()
        Authorization.isMessageVisible('Uh oh! Email or password is incorrect')
    })
})


describe('Authorization', () => {
    it('Registered user', () => {
        Home.open()
        Home.isPageLoaded()
        Header.clickLoginBtn()
        Authorization.isPageLoaded()
        Authorization.fillInAutorizationForm(data.validUser.email, data.validUser.password)
        Authorization.clickEyeIcon()
        Authorization.isPasswordVisible
        Authorization.clickLoginBtn()
        Header.IsButtonNameChanged(data.validUser.email.toLocaleUpperCase())
    })
})


describe('Profile', () => {
    let name: string
    let email: string
    let password: string
    let phone: string
    let address: string
    let supportPin: string
    let newsletterState: string

    beforeEach(() => {
        Home.open()
        Home.isPageLoaded()
        Header.clickLoginBtn()
        Authorization.isPageLoaded()
        Authorization.login(data.validUser.email, data.validUser.password)
        Header.IsButtonNameChanged(data.validUser.email.toLocaleUpperCase())
        Header.clickUserbutton()
        Header.selectProfileOption()
        Profile.isPageLoaded() 
        const values = Profile.getProfileInfo()
        name = values[0];
        email = values[1];
        password = values[2];
        phone = values[3];
        address = values[4]
        supportPin = values[5];
        newsletterState = values[6]
        Header.logout()
    });

    it('Check profile info', () => {
        Authorization.isPageLoaded()
        Authorization.login(data.validUser.email, data.validUser.password)
        Header.IsButtonNameChanged(data.validUser.email.toLocaleUpperCase())
        Header.clickUserbutton()
        Header.selectProfileOption()
        Profile.isPageLoaded() 
        Profile.verifyProfileInfo(name, email, password, phone, address, supportPin, newsletterState)
    })
})








