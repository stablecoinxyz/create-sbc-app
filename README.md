# create-sbc-app

This directory contains ready-to-use templates for quickly starting new projects with the SBC App Kit. Each template is a minimal, fully functional app that demonstrates best practices for integrating @stablecoin.xyz/core and @stablecoin.xyz/react.

## Available Templates

- **react/** – Minimal React app with SBC integration (Vite)
- **nextjs/** – Minimal Next.js app with SBC integration (App Router)
- **backend/** – Minimal Node.js backend example (TypeScript)

## How to Use a Template

1. **Copy the template directory** you want to use:

   ```bash
   cp -r create-sbc-app/react my-new-sbc-app
   # or for Next.js:
   cp -r create-sbc-app/nextjs my-new-sbc-next-app
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
   - Update the API key and config in `src/App.tsx` or `app/page.tsx`.
   - Follow the template’s README for more details.

## Keeping Templates Up to Date

- All templates use the latest published versions of SBC packages.
- Code and config are kept in sync with the main repo’s best practices.
- If you find an issue, please open a PR or issue in the main repo.

---

Each template has its own README with specific instructions and details.
