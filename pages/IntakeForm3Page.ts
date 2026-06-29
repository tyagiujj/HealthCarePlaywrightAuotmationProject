import { Page, Locator } from '@playwright/test';

export class IntakeStep3Page {

    private readonly page: Page;

    // Step Information
    private readonly stepIndicator: Locator;
    private readonly pageHeading: Locator;
    private readonly pageDescription: Locator;

    // Symptom Duration
    private readonly hoursOption: Locator;
    private readonly daysOption: Locator;
    private readonly weeksOption: Locator;
    private readonly monthsOption: Locator;
    private readonly yearsOption: Locator;

    // Dynamic Sections
    private readonly coughSection: Locator;
    private readonly sputumSection: Locator;
    private readonly vomitingSection: Locator;
    private readonly abdominalPainSection: Locator;
    private readonly diarrheaSection: Locator;
    private readonly vaginalDischargeSection: Locator;
    private readonly penileDischargeSection: Locator;

    // Navigation
    private readonly backButton: Locator;
    private readonly nextButton: Locator;

}