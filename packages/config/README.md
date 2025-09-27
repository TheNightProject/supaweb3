# @supaweb3/config

> ⚠️ **ALPHA VERSION** - This library is currently in active development and should be considered experimental. APIs may change, components may be incomplete, and breaking changes are expected. Use at your own risk in production environments.

Tailwind CSS configuration preset for SupaWeb3 UI components. Provides a comprehensive design system with colors, spacing, typography, and animations optimized for Web3 applications.

## 🌐 Official Website
[supaweb3.com](https://supaweb3.com)

## 🚀 Quick Start

### Installation

```bash
# From NPM (stable releases)
npm install @supaweb3/config

# From GitHub Packages (latest)
npm config set @thenightproject:registry https://npm.pkg.github.com
npm install @thenightproject/supaweb3-config
```

### Setup

Add the preset to your `tailwind.config.js`:

```javascript
// tailwind.config.js
module.exports = {
  presets: [require('@supaweb3/config')],
  content: [
    './src/**/*.{js,vue,ts}',
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue'
  ]
}
```

## 🎨 Design System

### Color Palette

#### Brand Colors
```css
/* Primary brand colors */
.bg-primary-500     /* Main brand color */
.bg-primary-600     /* Hover states */
.bg-primary-700     /* Active states */

/* Secondary colors */
.bg-secondary-500   /* Accent color */
.bg-secondary-600   /* Secondary hover */

/* Success, warning, error */
.bg-success-500     /* Success states */
.bg-warning-500     /* Warning states */
.bg-error-500       /* Error states */
```

#### Web3 Specific Colors
```css
/* Blockchain network colors */
.bg-ethereum        /* Ethereum blue */
.bg-polygon         /* Polygon purple */
.bg-bsc             /* BSC yellow */
.bg-arbitrum        /* Arbitrum blue */
.bg-optimism        /* Optimism red */
.bg-avalanche       /* Avalanche red */

/* Token colors */
.bg-btc             /* Bitcoin orange */
.bg-eth             /* Ethereum purple */
.bg-usdc            /* USDC blue */
.bg-usdt            /* USDT green */
```

#### Dark Mode Support
```css
/* Automatic dark mode variants */
.bg-gray-50         /* Light: very light gray, Dark: very dark gray */
.bg-gray-900        /* Light: very dark gray, Dark: very light gray */
.text-gray-900      /* Automatic contrast adjustment */
```

### Typography

```css
/* Web3 optimized font stack */
.font-mono          /* Code, addresses, hashes */
.font-sans          /* UI text, body content */
.font-display       /* Headings, hero text */

/* Responsive typography */
.text-xs            /* 12px - small labels */
.text-sm            /* 14px - body text */
.text-base          /* 16px - default */
.text-lg            /* 18px - large text */
.text-xl            /* 20px - headings */
.text-2xl           /* 24px - large headings */
.text-3xl           /* 30px - hero text */
```

### Spacing & Layout

```css
/* Web3 UI spacing scale */
.space-y-4          /* Vertical component spacing */
.space-x-6          /* Horizontal component spacing */
.gap-4              /* Grid/flex gaps */

/* Container sizes */
.max-w-xs           /* Small cards */
.max-w-sm           /* Medium cards */
.max-w-md           /* Large cards */
.max-w-4xl          /* Main content */
.max-w-7xl          /* Full width layouts */
```

### Animations & Effects

```css
/* Hover effects */
.hover:scale-105    /* Subtle grow on hover */
.hover:shadow-lg    /* Elevation on hover */
.hover:bg-opacity-80 /* Transparency effects */

/* Loading states */
.animate-pulse      /* Loading placeholders */
.animate-spin       /* Loading spinners */

/* Transitions */
.transition-all     /* Smooth transitions */
.duration-200       /* Fast interactions */
.duration-500       /* Smooth animations */
```

### Component Patterns

```css
/* Card patterns */
.rounded-lg         /* Standard card radius */
.shadow-md          /* Card elevation */
.border             /* Subtle borders */

/* Button patterns */
.rounded-md         /* Button radius */
.px-4 py-2          /* Button padding */
.font-medium        /* Button weight */

/* Input patterns */
.rounded-md         /* Input radius */
.border-gray-300    /* Input borders */
.focus:ring-2       /* Focus states */
```

## 🎯 Usage Examples

### Web3 Dashboard

```vue
<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Header -->
    <header class="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <h1 class="text-2xl font-bold text-gray-900 dark:text-white">
          Web3 Dashboard
        </h1>
      </div>
    </header>

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Portfolio Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
            Total Balance
          </h3>
          <p class="text-3xl font-bold text-primary-600">
            $125,430.50
          </p>
          <p class="text-sm text-success-500 mt-1">
            +2.34% (24h)
          </p>
        </div>

        <div class="bg-gradient-to-r from-ethereum to-purple-600 rounded-lg shadow-md p-6 text-white">
          <h3 class="text-lg font-medium mb-2">ETH Balance</h3>
          <p class="text-3xl font-bold">12.5 ETH</p>
          <p class="text-sm opacity-90 mt-1">≈ $35,250.00</p>
        </div>

        <div class="bg-gradient-to-r from-polygon to-purple-800 rounded-lg shadow-md p-6 text-white">
          <h3 class="text-lg font-medium mb-2">MATIC Balance</h3>
          <p class="text-3xl font-bold">2,450 MATIC</p>
          <p class="text-sm opacity-90 mt-1">≈ $1,960.00</p>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="flex flex-wrap gap-4 mb-8">
        <button class="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-200">
          Send Tokens
        </button>
        <button class="bg-secondary-600 hover:bg-secondary-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-200">
          Swap Tokens
        </button>
        <button class="border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-md font-medium transition-colors duration-200">
          Stake Assets
        </button>
      </div>
    </main>
  </div>
</template>
```

### NFT Card

```vue
<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <!-- NFT Image -->
    <div class="aspect-square bg-gray-100 dark:bg-gray-700 relative group">
      <img
        :src="nft.image"
        :alt="nft.name"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      >
      <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
    </div>

    <!-- NFT Info -->
    <div class="p-4">
      <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-1">
        {{ nft.name }}
      </h3>
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">
        {{ nft.collection }}
      </p>

      <!-- Price -->
      <div class="flex items-center justify-between">
        <span class="text-lg font-bold text-ethereum">
          {{ nft.price }}
        </span>
        <button class="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200">
          Buy Now
        </button>
      </div>
    </div>
  </div>
</template>
```

### Transaction Status

```vue
<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 border-l-4"
       :class="statusClasses">
    <div class="flex items-center">
      <div class="flex-shrink-0">
        <component :is="statusIcon" class="w-5 h-5" :class="iconClasses" />
      </div>
      <div class="ml-3">
        <h3 class="text-sm font-medium" :class="titleClasses">
          {{ transaction.title }}
        </h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">
          {{ transaction.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const statusClasses = computed(() => ({
  pending: 'border-warning-500 bg-warning-50 dark:bg-warning-900/20',
  success: 'border-success-500 bg-success-50 dark:bg-success-900/20',
  error: 'border-error-500 bg-error-50 dark:bg-error-900/20'
}))

const titleClasses = computed(() => ({
  pending: 'text-warning-800 dark:text-warning-200',
  success: 'text-success-800 dark:text-success-200',
  error: 'text-error-800 dark:text-error-200'
}))
</script>
```

## 🎨 Customization

### Extending the Preset

```javascript
// tailwind.config.js
module.exports = {
  presets: [require('@supaweb3/config')],
  theme: {
    extend: {
      colors: {
        // Add your custom colors
        brand: {
          50: '#f0f9ff',
          500: '#0ea5e9',
          900: '#0c4a6e',
        },
        // Custom token colors
        'custom-token': '#ff6b35'
      },
      fontFamily: {
        // Custom fonts
        'brand': ['YourCustomFont', 'sans-serif']
      },
      animation: {
        // Custom animations
        'bounce-slow': 'bounce 2s infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out'
      }
    }
  }
}
```

### Component Variants

```javascript
// Custom component utilities
module.exports = {
  presets: [require('@supaweb3/config')],
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.wallet-connect-btn': {
          '@apply bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-lg transform hover:scale-105 transition-all duration-200 shadow-lg': {}
        },
        '.nft-card': {
          '@apply bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden': {}
        },
        '.token-balance': {
          '@apply bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-700': {}
        }
      })
    }
  ]
}
```

## 🔗 Related Packages

- **[@supaweb3/ui](../ui)** - Vue 3 UI components (uses this config)
- **[@supaweb3/nuxt](../nuxt)** - Nuxt 3 module (auto-applies this config)

## 📖 Documentation

- 🌐 **Website**: [supaweb3.com](https://supaweb3.com)
- 📚 **Storybook**: [Interactive component playground](https://thenightproject.github.io/supaweb3)
- 📦 **NPM**: [npmjs.com/package/@supaweb3/config](https://npmjs.com/package/@supaweb3/config)
- 🔗 **GitHub**: [github.com/thenightproject/supaweb3](https://github.com/thenightproject/supaweb3)

## 🎯 Design Principles

- **Mobile-First**: Responsive by default
- **Dark Mode**: Comprehensive dark mode support
- **Accessibility**: WCAG compliant color contrasts
- **Performance**: Optimized for CSS purging
- **Consistency**: Systematic spacing and sizing
- **Web3 Native**: Colors and patterns for crypto/Web3 UIs

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](../../CONTRIBUTING.md) for details.

## 📄 License

MIT License - see [LICENSE](../../LICENSE) for details.

---

**Built with ❤️ for the Tailwind and Web3 communities**

[supaweb3.com](https://supaweb3.com) | [Documentation](https://thenightproject.github.io/supaweb3) | [GitHub](https://github.com/thenightproject/supaweb3)