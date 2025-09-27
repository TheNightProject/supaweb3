<template>
  <div
    :class="[
      'group relative overflow-hidden rounded-lg bg-white shadow-sm transition-shadow duration-200 hover:shadow-lg dark:bg-gray-800',
      'border border-gray-200 hover:border-gray-300 dark:border-gray-700 dark:hover:border-gray-600',
      className
    ]"
  >
    <!-- Image Container -->
    <div class="relative aspect-square overflow-hidden">
      <img
        v-if="!imageError && imageUrl"
        :src="imageUrl"
        :alt="name || 'NFT'"
        class="h-full w-full object-cover transition-transform duration-200 group-hover:scale-102"
        @error="handleImageError"
        @load="imageLoaded = true"
      />

      <!-- Image Loading State -->
      <div
        v-if="!imageLoaded && !imageError"
        class="flex h-full w-full items-center justify-center bg-gray-100 dark:bg-gray-700"
      >
        <div class="h-8 w-8 animate-spin rounded-full border-2 border-gray-300 border-t-blue-500"></div>
      </div>

      <!-- Image Error State -->
      <div
        v-if="imageError"
        class="flex h-full w-full items-center justify-center bg-gray-100 dark:bg-gray-700"
      >
        <div class="text-center text-gray-500 dark:text-gray-400">
          <div class="mb-2 text-2xl">🖼️</div>
          <div class="text-sm">Image not available</div>
        </div>
      </div>

      <!-- Hover Overlay -->
      <div
        class="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-200 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto"
      >
        <div class="flex h-full items-center justify-center space-x-3">
          <button
            v-if="showActions"
            @click="$emit('view', nftData)"
            class="rounded-lg bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-colors duration-150 hover:bg-white/30"
          >
            View
          </button>
          <button
            v-if="showActions && price"
            @click="$emit('buy', nftData)"
            class="rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white transition-colors duration-150 hover:bg-blue-600"
          >
            Buy
          </button>
        </div>
      </div>

      <!-- Favorite Button -->
      <button
        v-if="showFavorite"
        @click="toggleFavorite"
        class="absolute right-3 top-3 rounded-full bg-black/40 p-2 text-white transition-all duration-200 hover:bg-black/60 hover:scale-110"
      >
        <svg
          :class="[
            'h-4 w-4 transition-colors',
            isFavorited ? 'fill-red-500 text-red-500' : 'fill-none'
          ]"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </button>

      <!-- Price Badge -->
      <div
        v-if="price"
        class="absolute bottom-3 left-3 rounded-lg bg-black/60 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm"
      >
        {{ price }}
      </div>

      <!-- Chain Badge -->
      <div
        v-if="chain"
        class="absolute bottom-3 right-3 flex items-center space-x-1 rounded-lg bg-black/60 px-2 py-1 text-xs text-white backdrop-blur-sm"
      >
        <div
          :class="[
            'h-2 w-2 rounded-full',
            chainColors[chain] || 'bg-gray-400'
          ]"
        ></div>
        <span>{{ chain.toUpperCase() }}</span>
      </div>
    </div>

    <!-- NFT Info -->
    <div class="p-4">
      <div class="mb-2">
        <h3 class="truncate text-lg font-semibold text-gray-900 dark:text-white">
          {{ name || 'Untitled' }}
        </h3>
        <p
          v-if="collection"
          class="truncate text-sm text-gray-600 dark:text-gray-400"
        >
          {{ collection }}
        </p>
      </div>

      <!-- Owner Info -->
      <div
        v-if="owner && showOwner"
        class="flex items-center space-x-2"
      >
        <div
          class="h-6 w-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-xs font-medium text-white"
        >
          {{ ownerInitials }}
        </div>
        <span class="text-sm text-gray-600 dark:text-gray-400">
          {{ truncatedOwner }}
        </span>
      </div>

      <!-- Price Info -->
      <div
        v-if="price && showPriceInInfo"
        class="mt-3 flex items-center justify-between"
      >
        <span class="text-sm text-gray-600 dark:text-gray-400">Price</span>
        <span class="font-semibold text-gray-900 dark:text-white">{{ price }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  imageUrl: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  },
  collection: {
    type: String,
    default: ''
  },
  price: {
    type: String,
    default: ''
  },
  owner: {
    type: String,
    default: ''
  },
  chain: {
    type: String,
    default: 'ethereum',
    validator: (value) => ['ethereum', 'polygon', 'arbitrum', 'optimism', 'base'].includes(value)
  },
  showActions: {
    type: Boolean,
    default: true
  },
  showFavorite: {
    type: Boolean,
    default: true
  },
  showOwner: {
    type: Boolean,
    default: true
  },
  showPriceInInfo: {
    type: Boolean,
    default: false
  },
  className: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['view', 'buy', 'favorite'])

const imageLoaded = ref(false)
const imageError = ref(false)
const isFavorited = ref(false)

const chainColors = {
  ethereum: 'bg-blue-500',
  polygon: 'bg-purple-500',
  arbitrum: 'bg-blue-400',
  optimism: 'bg-red-500',
  base: 'bg-blue-600'
}

const nftData = computed(() => ({
  imageUrl: props.imageUrl,
  name: props.name,
  collection: props.collection,
  price: props.price,
  owner: props.owner,
  chain: props.chain
}))

const ownerInitials = computed(() => {
  if (!props.owner) return '?'
  if (props.owner.startsWith('0x')) {
    return props.owner.slice(2, 4).toUpperCase()
  }
  return props.owner.slice(0, 2).toUpperCase()
})

const truncatedOwner = computed(() => {
  if (!props.owner) return ''
  if (props.owner.length > 16) {
    return `${props.owner.slice(0, 6)}...${props.owner.slice(-4)}`
  }
  return props.owner
})

const handleImageError = () => {
  imageError.value = true
  imageLoaded.value = false
}

const toggleFavorite = () => {
  isFavorited.value = !isFavorited.value
  emit('favorite', { nft: nftData.value, favorited: isFavorited.value })
}
</script>