# create-sbc-app

The easiest way to get started with SBC Account Abstraction. Create feature-complete applications with gasless transactions in seconds.

## Quick Start

```bash
# Create a new SBC app
npx create-sbc-app my-app

# Or specify a template directly
npx create-sbc-app my-app --template react

# Navigate to your app
cd my-app

# Install dependencies
pnpm install # or npm install

# Start development server
pnpm dev # or npm run dev
```

## CLI Options

```bash
Usage: npx create-sbc-app [project-directory] [options]

Create a new SBC App Kit project with an opinionated template

Arguments:
  project-directory        Directory to create the new app in

Options:
  -V, --version           output the version number
  -t, --template <type>   Template to use: react, react-dynamic, react-para, or react-turnkey
  -c, --chain <chain>     Chain to use: baseSepolia, base, or radiusTestnet
  --api-key <apiKey>      Your SBC API key for immediate configuration
  --wallet <wallet>       Wallet integration (not yet implemented)
  -h, --help             display help for command

Examples:
  $ npx create-sbc-app my-app
  $ npx create-sbc-app my-app --template react --chain radiusTestnet
  $ npx create-sbc-app my-app --template react-dynamic --chain base
  $ npx create-sbc-app my-app --template react-para --api-key your-key
  $ npx create-sbc-app my-app --template react-turnkey --chain base

Available Templates:
  - react           React + Vite template with SBC integration
  - react-dynamic   React + Vite with Dynamic wallet integration
  - react-para      React + Vite with Para wallet integration
  - react-turnkey   React + Vite + Express backend with Turnkey embedded wallets

Available Chains:
  - baseSepolia     Base Sepolia testnet (default)
  - base            Base mainnet
  - radiusTestnet   Radius testnet (react template only - not supported by Dynamic, Para, or Turnkey)
```

## ✨ Features

The React template includes comprehensive, production-ready examples:

### 🔋 Core Functionality

- **Smart Account Management** - Automatic account creation and management
- **Gasless Transactions** - Send ETH and interact with contracts without gas fees
- **Gas Estimation** - Preview transaction costs before sending
- **Batch Transactions** - Send multiple operations in a single transaction
- **Real-time Balance Tracking** - Monitor account balances and transaction status
- **Error Handling** - Comprehensive error messages and recovery suggestions

### 🎨 User Experience

- **Modern UI Design** - Beautiful, responsive interfaces
- **Form Validation** - Real-time address and input validation
- **Loading States** - Clear feedback during operations
- **Success/Error Feedback** - Visual confirmation of transaction status
- **Block Explorer Integration** - Direct links to view transactions
- **Copy-to-Clipboard** - Easy address and hash copying

### 🛠️ Developer Experience

- **TypeScript Support** - Full type safety
- **Environment Configuration** - Secure API key and settings management
- **Debug Logging** - Comprehensive development logging
- **Hot Reload** - Fast development iteration
- **Production Ready** - Optimized builds and deployment preparation

## 🚀 Templates

### React Template (Default)

**Best for:** Client-side applications, rapid prototyping, and production use

```bash
npx create-sbc-app my-app
```

**Supported Chains:** Base Sepolia, Base, Radius Testnet

**Features:**
- Fast development setup
- Hot module replacement
- Direct wallet connection (MetaMask, Coinbase, WalletConnect)
- Built-in testing framework
- Easy deployment to static hosts
- Modern React patterns and hooks

### React + Dynamic Template

**Best for:** Applications requiring embedded wallets with social logins

```bash
npx create-sbc-app my-app --template react-dynamic
```

**Supported Chains:** Base Sepolia, Base (Radius Testnet not supported)

**Features:**
- Dynamic SDK integration for embedded wallets
- Social login support (Google, Twitter, Discord, etc.)
- Email/SMS wallet creation
- All standard SBC features

**Additional Requirements:** Dynamic Environment ID from [Dynamic Dashboard](https://app.dynamic.xyz/)

### React + Para Template

**Best for:** DeFi applications leveraging EIP-2612 permits

```bash
npx create-sbc-app my-app --template react-para
```

**Supported Chains:** Base Sepolia, Base (Radius Testnet not supported)

**Features:**
- Para wallet integration
- EIP-2612 permit signatures
- Gasless token approvals
- All standard SBC features

**Additional Requirements:** Para API Key from [Para](https://para.xyz/)

### React + Turnkey Template

**Best for:** Production applications requiring embedded wallets with biometric authentication and backend infrastructure

```bash
npx create-sbc-app my-app --template react-turnkey
```

**Supported Chains:** Base Sepolia, Base (Radius Testnet not supported)

**Features:**
- Turnkey embedded wallet integration with passkey authentication
- Express backend server for secure Turnkey API operations
- Two authentication methods: biometric passkeys (Face ID/Touch ID) or wallet connection (MetaMask/Coinbase)
- Account history and multi-account management
- Full-stack development with `dev:fullstack` script
- ERC-4337 smart accounts with gasless transactions
- All standard SBC features

**Additional Requirements:**
- Turnkey Organization ID and API Keys from [Turnkey Dashboard](https://app.turnkey.com)
- Backend deployment for production use (Railway, Render, Vercel, etc.)

**Architecture:**
- Frontend: React + Vite (port 5173)
- Backend: Express server (port 3001)
- Runs both services concurrently with `npm run dev:fullstack`

## 📝 Configuration

### Environment Variables

The template includes comprehensive environment configuration:

#### Required

```bash
# Your SBC API key (get from SBC dashboard)
VITE_SBC_API_KEY=your_api_key_here

# Supported chains: "baseSepolia" | "base" | "radiusTestnet"
VITE_CHAIN="baseSepolia"
```

## 📱 UI Components

The template includes:

- Account information display with copy functionality
- Transaction forms with validation
- Gas estimation interfaces
- Success/error feedback with block explorer links
- Responsive design with dark mode support

## 🚀 Development Workflow

### 1. Create Your App

```bash
npx create-sbc-app my-sbc-app
cd my-sbc-app
```

### 2. Set Up Environment

```bash
# Copy environment template
cp .env.template .env

# then ensure your .env has the environment variables set up

# Supported chains: "baseSepolia" | "base" | "radiusTestnet"
VITE_CHAIN="baseSepolia"
# Custom RPC URL (optional) - e.g. get one from Alchemy at https://dashboard.alchemy.com/apps
VITE_RPC_URL=
# Get your SBC API Key at https://dashboard.stablecoin.xyz
VITE_SBC_API_KEY=
```

### 3. Start Development

```bash
npm install
npm run dev
```

### 4. Test Features

- Connect and view your smart account
- Try sending test transactions
- Experiment with gas estimation
- Test batch transactions

### 5. Customize and Build

- Modify the UI to match your needs
- Add your own smart contract interactions
- Build for production

## 📚 Documentation

- **[SBC Documentation](https://docs.stablecoin.xyz)** - Official docs
- **[GitHub Repository](https://github.com/stablecoinxyz/app-kit)** - AppKit API Reference. Source code and examples

## 📄 License

MIT - Built with ❤️ by the SBC team
