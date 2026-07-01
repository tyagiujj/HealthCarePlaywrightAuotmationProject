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

    constructor(page: Page) {
        this.page = page;
        this.stepIndicator = page.locator('span:has-text("STEP 1 OF 11")');
        this.pageHeading = page.getByRole('heading', { name: 'Select Your State' });
        this.pageDescription = page.getByText("We'll match you with a licensed physician in your state.", { exact: true }).first();

        // The state dropdown trigger renders with NO accessible name (empty
        // <span> inside the button, no aria-label/id). Role+name locators can
        // never match it, which is what caused the earlier flakiness/timeouts.
        // Instead, target it structurally: it's the only Step-1 trigger button
        // that renders a lucide "chevron-down" icon (the DOB field uses a
        // "calendar" icon instead, and gender options are plain text buttons
        // with no icon at all), so this is a stable, unambiguous hook.
        this.stateDropdown = page.locator('button:has(svg.lucide-chevron-down)').first();

        this.firstNameInput = page.getByRole('textbox', { name: 'First Name*' });
        this.lastNameInput = page.getByRole('textbox', { name: 'Last Name*' });
        this.dateOfBirthInput = page.getByRole('textbox', { name: 'MM/DD/YYYY' });
        this.maleOption = page.getByRole('button', { name: 'Male', exact: true });
        this.femaleOption = page.getByRole('button', { name: 'Female', exact: true });
        this.nonBinaryOption = page.getByRole('button', { name: 'Non-Binary', exact: true });
        this.transgenderOption = page.getByRole('button', { name: 'Transgender', exact: true });
        this.cisgenderOption = page.getByRole('button', { name: 'Cisgender', exact: true });
        this.genderFluidOption = page.getByRole('button', { name: 'Genderfluid', exact: true });
        this.genderNeutralOption = page.getByRole('button', { name: 'Gender Neutral', exact: true });
        this.agenderOption = page.getByRole('button', { name: 'A gender', exact: true });
        this.pangenderOption = page.getByRole('button', { name: 'Pangender', exact: true });
        this.otherGenderOption = page.getByRole('button', { name: 'Other', exact: true });
        this.nextButton = page.locator('button').filter({ hasText: 'Next' }).first();
    }

    //======================
    // Getters
    //======================

    async getStepIndicator(): Promise<Locator> {
        return this.stepIndicator;
    }

    async getPageHeading(): Promise<Locator> {
        return this.pageHeading;
    }

    async getPageDescription(): Promise<Locator> {
        return this.pageDescription;
    }

    async getStateDropdown(): Promise<Locator> {
        return this.stateDropdown;
    }

    async getFirstNameInput(): Promise<Locator> {
        return this.firstNameInput;
    }

    async getLastNameInput(): Promise<Locator> {
        return this.lastNameInput;
    }

    async getDateOfBirthInput(): Promise<Locator> {
        return this.dateOfBirthInput;
    }

    async getMaleOption(): Promise<Locator> {
        return this.maleOption;
    }

    async getFemaleOption(): Promise<Locator> {
        return this.femaleOption;
    }

    //======================
    // Actions
    //======================

    async selectState(state: string): Promise<void> {
        // waitFor + click both auto-retry under the hood; this locator now
        // resolves deterministically (single structural match), so no
        // artificial sleeps are needed.
        await this.stateDropdown.waitFor({ state: 'visible', timeout: 15000 });
        await this.stateDropdown.click();

        // The state options render in a listbox/popover after opening the
        // dropdown. Scope to the option role where possible; fall back to
        // exact text match for the specific state clicked.
        const option = this.page.getByRole('option', { name: state, exact: true });
        if (await option.count() > 0) {
            await option.first().click();
        } else {
            await this.page.getByText(state, { exact: true }).last().click();
        }

        // Confirm the selection actually landed before moving on, so a
        // silent no-op click doesn't surface as a failure several steps later.
        await this.page.getByText(state, { exact: true }).first().waitFor({ state: 'visible', timeout: 5000 });
    }

    async enterFirstName(firstName: string): Promise<void> {
        await this.firstNameInput.fill(firstName);
    }

    async enterLastName(lastName: string): Promise<void> {
        await this.lastNameInput.fill(lastName);
    }

    async enterDateOfBirth(dob: string): Promise<void> {
        await this.dateOfBirthInput.fill(dob);
    }

    async ClickMaleOption(): Promise<void> {
        await this.maleOption.click();
    }

    async clickNext(): Promise<void> {
        await this.nextButton.click();
    }

    async fillStep1Details(
        state: string,
        firstName: string,
        lastName: string,
        dob: string,
        gender: string
    ): Promise<void> {
        await this.selectState(state);
        await this.enterFirstName(firstName);
        await this.enterLastName(lastName);
        await this.enterDateOfBirth(dob);
        // await this.selectGender(gender);
        await this.clickNext();
    }
}