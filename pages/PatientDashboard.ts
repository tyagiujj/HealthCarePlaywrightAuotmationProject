import { Locator, Page } from "@playwright/test";

export class PatientDashboardPage {

    private readonly page: Page;
    private readonly patientNameHeading: Locator;
    private readonly recentActivitySummary: Locator;
    private readonly addNewConsultationButton: Locator;
    private readonly planCreditsLeftCard: Locator;
    private readonly totalConsultationCard: Locator;
    private readonly upcomingConsultationCard: Locator;
    private readonly recentConsultationSection: Locator;
    private readonly dateColumn: Locator;
    private readonly symptomsColumn: Locator;
    private readonly physicianColumn: Locator;
    private readonly typeColumn: Locator;
    private readonly statusColumn: Locator;
    private readonly stateColumn: Locator;
    private readonly quickActionsSection: Locator;
    private readonly startAIIntakeButton: Locator;
    private readonly bookAppointmentButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.patientNameHeading = page.locator('h1', { hasText: 'Hi,' });
        this.recentActivitySummary = page.getByText("Here's a summary of your recent activity", { exact: true });
        this.addNewConsultationButton = page.getByRole('button', { name: 'Add New Consultation' });
        this.planCreditsLeftCard = page.getByText('Plan Credits Left', { exact: true });
        this.totalConsultationCard = page.getByText('Total Consultations', { exact: true });
        this.upcomingConsultationCard = page.getByText('Upcoming Consultations', { exact: true });
        this.recentConsultationSection = page.getByRole('heading', { name: 'Recent Consultations' });
        this.dateColumn = page.getByRole('button', { name: 'Date' });
        this.symptomsColumn = page.getByRole('button', { name: 'Symptoms' });
        this.physicianColumn = page.getByRole('button', { name: 'Physician' });
        this.typeColumn = page.getByRole('button', { name: 'Type' });
        this.statusColumn = page.getByRole('button', { name: 'Status' });
        this.stateColumn = page.getByRole('button', { name: 'State' });
        this.quickActionsSection = page.getByRole('heading', { name: 'Quick Actions' });
        this.startAIIntakeButton = page.getByRole('button', { name: 'Start AI Intake' });
        this.bookAppointmentButton = page.getByRole('button', { name: 'Book Appointment' });
    }

    async GetPatientName(): Promise<Locator> {
        return this.patientNameHeading;
    }

    async GetRecentActivitySummary(): Promise<Locator> {
        return this.recentActivitySummary;
    }

    async GetAddNewConsultationButton(): Promise<Locator> {
        return this.addNewConsultationButton;
    }

    async ClickOnAddNewConsultationButton(): Promise<void> {
        await this.addNewConsultationButton.click();
    }

    async GetPlanCreditsLeftCard(): Promise<Locator> {
        return this.planCreditsLeftCard;
    }

    async GetTotalConsultationCard(): Promise<Locator> {
        return this.totalConsultationCard;
    }

    async GetUpcomingConsultationCard(): Promise<Locator> {
        return this.upcomingConsultationCard;
    }

    async GetRecentConsultationSection(): Promise<Locator> {
        return this.recentConsultationSection;
    }

    async GetDateColumn(): Promise<Locator> {
        return this.dateColumn;
    }

    async GetSymptomsColumn(): Promise<Locator> {
        return this.symptomsColumn;
    }

    async GetPhysicianColumn(): Promise<Locator> {
        return this.physicianColumn;
    }

    async GetTypeColumn(): Promise<Locator> {
        return this.typeColumn;
    }

    async GetStatusColumn(): Promise<Locator> {
        return this.statusColumn;
    }

    async GetStateColumn(): Promise<Locator> {
        return this.stateColumn;
    }

    async GetQuickActionsSection(): Promise<Locator> {
        return this.quickActionsSection;
    }

    async GetStartAIIntakeButton(): Promise<Locator> {
        return this.startAIIntakeButton;
    }

    async ClickOnStartAIIntakeButton(): Promise<void> {
        await this.startAIIntakeButton.click();
    }

    async GetBookAppointmentButton(): Promise<Locator> {
        return this.bookAppointmentButton;
    }

    async ClickOnBookAppointmentButton(): Promise<void> {
        await this.bookAppointmentButton.click();
    }
}