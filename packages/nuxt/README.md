# @supaweb3/nuxt

> ⚠️ **ALPHA VERSION** - This library is currently in active development and should be considered experimental. APIs may change, components may be incomplete, and breaking changes are expected. Use at your own risk in production environments.

Official Nuxt 3 module for SupaWeb3 UI components. Seamlessly integrate beautiful Web3 UI components into your Nuxt applications with auto-imports, CSS, and Tailwind configuration.

## 🌐 Official Website
[supaweb3.com](https://supaweb3.com)

## 🚀 Quick Start

### Installation

```bash
# From NPM (stable releases)
npm install @supaweb3/nuxt

# From GitHub Packages (latest)
npm config set @thenightproject:registry https://npm.pkg.github.com
npm install @supaweb3/nuxt
```

### Setup

Add the module to your `nuxt.config.ts`:

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@supaweb3/nuxt'],
  supaweb3: {
    // Module configuration (optional)
    prefix: '',
    global: true,
    tailwindConfig: true
  }
})
```

That's it! 🎉 All components and styles are now available in your Nuxt app.

## ✨ What's Included

The module automatically provides:

- 🎨 **Auto-imported CSS** - Component styles loaded automatically
- 🧩 **Auto-imported Components** - Use components without import statements
- ⚡ **Auto-imported Composables** - Web3 utilities ready to use
- 🎯 **Tailwind Config** - Preset applied automatically
- 🌙 **Dark Mode Support** - Built-in dark mode compatibility
- 📱 **SSR Compatible** - Full server-side rendering support

## 🧩 Usage

### Components (Auto-imported)

```vue
<template>
  <div>
    <!-- No imports needed! -->
    <WalletConnectButton @connect="onConnect" />

    <PortfolioOverview
      :total-value="portfolioValue"
      :assets="assets"
      show-charts
    />

    <TokenSwap
      :from-token="fromToken"
      :to-token="toToken"
      @swap="onSwap"
    />

    <NFTGallery
      :nfts="userNFTs"
      layout="grid"
      :show-filters="true"
    />
  </div>
</template>

<script setup>
// All composables auto-imported
const { $web3 } = useNuxtApp()

const portfolioValue = ref(125430.50)
const assets = ref([
  { symbol: 'ETH', balance: 12.5, value: 45250.00 },
  { symbol: 'USDC', balance: 25000, value: 25000.00 }
])

const onConnect = (wallet) => {
  console.log('Wallet connected:', wallet)
}

const onSwap = (swapData) => {
  console.log('Token swap:', swapData)
}
</script>
```

### Pages Example

```vue
<!-- pages/wallet.vue -->
<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8">My Web3 Wallet</h1>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- Portfolio Overview -->
      <div class="space-y-6">
        <PortfolioOverview
          :total-value="portfolioData.totalValue"
          :assets="portfolioData.assets"
          :portfolio-change24h="portfolioData.change24h"
          show-charts
        />

        <GasTracker
          :current-gas-prices="gasData"
          show-calculator
        />
      </div>

      <!-- Trading Interface -->
      <div class="space-y-6">
        <TokenSwap
          :from-token="fromToken"
          :to-token="toToken"
          @swap="handleSwap"
        />

        <StakingInterface
          :available-tokens="stakingTokens"
          @stake="handleStake"
        />
      </div>
    </div>

    <!-- NFT Collection -->
    <div class="mt-12">
      <h2 class="text-2xl font-bold mb-6">My NFT Collection</h2>
      <NFTGallery
        :nfts="userNFTs"
        :show-filters="true"
        :show-search="true"
        layout="grid"
      />
    </div>
  </div>
</template>

<script setup>
// Auto-imported composables
const portfolioData = await $fetch('/api/portfolio')
const userNFTs = await $fetch('/api/nfts')

const gasData = ref({
  slow: 15,
  standard: 25,
  fast: 35
})

const fromToken = ref({ symbol: 'ETH', balance: 12.5 })
const toToken = ref({ symbol: 'USDC', balance: 25000 })

const handleSwap = (swapData) => {
  // Handle swap logic
}

const handleStake = (stakeData) => {
  // Handle staking logic
}
</script>
```

## ⚙️ Configuration Options

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@supaweb3/nuxt'],
  supaweb3: {
    // Component prefix (default: '')
    prefix: 'Supa',

    // Global components (default: true)
    global: true,

    // Auto-apply Tailwind config (default: true)
    tailwindConfig: true
  }
})
```

### With Prefix

```typescript
supaweb3: {
  prefix: 'Supa'
}
```

```vue
<template>
  <!-- Components will be prefixed -->
  <SupaWalletConnectButton />
  <SupaTokenBalance />
  <SupaNFTCard />
</template>
```

## 🎨 Styling & Theming

### Automatic Tailwind Integration

The module automatically:
- Adds the SupaWeb3 Tailwind preset
- Configures component styles
- Enables dark mode support

### Custom Tailwind Config

If you need additional customization:

```javascript
// tailwind.config.js
module.exports = {
  presets: [require('@supaweb3/config')],
  theme: {
    extend: {
      colors: {
        // Custom brand colors
        brand: {
          primary: '#your-color',
          secondary: '#your-color'
        }
      }
    }
  }
}
```

### CSS Customization

```vue
<template>
  <WalletConnectButton class="custom-wallet-btn" />
</template>

<style>
.custom-wallet-btn {
  @apply bg-gradient-to-r from-purple-500 to-pink-500;
  @apply hover:from-purple-600 hover:to-pink-600;
  @apply transform hover:scale-105 transition-all;
}
</style>
```

## 🔌 Server-Side Rendering (SSR)

The module is fully SSR compatible:

```vue
<template>
  <div>
    <!-- Works with SSR/SSG -->
    <ClientOnly>
      <WalletConnectModal v-if="showModal" />
    </ClientOnly>

    <!-- Safe for SSR -->
    <PortfolioOverview :data="portfolioData" />
  </div>
</template>
```

## 🔧 Advanced Usage

### Custom Plugin

```typescript
// plugins/web3.client.ts
export default defineNuxtPlugin(() => {
  // Custom Web3 initialization
  const initWeb3 = () => {
    // Your Web3 setup logic
  }

  return {
    provide: {
      initWeb3
    }
  }
})
```

### Middleware Integration

```typescript
// middleware/auth.ts
export default defineNuxtRouteMiddleware((to) => {
  // Web3 authentication logic
  const isConnected = useWalletConnection()

  if (!isConnected.value && to.path !== '/connect') {
    return navigateTo('/connect')
  }
})
```

## 📦 What Gets Auto-Imported

### Components
All SupaWeb3 UI components are available without imports:
- `WalletConnectButton`, `WalletConnectModal`
- `PortfolioOverview`, `PnLTracker`, `GasTracker`
- `TokenBalance`, `SendToken`, `TokenSwap`
- `NFTCard`, `NFTGallery`
- `StakingInterface`, `LiquidityPool`
- And many more...

### Composables
```typescript
// Available in any component
const connection = useWeb3Connection()
const portfolio = usePortfolio()
const tokens = useTokens()
```

## 🔗 Related Packages

- **[@supaweb3/ui](../ui)** - Core Vue 3 UI components
- **[@supaweb3/config](../config)** - Tailwind CSS configuration

## 📖 Documentation

- 🌐 **Website**: [supaweb3.com](https://supaweb3.com)
- 📚 **Storybook**: [Interactive component playground](https://thenightproject.github.io/supaweb3)
- 📦 **NPM**: [npmjs.com/package/@supaweb3/nuxt](https://npmjs.com/package/@supaweb3/nuxt)
- 🔗 **GitHub**: [github.com/thenightproject/supaweb3](https://github.com/thenightproject/supaweb3)

## 🆚 Nuxt Version Support

- ✅ Nuxt 3.0+
- ❌ Nuxt 2 (use @supaweb3/ui directly)

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](../../CONTRIBUTING.md) for details.

## 📄 License

MIT License - see [LICENSE](../../LICENSE) for details.

---

**Built with ❤️ for the Nuxt and Web3 communities**

[supaweb3.com](https://supaweb3.com) | [Documentation](https://thenightproject.github.io/supaweb3) | [GitHub](https://github.com/thenightproject/supaweb3)