import { Page, Locator } from '@playwright/test';

export class IntakeStep8Page {

    private readonly page: Page;

    // Step Information
    private readonly stepIndicator: Locator;
    private readonly pageHeading: Locator;
    private readonly pageDescription: Locator;

    // Medication Form
    private readonly medicineNameInput: Locator;
    private readonly doseInput: Locator;
    private readonly commentsInput: Locator;

    // Frequency
    private readonly frequencySection: Locator;

    // Actions
    private readonly cancelButton: Locator;
    private readonly addMedicationButton: Locator;

    // Manual Entry
    private readonly manualMedicationInput: Locator;
    private readonly manualAddButton: Locator;

    // Navigation
    private readonly backButton: Locator;
    private readonly nextButton: Locator;

}