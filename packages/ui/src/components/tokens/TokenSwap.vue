<template>
  <div :class="['token-swap', className]">
    <div class="rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <!-- Header -->
      <div class="mb-4 flex items-center justify-between">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
          {{ title || 'Swap' }}
        </h3>
        <button
          @click="showSettings = !showSettings"
          class="rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
        >
          <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </button>
      </div>

      <!-- Settings Panel -->
      <div
        v-if="showSettings"
        class="mb-4 rounded-lg bg-gray-50 p-3 dark:bg-gray-900/50"
      >
        <div class="space-y-3">
          <div>
            <label class="mb-1 block text-xs font-medium text-gray-700 dark:text-gray-300">
              Slippage Tolerance
            </label>
            <div class="flex space-x-2">
              <button
                v-for="preset in slippagePresets"
                :key="preset"
                @click="slippage = preset"
                :class="[
                  'rounded px-3 py-1 text-sm font-medium transition-colors',
                  slippage === preset
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                ]"
              >
                {{ preset }}%
              </button>
              <input
                v-model.number="slippage"
                type="number"
                step="0.1"
                min="0"
                max="50"
                class="w-20 rounded border border-gray-300 px-2 py-1 text-sm focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                placeholder="Custom"
              />
            </div>
          </div>
          <div>
            <label class="mb-1 block text-xs font-medium text-gray-700 dark:text-gray-300">
              Transaction Deadline (minutes)
            </label>
            <input
              v-model.number="deadline"
              type="number"
              min="1"
              max="60"
              class="w-24 rounded border border-gray-300 px-3 py-1 text-sm focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            />
          </div>
        </div>
      </div>

      <!-- From Token -->
      <div class="mb-2">
        <div class="flex items-center justify-between mb-1">
          <label class="text-sm text-gray-600 dark:text-gray-400">From</label>
          <span class="text-xs text-gray-500 dark:text-gray-500">
            Balance: {{ fromBalance }}
          </span>
        </div>
        <div class="flex space-x-3 rounded-xl bg-gray-50 p-3 dark:bg-gray-900/50">
          <div class="flex-1">
            <input
              v-model="fromAmount"
              type="number"
              placeholder="0.0"
              class="w-full bg-transparent text-2xl font-medium text-gray-900 placeholder-gray-400 focus:outline-none dark:text-white"
              @input="calculateToAmount"
            />
            <div class="mt-1 text-sm text-gray-500 dark:text-gray-400">
              ≈ ${{ fromAmountUSD }}
            </div>
          </div>
          <button
            @click="selectFromToken"
            class="flex items-center space-x-2 rounded-lg bg-white px-3 py-2 transition-colors hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <Web3Icon
              v-if="fromToken.symbol"
              type="tokens"
              :symbol="fromToken.symbol"
              :size="24"
            />
            <span class="font-medium text-gray-900 dark:text-white">
              {{ fromToken.symbol || 'Select' }}
            </span>
            <svg class="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Swap Button -->
      <div class="flex justify-center py-2">
        <button
          @click="reverseTokens"
          class="rounded-full bg-gray-100 p-2 transition-all hover:bg-gray-200 hover:rotate-180 dark:bg-gray-700 dark:hover:bg-gray-600"
        >
          <svg class="h-5 w-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
          </svg>
        </button>
      </div>

      <!-- To Token -->
      <div class="mb-4">
        <div class="flex items-center justify-between mb-1">
          <label class="text-sm text-gray-600 dark:text-gray-400">To</label>
          <span class="text-xs text-gray-500 dark:text-gray-500">
            Balance: {{ toBalance }}
          </span>
        </div>
        <div class="flex space-x-3 rounded-xl bg-gray-50 p-3 dark:bg-gray-900/50">
          <div class="flex-1">
            <input
              v-model="toAmount"
              type="number"
              placeholder="0.0"
              class="w-full bg-transparent text-2xl font-medium text-gray-900 placeholder-gray-400 focus:outline-none dark:text-white"
              :disabled="!fromAmount"
              @input="calculateFromAmount"
            />
            <div class="mt-1 text-sm text-gray-500 dark:text-gray-400">
              ≈ ${{ toAmountUSD }}
            </div>
          </div>
          <button
            @click="selectToToken"
            class="flex items-center space-x-2 rounded-lg bg-white px-3 py-2 transition-colors hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <Web3Icon
              v-if="toToken.symbol"
              type="tokens"
              :symbol="toToken.symbol"
              :size="24"
            />
            <span class="font-medium text-gray-900 dark:text-white">
              {{ toToken.symbol || 'Select' }}
            </span>
            <svg class="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Swap Details -->
      <div
        v-if="fromAmount && toAmount && rate"
        class="mb-4 space-y-2 rounded-lg bg-gray-50 p-3 text-sm dark:bg-gray-900/50"
      >
        <div class="flex justify-between">
          <span class="text-gray-600 dark:text-gray-400">Rate</span>
          <span class="font-medium text-gray-900 dark:text-white">
            1 {{ fromToken.symbol }} = {{ rate }} {{ toToken.symbol }}
          </span>
        </div>
        <div class="flex justify-between">
          <span class="text-gray-600 dark:text-gray-400">Price Impact</span>
          <span :class="priceImpactClass">
            {{ priceImpact }}%
          </span>
        </div>
        <div class="flex justify-between">
          <span class="text-gray-600 dark:text-gray-400">Network Fee</span>
          <span class="font-medium text-gray-900 dark:text-white">
            ~${{ networkFee }}
          </span>
        </div>
        <div class="flex justify-between">
          <span class="text-gray-600 dark:text-gray-400">Route</span>
          <span class="font-medium text-gray-900 dark:text-white">
            {{ swapRoute }}
          </span>
        </div>
      </div>

      <!-- Action Button -->
      <button
        @click="handleSwap"
        :disabled="!canSwap"
        :class="[
          'w-full rounded-lg px-4 py-3 text-center font-semibold transition-colors',
          canSwap
            ? 'bg-blue-500 text-white hover:bg-blue-600'
            : 'bg-gray-200 text-gray-500 cursor-not-allowed dark:bg-gray-700 dark:text-gray-400'
        ]"
      >
        {{ swapButtonText }}
      </button>

      <!-- Powered By -->
      <div v-if="poweredBy" class="mt-3 text-center text-xs text-gray-500 dark:text-gray-400">
        Powered by {{ poweredBy }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import Web3Icon from '../common/Web3Icon.vue'

const props = defineProps({
  title: {
    type: String,
    default: 'Swap'
  },
  fromToken: {
    type: Object,
    default: () => ({
      symbol: 'ETH',
      name: 'Ethereum',
      balance: '10.5',
      price: 2500
    })
  },
  toToken: {
    type: Object,
    default: () => ({
      symbol: 'USDC',
      name: 'USD Coin',
      balance: '1000',
      price: 1
    })
  },
  defaultSlippage: {
    type: Number,
    default: 0.5
  },
  defaultDeadline: {
    type: Number,
    default: 20
  },
  rate: {
    type: Number,
    default: 2500
  },
  priceImpact: {
    type: Number,
    default: 0.05
  },
  networkFee: {
    type: String,
    default: '2.50'
  },
  poweredBy: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  className: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['swap', 'select-from-token', 'select-to-token', 'settings-change'])

const showSettings = ref(false)
const fromAmount = ref('')
const toAmount = ref('')
const slippage = ref(props.defaultSlippage)
const deadline = ref(props.defaultDeadline)

const slippagePresets = [0.1, 0.5, 1.0]

const fromBalance = computed(() => {
  return props.fromToken?.balance || '0'
})

const toBalance = computed(() => {
  return props.toToken?.balance || '0'
})

const fromAmountUSD = computed(() => {
  if (!fromAmount.value || !props.fromToken?.price) return '0.00'
  return (parseFloat(fromAmount.value) * props.fromToken.price).toFixed(2)
})

const toAmountUSD = computed(() => {
  if (!toAmount.value || !props.toToken?.price) return '0.00'
  return (parseFloat(toAmount.value) * props.toToken.price).toFixed(2)
})

const priceImpactClass = computed(() => {
  const impact = Math.abs(props.priceImpact)
  if (impact < 1) return 'text-green-600 dark:text-green-400'
  if (impact < 3) return 'text-yellow-600 dark:text-yellow-400'
  return 'text-red-600 dark:text-red-400'
})

const swapRoute = computed(() => {
  if (props.fromToken?.symbol && props.toToken?.symbol) {
    return `${props.fromToken.symbol} → ${props.toToken.symbol}`
  }
  return 'Direct'
})

const canSwap = computed(() => {
  return !props.disabled &&
    fromAmount.value &&
    toAmount.value &&
    parseFloat(fromAmount.value) > 0 &&
    parseFloat(toAmount.value) > 0 &&
    props.fromToken?.symbol &&
    props.toToken?.symbol &&
    parseFloat(fromAmount.value) <= parseFloat(fromBalance.value)
})

const swapButtonText = computed(() => {
  if (props.disabled) return 'Swap Disabled'
  if (!props.fromToken?.symbol || !props.toToken?.symbol) return 'Select Tokens'
  if (!fromAmount.value || parseFloat(fromAmount.value) === 0) return 'Enter Amount'
  if (parseFloat(fromAmount.value) > parseFloat(fromBalance.value)) return 'Insufficient Balance'
  return 'Swap'
})

const calculateToAmount = () => {
  if (fromAmount.value && props.rate) {
    toAmount.value = (parseFloat(fromAmount.value) * props.rate).toFixed(6)
  } else {
    toAmount.value = ''
  }
}

const calculateFromAmount = () => {
  if (toAmount.value && props.rate) {
    fromAmount.value = (parseFloat(toAmount.value) / props.rate).toFixed(6)
  }
}

const reverseTokens = () => {
  emit('swap', {
    type: 'reverse',
    fromToken: props.toToken,
    toToken: props.fromToken
  })
  const tempAmount = fromAmount.value
  fromAmount.value = toAmount.value
  toAmount.value = tempAmount
}

const selectFromToken = () => {
  emit('select-from-token')
}

const selectToToken = () => {
  emit('select-to-token')
}

const handleSwap = () => {
  if (!canSwap.value) return

  emit('swap', {
    type: 'execute',
    fromToken: props.fromToken,
    toToken: props.toToken,
    fromAmount: fromAmount.value,
    toAmount: toAmount.value,
    slippage: slippage.value,
    deadline: deadline.value
  })
}

watch([slippage, deadline], () => {
  emit('settings-change', {
    slippage: slippage.value,
    deadline: deadline.value
  })
})

watch(() => props.rate, () => {
  if (fromAmount.value) {
    calculateToAmount()
  }
})
</script>