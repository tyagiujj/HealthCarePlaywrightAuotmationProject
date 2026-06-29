import { Page, Locator } from '@playwright/test';

export class IntakeStep2Page {

    private readonly page: Page;

    // Step Information
    private readonly stepIndicator: Locator;
    private readonly pageHeading: Locator;
    private readonly pageDescription: Locator;

    // Symptoms
    private readonly symptomsDescriptionInput: Locator;

    // Symptom Chips
    private readonly soreThroatOption: Locator;
    private readonly coughOption: Locator;
    private readonly feverOption: Locator;
    private readonly headacheOption: Locator;
    private readonly congestionOption: Locator;
    private readonly mucusProductionOption: Locator;
    private readonly sinusPressureOption: Locator;
    private readonly chillsOption: Locator;

    // Navigation
    private readonly backButton: Locator;
    private readonly nextButton: Locator;

}