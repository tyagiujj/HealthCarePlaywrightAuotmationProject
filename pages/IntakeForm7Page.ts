import { Page, Locator } from '@playwright/test';

export class IntakeStep7Page {

    private readonly page: Page;

    // Step Information
    private readonly stepIndicator: Locator;
    private readonly pageHeading: Locator;
    private readonly pageDescription: Locator;

    // Search
    private readonly allergySearchInput: Locator;

    // Allergies
    private readonly allergySection: Locator;

    // Others
    private readonly otherAllergyInput: Locator;
    private readonly voiceInputButton: Locator;
    private readonly addButton: Locator;

    // Navigation
    private readonly backButton: Locator;
    private readonly nextButton: Locator;

}