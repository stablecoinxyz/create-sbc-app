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
  -t, --template <type>   Template to use: react, react-dynamic, or react-para
  --api-key <apiKey>      Your SBC API key for immediate configuration
  --wallet <wallet>       Wallet integration (not yet implemented)
  -h, --help             display help for command

Examples:
  $ npx create-sbc-app my-app
  $ npx create-sbc-app my-app --template react
  $ npx create-sbc-app my-app --template react-dynamic
  $ npx create-sbc-app my-app --template react-para
  # Next.js template removed for now

Available Templates:
  - react           React + Vite template with SBC integration
  - react-dynamic   React + Vite with Dynamic wallet integration
  - react-para      React + Vite with Para wallet integration
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

## 🚀 React Template

**Best for:** Client-side applications, rapid prototyping, and production use

```bash
npx create-sbc-app my-app
```

**Features:**

- Fast development setup
- Hot module replacement
- Built-in testing framework
- Easy deployment to static hosts
- Modern React patterns and hooks

## 📝 Configuration

### Environment Variables

The template includes comprehensive environment configuration:

#### Required

```bash
# Your SBC API key (get from SBC dashboard)
VITE_SBC_API_KEY=your_api_key_here
# "base" or "baseSepolia"
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

# "base" or "baseSepolia"
VITE_CHAIN="baseSepolia" 
# Custom RPC URL (optional) - e.g. get one from Alchemey at https://dashboard.alchemy.com/apps
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
