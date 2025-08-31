# playwright-lab
Sandbox for exploring Playwright end‑to‑end testing in Node/JS. A learning project for experiments and best practices.

To explore next in front-end: cross‑browser tests, network mocks, parallel execution, configure retries, Set up a GitHub Action workflow to automatically execute the test suite on pushes and pull requests.

## Usage Guide

Follow these steps to get your Playwright automation running from a clean slate:

### 1. Install Dependencies

In your project root, run:
```sh
npm install
```

### 2. Set Up Environment Variables

Create a `.env` file in the project root with your base URL and any other secrets:
```
BASE_URL=https://your-app-url.com
```

### 3. Add Your Contacts

Create a `contacts.js` file in the `data/` directory. Use the format below (see `contacts.js.example` for reference):
```js
export const contacts = [
  { name: "Alice Example", token: "123" },
  { name: "Bob Example", token: "456" }
];
```

### 4. Authenticate (First-Time Setup)

If your workflow requires authentication, run:
```sh
npm run setup-auth
```
This will launch a browser for you to log in and persist authentication.

### 5. Run the Automation Script

To send images with captions to all contacts, run:
```sh
npm run send
```

---

**Tips:**
- Ensure your `.env` and `contacts.js` files are present and correctly formatted before running the scripts.
- The `.auth` directory is used to store authentication state. Use `npm run clear-auth` to reset it if needed.
- Customize your caption (`utils/caption.js`) and image (`fixtures/image.jpg`) as needed.

## TODO: Enhancements/updates

* Refactor persistent auth into extend page fixture.


## Learning plan

1. **Familiarise myself with Playwright**. Including: Read the official documentation and complete the Getting Started tutorial. Installing Playwright and generating a project using `npm init playwright@latest`; Experimenting with the `codegen` tool to record a simple login flow and explore the generated code.

2. **Learn about locators, assertions, and fixtures**. Including: Deepen my understanding of `page`, `context`, and `browser` objects; Explore auto-waiting behaviour; Write tests against a simple demo site covering page navigation, form submission, and multiple assertion types.

3. **Explore advanced execution and configuration**. Including: Create a `.gitignore` file to exclude sensitive data, reports, and environment-specific `baseURL` values from version control; 

4. **Use Playwright debugging tools**. Including: Practise using the Playwright Inspector; Capture and review traces with Trace Viewer for failed tests; Replay traces to identify root causes of failures.

7. **Implement structured testing patterns**. Including: Apply the Page Object Model (POM) for maintainable and reusable test code; Use data-driven testing to supply scenarios from external files such as CSV (TODO) or JSON; Enforce strong test isolation to prevent state leakage between tests.

8. **Design my automation script for personalised messages**. Including: Define the recipient data format in a JSON file; Write a Playwright script to iterate over recipients and perform the sending flow; Use resilient selectors and robust error handling; Keep sensitive data files out of version control via `.gitignore`.

9. **Enhance the automation script**. Including: Add functionality to attach an image along with each message; Create a message template that uses JavaScript string interpolation to insert recipient-specific data such as name, a random salutation chosen from a predefined list.

10. **Implement logging and reporting**. Including: Log the success or failure of each send attempt to a file for later review and troubleshooting; Exclude logs from version control via `.gitignore`.

## Key concepts to master 

 * Locators and selectors – roles, CSS selectors, XPath and test IDs; strategies to maintain resilience.
 * Asynchronous JavaScript – using async/await and handling promises in test code.
 * Fixtures & test lifecycle – beforeAll, beforeEach, afterEach, afterAll hooks and test isolation.
 * Auto‑waiting and retries – difference between implicit and explicit waits; Playwright/Cypress auto‑waiting versus manual waits in Selenium.
 * Record & playback tools – Playwright codegen, Inspector and Trace viewer.