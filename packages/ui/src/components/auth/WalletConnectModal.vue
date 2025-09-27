<template>
  <div
    class="fixed inset-0 z-50 overflow-y-auto"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div class="flex min-h-screen items-center justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 dark:bg-gray-900 dark:bg-opacity-80 transition-opacity"
        aria-hidden="true"
        @click="$emit('close')"
      ></div>

      <span class="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">&#8203;</span>

      <div class="inline-block transform overflow-hidden rounded-2xl bg-white dark:bg-gray-800 px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md sm:p-6 sm:align-middle">
        <div>
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white" id="modal-title">
              Connect Your Wallet
            </h3>
            <button
              @click="$emit('close')"
              class="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 transition-colors"
            >
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div class="space-y-3">
            <button
              v-for="wallet in wallets"
              :key="wallet.id"
              @click="handleConnect(wallet.id)"
              :class="walletButtonClasses"
              class="wallet-button"
            >
              <div class="flex items-center justify-between w-full">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-xl flex items-center justify-center" :class="wallet.bgClass">
                    <Web3Icon
                      type="wallets"
                      variant="branded"
                      :symbol="wallet.symbol"
                      :size="24"
                      :fallback-text="wallet.name.charAt(0)"
                    />
                  </div>
                  <div class="text-left">
                    <div class="font-medium text-gray-900 dark:text-white">{{ wallet.name }}</div>
                    <div class="text-sm text-gray-500 dark:text-gray-400">{{ wallet.description }}</div>
                  </div>
                </div>
                <svg class="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          </div>

          <div class="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <div class="flex items-center justify-between mb-4">
              <span class="text-sm text-gray-500 dark:text-gray-400">Popular</span>
              <div class="flex gap-2">
                <button
                  v-for="popular in popularWallets"
                  :key="popular.id"
                  @click="handleConnect(popular.id)"
                  class="w-10 h-10 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all hover:scale-110 flex items-center justify-center"
                  :title="popular.name"
                >
                  <Web3Icon
                    type="wallets"
                    variant="branded"
                    :symbol="popular.symbol"
                    :size="20"
                    :fallback-text="popular.name.charAt(0)"
                  />
                </button>
              </div>
            </div>

            <button
              @click="showMore = !showMore"
              class="w-full text-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
            >
              {{ showMore ? 'Show Less' : 'Show More Options' }}
            </button>

            <div v-if="showMore" class="mt-4 space-y-2">
              <button
                v-for="wallet in moreWallets"
                :key="wallet.id"
                @click="handleConnect(wallet.id)"
                class="w-full p-3 text-left rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all hover:bg-gray-50 dark:hover:bg-gray-750"
              >
                <div class="flex items-center gap-3">
                  <Web3Icon
                    type="wallets"
                    variant="branded"
                    :symbol="wallet.symbol"
                    :size="20"
                    :fallback-text="wallet.name.charAt(0)"
                  />
                  <span class="text-sm font-medium text-gray-700 dark:text-gray-300">{{ wallet.name }}</span>
                </div>
              </button>
            </div>
          </div>

          <div class="mt-6 text-center">
            <p class="text-xs text-gray-500 dark:text-gray-400">
              By connecting a wallet, you agree to our
              <a href="#" class="text-blue-600 dark:text-blue-400 hover:underline">Terms of Service</a>
              and
              <a href="#" class="text-blue-600 dark:text-blue-400 hover:underline">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { WalletType } from './WalletConnectButton.vue'
import Web3Icon from '../common/Web3Icon.vue'

interface Props {
  enabledWallets?: WalletType[]
  priorityWallets?: WalletType[]
}

const props = withDefaults(defineProps<Props>(), {
  enabledWallets: () => ['metamask', 'walletconnect', 'coinbase', 'phantom', 'trust', 'argent', 'rainbow', 'ledger'],
  priorityWallets: () => ['metamask', 'walletconnect', 'coinbase']
})

const emit = defineEmits<{
  close: []
  connect: [walletType: string]
}>()

const showMore = ref(false)

const allWallets = [
  {
    id: 'metamask' as WalletType,
    name: 'MetaMask',
    description: 'Connect using browser wallet',
    symbol: 'metamask',
    bgClass: 'bg-orange-100 dark:bg-orange-900'
  },
  {
    id: 'walletconnect' as WalletType,
    name: 'WalletConnect',
    description: 'Scan with wallet to connect',
    symbol: 'wallet-connect',
    bgClass: 'bg-blue-100 dark:bg-blue-900'
  },
  {
    id: 'coinbase' as WalletType,
    name: 'Coinbase Wallet',
    description: 'Connect with Coinbase',
    symbol: 'coinbase',
    bgClass: 'bg-blue-100 dark:bg-blue-900'
  },
  {
    id: 'phantom' as WalletType,
    name: 'Phantom',
    description: 'Connect Solana wallet',
    symbol: 'phantom',
    bgClass: 'bg-purple-100 dark:bg-purple-900'
  },
  {
    id: 'trust' as WalletType,
    name: 'Trust Wallet',
    description: 'Mobile-first wallet',
    symbol: 'trust',
    bgClass: 'bg-blue-100 dark:bg-blue-900'
  },
  {
    id: 'argent' as WalletType,
    name: 'Argent',
    description: 'Smart contract wallet',
    symbol: 'argent',
    bgClass: 'bg-gray-100 dark:bg-gray-900'
  },
  {
    id: 'rainbow' as WalletType,
    name: 'Rainbow',
    description: 'Ethereum wallet',
    symbol: 'rainbow',
    bgClass: 'bg-gradient-to-r from-pink-100 to-blue-100 dark:from-pink-900 dark:to-blue-900'
  },
  {
    id: 'ledger' as WalletType,
    name: 'Ledger',
    description: 'Hardware wallet',
    symbol: 'ledger',
    bgClass: 'bg-gray-100 dark:bg-gray-800'
  }
]

const wallets = computed(() => {
  return allWallets.filter(wallet => props.enabledWallets.includes(wallet.id))
})

const popularWallets = computed(() => {
  return allWallets
    .filter(wallet => props.priorityWallets.includes(wallet.id) && props.enabledWallets.includes(wallet.id))
    .map(wallet => ({
      id: wallet.id,
      name: wallet.name,
      symbol: wallet.symbol
    }))
})

const moreWallets = computed(() => {
  const priorityIds = props.priorityWallets
  return allWallets
    .filter(wallet =>
      props.enabledWallets.includes(wallet.id) &&
      !priorityIds.includes(wallet.id)
    )
    .map(wallet => ({
      id: wallet.id,
      name: wallet.name,
      symbol: wallet.symbol
    }))
})

const walletButtonClasses = computed(() => {
  return 'w-full p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-gray-50 dark:hover:bg-gray-750 transition-all hover:shadow-md group'
})

const handleConnect = (walletId: string) => {
  emit('connect', walletId)
}
</script>

<style scoped>
.wallet-button:hover {
  transform: translateY(-2px);
}

@keyframes slideUp {
  from {
    transform: translateY(10px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.wallet-button {
  animation: slideUp 0.3s ease-out;
}
</style>