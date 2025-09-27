import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import WalletConnectModal from '../../../ui/src/components/auth/WalletConnectModal.vue'

const meta: Meta<typeof WalletConnectModal> = {
  title: 'Auth/WalletConnectModal',
  component: WalletConnectModal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A modal component for selecting and connecting Web3 wallets. Displays popular wallet options like MetaMask, WalletConnect, Coinbase, and Phantom.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    onClose: {
      action: 'close',
      description: 'Event emitted when modal is closed',
    },
    onConnect: {
      action: 'connect',
      description: 'Event emitted when a wallet is selected for connection',
    },
    enabledWallets: {
      control: 'check',
      options: ['metamask', 'walletconnect', 'coinbase', 'phantom', 'trust', 'argent', 'rainbow', 'ledger'],
      description: 'Wallets available for connection',
    },
    priorityWallets: {
      control: 'check',
      options: ['metamask', 'walletconnect', 'coinbase', 'phantom', 'trust', 'argent', 'rainbow', 'ledger'],
      description: 'Wallets shown in priority/popular section',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { WalletConnectModal },
    setup() {
      const showModal = ref(true)

      const handleClose = () => {
        showModal.value = false
        setTimeout(() => {
          showModal.value = true
        }, 500)
      }

      const handleConnect = (walletType: string) => {
        console.log('Connecting to:', walletType)
        alert(`Connecting to ${walletType}`)
      }

      return {
        showModal,
        handleClose,
        handleConnect,
      }
    },
    template: `
      <div>
        <WalletConnectModal
          v-if="showModal"
          @close="handleClose"
          @connect="handleConnect"
        />
        <div v-if="!showModal" class="text-center p-4">
          <p class="text-gray-600 dark:text-gray-400">Modal closed. Reopening...</p>
        </div>
      </div>
    `,
  }),
}

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  decorators: [
    () => ({
      template: '<div class="dark"><story /></div>',
    }),
  ],
  render: () => ({
    components: { WalletConnectModal },
    setup() {
      const showModal = ref(true)

      const handleClose = () => {
        showModal.value = false
        setTimeout(() => {
          showModal.value = true
        }, 500)
      }

      const handleConnect = (walletType: string) => {
        console.log('Dark mode - Connecting to:', walletType)
      }

      return {
        showModal,
        handleClose,
        handleConnect,
      }
    },
    template: `
      <WalletConnectModal
        v-if="showModal"
        @close="handleClose"
        @connect="handleConnect"
      />
    `,
  }),
}

export const WithCustomTrigger: Story = {
  render: () => ({
    components: { WalletConnectModal },
    setup() {
      const showModal = ref(false)

      const openModal = () => {
        showModal.value = true
      }

      const handleClose = () => {
        showModal.value = false
      }

      const handleConnect = (walletType: string) => {
        console.log('Connecting to:', walletType)
        showModal.value = false
      }

      return {
        showModal,
        openModal,
        handleClose,
        handleConnect,
      }
    },
    template: `
      <div>
        <button
          @click="openModal"
          class="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all"
        >
          Open Wallet Selection
        </button>

        <Teleport to="body">
          <WalletConnectModal
            v-if="showModal"
            @close="handleClose"
            @connect="handleConnect"
          />
        </Teleport>
      </div>
    `,
  }),
}

export const Interactive: Story = {
  render: () => ({
    components: { WalletConnectModal },
    setup() {
      const showModal = ref(false)
      const connectionStatus = ref('')
      const selectedWallet = ref('')

      const openModal = () => {
        showModal.value = true
        connectionStatus.value = ''
      }

      const handleClose = () => {
        showModal.value = false
        if (!selectedWallet.value) {
          connectionStatus.value = 'Connection cancelled'
        }
      }

      const handleConnect = async (walletType: string) => {
        selectedWallet.value = walletType
        connectionStatus.value = `Connecting to ${walletType}...`
        showModal.value = false

        // Simulate connection process
        await new Promise(resolve => setTimeout(resolve, 2000))
        connectionStatus.value = `Connected to ${walletType}!`
      }

      const disconnect = () => {
        selectedWallet.value = ''
        connectionStatus.value = 'Disconnected'
      }

      return {
        showModal,
        openModal,
        handleClose,
        handleConnect,
        connectionStatus,
        selectedWallet,
        disconnect,
      }
    },
    template: `
      <div class="min-h-[400px] flex flex-col items-center justify-center gap-4">
        <div class="text-center">
          <h3 class="text-lg font-semibold mb-2">Wallet Connection Demo</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Click the button below to open the wallet selection modal
          </p>
        </div>

        <button
          v-if="!selectedWallet"
          @click="openModal"
          class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all hover:scale-105 active:scale-95"
        >
          Connect Wallet
        </button>

        <div v-if="selectedWallet" class="flex flex-col items-center gap-3">
          <div class="flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900 rounded-lg">
            <svg class="w-5 h-5 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span class="text-green-800 dark:text-green-200 font-medium">{{ selectedWallet }}</span>
          </div>
          <button
            @click="disconnect"
            class="px-4 py-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-950 rounded-lg font-medium transition-all"
          >
            Disconnect
          </button>
        </div>

        <div v-if="connectionStatus" class="mt-4 text-sm text-gray-600 dark:text-gray-400">
          Status: {{ connectionStatus }}
        </div>

        <Teleport to="body">
          <WalletConnectModal
            v-if="showModal"
            @close="handleClose"
            @connect="handleConnect"
          />
        </Teleport>
      </div>
    `,
  }),
}

export const MetaMaskOnly: Story = {
  render: () => ({
    components: { WalletConnectModal },
    setup() {
      const showModal = ref(true)

      const handleClose = () => {
        showModal.value = false
        setTimeout(() => {
          showModal.value = true
        }, 500)
      }

      const handleConnect = (walletType: string) => {
        console.log('Connecting to:', walletType)
      }

      return {
        showModal,
        handleClose,
        handleConnect,
      }
    },
    template: `
      <WalletConnectModal
        v-if="showModal"
        :enabled-wallets="['metamask']"
        :priority-wallets="['metamask']"
        @close="handleClose"
        @connect="handleConnect"
      />
    `,
  }),
}

export const SolanaEcosystem: Story = {
  render: () => ({
    components: { WalletConnectModal },
    setup() {
      const showModal = ref(true)

      const handleClose = () => {
        showModal.value = false
        setTimeout(() => {
          showModal.value = true
        }, 500)
      }

      const handleConnect = (walletType: string) => {
        console.log('Connecting to:', walletType)
      }

      return {
        showModal,
        handleClose,
        handleConnect,
      }
    },
    template: `
      <WalletConnectModal
        v-if="showModal"
        :enabled-wallets="['phantom']"
        :priority-wallets="['phantom']"
        @close="handleClose"
        @connect="handleConnect"
      />
    `,
  }),
}

export const MobileWallets: Story = {
  render: () => ({
    components: { WalletConnectModal },
    setup() {
      const showModal = ref(true)

      const handleClose = () => {
        showModal.value = false
        setTimeout(() => {
          showModal.value = true
        }, 500)
      }

      const handleConnect = (walletType: string) => {
        console.log('Connecting to:', walletType)
      }

      return {
        showModal,
        handleClose,
        handleConnect,
      }
    },
    template: `
      <WalletConnectModal
        v-if="showModal"
        :enabled-wallets="['trust', 'rainbow', 'metamask']"
        :priority-wallets="['trust', 'rainbow']"
        @close="handleClose"
        @connect="handleConnect"
      />
    `,
  }),
}

export const CustomConfiguration: Story = {
  render: () => ({
    components: { WalletConnectModal },
    setup() {
      const showModal = ref(true)

      const handleClose = () => {
        showModal.value = false
        setTimeout(() => {
          showModal.value = true
        }, 500)
      }

      const handleConnect = (walletType: string) => {
        console.log('Connecting to:', walletType)
      }

      return {
        showModal,
        handleClose,
        handleConnect,
      }
    },
    template: `
      <WalletConnectModal
        v-if="showModal"
        :enabled-wallets="['metamask', 'phantom', 'ledger', 'argent']"
        :priority-wallets="['phantom', 'ledger']"
        @close="handleClose"
        @connect="handleConnect"
      />
    `,
  }),
}

export const MobileView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'iphone12',
    },
  },
  render: () => ({
    components: { WalletConnectModal },
    setup() {
      const showModal = ref(true)

      const handleClose = () => {
        showModal.value = false
        setTimeout(() => {
          showModal.value = true
        }, 500)
      }

      const handleConnect = (walletType: string) => {
        console.log('Mobile - Connecting to:', walletType)
      }

      return {
        showModal,
        handleClose,
        handleConnect,
      }
    },
    template: `
      <WalletConnectModal
        v-if="showModal"
        @close="handleClose"
        @connect="handleConnect"
      />
    `,
  }),
}