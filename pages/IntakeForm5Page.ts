import { Page, Locator } from '@playwright/test';

export class IntakeStep5Page {

    private readonly page: Page;

    // Step Information
    private readonly stepIndicator: Locator;
    private readonly pageHeading: Locator;
    private readonly pageDescription: Locator;

    // Search
    private readonly conditionSearchInput: Locator;

    // Medical History
    private readonly medicalHistorySection: Locator;

    // Others
    private readonly otherConditionInput: Locator;
    private readonly voiceInputButton: Locator;
    private readonly addButton: Locator;

    // Navigation
    private readonly backButton: Locator;
    private readonly nextButton: Locator;

}