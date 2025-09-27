<template>
  <div :class="['chain-switcher relative', className]">
    <!-- Button Trigger -->
    <button
      v-if="variant === 'button'"
      @click="toggleDropdown"
      :class="[
        'flex items-center space-x-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200',
        'border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
        buttonClasses,
        { 'cursor-not-allowed opacity-50': disabled }
      ]"
      :disabled="disabled"
    >
      <Web3Icon
        v-if="showIcons && selectedChain?.icon"
        type="networks"
        :symbol="selectedChain.icon"
        :size="16"
        class="flex-shrink-0"
      />
      <div
        v-else
        :class="[
          'h-3 w-3 rounded-full flex-shrink-0',
          selectedChain ? chainColors[selectedChain.id] : 'bg-gray-400'
        ]"
      ></div>
      <span>{{ selectedChain?.name || 'Select Network' }}</span>
      <svg
        :class="[
          'h-4 w-4 transition-transform duration-200',
          { 'rotate-180': isOpen }
        ]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>

    <!-- Inline Selector -->
    <div
      v-else-if="variant === 'inline'"
      class="space-y-2"
    >
      <label
        v-if="label"
        class="block text-sm font-medium text-gray-700 dark:text-gray-300"
      >
        {{ label }}
      </label>
      <div class="grid gap-2" :class="gridClasses">
        <button
          v-for="chain in availableChains"
          :key="chain.id"
          @click="handleChainSelect(chain)"
          :class="[
            'flex items-center space-x-3 rounded-lg border p-3 text-left transition-all duration-200',
            'hover:border-blue-300 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500',
            selectedChain?.id === chain.id
              ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
              : 'border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800',
            { 'cursor-not-allowed opacity-50': disabled }
          ]"
          :disabled="disabled"
        >
          <Web3Icon
            v-if="showIcons && chain.icon"
            type="networks"
            :symbol="chain.icon"
            :size="20"
            class="flex-shrink-0"
          />
          <div
            v-else
            :class="[
              'h-4 w-4 rounded-full flex-shrink-0',
              chainColors[chain.id] || 'bg-gray-400'
            ]"
          ></div>
          <div class="flex-1">
            <div class="font-medium text-gray-900 dark:text-white">
              {{ chain.name }}
            </div>
            <div v-if="chain.description" class="text-xs text-gray-500 dark:text-gray-400">
              {{ chain.description }}
            </div>
          </div>
          <div v-if="showStatus" class="flex items-center">
            <div
              :class="[
                'h-2 w-2 rounded-full',
                chain.status === 'active' ? 'bg-green-400' :
                chain.status === 'congested' ? 'bg-yellow-400' : 'bg-red-400'
              ]"
            ></div>
          </div>
        </button>
      </div>
    </div>

    <!-- Dropdown Menu -->
    <div
      v-if="variant === 'button' && isOpen"
      ref="dropdown"
      :class="[
        'absolute z-[9999] mt-2 rounded-lg border border-gray-200 bg-white py-2 shadow-xl dark:border-gray-700 dark:bg-gray-800',
        dropdownPosition === 'right' ? 'right-0' : 'left-0',
        'min-w-[200px] max-w-[300px]'
      ]"
    >
      <div v-if="showSearch" class="px-3 pb-2">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search networks..."
          class="w-full rounded border border-gray-300 px-3 py-1 text-sm focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
        />
      </div>

      <div v-if="groupByType" class="max-h-64 overflow-y-auto">
        <div
          v-for="(group, type) in groupedChains"
          :key="type"
          class="mb-2 last:mb-0"
        >
          <div class="px-3 py-1 text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
            {{ type }}
          </div>
          <button
            v-for="chain in group"
            :key="chain.id"
            @click="handleChainSelect(chain)"
            :class="[
              'flex w-full items-center space-x-3 px-3 py-2 text-left transition-colors duration-150',
              'hover:bg-gray-100 dark:hover:bg-gray-700',
              selectedChain?.id === chain.id ? 'bg-blue-50 dark:bg-blue-900/20' : ''
            ]"
          >
            <Web3Icon
              v-if="showIcons && chain.icon"
              type="networks"
              :symbol="chain.icon"
              :size="16"
              class="flex-shrink-0"
            />
            <div
              v-else
              :class="[
                'h-3 w-3 rounded-full flex-shrink-0',
                chainColors[chain.id] || 'bg-gray-400'
              ]"
            ></div>
            <div class="flex-1">
              <div class="text-sm font-medium text-gray-900 dark:text-white">
                {{ chain.name }}
              </div>
              <div v-if="chain.description" class="text-xs text-gray-500 dark:text-gray-400">
                {{ chain.description }}
              </div>
            </div>
            <div v-if="showStatus" class="flex items-center">
              <div
                :class="[
                  'h-2 w-2 rounded-full',
                  chain.status === 'active' ? 'bg-green-400' :
                  chain.status === 'congested' ? 'bg-yellow-400' : 'bg-red-400'
                ]"
              ></div>
            </div>
          </button>
        </div>
      </div>

      <div v-else class="max-h-64 overflow-y-auto">
        <button
          v-for="chain in filteredChains"
          :key="chain.id"
          @click="handleChainSelect(chain)"
          :class="[
            'flex w-full items-center space-x-3 px-3 py-2 text-left transition-colors duration-150',
            'hover:bg-gray-100 dark:hover:bg-gray-700',
            selectedChain?.id === chain.id ? 'bg-blue-50 dark:bg-blue-900/20' : ''
          ]"
        >
          <Web3Icon
            v-if="showIcons && chain.icon"
            type="networks"
            :symbol="chain.icon"
            :size="16"
            class="flex-shrink-0"
          />
          <div
            v-else
            :class="[
              'h-3 w-3 rounded-full flex-shrink-0',
              chainColors[chain.id] || 'bg-gray-400'
            ]"
          ></div>
          <div class="flex-1">
            <div class="text-sm font-medium text-gray-900 dark:text-white">
              {{ chain.name }}
            </div>
            <div v-if="chain.description" class="text-xs text-gray-500 dark:text-gray-400">
              {{ chain.description }}
            </div>
          </div>
          <div v-if="showStatus" class="flex items-center">
            <div
              :class="[
                'h-2 w-2 rounded-full',
                chain.status === 'active' ? 'bg-green-400' :
                chain.status === 'congested' ? 'bg-yellow-400' : 'bg-red-400'
              ]"
            ></div>
          </div>
        </button>
      </div>

      <div v-if="filteredChains.length === 0" class="px-3 py-2 text-center text-sm text-gray-500 dark:text-gray-400">
        No networks found
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import Web3Icon from '../common/Web3Icon.vue'

const props = defineProps({
  chains: {
    type: Array,
    default: () => [
      {
        id: 'ethereum',
        name: 'Ethereum',
        description: 'Ethereum Mainnet',
        type: 'mainnet',
        status: 'active',
        icon: 'ethereum'
      },
      {
        id: 'polygon',
        name: 'Polygon',
        description: 'Polygon Mainnet',
        type: 'mainnet',
        status: 'active',
        icon: 'polygon'
      },
      {
        id: 'arbitrum',
        name: 'Arbitrum One',
        description: 'Arbitrum Layer 2',
        type: 'layer2',
        status: 'active',
        icon: 'arbitrum'
      },
      {
        id: 'optimism',
        name: 'Optimism',
        description: 'Optimism Layer 2',
        type: 'layer2',
        status: 'active',
        icon: 'optimism'
      },
      {
        id: 'base',
        name: 'Base',
        description: 'Base Layer 2',
        type: 'layer2',
        status: 'active',
        icon: 'base'
      }
    ]
  },
  selectedChainId: {
    type: String,
    default: 'ethereum'
  },
  variant: {
    type: String,
    default: 'button',
    validator: (value) => ['button', 'inline'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  appearance: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'outline', 'ghost'].includes(value)
  },
  columns: {
    type: Number,
    default: 1,
    validator: (value) => value >= 1 && value <= 4
  },
  label: {
    type: String,
    default: ''
  },
  showSearch: {
    type: Boolean,
    default: true
  },
  showStatus: {
    type: Boolean,
    default: true
  },
  showIcons: {
    type: Boolean,
    default: true
  },
  groupByType: {
    type: Boolean,
    default: false
  },
  dropdownPosition: {
    type: String,
    default: 'left',
    validator: (value) => ['left', 'right'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  },
  className: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['change', 'switch'])

const isOpen = ref(false)
const searchQuery = ref('')
const dropdown = ref(null)

const chainColors = {
  ethereum: 'bg-blue-500',
  polygon: 'bg-purple-500',
  arbitrum: 'bg-blue-400',
  optimism: 'bg-red-500',
  base: 'bg-blue-600',
  avalanche: 'bg-red-400',
  fantom: 'bg-blue-300',
  bsc: 'bg-yellow-500'
}

const selectedChain = computed(() =>
  props.chains.find(chain => chain.id === props.selectedChainId)
)

const availableChains = computed(() => props.chains)

const filteredChains = computed(() => {
  if (!searchQuery.value) return availableChains.value

  return availableChains.value.filter(chain =>
    chain.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    chain.description?.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const groupedChains = computed(() => {
  const groups = {}
  filteredChains.value.forEach(chain => {
    const type = chain.type || 'other'
    if (!groups[type]) {
      groups[type] = []
    }
    groups[type].push(chain)
  })
  return groups
})

const buttonClasses = computed(() => {
  const base = {
    sm: 'px-3 py-1 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  }

  const appearance = {
    default: 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700',
    outline: 'bg-transparent border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800',
    ghost: 'bg-transparent border-transparent text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
  }

  return `${base[props.size]} ${appearance[props.appearance]}`
})

const gridClasses = computed(() => {
  const cols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
  }
  return cols[props.columns] || cols[1]
})

const toggleDropdown = () => {
  if (props.disabled) return
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    searchQuery.value = ''
  }
}

const handleChainSelect = (chain) => {
  if (props.disabled) return

  emit('change', chain)
  emit('switch', chain.id)

  if (props.variant === 'button') {
    isOpen.value = false
  }
}

const handleClickOutside = (event) => {
  if (dropdown.value && !dropdown.value.contains(event.target) && !event.target.closest('.chain-switcher')) {
    isOpen.value = false
  }
}

onMounted(() => {
  if (props.variant === 'button') {
    document.addEventListener('click', handleClickOutside)
  }
})

onUnmounted(() => {
  if (props.variant === 'button') {
    document.removeEventListener('click', handleClickOutside)
  }
})
</script>