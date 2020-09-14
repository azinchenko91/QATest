export class AuthorizationPO{

    get emailField() { return $('input[name="email"]') };
    get passwordField() { return $('input[name="password"]') };
    get loginBtn() { return $('.btn.block.primary') };
    get eyeIcon() { return $('.icon-eye') }
    get validationError(){ return $('.ssls-notification__info div')}
    get pageTitle(){ return $('.page-title')}


    isPageLoaded() {
        browser.waitUntil(() => this.pageTitle.getText() === 'Authorization', { timeout: 3000 })
    }

    fillInAutorizationForm(email:string, password:string){
        this.emailField.setValue(email)
        this.passwordField.setValue(password)
    }

    clickEyeIcon(){
        this.eyeIcon.click()
    }

    isPasswordVisible(){
        browser.waitUntil(() => this.passwordField.getAttribute('type') === 'text', {timeout:3000}) 
    }

    clickLoginBtn(){
        this.loginBtn.click()
    }

    isMessageVisible(message:string){
        browser.waitUntil(() => this.validationError.getText() === message, {timeout:5000})   
    }

    login(email:string, password:string){
        this.emailField.setValue(email)
        this.passwordField.setValue(password)
        this.loginBtn.click()
    }
}

export const Authorization = new AuthorizationPO()
