# playwright-lab
Sandbox for exploring Playwright end‑to‑end testing in Node/JS. Demos include cross‑browser tests, auto‑wait, network mocks, parallel execution, and a proof‑of‑concept automation script. A learning project for experiments and best practices.

## Learning plan

1. **Familiarise myself with Playwright**. Including: Read the official documentation and complete the Getting Started tutorial. Installing Playwright and generating a project using `npm init playwright@latest`; Experimenting with the `codegen` tool to record a simple login flow and explore the generated code.

2. **Learn about locators, assertions, and fixtures**. Including: Deepen my understanding of `page`, `context`, and `browser` objects; Explore auto-waiting behaviour; Write tests against a simple demo site (such as TodoMVC) covering page navigation, form submission, and multiple assertion types.

3. **Explore advanced execution and configuration**. Including: Run tests in parallel, configure retries, and implement robust test isolation; Configure Playwright to run tests across Chromium, Firefox, and WebKit; Create a `.gitignore` file to exclude sensitive data, reports, and environment-specific `baseURL` values from version control; Set up a GitHub Action workflow to automatically execute the test suite on pushes and pull requests.

4. **Use Playwright debugging tools**. Including: TODO: Practise using the Playwright Inspector; Capture and review traces with Trace Viewer for failed tests; Replay traces to identify root causes of failures.

5. **Study network interception and mobile emulation**. Including: Use `route.fulfill` to mock API responses; Explore mobile device emulation with device descriptors; Implement tests for file uploads and downloads.

6. **Compare with other frameworks**. Including: TODO: Build small proof-of-concepts in Cypress and Selenium; Install each tool, create a basic login test, and compare syntax, setup, and execution speed; Document pros and cons for future reference.

7. **Implement structured testing patterns**. Including: TODO: Apply the Page Object Model (POM) for maintainable and reusable test code; Use data-driven testing to supply scenarios from external files such as CSV (TODO) or JSON; Enforce strong test isolation to prevent state leakage between tests.

8. **Design my automation script for personalised messages**. Including: Define the recipient data format in a JSON file; Write a Playwright script to iterate over recipients and perform the sending flow; Use resilient selectors and robust error handling; Keep sensitive data files out of version control via `.gitignore`.

9. **Enhance the automation script**. Including: Add functionality to attach an image along with each message; Create a message template that uses JavaScript string interpolation to insert recipient-specific data such as name, a random salutation chosen from a predefined list, and a sign-off; Ensure each message is unique for better engagement.

10. **Implement logging and reporting**. Including: Log the success or failure of each send attempt to a file for later review and troubleshooting; Exclude logs from version control via `.gitignore`.

11. Repo clean-up: TODO: Compose usage README.

## Key concepts to master 
 * Locators and selectors – roles, CSS selectors, XPath and test IDs; strategies to maintain resilience.
 * Asynchronous JavaScript – using async/await and handling promises in test code.
 * Fixtures & test lifecycle – beforeAll, beforeEach, afterEach, afterAll hooks and test isolation.
 * Parallelisation and sharding – how Playwright runs tests concurrently and how Cypress splits spec files.
 * Auto‑waiting and retries – difference between implicit and explicit waits; Playwright/Cypress auto‑waiting versus manual waits in Selenium.
 * Multiple tabs and browser contexts – Playwright’s support for multi‑tab flows, Cypress’s current limitations.
 * Network mocking & API testing – intercept requests to control responses and simulate network conditions.
 * Record & playback tools – Playwright codegen, Cypress Studio and Selenium IDE.
 * CI/CD & reporting – integrating tests into pipelines and generating reports.

 # Ideas parking lot
 * TODO/Idea: Write a tool to save names from a specific "List" (in Cypress or Puppeteer). **remove middle names
 * Use AI to identify a usable first name to include in the messages sent (as opposed to using the saved name in the contact list).
 * Test single names.

## Bonus points:
* Auth: refactor to custom fixtures that use a persistent profile
* get auth.js to reset auth everytime it runs

## Done: 
* Send emojis and line spacings.
* Fix/remove the github action/pipeline.
* Use first name of contact in message sent.