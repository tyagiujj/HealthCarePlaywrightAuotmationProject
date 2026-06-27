import { test, expect } from '@playwright/test';
import { LoginPage } from "../pages/LoginPage";
import { TestConfig } from "../config/TestConfig";
import { PhysicianDashBoard } from "../pages/PhysicianDashboardPage";

let config: TestConfig;
let physiciandashboard: PhysicianDashBoard;
let loginPage: LoginPage;

test.beforeEach(async ({ page }) => {
    config = new TestConfig();
    loginPage = new LoginPage(page);
    physiciandashboard = new PhysicianDashBoard(page);

    await page.goto(config.appUrl);

    await loginPage.EnterEmailAddress(config.doctoremail);
    await loginPage.EnterPassword(config.password);
    await loginPage.ClickLoginButton();
});

test("Verify the Label, Text and Count of Physician Dashboard page", async ({ page }) => {

    await expect(await physiciandashboard.GetDashBoardHeadling()).toBeVisible();
    await expect(await physiciandashboard.GetTotalPatientCard()).toBeVisible();
    await expect(await physiciandashboard.GetUpcomingAppoinmentCard()).toBeVisible();
    await expect(await physiciandashboard.GetActiveConsulationCard()).toBeVisible();

    // Total Patients Count
    await expect(await physiciandashboard.GetTotalPatientCount()).toBeVisible();
    await expect(await physiciandashboard.GetTotalPatientCount()).toHaveText(/^\d+$/);
    const totalPatients = await (await physiciandashboard.GetTotalPatientCount()).textContent();
    console.log("Total Patients Count: ", totalPatients);

    // Upcoming Appointments Count
    await expect(await physiciandashboard.GetUpcomingAppoinmentCount()).toBeVisible();
    await expect(await physiciandashboard.GetUpcomingAppoinmentCount()).toHaveText(/^\d+$/);
    const upcomingAppointments = await (await physiciandashboard.GetUpcomingAppoinmentCount()).textContent();
    console.log("Upcoming Appointments Count: ", upcomingAppointments);

    // Active Consultation Count
    await expect(await physiciandashboard.GetActiveConsultationCount()).toBeVisible();
    await expect(await physiciandashboard.GetActiveConsultationCount()).toHaveText(/^\d+$/);
    const activeConsultation = await (await physiciandashboard.GetActiveConsultationCount()).textContent();
    console.log("Active Consultation Count: ", activeConsultation);

    await expect(await physiciandashboard.GetWaitingPatientSection()).toBeVisible();
    await expect(await physiciandashboard.GetUpComingAppoinmentSection()).toBeVisible();

});