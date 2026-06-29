import { Page, Locator } from '@playwright/test';

export class IntakeStep6Page {

    private readonly page: Page;

    // Step Information
    private readonly stepIndicator: Locator;
    private readonly pageHeading: Locator;
    private readonly pageDescription: Locator;

    // Search
    private readonly surgerySearchInput: Locator;

    // Surgery History
    private readonly surgeryHistorySection: Locator;

    // Others
    private readonly otherSurgeryInput: Locator;
    private readonly voiceInputButton: Locator;
    private readonly addButton: Locator;

    // Navigation
    private readonly backButton: Locator;
    private readonly nextButton: Locator;

}