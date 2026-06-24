# HealthCare MedFlow Playwright Automation Framework

End-to-end UI automation framework for the HealthCare web application using Playwright, TypeScript, Page Object Model, Faker-based test data, and Allure reporting.

This project currently validates core authentication and patient registration flows for the Health Care application at:

```

## Project Overview

This repository is designed as a maintainable Playwright automation framework for healthcare application testing. It separates test cases, page objects, configuration, and data utilities so the framework can be extended without duplicating selectors or test setup logic.

Current automation coverage includes:

- Patient login with valid credentials
- Doctor login with valid credentials
- Admin login with valid credentials
- Negative login validation scenarios
- Patient signup flow using dynamic random data
- HTML and Allure test reporting
- Screenshot, video, and trace capture for failed or retried tests

## Tech Stack

- **Playwright Test** for browser automation and assertions
- **TypeScript** for typed test development
- **Page Object Model** for reusable page interactions
- **Faker.js** for dynamic test data generation
- **Allure Playwright** for advanced test reporting
- **Node.js / npm** for dependency management

## Project Structure

```text
HealthCareMedFlowPlaywrightProject/
├── config/
│   ├── TestConfig.ts              # Application URL and test credentials
│   └── randomDataGenerator.ts     # Faker-based reusable random data utility
├── data/                          # Reserved for external test data files
├── pages/
│   ├── LoginPage.ts               # Login page object and login validations
│   └── PatientSignupPage.ts       # Patient signup page object
├── reports/                       # Reserved for custom reports
├── tests/
│   ├── AdminLogin.spec.ts         # Admin login test
│   ├── DoctorLogin.spec.ts        # Doctor login test
│   ├── LoginNegativeTesting.spec.ts
│   ├── LoginPatient.spec.ts       # Patient login test
│   └── PatientSignup.spec.ts      # Patient signup test
├── playwright.config.ts           # Playwright framework configuration
├── package.json                   # Project dependencies
├── package-lock.json              # Locked dependency versions
└── README.md                      # Project documentation
```

Generated folders such as `node_modules`, `test-results`, `playwright-report`, `allure-results`, and `allure-report` are ignored by Git and should not be committed.

## Current Framework Features

### Page Object Model

The framework uses page classes under the `pages/` directory to keep selectors and UI actions reusable.

- `LoginPage.ts` handles email input, password input, login button actions, and login validation messages.
- `PatientSignupPage.ts` handles create account navigation, patient registration fields, terms checkbox, and continue action.

### Central Test Configuration

`config/TestConfig.ts` stores the application URL and currently used test credentials for patient, doctor, and admin login tests.

Current credential categories:

- Patient user
- Doctor user
- Admin user

### Dynamic Test Data

`config/randomDataGenerator.ts` uses Faker.js to generate reusable random values, including:

- First name
- Last name
- Full name
- Email
- Phone number
- Username
- Password
- Country, state, city, address, and PIN/ZIP
- UUID, numeric, and alphanumeric values

This is currently used in signup and negative login scenarios.

### Reporting

The Playwright configuration currently enables multiple reporters:

- HTML reporter
- Allure reporter
- Dot reporter
- List reporter

Failure diagnostics are also configured:

- Screenshot on failure
- Video retained on failure
- Trace collected on first retry

### Browser Configuration

The current Playwright project runs on Chromium using the Desktop Chrome device profile.

The framework is configured with:

- Test timeout: `30 seconds`
- Retries: `1`
- Workers: `1`
- Viewport: `1280 x 720`
- HTTPS errors ignored
- Geolocation permission enabled

Firefox and WebKit project configuration is present but currently commented out.

## Prerequisites

Install the following before running the framework:

- Node.js
- npm
- Git

Recommended check:

```bash
node -v
npm -v
```

## Installation

Clone the repository and install dependencies:

```bash
npm install
```

Install Playwright browsers if they are not already installed:

```bash
npx playwright install
```

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

Run tests using Playwright UI mode:

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

If Allure CLI is not installed globally, install or run it through your preferred local setup before opening the report.

## Current Test Scenarios

| Test File | Purpose |
| --- | --- |
| `AdminLogin.spec.ts` | Verifies admin login using configured admin credentials |
| `DoctorLogin.spec.ts` | Verifies doctor login using configured doctor credentials |
| `LoginPatient.spec.ts` | Verifies patient login using configured patient credentials |
| `LoginNegativeTesting.spec.ts` | Verifies disabled login button and invalid credential validation messages |
| `PatientSignup.spec.ts` | Verifies patient signup flow using random user data |

## Recommended Future Enhancements

The current framework is a solid starting point. The following improvements can be added as the project grows:

- Move sensitive credentials from `TestConfig.ts` into environment variables or a secure secrets manager.
- Add npm scripts in `package.json` for common commands such as `test`, `test:headed`, `report`, and `allure`.
- Add `.env` support for environment-specific application URLs and credentials.
- Expand browser coverage by enabling Firefox and WebKit in `playwright.config.ts`.
- Add API test coverage if the MedFlow backend APIs are available.
- Add test data files under `data/` for CSV, JSON, or Excel-driven tests.
- Add reusable fixtures for login sessions, authenticated contexts, and role-based setup.
- Add CI/CD execution through GitHub Actions, Azure DevOps, Jenkins, or another pipeline tool.
- Add tagging strategy such as `@smoke`, `@regression`, `@login`, and `@signup`.
- Add stronger assertions after successful login, such as dashboard URL, role-specific heading, or profile information.
- Add visual validation or screenshot comparison for high-risk UI screens.
- Add code formatting and linting using Prettier and ESLint.
- Add contribution guidelines and pull request quality checks.

## Best Practices Followed

- Tests are separated from page object classes.
- Common configuration is maintained in a dedicated config file.
- Random data generation is centralized and reusable.
- Reports and runtime artifacts are excluded from Git.
- Browser diagnostics are enabled for easier debugging.
- Test execution is currently serialized with one worker for stability.

## Notes

This framework currently contains real environment URLs and test credentials in source code. Before pushing to a public repository, move credentials to environment variables and remove any sensitive data from Git history if required.

## Author

HealthCare Playwright Automation Project
