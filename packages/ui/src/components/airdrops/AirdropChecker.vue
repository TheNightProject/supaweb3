<template>
  <div :class="['airdrop-checker', className]">
    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
      <div class="p-6">
        <!-- Header -->
        <div class="text-center mb-6">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {{ title }}
          </h2>
          <p class="text-gray-600 dark:text-gray-400">
            {{ subtitle }}
          </p>
        </div>

        <!-- Wallet Input -->
        <div class="mb-6">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Wallet Address or ENS Name
          </label>
          <div class="flex space-x-3">
            <div class="flex-1 relative">
              <input
                v-model="inputAddress"
                @keyup.enter="handleCheck"
                :placeholder="addressPlaceholder"
                :disabled="checking"
                class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white disabled:opacity-50"
              />
              <div v-if="isValidAddress" class="absolute right-3 top-3.5">
                <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
            </div>
            <button
              @click="handleCheck"
              :disabled="!inputAddress || checking"
              class="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed font-medium transition-colors flex items-center space-x-2"
            >
              <div v-if="checking" class="w-5 h-5 border-2 border-blue-300 border-t-blue-600 rounded-full animate-spin"></div>
              <span>{{ checking ? 'Checking...' : 'Check Eligibility' }}</span>
            </button>
          </div>
        </div>

        <!-- Quick Connect -->
        <div v-if="showConnectWallet && !isConnected" class="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <div class="flex items-center justify-between">
            <div>
              <div class="text-sm font-medium text-blue-900 dark:text-blue-300">
                Connect Your Wallet
              </div>
              <div class="text-xs text-blue-700 dark:text-blue-400">
                Automatically check eligibility for your connected address
              </div>
            </div>
            <button
              @click="$emit('connect-wallet')"
              class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm font-medium transition-colors"
            >
              Connect
            </button>
          </div>
        </div>

        <!-- Protocol Selection -->
        <div v-if="showProtocolFilter" class="mb-6">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            Check Protocols
          </label>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
            <label
              v-for="protocol in availableProtocols"
              :key="protocol.id"
              class="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <input
                v-model="selectedProtocols"
                :value="protocol.id"
                type="checkbox"
                class="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              />
              <div class="flex items-center space-x-2 flex-1 min-w-0">
                <div v-if="protocol.icon" :class="[
                  'w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold',
                  protocol.iconBg || 'bg-gray-400'
                ]">
                  <img v-if="protocol.icon.startsWith('http')" :src="protocol.icon" :alt="protocol.name" class="w-6 h-6 rounded-full" />
                  <span v-else>{{ protocol.icon }}</span>
                </div>
                <span class="text-sm font-medium text-gray-900 dark:text-white truncate">
                  {{ protocol.name }}
                </span>
              </div>
            </label>
          </div>
        </div>

        <!-- Results -->
        <div v-if="hasResults" class="space-y-4">
          <!-- Summary Stats -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div class="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
              <div class="text-2xl font-bold text-green-600 dark:text-green-400">
                {{ eligibleCount }}
              </div>
              <div class="text-sm text-green-700 dark:text-green-300">
                Eligible
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
                {{ protocolsChecked }}
              </div>
              <div class="text-sm text-purple-700 dark:text-purple-300">
                Protocols
              </div>
            </div>
            <div class="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
              <div class="text-2xl font-bold text-orange-600 dark:text-orange-400">
                {{ urgentCount }}
              </div>
              <div class="text-sm text-orange-700 dark:text-orange-300">
                Expiring Soon
              </div>
            </div>
          </div>

          <!-- Filter Results -->
          <div v-if="showResultsFilter" class="flex items-center justify-between">
            <div class="flex items-center space-x-4">
              <button
                v-for="filter in resultFilters"
                :key="filter.key"
                @click="activeFilter = filter.key"
                :class="[
                  'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                  activeFilter === filter.key
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                ]"
              >
                {{ filter.label }} ({{ filter.count }})
              </button>
            </div>
            <div class="flex items-center space-x-2">
              <label class="text-sm text-gray-700 dark:text-gray-300">Sort:</label>
              <select
                v-model="sortBy"
                class="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="value">Value (High to Low)</option>
                <option value="deadline">Deadline (Urgent First)</option>
                <option value="protocol">Protocol Name</option>
              </select>
            </div>
          </div>

          <!-- Results List -->
          <div class="space-y-3">
            <div
              v-for="result in filteredResults"
              :key="result.id"
              :class="[
                'p-4 rounded-lg border transition-all duration-200',
                result.eligible
                  ? 'border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/10'
                  : 'border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800'
              ]"
            >
              <div class="flex items-center justify-between">
                <!-- Protocol Info -->
                <div class="flex items-center space-x-4">
                  <div v-if="result.icon" :class="[
                    'w-10 h-10 rounded-full flex items-center justify-center text-white font-bold',
                    result.iconBg || 'bg-gradient-to-r from-blue-500 to-purple-600'
                  ]">
                    <img v-if="result.icon.startsWith('http')" :src="result.icon" :alt="result.protocol" class="w-10 h-10 rounded-full" />
                    <span v-else class="text-sm">{{ result.icon }}</span>
                  </div>
                  <div v-else :class="[
                    'w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm',
                    result.iconBg || 'bg-gradient-to-r from-blue-500 to-purple-600'
                  ]">
                    {{ result.protocol.slice(0, 2).toUpperCase() }}
                  </div>

                  <div>
                    <h3 class="font-semibold text-gray-900 dark:text-white flex items-center space-x-2">
                      <span>{{ result.protocol }}</span>
                      <span v-if="result.chain" :class="[
                        'px-2 py-1 text-xs rounded',
                        getChainClasses(result.chain)
                      ]">
                        {{ result.chain }}
                      </span>
                    </h3>
                    <div class="flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-400">
                      <span v-if="result.eligible">
                        {{ result.amount }} {{ result.token }}
                      </span>
                      <span v-if="result.usdValue" class="text-green-600 dark:text-green-400 font-medium">
                        ~${{ result.usdValue }}
                      </span>
                      <span v-if="result.deadline" :class="[
                        'text-xs px-2 py-1 rounded',
                        isNearDeadline(result.deadline)
                          ? 'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400'
                          : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                      ]">
                        Expires: {{ formatDate(result.deadline) }}
                      </span>
                    </div>
                  </div>
                </div>

                <!-- Status -->
                <div class="text-right">
                  <div v-if="result.eligible" :class="[
                    'px-3 py-1 rounded-full text-sm font-medium',
                    'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                  ]">
                    ✓ Eligible
                  </div>
                  <div v-else-if="result.checking" class="px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400">
                    Checking...
                  </div>
                  <div v-else class="px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400">
                    Not Eligible
                  </div>

                  <!-- Reason for ineligibility -->
                  <div v-if="!result.eligible && result.reason" class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {{ result.reason }}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Actions -->
          <div class="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 flex justify-between">
            <button
              @click="exportResults"
              class="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              📊 Export Results
            </button>
            <button
              v-if="eligibleCount > 0"
              @click="$emit('claim-eligible', filteredResults.filter(r => r.eligible))"
              class="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 font-medium transition-colors"
            >
              Claim All Eligible ({{ eligibleCount }})
            </button>
          </div>
        </div>

        <!-- Loading State -->
        <div v-else-if="checking" class="text-center py-12">
          <div class="w-16 h-16 mx-auto mb-4 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
            <div class="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
          <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
            Checking Eligibility
          </h3>
          <p class="text-gray-600 dark:text-gray-400 mb-4">
            Scanning {{ selectedProtocols.length }} protocols for airdrops...
          </p>
          <div class="max-w-xs mx-auto">
            <div class="bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                class="bg-blue-500 h-2 rounded-full transition-all duration-500"
                :style="{ width: `${checkingProgress}%` }"
              ></div>
            </div>
            <div class="text-sm text-gray-500 dark:text-gray-400 mt-2">
              {{ Math.round(checkingProgress) }}% Complete
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
    default: 'Airdrop Eligibility Checker'
  },
  subtitle: {
    type: String,
    default: 'Check your wallet across multiple protocols for claimable airdrops'
  },

  // Wallet
  userAddress: {
    type: String,
    default: ''
  },
  isConnected: {
    type: Boolean,
    default: false
  },
  showConnectWallet: {
    type: Boolean,
    default: true
  },

  // Protocols
  availableProtocols: {
    type: Array,
    default: () => []
  },
  defaultProtocols: {
    type: Array,
    default: () => []
  },

  // UI Options
  showProtocolFilter: {
    type: Boolean,
    default: true
  },
  showResultsFilter: {
    type: Boolean,
    default: true
  },
  addressPlaceholder: {
    type: String,
    default: '0x... or yourname.eth'
  },

  // States
  checking: {
    type: Boolean,
    default: false
  },

  // Styling
  className: {
    type: String,
    default: ''
  }
})

const emit = defineEmits([
  'check',
  'connect-wallet',
  'claim-eligible',
  'export-results'
])

// Local state
const inputAddress = ref(props.userAddress)
const selectedProtocols = ref(props.defaultProtocols.length > 0 ? [...props.defaultProtocols] : [])
const results = ref([])
const activeFilter = ref('all')
const sortBy = ref('value')
const checkingProgress = ref(0)

// Computed properties
const isValidAddress = computed(() => {
  return inputAddress.value && (
    inputAddress.value.startsWith('0x') && inputAddress.value.length === 42 ||
    inputAddress.value.includes('.eth')
  )
})

const hasResults = computed(() => {
  return results.value.length > 0 && !props.checking
})

const eligibleCount = computed(() => {
  return results.value.filter(r => r.eligible).length
})

const totalValue = computed(() => {
  return results.value
    .filter(r => r.eligible)
    .reduce((sum, r) => sum + parseFloat(r.usdValue || 0), 0)
})

const protocolsChecked = computed(() => {
  return results.value.length
})

const urgentCount = computed(() => {
  return results.value.filter(r => r.eligible && r.deadline && isNearDeadline(r.deadline)).length
})

const resultFilters = computed(() => [
  { key: 'all', label: 'All', count: results.value.length },
  { key: 'eligible', label: 'Eligible', count: eligibleCount.value },
  { key: 'urgent', label: 'Expiring Soon', count: urgentCount.value }
])

const filteredResults = computed(() => {
  let filtered = results.value

  // Apply active filter
  if (activeFilter.value === 'eligible') {
    filtered = filtered.filter(r => r.eligible)
  } else if (activeFilter.value === 'urgent') {
    filtered = filtered.filter(r => r.eligible && r.deadline && isNearDeadline(r.deadline))
  }

  // Apply sorting
  filtered = [...filtered].sort((a, b) => {
    if (sortBy.value === 'value') {
      return parseFloat(b.usdValue || 0) - parseFloat(a.usdValue || 0)
    } else if (sortBy.value === 'deadline') {
      if (!a.deadline && !b.deadline) return 0
      if (!a.deadline) return 1
      if (!b.deadline) return -1
      return new Date(a.deadline) - new Date(b.deadline)
    } else if (sortBy.value === 'protocol') {
      return a.protocol.localeCompare(b.protocol)
    }
    return 0
  })

  return filtered
})

// Watch for user address changes
watch(() => props.userAddress, (newAddress) => {
  if (newAddress) {
    inputAddress.value = newAddress
  }
})

// Methods
const handleCheck = async () => {
  if (!inputAddress.value || selectedProtocols.value.length === 0) return

  results.value = []
  checkingProgress.value = 0

  emit('check', {
    address: inputAddress.value,
    protocols: selectedProtocols.value
  })

  // Simulate checking progress
  const interval = setInterval(() => {
    checkingProgress.value += 10
    if (checkingProgress.value >= 100) {
      clearInterval(interval)
    }
  }, 200)
}

const exportResults = () => {
  emit('export-results', results.value)
}

const isNearDeadline = (deadline) => {
  const now = new Date()
  const deadlineDate = new Date(deadline)
  const diffDays = (deadlineDate - now) / (1000 * 60 * 60 * 24)
  return diffDays < 7 // Less than 7 days
}

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric'
  })
}

const getChainClasses = (chain) => {
  const classes = {
    ethereum: 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400',
    polygon: 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400',
    arbitrum: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/20 dark:text-cyan-400',
    optimism: 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400',
    avalanche: 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
  }
  return classes[chain.toLowerCase()] || 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
}

// Set initial protocols if provided
if (props.availableProtocols.length > 0 && selectedProtocols.value.length === 0) {
  selectedProtocols.value = props.availableProtocols.slice(0, 5).map(p => p.id)
}

// Expose methods for parent component
defineExpose({
  setResults: (newResults) => {
    results.value = newResults
  },
  setProgress: (progress) => {
    checkingProgress.value = progress
  }
})
</script>