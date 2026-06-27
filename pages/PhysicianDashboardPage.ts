import { Page, Locator } from "@playwright/test";

export class PhysicianDashBoard {
    private page: Page;
    private dashboardHeading: Locator;
    private totalPatientCard: Locator;
    private upcomingappoinmentsCard: Locator;
    private ActiveConsultationCard: Locator;
    private CountoftotalPatient: Locator;
    private Countupcomingappoinment: Locator;
    private CountofActiveConsultation: Locator;
    private waitingPatientSection: Locator;
    private upcomingAppoinmentsSection: Locator;

    constructor(page: Page) {
        this.page = page;

        this.dashboardHeading = page.getByRole('heading', { name: 'Dashboard' });
        this.totalPatientCard = page.getByText('Total Patients', { exact: true });
        this.upcomingappoinmentsCard = page.locator('p:has-text("Upcoming Appointments")');
        this.ActiveConsultationCard = page.getByText('Active Consultation', { exact: true });

        this.CountoftotalPatient = page.locator("//p[text()='Total Patients']/following-sibling::div");
        this.Countupcomingappoinment = page.locator("//p[text()='Upcoming Appointments']/following-sibling::div");
        this.CountofActiveConsultation = page.locator("//p[text()='Active Consultation']/following-sibling::div");

        this.waitingPatientSection = page.getByRole('heading', { name: 'Waiting Patients' });
        this.upcomingAppoinmentsSection = page.getByRole('heading', { name: 'Upcoming Appointments' });
    }

    async GetDashBoardHeadling(): Promise<Locator> {
        return this.dashboardHeading;
    }

    async GetTotalPatientCard(): Promise<Locator> {
        return this.totalPatientCard;
    }

    async GetUpcomingAppoinmentCard(): Promise<Locator> {
        return this.upcomingappoinmentsCard;
    }

    async GetActiveConsulationCard(): Promise<Locator> {
        return this.ActiveConsultationCard;
    }

    async GetTotalPatientCount(): Promise<Locator> {
        return this.CountoftotalPatient;
    }

    async GetUpcomingAppoinmentCount(): Promise<Locator> {
        return this.Countupcomingappoinment;
    }

    async GetActiveConsultationCount(): Promise<Locator> {
        return this.CountofActiveConsultation;
    }

    async GetWaitingPatientSection(): Promise<Locator> {
        return this.waitingPatientSection;
    }

    async GetUpComingAppoinmentSection(): Promise<Locator> {
        return this.upcomingAppoinmentsSection;
    }
}