# Ushaa Global — Playwright + TypeScript

Automation framework for https://ushaaglobal.com using Playwright + TypeScript, POM, desktop & mobile tests, screenshots/videos, and GitHub Actions.

## Prerequisites
- Node.js 18+ (Node 20 recommended)
- npm 9+

## Setup
```bash
npm ci
npx playwright install --with-deps
```

## Run Locally
```bash
npm test          # headless
npm run test:headed
npm run show-report
```

## CI
Push to main/master to run GitHub Actions workflow.

## Structure
- src/pages — Page Objects
- src/tests — Spec files
- src/utils — Helpers
