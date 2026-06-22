import { Locator, Page } from "@playwright/test";

export class LoginPage {
  private readonly page: Page;
  private readonly emailInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.locator('input[name="email"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.getByRole("button", { name: "Log in" });
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
}
