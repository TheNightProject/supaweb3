<template>
  <div :class="containerClasses">
    <img
      v-if="imageSrc && !imageError"
      :src="imageSrc"
      :alt="alt"
      :class="avatarClasses"
      @error="handleImageError"
    />

    <div
      v-else-if="customAvatar"
      :class="avatarClasses"
      v-html="customAvatar"
    />

    <div
      v-else
      :class="[avatarClasses, generatedClasses]"
      :style="generatedStyle"
    >
      <span v-if="(address || ensName) && showInitials" :class="initialsClasses">
        {{ initials }}
      </span>
      <svg
        v-else
        :class="iconClasses"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    </div>

    <div
      v-if="showStatus && status"
      :class="statusClasses"
      :title="statusTooltip"
    />

    <div
      v-if="badge"
      :class="badgeClasses"
    >
      {{ badge }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
export type AvatarShape = 'circle' | 'square' | 'rounded'
export type AvatarStatus = 'online' | 'offline' | 'away' | 'busy'

interface Props {
  address?: string
  ensName?: string
  ensAvatar?: string
  src?: string
  alt?: string
  size?: AvatarSize
  shape?: AvatarShape
  showInitials?: boolean
  initials?: string
  status?: AvatarStatus
  showStatus?: boolean
  statusTooltip?: string
  badge?: string | number
  badgePosition?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
  className?: string
  generatedType?: 'gradient' | 'pattern' | 'solid'
  customColors?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  alt: 'User avatar',
  size: 'md',
  shape: 'rounded',
  showInitials: true,
  showStatus: false,
  statusTooltip: '',
  badgePosition: 'top-right',
  generatedType: 'gradient',
})

const emit = defineEmits<{
  click: [event: MouseEvent]
  error: [error: Error]
}>()

const imageError = ref(false)
const customAvatar = ref<string | null>(null)

const imageSrc = computed(() => {
  if (imageError.value) return null
  return props.src || props.ensAvatar
})

const initials = computed(() => {
  if (props.initials) return props.initials

  if (props.ensName) {
    const parts = props.ensName.split('.')
    return parts[0].slice(0, 2).toUpperCase()
  }

  if (props.address) {
    return props.address.slice(2, 4).toUpperCase()
  }

  return '??'
})

const containerClasses = computed(() => [
  'relative inline-block',
  props.className
].filter(Boolean).join(' '))

const sizeClasses = computed(() => {
  const sizes = {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-14 h-14',
    '2xl': 'w-16 h-16',
    '3xl': 'w-24 h-24'
  }
  return sizes[props.size]
})

const shapeClasses = computed(() => {
  const shapes = {
    circle: 'rounded-full',
    square: 'rounded-md',
    rounded: 'rounded-xl'
  }
  return shapes[props.shape]
})

const avatarClasses = computed(() => [
  sizeClasses.value,
  shapeClasses.value,
  'overflow-hidden object-cover shadow-sm ring-1 ring-black/5 dark:ring-white/10'
].join(' '))

const generatedStyle = computed(() => {
  // Generate color based on address or ENS name
  const seed = props.address || props.ensName || ''
  if (!seed) return {}

  const hash = seed.split('').reduce((acc, char) => {
    return char.charCodeAt(0) + ((acc << 5) - acc)
  }, 0)

  const gradients = [
    ['#667EEA', '#764BA2'], // purple gradient
    ['#F093FB', '#F5576C'], // pink gradient
    ['#4FACFE', '#00F2FE'], // blue gradient
    ['#43E97B', '#38F9D7'], // green gradient
    ['#FA709A', '#FEE140'], // sunset gradient
    ['#30CFD0', '#330867'], // ocean gradient
    ['#A8EDEA', '#FED6E3'], // pastel gradient
    ['#FF6B6B', '#FFE66D']  // warm gradient
  ]

  const solidColors = [
    '#3B82F6', // blue
    '#10B981', // green
    '#EF4444', // red
    '#F59E0B', // yellow
    '#6366F1', // indigo
    '#EC4899', // pink
    '#06B6D4', // cyan
    '#10B981'  // emerald
  ]

  const colorIndex = Math.abs(hash) % gradients.length

  if (props.generatedType === 'gradient') {
    const [from, to] = gradients[colorIndex]
    return {
      background: `linear-gradient(135deg, ${from}, ${to})`
    }
  } else if (props.generatedType === 'pattern') {
    const [from, to] = gradients[colorIndex]
    return {
      background: `linear-gradient(45deg, ${from}, ${to})`
    }
  } else {
    return {
      backgroundColor: solidColors[colorIndex]
    }
  }
})

const generatedClasses = computed(() => {
  const baseClasses = 'flex items-center justify-center text-white'

  if (!props.address && !props.ensName) {
    return `${baseClasses} bg-gray-200 dark:bg-gray-700 !text-gray-500 dark:!text-gray-400`
  }

  return baseClasses
})

const initialsClasses = computed(() => {
  const sizes = {
    xs: 'text-[10px]',    // 24px container
    sm: 'text-[13px]',    // 32px container
    md: 'text-base',      // 40px container (16px)
    lg: 'text-xl',        // 48px container (20px)
    xl: 'text-2xl',       // 56px container (24px)
    '2xl': 'text-3xl',    // 64px container (30px)
    '3xl': 'text-5xl'     // 96px container (48px)
  }
  return `${sizes[props.size]} font-bold text-white leading-none`
})

const iconClasses = computed(() => {
  const sizes = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-7 h-7',
    '2xl': 'w-8 h-8',
    '3xl': 'w-12 h-12'
  }
  return sizes[props.size]
})

const statusClasses = computed(() => {
  const sizes = {
    xs: 'w-1.5 h-1.5',
    sm: 'w-2 h-2',
    md: 'w-2.5 h-2.5',
    lg: 'w-3 h-3',
    xl: 'w-3.5 h-3.5',
    '2xl': 'w-4 h-4',
    '3xl': 'w-5 h-5'
  }

  const positions = {
    circle: 'bottom-0 right-0',
    square: 'bottom-0.5 right-0.5',
    rounded: 'bottom-0.5 right-0.5'
  }

  const colors = {
    online: 'bg-green-500',
    offline: 'bg-gray-400 dark:bg-gray-600',
    away: 'bg-yellow-500',
    busy: 'bg-red-500'
  }

  return [
    'absolute',
    sizes[props.size],
    positions[props.shape],
    colors[props.status || 'offline'],
    'rounded-full',
    'ring-2 ring-white dark:ring-gray-900'
  ].join(' ')
})

const badgeClasses = computed(() => {
  const positions = {
    'top-right': 'top-0 right-0 -translate-y-1/3 translate-x-1/3',
    'top-left': 'top-0 left-0 -translate-y-1/3 -translate-x-1/3',
    'bottom-right': 'bottom-0 right-0 translate-y-1/3 translate-x-1/3',
    'bottom-left': 'bottom-0 left-0 translate-y-1/3 -translate-x-1/3'
  }

  return [
    'absolute',
    positions[props.badgePosition || 'top-right'],
    'px-1.5 py-0.5',
    'text-xs font-medium',
    'bg-red-500 text-white',
    'rounded-full',
    'ring-2 ring-white dark:ring-gray-900'
  ].join(' ')
})

const handleImageError = () => {
  imageError.value = true
  emit('error', new Error('Failed to load image'))
}

const generateJazzicon = () => {
  // This would be where we generate a Jazzicon-style avatar
  // For now, we'll use the gradient approach
  // In production, you might want to use a library like @metamask/jazzicon
  customAvatar.value = null
}

onMounted(() => {
  if (props.address && !props.src && !props.ensAvatar) {
    generateJazzicon()
  }
})

watch(() => props.address, () => {
  if (props.address && !props.src && !props.ensAvatar) {
    generateJazzicon()
  }
})

watch(() => props.src, () => {
  imageError.value = false
})
</script>