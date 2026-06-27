# HealthCare  Playwright Automation Framework

End-to-end UI automation framework for the HealthCare web application using Playwright, TypeScript, Page Object Model, Faker-based dynamic test data, and Allure reporting.

The framework covers login, patient signup, patient dashboard, and physician dashboard flows for Patient, Doctor/Physician, and Admin user journeys.

## Project Overview

This repository is structured as a maintainable Playwright automation framework. Test cases, page objects, configuration, and reusable data utilities are separated so new scenarios can be added without duplicating locators or setup logic.

Current automation coverage includes:

- Patient login with configured credentials
- Doctor/Physician login with configured credentials
- Admin login with configured credentials
- Login negative validation scenarios
- Patient signup using dynamic random data
- Patient signup negative validation scenarios
- Patient dashboard UI validation
- Physician dashboard UI and count validation
- HTML, Allure, dot, and list reporting
- Screenshot, video, and trace capture for failed or retried tests

## Tech Stack

- Playwright Test for browser automation and assertions
- TypeScript for test development
- Page Object Model for reusable page actions and locators
- Faker.js for dynamic test data generation
- Allure Playwright for advanced reporting
- CSV and Excel package dependencies available for future data-driven testing
- Node.js and npm for dependency management

## Project Structure

```text
HealthCareMedFlowPlaywrightProject/
|-- config/
|   |-- TestConfig.ts                    # Application URL and test credentials
|   `-- randomDataGenerator.ts           # Faker-based reusable random data utility
|-- data/                                # Reserved for external test data files
|-- pages/
|   |-- LoginPage.ts                     # Login page object and validation locators
|   |-- PatientDashboard.ts              # Patient dashboard page object
|   |-- PatientSignupPage.ts             # Patient signup page object
|   `-- PhysicianDashboardPage.ts        # Physician dashboard page object
|-- reports/                             # Reserved for custom reports
|-- tests/
|   |-- AdminLogin.spec.ts               # Admin login test
|   |-- DoctorLogin.spec.ts              # Doctor login test
|   |-- LoginNegativeTesting.spec.ts     # Login negative tests
|   |-- LoginPatient.spec.ts             # Patient login test
|   |-- PatientDashBoard.spec.ts         # Patient dashboard UI validation
|   |-- PatientSignup.spec.ts            # Patient signup test
|   |-- PatientSignupNegativeTesting.spec.ts
|   `-- PhysicianDashBoard.spec.ts       # Physician dashboard UI and count validation
|-- utils/                               # Reserved for shared helper utilities
|-- playwright.config.ts                 # Playwright framework configuration
|-- package.json                         # Project dependencies
|-- package-lock.json                    # Locked dependency versions
`-- README.md                            # Project documentation
```

Generated runtime folders such as `node_modules`, `test-results`, `playwright-report`, `allure-results`, and `allure-report` should not be committed.

## Framework Design

### Page Object Model

The framework keeps UI locators and reusable page actions inside the `pages/` folder.

- `LoginPage.ts` manages login email, password, login button, and login validation message locators.
- `PatientSignupPage.ts` manages create account navigation, patient registration fields, terms checkbox, continue button, and signup validation message locators.
- `PatientDashboard.ts` manages patient dashboard headings, summary cards, consultation table columns, and quick action buttons.
- `PhysicianDashboardPage.ts` manages physician dashboard headings, summary cards, numeric dashboard counts, waiting patients, and upcoming appointments sections.

Tests use these page classes instead of keeping selectors directly inside every spec file. This makes selector maintenance easier when the application UI changes.

### Central Configuration

`config/TestConfig.ts` stores the application URL and current test credentials used by login and dashboard tests.

Current credential categories:

- Patient user
- Doctor/Physician user
- Admin user

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

### Dynamic Test Data

`config/randomDataGenerator.ts` uses Faker.js to generate reusable random data for signup and negative scenarios.

Available data helpers include:

- First name, last name, and full name
- Email address
- Phone number
- Username
- Password values with generated complexity support
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

The current Playwright configuration defines projects for:

- Chromium using Desktop Chrome
- Firefox using Desktop Firefox
- WebKit using Desktop Safari

Current settings:

- Test directory: `./tests`
- Timeout: `30 seconds`
- Retries: `1`
- Workers: `1`
- Fully parallel execution: disabled
- Viewport: `1280 x 720`
- HTTPS errors: ignored
- Permission enabled: `geolocation`

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

The current framework reads credentials directly from `TestConfig.ts`. For team or CI usage, move sensitive credentials to environment variables or a secure secrets manager.

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

Run tests on a specific browser project:

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
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
| `DoctorLogin.spec.ts` | Verifies doctor/physician login using configured doctor credentials |
| `LoginPatient.spec.ts` | Verifies patient login using configured patient credentials |
| `LoginNegativeTesting.spec.ts` | Verifies disabled login button states and invalid credential validation messages |
| `PatientSignup.spec.ts` | Verifies patient signup using random generated user data |
| `PatientSignupNegativeTesting.spec.ts` | Verifies signup validation scenarios such as missing data, missing names, missing email, and password mismatch |
| `PatientDashBoard.spec.ts` | Verifies patient dashboard labels, cards, consultation table columns, and quick action buttons |
| `PhysicianDashBoard.spec.ts` | Verifies physician dashboard labels, cards, numeric counts, waiting patients, and upcoming appointments sections |

## Best Practices Followed

- Test cases are separated from page object classes.
- Common test configuration is maintained in a dedicated config file.
- Random data generation is centralized and reusable.
- Runtime reports and test artifacts are kept separate from source files.
- Browser diagnostics are enabled for easier failure analysis.
- Test execution uses one worker for stability.
- Dashboard validations assert both visibility and expected numeric count formats where applicable.

## Recommended Future Enhancements

- Move sensitive credentials from `TestConfig.ts` to environment variables or a secure secrets manager.
- Add npm scripts in `package.json` for common commands such as `test`, `test:headed`, `report`, and `allure`.
- Add `.env` support for environment-specific URLs and credentials.
- Add reusable fixtures for login sessions, authenticated contexts, and role-based setup.
- Replace fixed waits with state-based waits where possible.
- Add data-driven tests using JSON, CSV, or Excel files under `data/`.
- Add test tagging such as `@smoke`, `@regression`, `@login`, `@signup`, and `@dashboard`.
- Add stronger post-login assertions such as dashboard URL, role-specific heading, or profile details.
- Add CI/CD execution through GitHub Actions, Azure DevOps, Jenkins, or another pipeline tool.
- Add linting and formatting using ESLint and Prettier.

## Important Notes

- Do not commit generated folders such as reports, traces, videos, screenshots, and `node_modules`.
- Keep selectors inside page object files when adding new scenarios.
- Keep reusable data generation inside `config/randomDataGenerator.ts` or a shared utility.
- Keep credentials private before pushing to any shared or public repository.
- Update this README whenever new page objects, test files, browser projects, or reporting tools are added.

## Author

HealthCare Playwright Automation Project
