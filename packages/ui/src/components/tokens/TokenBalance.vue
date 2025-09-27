<template>
  <div :class="containerClasses">
    <div v-if="loading" :class="contentClasses">
      <!-- Token Icon Skeleton -->
      <div v-if="layout !== 'text-only'" class="flex-shrink-0">
        <div :class="iconSkeletonClasses" />
      </div>

      <!-- Content Skeleton -->
      <div v-if="layout !== 'icon-only'" :class="infoClasses">
        <!-- Token Name/Symbol Skeleton -->
        <div v-if="showTokenName" :class="nameClasses">
          <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-16 animate-pulse" />
        </div>

        <!-- Balance Display Skeleton -->
        <div :class="balanceContainerClasses">
          <div :class="balanceClasses">
            <div class="h-6 bg-gray-200 dark:bg-gray-700 rounded w-20 animate-pulse" />
          </div>

          <!-- Price Change Skeleton -->
          <div v-if="showPriceChange" class="h-5 bg-gray-200 dark:bg-gray-700 rounded-full w-16 animate-pulse" />
        </div>

        <!-- Secondary Information Skeleton -->
        <div v-if="showSecondaryInfo" :class="secondaryClasses">
          <div class="h-3 bg-gray-200 dark:bg-gray-700 rounded w-12 animate-pulse" />
        </div>
      </div>

      <!-- Actions Skeleton -->
      <div v-if="showActions" :class="actionsClasses">
        <div v-for="n in 3" :key="n" class="h-7 w-12 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />
      </div>
    </div>

    <div v-else :class="contentClasses">
      <!-- Token Icon -->
      <div v-if="layout !== 'text-only'" :class="iconContainerClasses">
        <Web3Icon
          type="tokens"
          variant="branded"
          :symbol="token.symbol"
          :size="iconSize"
          :fallback-text="token.symbol.slice(0, 2)"
        />
      </div>

      <!-- Token Information -->
      <div v-if="layout !== 'icon-only'" :class="infoClasses">
        <!-- Token Name/Symbol -->
        <div v-if="showTokenName" :class="nameClasses">
          <span v-if="showFullName && token.name" :class="fullNameClasses">
            {{ token.name }}
          </span>
          <span :class="symbolClasses">{{ token.symbol }}</span>
        </div>

        <!-- Balance Display -->
        <div :class="balanceContainerClasses">
          <div :class="balanceClasses">
            <span v-if="!showUsdValue">
              {{ formattedBalance }}
            </span>
            <span v-else :class="usdClasses">
              {{ formattedUsdValue }}
            </span>
          </div>

          <!-- Price Change Indicator -->
          <div v-if="showPriceChange && token.priceChange !== undefined" :class="priceChangeClasses">
            <svg v-if="token.priceChange > 0" :class="priceIconClasses" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L10 4.414 6.707 7.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
            <svg v-else-if="token.priceChange < 0" :class="priceIconClasses" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L10 15.586l3.293-3.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            <span :class="priceChangeTextClasses">
              {{ formattedPriceChange }}
            </span>
          </div>
        </div>

        <!-- Secondary Information -->
        <div v-if="showSecondaryInfo" :class="secondaryClasses">
          <span v-if="showUsdValue" :class="secondaryBalanceClasses">
            {{ formattedBalance }}
          </span>
          <span v-else-if="token.usdPrice" :class="secondaryUsdClasses">
            {{ formattedUsdValue }}
          </span>
          <span v-if="token.usdPrice && showPrice" :class="priceClasses">
            ${{ formatPrice(token.usdPrice) }} per {{ token.symbol }}
          </span>
        </div>
      </div>

      <!-- Actions -->
      <div v-if="showActions" :class="actionsClasses">
        <button
          v-for="action in actions"
          :key="action.label"
          @click="$emit('action', action.id, token)"
          :class="actionButtonClasses"
        >
          {{ action.label }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Web3Icon from '../common/Web3Icon.vue'

export type TokenLayout = 'vertical' | 'horizontal' | 'compact' | 'icon-only' | 'text-only'
export type TokenSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface TokenData {
  symbol: string
  name?: string
  balance: number
  decimals?: number
  usdPrice?: number
  priceChange?: number
  logo?: string
}

export interface TokenAction {
  id: string
  label: string
}

interface Props {
  token: TokenData
  layout?: TokenLayout
  size?: TokenSize
  showUsdValue?: boolean
  showTokenName?: boolean
  showFullName?: boolean
  showPriceChange?: boolean
  showSecondaryInfo?: boolean
  showPrice?: boolean
  showActions?: boolean
  actions?: TokenAction[]
  loading?: boolean
  clickable?: boolean
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  layout: 'vertical',
  size: 'md',
  showUsdValue: false,
  showTokenName: true,
  showFullName: false,
  showPriceChange: true,
  showSecondaryInfo: true,
  showPrice: false,
  showActions: false,
  actions: () => [],
  loading: false,
  clickable: false,
})

const emit = defineEmits<{
  click: [token: TokenData]
  action: [actionId: string, token: TokenData]
}>()

// Computed Values
const formattedBalance = computed(() => {
  const decimals = props.token.decimals || 18
  const balance = props.token.balance / Math.pow(10, decimals)

  if (balance >= 1000000) {
    return `${(balance / 1000000).toFixed(2)}M`
  } else if (balance >= 1000) {
    return `${(balance / 1000).toFixed(2)}K`
  } else if (balance >= 1) {
    return balance.toFixed(4)
  } else {
    return balance.toFixed(6)
  }
})

const formattedUsdValue = computed(() => {
  if (!props.token.usdPrice) return '$0.00'

  const decimals = props.token.decimals || 18
  const balance = props.token.balance / Math.pow(10, decimals)
  const usdValue = balance * props.token.usdPrice

  if (usdValue >= 1000000) {
    return `$${(usdValue / 1000000).toFixed(2)}M`
  } else if (usdValue >= 1000) {
    return `$${(usdValue / 1000).toFixed(2)}K`
  } else if (usdValue >= 1) {
    return `$${usdValue.toFixed(2)}`
  } else {
    return `$${usdValue.toFixed(4)}`
  }
})

const formattedPriceChange = computed(() => {
  if (props.token.priceChange === undefined) return ''
  const change = props.token.priceChange
  const sign = change >= 0 ? '+' : ''
  return `${sign}${change.toFixed(2)}%`
})

const formatPrice = (price: number) => {
  if (price >= 1) {
    return price.toFixed(2)
  } else if (price >= 0.01) {
    return price.toFixed(4)
  } else {
    return price.toFixed(6)
  }
}

// Size-based values
const iconSize = computed(() => {
  const sizes = {
    xs: 16,
    sm: 20,
    md: 24,
    lg: 32,
    xl: 40
  }
  return sizes[props.size]
})

// Style Classes
const containerClasses = computed(() => [
  'token-balance',
  'bg-white dark:bg-gray-900',
  'border border-gray-200 dark:border-gray-700',
  'rounded-xl shadow-sm',
  props.clickable ? 'cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 hover:shadow-md hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200' : '',
  props.className
].filter(Boolean).join(' '))

const contentClasses = computed(() => {
  const layouts = {
    vertical: 'flex flex-col items-center text-center space-y-3 p-4',
    horizontal: 'flex items-center space-x-4 p-4',
    compact: 'flex items-center justify-between p-3',
    'icon-only': 'flex justify-center p-2',
    'text-only': 'flex flex-col space-y-2 p-3'
  }
  return layouts[props.layout]
})

const iconContainerClasses = computed(() => {
  const baseClasses = 'flex-shrink-0 relative'

  if (props.layout === 'vertical') return `${baseClasses} mb-1`
  if (props.layout === 'horizontal') return `${baseClasses} mr-1`
  if (props.layout === 'compact') return `${baseClasses} mr-1`
  return baseClasses
})

const infoClasses = computed(() => {
  if (props.layout === 'vertical') return 'flex flex-col items-center space-y-2 w-full'
  if (props.layout === 'horizontal') return 'flex-1 min-w-0 space-y-1'
  if (props.layout === 'compact') return 'flex-1 min-w-0'
  return 'space-y-2'
})

const nameClasses = computed(() => {
  const sizes = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-sm',
    lg: 'text-base',
    xl: 'text-lg'
  }

  return [
    sizes[props.size],
    props.layout === 'compact' ? 'truncate' : '',
    'font-medium text-gray-700 dark:text-gray-300 mb-1'
  ].filter(Boolean).join(' ')
})

const fullNameClasses = computed(() => 'mr-2')
const symbolClasses = computed(() => 'text-gray-600 dark:text-gray-400 font-medium')

const balanceContainerClasses = computed(() => {
  if (props.layout === 'compact') return 'flex items-center justify-between space-x-3'
  if (props.layout === 'horizontal') return 'flex items-center space-x-3'
  return 'flex flex-col items-center space-y-1 w-full'
})

const balanceClasses = computed(() => {
  const sizes = {
    xs: 'text-sm',
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-xl',
    xl: 'text-2xl'
  }

  return [
    sizes[props.size],
    'font-bold text-gray-900 dark:text-white tracking-tight'
  ].join(' ')
})

const usdClasses = computed(() => 'text-green-600 dark:text-green-400 font-bold tracking-tight')

const priceChangeClasses = computed(() => {
  const isPositive = (props.token.priceChange || 0) >= 0
  return [
    'flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium',
    isPositive ? 'bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400' : 'bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400'
  ].join(' ')
})

const priceIconClasses = computed(() => 'w-3 h-3 flex-shrink-0')
const priceChangeTextClasses = computed(() => 'font-medium whitespace-nowrap')

const secondaryClasses = computed(() => [
  'text-xs text-gray-500 dark:text-gray-400 mt-1',
  props.layout === 'vertical' ? 'text-center' : '',
  props.layout === 'compact' ? 'text-right' : ''
].filter(Boolean).join(' '))

const secondaryBalanceClasses = computed(() => 'block text-gray-500 dark:text-gray-400')
const secondaryUsdClasses = computed(() => 'block text-green-600 dark:text-green-400 font-medium')
const priceClasses = computed(() => 'block text-gray-500 dark:text-gray-400')

const actionsClasses = computed(() => {
  if (props.layout === 'vertical') return 'flex space-x-3 mt-3'
  if (props.layout === 'horizontal') return 'flex space-x-3 ml-4 me-2 flex-shrink-0'
  if (props.layout === 'compact') return 'flex space-x-3 ml-auto me-2 flex-shrink-0'
  return 'flex space-x-3'
})

const actionButtonClasses = computed(() => {
  const baseClasses = [
    'px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-200',
    'border border-transparent',
    'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1'
  ]

  // Different styles per action type
  return [
    ...baseClasses,
    'bg-blue-50 text-blue-700 border-blue-200',
    'hover:bg-blue-100 hover:border-blue-300 hover:shadow-sm',
    'dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800',
    'dark:hover:bg-blue-900/50 dark:hover:border-blue-700',
    'me-1 last:me-0'
  ].join(' ')
})

// Loading States
const iconSkeletonClasses = computed(() => {
  const sizeClass = {
    16: 'w-4 h-4',
    20: 'w-5 h-5',
    24: 'w-6 h-6',
    32: 'w-8 h-8',
    40: 'w-10 h-10'
  }[iconSize.value] || 'w-6 h-6'

  return [
    'rounded-lg animate-pulse bg-gray-200 dark:bg-gray-700',
    sizeClass
  ].join(' ')
})
</script>