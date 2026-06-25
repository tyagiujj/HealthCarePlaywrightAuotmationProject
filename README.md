# HealthCare  Playwright Automation Framework

End-to-end UI automation framework for the HealthCare web application using Playwright, TypeScript, Page Object Model, Faker-based test data, and Allure reporting.

This framework currently covers login and patient signup flows for Patient, Doctor, and Admin user journeys.

## Project Overview

This repository is organized as a maintainable Playwright automation framework. Test cases, page objects, configuration, and test data utilities are separated so new scenarios can be added without duplicating selectors or setup logic.

Current automation coverage includes:

- Patient login with configured credentials
- Doctor login with configured credentials
- Admin login with configured credentials
- Login negative validation scenarios
- Patient signup using dynamic random data
- Patient signup negative validation scenarios
- HTML and Allure test reporting
- Screenshot, video, and trace capture for failed or retried tests

## Tech Stack

- Playwright Test for browser automation and assertions
- TypeScript for test development
- Page Object Model for reusable page actions and locators
- Faker.js for dynamic test data generation
- Allure Playwright for advanced reporting
- Node.js and npm for dependency management

## Project Structure

```text
HealthCareMedFlowPlaywrightProject/
|-- config/
|   |-- TestConfig.ts                # Application URL and test credentials
|   `-- randomDataGenerator.ts       # Faker-based reusable random data utility
|-- data/                            # Reserved for external test data files
|-- pages/
|   |-- LoginPage.ts                 # Login page object and validation locators
|   `-- PatientSignupPage.ts         # Patient signup page object
|-- reports/                         # Reserved for custom reports
|-- tests/
|   |-- AdminLogin.spec.ts           # Admin login test
|   |-- DoctorLogin.spec.ts          # Doctor login test
|   |-- LoginNegativeTesting.spec.ts # Login negative tests
|   |-- LoginPatient.spec.ts         # Patient login test
|   |-- PatientSignup.spec.ts        # Patient signup test
|   `-- PatientSignupNegativeTesting.spec.ts
|-- utils/                           # Reserved for shared helper utilities
|-- playwright.config.ts             # Playwright framework configuration
|-- package.json                     # Project dependencies
|-- package-lock.json                # Locked dependency versions
`-- README.md                        # Project documentation
```

Generated runtime folders such as `node_modules`, `test-results`, `playwright-report`, `allure-results`, and `allure-report` are ignored by Git and should not be committed.

## Framework Design

### Page Object Model

The framework keeps UI locators and reusable page actions inside the `pages/` folder.

- `LoginPage.ts` manages login email, password, login button, and login validation message locators.
- `PatientSignupPage.ts` manages create account navigation, patient registration fields, terms checkbox, continue button, and signup validation message locators.

Tests use these page classes instead of keeping selectors directly inside every spec file. This makes selector maintenance easier when the application UI changes.

### Central Configuration

`config/TestConfig.ts` stores the application URL and current test credentials used by login tests.

Current credential categories:

- Patient user
- Doctor user
- Admin user


### Dynamic Test Data

`config/randomDataGenerator.ts` uses Faker.js to generate reusable random data for signup and negative scenarios.

Available data helpers include:

- First name, last name, and full name
- Email address
- Phone number
- Username
- Password
- Country, state, city, address, and PIN/ZIP
- UUID
- Random numeric and alphanumeric values

### Reporting and Debugging

The Playwright configuration enables these reporters:

- HTML reporter
- Allure reporter
- Dot reporter
- List reporter

Failure diagnostics are configured as:

- Screenshot: `only-on-failure`
- Video: `retain-on-failure`
- Trace: `on-first-retry`

### Browser Configuration

The current active Playwright project runs on Chromium using the Desktop Chrome device profile.

Current settings:

- Test directory: `./tests`
- Timeout: `30 seconds`
- Retries: `1`
- Workers: `1`
- Viewport: `1280 x 720`
- HTTPS errors: ignored
- Permission enabled: `geolocation`

Firefox and WebKit project configuration is present in `playwright.config.ts` but currently commented out.

## Prerequisites

Install the following before running the framework:

- Node.js
- npm
- Git

Verify installation:

```bash
node -v
npm -v
```

## Installation

Install project dependencies:

```bash
npm install
```

Install Playwright browsers if they are not already available:

```bash
npx playwright install
```

## Configuration

Before running tests, update `config/TestConfig.ts` with the correct application URL and valid test credentials.

Example fields used by the framework:

```ts
appUrl = "";
patientemail = "";
password = "";
doctoremail = "";
adminemail = "";
adminpassword = "";
```

Keep the class and field names as they are unless the test files are updated to match.

## Running Tests

Run all tests:

```bash
npx playwright test
```

Run a specific test file:

```bash
npx playwright test tests/LoginPatient.spec.ts
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Run tests with Playwright UI mode:

```bash
npx playwright test --ui
```

Run tests on the configured Chromium project:

```bash
npx playwright test --project=chromium
```

## Reports

Open the Playwright HTML report:

```bash
npx playwright show-report
```

Generate and open the Allure report:

```bash
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report
```

If Allure CLI is not installed globally, install it or run it through your preferred local setup before opening the report.

## Current Test Scenarios

| Test File | Purpose |
| --- | --- |
| `AdminLogin.spec.ts` | Verifies admin login using configured admin credentials |
| `DoctorLogin.spec.ts` | Verifies doctor login using configured doctor credentials |
| `LoginPatient.spec.ts` | Verifies patient login using configured patient credentials |
| `LoginNegativeTesting.spec.ts` | Verifies disabled login button states and invalid credential validation messages |
| `PatientSignup.spec.ts` | Verifies patient signup using random generated user data |
| `PatientSignupNegativeTesting.spec.ts` | Verifies signup validation scenarios such as missing data, missing names, missing email, and password mismatch |

## Best Practices Followed

- Test cases are separated from page object classes.
- Common test configuration is maintained in a dedicated config file.
- Random data generation is centralized and reusable.
- Runtime reports and test artifacts are excluded from Git.
- Browser diagnostics are enabled for easier failure analysis.
- Test execution is serialized with one worker for stability.

## Recommended Future Enhancements

The existing framework can be improved further as the project grows:

- Move sensitive credentials from `TestConfig.ts` to environment variables or a secure secrets manager.
- Add npm scripts in `package.json` for common commands such as `test`, `test:headed`, `report`, and `allure`.
- Add `.env` support for environment-specific URLs and credentials.
- Enable Firefox and WebKit projects when cross-browser execution is required.
- Add reusable fixtures for login sessions, authenticated contexts, and role-based setup.
- Add test data files under `data/` for JSON, CSV, or Excel-driven tests.
- Add test tagging such as `@smoke`, `@regression`, `@login`, and `@signup`.
- Add stronger post-login assertions such as dashboard URL, role-specific heading, or profile details.
- Add CI/CD execution through GitHub Actions, Azure DevOps, Jenkins, or another pipeline tool.
- Add linting and formatting using ESLint and Prettier.

## Important Notes

- Do not commit generated folders such as reports, traces, videos, screenshots, and `node_modules`.
- Keep selectors inside page object files when adding new scenarios.
- Keep reusable data generation inside `config/randomDataGenerator.ts` or a shared utility.
- Before pushing to a public repository, remove sensitive credentials from source code and clean Git history if required.

## Author

HealthCare  Playwright Automation Project
