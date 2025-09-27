<template>
  <div :class="containerClasses">
    <div v-if="showAvatar && avatarPosition === 'left'" :class="avatarClasses">
      <div class="bg-gradient-to-br from-blue-500 to-purple-500"></div>
    </div>

    <button
      v-if="!copyOnly"
      @click="handleClick"
      :class="addressClasses"
      :title="fullAddress || address"
    >
      {{ displayAddress }}
    </button>

    <span
      v-else
      :class="addressClasses"
      :title="fullAddress || address"
    >
      {{ displayAddress }}
    </span>

    <div v-if="showAvatar && avatarPosition === 'right'" :class="avatarClasses">
      <div class="bg-gradient-to-br from-blue-500 to-purple-500"></div>
    </div>

    <button
      v-if="showCopyButton"
      @click="copyAddress"
      :class="copyButtonClasses"
      :title="copyTooltip"
    >
      <svg
        v-if="!copied"
        xmlns="http://www.w3.org/2000/svg"
        :class="iconClasses"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        :class="iconClasses"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 13l4 4L19 7"
        />
      </svg>
    </button>

    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 transform scale-95"
      enter-to-class="opacity-100 transform scale-100"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 transform scale-100"
      leave-to-class="opacity-0 transform scale-95"
    >
      <div
        v-if="showToast"
        class="fixed top-4 right-4 z-50 px-4 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm rounded-lg shadow-lg"
      >
        {{ toastMessage }}
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

export type AddressVariant = 'default' | 'outline' | 'ghost' | 'link'
export type AddressSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type AvatarPosition = 'left' | 'right' | 'none'

interface Props {
  address: string
  ensName?: string
  variant?: AddressVariant
  size?: AddressSize
  truncate?: boolean
  truncateLength?: number
  showCopyButton?: boolean
  copyOnly?: boolean
  showAvatar?: boolean
  avatarPosition?: AvatarPosition
  linkTo?: string
  className?: string
  copyTooltip?: string
  toastMessage?: string
  toastDuration?: number
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'md',
  truncate: true,
  truncateLength: 4,
  showCopyButton: true,
  copyOnly: false,
  showAvatar: false,
  avatarPosition: 'left',
  copyTooltip: 'Copy address',
  toastMessage: 'Address copied!',
  toastDuration: 2000
})

const emit = defineEmits<{
  copy: [address: string]
  click: [address: string]
}>()

const copied = ref(false)
const showToast = ref(false)

const fullAddress = computed(() => props.ensName || props.address)

const displayAddress = computed(() => {
  if (props.ensName) {
    return props.ensName
  }

  if (!props.truncate || props.address.length <= (props.truncateLength * 2 + 6)) {
    return props.address
  }

  const start = props.address.slice(0, props.truncateLength + 2)
  const end = props.address.slice(-props.truncateLength)
  return `${start}...${end}`
})

const containerClasses = computed(() => [
  'inline-flex items-center gap-2',
  props.className
].filter(Boolean).join(' '))

const sizeClasses = computed(() => {
  const sizes = {
    xs: 'text-xs px-2 py-0.5',
    sm: 'text-sm px-2.5 py-1',
    md: 'text-base px-3 py-1.5',
    lg: 'text-lg px-4 py-2',
    xl: 'text-xl px-5 py-2.5'
  }
  return sizes[props.size]
})

const variantClasses = computed(() => {
  const variants = {
    default: 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700',
    outline: 'border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800',
    ghost: 'text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800',
    link: 'text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline-offset-2 hover:underline'
  }
  return variants[props.variant]
})

const addressClasses = computed(() => [
  'font-mono rounded-lg transition-all duration-200',
  sizeClasses.value,
  variantClasses.value,
  props.copyOnly ? 'cursor-default' : 'cursor-pointer'
].join(' '))

const copyButtonClasses = computed(() => {
  const sizes = {
    xs: 'p-1',
    sm: 'p-1.5',
    md: 'p-2',
    lg: 'p-2.5',
    xl: 'p-3'
  }

  return [
    sizes[props.size],
    'rounded-lg transition-all duration-200',
    'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200',
    'hover:bg-gray-100 dark:hover:bg-gray-800',
    copied.value ? 'text-green-600 dark:text-green-400' : ''
  ].join(' ')
})

const iconClasses = computed(() => {
  const sizes = {
    xs: 'w-3 h-3',
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
    xl: 'w-6 h-6'
  }
  return sizes[props.size]
})

const avatarClasses = computed(() => {
  const sizes = {
    xs: 'w-5 h-5',
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
    xl: 'w-12 h-12'
  }

  return [
    sizes[props.size],
    'rounded-full overflow-hidden'
  ].join(' ')
})

const copyAddress = async () => {
  try {
    await navigator.clipboard.writeText(props.address)
    copied.value = true
    showToast.value = true
    emit('copy', props.address)

    setTimeout(() => {
      copied.value = false
      showToast.value = false
    }, props.toastDuration)
  } catch (error) {
    console.error('Failed to copy address:', error)
  }
}

const handleClick = () => {
  if (props.linkTo) {
    window.open(props.linkTo, '_blank')
  }
  emit('click', props.address)
}
</script>