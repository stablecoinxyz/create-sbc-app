# create-sbc-app

This directory contains ready-to-use templates for quickly starting new projects with the SBC App Kit. Each template is a minimal, fully functional app that demonstrates best practices for integrating @stablecoin.xyz/core and @stablecoin.xyz/react.

## Available Templates

- **react/** – Minimal React app with SBC integration (Vite)
- **react-dynamic/** – React + Dynamic wallet + SBC App Kit (Vite)
- **react-para/** – React + Para wallet + SBC App Kit (Vite)

## How to Use a Template

1. **Copy the template directory** you want to use:

   ```bash
   # Plain React template
   cp -r create-sbc-app/react my-new-sbc-app

   # Dynamic wallet template
   cp -r create-sbc-app/react-dynamic my-dynamic-app

   # Para wallet template
   cp -r create-sbc-app/react-para my-para-app
   ```

2. **Install dependencies:**

   ```bash
   cd my-new-sbc-app
   pnpm install
   # or
   npm install
   ```

3. **Run the app:**

   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Customize as needed:**
   - Update the API key and config in `src/App.tsx`.
   - Follow each template’s README for specific details and environment variables.

## Keeping Templates Up to Date

- All templates use the latest published versions of SBC packages.
- Code and config are kept in sync with the main repo’s best practices.
- If you find an issue, please open a PR or issue in the main repo.

---

Each template has its own README with specific instructions and details.
