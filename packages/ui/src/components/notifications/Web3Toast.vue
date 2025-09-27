<template>
  <Transition
    enter-active-class="transition ease-out duration-300"
    enter-from-class="opacity-0 translate-y-2 sm:translate-y-0 sm:translate-x-2"
    enter-to-class="opacity-100 translate-y-0 sm:translate-x-0"
    leave-active-class="transition ease-in duration-200"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="visible"
      :class="[
        'max-w-sm w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden',
        positionClasses
      ]"
    >
      <div class="p-4">
        <div class="flex items-start">
          <div class="flex-shrink-0">
            <!-- Success Icon -->
            <svg
              v-if="type === 'success'"
              class="h-6 w-6 text-green-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <!-- Error Icon -->
            <svg
              v-else-if="type === 'error'"
              class="h-6 w-6 text-red-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>

            <!-- Warning Icon -->
            <svg
              v-else-if="type === 'warning'"
              class="h-6 w-6 text-yellow-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>

            <!-- Info Icon -->
            <svg
              v-else-if="type === 'info'"
              class="h-6 w-6 text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <!-- Loading Icon -->
            <svg
              v-else-if="type === 'loading'"
              class="h-6 w-6 text-blue-400 animate-spin"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>

            <!-- Transaction Icon -->
            <div
              v-else-if="type === 'transaction'"
              class="h-6 w-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center"
            >
              <svg class="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path>
              </svg>
            </div>
          </div>

          <div class="ml-3 w-0 flex-1 pt-0.5">
            <p class="text-sm font-medium text-gray-900 dark:text-white">
              {{ title }}
            </p>
            <p v-if="message" class="mt-1 text-sm text-gray-500 dark:text-gray-400">
              {{ message }}
            </p>

            <!-- Transaction Details -->
            <div v-if="transactionHash" class="mt-2 space-y-1">
              <div class="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                <span>Hash:</span>
                <code class="font-mono">{{ truncateHash(transactionHash) }}</code>
                <button
                  @click="copyToClipboard(transactionHash)"
                  class="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                >
                  <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                  </svg>
                </button>
              </div>

              <div v-if="gasUsed" class="text-xs text-gray-500 dark:text-gray-400">
                Gas: {{ gasUsed.toLocaleString() }} • Fee: ${{ gasFee.toFixed(4) }}
              </div>

              <div v-if="blockNumber" class="text-xs text-gray-500 dark:text-gray-400">
                Block: {{ blockNumber.toLocaleString() }}
              </div>
            </div>

            <!-- Action Buttons -->
            <div v-if="showActions" class="mt-3 flex gap-2">
              <button
                v-if="transactionHash && explorerUrl"
                @click="viewOnExplorer"
                class="text-xs text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
              >
                View on Explorer
              </button>

              <button
                v-if="actionButton"
                @click="$emit('action', actionButton.action)"
                class="text-xs text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
              >
                {{ actionButton.label }}
              </button>
            </div>

            <!-- Progress Bar -->
            <div v-if="showProgress && progress !== null" class="mt-3">
              <div class="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
                <span>{{ progressLabel || 'Progress' }}</span>
                <span>{{ Math.round(progress) }}%</span>
              </div>
              <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                <div
                  :class="progressBarClasses"
                  class="h-1.5 rounded-full transition-all duration-500"
                  :style="{ width: `${progress}%` }"
                ></div>
              </div>
            </div>
          </div>

          <div class="ml-4 flex-shrink-0 flex">
            <button
              @click="dismiss"
              class="bg-white dark:bg-gray-800 rounded-md inline-flex text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none"
            >
              <span class="sr-only">Close</span>
              <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Auto-dismiss indicator -->
      <div
        v-if="autoDismiss && duration > 0"
        class="h-1 bg-gray-200 dark:bg-gray-700"
      >
        <div
          :class="progressBarClasses"
          class="h-full transition-all linear"
          :style="{
            width: `${(1 - timeRemaining / duration) * 100}%`,
            transitionDuration: `${timeRemaining}ms`
          }"
        ></div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  id: {
    type: [String, Number],
    required: true
  },
  type: {
    type: String,
    default: 'info',
    validator: (value) => ['success', 'error', 'warning', 'info', 'loading', 'transaction'].includes(value)
  },
  title: {
    type: String,
    required: true
  },
  message: {
    type: String,
    default: ''
  },
  position: {
    type: String,
    default: 'top-right',
    validator: (value) => ['top-right', 'top-left', 'bottom-right', 'bottom-left', 'top-center', 'bottom-center'].includes(value)
  },
  duration: {
    type: Number,
    default: 5000
  },
  autoDismiss: {
    type: Boolean,
    default: true
  },
  persistent: {
    type: Boolean,
    default: false
  },
  transactionHash: {
    type: String,
    default: ''
  },
  gasUsed: {
    type: Number,
    default: null
  },
  gasFee: {
    type: Number,
    default: 0
  },
  blockNumber: {
    type: Number,
    default: null
  },
  explorerUrl: {
    type: String,
    default: ''
  },
  showActions: {
    type: Boolean,
    default: true
  },
  actionButton: {
    type: Object,
    default: null
  },
  showProgress: {
    type: Boolean,
    default: false
  },
  progress: {
    type: Number,
    default: null
  },
  progressLabel: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['dismiss', 'action'])

const visible = ref(false)
const timeRemaining = ref(props.duration)
let dismissTimer = null
let progressTimer = null

const positionClasses = computed(() => {
  const positions = {
    'top-right': 'fixed top-4 right-4 z-50',
    'top-left': 'fixed top-4 left-4 z-50',
    'bottom-right': 'fixed bottom-4 right-4 z-50',
    'bottom-left': 'fixed bottom-4 left-4 z-50',
    'top-center': 'fixed top-4 left-1/2 transform -translate-x-1/2 z-50',
    'bottom-center': 'fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50'
  }
  return positions[props.position] || positions['top-right']
})

const progressBarClasses = computed(() => {
  const classes = {
    'success': 'bg-green-500',
    'error': 'bg-red-500',
    'warning': 'bg-yellow-500',
    'info': 'bg-blue-500',
    'loading': 'bg-blue-500',
    'transaction': 'bg-purple-500'
  }
  return classes[props.type] || classes['info']
})

const show = () => {
  visible.value = true

  if (props.autoDismiss && props.duration > 0 && !props.persistent) {
    startDismissTimer()
  }
}

const dismiss = () => {
  visible.value = false
  clearTimers()
  emit('dismiss', props.id)
}

const startDismissTimer = () => {
  clearTimers()

  dismissTimer = setTimeout(() => {
    dismiss()
  }, props.duration)

  // Update progress indicator
  const startTime = Date.now()
  const updateProgress = () => {
    const elapsed = Date.now() - startTime
    timeRemaining.value = Math.max(0, props.duration - elapsed)

    if (timeRemaining.value > 0) {
      progressTimer = requestAnimationFrame(updateProgress)
    }
  }
  updateProgress()
}

const clearTimers = () => {
  if (dismissTimer) {
    clearTimeout(dismissTimer)
    dismissTimer = null
  }
  if (progressTimer) {
    cancelAnimationFrame(progressTimer)
    progressTimer = null
  }
}

const truncateHash = (hash) => {
  if (!hash) return ''
  return `${hash.slice(0, 6)}...${hash.slice(-4)}`
}

const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text)
    // Could emit a success event here
  } catch (err) {
    console.error('Failed to copy:', err)
  }
}

const viewOnExplorer = () => {
  if (props.explorerUrl && props.transactionHash) {
    window.open(`${props.explorerUrl}/tx/${props.transactionHash}`, '_blank')
  }
}

onMounted(() => {
  show()
})

onUnmounted(() => {
  clearTimers()
})

// Expose methods for parent component
defineExpose({
  show,
  dismiss
})
</script>