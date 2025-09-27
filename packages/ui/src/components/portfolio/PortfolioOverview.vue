<template>
  <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
    <!-- Header -->
    <div class="p-6 border-b border-gray-200 dark:border-gray-700">
      <div class="flex items-center justify-between mb-4">
        <div>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
            {{ title || 'Portfolio Overview' }}
          </h2>
          <p v-if="subtitle" class="text-gray-600 dark:text-gray-300 mt-1">
            {{ subtitle }}
          </p>
        </div>
        <div class="flex items-center gap-3">
          <select
            v-model="selectedTimeframe"
            @change="$emit('timeframe-change', selectedTimeframe)"
            class="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
          >
            <option value="24h">24H</option>
            <option value="7d">7D</option>
            <option value="30d">30D</option>
            <option value="90d">90D</option>
            <option value="1y">1Y</option>
            <option value="all">All</option>
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

      <!-- Total Portfolio Value -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="col-span-1 md:col-span-2">
          <div class="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            ${{ totalValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}
          </div>
          <div class="flex items-center gap-2">
            <div
              :class="[
                'flex items-center gap-1 text-sm font-medium',
                portfolioChange24h >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
              ]"
            >
              <svg v-if="portfolioChange24h >= 0" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 17l9.2-9.2M17 17V7H7"></path>
              </svg>
              <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 7l-9.2 9.2M7 7v10h10"></path>
              </svg>
              {{ portfolioChange24h >= 0 ? '+' : '' }}${{ Math.abs(portfolioChange24h).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}
              ({{ portfolioChangePercent >= 0 ? '+' : '' }}{{ portfolioChangePercent.toFixed(2) }}%)
            </div>
            <span class="text-sm text-gray-500 dark:text-gray-400">24h</span>
          </div>
        </div>

        <div class="flex flex-col justify-center">
          <div class="text-sm text-gray-500 dark:text-gray-400 mb-1">All-time High</div>
          <div class="text-lg font-semibold text-gray-900 dark:text-white">
            ${{ allTimeHigh.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}
          </div>
          <div class="text-xs text-gray-500 dark:text-gray-400">
            {{ formatDate(allTimeHighDate) }}
          </div>
        </div>
      </div>
    </div>

    <!-- Portfolio Chart -->
    <div v-if="showChart" class="p-6 border-b border-gray-200 dark:border-gray-700">
      <div class="h-64 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg flex items-center justify-center">
        <div class="text-center">
          <div class="text-lg font-medium text-gray-600 dark:text-gray-400 mb-2">
            Portfolio Chart
          </div>
          <div class="text-sm text-gray-500 dark:text-gray-500">
            Chart visualization would be rendered here using a charting library
          </div>
          <div class="mt-4 flex items-center justify-center gap-4 text-xs">
            <div class="flex items-center gap-1">
              <div class="w-3 h-3 bg-blue-500 rounded"></div>
              <span class="text-gray-600 dark:text-gray-400">Portfolio Value</span>
            </div>
            <div class="flex items-center gap-1">
              <div class="w-3 h-3 bg-green-500 rounded"></div>
              <span class="text-gray-600 dark:text-gray-400">Realized P&L</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Asset Breakdown -->
    <div class="p-6 border-b border-gray-200 dark:border-gray-700">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Asset Allocation
      </h3>

      <div class="space-y-4">
        <div
          v-for="asset in topAssets"
          :key="asset.symbol"
          class="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg"
        >
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-medium">
              {{ asset.symbol.charAt(0) }}
            </div>
            <div>
              <div class="font-medium text-gray-900 dark:text-white">
                {{ asset.symbol }}
              </div>
              <div class="text-sm text-gray-500 dark:text-gray-400">
                {{ asset.name }}
              </div>
            </div>
          </div>

          <div class="text-right">
            <div class="font-medium text-gray-900 dark:text-white">
              ${{ asset.value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}
            </div>
            <div class="text-sm text-gray-500 dark:text-gray-400">
              {{ asset.amount }} {{ asset.symbol }}
            </div>
          </div>

          <div class="text-right ml-4">
            <div class="text-sm font-medium text-gray-900 dark:text-white">
              {{ asset.percentage.toFixed(1) }}%
            </div>
            <div
              :class="[
                'text-sm',
                asset.change24h >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
              ]"
            >
              {{ asset.change24h >= 0 ? '+' : '' }}{{ asset.change24h.toFixed(2) }}%
            </div>
          </div>
        </div>
      </div>

      <button
        v-if="showViewAll"
        @click="$emit('view-all-assets')"
        class="w-full mt-4 py-2 text-sm text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
      >
        View All Assets ({{ totalAssets }})
      </button>
    </div>

    <!-- Performance Metrics -->
    <div class="p-6 border-b border-gray-200 dark:border-gray-700">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Performance Metrics
      </h3>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="text-center p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
          <div class="text-sm text-gray-500 dark:text-gray-400 mb-1">Total P&L</div>
          <div
            :class="[
              'text-lg font-semibold',
              totalPnL >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
            ]"
          >
            {{ totalPnL >= 0 ? '+' : '' }}${{ Math.abs(totalPnL).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}
          </div>
        </div>

        <div class="text-center p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
          <div class="text-sm text-gray-500 dark:text-gray-400 mb-1">Realized P&L</div>
          <div
            :class="[
              'text-lg font-semibold',
              realizedPnL >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
            ]"
          >
            {{ realizedPnL >= 0 ? '+' : '' }}${{ Math.abs(realizedPnL).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}
          </div>
        </div>

        <div class="text-center p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
          <div class="text-sm text-gray-500 dark:text-gray-400 mb-1">Unrealized P&L</div>
          <div
            :class="[
              'text-lg font-semibold',
              unrealizedPnL >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
            ]"
          >
            {{ unrealizedPnL >= 0 ? '+' : '' }}${{ Math.abs(unrealizedPnL).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}
          </div>
        </div>

        <div class="text-center p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
          <div class="text-sm text-gray-500 dark:text-gray-400 mb-1">Best Performer</div>
          <div class="text-lg font-semibold text-gray-900 dark:text-white">
            {{ bestPerformer.symbol }}
          </div>
          <div class="text-sm text-green-600 dark:text-green-400">
            +{{ bestPerformer.change.toFixed(2) }}%
          </div>
        </div>
      </div>
    </div>

    <!-- Protocol Breakdown -->
    <div v-if="protocolBreakdown && protocolBreakdown.length > 0" class="p-6 border-b border-gray-200 dark:border-gray-700">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Protocol Breakdown
      </h3>

      <div class="space-y-3">
        <div
          v-for="protocol in protocolBreakdown"
          :key="protocol.name"
          class="flex items-center justify-between"
        >
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white text-sm font-medium">
              {{ protocol.name.charAt(0) }}
            </div>
            <div>
              <div class="font-medium text-gray-900 dark:text-white">
                {{ protocol.name }}
              </div>
              <div class="text-sm text-gray-500 dark:text-gray-400">
                {{ protocol.type }}
              </div>
            </div>
          </div>

          <div class="text-right">
            <div class="font-medium text-gray-900 dark:text-white">
              ${{ protocol.value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}
            </div>
            <div class="text-sm text-gray-500 dark:text-gray-400">
              {{ protocol.percentage.toFixed(1) }}%
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Action Buttons -->
    <div class="p-6">
      <div class="flex flex-col sm:flex-row gap-3">
        <button
          @click="$emit('export-portfolio')"
          class="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
          Export Portfolio
        </button>

        <button
          @click="$emit('view-analytics')"
          class="flex-1 sm:flex-none border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium py-3 px-6 rounded-lg transition-colors"
        >
          View Analytics
        </button>

        <button
          @click="$emit('view-transactions')"
          class="flex-1 sm:flex-none border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium py-3 px-6 rounded-lg transition-colors"
        >
          Transactions
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: 'Portfolio Overview'
  },
  subtitle: {
    type: String,
    default: ''
  },
  totalValue: {
    type: Number,
    required: true
  },
  portfolioChange24h: {
    type: Number,
    default: 0
  },
  allTimeHigh: {
    type: Number,
    default: 0
  },
  allTimeHighDate: {
    type: String,
    default: null
  },
  assets: {
    type: Array,
    default: () => []
  },
  totalPnL: {
    type: Number,
    default: 0
  },
  realizedPnL: {
    type: Number,
    default: 0
  },
  unrealizedPnL: {
    type: Number,
    default: 0
  },
  bestPerformer: {
    type: Object,
    default: () => ({ symbol: 'N/A', change: 0 })
  },
  protocolBreakdown: {
    type: Array,
    default: () => []
  },
  showChart: {
    type: Boolean,
    default: true
  },
  showViewAll: {
    type: Boolean,
    default: true
  },
  loading: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits([
  'timeframe-change',
  'refresh',
  'view-all-assets',
  'export-portfolio',
  'view-analytics',
  'view-transactions'
])

const selectedTimeframe = ref('24h')

const portfolioChangePercent = computed(() => {
  if (props.totalValue === 0) return 0
  return (props.portfolioChange24h / (props.totalValue - props.portfolioChange24h)) * 100
})

const topAssets = computed(() => {
  return props.assets
    .sort((a, b) => b.value - a.value)
    .slice(0, 5)
    .map(asset => ({
      ...asset,
      percentage: (asset.value / props.totalValue) * 100
    }))
})

const totalAssets = computed(() => {
  return props.assets.length
})

const formatDate = (dateString) => {
  if (!dateString) return 'N/A'
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}
</script>