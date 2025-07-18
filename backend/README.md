# SBC App Kit – Backend Template

This template is a minimal Node.js backend (TypeScript) with SBC App Kit integration. It demonstrates best practices for sending gasless transactions, managing smart accounts, and interacting with the blockchain using @stablecoin.xyz/core.

## Quick Start

1. **Install dependencies:**

   ```bash
   pnpm install
   # or
   npm install
   ```

2. **Run the backend app:**

   ```bash
   pnpm start
   # or
   npm run start
   ```

3. **Try the example script:**
   - Edit `src/index.ts` to customize the transaction or logic.
   - Run the script and observe the output in your terminal.

## What This Template Demonstrates

- Creating and managing a smart account (Account Abstraction)
- Sending gasless transactions from a backend/server context
- Using a private key or wallet client for signing
- TypeScript-first, clean backend setup
- Error handling and logging best practices

## How to Customize

- **API Key:** Edit `src/index.ts` and replace the `apiKey` value in the config object with your own SBC API key.
- **Chain:** Change the `chain` property to use a different supported network if needed.
- **Private Key:** Set your private key in the config for backend signing (never commit real keys to git).
- **Logic:** Add your own transaction logic, API endpoints, or integrations as needed.

## Keeping Up to Date

- This template uses the latest published versions of SBC packages.
- For updates, check the [main SBC App Kit repo](https://github.com/stablecoinxyz/app-kit).

## Learn More

- [SBC App Kit Documentation](https://github.com/stablecoinxyz/app-kit#readme)
- [@stablecoin.xyz/core on npm](https://www.npmjs.com/package/@stablecoin.xyz/core)
