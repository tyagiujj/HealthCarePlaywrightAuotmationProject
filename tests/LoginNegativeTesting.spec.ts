import { test, expect } from '@playwright/test';

import { RandomDataUtil } from '../config/randomDataGenerator';
import { TestConfig } from '../config/TestConfig';
import { LoginPage } from "../pages/LoginPage";

let config: TestConfig;
let loginPage: LoginPage;

test.beforeEach(async ({ page }) => {
    config = new TestConfig();
    await page.goto(config.appUrl);

    // Initialize page objects
    loginPage = new LoginPage(page);
});

test("Verify the Login Functionality With Valid EmailAdress and Without Password", async ({ page }) => {

    const email = RandomDataUtil.getEmail();
    const password = RandomDataUtil.getPassword();

    await loginPage.EnterEmailAddress(config.patientemail);
    //await loginPage.ClickLoginButton();
    await expect(await loginPage.GetLoginButton()).toBeDisabled();

});

test("Verify the Login Functionality Without EmailAddress and With Valid Password",async({page})=>{
    await loginPage.EnterPassword(config.password);
    await expect(await loginPage.GetLoginButton()).toBeDisabled();
})
test("Verify the Login Valid EmailAddress and Invalid Password",async({page})=>{
    await loginPage.EnterEmailAddress(config.patientemail);
    await loginPage.EnterPassword(RandomDataUtil.getPassword());
    await loginPage.ClickLoginButton();
    await expect(await loginPage.GetInvalidEmailAndPasswordMessage()).toBeVisible();
});

test("Verify the Login Functionality InValid EmailAddress and InValid Password",async({page})=>{
    await loginPage.EnterEmailAddress(RandomDataUtil.getEmail());
    await loginPage.EnterPassword(config.password);
     await loginPage.ClickLoginButton();
    await expect(await loginPage.GetNosignuprequestfoundforthisemailMessage()).toBeVisible();

});
test("Verfiy the Login Functionality Wiithout Email Address and Without Passoword",async({page})=>{
     await expect(await loginPage.GetLoginButton()).toBeDisabled();
})