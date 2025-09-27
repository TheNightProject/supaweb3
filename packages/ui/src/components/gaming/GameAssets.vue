<template>
  <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
    <!-- Header -->
    <div class="p-6 border-b border-gray-200 dark:border-gray-700">
      <div class="flex items-center justify-between mb-4">
        <div>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
            {{ title || 'Game Assets' }}
          </h2>
          <p v-if="subtitle" class="text-gray-600 dark:text-gray-300 mt-1">
            {{ subtitle }}
          </p>
        </div>
        <div class="flex items-center gap-3">
          <select
            v-model="selectedGame"
            @change="$emit('game-filter', selectedGame)"
            class="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
          >
            <option value="">All Games</option>
            <option v-for="game in availableGames" :key="game.id" :value="game.id">
              {{ game.name }}
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

      <!-- Portfolio Summary -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div class="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
          <div class="text-sm text-purple-600 dark:text-purple-400 mb-1">Total Value</div>
          <div class="text-xl font-bold text-purple-800 dark:text-purple-200">
            ${{ totalValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}
          </div>
          <div class="text-xs text-purple-600 dark:text-purple-400">
            {{ totalAssets }} assets
          </div>
        </div>

        <div class="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <div class="text-sm text-blue-600 dark:text-blue-400 mb-1">NFTs</div>
          <div class="text-xl font-bold text-blue-800 dark:text-blue-200">
            {{ nftCount }}
          </div>
          <div class="text-xs text-blue-600 dark:text-blue-400">
            {{ uniqueCollections }} collections
          </div>
        </div>

        <div class="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
          <div class="text-sm text-green-600 dark:text-green-400 mb-1">Tokens</div>
          <div class="text-xl font-bold text-green-800 dark:text-green-200">
            {{ tokenCount }}
          </div>
          <div class="text-xs text-green-600 dark:text-green-400">
            {{ uniqueTokens }} types
          </div>
        </div>

        <div class="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
          <div class="text-sm text-yellow-600 dark:text-yellow-400 mb-1">Games</div>
          <div class="text-xl font-bold text-yellow-800 dark:text-yellow-200">
            {{ gamesCount }}
          </div>
          <div class="text-xs text-yellow-600 dark:text-yellow-400">
            Active games
          </div>
        </div>
      </div>
    </div>

    <!-- Filters and View Toggle -->
    <div class="p-6 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
      <div class="flex flex-wrap items-center justify-between gap-4">
        <div class="flex flex-wrap items-center gap-4">
          <div class="flex items-center gap-2">
            <label class="text-sm font-medium text-gray-700 dark:text-gray-300">Type:</label>
            <select
              v-model="selectedType"
              @change="applyFilters"
              class="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
            >
              <option value="">All Types</option>
              <option value="nft">NFTs</option>
              <option value="token">Tokens</option>
              <option value="equipment">Equipment</option>
              <option value="character">Characters</option>
              <option value="land">Land</option>
            </select>
          </div>

          <div class="flex items-center gap-2">
            <label class="text-sm font-medium text-gray-700 dark:text-gray-300">Rarity:</label>
            <select
              v-model="selectedRarity"
              @change="applyFilters"
              class="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
            >
              <option value="">All Rarities</option>
              <option value="common">Common</option>
              <option value="uncommon">Uncommon</option>
              <option value="rare">Rare</option>
              <option value="epic">Epic</option>
              <option value="legendary">Legendary</option>
              <option value="mythic">Mythic</option>
            </select>
          </div>

          <div class="flex items-center gap-2">
            <input
              type="text"
              v-model="searchQuery"
              @input="applyFilters"
              placeholder="Search assets..."
              class="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm w-40"
            />
          </div>

          <button
            @click="clearFilters"
            class="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
          >
            Clear
          </button>
        </div>

        <div class="flex items-center gap-2">
          <button
            @click="viewMode = 'grid'"
            :class="[
              'p-2 rounded-lg transition-colors',
              viewMode === 'grid'
                ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400'
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            ]"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
            </svg>
          </button>
          <button
            @click="viewMode = 'list'"
            :class="[
              'p-2 rounded-lg transition-colors',
              viewMode === 'list'
                ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400'
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            ]"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Assets Display -->
    <div class="p-6">
      <div v-if="filteredAssets.length === 0" class="text-center py-12">
        <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
        </svg>
        <h3 class="mt-2 text-sm font-medium text-gray-900 dark:text-white">No assets found</h3>
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
          {{ hasFilters ? 'Try adjusting your filters' : 'Start playing games to collect assets' }}
        </p>
      </div>

      <!-- Grid View -->
      <div v-else-if="viewMode === 'grid'" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div
          v-for="asset in paginatedAssets"
          :key="asset.id"
          class="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-200 cursor-pointer"
          @click="$emit('asset-click', asset)"
        >
          <!-- Asset Image -->
          <div class="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 relative overflow-hidden">
            <img
              v-if="asset.image"
              :src="asset.image"
              :alt="asset.name"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
              @error="handleImageError"
            />
            <div v-else class="w-full h-full flex items-center justify-center">
              <div class="text-4xl font-bold text-gray-400">
                {{ asset.name.charAt(0) }}
              </div>
            </div>

            <!-- Rarity Badge -->
            <div
              :class="[
                'absolute top-2 left-2 px-2 py-1 text-xs font-medium rounded-full',
                getRarityClasses(asset.rarity)
              ]"
            >
              {{ asset.rarity }}
            </div>

            <!-- Level Badge -->
            <div v-if="asset.level" class="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 text-xs rounded-full">
              Lv.{{ asset.level }}
            </div>

            <!-- Quantity Badge -->
            <div v-if="asset.quantity > 1" class="absolute bottom-2 right-2 bg-blue-600 text-white px-2 py-1 text-xs rounded-full">
              {{ asset.quantity }}
            </div>
          </div>

          <!-- Asset Info -->
          <div class="p-4">
            <div class="flex items-start justify-between mb-2">
              <div class="flex-1 min-w-0">
                <h3 class="font-semibold text-gray-900 dark:text-white truncate">
                  {{ asset.name }}
                </h3>
                <p class="text-sm text-gray-500 dark:text-gray-400 truncate">
                  {{ asset.collection || asset.game }}
                </p>
              </div>
              <div v-if="asset.price" class="text-right ml-2">
                <div class="text-sm font-medium text-gray-900 dark:text-white">
                  ${{ asset.price.toFixed(2) }}
                </div>
              </div>
            </div>

            <!-- Asset Stats -->
            <div v-if="asset.stats && asset.stats.length > 0" class="space-y-1">
              <div
                v-for="stat in asset.stats.slice(0, 2)"
                :key="stat.name"
                class="flex items-center justify-between text-xs"
              >
                <span class="text-gray-500 dark:text-gray-400">{{ stat.name }}</span>
                <span class="font-medium text-gray-900 dark:text-white">{{ stat.value }}</span>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex items-center gap-2 mt-3">
              <button
                v-if="asset.canEquip"
                @click.stop="$emit('equip-asset', asset)"
                class="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium py-2 px-3 rounded transition-colors"
              >
                Equip
              </button>
              <button
                v-if="asset.canUpgrade"
                @click.stop="$emit('upgrade-asset', asset)"
                class="flex-1 bg-green-600 hover:bg-green-700 text-white text-xs font-medium py-2 px-3 rounded transition-colors"
              >
                Upgrade
              </button>
              <button
                v-if="asset.canSell"
                @click.stop="$emit('sell-asset', asset)"
                class="flex-1 bg-red-600 hover:bg-red-700 text-white text-xs font-medium py-2 px-3 rounded transition-colors"
              >
                Sell
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- List View -->
      <div v-else class="space-y-3">
        <div
          v-for="asset in paginatedAssets"
          :key="asset.id"
          class="flex items-center gap-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors cursor-pointer"
          @click="$emit('asset-click', asset)"
        >
          <!-- Asset Image -->
          <div class="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-lg overflow-hidden flex-shrink-0">
            <img
              v-if="asset.image"
              :src="asset.image"
              :alt="asset.name"
              class="w-full h-full object-cover"
              @error="handleImageError"
            />
            <div v-else class="w-full h-full flex items-center justify-center">
              <div class="text-lg font-bold text-gray-400">
                {{ asset.name.charAt(0) }}
              </div>
            </div>
          </div>

          <!-- Asset Details -->
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2 mb-1">
              <h3 class="font-semibold text-gray-900 dark:text-white truncate">
                {{ asset.name }}
              </h3>
              <span
                :class="[
                  'px-2 py-1 text-xs font-medium rounded-full',
                  getRarityClasses(asset.rarity)
                ]"
              >
                {{ asset.rarity }}
              </span>
              <span v-if="asset.level" class="px-2 py-1 text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                Lv.{{ asset.level }}
              </span>
            </div>
            <div class="text-sm text-gray-500 dark:text-gray-400">
              {{ asset.collection || asset.game }}
              <span v-if="asset.quantity > 1"> • Qty: {{ asset.quantity }}</span>
            </div>
          </div>

          <!-- Asset Stats -->
          <div v-if="asset.stats && asset.stats.length > 0" class="hidden md:flex items-center gap-4">
            <div
              v-for="stat in asset.stats.slice(0, 3)"
              :key="stat.name"
              class="text-center"
            >
              <div class="text-xs text-gray-500 dark:text-gray-400">{{ stat.name }}</div>
              <div class="text-sm font-medium text-gray-900 dark:text-white">{{ stat.value }}</div>
            </div>
          </div>

          <!-- Price and Actions -->
          <div class="flex items-center gap-3">
            <div v-if="asset.price" class="text-right">
              <div class="text-sm font-medium text-gray-900 dark:text-white">
                ${{ asset.price.toFixed(2) }}
              </div>
            </div>

            <div class="flex items-center gap-1">
              <button
                v-if="asset.canEquip"
                @click.stop="$emit('equip-asset', asset)"
                class="p-2 text-blue-600 hover:bg-blue-100 dark:text-blue-400 dark:hover:bg-blue-900/20 rounded transition-colors"
                title="Equip"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </button>
              <button
                v-if="asset.canUpgrade"
                @click.stop="$emit('upgrade-asset', asset)"
                class="p-2 text-green-600 hover:bg-green-100 dark:text-green-400 dark:hover:bg-green-900/20 rounded transition-colors"
                title="Upgrade"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path>
                </svg>
              </button>
              <button
                @click.stop="$emit('view-details', asset)"
                class="p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 rounded transition-colors"
                title="View Details"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Pagination -->
      <div v-if="showPagination && totalPages > 1" class="flex items-center justify-between mt-6">
        <div class="text-sm text-gray-500 dark:text-gray-400">
          Showing {{ startIndex + 1 }}-{{ Math.min(endIndex, filteredAssets.length) }} of {{ filteredAssets.length }} assets
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
    default: 'Game Assets'
  },
  subtitle: {
    type: String,
    default: ''
  },
  assets: {
    type: Array,
    default: () => []
  },
  availableGames: {
    type: Array,
    default: () => []
  },
  loading: {
    type: Boolean,
    default: false
  },
  showPagination: {
    type: Boolean,
    default: true
  },
  itemsPerPage: {
    type: Number,
    default: 12
  }
})

const emit = defineEmits([
  'game-filter',
  'refresh',
  'asset-click',
  'equip-asset',
  'upgrade-asset',
  'sell-asset',
  'view-details'
])

const selectedGame = ref('')
const selectedType = ref('')
const selectedRarity = ref('')
const searchQuery = ref('')
const viewMode = ref('grid')
const currentPage = ref(1)

const filteredAssets = computed(() => {
  let filtered = props.assets

  if (selectedGame.value) {
    filtered = filtered.filter(asset => asset.gameId === selectedGame.value)
  }

  if (selectedType.value) {
    filtered = filtered.filter(asset => asset.type === selectedType.value)
  }

  if (selectedRarity.value) {
    filtered = filtered.filter(asset => asset.rarity === selectedRarity.value)
  }

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(asset =>
      asset.name.toLowerCase().includes(query) ||
      asset.collection?.toLowerCase().includes(query) ||
      asset.game?.toLowerCase().includes(query)
    )
  }

  return filtered.sort((a, b) => {
    // Sort by rarity priority, then by value
    const rarityPriority = { mythic: 6, legendary: 5, epic: 4, rare: 3, uncommon: 2, common: 1 }
    const aPriority = rarityPriority[a.rarity] || 0
    const bPriority = rarityPriority[b.rarity] || 0

    if (aPriority !== bPriority) {
      return bPriority - aPriority
    }

    return (b.price || 0) - (a.price || 0)
  })
})

const totalPages = computed(() => {
  return Math.ceil(filteredAssets.value.length / props.itemsPerPage)
})

const startIndex = computed(() => {
  return (currentPage.value - 1) * props.itemsPerPage
})

const endIndex = computed(() => {
  return startIndex.value + props.itemsPerPage
})

const paginatedAssets = computed(() => {
  return filteredAssets.value.slice(startIndex.value, endIndex.value)
})

const hasFilters = computed(() => {
  return selectedGame.value || selectedType.value || selectedRarity.value || searchQuery.value
})

const totalValue = computed(() => {
  return props.assets.reduce((sum, asset) => sum + (asset.price || 0) * (asset.quantity || 1), 0)
})

const totalAssets = computed(() => {
  return props.assets.reduce((sum, asset) => sum + (asset.quantity || 1), 0)
})

const nftCount = computed(() => {
  return props.assets.filter(asset => asset.type === 'nft').reduce((sum, asset) => sum + (asset.quantity || 1), 0)
})

const tokenCount = computed(() => {
  return props.assets.filter(asset => asset.type === 'token').reduce((sum, asset) => sum + (asset.quantity || 1), 0)
})

const uniqueCollections = computed(() => {
  const collections = new Set(props.assets.map(asset => asset.collection).filter(Boolean))
  return collections.size
})

const uniqueTokens = computed(() => {
  const tokens = new Set(props.assets.filter(asset => asset.type === 'token').map(asset => asset.name))
  return tokens.size
})

const gamesCount = computed(() => {
  const games = new Set(props.assets.map(asset => asset.gameId).filter(Boolean))
  return games.size
})

const getRarityClasses = (rarity) => {
  const classes = {
    common: 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200',
    uncommon: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    rare: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    epic: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
    legendary: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    mythic: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
  }
  return classes[rarity?.toLowerCase()] || classes.common
}

const applyFilters = () => {
  currentPage.value = 1
}

const clearFilters = () => {
  selectedGame.value = ''
  selectedType.value = ''
  selectedRarity.value = ''
  searchQuery.value = ''
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

const handleImageError = (event) => {
  event.target.style.display = 'none'
}
</script>