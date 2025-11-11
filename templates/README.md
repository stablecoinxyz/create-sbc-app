# create-sbc-app Templates

This directory contains ready-to-use templates for quickly starting new projects with the SBC App Kit. Each template is a minimal, fully functional app that demonstrates best practices for integrating @stablecoin.xyz/core and @stablecoin.xyz/react.

## Available Templates

### react/ – React + Vite + SBC App Kit (Default)

**Best for:** Applications with custom wallet integrations, rapid prototyping, production use

**Supported Chains:** Base Sepolia, Base, Radius Testnet

**Features:**
- Direct wallet connection (MetaMask, Coinbase Wallet, WalletConnect)
- Complete SBC App Kit integration for gasless transactions
- Full control over wallet connection UI/UX
- TypeScript support
- Vite for fast development

**Use when:** You want maximum flexibility and plan to implement your own wallet connection logic or use standard Web3 wallets.

### react-dynamic/ – React + Dynamic + SBC App Kit

**Best for:** Applications requiring embedded wallets with social logins

**Supported Chains:** Base Sepolia, Base (Radius Testnet not supported by Dynamic)

**Features:**
- Dynamic SDK integration for embedded wallets
- Social authentication (Google, Twitter, Discord, GitHub, Apple, etc.)
- Email and SMS wallet creation
- Seamless onboarding for non-crypto users
- Multi-chain support (Base and Base Sepolia)
- All SBC App Kit features

**Use when:** You want to provide the easiest possible onboarding experience with social logins and don't want users to install a wallet extension.

**Additional Requirements:**
- Dynamic Environment ID (get from https://app.dynamic.xyz/)

### react-para/ – React + Para + SBC App Kit

**Best for:** DeFi applications leveraging EIP-2612 permits and advanced gasless patterns

**Supported Chains:** Base Sepolia, Base (Radius Testnet not supported by Para)

**Features:**
- Para wallet integration
- EIP-2612 permit signature support
- Gasless token approvals
- Single-step token operations (no separate approval transaction)
- Advanced meta-transaction patterns
- All SBC App Kit features

**Use when:** You're building DeFi applications (DEX, lending, staking) and want to optimize the user experience by eliminating approval transactions.

**Additional Requirements:**
- Para API Key (get from https://para.xyz/)

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
