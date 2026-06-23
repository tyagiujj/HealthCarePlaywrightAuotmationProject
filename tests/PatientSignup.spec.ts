import { test, expect } from '@playwright/test';

import { RandomDataUtil } from '../config/randomDataGenerator';
import { TestConfig } from '../config/TestConfig';
import { Patientsignup } from '../pages/PatientSignupPage';

let patientSignupPage: Patientsignup;
let config: TestConfig;

test.beforeEach(async ({ page }) => {

    config = new TestConfig();

    await page.goto(config.appUrl);

    patientSignupPage = new Patientsignup(page);

});

test("Verify the patient Signup Functionality", async ({ page }) => {

    const firstName = RandomDataUtil.getFirstName();
    const lastName = RandomDataUtil.getlastName();
    const email = RandomDataUtil.getEmail();
    const password = RandomDataUtil.getPassword();

    console.log("Random Email is:", email);
    console.log("Random Password is:", password);

    await expect(patientSignupPage.createAccountLink).toBeVisible();

    await patientSignupPage.clickOnCreateAccountLink();

    await expect(patientSignupPage.createAccountHeading).toBeVisible();

    await expect(patientSignupPage.firstNameText).toBeEnabled();
    await patientSignupPage.enterFirstName(firstName);

    await expect(patientSignupPage.lastNameText).toBeEnabled();
    await patientSignupPage.enterLastName(lastName);

    await expect(patientSignupPage.emailAddressText).toBeEnabled();
    await patientSignupPage.enterEmailAddress(email);

    await expect(patientSignupPage.passwordFieldText).toBeEnabled();
    await patientSignupPage.enterPassword(password);

    await expect(patientSignupPage.confirmPasswordText).toBeEnabled();
    await patientSignupPage.enterConfirmPassword(password);

    await expect(patientSignupPage.termsCheckbox).toBeEnabled();
    await patientSignupPage.acceptTerms();

    await patientSignupPage.clickContinue();
});