# @supaweb3/ui

> ⚠️ **ALPHA VERSION** - This library is currently in active development and should be considered experimental. APIs may change, components may be incomplete, and breaking changes are expected. Use at your own risk in production environments.

A comprehensive Vue 3 Web3 UI component library built with TypeScript and Tailwind CSS. Beautiful, responsive components for building modern Web3 applications.

## 🌐 Official Website
[supaweb3.com](https://supaweb3.com)

## 🚀 Quick Start

### Installation

```bash
# From NPM (stable releases)
npm install @supaweb3/ui

# From GitHub Packages (latest)
npm config set @thenightproject:registry https://npm.pkg.github.com
npm install @thenightproject/supaweb3-ui
```

### Basic Usage

```vue
<template>
  <div>
    <WalletConnectButton
      variant="default"
      size="lg"
      @connect="handleConnect"
    />

    <TokenBalance
      :tokens="['ETH', 'USDC']"
      layout="horizontal"
      show-usd
    />

    <NFTCard
      :nft="nftData"
      show-favorite
      show-price
    />
  </div>
</template>

<script setup>
import {
  WalletConnectButton,
  TokenBalance,
  NFTCard
} from '@supaweb3/ui'
import '@supaweb3/ui/style.css'

const handleConnect = (wallet) => {
  console.log('Connected:', wallet)
}

const nftData = {
  name: "Awesome NFT #1",
  image: "https://example.com/nft.jpg",
  price: "2.5 ETH",
  collection: "Cool Collection"
}
</script>
```

## 🎨 Component Categories

### 🔐 Authentication & Identity
- **WalletConnectButton** - Primary wallet connection button
- **WalletConnectModal** - Multi-wallet connection modal
- **SupaWeb3Address** - Smart address display with truncation
- **SupaWeb3Avatar** - Web3 user avatars

### 📊 Portfolio & Analytics
- **PortfolioOverview** - Complete portfolio dashboard
- **PnLTracker** - Profit/loss tracking with charts
- **GasTracker** - Real-time gas price monitoring

### 💰 Tokens & Trading
- **TokenBalance** - Multi-token balance display
- **SendToken** - Token transfer interface
- **TokenSwap** - DEX swap interface

### 🖼️ NFTs & Assets
- **NFTCard** - Rich NFT display with interactions
- **NFTGallery** - Grid-based NFT collections
- **GameAssets** - Gaming NFT inventory

### 🏦 DeFi Components
- **StakingInterface** - Staking and delegation
- **LiquidityPool** - LP management
- **YieldFarming** - Yield farming opportunities
- **LendingBorrow** - Lending protocols

### 🎁 Airdrops & Rewards
- **AirdropChecker** - Check airdrop eligibility
- **AirdropClaim** - Claim rewards interface
- **AirdropHistory** - Historical claims

### 🌐 Network & Infrastructure
- **ChainSwitcher** - Network switching
- **Web3Gate** - Token-gated content
- **TransactionHistory** - Transaction lists

### 🔔 Notifications
- **Web3Toast** - Transaction notifications
- **PriceAlert** - Price change alerts

### 🎮 Gaming & Social
- **QuestTracker** - Achievement systems
- **SocialProfile** - Web3 social profiles

### 🗳️ Governance
- **ProposalCard** - DAO proposals
- **VotingInterface** - Voting systems
- **DAOMembership** - DAO membership

### 🛠️ Utilities
- **Web3Icon** - Comprehensive icon library
- **DemoApp** - Complete application example

## 🎨 Styling

### CSS Import
```javascript
import '@supaweb3/ui/style.css'
```

### Tailwind Configuration
```javascript
// tailwind.config.js
module.exports = {
  presets: [require('@supaweb3/config')],
  content: [
    './src/**/*.{js,vue,ts}',
    './node_modules/@supaweb3/ui/**/*.{js,vue,ts}'
  ]
}
```

### Dark Mode
All components support dark mode automatically:

```vue
<template>
  <div class="dark">
    <!-- Components automatically adapt -->
    <TokenBalance :tokens="['ETH']" />
  </div>
</template>
```

## 🔧 Advanced Usage

### Custom Styling
```vue
<template>
  <WalletConnectButton
    class="custom-wallet-button"
    variant="outline"
    size="lg"
  />
</template>

<style>
.custom-wallet-button {
  @apply border-2 border-purple-500 hover:bg-purple-100;
}
</style>
```

### Event Handling
```vue
<template>
  <TokenSwap
    :from-token="fromToken"
    :to-token="toToken"
    @swap="handleSwap"
    @error="handleError"
    @success="handleSuccess"
  />
</template>

<script setup>
const handleSwap = (swapData) => {
  console.log('Swap initiated:', swapData)
}

const handleError = (error) => {
  console.error('Swap failed:', error)
}

const handleSuccess = (result) => {
  console.log('Swap successful:', result)
}
</script>
```

## 📱 Responsive Design

All components are mobile-first and responsive:

```vue
<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <NFTCard v-for="nft in nfts" :key="nft.id" :nft="nft" />
  </div>
</template>
```

## 🔗 Related Packages

- **[@supaweb3/nuxt](../nuxt)** - Nuxt 3 module for easy integration
- **[@supaweb3/config](../config)** - Tailwind CSS configuration preset

## 📖 Documentation

- 🌐 **Website**: [supaweb3.com](https://supaweb3.com)
- 📚 **Storybook**: [Interactive component playground](https://thenightproject.github.io/supaweb3)
- 📦 **NPM**: [npmjs.com/package/@supaweb3/ui](https://npmjs.com/package/@supaweb3/ui)
- 🔗 **GitHub**: [github.com/thenightproject/supaweb3](https://github.com/thenightproject/supaweb3)

## 🌐 Browser Support

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](../../CONTRIBUTING.md) for details.

## 📄 License

MIT License - see [LICENSE](../../LICENSE) for details.

---

**Built with ❤️ for the Vue and Web3 communities**

[supaweb3.com](https://supaweb3.com) | [Documentation](https://thenightproject.github.io/supaweb3) | [GitHub](https://github.com/thenightproject/supaweb3)