<template>
  <div :class="['liquidity-pool', className]">
    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
      <div class="p-6">
        <!-- Header -->
        <div class="flex justify-between items-start mb-6">
          <div>
            <h2 class="text-xl font-bold text-gray-900 dark:text-white">
              {{ title }}
            </h2>
            <p v-if="subtitle" class="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {{ subtitle }}
            </p>
            <div class="flex items-center space-x-2 mt-2">
              <span class="text-sm font-medium text-gray-700 dark:text-gray-300">
                {{ tokenA.symbol }}/{{ tokenB.symbol }}
              </span>
              <span v-if="poolFee" class="px-2 py-1 text-xs bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400 rounded">
                {{ poolFee }}% Fee
              </span>
            </div>
          </div>
          <div v-if="poolStats" class="text-right">
            <div class="text-sm text-gray-600 dark:text-gray-400">Pool TVL</div>
            <div class="text-lg font-semibold text-gray-900 dark:text-white">
              ${{ poolStats.tvl }}
            </div>
          </div>
        </div>

        <!-- Add/Remove Toggle -->
        <div class="flex bg-gray-100 dark:bg-gray-700 p-1 rounded-lg mb-6">
          <button
            @click="activeTab = 'add'"
            :class="[
              'flex-1 py-2 px-4 rounded-md font-medium transition-colors',
              activeTab === 'add'
                ? 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            ]"
          >
            Add Liquidity
          </button>
          <button
            @click="activeTab = 'remove'"
            :class="[
              'flex-1 py-2 px-4 rounded-md font-medium transition-colors',
              activeTab === 'remove'
                ? 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            ]"
          >
            Remove Liquidity
          </button>
        </div>

        <!-- Pool Stats -->
        <div v-if="poolStats" class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div class="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-3 rounded-lg border border-green-200 dark:border-green-800">
            <div class="text-xs text-green-700 dark:text-green-300 mb-1">APY</div>
            <div class="text-lg font-bold text-green-600 dark:text-green-400">
              {{ poolStats.apy }}%
            </div>
          </div>
          <div class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-3 rounded-lg border border-blue-200 dark:border-blue-800">
            <div class="text-xs text-blue-700 dark:text-blue-300 mb-1">24h Volume</div>
            <div class="text-lg font-bold text-blue-600 dark:text-blue-400">
              ${{ poolStats.volume24h }}
            </div>
          </div>
          <div class="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-3 rounded-lg border border-purple-200 dark:border-purple-800">
            <div class="text-xs text-purple-700 dark:text-purple-300 mb-1">Your Share</div>
            <div class="text-lg font-bold text-purple-600 dark:text-purple-400">
              {{ userShare || '0' }}%
            </div>
          </div>
          <div class="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-3 rounded-lg border border-orange-200 dark:border-orange-800">
            <div class="text-xs text-orange-700 dark:text-orange-300 mb-1">Your Value</div>
            <div class="text-lg font-bold text-orange-600 dark:text-orange-400">
              ${{ userLiquidityValue || '0' }}
            </div>
          </div>
        </div>

        <!-- Add Liquidity Section -->
        <div v-if="activeTab === 'add'" class="space-y-6">
          <!-- Token A Input -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {{ tokenA.symbol }} Amount
            </label>
            <div class="relative">
              <input
                v-model="tokenAAmount"
                @input="updateTokenBFromA"
                type="number"
                :placeholder="`Enter ${tokenA.symbol} amount`"
                :disabled="loading"
                class="w-full px-4 py-3 pr-20 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white disabled:opacity-50"
              />
              <button
                @click="setMaxTokenA"
                class="absolute right-3 top-3 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
              >
                MAX
              </button>
            </div>
            <div class="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
              <span>Balance: {{ tokenA.balance }} {{ tokenA.symbol }}</span>
              <span v-if="tokenAAmount">≈ ${{ formatCurrency(parseFloat(tokenAAmount) * tokenA.price) }}</span>
            </div>
          </div>

          <!-- Plus Icon -->
          <div class="flex justify-center">
            <div class="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
              <svg class="w-4 h-4 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
          </div>

          <!-- Token B Input -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {{ tokenB.symbol }} Amount
            </label>
            <div class="relative">
              <input
                v-model="tokenBAmount"
                @input="updateTokenAFromB"
                type="number"
                :placeholder="`Enter ${tokenB.symbol} amount`"
                :disabled="loading"
                class="w-full px-4 py-3 pr-20 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white disabled:opacity-50"
              />
              <button
                @click="setMaxTokenB"
                class="absolute right-3 top-3 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
              >
                MAX
              </button>
            </div>
            <div class="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
              <span>Balance: {{ tokenB.balance }} {{ tokenB.symbol }}</span>
              <span v-if="tokenBAmount">≈ ${{ formatCurrency(parseFloat(tokenBAmount) * tokenB.price) }}</span>
            </div>
          </div>

          <!-- Current Price Ratio -->
          <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <div class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Current Pool Ratio</div>
            <div class="text-center">
              <div class="text-lg font-semibold text-gray-900 dark:text-white">
                1 {{ tokenA.symbol }} = {{ formatCurrency(tokenA.price / tokenB.price) }} {{ tokenB.symbol }}
              </div>
              <div class="text-sm text-gray-600 dark:text-gray-400 mt-1">
                1 {{ tokenB.symbol }} = {{ formatCurrency(tokenB.price / tokenA.price) }} {{ tokenA.symbol }}
              </div>
            </div>
          </div>

          <!-- Expected Output -->
          <div v-if="tokenAAmount && tokenBAmount" class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
            <div class="text-sm font-medium text-blue-900 dark:text-blue-300 mb-2">You Will Receive</div>
            <div class="space-y-1 text-sm">
              <div class="flex justify-between">
                <span class="text-blue-700 dark:text-blue-400">LP Tokens:</span>
                <span class="font-medium">{{ calculateLPTokens() }} {{ tokenA.symbol }}-{{ tokenB.symbol }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-blue-700 dark:text-blue-400">Pool Share:</span>
                <span class="font-medium">{{ calculatePoolShare() }}%</span>
              </div>
              <div class="flex justify-between">
                <span class="text-blue-700 dark:text-blue-400">Total Value:</span>
                <span class="font-medium">${{ formatCurrency(getTotalValue()) }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Remove Liquidity Section -->
        <div v-else class="space-y-6">
          <!-- Current Position -->
          <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <div class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Your Liquidity Position</div>
            <div class="grid grid-cols-2 gap-4 mb-4">
              <div>
                <div class="text-sm text-gray-600 dark:text-gray-400">LP Tokens</div>
                <div class="font-semibold text-gray-900 dark:text-white">
                  {{ userLPTokens || '0' }} {{ tokenA.symbol }}-{{ tokenB.symbol }}
                </div>
              </div>
              <div>
                <div class="text-sm text-gray-600 dark:text-gray-400">Total Value</div>
                <div class="font-semibold text-gray-900 dark:text-white">
                  ${{ userLiquidityValue || '0' }}
                </div>
              </div>
            </div>

            <!-- Current Token Breakdown -->
            <div class="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div class="text-gray-600 dark:text-gray-400">{{ tokenA.symbol }}</div>
                <div class="font-medium text-gray-900 dark:text-white">
                  {{ userTokenAInPool || '0' }} {{ tokenA.symbol }}
                </div>
              </div>
              <div>
                <div class="text-gray-600 dark:text-gray-400">{{ tokenB.symbol }}</div>
                <div class="font-medium text-gray-900 dark:text-white">
                  {{ userTokenBInPool || '0' }} {{ tokenB.symbol }}
                </div>
              </div>
            </div>
          </div>

          <!-- Removal Percentage -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              Amount to Remove
            </label>
            <div class="space-y-4">
              <!-- Percentage Slider -->
              <div class="px-3">
                <input
                  v-model="removePercentage"
                  @input="updateRemoveAmounts"
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                />
                <div class="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                  <span>0%</span>
                  <span>25%</span>
                  <span>50%</span>
                  <span>75%</span>
                  <span>100%</span>
                </div>
              </div>

              <!-- Percentage Display -->
              <div class="text-center">
                <div class="text-2xl font-bold text-gray-900 dark:text-white">
                  {{ removePercentage }}%
                </div>
                <div class="text-sm text-gray-600 dark:text-gray-400">
                  of your liquidity position
                </div>
              </div>

              <!-- Quick Percentage Buttons -->
              <div class="flex gap-2 justify-center">
                <button
                  v-for="percentage in [25, 50, 75, 100]"
                  :key="percentage"
                  @click="setRemovePercentage(percentage)"
                  :class="[
                    'px-3 py-2 text-sm rounded-lg font-medium transition-colors',
                    removePercentage == percentage
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  ]"
                >
                  {{ percentage }}%
                </button>
              </div>
            </div>
          </div>

          <!-- Expected Removal Output -->
          <div v-if="removePercentage > 0" class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
            <div class="text-sm font-medium text-red-900 dark:text-red-300 mb-2">You Will Receive</div>
            <div class="space-y-1 text-sm">
              <div class="flex justify-between">
                <span class="text-red-700 dark:text-red-400">{{ tokenA.symbol }}:</span>
                <span class="font-medium">{{ calculateRemoveTokenA() }} {{ tokenA.symbol }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-red-700 dark:text-red-400">{{ tokenB.symbol }}:</span>
                <span class="font-medium">{{ calculateRemoveTokenB() }} {{ tokenB.symbol }}</span>
              </div>
              <div class="flex justify-between border-t border-red-200 dark:border-red-800 pt-2 mt-2">
                <span class="text-red-700 dark:text-red-400 font-medium">Total Value:</span>
                <span class="font-semibold">${{ formatCurrency(calculateRemoveValue()) }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Impermanent Loss Warning -->
        <div v-if="showILWarning" class="mt-6 bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
          <div class="flex items-start space-x-3">
            <svg class="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
            </svg>
            <div>
              <div class="font-medium text-yellow-800 dark:text-yellow-300 mb-1">Impermanent Loss Risk</div>
              <div class="text-sm text-yellow-700 dark:text-yellow-400">
                <p class="mb-2">
                  Providing liquidity carries risk of impermanent loss if token prices diverge significantly.
                </p>
                <div v-if="impermanentLossData" class="space-y-1">
                  <div>• Current IL: <span class="font-medium">{{ impermanentLossData.current }}%</span></div>
                  <div>• IL if {{ tokenA.symbol }} doubles: <span class="font-medium">-5.7%</span></div>
                  <div>• IL if {{ tokenA.symbol }} halves: <span class="font-medium">-5.7%</span></div>
                </div>
                <p class="mt-2 text-xs">
                  <a href="#" class="text-yellow-700 dark:text-yellow-400 underline hover:text-yellow-800 dark:hover:text-yellow-300">
                    Learn more about impermanent loss →
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Price Impact Warning -->
        <div v-if="priceImpact && parseFloat(priceImpact) > 1" class="mt-4 bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg border border-orange-200 dark:border-orange-800">
          <div class="flex items-center space-x-2">
            <svg class="w-4 h-4 text-orange-600 dark:text-orange-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
            </svg>
            <div class="text-sm">
              <span class="font-medium text-orange-800 dark:text-orange-300">High Price Impact:</span>
              <span class="text-orange-700 dark:text-orange-400 ml-1">{{ priceImpact }}%</span>
            </div>
          </div>
        </div>

        <!-- Action Button -->
        <div class="mt-6">
          <button
            @click="handleAction"
            :disabled="actionDisabled"
            :class="[
              'w-full py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2',
              actionDisabled
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed dark:bg-gray-700 dark:text-gray-400'
                : activeTab === 'add'
                ? 'bg-blue-500 text-white hover:bg-blue-600'
                : 'bg-red-500 text-white hover:bg-red-600'
            ]"
          >
            <div v-if="loading" class="w-5 h-5 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
            <span>{{ actionButtonText }}</span>
          </button>
        </div>

        <!-- Transaction Summary -->
        <div v-if="showTransactionSummary && (tokenAAmount || removePercentage > 0)" class="mt-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <div class="text-sm text-gray-600 dark:text-gray-400 space-y-1">
            <div class="flex justify-between">
              <span>Gas estimate:</span>
              <span>~${{ gasEstimate || '12' }}</span>
            </div>
            <div v-if="activeTab === 'add'" class="flex justify-between">
              <span>Minimum LP tokens:</span>
              <span>{{ calculateMinimumLP() }}</span>
            </div>
            <div v-if="slippageTolerance" class="flex justify-between">
              <span>Slippage tolerance:</span>
              <span>{{ slippageTolerance }}%</span>
            </div>
          </div>
        </div>

        <!-- Pool Information Footer -->
        <div v-if="showPoolInfo" class="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <div class="text-gray-600 dark:text-gray-400">Protocol</div>
              <div class="font-medium text-gray-900 dark:text-white">{{ protocol || 'Uniswap V3' }}</div>
            </div>
            <div>
              <div class="text-gray-600 dark:text-gray-400">Fee Tier</div>
              <div class="font-medium text-gray-900 dark:text-white">{{ poolFee || '0.3' }}%</div>
            </div>
            <div>
              <div class="text-gray-600 dark:text-gray-400">Pool Address</div>
              <div class="font-medium text-gray-900 dark:text-white">
                {{ poolAddress ? `${poolAddress.slice(0, 6)}...${poolAddress.slice(-4)}` : '0x1234...5678' }}
              </div>
            </div>
            <div>
              <div class="text-gray-600 dark:text-gray-400">Created</div>
              <div class="font-medium text-gray-900 dark:text-white">{{ poolCreated || 'Mar 2023' }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
  // Content
  title: {
    type: String,
    default: 'Liquidity Pool'
  },
  subtitle: {
    type: String,
    default: 'Add or remove liquidity to earn trading fees'
  },

  // Token Information
  tokenA: {
    type: Object,
    required: true
  },
  tokenB: {
    type: Object,
    required: true
  },

  // Pool Data
  poolStats: {
    type: Object,
    default: () => ({})
  },
  poolFee: {
    type: String,
    default: '0.3'
  },
  protocol: {
    type: String,
    default: 'Uniswap V3'
  },
  poolAddress: {
    type: String,
    default: ''
  },
  poolCreated: {
    type: String,
    default: ''
  },

  // User Position
  userShare: {
    type: String,
    default: '0'
  },
  userLiquidityValue: {
    type: String,
    default: '0'
  },
  userLPTokens: {
    type: String,
    default: '0'
  },
  userTokenAInPool: {
    type: String,
    default: '0'
  },
  userTokenBInPool: {
    type: String,
    default: '0'
  },

  // Risk Data
  impermanentLossData: {
    type: Object,
    default: () => ({
      current: '0'
    })
  },
  priceImpact: {
    type: String,
    default: '0'
  },

  // UI Options
  showILWarning: {
    type: Boolean,
    default: true
  },
  showTransactionSummary: {
    type: Boolean,
    default: true
  },
  showPoolInfo: {
    type: Boolean,
    default: true
  },

  // State
  loading: {
    type: Boolean,
    default: false
  },
  gasEstimate: {
    type: String,
    default: '12'
  },
  slippageTolerance: {
    type: String,
    default: '0.5'
  },

  // Styling
  className: {
    type: String,
    default: ''
  }
})

const emit = defineEmits([
  'add-liquidity',
  'remove-liquidity'
])

// Local state
const activeTab = ref('add')
const tokenAAmount = ref('')
const tokenBAmount = ref('')
const removePercentage = ref(0)
const updateInProgress = ref(false)

// Computed properties
const actionDisabled = computed(() => {
  if (props.loading) return true

  if (activeTab.value === 'add') {
    return !tokenAAmount.value || !tokenBAmount.value ||
           parseFloat(tokenAAmount.value) <= 0 || parseFloat(tokenBAmount.value) <= 0 ||
           parseFloat(tokenAAmount.value) > parseFloat(props.tokenA.balance) ||
           parseFloat(tokenBAmount.value) > parseFloat(props.tokenB.balance)
  }

  if (activeTab.value === 'remove') {
    return removePercentage.value <= 0 || parseFloat(props.userLPTokens) <= 0
  }

  return false
})

const actionButtonText = computed(() => {
  if (props.loading) {
    return activeTab.value === 'add' ? 'Adding Liquidity...' : 'Removing Liquidity...'
  }

  if (activeTab.value === 'add') {
    return tokenAAmount.value && tokenBAmount.value
      ? `Add ${tokenAAmount.value} ${props.tokenA.symbol} + ${tokenBAmount.value} ${props.tokenB.symbol}`
      : 'Enter Amounts'
  } else {
    return removePercentage.value > 0
      ? `Remove ${removePercentage.value}% Liquidity`
      : 'Select Amount'
  }
})

// Watch for tab changes to reset form
watch(activeTab, () => {
  tokenAAmount.value = ''
  tokenBAmount.value = ''
  removePercentage.value = 0
})

// Methods
const setMaxTokenA = () => {
  tokenAAmount.value = props.tokenA.balance
  updateTokenBFromA()
}

const setMaxTokenB = () => {
  tokenBAmount.value = props.tokenB.balance
  updateTokenAFromB()
}

const updateTokenBFromA = () => {
  if (updateInProgress.value || !tokenAAmount.value) return

  updateInProgress.value = true
  const ratio = props.tokenA.price / props.tokenB.price
  const calculatedAmount = (parseFloat(tokenAAmount.value) * ratio).toFixed(6)
  tokenBAmount.value = calculatedAmount
  updateInProgress.value = false
}

const updateTokenAFromB = () => {
  if (updateInProgress.value || !tokenBAmount.value) return

  updateInProgress.value = true
  const ratio = props.tokenB.price / props.tokenA.price
  const calculatedAmount = (parseFloat(tokenBAmount.value) * ratio).toFixed(6)
  tokenAAmount.value = calculatedAmount
  updateInProgress.value = false
}

const setRemovePercentage = (percentage) => {
  removePercentage.value = percentage
  updateRemoveAmounts()
}

const updateRemoveAmounts = () => {
  // This would typically trigger recalculation of remove amounts
}

const calculateLPTokens = () => {
  // Simplified calculation - real implementation would use pool math
  const totalValue = getTotalValue()
  return (totalValue / 100).toFixed(4) // Placeholder calculation
}

const calculatePoolShare = () => {
  const totalValue = getTotalValue()
  const poolTVL = parseFloat(props.poolStats.tvl?.replace(/[,$M]/g, '') || '1000') * 1000000
  return ((totalValue / poolTVL) * 100).toFixed(4)
}

const getTotalValue = () => {
  const valueA = parseFloat(tokenAAmount.value || '0') * props.tokenA.price
  const valueB = parseFloat(tokenBAmount.value || '0') * props.tokenB.price
  return valueA + valueB
}

const calculateRemoveTokenA = () => {
  const percentage = removePercentage.value / 100
  return (parseFloat(props.userTokenAInPool || '0') * percentage).toFixed(6)
}

const calculateRemoveTokenB = () => {
  const percentage = removePercentage.value / 100
  return (parseFloat(props.userTokenBInPool || '0') * percentage).toFixed(6)
}

const calculateRemoveValue = () => {
  const percentage = removePercentage.value / 100
  return parseFloat(props.userLiquidityValue || '0') * percentage
}

const calculateMinimumLP = () => {
  const lpTokens = parseFloat(calculateLPTokens())
  const slippage = parseFloat(props.slippageTolerance || '0.5') / 100
  return (lpTokens * (1 - slippage)).toFixed(4)
}

const handleAction = () => {
  if (activeTab.value === 'add') {
    emit('add-liquidity', {
      tokenA: {
        ...props.tokenA,
        amount: tokenAAmount.value
      },
      tokenB: {
        ...props.tokenB,
        amount: tokenBAmount.value
      },
      expectedLP: calculateLPTokens(),
      totalValue: getTotalValue()
    })
  } else {
    emit('remove-liquidity', {
      percentage: removePercentage.value,
      tokenA: {
        ...props.tokenA,
        amount: calculateRemoveTokenA()
      },
      tokenB: {
        ...props.tokenB,
        amount: calculateRemoveTokenB()
      },
      value: calculateRemoveValue()
    })
  }
}

const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  }).format(value)
}
</script>