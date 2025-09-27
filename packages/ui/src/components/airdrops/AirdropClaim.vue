<template>
  <div :class="['airdrop-claim', className]">
    <!-- Header Section -->
    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
      <div class="p-6">
        <!-- Title and Status -->
        <div class="flex items-start justify-between mb-4">
          <div>
            <h2 class="text-xl font-bold text-gray-900 dark:text-white">
              {{ title }}
            </h2>
            <p v-if="subtitle" class="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {{ subtitle }}
            </p>
          </div>
          <div v-if="showStatus" :class="[
            'px-3 py-1 rounded-full text-xs font-medium',
            isEligible
              ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
              : checking
              ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
              : 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
          ]">
            {{ statusText }}
          </div>
        </div>

        <!-- Claimable Airdrops List -->
        <div v-if="airdrops.length > 0" class="space-y-4">
          <div
            v-for="(airdrop, index) in airdrops"
            :key="airdrop.id || index"
            :class="[
              'p-4 rounded-lg border transition-all duration-200',
              airdrop.eligible
                ? 'border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/10'
                : 'border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800'
            ]"
          >
            <div class="flex items-center justify-between">
              <!-- Airdrop Info -->
              <div class="flex items-center space-x-4">
                <!-- Project Icon -->
                <div v-if="airdrop.icon" :class="[
                  'w-10 h-10 rounded-full flex items-center justify-center text-white font-bold',
                  airdrop.iconBg || 'bg-gradient-to-r from-blue-500 to-purple-600'
                ]">
                  <img v-if="airdrop.icon.startsWith('http')" :src="airdrop.icon" :alt="airdrop.project" class="w-10 h-10 rounded-full" />
                  <span v-else class="text-sm">{{ airdrop.icon }}</span>
                </div>
                <div v-else :class="[
                  'w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm',
                  airdrop.iconBg || 'bg-gradient-to-r from-blue-500 to-purple-600'
                ]">
                  {{ airdrop.project.slice(0, 2).toUpperCase() }}
                </div>

                <!-- Project Details -->
                <div>
                  <h3 class="font-semibold text-gray-900 dark:text-white">
                    {{ airdrop.project }}
                  </h3>
                  <div class="flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-400">
                    <span v-if="airdrop.eligible">
                      {{ airdrop.amount }} {{ airdrop.token }}
                    </span>
                    <span v-if="airdrop.usdValue" class="text-green-600 dark:text-green-400 font-medium">
                      ~${{ airdrop.usdValue }}
                    </span>
                    <span v-if="airdrop.deadline" :class="[
                      'text-xs px-2 py-1 rounded',
                      isNearDeadline(airdrop.deadline)
                        ? 'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400'
                        : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                    ]">
                      Expires: {{ formatDate(airdrop.deadline) }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- Claim Action -->
              <div class="flex items-center space-x-3">
                <div v-if="!airdrop.eligible" class="text-right">
                  <div class="text-sm font-medium text-red-600 dark:text-red-400">
                    Not Eligible
                  </div>
                  <div v-if="airdrop.reason" class="text-xs text-gray-500 dark:text-gray-400">
                    {{ airdrop.reason }}
                  </div>
                </div>

                <button
                  v-else
                  @click="handleClaim(airdrop)"
                  :disabled="claiming === airdrop.id || airdrop.claimed"
                  :class="[
                    'px-4 py-2 rounded-lg font-medium transition-colors',
                    airdrop.claimed
                      ? 'bg-gray-200 text-gray-500 cursor-not-allowed dark:bg-gray-700 dark:text-gray-400'
                      : claiming === airdrop.id
                      ? 'bg-blue-200 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300'
                      : 'bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700'
                  ]"
                >
                  <div v-if="claiming === airdrop.id" class="flex items-center space-x-2">
                    <div class="w-4 h-4 border-2 border-blue-300 border-t-blue-600 rounded-full animate-spin"></div>
                    <span>Claiming...</span>
                  </div>
                  <span v-else-if="airdrop.claimed">✓ Claimed</span>
                  <span v-else>Claim {{ airdrop.token }}</span>
                </button>
              </div>
            </div>

            <!-- Eligibility Details -->
            <div v-if="showDetails && airdrop.eligible && airdrop.requirements" class="mt-3 pt-3 border-t border-green-200 dark:border-green-800">
              <div class="text-xs text-green-700 dark:text-green-400">
                <div class="font-medium mb-1">Requirements Met:</div>
                <ul class="space-y-1">
                  <li v-for="req in airdrop.requirements" :key="req" class="flex items-center space-x-2">
                    <svg class="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    <span>{{ req }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-else-if="!loading && !checking" class="text-center py-12">
          <div class="w-16 h-16 mx-auto mb-4 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
            <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
          </div>
          <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">
            {{ emptyTitle }}
          </h3>
          <p class="text-gray-600 dark:text-gray-400 mb-6">
            {{ emptyDescription }}
          </p>
          <button
            v-if="showRefresh"
            @click="checkEligibility"
            :disabled="checking"
            class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <div v-if="checking" class="flex items-center space-x-2">
              <div class="w-4 h-4 border-2 border-blue-300 border-t-blue-600 rounded-full animate-spin"></div>
              <span>Checking...</span>
            </div>
            <span v-else>Check Again</span>
          </button>
        </div>

        <!-- Loading State -->
        <div v-if="loading || checking" class="space-y-4">
          <div v-for="n in loadingCount" :key="n" class="animate-pulse">
            <div class="flex items-center justify-between p-4 rounded-lg bg-gray-100 dark:bg-gray-700">
              <div class="flex items-center space-x-4">
                <div class="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                <div class="space-y-2">
                  <div class="w-24 h-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
                  <div class="w-32 h-3 bg-gray-300 dark:bg-gray-600 rounded"></div>
                </div>
              </div>
              <div class="w-20 h-8 bg-gray-300 dark:bg-gray-600 rounded"></div>
            </div>
          </div>
        </div>

        <!-- Summary -->
        <div v-if="airdrops.length > 0 && showSummary" class="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10 rounded-lg border border-green-200 dark:border-green-800">
          <div class="flex justify-between items-center">
            <div>
              <div class="text-sm font-medium text-green-800 dark:text-green-300">
                Total Claimable Value
              </div>
              <div class="text-2xl font-bold text-green-900 dark:text-green-200">
                ${{ totalValue.toLocaleString() }}
              </div>
            </div>
            <div class="text-right">
              <div class="text-sm text-green-600 dark:text-green-400">
                {{ eligibleCount }} of {{ airdrops.length }} eligible
              </div>
              <button
                v-if="eligibleCount > 1"
                @click="handleClaimAll"
                :disabled="claimingAll"
                class="mt-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium transition-colors"
              >
                <div v-if="claimingAll" class="flex items-center space-x-2">
                  <div class="w-4 h-4 border-2 border-green-300 border-t-green-600 rounded-full animate-spin"></div>
                  <span>Claiming All...</span>
                </div>
                <span v-else>Claim All</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Actions -->
        <div v-if="$slots.actions || showActions" class="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
          <slot name="actions">
            <div v-if="showActions" class="flex justify-between">
              <button
                @click="checkEligibility"
                :disabled="checking"
                class="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                🔄 Refresh
              </button>
              <button
                v-if="showHistory"
                @click="$emit('show-history')"
                class="px-4 py-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
              >
                📜 View History
              </button>
            </div>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const props = defineProps({
  // Content
  title: {
    type: String,
    default: 'Claimable Airdrops'
  },
  subtitle: {
    type: String,
    default: 'Check and claim your eligible airdrops'
  },

  // Data
  airdrops: {
    type: Array,
    default: () => []
  },
  userAddress: {
    type: String,
    default: ''
  },

  // States
  loading: {
    type: Boolean,
    default: false
  },
  loadingCount: {
    type: Number,
    default: 3
  },
  checking: {
    type: Boolean,
    default: false
  },

  // UI Options
  showStatus: {
    type: Boolean,
    default: true
  },
  showDetails: {
    type: Boolean,
    default: true
  },
  showSummary: {
    type: Boolean,
    default: true
  },
  showActions: {
    type: Boolean,
    default: true
  },
  showRefresh: {
    type: Boolean,
    default: true
  },
  showHistory: {
    type: Boolean,
    default: true
  },

  // Empty state
  emptyTitle: {
    type: String,
    default: 'No Airdrops Available'
  },
  emptyDescription: {
    type: String,
    default: 'Connect your wallet to check for eligible airdrops.'
  },

  // Styling
  className: {
    type: String,
    default: ''
  }
})

const emit = defineEmits([
  'claim',
  'claim-all',
  'check-eligibility',
  'show-history'
])

// Local state
const claiming = ref(null)
const claimingAll = ref(false)

// Computed properties
const isEligible = computed(() => {
  return props.airdrops.some(airdrop => airdrop.eligible && !airdrop.claimed)
})

const eligibleCount = computed(() => {
  return props.airdrops.filter(airdrop => airdrop.eligible && !airdrop.claimed).length
})

const totalValue = computed(() => {
  return props.airdrops
    .filter(airdrop => airdrop.eligible && !airdrop.claimed)
    .reduce((sum, airdrop) => sum + parseFloat(airdrop.usdValue || 0), 0)
})

const statusText = computed(() => {
  if (props.checking) return 'Checking...'
  if (isEligible.value) return `${eligibleCount.value} Available`
  return 'Not Eligible'
})

// Methods
const handleClaim = async (airdrop) => {
  claiming.value = airdrop.id

  try {
    emit('claim', airdrop)

    // Simulate claim process
    await new Promise(resolve => setTimeout(resolve, 2000))

  } finally {
    claiming.value = null
  }
}

const handleClaimAll = async () => {
  const eligibleAirdrops = props.airdrops.filter(airdrop => airdrop.eligible && !airdrop.claimed)

  claimingAll.value = true

  try {
    emit('claim-all', eligibleAirdrops)

    // Simulate claiming all
    await new Promise(resolve => setTimeout(resolve, 3000))

  } finally {
    claimingAll.value = false
  }
}

const checkEligibility = () => {
  emit('check-eligibility')
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
    day: 'numeric',
    year: 'numeric'
  })
}

// Auto-check on mount if user address is provided
onMounted(() => {
  if (props.userAddress && props.airdrops.length === 0) {
    checkEligibility()
  }
})
</script>