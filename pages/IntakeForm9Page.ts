import { Page, Locator } from '@playwright/test';

export class IntakeStep9Page {

    private readonly page: Page;

    // Step Information
    private readonly stepIndicator: Locator;
    private readonly pageHeading: Locator;
    private readonly pageDescription: Locator;

    // Smoking
    private readonly smokingSection: Locator;

    // Alcohol
    private readonly alcoholSection: Locator;

    // Recreational Drugs
    private readonly recreationalDrugSection: Locator;

    // Family History
    private readonly familyHistorySection: Locator;
    private readonly familyHistoryInput: Locator;
    private readonly voiceInputButton: Locator;
    private readonly addButton: Locator;

    // Navigation
    private readonly backButton: Locator;
    private readonly nextButton: Locator;

}