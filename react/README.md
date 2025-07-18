# SBC App Kit – React Template

This template is a minimal, production-ready React app (Vite) with SBC App Kit integration. It demonstrates best practices for connecting wallets, managing smart accounts, and sending gasless transactions using @stablecoin.xyz/core and @stablecoin.xyz/react.

## Quick Start

1. **Install dependencies:**

   ```bash
   pnpm install
   # or
   npm install
   ```

2. **Start the development server:**

   ```bash
   pnpm dev
   # or
   npm run dev
   ```

3. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000) (or the port shown in your terminal).

## What This Template Demonstrates

- Connecting to MetaMask, Coinbase Wallet, or WalletConnect
- Creating and managing a smart account (Account Abstraction)
- Viewing EOA and Smart Account addresses and balances
- Sending gasless transactions
- Clean, modern UI and error handling
- TypeScript-first, Vite-powered React setup

## How to Customize

- **API Key:** Edit `src/App.tsx` and replace the `apiKey` value in the config object with your own SBC API key.
- **Chain:** Change the `chain` property to use a different supported network if needed.
- **UI:** Edit `src/App.tsx` and `src/App.css` to customize the interface.
- **Components:** Add or modify components as needed for your use case.

## Keeping Up to Date

- This template uses the latest published versions of SBC packages.
- For updates, check the [main SBC App Kit repo](https://github.com/stablecoinxyz/app-kit).

## Learn More

- [SBC App Kit Documentation](https://github.com/stablecoinxyz/app-kit#readme)
- [@stablecoin.xyz/core on npm](https://www.npmjs.com/package/@stablecoin.xyz/core)
- [@stablecoin.xyz/react on npm](https://www.npmjs.com/package/@stablecoin.xyz/react)
