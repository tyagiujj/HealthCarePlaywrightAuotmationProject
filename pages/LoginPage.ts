import { Locator, Page } from "@playwright/test";

export class LoginPage {
  private readonly page: Page;
  private readonly emailInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;
  private readonly passwordRequired : Locator;
  private readonly emailRequire : Locator;
  private readonly invalidEmailAndPassword : Locator;
  private readonly nosignupemailfound : Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.locator('input[name="email"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.getByRole("button", { name: "Log in" });
    this.passwordRequired = page.getByText('Password is required', { exact: true });
    this.emailRequire = page.getByText('Email is required', { exact: true });
    this.invalidEmailAndPassword = page.getByText('Invalid email or password', { exact: true });
    this.nosignupemailfound=page.getByText('No signup request found for this email', { exact: true });
    
  }

  async EnterEmailAddress(email: string): Promise<void> {
    await this.emailInput.fill(email);
  }

  async EnterPassword(password: string): Promise<void> {
    await this.passwordInput.fill(password);
  }

  async ClickLoginButton(): Promise<void> {
    await this.loginButton.click();
  }

  async GetPasswordRequiredMessage(): Promise<Locator> {
    return this.passwordRequired;
  }

  async GetEmailRequiredMessage(): Promise<Locator> {
    return this.emailRequire;
  }

  async GetInvalidEmailAndPasswordMessage(): Promise<Locator> {
    return this.invalidEmailAndPassword;
  }

  async GetNosignuprequestfoundforthisemailMessage(): Promise<Locator>{
    return this.nosignupemailfound;
  }

  async GetLoginButton(): Promise<Locator> {
    return this.loginButton;
  }
}