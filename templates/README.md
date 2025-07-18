# create-sbc-app

The easiest way to get started with SBC Account Abstraction. Create feature-complete applications with gasless transactions in seconds.

## Quick Start

```bash
# Create a new SBC app
npx create-sbc-app my-sbc-app

# Navigate to your app
cd my-sbc-app

# Install dependencies
npm install

# Set up your environment variables
# Copy .env.template to .env and add your API key

# Start development server
npm run dev
```

## ✨ Features

All templates include comprehensive, production-ready examples:

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
- **TypeScript Support** - Full type safety across all templates
- **Environment Configuration** - Secure API key and settings management
- **Debug Logging** - Comprehensive development logging
- **Hot Reload** - Fast development iteration
- **Production Ready** - Optimized builds and deployment preparation

## 🚀 Templates

### Next.js (Recommended)
**Best for:** Production applications, SEO requirements, full-stack needs

```bash
npx create-sbc-app my-app --template nextjs
```

**Features:**
- Server-Side Rendering (SSR)
- API Routes for backend functionality
- Built-in optimization and performance
- Automatic code splitting
- Image optimization

### React with Create React App
**Best for:** Client-side applications, rapid prototyping

```bash
npx create-sbc-app my-app --template react
```

**Features:**
- Fast development setup
- Hot module replacement
- Built-in testing framework
- Easy deployment to static hosts
- No server configuration needed

### Vanilla TypeScript with Vite
**Best for:** Learning, lightweight applications, maximum control

```bash
npx create-sbc-app my-app --template vanilla
```

**Features:**
- Minimal dependencies
- Pure TypeScript implementation
- Vite's lightning-fast builds
- Direct DOM manipulation
- Full control over architecture

## �� Configuration

### Environment Variables

Each template includes comprehensive environment configuration:

#### Required
```bash
# Your SBC API key (get from SBC dashboard)
VITE_SBC_API_KEY=your_api_key_here          # Vanilla
REACT_APP_SBC_API_KEY=your_api_key_here     # React
NEXT_PUBLIC_SBC_API_KEY=your_api_key_here   # Next.js
```

#### Optional
```bash
# Use your own private key (otherwise auto-generated)
VITE_PRIVATE_KEY=0x...                      # Vanilla
REACT_APP_PRIVATE_KEY=0x...                 # React  
NEXT_PUBLIC_PRIVATE_KEY=0x...               # Next.js

# Enable debug logging (recommended for development)
VITE_SBC_DEBUG=true                         # Vanilla
REACT_APP_SBC_DEBUG=true                    # React
NEXT_PUBLIC_SBC_DEBUG=true                  # Next.js

# Demo target address for testing
VITE_DEMO_TARGET_ADDRESS=0x742d...          # Vanilla
REACT_APP_DEMO_TARGET_ADDRESS=0x742d...     # React
NEXT_PUBLIC_DEMO_TARGET_ADDRESS=0x742d...   # Next.js
```

## 💡 Examples Included

### Basic ETH Transfer
```typescript
await sendUserOperation({
  to: '0x742d35Cc6635C0532925a3b8c17f21c5F8E63231',
  data: '0x',
  value: parseEther('0.001').toString()
});
```

### Batch Transactions
```typescript
await sendUserOperation({
  calls: [
    {
      to: '0xAddress1',
      data: '0x',
      value: parseEther('0.001')
    },
    {
      to: '0xAddress2', 
      data: '0x',
      value: parseEther('0.001')
    }
  ]
});
```

### Gas Estimation
```typescript
const estimate = await estimateUserOperation({
  to: targetAddress,
  data: '0x',
  value: parseEther('0.001').toString()
});

console.log('Total gas:', estimate.totalGasUsed);
console.log('Estimated cost:', formatEther(BigInt(estimate.totalGasCost)));
```

## 📱 UI Components

All templates include:
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

# Add your API key
echo "REACT_APP_SBC_API_KEY=your_actual_api_key" >> .env
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

- **[SBC API Documentation](https://docs.stablecoin.xyz)** - Complete API reference
- **[GitHub Repository](https://github.com/stablecoinxyz/app-kit)** - Source code and examples

## 🆘 Support

### Common Issues

**"No API key found"**
- Ensure you've copied `.env.template` to `.env`
- Add your API key with the correct prefix for your template
- Restart your development server

**"Transaction failed"**
- Check your network connection
- Verify the target address is valid
- Check the browser console for detailed error messages

### Getting Help

1. **Check the browser console** for detailed error messages
2. **Verify your environment variables** are correctly set
3. **Try with Base Sepolia testnet** first before mainnet

## 📄 License

MIT - Built with ❤️ by the SBC team
