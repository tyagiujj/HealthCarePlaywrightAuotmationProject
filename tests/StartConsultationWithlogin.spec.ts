import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { IntakeStep1Page } from '../pages/IntakeForm1Page';
import { PatientDashboardPage } from '../pages/PatientDashboard';
import { TestConfig } from "../config/TestConfig";

let config: TestConfig;
let loginPage: LoginPage;
let intakeStep1Page: IntakeStep1Page;
let patientDashboaedPage: PatientDashboardPage;

// This Hooks Before Each Test
test.beforeEach(async ({ page }) => {
    config = new TestConfig();
    loginPage = new LoginPage(page);
    intakeStep1Page = new IntakeStep1Page(page);
    patientDashboaedPage = new PatientDashboardPage(page);

    await page.context().setGeolocation({ latitude: 32.806671, longitude: -86.791130 });
    await page.goto(config.appUrl);
});

test("Verify the Start Consultation With Login", async ({ page }) => {
    test.setTimeout(60000);

    await loginPage.EnterEmailAddress(config.patientemail);
    await loginPage.EnterPassword(config.password);
    await loginPage.ClickLoginButton();
    await expect(await patientDashboaedPage.GetPatientName()).toBeVisible({ timeout: 15000 });

    await page.goto(config.appUrl.replace('/login', '/consultations'));

    const stepOneHeading = await intakeStep1Page.getPageHeading();
    const stepTwoHeading = page.getByRole('heading', { name: 'What symptoms are you experiencing?' });

    // The app may land on Step 1 (fresh patient) or skip straight to Step 2
    // (returning patient whose state/personal info is already on file).
    // Race both instead of polling/guessing, so the test adapts to either
    // outcome deterministically without arbitrary sleeps.
    const landedStep = await Promise.race([
        stepOneHeading.waitFor({ state: 'visible', timeout: 20000 }).then(() => 'step1' as const),
        stepTwoHeading.waitFor({ state: 'visible', timeout: 20000 }).then(() => 'step2' as const),
    ]);

    if (landedStep === 'step1') {
        // Fresh patient — Step 1 (state/personal info) needs to be filled in.
        await expect(await intakeStep1Page.getPageDescription()).toBeVisible();

        await intakeStep1Page.selectState("Alabama");

        await expect(await intakeStep1Page.getFirstNameInput()).not.toBeEditable();
        await expect(await intakeStep1Page.getLastNameInput()).not.toBeEditable();
        await expect(await intakeStep1Page.getDateOfBirthInput()).not.toBeEditable();

        await intakeStep1Page.clickNext();
        await expect(stepTwoHeading).toBeVisible({ timeout: 15000 });
    } else {
        // Returning patient — Step 1 was auto-filled/skipped server-side.
        // This is expected app behavior, not a test failure.
        await expect(stepTwoHeading).toBeVisible();
    }
});