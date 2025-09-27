<template>
  <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
    <!-- Header -->
    <div class="p-6 border-b border-gray-200 dark:border-gray-700">
      <div class="flex items-center justify-between mb-4">
        <div>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
            {{ title || 'Price Alerts' }}
          </h2>
          <p v-if="subtitle" class="text-gray-600 dark:text-gray-300 mt-1">
            {{ subtitle }}
          </p>
        </div>
        <button
          @click="$emit('create-alert')"
          class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center gap-2"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
          New Alert
        </button>
      </div>

      <!-- Quick Stats -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div class="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <div class="text-sm text-blue-600 dark:text-blue-400 mb-1">Active Alerts</div>
          <div class="text-xl font-bold text-blue-800 dark:text-blue-200">
            {{ activeAlertsCount }}
          </div>
        </div>

        <div class="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
          <div class="text-sm text-green-600 dark:text-green-400 mb-1">Triggered Today</div>
          <div class="text-xl font-bold text-green-800 dark:text-green-200">
            {{ triggeredTodayCount }}
          </div>
        </div>

        <div class="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
          <div class="text-sm text-purple-600 dark:text-purple-400 mb-1">Watching</div>
          <div class="text-xl font-bold text-purple-800 dark:text-purple-200">
            {{ uniqueAssetsCount }} Assets
          </div>
        </div>

        <div class="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
          <div class="text-sm text-yellow-600 dark:text-yellow-400 mb-1">Price Targets</div>
          <div class="text-xl font-bold text-yellow-800 dark:text-yellow-200">
            {{ totalTargetsCount }}
          </div>
        </div>
      </div>
    </div>

    <!-- Filters and Search -->
    <div class="p-6 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
      <div class="flex flex-wrap items-center gap-4">
        <div class="flex-1 min-w-[200px]">
          <input
            type="text"
            v-model="searchQuery"
            placeholder="Search alerts by asset name or symbol..."
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm"
          />
        </div>

        <select
          v-model="selectedStatus"
          class="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
        >
          <option value="">All Status</option>
          <option value="active">Active</option>
          <option value="triggered">Triggered</option>
          <option value="paused">Paused</option>
        </select>

        <select
          v-model="selectedType"
          class="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
        >
          <option value="">All Types</option>
          <option value="above">Price Above</option>
          <option value="below">Price Below</option>
          <option value="change">Price Change</option>
          <option value="volume">Volume</option>
        </select>

        <button
          @click="clearFilters"
          class="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
        >
          Clear
        </button>
      </div>
    </div>

    <!-- Alert List -->
    <div class="p-6">
      <div v-if="filteredAlerts.length === 0" class="text-center py-12">
        <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 5v-5zM12 17H7a2 2 0 01-2-2V5a2 2 0 012-2h10a2 2 0 012 2v4M16 6l-3.5 6L14 9l-2-3z"></path>
        </svg>
        <h3 class="mt-2 text-sm font-medium text-gray-900 dark:text-white">No alerts found</h3>
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
          {{ searchQuery || selectedStatus || selectedType ? 'Try adjusting your filters' : 'Create your first price alert to get started' }}
        </p>
      </div>

      <div v-else class="space-y-4">
        <div
          v-for="alert in paginatedAlerts"
          :key="alert.id"
          :class="[
            'p-4 border rounded-lg transition-all duration-200',
            alert.status === 'triggered'
              ? 'border-green-300 bg-green-50 dark:border-green-700 dark:bg-green-900/20'
              : alert.status === 'active'
              ? 'border-blue-300 bg-blue-50 dark:border-blue-700 dark:bg-blue-900/20'
              : 'border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-900'
          ]"
        >
          <div class="flex items-start justify-between">
            <div class="flex items-start gap-4 flex-1">
              <!-- Asset Icon -->
              <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                {{ alert.asset.symbol.charAt(0) }}
              </div>

              <!-- Alert Details -->
              <div class="flex-1">
                <div class="flex items-center gap-2 mb-1">
                  <h3 class="font-semibold text-gray-900 dark:text-white">
                    {{ alert.asset.name }} ({{ alert.asset.symbol }})
                  </h3>
                  <span
                    :class="[
                      'px-2 py-1 text-xs font-medium rounded-full',
                      getStatusClasses(alert.status)
                    ]"
                  >
                    {{ alert.status }}
                  </span>
                  <span
                    :class="[
                      'px-2 py-1 text-xs font-medium rounded-full',
                      getTypeClasses(alert.type)
                    ]"
                  >
                    {{ getTypeLabel(alert.type) }}
                  </span>
                </div>

                <div class="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  {{ getAlertDescription(alert) }}
                </div>

                <div class="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <div>
                    Current: ${{ alert.currentPrice?.toFixed(4) || '0.0000' }}
                  </div>
                  <div>
                    Target: ${{ alert.targetPrice?.toFixed(4) || '0.0000' }}
                  </div>
                  <div v-if="alert.lastTriggered">
                    Last triggered: {{ formatDate(alert.lastTriggered) }}
                  </div>
                  <div>
                    Created: {{ formatDate(alert.createdAt) }}
                  </div>
                </div>

                <!-- Progress to Target -->
                <div v-if="alert.status === 'active'" class="mt-3">
                  <div class="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
                    <span>Progress to target</span>
                    <span>{{ getProgressPercentage(alert) }}%</span>
                  </div>
                  <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                    <div
                      :class="getProgressBarClasses(alert)"
                      class="h-1.5 rounded-full transition-all duration-500"
                      :style="{ width: `${Math.min(100, Math.abs(getProgressPercentage(alert)))}%` }"
                    ></div>
                  </div>
                </div>

                <!-- Notification Methods -->
                <div v-if="alert.notifications && alert.notifications.length > 0" class="mt-2 flex items-center gap-2">
                  <span class="text-xs text-gray-500 dark:text-gray-400">Notify via:</span>
                  <div class="flex items-center gap-1">
                    <span
                      v-for="method in alert.notifications"
                      :key="method"
                      class="px-2 py-1 text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
                    >
                      {{ method }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Actions -->
            <div class="flex items-center gap-2 ml-4">
              <button
                @click="$emit('toggle-alert', alert.id)"
                :class="[
                  'p-2 rounded-lg transition-colors text-sm',
                  alert.status === 'active'
                    ? 'text-yellow-600 hover:bg-yellow-100 dark:text-yellow-400 dark:hover:bg-yellow-900/20'
                    : 'text-green-600 hover:bg-green-100 dark:text-green-400 dark:hover:bg-green-900/20'
                ]"
                :title="alert.status === 'active' ? 'Pause Alert' : 'Resume Alert'"
              >
                <svg v-if="alert.status === 'active'" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m6-10a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </button>

              <button
                @click="$emit('edit-alert', alert)"
                class="p-2 text-blue-600 hover:bg-blue-100 dark:text-blue-400 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                title="Edit Alert"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
              </button>

              <button
                @click="$emit('delete-alert', alert.id)"
                class="p-2 text-red-600 hover:bg-red-100 dark:text-red-400 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                title="Delete Alert"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Pagination -->
      <div v-if="showPagination && totalPages > 1" class="flex items-center justify-between mt-6">
        <div class="text-sm text-gray-500 dark:text-gray-400">
          Showing {{ startIndex + 1 }}-{{ Math.min(endIndex, filteredAlerts.length) }} of {{ filteredAlerts.length }} alerts
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
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: 'Price Alerts'
  },
  subtitle: {
    type: String,
    default: ''
  },
  alerts: {
    type: Array,
    default: () => []
  },
  showPagination: {
    type: Boolean,
    default: true
  },
  itemsPerPage: {
    type: Number,
    default: 10
  }
})

const emit = defineEmits([
  'create-alert',
  'edit-alert',
  'delete-alert',
  'toggle-alert'
])

const searchQuery = ref('')
const selectedStatus = ref('')
const selectedType = ref('')
const currentPage = ref(1)

const filteredAlerts = computed(() => {
  let filtered = props.alerts

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(alert =>
      alert.asset.name.toLowerCase().includes(query) ||
      alert.asset.symbol.toLowerCase().includes(query)
    )
  }

  if (selectedStatus.value) {
    filtered = filtered.filter(alert => alert.status === selectedStatus.value)
  }

  if (selectedType.value) {
    filtered = filtered.filter(alert => alert.type === selectedType.value)
  }

  return filtered.sort((a, b) => {
    // Sort by status priority (triggered > active > paused), then by creation date
    const statusPriority = { triggered: 3, active: 2, paused: 1 }
    const aPriority = statusPriority[a.status] || 0
    const bPriority = statusPriority[b.status] || 0

    if (aPriority !== bPriority) {
      return bPriority - aPriority
    }

    return new Date(b.createdAt) - new Date(a.createdAt)
  })
})

const totalPages = computed(() => {
  return Math.ceil(filteredAlerts.value.length / props.itemsPerPage)
})

const startIndex = computed(() => {
  return (currentPage.value - 1) * props.itemsPerPage
})

const endIndex = computed(() => {
  return startIndex.value + props.itemsPerPage
})

const paginatedAlerts = computed(() => {
  return filteredAlerts.value.slice(startIndex.value, endIndex.value)
})

const activeAlertsCount = computed(() => {
  return props.alerts.filter(alert => alert.status === 'active').length
})

const triggeredTodayCount = computed(() => {
  const today = new Date().toDateString()
  return props.alerts.filter(alert =>
    alert.lastTriggered && new Date(alert.lastTriggered).toDateString() === today
  ).length
})

const uniqueAssetsCount = computed(() => {
  const uniqueSymbols = new Set(props.alerts.map(alert => alert.asset.symbol))
  return uniqueSymbols.size
})

const totalTargetsCount = computed(() => {
  return props.alerts.length
})

const getStatusClasses = (status) => {
  switch (status) {
    case 'active':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
    case 'triggered':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
    case 'paused':
      return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
  }
}

const getTypeClasses = (type) => {
  switch (type) {
    case 'above':
      return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
    case 'below':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
    case 'change':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
    case 'volume':
      return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
  }
}

const getTypeLabel = (type) => {
  const labels = {
    above: 'Above',
    below: 'Below',
    change: 'Change',
    volume: 'Volume'
  }
  return labels[type] || type
}

const getAlertDescription = (alert) => {
  switch (alert.type) {
    case 'above':
      return `Alert when price goes above $${alert.targetPrice?.toFixed(4) || '0.0000'}`
    case 'below':
      return `Alert when price goes below $${alert.targetPrice?.toFixed(4) || '0.0000'}`
    case 'change':
      return `Alert when price changes by ${alert.changePercent || 0}% in ${alert.timeframe || '24h'}`
    case 'volume':
      return `Alert when volume exceeds ${alert.volumeThreshold || 'N/A'}`
    default:
      return 'Price alert'
  }
}

const getProgressPercentage = (alert) => {
  if (alert.type === 'above' && alert.currentPrice && alert.basePrice && alert.targetPrice) {
    const denominator = alert.targetPrice - alert.basePrice
    if (denominator === 0) return 0
    return ((alert.currentPrice - alert.basePrice) / denominator) * 100
  } else if (alert.type === 'below' && alert.currentPrice && alert.basePrice && alert.targetPrice) {
    const denominator = alert.basePrice - alert.targetPrice
    if (denominator === 0) return 0
    return ((alert.basePrice - alert.currentPrice) / denominator) * 100
  }
  return 0
}

const getProgressBarClasses = (alert) => {
  const progress = getProgressPercentage(alert)
  if (progress >= 80) return 'bg-red-500'
  if (progress >= 60) return 'bg-yellow-500'
  return 'bg-blue-500'
}

const clearFilters = () => {
  searchQuery.value = ''
  selectedStatus.value = ''
  selectedType.value = ''
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