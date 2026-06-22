import { test } from "@playwright/test";

import { LoginPage } from "../pages/LoginPage";
import { TestConfig } from "../config/TestConfig";

let config: TestConfig;
let loginPage: LoginPage;

//This Hooks Before Each Test
test.beforeEach(async({page})=>{
    config = new TestConfig();
    await page.goto(config.appUrl);

    // Initialize page objects
    loginPage = new LoginPage(page);
})

// Optional cleanup after each test
test.afterEach(async ({ page }) => {
  await page.close(); // Close browser tab (good practice in local/dev run)
});
test("Verify the Login As Admin",async({page})=>{

    //Enter valid credentials and log in
    await loginPage.EnterEmailAddress(config.adminemail);
    await loginPage.EnterPassword(config.adminpassword);
    await loginPage.ClickLoginButton();
})
