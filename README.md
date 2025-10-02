# SupaWeb3 UI

> ⚠️ **ALPHA VERSION** - This library is currently in active development and should be considered experimental. APIs may change, components may be incomplete, and breaking changes are expected. Use at your own risk in production environments.

A comprehensive Vue 3 Web3 UI component library built with TypeScript and Tailwind CSS. Designed specifically for the Vue/Nuxt ecosystem with modern Web3 UX patterns.

## 🚀 Features

- **Vue 3 + TypeScript**: Built with modern Vue 3 Composition API and full TypeScript support
- **Tailwind CSS**: Utility-first styling with dark mode support
- **Web3 Components**: Comprehensive set of Web3 UX components
- **Storybook Documentation**: Interactive component playground and documentation
- **Monorepo Structure**: Organized packages for different use cases
- **Tree Shakeable**: Import only what you need for optimal bundle size

## 📦 Packages

| Package | Description |
|---------|-------------|
| `@thenightproject/supaweb3-ui` | Core Vue 3 Web3 UI components |
| `@thenightproject/supaweb3-nuxt` | Nuxt 3 module for easy integration |
| `@thenightproject/supaweb3-config` | Tailwind CSS configuration preset |

## 🎨 Component Categories

### Authentication & Identity
- **WalletConnectButton** - Primary wallet connection button
- **WalletConnectModal** - Multi-wallet connection modal interface
- **SupaWeb3Address** - Smart wallet address display with truncation
- **SupaWeb3Avatar** - User avatar component for Web3 profiles

### Portfolio & Analytics
- **PortfolioOverview** - Complete portfolio dashboard with charts and metrics
- **PnLTracker** - Profit/loss tracking with tax reporting capabilities
- **GasTracker** - Real-time gas price monitoring and transaction cost calculator

### Tokens & Trading
- **TokenBalance** - Token balance display with multiple layouts and USD values
- **SendToken** - Token transfer interface with address validation
- **TokenSwap** - DEX swap interface for token exchanges

### NFTs & Assets
- **NFTCard** - Feature-rich NFT display with hover effects and actions
- **NFTGallery** - Grid-based NFT collection display

### DeFi Components
- **StakingInterface** - Staking rewards and delegation interface
- **LiquidityPool** - Liquidity provision and management
- **YieldFarming** - Yield farming opportunities and rewards
- **LendingBorrow** - Lending and borrowing protocols interface

### Airdrops & Rewards
- **AirdropChecker** - Check eligibility for token airdrops
- **AirdropClaim** - Claim available airdrops and rewards
- **AirdropHistory** - Historical airdrop claims and rewards

### Network & Infrastructure
- **ChainSwitcher** - Network switching interface
- **Web3Gate** - Token-gated content access control

### Transactions & History
- **TransactionHistory** - Transaction list with filtering and pagination

### Notifications & Alerts
- **Web3Toast** - Transaction status notifications with progress tracking
- **PriceAlert** - Price change alerts for tokens and NFTs

### Gaming & Social
- **GameAssets** - Gaming NFT/token inventory management
- **QuestTracker** - On-chain quest and achievement system
- **SocialProfile** - Web3 social profile with achievements and verification

### Governance
- **Governance** - DAO voting and proposal management

### Common Utilities
- **Web3Icon** - Icon library for Web3 assets and chains

### Demo Applications
- **Complete Web3 App** - Full-featured Web3 application demo

## 🛠 Installation

### From GitHub Packages (Latest)
```bash
# Configure registry
npm config set @thenightproject:registry https://npm.pkg.github.com

# Install packages
npm install @thenightproject/supaweb3-nuxt
```

### From NPM (Stable Releases)
```bash
# Install from NPM (when available)
npm install @supaweb3/nuxt
```

### pnpm
```bash
# GitHub Packages
pnpm config set @thenightproject:registry https://npm.pkg.github.com
pnpm add @thenightproject/supaweb3-nuxt

# NPM
pnpm add @supaweb3/nuxt
```

### yarn
```bash
# GitHub Packages
yarn config set @thenightproject:registry https://npm.pkg.github.com
yarn add @thenightproject/supaweb3-nuxt

# NPM
yarn add @supaweb3/nuxt
```

## 🚀 Quick Start

### Vue 3 Setup

```vue
<template>
  <div>
    <WalletConnectButton
      variant="default"
      size="lg"
      @connect="handleConnect"
      @disconnect="handleDisconnect"
    />

    <PortfolioOverview
      :total-value="portfolioValue"
      :assets="userAssets"
      :portfolio-change24h="dailyChange"
      show-charts
    />

    <TokenSwap
      :from-token="fromToken"
      :to-token="toToken"
      @swap="handleSwap"
    />
  </div>
</template>

<script setup>
import {
  WalletConnectButton,
  PortfolioOverview,
  TokenSwap
} from '@thenightproject/supaweb3-ui'
import '@thenightproject/supaweb3-ui/style.css'

const portfolioValue = ref(125430.50)
const dailyChange = ref(2350.75)
const userAssets = ref([
  { symbol: 'ETH', balance: 12.5, value: 45250.00 },
  { symbol: 'USDC', balance: 25000, value: 25000.00 }
])

const fromToken = ref({ symbol: 'ETH', balance: 12.5 })
const toToken = ref({ symbol: 'USDC', balance: 25000 })

const handleConnect = (wallet) => {
  console.log('Wallet connected:', wallet)
}

const handleDisconnect = () => {
  console.log('Wallet disconnected')
}

const handleSwap = (swapData) => {
  console.log('Token swap:', swapData)
}
</script>
```

### Nuxt 3 Integration

```javascript
// nuxt.config.ts (GitHub Packages)
export default defineNuxtConfig({
  modules: ['@thenightproject/supaweb3-nuxt'],
  supaweb3: {
    // Module configuration - CSS is auto-imported by the module
  }
})

// nuxt.config.ts (NPM)
export default defineNuxtConfig({
  modules: ['@supaweb3/nuxt'],
  supaweb3: {
    // Module configuration - CSS is auto-imported by the module
  }
})
```

## 🎨 Styling & Theming

### Tailwind CSS Configuration

```javascript
// tailwind.config.js (GitHub Packages)
module.exports = {
  presets: [require('@thenightproject/supaweb3-config')],
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue'
  ]
}

// tailwind.config.js (NPM)
module.exports = {
  presets: [require('@supaweb3/config')],
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue'
  ]
}
```

### Dark Mode Support

All components include built-in dark mode support:

```vue
<template>
  <!-- Automatically adapts to dark mode -->
  <NFTCard
    :nft="nftData"
    class="dark:bg-gray-800"
  />
</template>
```

## 📖 Documentation

Visit our [Storybook documentation](https://thenightproject.github.io/supaweb3) to explore all components interactively with live examples and code snippets.

## 🔧 Development

### Prerequisites

- Node.js 18+
- pnpm 8+

### Setup

```bash
# Clone the repository
git clone https://github.com/thenightproject/supaweb3.git
cd supaweb3

# Install dependencies
pnpm install

# Start development
pnpm dev

# Build packages
pnpm build

# Run Storybook
pnpm storybook
```

### Package Scripts

```bash
# Build all packages
pnpm run build

# Type checking
pnpm run typecheck

# Lint code
pnpm run lint

# Run tests
pnpm run test

# Start Storybook
pnpm storybook
```

## 📦 Publishing

### Automated Publishing

The project uses GitHub Actions for automated publishing to both GitHub Packages and NPM:

#### GitHub Packages (Development/Testing)
- **Automatic**: Every push to `main` branch publishes to GitHub Packages with patch version bump
- **Manual**: Use "Deploy to GitHub Packages" workflow dispatch with custom version type

#### NPM (Production Releases)
- **Manual Only**: Use workflow dispatch with "Release to NPM" option enabled
- Requires `NPM_TOKEN` secret to be configured in repository settings

### Manual Workflow Dispatch

1. Go to **Actions** → **CI/CD Pipeline** → **Run workflow**
2. Choose options:
   - ✅ **Deploy to GitHub Packages**: For testing/development versions
   - ✅ **Release to NPM**: For stable production releases
   - **Version type**: patch, minor, major, or prerelease

### Package Differences

| Feature | GitHub Packages | NPM |
|---------|----------------|-----|
| **Scope** | `@thenightproject/supaweb3-*` | `@supaweb3/*` |
| **Access** | Public | Public |
| **Use Case** | Development, testing, latest features | Stable releases |
| **Registry** | npm.pkg.github.com | registry.npmjs.org |

## 📁 Project Structure

```
packages/
├── ui/                   # Core Vue 3 components
│   ├── src/
│   │   ├── components/   # All UI components
│   │   ├── types/        # TypeScript definitions
│   │   └── index.ts      # Main export file
│   └── package.json
├── nuxt/                 # Nuxt 3 module
│   ├── src/
│   │   └── module.ts     # Nuxt module definition
│   └── package.json
├── config/               # Tailwind preset
│   ├── index.js          # Tailwind configuration
│   └── package.json
└── storybook/            # Documentation
    ├── stories/          # Component stories
    └── package.json
```

## 🎯 Component Usage Examples

### DeFi Staking Interface
```vue
<StakingInterface
  :available-tokens="[
    { symbol: 'ETH', balance: 12.5, apy: 4.2 },
    { symbol: 'USDC', balance: 25000, apy: 8.5 }
  ]"
  :staked-positions="stakedAssets"
  @stake="handleStake"
  @unstake="handleUnstake"
/>
```

### Airdrop Management
```vue
<AirdropChecker
  :wallet-address="userAddress"
  @check-eligibility="checkAirdrops"
/>

<AirdropClaim
  :available-airdrops="eligibleAirdrops"
  @claim="handleClaim"
/>
```

### Chain Switching
```vue
<ChainSwitcher
  :current-chain="currentNetwork"
  :available-chains="supportedChains"
  @switch="handleChainSwitch"
/>
```

### Gas Tracker with Calculator
```vue
<GasTracker
  :current-gas-prices="{
    slow: 15,
    standard: 25,
    fast: 35
  }"
  :native-token-price="2800"
  show-calculator
  show-alerts
/>
```

### NFT Gallery with Filtering
```vue
<NFTGallery
  :nfts="userNFTs"
  :show-filters="true"
  :show-search="true"
  layout="grid"
  @select="handleNFTSelect"
/>
```

## 🌐 Browser Support

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## 🔗 Links

- [Documentation](https://thenightproject.github.io/supaweb3)
- [Changelog](https://supaweb3.com/changelog)
- [GitHub Repository](https://github.com/thenightproject/supaweb3)
- [Issue Tracker](https://github.com/thenightproject/supaweb3/issues)

## 🎉 Acknowledgments

Built with love for the Vue and Web3 communities. Special thanks to all contributors and the open-source projects that make this possible.