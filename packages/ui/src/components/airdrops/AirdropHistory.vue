<template>
  <div :class="['airdrop-history', className]">
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
          </div>
          <div v-if="showRefresh" class="flex items-center space-x-2">
            <button
              @click="handleRefresh"
              :disabled="loading"
              class="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
            >
              <svg class="w-5 h-5" :class="{ 'animate-spin': loading }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Summary Stats -->
        <div v-if="showSummary && history.length > 0" class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div class="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
            <div class="text-2xl font-bold text-green-600 dark:text-green-400">
              {{ totalClaimed }}
            </div>
            <div class="text-sm text-green-700 dark:text-green-300">
              Total Claimed
            </div>
          </div>
          <div class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
            <div class="text-2xl font-bold text-blue-600 dark:text-blue-400">
              ${{ totalValue.toLocaleString() }}
            </div>
            <div class="text-sm text-blue-700 dark:text-blue-300">
              Total Value
            </div>
          </div>
          <div class="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
            <div class="text-2xl font-bold text-purple-600 dark:text-purple-400">
              {{ uniqueProtocols }}
            </div>
            <div class="text-sm text-purple-700 dark:text-purple-300">
              Protocols
            </div>
          </div>
        </div>

        <!-- Filters -->
        <div v-if="showFilters && history.length > 0" class="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div class="flex items-center space-x-2">
            <!-- Time filter -->
            <select
              v-model="timeFilter"
              class="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="all">All Time</option>
              <option value="7d">Last 7 Days</option>
              <option value="30d">Last 30 Days</option>
              <option value="90d">Last 90 Days</option>
              <option value="1y">This Year</option>
            </select>

            <!-- Chain filter -->
            <select
              v-if="showChainFilter"
              v-model="chainFilter"
              class="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="all">All Chains</option>
              <option v-for="chain in availableChains" :key="chain" :value="chain">
                {{ formatChainName(chain) }}
              </option>
            </select>

            <!-- Search -->
            <div v-if="showSearch" class="relative">
              <input
                v-model="searchQuery"
                placeholder="Search protocols..."
                class="pl-8 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white w-48"
              />
              <svg class="w-4 h-4 text-gray-400 absolute left-2.5 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          <!-- Sort -->
          <div class="flex items-center space-x-2">
            <label class="text-sm text-gray-700 dark:text-gray-300">Sort:</label>
            <select
              v-model="sortBy"
              class="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="date">Date (Newest First)</option>
              <option value="value">Value (High to Low)</option>
              <option value="protocol">Protocol Name</option>
              <option value="amount">Amount</option>
            </select>
          </div>
        </div>

        <!-- History List -->
        <div v-if="filteredHistory.length > 0" class="space-y-4">
          <div
            v-for="(item, index) in paginatedHistory"
            :key="item.id || index"
            class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200"
          >
            <div class="flex items-center justify-between">
              <!-- Airdrop Info -->
              <div class="flex items-center space-x-4">
                <!-- Project Icon -->
                <div v-if="item.icon" :class="[
                  'w-12 h-12 rounded-full flex items-center justify-center text-white font-bold',
                  item.iconBg || 'bg-gradient-to-r from-blue-500 to-purple-600'
                ]">
                  <img v-if="item.icon.startsWith('http')" :src="item.icon" :alt="item.project" class="w-12 h-12 rounded-full" />
                  <span v-else class="text-sm">{{ item.icon }}</span>
                </div>
                <div v-else :class="[
                  'w-12 h-12 rounded-full flex items-center justify-center text-white font-bold',
                  item.iconBg || 'bg-gradient-to-r from-blue-500 to-purple-600'
                ]">
                  {{ item.project.slice(0, 2).toUpperCase() }}
                </div>

                <!-- Details -->
                <div>
                  <h3 class="font-semibold text-gray-900 dark:text-white flex items-center space-x-2">
                    <span>{{ item.project }}</span>
                    <span v-if="item.chain" :class="[
                      'px-2 py-1 text-xs rounded',
                      getChainClasses(item.chain)
                    ]">
                      {{ formatChainName(item.chain) }}
                    </span>
                  </h3>
                  <div class="flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-400 mt-1">
                    <span class="font-medium">
                      {{ item.amount }} {{ item.token }}
                    </span>
                    <span v-if="item.usdValue" class="text-green-600 dark:text-green-400">
                      ${{ item.usdValue }}
                    </span>
                    <span class="text-xs">
                      {{ formatDate(item.claimedAt) }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- Actions -->
              <div class="flex items-center space-x-2">
                <!-- Transaction Hash -->
                <button
                  v-if="item.txHash && showTxLinks"
                  @click="handleViewTransaction(item)"
                  class="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  title="View Transaction"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </button>

                <!-- Status -->
                <div :class="[
                  'px-3 py-1 rounded-full text-xs font-medium',
                  getStatusClasses(item.status)
                ]">
                  {{ formatStatus(item.status) }}
                </div>
              </div>
            </div>

            <!-- Additional Info -->
            <div v-if="showDetails && (item.description || item.tags)" class="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
              <p v-if="item.description" class="text-sm text-gray-600 dark:text-gray-400 mb-2">
                {{ item.description }}
              </p>
              <div v-if="item.tags && item.tags.length > 0" class="flex flex-wrap gap-2">
                <span
                  v-for="tag in item.tags"
                  :key="tag"
                  class="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Pagination -->
        <div v-if="showPagination && totalPages > 1" class="mt-6 flex justify-center">
          <nav class="flex items-center space-x-2">
            <button
              @click="currentPage = Math.max(1, currentPage - 1)"
              :disabled="currentPage === 1"
              class="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              Previous
            </button>
            <span class="px-4 py-2 text-sm text-gray-600 dark:text-gray-400">
              Page {{ currentPage }} of {{ totalPages }}
            </span>
            <button
              @click="currentPage = Math.min(totalPages, currentPage + 1)"
              :disabled="currentPage === totalPages"
              class="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              Next
            </button>
          </nav>
        </div>

        <!-- Loading State -->
        <div v-if="loading" class="space-y-4">
          <div v-for="n in 5" :key="n" class="animate-pulse">
            <div class="flex items-center space-x-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div class="w-12 h-12 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
              <div class="flex-1 space-y-2">
                <div class="w-32 h-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
                <div class="w-48 h-3 bg-gray-300 dark:bg-gray-600 rounded"></div>
              </div>
              <div class="w-20 h-6 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-else-if="history.length === 0" class="text-center py-12">
          <div class="w-16 h-16 mx-auto mb-4 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
            <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
            {{ emptyTitle }}
          </h3>
          <p class="text-gray-600 dark:text-gray-400 mb-6">
            {{ emptyDescription }}
          </p>
          <button
            v-if="showCheckAirdrops"
            @click="$emit('check-airdrops')"
            class="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-medium transition-colors"
          >
            Check for Airdrops
          </button>
        </div>

        <!-- Export Actions -->
        <div v-if="showExport && history.length > 0" class="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
          <div class="flex justify-between items-center">
            <div class="text-sm text-gray-600 dark:text-gray-400">
              {{ filteredHistory.length }} {{ filteredHistory.length === 1 ? 'record' : 'records' }} found
            </div>
            <div class="flex items-center space-x-2">
              <button
                @click="exportToCSV"
                class="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                📊 Export CSV
              </button>
              <button
                @click="exportToJSON"
                class="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                📄 Export JSON
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  // Content
  title: {
    type: String,
    default: 'Airdrop History'
  },
  subtitle: {
    type: String,
    default: 'Track your claimed airdrops and their value over time'
  },

  // Data
  history: {
    type: Array,
    default: () => []
  },

  // UI Options
  showSummary: {
    type: Boolean,
    default: true
  },
  showFilters: {
    type: Boolean,
    default: true
  },
  showChainFilter: {
    type: Boolean,
    default: true
  },
  showSearch: {
    type: Boolean,
    default: true
  },
  showDetails: {
    type: Boolean,
    default: true
  },
  showTxLinks: {
    type: Boolean,
    default: true
  },
  showPagination: {
    type: Boolean,
    default: true
  },
  showRefresh: {
    type: Boolean,
    default: true
  },
  showExport: {
    type: Boolean,
    default: true
  },
  showCheckAirdrops: {
    type: Boolean,
    default: true
  },

  // Pagination
  itemsPerPage: {
    type: Number,
    default: 10
  },

  // States
  loading: {
    type: Boolean,
    default: false
  },

  // Empty state
  emptyTitle: {
    type: String,
    default: 'No Airdrop History'
  },
  emptyDescription: {
    type: String,
    default: 'Your claimed airdrops will appear here once you start claiming them.'
  },

  // Styling
  className: {
    type: String,
    default: ''
  }
})

const emit = defineEmits([
  'refresh',
  'view-transaction',
  'check-airdrops',
  'export-csv',
  'export-json'
])

// Local state
const timeFilter = ref('all')
const chainFilter = ref('all')
const searchQuery = ref('')
const sortBy = ref('date')
const currentPage = ref(1)

// Computed properties
const availableChains = computed(() => {
  const chains = [...new Set(props.history.map(h => h.chain).filter(Boolean))]
  return chains.sort()
})

const filteredHistory = computed(() => {
  let filtered = [...props.history]

  // Time filter
  if (timeFilter.value !== 'all') {
    const now = new Date()
    const days = {
      '7d': 7,
      '30d': 30,
      '90d': 90,
      '1y': 365
    }
    const cutoffDate = new Date(now - days[timeFilter.value] * 24 * 60 * 60 * 1000)
    filtered = filtered.filter(h => new Date(h.claimedAt) >= cutoffDate)
  }

  // Chain filter
  if (chainFilter.value !== 'all') {
    filtered = filtered.filter(h => h.chain === chainFilter.value)
  }

  // Search filter
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(h =>
      h.project.toLowerCase().includes(query) ||
      h.token.toLowerCase().includes(query) ||
      (h.description && h.description.toLowerCase().includes(query))
    )
  }

  // Sort
  filtered.sort((a, b) => {
    if (sortBy.value === 'date') {
      return new Date(b.claimedAt) - new Date(a.claimedAt)
    } else if (sortBy.value === 'value') {
      return parseFloat(b.usdValue || 0) - parseFloat(a.usdValue || 0)
    } else if (sortBy.value === 'protocol') {
      return a.project.localeCompare(b.project)
    } else if (sortBy.value === 'amount') {
      return parseFloat(b.amount || 0) - parseFloat(a.amount || 0)
    }
    return 0
  })

  return filtered
})

const paginatedHistory = computed(() => {
  if (!props.showPagination) return filteredHistory.value

  const start = (currentPage.value - 1) * props.itemsPerPage
  const end = start + props.itemsPerPage
  return filteredHistory.value.slice(start, end)
})

const totalPages = computed(() => {
  return Math.ceil(filteredHistory.value.length / props.itemsPerPage)
})

const totalClaimed = computed(() => {
  return props.history.length
})

const totalValue = computed(() => {
  return props.history.reduce((sum, h) => sum + parseFloat(h.usdValue || 0), 0)
})

const uniqueProtocols = computed(() => {
  return new Set(props.history.map(h => h.project)).size
})

// Methods
const handleRefresh = () => {
  emit('refresh')
}

const handleViewTransaction = (item) => {
  emit('view-transaction', item)
}

const exportToCSV = () => {
  emit('export-csv', filteredHistory.value)
}

const exportToJSON = () => {
  emit('export-json', filteredHistory.value)
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

const formatChainName = (chain) => {
  const names = {
    ethereum: 'Ethereum',
    polygon: 'Polygon',
    arbitrum: 'Arbitrum',
    optimism: 'Optimism',
    avalanche: 'Avalanche',
    bsc: 'BSC'
  }
  return names[chain.toLowerCase()] || chain.charAt(0).toUpperCase() + chain.slice(1)
}

const getChainClasses = (chain) => {
  const classes = {
    ethereum: 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400',
    polygon: 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400',
    arbitrum: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/20 dark:text-cyan-400',
    optimism: 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400',
    avalanche: 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400',
    bsc: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
  }
  return classes[chain.toLowerCase()] || 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
}

const getStatusClasses = (status) => {
  const classes = {
    claimed: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
    pending: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400',
    failed: 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
  }
  return classes[status] || 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
}

const formatStatus = (status) => {
  return status.charAt(0).toUpperCase() + status.slice(1)
}
</script>