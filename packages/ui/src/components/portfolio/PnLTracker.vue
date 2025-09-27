<template>
  <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
    <!-- Header -->
    <div class="p-6 border-b border-gray-200 dark:border-gray-700">
      <div class="flex items-center justify-between mb-4">
        <div>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
            {{ title || 'P&L Tracker' }}
          </h2>
          <p v-if="subtitle" class="text-gray-600 dark:text-gray-300 mt-1">
            {{ subtitle }}
          </p>
        </div>
        <div class="flex items-center gap-3">
          <select
            v-model="selectedPeriod"
            @change="$emit('period-change', selectedPeriod)"
            class="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
          >
            <option value="today">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="quarter">This Quarter</option>
            <option value="year">This Year</option>
            <option value="all">All Time</option>
          </select>
          <button
            v-if="showTaxReport"
            @click="$emit('generate-tax-report')"
            class="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm"
          >
            Tax Report
          </button>
        </div>
      </div>

      <!-- Summary Cards -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div class="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
          <div class="text-sm text-gray-500 dark:text-gray-400 mb-1">Total P&L</div>
          <div
            :class="[
              'text-xl font-bold',
              totalPnL >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
            ]"
          >
            {{ totalPnL >= 0 ? '+' : '' }}${{ Math.abs(totalPnL).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}
          </div>
          <div
            :class="[
              'text-sm',
              totalPnLPercent >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
            ]"
          >
            {{ totalPnLPercent >= 0 ? '+' : '' }}{{ totalPnLPercent.toFixed(2) }}%
          </div>
        </div>

        <div class="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
          <div class="text-sm text-gray-500 dark:text-gray-400 mb-1">Realized P&L</div>
          <div
            :class="[
              'text-xl font-bold',
              realizedPnL >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
            ]"
          >
            {{ realizedPnL >= 0 ? '+' : '' }}${{ Math.abs(realizedPnL).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}
          </div>
          <div class="text-sm text-gray-500 dark:text-gray-400">
            {{ realizedTransactions }} transactions
          </div>
        </div>

        <div class="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
          <div class="text-sm text-gray-500 dark:text-gray-400 mb-1">Unrealized P&L</div>
          <div
            :class="[
              'text-xl font-bold',
              unrealizedPnL >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
            ]"
          >
            {{ unrealizedPnL >= 0 ? '+' : '' }}${{ Math.abs(unrealizedPnL).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}
          </div>
          <div class="text-sm text-gray-500 dark:text-gray-400">
            Current positions
          </div>
        </div>

        <div class="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
          <div class="text-sm text-gray-500 dark:text-gray-400 mb-1">Tax Liability</div>
          <div class="text-xl font-bold text-gray-900 dark:text-white">
            ${{ taxLiability.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}
          </div>
          <div class="text-sm text-gray-500 dark:text-gray-400">
            Estimated
          </div>
        </div>
      </div>
    </div>

    <!-- Filters -->
    <div class="p-6 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
      <div class="flex flex-wrap items-center gap-4">
        <div class="flex items-center gap-2">
          <label class="text-sm font-medium text-gray-700 dark:text-gray-300">Asset:</label>
          <select
            v-model="selectedAsset"
            @change="$emit('asset-filter', selectedAsset)"
            class="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
          >
            <option value="">All Assets</option>
            <option v-for="asset in availableAssets" :key="asset" :value="asset">
              {{ asset }}
            </option>
          </select>
        </div>

        <div class="flex items-center gap-2">
          <label class="text-sm font-medium text-gray-700 dark:text-gray-300">Type:</label>
          <select
            v-model="selectedType"
            @change="$emit('type-filter', selectedType)"
            class="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
          >
            <option value="">All Types</option>
            <option value="realized">Realized</option>
            <option value="unrealized">Unrealized</option>
          </select>
        </div>

        <div class="flex items-center gap-2">
          <label class="text-sm font-medium text-gray-700 dark:text-gray-300">Min Amount:</label>
          <input
            type="number"
            v-model="minAmount"
            @input="$emit('amount-filter', { min: minAmount, max: maxAmount })"
            placeholder="0"
            class="w-20 px-2 py-1 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
          />
        </div>

        <button
          @click="clearFilters"
          class="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
        >
          Clear Filters
        </button>
      </div>
    </div>

    <!-- P&L Transactions -->
    <div class="p-6">
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
          Recent P&L Transactions
        </h3>
        <div class="flex items-center gap-2">
          <button
            @click="$emit('export-pnl')"
            class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300 flex items-center gap-1"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
            Export
          </button>
        </div>
      </div>

      <div class="space-y-3">
        <div
          v-for="transaction in paginatedTransactions"
          :key="transaction.id"
          class="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
        >
          <div class="flex items-center gap-4">
            <div class="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-medium">
              {{ transaction.asset.charAt(0) }}
            </div>
            <div>
              <div class="font-medium text-gray-900 dark:text-white">
                {{ transaction.type }} {{ transaction.asset }}
              </div>
              <div class="text-sm text-gray-500 dark:text-gray-400">
                {{ formatDate(transaction.date) }}
              </div>
            </div>
          </div>

          <div class="text-right">
            <div class="flex items-center gap-4">
              <div class="text-right">
                <div class="text-sm text-gray-500 dark:text-gray-400">Amount</div>
                <div class="font-medium text-gray-900 dark:text-white">
                  {{ transaction.amount }} {{ transaction.asset }}
                </div>
              </div>

              <div class="text-right">
                <div class="text-sm text-gray-500 dark:text-gray-400">Entry Price</div>
                <div class="font-medium text-gray-900 dark:text-white">
                  ${{ transaction.entryPrice.toFixed(2) }}
                </div>
              </div>

              <div class="text-right">
                <div class="text-sm text-gray-500 dark:text-gray-400">Exit Price</div>
                <div class="font-medium text-gray-900 dark:text-white">
                  {{ transaction.exitPrice ? `$${transaction.exitPrice.toFixed(2)}` : 'N/A' }}
                </div>
              </div>

              <div class="text-right min-w-[100px]">
                <div class="text-sm text-gray-500 dark:text-gray-400">P&L</div>
                <div
                  :class="[
                    'font-semibold',
                    transaction.pnl >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                  ]"
                >
                  {{ transaction.pnl >= 0 ? '+' : '' }}${{ Math.abs(transaction.pnl).toFixed(2) }}
                </div>
                <div
                  :class="[
                    'text-xs',
                    transaction.pnlPercent >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                  ]"
                >
                  {{ transaction.pnlPercent >= 0 ? '+' : '' }}{{ transaction.pnlPercent.toFixed(1) }}%
                </div>
              </div>

              <div class="text-right">
                <span
                  :class="[
                    'px-2 py-1 text-xs font-medium rounded-full',
                    transaction.status === 'realized'
                      ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                  ]"
                >
                  {{ transaction.status }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Pagination -->
      <div v-if="showPagination" class="flex items-center justify-between mt-6">
        <div class="text-sm text-gray-500 dark:text-gray-400">
          Showing {{ startIndex + 1 }}-{{ Math.min(endIndex, filteredTransactions.length) }} of {{ filteredTransactions.length }} transactions
        </div>
        <div class="flex items-center gap-2">
          <button
            @click="prevPage"
            :disabled="currentPage === 1"
            class="px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <span class="px-3 py-1 text-sm text-gray-900 dark:text-white">
            {{ currentPage }} / {{ totalPages }}
          </span>
          <button
            @click="nextPage"
            :disabled="currentPage === totalPages"
            class="px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>
    </div>

    <!-- Tax Information -->
    <div v-if="showTaxInfo" class="p-6 border-t border-gray-200 dark:border-gray-700 bg-yellow-50 dark:bg-yellow-900/20">
      <div class="flex items-start gap-3">
        <svg class="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
        </svg>
        <div>
          <div class="font-medium text-yellow-800 dark:text-yellow-200 mb-1">
            Tax Information
          </div>
          <div class="text-sm text-yellow-700 dark:text-yellow-300">
            Tax calculations are estimates based on {{ taxMethod }} method.
            Consult a tax professional for accurate reporting.
            {{ taxYear }} tax year shown.
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
    default: 'P&L Tracker'
  },
  subtitle: {
    type: String,
    default: ''
  },
  totalPnL: {
    type: Number,
    default: 0
  },
  totalPnLPercent: {
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
  realizedTransactions: {
    type: Number,
    default: 0
  },
  taxLiability: {
    type: Number,
    default: 0
  },
  transactions: {
    type: Array,
    default: () => []
  },
  availableAssets: {
    type: Array,
    default: () => []
  },
  showTaxReport: {
    type: Boolean,
    default: true
  },
  showTaxInfo: {
    type: Boolean,
    default: true
  },
  showPagination: {
    type: Boolean,
    default: true
  },
  taxMethod: {
    type: String,
    default: 'FIFO'
  },
  taxYear: {
    type: String,
    default: new Date().getFullYear().toString()
  },
  itemsPerPage: {
    type: Number,
    default: 10
  }
})

const emit = defineEmits([
  'period-change',
  'asset-filter',
  'type-filter',
  'amount-filter',
  'export-pnl',
  'generate-tax-report'
])

const selectedPeriod = ref('month')
const selectedAsset = ref('')
const selectedType = ref('')
const minAmount = ref('')
const maxAmount = ref('')
const currentPage = ref(1)

const filteredTransactions = computed(() => {
  let filtered = props.transactions

  if (selectedAsset.value) {
    filtered = filtered.filter(tx => tx.asset === selectedAsset.value)
  }

  if (selectedType.value) {
    filtered = filtered.filter(tx => tx.status === selectedType.value)
  }

  if (minAmount.value) {
    filtered = filtered.filter(tx => Math.abs(tx.pnl) >= parseFloat(minAmount.value))
  }

  return filtered.sort((a, b) => new Date(b.date) - new Date(a.date))
})

const totalPages = computed(() => {
  return Math.ceil(filteredTransactions.value.length / props.itemsPerPage)
})

const startIndex = computed(() => {
  return (currentPage.value - 1) * props.itemsPerPage
})

const endIndex = computed(() => {
  return startIndex.value + props.itemsPerPage
})

const paginatedTransactions = computed(() => {
  return filteredTransactions.value.slice(startIndex.value, endIndex.value)
})

const clearFilters = () => {
  selectedAsset.value = ''
  selectedType.value = ''
  minAmount.value = ''
  maxAmount.value = ''
  currentPage.value = 1
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}
</script>