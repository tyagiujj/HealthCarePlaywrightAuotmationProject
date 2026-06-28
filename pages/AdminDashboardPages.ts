import { Page, Locator } from '@playwright/test';

export class AdminDashBoard {

    private page: Page;
    private welcomeBackHeading: Locator;
    private hiAdminQuickly: Locator;
    private overViewSection: Locator;
    private patientServedCard: Locator;
    private ticketGeneratedTodayCard: Locator;
    private activeDoctorsCard: Locator;
    private patientReportsSection: Locator;
    private patientVolumeTrend: Locator;
    private patientPriority: Locator;
    private doctorReportsSection: Locator;
    private DoctorStatus: Locator;

    private countOfDrStatus: Locator;
    private drActiveLabel: Locator;
    private drInActiveLabel: Locator;
    private countofActiveDr: Locator;
    private countofInactivedr: Locator;

    private LiveDoctorAvailability: Locator;
    private countofTodaydr: Locator;

    private DoctorOnboarding: Locator;

    constructor(page: Page) {

        this.page = page;

        this.welcomeBackHeading = page.getByRole('heading', { name: 'Welcome Back' });
        this.hiAdminQuickly = page.getByText('Hi Admin, Quickly review platform performance and urgent tasks.', { exact: true });
        this.overViewSection = page.getByRole('heading', { name: 'Overview' });
        this.patientServedCard = page.getByText('Patient Served', { exact: true });
        this.ticketGeneratedTodayCard = page.getByText('Ticket Generated Today', { exact: true });
        this.activeDoctorsCard = page.getByText('Active Doctors', { exact: true });

        this.patientReportsSection = page.getByRole('heading', { name: 'Patient Reports' });
        this.patientVolumeTrend = page.getByText('Patient Volume Trend', { exact: true });
        this.patientPriority = page.getByText('Patient Priority', { exact: true });

        this.doctorReportsSection = page.getByRole('heading', { name: 'Doctor Reports' });

        this.DoctorStatus = page.getByText('Doctor Status', { exact: true });

        this.countOfDrStatus = page.locator("//span[text()='Doctor Status']/following-sibling::div");

        this.drActiveLabel = page.getByText('● Active', { exact: true });

        this.drInActiveLabel = page.getByText('● Inactive', { exact: true });

        this.countofActiveDr = page.locator("//p[normalize-space()='● Active']/following-sibling::p");

        this.countofInactivedr = page.locator("//p[normalize-space()='● Inactive']/following-sibling::p");

        this.LiveDoctorAvailability = page.getByText('Live Doctor Availability', { exact: true });

        this.countofTodaydr = page.locator("//span[text()='Live Doctor Availability']/following-sibling::div/span");

        this.DoctorOnboarding = page.getByText('Doctor Onboarding', { exact: true });

    }

    async GetWelcomeBackHeading(): Promise<Locator> {
        return this.welcomeBackHeading;
    }

    async GetHiAdminQuickly(): Promise<Locator> {
        return this.hiAdminQuickly;
    }

    async GetOverViewSection(): Promise<Locator> {
        return this.overViewSection;
    }

    async GetPatientServedCard(): Promise<Locator> {
        return this.patientServedCard;
    }

    async GetTicketGeneratedTodayCard(): Promise<Locator> {
        return this.ticketGeneratedTodayCard;
    }

    async GetActiveDoctorsCard(): Promise<Locator> {
        return this.activeDoctorsCard;
    }

    async GetPatientReportsSection(): Promise<Locator> {
        return this.patientReportsSection;
    }

    async GetPatientVolumeTrend(): Promise<Locator> {
        return this.patientVolumeTrend;
    }

    async GetPatientPriority(): Promise<Locator> {
        return this.patientPriority;
    }

    async GetDoctorReportsSection(): Promise<Locator> {
        return this.doctorReportsSection;
    }

    async GetDoctorStatus(): Promise<Locator> {
        return this.DoctorStatus;
    }

    async GetCountOfDrStatus(): Promise<Locator> {
        return this.countOfDrStatus;
    }

    async GetDrActiveLabel(): Promise<Locator> {
        return this.drActiveLabel;
    }

    async GetDrInActiveLabel(): Promise<Locator> {
        return this.drInActiveLabel;
    }

    async GetCountOfActiveDr(): Promise<Locator> {
        return this.countofActiveDr;
    }

    async GetCountOfInactiveDr(): Promise<Locator> {
        return this.countofInactivedr;
    }

    async GetLiveDoctorAvailability(): Promise<Locator> {
        return this.LiveDoctorAvailability;
    }

    async GetCountOfTodayDr(): Promise<Locator> {
        return this.countofTodaydr;
    }

    async GetDoctorOnboarding(): Promise<Locator> {
        return this.DoctorOnboarding;
    }

}