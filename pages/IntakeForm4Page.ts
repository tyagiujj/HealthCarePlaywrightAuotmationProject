import { Page, Locator } from '@playwright/test';

export class IntakeStep4Page {

    private readonly page: Page;

    // Step Information
    private readonly stepIndicator: Locator;
    private readonly pageHeading: Locator;

    // Fever
    private readonly feverSlider: Locator;

    // Pain
    private readonly painSeveritySlider: Locator;

    // Physical Measurements
    private readonly weightInput: Locator;
    private readonly heightFeetInput: Locator;
    private readonly heightInchesInput: Locator;

    // Vitals
    private readonly systolicInput: Locator;
    private readonly diastolicInput: Locator;
    private readonly heartRateInput: Locator;

    // Reading Location
    private readonly doctorOption: Locator;
    private readonly homeOption: Locator;
    private readonly pharmacyOption: Locator;

    // Navigation
    private readonly backButton: Locator;
    private readonly nextButton: Locator;

}