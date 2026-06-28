import { test, expect } from '@playwright/test';
import { LoginPage } from "../pages/LoginPage";
import { TestConfig } from "../config/TestConfig";
import { AdminDashBoard } from "../pages/AdminDashboardPages";

let config: TestConfig;
let admindashboard: AdminDashBoard;
let loginPage: LoginPage;

test.beforeEach(async ({ page }) => {
    config = new TestConfig();
    admindashboard = new AdminDashBoard(page);
    loginPage = new LoginPage(page);

    await page.goto(config.appUrl);
    await loginPage.EnterEmailAddress(config.adminemail);
    await loginPage.EnterPassword(config.adminpassword);
    await loginPage.ClickLoginButton();

await page.waitForLoadState('networkidle');
await page.waitForTimeout(3000);
});

test("Verify Admin Dashboard labels and count values", async ({ page }) => {

    await expect(await admindashboard.GetWelcomeBackHeading()).toBeVisible();
    await expect(await admindashboard.GetHiAdminQuickly()).toBeVisible();
    await expect(await admindashboard.GetPatientServedCard()).toBeVisible();
    await expect(await admindashboard.GetTicketGeneratedTodayCard()).toBeVisible();
    await expect(await admindashboard.GetActiveDoctorsCard()).toBeVisible();
    await expect(await admindashboard.GetPatientReportsSection()).toBeVisible();
    await expect(await admindashboard.GetPatientVolumeTrend()).toBeVisible();
    await expect(await admindashboard.GetPatientPriority()).toBeVisible();
    await expect(await admindashboard.GetDoctorReportsSection()).toBeVisible();
    await expect(await admindashboard.GetDoctorStatus()).toBeVisible();
    await expect(await admindashboard.GetDrActiveLabel()).toBeVisible();
    await expect(await admindashboard.GetDrInActiveLabel()).toBeVisible();
    await expect(await admindashboard.GetLiveDoctorAvailability()).toBeVisible();
    await expect(await admindashboard.GetDoctorOnboarding()).toBeVisible();
const totalDoctorStatus = await (await admindashboard.GetCountOfDrStatus()).innerText();
console.log("Total Doctor Status Count:", totalDoctorStatus);

const activeDoctor = await (await admindashboard.GetCountOfActiveDr()).innerText();
console.log("Active Doctors Percentage:", activeDoctor);

const inactiveDoctor = await (await admindashboard.GetCountOfInactiveDr()).innerText();
console.log("Inactive Doctors Percentage:", inactiveDoctor);

const todayDoctor = await (await admindashboard.GetCountOfTodayDr()).innerText();
console.log("Today's Available Doctors:", todayDoctor);

});