<template>
  <div
    v-if="iconSrc"
    :class="[className, 'inline-flex items-center justify-center']"
    :style="{ width: `${size}px`, height: `${size}px` }"
    v-html="iconSrc"
  />
  <div
    v-else
    :class="fallbackClasses"
    :style="{ width: `${size}px`, height: `${size}px` }"
  >
    {{ fallbackText }}
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { svgs } from '@web3icons/core'

export type IconType = 'wallets' | 'tokens' | 'networks'
export type IconVariant = 'branded' | 'mono'

interface Props {
  type: IconType
  variant?: IconVariant
  symbol: string
  size?: number
  className?: string
  fallbackText?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'branded',
  size: 24,
  fallbackText: '?'
})

const iconSrc = computed(() => {
  try {
    // Generate the icon name based on web3icons naming convention
    let iconName: string

    switch (props.type) {
      case 'tokens':
        // Token names are always ticker in uppercase: BTC, ETH, GRT
        iconName = props.symbol.toUpperCase()
        break
      case 'networks':
        // Network names are always kebab-case: ethereum, binance-smart-chain
        iconName = props.symbol.toLowerCase().replace(/\s+/g, '-')
        break
      case 'wallets':
        // Wallet names are always kebab-case: metamask, coinbase-wallet
        iconName = props.symbol.toLowerCase().replace(/\s+/g, '-')
        break
      default:
        iconName = props.symbol.toLowerCase().replace(/\s+/g, '-')
    }

    // Access the icon using the svgs object: svgs.type.variant.iconName
    const typeIcons = (svgs as any)[props.type]
    if (!typeIcons) {
      return null
    }

    const variantIcons = typeIcons[props.variant]
    if (!variantIcons) {
      return null
    }

    const icon = variantIcons[iconName].default
    if (!icon) {
      return null
    }

    // Process the SVG to make it responsive to our size prop
    // Remove fixed width/height and add proper sizing
    return icon
      .replace(/width="[^"]*"/g, `width="${props.size}"`)
      .replace(/height="[^"]*"/g, `height="${props.size}"`)
      .replace(/<svg/, `<svg style="width: 100%; height: 100%;"`)
  } catch (error) {
    console.warn(`Failed to load ${props.type} icon for ${props.symbol}:`, error)
    return null
  }
})

const fallbackClasses = computed(() => [
  'flex items-center justify-center rounded bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs font-medium',
  props.className
].filter(Boolean).join(' '))
</script>