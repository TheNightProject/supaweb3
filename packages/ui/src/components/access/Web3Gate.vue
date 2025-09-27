<template>
  <div :class="['web3-gate', className]">
    <!-- Unlocked State - Show Content -->
    <div v-if="isUnlocked && !loading">
      <slot />
    </div>

    <!-- Locked State - Show Gate -->
    <div v-else class="relative">
      <!-- Blurred/Hidden Content Preview -->
      <div
        v-if="showPreview && !hideContent"
        :class="[
          'relative overflow-hidden rounded-lg',
          blurContent ? 'select-none' : ''
        ]"
        :style="blurContent ? `filter: blur(${blurAmount}px)` : ''"
      >
        <slot />

        <!-- Overlay to prevent interaction -->
        <div
          v-if="blurContent"
          class="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent pointer-events-auto"
        ></div>
      </div>

      <!-- Gate Overlay -->
      <div
        :class="[
          'flex items-center justify-center',
          showPreview && !hideContent ? 'absolute inset-0' : 'relative',
          overlayClasses
        ]"
      >
        <div :class="['w-full max-w-md p-6 text-center', cardClasses]">
          <!-- Loading State -->
          <div v-if="loading" class="space-y-4">
            <div class="flex justify-center">
              <div class="h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
            </div>
            <div class="text-gray-600 dark:text-gray-400">
              {{ loadingText }}
            </div>
          </div>

          <!-- Gate Content -->
          <div v-else class="space-y-4">
            <!-- Icon -->
            <div class="flex justify-center">
              <div
                :class="[
                  'flex h-16 w-16 items-center justify-center rounded-full',
                  iconBackgroundClasses
                ]"
              >
                <component :is="gateIcon" class="h-8 w-8" />
              </div>
            </div>

            <!-- Title & Description -->
            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                {{ gateTitle }}
              </h3>
              <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {{ gateDescription }}
              </p>
            </div>

            <!-- Requirements List -->
            <div v-if="showRequirements && requirements.length > 0" class="space-y-2">
              <div
                v-for="(req, index) in requirements"
                :key="index"
                :class="[
                  'flex items-center justify-between rounded-lg p-3 text-sm',
                  req.met
                    ? 'bg-green-50 dark:bg-green-900/20'
                    : 'bg-gray-50 dark:bg-gray-800'
                ]"
              >
                <div class="flex items-center space-x-2">
                  <div
                    :class="[
                      'h-5 w-5 rounded-full flex items-center justify-center',
                      req.met
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-300 dark:bg-gray-600'
                    ]"
                  >
                    <svg v-if="req.met" class="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    <span v-else class="text-xs">{{ index + 1 }}</span>
                  </div>
                  <span :class="req.met ? 'text-green-700 dark:text-green-400' : 'text-gray-700 dark:text-gray-300'">
                    {{ req.label }}
                  </span>
                </div>
                <span
                  v-if="req.value"
                  class="text-xs font-medium"
                  :class="req.met ? 'text-green-600 dark:text-green-400' : 'text-gray-500 dark:text-gray-400'"
                >
                  {{ req.value }}
                </span>
              </div>
            </div>

            <!-- Current Status -->
            <div v-if="currentStatus" class="rounded-lg bg-yellow-50 p-3 dark:bg-yellow-900/20">
              <div class="flex items-center space-x-2">
                <svg class="h-5 w-5 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="text-sm text-yellow-700 dark:text-yellow-400">
                  {{ currentStatus }}
                </span>
              </div>
            </div>

            <!-- Action Button -->
            <button
              v-if="showActionButton"
              @click="handleAction"
              :disabled="actionDisabled"
              :class="[
                'w-full rounded-lg px-4 py-3 font-semibold transition-colors',
                actionDisabled
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed dark:bg-gray-700 dark:text-gray-400'
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              ]"
            >
              {{ actionButtonText }}
            </button>

            <!-- Custom Actions Slot -->
            <div v-if="$slots.actions">
              <slot name="actions" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'

const props = defineProps({
  // Gate Type and Configuration
  gateType: {
    type: String,
    default: 'wallet',
    validator: (value) => ['wallet', 'token', 'nft', 'custom'].includes(value)
  },

  // Requirements for unlocking
  requirements: {
    type: Array,
    default: () => []
  },

  // Token Gating Options
  tokenAddress: {
    type: String,
    default: ''
  },
  minTokenBalance: {
    type: String,
    default: '0'
  },
  tokenSymbol: {
    type: String,
    default: 'TOKEN'
  },

  // NFT Gating Options
  nftAddress: {
    type: String,
    default: ''
  },
  nftName: {
    type: String,
    default: 'NFT'
  },

  // Visual Options
  showPreview: {
    type: Boolean,
    default: true
  },
  blurContent: {
    type: Boolean,
    default: true
  },
  blurAmount: {
    type: Number,
    default: 8
  },
  hideContent: {
    type: Boolean,
    default: false
  },

  // UI Customization
  gateTitle: {
    type: String,
    default: ''
  },
  gateDescription: {
    type: String,
    default: ''
  },
  actionButtonText: {
    type: String,
    default: ''
  },
  showRequirements: {
    type: Boolean,
    default: true
  },
  showActionButton: {
    type: Boolean,
    default: true
  },

  // State
  isConnected: {
    type: Boolean,
    default: false
  },
  userAddress: {
    type: String,
    default: ''
  },
  userTokenBalance: {
    type: String,
    default: '0'
  },
  userNFTBalance: {
    type: Number,
    default: 0
  },
  loading: {
    type: Boolean,
    default: false
  },
  loadingText: {
    type: String,
    default: 'Checking requirements...'
  },
  currentStatus: {
    type: String,
    default: ''
  },

  // Styling
  overlayStyle: {
    type: String,
    default: 'glass',
    validator: (value) => ['glass', 'solid', 'minimal'].includes(value)
  },
  className: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['unlock', 'connect-wallet', 'check-requirements'])

// Computed states
const isUnlocked = computed(() => {
  switch (props.gateType) {
    case 'wallet':
      return props.isConnected && props.userAddress

    case 'token':
      return props.isConnected &&
             parseFloat(props.userTokenBalance) >= parseFloat(props.minTokenBalance)

    case 'nft':
      return props.isConnected && props.userNFTBalance > 0

    case 'custom':
      return props.requirements.every(req => req.met)

    default:
      return false
  }
})

const actionDisabled = computed(() => {
  if (props.loading) return true
  if (props.gateType === 'wallet' && props.isConnected) return true
  return false
})

const defaultGateTitle = computed(() => {
  switch (props.gateType) {
    case 'wallet':
      return props.isConnected ? 'Wallet Connected' : 'Connect Your Wallet'
    case 'token':
      return `Hold ${props.tokenSymbol} to Access`
    case 'nft':
      return `${props.nftName} Holders Only`
    case 'custom':
      return 'Access Restricted'
    default:
      return 'Gated Content'
  }
})

const defaultGateDescription = computed(() => {
  switch (props.gateType) {
    case 'wallet':
      return props.isConnected
        ? 'Your wallet is connected but you don\'t meet the requirements'
        : 'Please connect your wallet to access this content'
    case 'token':
      return `You need at least ${props.minTokenBalance} ${props.tokenSymbol} to access this content`
    case 'nft':
      return `You must own at least one ${props.nftName} NFT to access this content`
    case 'custom':
      return 'Meet all requirements to unlock this content'
    default:
      return 'This content is restricted'
  }
})

const defaultActionButtonText = computed(() => {
  switch (props.gateType) {
    case 'wallet':
      return props.isConnected ? 'Wallet Connected' : 'Connect Wallet'
    case 'token':
      return `Get ${props.tokenSymbol}`
    case 'nft':
      return `Get ${props.nftName}`
    case 'custom':
      return 'Unlock Content'
    default:
      return 'Unlock'
  }
})

const gateTitle = computed(() => props.gateTitle || defaultGateTitle.value)
const gateDescription = computed(() => props.gateDescription || defaultGateDescription.value)
const actionButtonText = computed(() => props.actionButtonText || defaultActionButtonText.value)

// Icon selection based on gate type
const gateIcon = computed(() => {
  const icons = {
    wallet: IconWallet,
    token: IconCoin,
    nft: IconImage,
    custom: IconLock
  }
  return icons[props.gateType] || IconLock
})

const iconBackgroundClasses = computed(() => {
  const classes = {
    wallet: 'bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400',
    token: 'bg-purple-100 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400',
    nft: 'bg-pink-100 text-pink-600 dark:bg-pink-900/20 dark:text-pink-400',
    custom: 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400'
  }
  return classes[props.gateType] || classes.custom
})

const overlayClasses = computed(() => {
  if (!props.showPreview || props.hideContent) return ''

  const base = 'backdrop-filter'
  const styles = {
    glass: 'backdrop-blur-sm bg-white/80 dark:bg-gray-900/80',
    solid: 'bg-white dark:bg-gray-900',
    minimal: 'bg-white/95 dark:bg-gray-900/95'
  }

  return `${base} ${styles[props.overlayStyle] || styles.glass}`
})

const cardClasses = computed(() => {
  const styles = {
    glass: 'bg-white/90 dark:bg-gray-800/90 backdrop-blur rounded-xl shadow-xl border border-gray-200 dark:border-gray-700',
    solid: 'bg-white dark:bg-gray-800 rounded-xl shadow-xl',
    minimal: 'bg-transparent'
  }

  return styles[props.overlayStyle] || styles.glass
})

// Methods
const handleAction = () => {
  switch (props.gateType) {
    case 'wallet':
      if (!props.isConnected) {
        emit('connect-wallet')
      }
      break
    case 'token':
    case 'nft':
    case 'custom':
      emit('unlock', { gateType: props.gateType })
      break
  }
}

const checkRequirements = () => {
  emit('check-requirements')
}

// Check requirements on mount and when dependencies change
onMounted(() => {
  checkRequirements()
})

watch([
  () => props.isConnected,
  () => props.userTokenBalance,
  () => props.userNFTBalance
], () => {
  checkRequirements()
})

// Simple icon components
const IconWallet = {
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
    </svg>
  `
}

const IconCoin = {
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  `
}

const IconImage = {
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  `
}

const IconLock = {
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  `
}
</script>