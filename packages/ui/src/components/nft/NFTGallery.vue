<template>
  <div :class="['nft-gallery w-full max-w-full overflow-hidden', className]">
    <!-- Header -->
    <div v-if="title || $slots.header" class="mb-6">
      <slot name="header">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
          {{ title }}
        </h2>
        <p v-if="description" class="mt-2 text-gray-600 dark:text-gray-400">
          {{ description }}
        </p>
      </slot>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="grid gap-4" :class="gridClasses">
      <div
        v-for="n in loadingCount"
        :key="`skeleton-${n}`"
        class="aspect-square animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700"
      >
        <div class="h-full w-full rounded-lg bg-gray-300 dark:bg-gray-600"></div>
      </div>
    </div>

    <!-- Empty State -->
    <div
      v-else-if="!nfts || nfts.length === 0"
      class="flex flex-col items-center justify-center py-12 text-center"
    >
      <div class="mb-4 text-6xl">🖼️</div>
      <h3 class="mb-2 text-lg font-medium text-gray-900 dark:text-white">
        {{ emptyTitle }}
      </h3>
      <p class="text-gray-600 dark:text-gray-400">
        {{ emptyDescription }}
      </p>
      <slot name="empty-action"></slot>
    </div>

    <!-- NFT Grid -->
    <div v-else class="grid gap-4" :class="gridClasses">
      <NFTCard
        v-for="(nft, index) in paginatedNfts"
        :key="nft.id || `nft-${index}`"
        v-bind="nft"
        @view="handleView"
        @buy="handleBuy"
        @favorite="handleFavorite"
      />
    </div>

    <!-- Load More / Pagination -->
    <div v-if="showLoadMore && hasMore" class="mt-8 text-center">
      <button
        @click="loadMore"
        :disabled="loadingMore"
        class="inline-flex items-center rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <div
          v-if="loadingMore"
          class="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"
        ></div>
        {{ loadingMore ? 'Loading...' : 'Load More' }}
      </button>
    </div>

    <!-- Pagination -->
    <div
      v-if="showPagination && totalPages > 1"
      class="mt-8 flex items-center justify-center space-x-2"
    >
      <button
        @click="goToPage(currentPage - 1)"
        :disabled="currentPage === 1"
        class="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
      >
        Previous
      </button>

      <div class="flex space-x-1">
        <button
          v-for="page in visiblePages"
          :key="page"
          @click="goToPage(page)"
          :class="[
            'rounded-lg px-3 py-2 text-sm font-medium transition-colors',
            page === currentPage
              ? 'bg-blue-500 text-white'
              : 'border border-gray-300 bg-white text-gray-500 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700'
          ]"
        >
          {{ page }}
        </button>
      </div>

      <button
        @click="goToPage(currentPage + 1)"
        :disabled="currentPage === totalPages"
        class="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
      >
        Next
      </button>
    </div>

    <!-- Stats -->
    <div v-if="showStats && !loading" class="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
      Showing {{ startIndex + 1 }}-{{ endIndex }} of {{ totalNfts }} NFTs
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import NFTCard from './NFTCard.vue'

const props = defineProps({
  nfts: {
    type: Array,
    default: () => []
  },
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  columns: {
    type: Number,
    default: 4,
    validator: (value) => value >= 1 && value <= 8
  },
  loading: {
    type: Boolean,
    default: false
  },
  loadingCount: {
    type: Number,
    default: 8
  },
  emptyTitle: {
    type: String,
    default: 'No NFTs found'
  },
  emptyDescription: {
    type: String,
    default: 'There are no NFTs to display at the moment.'
  },
  itemsPerPage: {
    type: Number,
    default: 0
  },
  showLoadMore: {
    type: Boolean,
    default: false
  },
  showPagination: {
    type: Boolean,
    default: false
  },
  showStats: {
    type: Boolean,
    default: true
  },
  className: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['view', 'buy', 'favorite', 'load-more', 'page-change'])

const currentPage = ref(1)
const loadingMore = ref(false)

const gridClasses = computed(() => {
  const cols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
    5: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5',
    6: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6',
    7: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-7',
    8: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-8'
  }
  return cols[props.columns] || cols[4]
})

const totalNfts = computed(() => props.nfts?.length || 0)

const totalPages = computed(() => {
  if (!props.itemsPerPage || props.itemsPerPage <= 0) return 1
  return Math.ceil(totalNfts.value / props.itemsPerPage)
})

const startIndex = computed(() => {
  if (!props.itemsPerPage || props.itemsPerPage <= 0) return 0
  return (currentPage.value - 1) * props.itemsPerPage
})

const endIndex = computed(() => {
  if (!props.itemsPerPage || props.itemsPerPage <= 0) return totalNfts.value
  return Math.min(startIndex.value + props.itemsPerPage, totalNfts.value)
})

const paginatedNfts = computed(() => {
  if (!props.itemsPerPage || props.itemsPerPage <= 0) return props.nfts
  return props.nfts.slice(startIndex.value, endIndex.value)
})

const hasMore = computed(() => {
  if (props.showPagination) return false
  return endIndex.value < totalNfts.value
})

const visiblePages = computed(() => {
  const pages = []
  const maxVisible = 5
  let start = Math.max(1, currentPage.value - Math.floor(maxVisible / 2))
  let end = Math.min(totalPages.value, start + maxVisible - 1)

  if (end - start + 1 < maxVisible) {
    start = Math.max(1, end - maxVisible + 1)
  }

  for (let i = start; i <= end; i++) {
    pages.push(i)
  }

  return pages
})

const handleView = (nft) => {
  emit('view', nft)
}

const handleBuy = (nft) => {
  emit('buy', nft)
}

const handleFavorite = (data) => {
  emit('favorite', data)
}

const loadMore = async () => {
  if (loadingMore.value) return

  loadingMore.value = true
  try {
    await emit('load-more')
  } finally {
    loadingMore.value = false
  }
}

const goToPage = (page) => {
  if (page < 1 || page > totalPages.value) return
  currentPage.value = page
  emit('page-change', page)
}

watch(() => props.nfts, () => {
  if (currentPage.value > totalPages.value) {
    currentPage.value = Math.max(1, totalPages.value)
  }
})
</script>