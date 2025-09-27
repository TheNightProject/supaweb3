<template>
  <div :class="['transaction-history', className]">
    <!-- Header -->
    <div class="mb-6 flex items-center justify-between">
      <div>
        <h2 class="text-xl font-semibold text-gray-900 dark:text-white">
          {{ title }}
        </h2>
        <p v-if="subtitle" class="mt-1 text-sm text-gray-600 dark:text-gray-400">
          {{ subtitle }}
        </p>
      </div>
      <div v-if="showRefresh" class="flex items-center space-x-2">
        <button
          @click="handleRefresh"
          :disabled="loading"
          class="rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 disabled:opacity-50 dark:text-gray-400 dark:hover:bg-gray-700"
        >
          <svg
            :class="[
              'h-5 w-5 transition-transform',
              loading ? 'animate-spin' : ''
            ]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Filters -->
    <div v-if="showFilters" class="mb-6 space-y-4">
      <div class="flex flex-wrap gap-4">
        <!-- Status Filter -->
        <div class="flex items-center space-x-2">
          <label class="text-sm font-medium text-gray-700 dark:text-gray-300">
            Status:
          </label>
          <select
            v-model="selectedStatus"
            class="rounded border border-gray-300 px-3 py-1 text-sm focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          >
            <option value="">All</option>
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
            <option value="failed">Failed</option>
          </select>
        </div>

        <!-- Type Filter -->
        <div class="flex items-center space-x-2">
          <label class="text-sm font-medium text-gray-700 dark:text-gray-300">
            Type:
          </label>
          <select
            v-model="selectedType"
            class="rounded border border-gray-300 px-3 py-1 text-sm focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          >
            <option value="">All</option>
            <option value="send">Send</option>
            <option value="receive">Receive</option>
            <option value="swap">Swap</option>
            <option value="contract">Contract</option>
            <option value="mint">Mint</option>
            <option value="stake">Stake</option>
          </select>
        </div>

        <!-- Chain Filter -->
        <div v-if="showChainFilter" class="flex items-center space-x-2">
          <label class="text-sm font-medium text-gray-700 dark:text-gray-300">
            Chain:
          </label>
          <select
            v-model="selectedChain"
            class="rounded border border-gray-300 px-3 py-1 text-sm focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          >
            <option value="">All</option>
            <option value="ethereum">Ethereum</option>
            <option value="polygon">Polygon</option>
            <option value="arbitrum">Arbitrum</option>
            <option value="optimism">Optimism</option>
            <option value="base">Base</option>
          </select>
        </div>

        <!-- Clear Filters -->
        <button
          v-if="hasActiveFilters"
          @click="clearFilters"
          class="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
        >
          Clear filters
        </button>
      </div>
    </div>

    <!-- Transaction List -->
    <div class="space-y-3">
      <!-- Loading State -->
      <div v-if="loading" class="space-y-3">
        <div
          v-for="n in loadingCount"
          :key="`skeleton-${n}`"
          class="animate-pulse rounded-lg border border-gray-200 p-4 dark:border-gray-700"
        >
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-3">
              <div class="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700"></div>
              <div class="space-y-2">
                <div class="h-4 w-32 bg-gray-200 dark:bg-gray-700"></div>
                <div class="h-3 w-24 bg-gray-200 dark:bg-gray-700"></div>
              </div>
            </div>
            <div class="h-4 w-20 bg-gray-200 dark:bg-gray-700"></div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div
        v-else-if="filteredTransactions.length === 0"
        class="py-12 text-center"
      >
        <div class="mb-4 text-4xl">📋</div>
        <h3 class="mb-2 text-lg font-medium text-gray-900 dark:text-white">
          {{ emptyTitle }}
        </h3>
        <p class="text-gray-600 dark:text-gray-400">
          {{ emptyDescription }}
        </p>
      </div>

      <!-- Transaction Items -->
      <div
        v-else
        v-for="transaction in paginatedTransactions"
        :key="transaction.hash"
        class="group cursor-pointer rounded-lg border border-gray-200 p-4 transition-all duration-200 hover:border-gray-300 hover:shadow-sm dark:border-gray-700 dark:hover:border-gray-600"
        @click="handleTransactionClick(transaction)"
      >
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-3">
            <!-- Transaction Icon -->
            <div
              :class="[
                'flex h-10 w-10 items-center justify-center rounded-full',
                getTransactionIconClasses(transaction)
              ]"
            >
              <component :is="getTransactionIcon(transaction)" class="h-5 w-5" />
            </div>

            <!-- Transaction Details -->
            <div class="flex-1">
              <div class="flex items-center space-x-2">
                <span class="font-medium text-gray-900 dark:text-white">
                  {{ getTransactionTitle(transaction) }}
                </span>
                <!-- Status Badge -->
                <span
                  :class="[
                    'rounded-full px-2 py-0.5 text-xs font-medium',
                    getStatusClasses(transaction.status)
                  ]"
                >
                  {{ transaction.status }}
                </span>
                <!-- Chain Badge -->
                <Web3Icon
                  v-if="showChainIcons && transaction.chain"
                  type="networks"
                  :symbol="transaction.chain"
                  :size="16"
                  class="opacity-60"
                />
              </div>
              <div class="mt-1 flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                <span>{{ formatTime(transaction.timestamp) }}</span>
                <span v-if="transaction.gasUsed">
                  Gas: {{ transaction.gasUsed }}
                </span>
                <span v-if="transaction.blockNumber">
                  Block: {{ transaction.blockNumber }}
                </span>
              </div>
            </div>
          </div>

          <!-- Amount & Actions -->
          <div class="flex items-center space-x-3">
            <div class="text-right">
              <div
                v-if="transaction.amount"
                :class="[
                  'font-medium',
                  transaction.type === 'receive' || transaction.type === 'mint'
                    ? 'text-green-600 dark:text-green-400'
                    : 'text-gray-900 dark:text-white'
                ]"
              >
                {{ getAmountDisplay(transaction) }}
              </div>
              <div
                v-if="transaction.usdValue"
                class="text-sm text-gray-600 dark:text-gray-400"
              >
                ${{ transaction.usdValue }}
              </div>
            </div>

            <!-- External Link -->
            <button
              v-if="showExplorerLink"
              @click.stop="openInExplorer(transaction)"
              class="rounded p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-700 dark:hover:text-gray-300"
              title="View on block explorer"
            >
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </button>
          </div>
        </div>

        <!-- Additional Details (Expandable) -->
        <div v-if="transaction.details" class="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
          <div class="text-sm text-gray-600 dark:text-gray-400">
            {{ transaction.details }}
          </div>
        </div>
      </div>
    </div>

    <!-- Pagination -->
    <div
      v-if="showPagination && totalPages > 1"
      class="mt-6 flex items-center justify-between"
    >
      <div class="text-sm text-gray-600 dark:text-gray-400">
        Showing {{ startIndex + 1 }}-{{ endIndex }} of {{ totalTransactions }} transactions
      </div>
      <div class="flex items-center space-x-2">
        <button
          @click="goToPage(currentPage - 1)"
          :disabled="currentPage === 1"
          class="rounded border border-gray-300 px-3 py-1 text-sm transition-colors hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed dark:border-gray-600 dark:hover:bg-gray-700"
        >
          Previous
        </button>
        <span class="px-3 py-1 text-sm">
          Page {{ currentPage }} of {{ totalPages }}
        </span>
        <button
          @click="goToPage(currentPage + 1)"
          :disabled="currentPage === totalPages"
          class="rounded border border-gray-300 px-3 py-1 text-sm transition-colors hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed dark:border-gray-600 dark:hover:bg-gray-700"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import Web3Icon from '../common/Web3Icon.vue'

const props = defineProps({
  transactions: {
    type: Array,
    default: () => []
  },
  title: {
    type: String,
    default: 'Transaction History'
  },
  subtitle: {
    type: String,
    default: ''
  },
  loading: {
    type: Boolean,
    default: false
  },
  loadingCount: {
    type: Number,
    default: 5
  },
  showFilters: {
    type: Boolean,
    default: true
  },
  showChainFilter: {
    type: Boolean,
    default: true
  },
  showChainIcons: {
    type: Boolean,
    default: true
  },
  showExplorerLink: {
    type: Boolean,
    default: true
  },
  showRefresh: {
    type: Boolean,
    default: true
  },
  showPagination: {
    type: Boolean,
    default: true
  },
  itemsPerPage: {
    type: Number,
    default: 10
  },
  emptyTitle: {
    type: String,
    default: 'No transactions found'
  },
  emptyDescription: {
    type: String,
    default: 'Your transaction history will appear here.'
  },
  explorerBaseUrl: {
    type: String,
    default: 'https://etherscan.io/tx/'
  },
  className: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['transaction-click', 'refresh', 'explorer-click'])

const selectedStatus = ref('')
const selectedType = ref('')
const selectedChain = ref('')
const currentPage = ref(1)

const filteredTransactions = computed(() => {
  let filtered = props.transactions

  if (selectedStatus.value) {
    filtered = filtered.filter(tx => tx.status === selectedStatus.value)
  }

  if (selectedType.value) {
    filtered = filtered.filter(tx => tx.type === selectedType.value)
  }

  if (selectedChain.value) {
    filtered = filtered.filter(tx => tx.chain === selectedChain.value)
  }

  return filtered
})

const totalTransactions = computed(() => filteredTransactions.value.length)

const totalPages = computed(() => {
  if (!props.showPagination) return 1
  return Math.ceil(totalTransactions.value / props.itemsPerPage)
})

const startIndex = computed(() => {
  if (!props.showPagination) return 0
  return (currentPage.value - 1) * props.itemsPerPage
})

const endIndex = computed(() => {
  if (!props.showPagination) return totalTransactions.value
  return Math.min(startIndex.value + props.itemsPerPage, totalTransactions.value)
})

const paginatedTransactions = computed(() => {
  if (!props.showPagination) return filteredTransactions.value
  return filteredTransactions.value.slice(startIndex.value, endIndex.value)
})

const hasActiveFilters = computed(() => {
  return selectedStatus.value || selectedType.value || selectedChain.value
})

const getTransactionIcon = (transaction) => {
  const icons = {
    send: 'IconArrowUp',
    receive: 'IconArrowDown',
    swap: 'IconArrowsUpDown',
    contract: 'IconCode',
    mint: 'IconPlus',
    stake: 'IconLock'
  }
  return icons[transaction.type] || 'IconCircle'
}

const getTransactionIconClasses = (transaction) => {
  const classes = {
    send: 'bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400',
    receive: 'bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400',
    swap: 'bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400',
    contract: 'bg-purple-100 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400',
    mint: 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/20 dark:text-yellow-400',
    stake: 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/20 dark:text-indigo-400'
  }
  return classes[transaction.type] || 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400'
}

const getStatusClasses = (status) => {
  const classes = {
    pending: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400',
    confirmed: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
    failed: 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
  }
  return classes[status] || 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-400'
}

const getTransactionTitle = (transaction) => {
  const titles = {
    send: `Send ${transaction.symbol || ''}`,
    receive: `Receive ${transaction.symbol || ''}`,
    swap: `Swap ${transaction.fromSymbol || ''} → ${transaction.toSymbol || ''}`,
    contract: 'Contract Interaction',
    mint: `Mint ${transaction.symbol || ''}`,
    stake: `Stake ${transaction.symbol || ''}`
  }
  return titles[transaction.type] || 'Transaction'
}

const getAmountDisplay = (transaction) => {
  if (!transaction.amount) return ''

  const sign = transaction.type === 'receive' || transaction.type === 'mint' ? '+' : '-'
  return `${sign}${transaction.amount} ${transaction.symbol || ''}`
}

const formatTime = (timestamp) => {
  if (!timestamp) return ''

  const date = new Date(timestamp)
  const now = new Date()
  const diff = now - date

  const minutes = Math.floor(diff / 60000)
  const hours = Math.floor(diff / 3600000)
  const days = Math.floor(diff / 86400000)

  if (minutes < 1) return 'Just now'
  if (minutes < 60) return `${minutes}m ago`
  if (hours < 24) return `${hours}h ago`
  if (days < 7) return `${days}d ago`

  return date.toLocaleDateString()
}

const clearFilters = () => {
  selectedStatus.value = ''
  selectedType.value = ''
  selectedChain.value = ''
  currentPage.value = 1
}

const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
  }
}

const handleTransactionClick = (transaction) => {
  emit('transaction-click', transaction)
}

const handleRefresh = () => {
  emit('refresh')
}

const openInExplorer = (transaction) => {
  const url = `${props.explorerBaseUrl}${transaction.hash}`
  window.open(url, '_blank')
  emit('explorer-click', { transaction, url })
}

watch([selectedStatus, selectedType, selectedChain], () => {
  currentPage.value = 1
})

// Simple SVG icons as components
const IconArrowUp = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11l5-5m0 0l5 5m-5-5v12"/></svg>`
}

const IconArrowDown = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 13l-5 5m0 0l-5-5m5 5V6"/></svg>`
}

const IconArrowsUpDown = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"/></svg>`
}

const IconCode = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>`
}

const IconPlus = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/></svg>`
}

const IconLock = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>`
}

const IconCircle = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>`
}
</script>