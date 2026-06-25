import { Page, Locator } from '@playwright/test';

export class Patientsignup {

    private readonly page: Page;

    public readonly createAccountLink: Locator;
    public readonly createAccountHeading: Locator;
    public readonly firstNameText: Locator;
    public readonly lastNameText: Locator;
    public readonly emailAddressText: Locator;
    public readonly passwordFieldText: Locator;
    public readonly confirmPasswordText: Locator;
    public readonly termsCheckbox: Locator;
    public readonly continueButton: Locator;
    public readonly passworddoNotMatch :Locator;
    public readonly emailRequired :Locator;

    constructor(page: Page) {
        this.page = page;

        this.createAccountLink = page.getByRole('link', { name: 'Create Account' });

        this.createAccountHeading = page.getByRole('heading', { name: 'Create Account' });

        this.firstNameText = page.getByRole('textbox', { name: 'Enter first name' });

        this.lastNameText = page.getByRole('textbox', { name: 'Enter last name' });

        this.emailAddressText = page.getByRole('textbox', { name: 'Enter email address' });

        this.passwordFieldText = page.getByRole('textbox', { name: 'Enter password' });

        this.confirmPasswordText = page.getByRole('textbox', { name: 'Enter same password' });

        this.passworddoNotMatch=page.getByText('Passwords do not match', { exact: true });

        this.emailRequired=page.getByText('Email is required', { exact: true });



        this.termsCheckbox = page.getByRole('checkbox', {
            name: /terms of service/i
        });

        this.continueButton = page.getByRole('button', { name: 'Continue' });
    }

    async clickOnCreateAccountLink() {
        await this.createAccountLink.click();
    }

    async enterFirstName(firstName: string) {
        await this.firstNameText.fill(firstName);
    }

    async enterLastName(lastName: string) {
        await this.lastNameText.fill(lastName);
    }

    async enterEmailAddress(email: string) {
        await this.emailAddressText.fill(email);
    }

    async enterPassword(password: string) {
        await this.passwordFieldText.fill(password);
    }

    async enterConfirmPassword(password: string) {
        await this.confirmPasswordText.fill(password);
    }

    async acceptTerms() {
        await this.termsCheckbox.click();
    }

    async clickContinue() {
        await this.continueButton.click();
    }
     async Getcontinue(): Promise<Locator> {
    return this.continueButton;
  }
  
  async GetPasswordDoNotMatchMessage(): Promise<Locator>{
    return this.passworddoNotMatch;
  }
  async GetEmailIsRequiredMessage():Promise<Locator>{
    return this.emailRequired;
  }
  


    async registerPatient(firstName: string, lastName: string, email: string, password: string) {
        await this.enterFirstName(firstName);
        await this.enterLastName(lastName);
        await this.enterEmailAddress(email);
        await this.enterPassword(password);
        await this.enterConfirmPassword(password);
        await this.acceptTerms();
        await this.clickContinue();
    }
}