<template>
  <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
    <!-- Header -->
    <div class="p-6 border-b border-gray-200 dark:border-gray-700">
      <div class="flex items-center justify-between mb-4">
        <div>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
            {{ title || 'Gas Tracker' }}
          </h2>
          <p v-if="subtitle" class="text-gray-600 dark:text-gray-300 mt-1">
            {{ subtitle }}
          </p>
        </div>
        <div class="flex items-center gap-3">
          <select
            v-model="selectedNetwork"
            @change="$emit('network-change', selectedNetwork)"
            class="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
          >
            <option v-for="network in networks" :key="network.id" :value="network.id">
              {{ network.name }}
            </option>
          </select>
          <button
            @click="$emit('refresh')"
            :disabled="loading"
            class="p-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <svg :class="loading ? 'animate-spin' : ''" class="w-4 h-4 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Current Gas Prices -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
          <div class="flex items-center justify-between mb-2">
            <div class="text-sm font-medium text-green-700 dark:text-green-300">Slow</div>
            <div class="text-xs text-green-600 dark:text-green-400">~{{ slowTime }} min</div>
          </div>
          <div class="text-2xl font-bold text-green-800 dark:text-green-200">
            {{ slowPrice }} gwei
          </div>
          <div class="text-sm text-green-600 dark:text-green-400">
            ~${{ calculateUSDCost(slowPrice).toFixed(2) }}
          </div>
        </div>

        <div class="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
          <div class="flex items-center justify-between mb-2">
            <div class="text-sm font-medium text-yellow-700 dark:text-yellow-300">Standard</div>
            <div class="text-xs text-yellow-600 dark:text-yellow-400">~{{ standardTime }} min</div>
          </div>
          <div class="text-2xl font-bold text-yellow-800 dark:text-yellow-200">
            {{ standardPrice }} gwei
          </div>
          <div class="text-sm text-yellow-600 dark:text-yellow-400">
            ~${{ calculateUSDCost(standardPrice).toFixed(2) }}
          </div>
        </div>

        <div class="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
          <div class="flex items-center justify-between mb-2">
            <div class="text-sm font-medium text-red-700 dark:text-red-300">Fast</div>
            <div class="text-xs text-red-600 dark:text-red-400">~{{ fastTime }} min</div>
          </div>
          <div class="text-2xl font-bold text-red-800 dark:text-red-200">
            {{ fastPrice }} gwei
          </div>
          <div class="text-sm text-red-600 dark:text-red-400">
            ~${{ calculateUSDCost(fastPrice).toFixed(2) }}
          </div>
        </div>
      </div>
    </div>

    <!-- Gas Price Chart -->
    <div v-if="showChart" class="p-6 border-b border-gray-200 dark:border-gray-700">
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
          Gas Price History
        </h3>
        <div class="flex items-center gap-2">
          <button
            v-for="timeframe in chartTimeframes"
            :key="timeframe.value"
            @click="selectedChartTimeframe = timeframe.value"
            :class="[
              'px-3 py-1 text-sm rounded',
              selectedChartTimeframe === timeframe.value
                ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
            ]"
          >
            {{ timeframe.label }}
          </button>
        </div>
      </div>

      <div class="h-48 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg flex items-center justify-center">
        <div class="text-center">
          <div class="text-lg font-medium text-gray-600 dark:text-gray-400 mb-2">
            Gas Price Chart
          </div>
          <div class="text-sm text-gray-500 dark:text-gray-500">
            Interactive gas price chart would be rendered here
          </div>
          <div class="mt-4 flex items-center justify-center gap-4 text-xs">
            <div class="flex items-center gap-1">
              <div class="w-3 h-3 bg-green-500 rounded"></div>
              <span class="text-gray-600 dark:text-gray-400">Slow</span>
            </div>
            <div class="flex items-center gap-1">
              <div class="w-3 h-3 bg-yellow-500 rounded"></div>
              <span class="text-gray-600 dark:text-gray-400">Standard</span>
            </div>
            <div class="flex items-center gap-1">
              <div class="w-3 h-3 bg-red-500 rounded"></div>
              <span class="text-gray-600 dark:text-gray-400">Fast</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Gas Calculator -->
    <div class="p-6 border-b border-gray-200 dark:border-gray-700">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Gas Calculator
      </h3>

      <div class="space-y-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Transaction Type
            </label>
            <select
              v-model="selectedTxType"
              @change="updateGasEstimate"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option v-for="txType in transactionTypes" :key="txType.type" :value="txType.type">
                {{ txType.name }} (~{{ txType.gasLimit.toLocaleString() }} gas)
              </option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Custom Gas Limit
            </label>
            <input
              type="number"
              v-model="customGasLimit"
              @input="updateGasEstimate"
              placeholder="21000"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
        </div>

        <!-- Gas Cost Estimates -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <div class="text-sm text-gray-500 dark:text-gray-400 mb-1">Slow</div>
            <div class="font-semibold text-gray-900 dark:text-white">
              ${{ calculateTxCost(slowPrice).toFixed(4) }}
            </div>
            <div class="text-xs text-gray-500 dark:text-gray-400">
              {{ (slowPrice * effectiveGasLimit / 1e9).toFixed(6) }} {{ currentNetwork.nativeCurrency }}
            </div>
          </div>

          <div class="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <div class="text-sm text-gray-500 dark:text-gray-400 mb-1">Standard</div>
            <div class="font-semibold text-gray-900 dark:text-white">
              ${{ calculateTxCost(standardPrice).toFixed(4) }}
            </div>
            <div class="text-xs text-gray-500 dark:text-gray-400">
              {{ (standardPrice * effectiveGasLimit / 1e9).toFixed(6) }} {{ currentNetwork.nativeCurrency }}
            </div>
          </div>

          <div class="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <div class="text-sm text-gray-500 dark:text-gray-400 mb-1">Fast</div>
            <div class="font-semibold text-gray-900 dark:text-white">
              ${{ calculateTxCost(fastPrice).toFixed(4) }}
            </div>
            <div class="text-xs text-gray-500 dark:text-gray-400">
              {{ (fastPrice * effectiveGasLimit / 1e9).toFixed(6) }} {{ currentNetwork.nativeCurrency }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Gas Alerts -->
    <div v-if="showAlerts" class="p-6 border-b border-gray-200 dark:border-gray-700">
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
          Gas Price Alerts
        </h3>
        <button
          @click="$emit('manage-alerts')"
          class="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
        >
          Manage Alerts
        </button>
      </div>

      <div class="space-y-3">
        <div
          v-for="alert in gasAlerts"
          :key="alert.id"
          class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900 rounded-lg"
        >
          <div class="flex items-center gap-3">
            <div
              :class="[
                'w-3 h-3 rounded-full',
                alert.active ? 'bg-green-500' : 'bg-gray-400'
              ]"
            ></div>
            <div>
              <div class="font-medium text-gray-900 dark:text-white">
                {{ alert.type === 'below' ? 'Alert when below' : 'Alert when above' }} {{ alert.threshold }} gwei
              </div>
              <div class="text-sm text-gray-500 dark:text-gray-400">
                {{ alert.network }} • {{ alert.speed }} speed
              </div>
            </div>
          </div>

          <div class="flex items-center gap-2">
            <span
              :class="[
                'px-2 py-1 text-xs font-medium rounded-full',
                alert.active
                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                  : 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
              ]"
            >
              {{ alert.active ? 'Active' : 'Inactive' }}
            </span>
            <button
              @click="$emit('toggle-alert', alert.id)"
              class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300"
            >
              Toggle
            </button>
          </div>
        </div>
      </div>

      <button
        @click="$emit('create-alert')"
        class="w-full mt-4 py-2 text-sm text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors border border-dashed border-blue-300 dark:border-blue-600"
      >
        + Create New Alert
      </button>
    </div>

    <!-- Network Info -->
    <div class="p-6">
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
          Network Information
        </h3>
        <div class="text-sm text-gray-500 dark:text-gray-400">
          Last updated: {{ formatTime(lastUpdated) }}
        </div>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div>
          <div class="text-sm text-gray-500 dark:text-gray-400 mb-1">Block Number</div>
          <div class="font-semibold text-gray-900 dark:text-white">
            {{ currentNetwork.blockNumber?.toLocaleString() || 'N/A' }}
          </div>
        </div>

        <div>
          <div class="text-sm text-gray-500 dark:text-gray-400 mb-1">Block Time</div>
          <div class="font-semibold text-gray-900 dark:text-white">
            {{ currentNetwork.blockTime || 'N/A' }}s
          </div>
        </div>

        <div>
          <div class="text-sm text-gray-500 dark:text-gray-400 mb-1">Base Fee</div>
          <div class="font-semibold text-gray-900 dark:text-white">
            {{ currentNetwork.baseFee || 'N/A' }} gwei
          </div>
        </div>

        <div>
          <div class="text-sm text-gray-500 dark:text-gray-400 mb-1">Network Load</div>
          <div class="font-semibold text-gray-900 dark:text-white">
            {{ currentNetwork.networkLoad || 'N/A' }}%
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: 'Gas Tracker'
  },
  subtitle: {
    type: String,
    default: ''
  },
  networks: {
    type: Array,
    required: true
  },
  slowPrice: {
    type: Number,
    required: true
  },
  standardPrice: {
    type: Number,
    required: true
  },
  fastPrice: {
    type: Number,
    required: true
  },
  slowTime: {
    type: Number,
    default: 5
  },
  standardTime: {
    type: Number,
    default: 3
  },
  fastTime: {
    type: Number,
    default: 1
  },
  nativeTokenPrice: {
    type: Number,
    default: 2500
  },
  transactionTypes: {
    type: Array,
    default: () => [
      { type: 'transfer', name: 'ETH Transfer', gasLimit: 21000 },
      { type: 'erc20', name: 'ERC-20 Transfer', gasLimit: 65000 },
      { type: 'swap', name: 'DEX Swap', gasLimit: 150000 },
      { type: 'nft', name: 'NFT Transfer', gasLimit: 85000 }
    ]
  },
  gasAlerts: {
    type: Array,
    default: () => []
  },
  showChart: {
    type: Boolean,
    default: true
  },
  showAlerts: {
    type: Boolean,
    default: true
  },
  loading: {
    type: Boolean,
    default: false
  },
  lastUpdated: {
    type: String,
    default: () => new Date().toISOString()
  }
})

const emit = defineEmits([
  'network-change',
  'refresh',
  'manage-alerts',
  'toggle-alert',
  'create-alert'
])

const selectedNetwork = ref(props.networks[0]?.id || 'ethereum')
const selectedChartTimeframe = ref('24h')
const selectedTxType = ref('transfer')
const customGasLimit = ref('')

const chartTimeframes = [
  { value: '1h', label: '1H' },
  { value: '24h', label: '24H' },
  { value: '7d', label: '7D' },
  { value: '30d', label: '30D' }
]

const currentNetwork = computed(() => {
  return props.networks.find(n => n.id === selectedNetwork.value) || props.networks[0] || {}
})

const effectiveGasLimit = computed(() => {
  if (customGasLimit.value) {
    return parseInt(customGasLimit.value)
  }
  const txType = props.transactionTypes.find(t => t.type === selectedTxType.value)
  return txType?.gasLimit || 21000
})

const calculateUSDCost = (gasPrice) => {
  // Standard transfer cost (21,000 gas)
  const gasCost = (gasPrice * 21000) / 1e9 // Convert to ETH
  return gasCost * props.nativeTokenPrice
}

const calculateTxCost = (gasPrice) => {
  const gasCost = (gasPrice * effectiveGasLimit.value) / 1e9 // Convert to ETH
  return gasCost * props.nativeTokenPrice
}

const updateGasEstimate = () => {
  // This would trigger recalculation of gas estimates
  // In a real implementation, this might call an API
}

const formatTime = (timestamp) => {
  return new Date(timestamp).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  })
}
</script>