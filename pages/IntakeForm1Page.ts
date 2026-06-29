import { Page, Locator } from '@playwright/test';

export class IntakeStep1Page {

    private readonly page: Page;

    // Step Information
    private readonly stepIndicator: Locator;
    private readonly pageHeading: Locator;
    private readonly pageDescription: Locator;

    // State
    private readonly stateDropdown: Locator;

    // Personal Information
    private readonly firstNameInput: Locator;
    private readonly lastNameInput: Locator;
    private readonly dateOfBirthInput: Locator;

    // Gender
    private readonly maleOption: Locator;
    private readonly femaleOption: Locator;
    private readonly nonBinaryOption: Locator;
    private readonly transgenderOption: Locator;
    private readonly cisgenderOption: Locator;
    private readonly genderFluidOption: Locator;
    private readonly genderNeutralOption: Locator;
    private readonly agenderOption: Locator;
    private readonly pangenderOption: Locator;
    private readonly otherGenderOption: Locator;

    // Navigation
    private readonly nextButton: Locator;

}