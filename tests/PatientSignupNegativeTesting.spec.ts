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

test("Verify the functionality Without data", async ({ page }) => {
    await patientSignupPage.clickOnCreateAccountLink();

    await expect(await patientSignupPage.Getcontinue()).toBeDisabled();
});

test("Verify the Patient Signup without First Name and Last Name", async ({ page }) => {
    const email = RandomDataUtil.getEmail();
    const password = RandomDataUtil.getPassword();

    await patientSignupPage.clickOnCreateAccountLink();
    await patientSignupPage.enterEmailAddress(email);
    await patientSignupPage.enterPassword(password);
    await patientSignupPage.enterConfirmPassword(password);

    await expect(await patientSignupPage.Getcontinue()).toBeDisabled();
});

test("Verify the Mismatch of Password and Confirm Password", async ({ page }) => {
    const firstName = RandomDataUtil.getFirstName();
    const lastName = RandomDataUtil.getlastName();
    const email = RandomDataUtil.getEmail();
    const password = RandomDataUtil.getPassword();

    await patientSignupPage.clickOnCreateAccountLink();
    await patientSignupPage.enterFirstName(firstName);
    await patientSignupPage.enterLastName(lastName);
    await patientSignupPage.enterEmailAddress(email);
    await patientSignupPage.enterPassword(password);
    await patientSignupPage.enterConfirmPassword(RandomDataUtil.getPassword());

    await expect(await patientSignupPage.GetPasswordDoNotMatchMessage()).toBeVisible();
});

test("Verify Patient Signup Without EmailAddress", async ({ page }) => {
    const firstName = RandomDataUtil.getFirstName();
    const lastName = RandomDataUtil.getlastName();
    const password = RandomDataUtil.getPassword();

    await patientSignupPage.clickOnCreateAccountLink();
    await patientSignupPage.enterFirstName(firstName);
    await patientSignupPage.enterLastName(lastName);
    await patientSignupPage.enterPassword(password);
    await patientSignupPage.enterConfirmPassword(password);
    await patientSignupPage.acceptTerms();

    await expect(await patientSignupPage.Getcontinue()).toBeDisabled();
});