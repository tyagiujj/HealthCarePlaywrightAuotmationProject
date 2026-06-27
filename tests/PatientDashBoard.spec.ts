import { test, expect } from '@playwright/test';

import { PatientDashboardPage } from "../pages/PatientDashboard";
import { LoginPage } from "../pages/LoginPage";
import { TestConfig } from "../config/TestConfig";

let config: TestConfig;
let patientdashboard: PatientDashboardPage;
let loginPage: LoginPage;

test.beforeEach(async ({ page }) => {

    config = new TestConfig();

    loginPage = new LoginPage(page);
    patientdashboard = new PatientDashboardPage(page);

    await page.goto(config.appUrl);

    await loginPage.EnterEmailAddress(config.patientemail);
    await loginPage.EnterPassword(config.password);
    await loginPage.ClickLoginButton();

    await page.waitForTimeout(10000);
});

test("Verify the Paitent Dashobard Label ,Ststus Button are visible", async ({ page }) => {

    await expect(await patientdashboard.GetPatientName()).toBeVisible();
    await expect(await patientdashboard.GetRecentActivitySummary()).toBeVisible();
    await expect(await patientdashboard.GetPlanCreditsLeftCard()).toBeVisible();
    await expect(await patientdashboard.GetTotalConsultationCard()).toBeVisible();
    await expect(await patientdashboard.GetAddNewConsultationButton()).toBeVisible();
    await expect(await patientdashboard.GetAddNewConsultationButton()).toBeEnabled();
    await expect(await patientdashboard.GetTotalConsultationCard()).toBeVisible();
    await expect(await patientdashboard.GetRecentConsultationSection()).toBeVisible();
    await expect(await patientdashboard.GetDateColumn()).toBeVisible();
    await expect(await patientdashboard.GetSymptomsColumn()).toBeVisible();
    await expect(await patientdashboard.GetPhysicianColumn()).toBeVisible();
    await expect(await patientdashboard.GetTypeColumn()).toBeVisible();
    await expect(await patientdashboard.GetStatusColumn()).toBeVisible();
    await expect(await patientdashboard.GetStateColumn()).toBeVisible();
    await expect(await patientdashboard.GetQuickActionsSection()).toBeVisible();
    await expect(await patientdashboard.GetBookAppointmentButton()).toBeVisible();
    await expect(await patientdashboard.GetBookAppointmentButton()).toBeEnabled();
    await expect(await patientdashboard.GetStartAIIntakeButton()).toBeVisible();
    await expect(await patientdashboard.GetStartAIIntakeButton()).toBeEnabled();

});