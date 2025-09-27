<template>
  <div>
    <button
      @click="openModal"
      :class="buttonClasses"
      :disabled="disabled || isConnecting"
    >
      <div class="flex items-center justify-center gap-2">
        <svg
          v-if="!isConnected && !isConnecting"
          class="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>

        <svg
          v-if="isConnecting"
          class="animate-spin h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
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
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>

        <svg
          v-if="isConnected"
          class="w-5 h-5"
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

        <span class="font-medium">
          {{ buttonText }}
        </span>
      </div>
    </button>

    <Teleport to="body">
      <WalletConnectModal
        v-if="showModal"
        :enabled-wallets="enabledWallets"
        :priority-wallets="priorityWallets"
        @close="closeModal"
        @connect="handleConnect"
      />
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import WalletConnectModal from './WalletConnectModal.vue'

export type WalletType = 'metamask' | 'walletconnect' | 'coinbase' | 'phantom' | 'trust' | 'argent' | 'rainbow' | 'ledger'

interface Props {
  variant?: 'default' | 'outline' | 'ghost' | 'gradient'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  disabled?: boolean
  connectedText?: string
  connectingText?: string
  connectText?: string
  enabledWallets?: WalletType[]
  priorityWallets?: WalletType[]
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'md',
  connectedText: 'Connected',
  connectingText: 'Connecting...',
  connectText: 'Connect Wallet',
  enabledWallets: () => ['metamask', 'walletconnect', 'coinbase', 'phantom', 'trust', 'argent', 'rainbow', 'ledger'],
  priorityWallets: () => ['metamask', 'walletconnect', 'coinbase']
})

const emit = defineEmits<{
  connect: [address: string]
  disconnect: []
  error: [error: Error]
}>()

const showModal = ref(false)
const isConnecting = ref(false)
const isConnected = ref(false)
const connectedAddress = ref<string>('')

const buttonText = computed(() => {
  if (isConnected.value) return props.connectedText
  if (isConnecting.value) return props.connectingText
  return props.connectText
})

const sizeClasses = computed(() => {
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  }
  return sizes[props.size]
})

const variantClasses = computed(() => {
  const variants = {
    default: 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow-md',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950',
    ghost: 'text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950',
    gradient: 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl'
  }
  return variants[props.variant]
})

const buttonClasses = computed(() => {
  const baseClasses = 'rounded-lg font-medium transition-all duration-200 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100'
  return [
    baseClasses,
    sizeClasses.value,
    variantClasses.value,
    props.className
  ].filter(Boolean).join(' ')
})

const openModal = () => {
  if (!isConnected.value) {
    showModal.value = true
  } else {
    disconnect()
  }
}

const closeModal = () => {
  showModal.value = false
}

const handleConnect = async (walletType: string) => {
  isConnecting.value = true
  showModal.value = false

  try {
    await new Promise(resolve => setTimeout(resolve, 2000))

    const mockAddress = '0x' + Array.from({ length: 40 }, () =>
      Math.floor(Math.random() * 16).toString(16)
    ).join('')

    connectedAddress.value = mockAddress
    isConnected.value = true
    emit('connect', mockAddress)
  } catch (error) {
    emit('error', error as Error)
  } finally {
    isConnecting.value = false
  }
}

const disconnect = () => {
  isConnected.value = false
  connectedAddress.value = ''
  emit('disconnect')
}
</script>