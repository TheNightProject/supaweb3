import type { Meta, StoryObj } from '@storybook/vue3'
import Web3Gate from '../../../ui/src/components/access/Web3Gate.vue'

// Mock address book for examples
const mockAddressBook = [
  'vitalik.eth',
  '0x742d35Cc6C4C4C7218243e428F9e99F50934e47E',
  '0x8ba1f109551bD432803012645Hac136c22C501e'
]

const mockRequirements = [
  {
    label: 'Hold minimum 100 tokens',
    value: '100 TOKENS',
    met: false
  },
  {
    label: 'Wallet connected',
    value: '',
    met: true
  },
  {
    label: 'Verified identity',
    value: '✓',
    met: false
  }
]

const meta: Meta<typeof Web3Gate> = {
  title: 'Access/Web3Gate',
  component: Web3Gate,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A token-gating component that restricts content access based on wallet connection, token holdings, NFT ownership, or custom requirements.'
      }
    }
  },
  decorators: [
    () => ({
      template: '<div class="min-w-[600px] min-h-[400px]"><story /></div>',
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    gateType: {
      control: 'select',
      options: ['wallet', 'token', 'nft', 'custom'],
      description: 'Type of gate to implement'
    },
    requirements: {
      control: 'object',
      description: 'Array of requirements to display'
    },
    tokenAddress: {
      control: 'text',
      description: 'Token contract address for token gating'
    },
    minTokenBalance: {
      control: 'text',
      description: 'Minimum token balance required'
    },
    tokenSymbol: {
      control: 'text',
      description: 'Token symbol to display'
    },
    nftAddress: {
      control: 'text',
      description: 'NFT contract address'
    },
    nftName: {
      control: 'text',
      description: 'NFT collection name'
    },
    showPreview: {
      control: 'boolean',
      description: 'Show blurred content preview'
    },
    blurContent: {
      control: 'boolean',
      description: 'Apply blur effect to preview'
    },
    blurAmount: {
      control: { type: 'range', min: 1, max: 20, step: 1 },
      description: 'Blur intensity (px)'
    },
    hideContent: {
      control: 'boolean',
      description: 'Completely hide content when locked'
    },
    overlayStyle: {
      control: 'select',
      options: ['glass', 'solid', 'minimal'],
      description: 'Style of the gate overlay'
    },
    gateTitle: {
      control: 'text',
      description: 'Custom gate title'
    },
    gateDescription: {
      control: 'text',
      description: 'Custom gate description'
    },
    actionButtonText: {
      control: 'text',
      description: 'Custom action button text'
    },
    showRequirements: {
      control: 'boolean',
      description: 'Show requirements list'
    },
    showActionButton: {
      control: 'boolean',
      description: 'Show action button'
    },
    isConnected: {
      control: 'boolean',
      description: 'Wallet connection state'
    },
    userAddress: {
      control: 'text',
      description: 'Connected wallet address'
    },
    userTokenBalance: {
      control: 'text',
      description: 'User token balance'
    },
    userNFTBalance: {
      control: { type: 'range', min: 0, max: 10, step: 1 },
      description: 'Number of NFTs owned'
    },
    loading: {
      control: 'boolean',
      description: 'Show loading state'
    },
    loadingText: {
      control: 'text',
      description: 'Loading state message'
    },
    currentStatus: {
      control: 'text',
      description: 'Current status message'
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes'
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

const sampleContent = `
  <div class="space-y-6">
    <div class="text-center">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
        Premium Content
      </h2>
      <p class="text-gray-600 dark:text-gray-400">
        This exclusive content is only available to verified users.
      </p>
    </div>

    <div class="grid gap-4 md:grid-cols-2">
      <div class="rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 p-6 text-white">
        <h3 class="text-lg font-semibold mb-2">Advanced Analytics</h3>
        <p class="text-sm opacity-90">Access detailed market analysis and trading insights.</p>
      </div>

      <div class="rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 p-6 text-white">
        <h3 class="text-lg font-semibold mb-2">Exclusive Features</h3>
        <p class="text-sm opacity-90">Unlock premium trading tools and indicators.</p>
      </div>
    </div>

    <div class="text-center">
      <button class="px-6 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors">
        Access Premium Dashboard
      </button>
    </div>
  </div>
`

export const WalletGate: Story = {
  args: {
    gateType: 'wallet',
    isConnected: false,
    userAddress: '',
    showPreview: true,
    blurContent: true,
    blurAmount: 8,
    overlayStyle: 'glass'
  },
  render: (args) => ({
    components: { Web3Gate },
    setup() {
      return { args }
    },
    template: `
      <Web3Gate v-bind="args">
        ${sampleContent}
      </Web3Gate>
    `
  })
}

export const WalletConnected: Story = {
  args: {
    ...WalletGate.args,
    isConnected: true,
    userAddress: '0x742d35Cc6C4C4C7218243e428F9e99F50934e47E'
  },
  render: (args) => ({
    components: { Web3Gate },
    setup() {
      return { args }
    },
    template: `
      <Web3Gate v-bind="args">
        ${sampleContent}
      </Web3Gate>
    `
  })
}

export const TokenGate: Story = {
  args: {
    gateType: 'token',
    tokenAddress: '0xA0b86a33E6441E13C7b029F0E2e2f6B0D67F5A64',
    minTokenBalance: '100',
    tokenSymbol: 'SUPA',
    isConnected: true,
    userAddress: '0x742d35Cc6C4C4C7218243e428F9e99F50934e47E',
    userTokenBalance: '50',
    showPreview: true,
    blurContent: true,
    overlayStyle: 'glass'
  },
  render: (args) => ({
    components: { Web3Gate },
    setup() {
      return { args }
    },
    template: `
      <Web3Gate v-bind="args">
        ${sampleContent}
      </Web3Gate>
    `
  })
}

export const TokenGateUnlocked: Story = {
  args: {
    ...TokenGate.args,
    userTokenBalance: '250'
  },
  render: (args) => ({
    components: { Web3Gate },
    setup() {
      return { args }
    },
    template: `
      <Web3Gate v-bind="args">
        ${sampleContent}
      </Web3Gate>
    `
  })
}

export const NFTGate: Story = {
  args: {
    gateType: 'nft',
    nftAddress: '0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB',
    nftName: 'CryptoPunks',
    isConnected: true,
    userAddress: '0x742d35Cc6C4C4C7218243e428F9e99F50934e47E',
    userNFTBalance: 0,
    showPreview: true,
    blurContent: true,
    overlayStyle: 'glass'
  },
  render: (args) => ({
    components: { Web3Gate },
    setup() {
      return { args }
    },
    template: `
      <Web3Gate v-bind="args">
        ${sampleContent}
      </Web3Gate>
    `
  })
}

export const NFTGateUnlocked: Story = {
  args: {
    ...NFTGate.args,
    userNFTBalance: 3
  },
  render: (args) => ({
    components: { Web3Gate },
    setup() {
      return { args }
    },
    template: `
      <Web3Gate v-bind="args">
        ${sampleContent}
      </Web3Gate>
    `
  })
}

export const CustomGate: Story = {
  args: {
    gateType: 'custom',
    requirements: mockRequirements,
    isConnected: true,
    userAddress: '0x742d35Cc6C4C4C7218243e428F9e99F50934e47E',
    showPreview: true,
    blurContent: true,
    overlayStyle: 'glass',
    gateTitle: 'VIP Access Required',
    gateDescription: 'Complete all requirements to unlock exclusive content'
  },
  render: (args) => ({
    components: { Web3Gate },
    setup() {
      return { args }
    },
    template: `
      <Web3Gate v-bind="args">
        ${sampleContent}
      </Web3Gate>
    `
  })
}

export const CustomGateUnlocked: Story = {
  args: {
    ...CustomGate.args,
    requirements: mockRequirements.map(req => ({ ...req, met: true }))
  },
  render: (args) => ({
    components: { Web3Gate },
    setup() {
      return { args }
    },
    template: `
      <Web3Gate v-bind="args">
        ${sampleContent}
      </Web3Gate>
    `
  })
}

export const LoadingState: Story = {
  args: {
    gateType: 'token',
    tokenSymbol: 'ETH',
    loading: true,
    loadingText: 'Verifying token balance...',
    showPreview: true,
    blurContent: true,
    overlayStyle: 'glass'
  },
  render: (args) => ({
    components: { Web3Gate },
    setup() {
      return { args }
    },
    template: `
      <Web3Gate v-bind="args">
        ${sampleContent}
      </Web3Gate>
    `
  })
}

export const NoPreview: Story = {
  args: {
    gateType: 'token',
    tokenSymbol: 'USDC',
    minTokenBalance: '1000',
    isConnected: false,
    showPreview: false,
    overlayStyle: 'solid'
  },
  render: (args) => ({
    components: { Web3Gate },
    setup() {
      return { args }
    },
    template: `
      <Web3Gate v-bind="args">
        ${sampleContent}
      </Web3Gate>
    `
  })
}

export const HiddenContent: Story = {
  args: {
    gateType: 'nft',
    nftName: 'Premium NFT',
    isConnected: true,
    userNFTBalance: 0,
    showPreview: true,
    hideContent: true,
    overlayStyle: 'minimal'
  },
  render: (args) => ({
    components: { Web3Gate },
    setup() {
      return { args }
    },
    template: `
      <Web3Gate v-bind="args">
        ${sampleContent}
      </Web3Gate>
    `
  })
}

export const GlassOverlay: Story = {
  args: {
    gateType: 'token',
    tokenSymbol: 'DAI',
    minTokenBalance: '500',
    isConnected: true,
    userTokenBalance: '200',
    showPreview: true,
    blurContent: true,
    blurAmount: 12,
    overlayStyle: 'glass'
  },
  render: (args) => ({
    components: { Web3Gate },
    setup() {
      return { args }
    },
    template: `
      <Web3Gate v-bind="args">
        ${sampleContent}
      </Web3Gate>
    `
  })
}

export const SolidOverlay: Story = {
  args: {
    ...GlassOverlay.args,
    overlayStyle: 'solid'
  },
  render: (args) => ({
    components: { Web3Gate },
    setup() {
      return { args }
    },
    template: `
      <Web3Gate v-bind="args">
        ${sampleContent}
      </Web3Gate>
    `
  })
}

export const MinimalOverlay: Story = {
  args: {
    ...GlassOverlay.args,
    overlayStyle: 'minimal'
  },
  render: (args) => ({
    components: { Web3Gate },
    setup() {
      return { args }
    },
    template: `
      <Web3Gate v-bind="args">
        ${sampleContent}
      </Web3Gate>
    `
  })
}

export const WithStatusMessage: Story = {
  args: {
    gateType: 'token',
    tokenSymbol: 'LINK',
    minTokenBalance: '10',
    isConnected: true,
    userTokenBalance: '5',
    currentStatus: 'You need 5 more LINK tokens to access this content',
    showPreview: true,
    blurContent: true,
    overlayStyle: 'glass'
  },
  render: (args) => ({
    components: { Web3Gate },
    setup() {
      return { args }
    },
    template: `
      <Web3Gate v-bind="args">
        ${sampleContent}
      </Web3Gate>
    `
  })
}

export const Interactive: Story = {
  render: () => ({
    components: { Web3Gate },
    template: `
      <div class="space-y-6">
        <div class="text-center">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Interactive Web3Gate
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Try connecting wallet and adjusting token balance
          </p>
        </div>

        <div class="flex justify-center space-x-4">
          <button
            @click="isConnected = !isConnected"
            :class="[
              'px-4 py-2 rounded-lg font-medium transition-colors',
              isConnected
                ? 'bg-green-500 text-white hover:bg-green-600'
                : 'bg-blue-500 text-white hover:bg-blue-600'
            ]"
          >
            {{ isConnected ? 'Disconnect' : 'Connect Wallet' }}
          </button>

          <button
            @click="toggleBalance"
            class="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
          >
            {{ hasEnoughTokens ? 'Reduce Balance' : 'Add Tokens' }}
          </button>
        </div>

        <Web3Gate
          gate-type="token"
          token-symbol="SUPA"
          min-token-balance="100"
          :is-connected="isConnected"
          :user-token-balance="tokenBalance"
          user-address="0x742d35Cc6C4C4C7218243e428F9e99F50934e47E"
          :loading="loading"
          @connect-wallet="handleConnectWallet"
          @unlock="handleUnlock"
        >
          ${sampleContent}
        </Web3Gate>

        <div v-if="lastAction" class="rounded-lg bg-gray-100 p-3 dark:bg-gray-800">
          <div class="text-sm font-medium text-gray-700 dark:text-gray-300">Last Action:</div>
          <div class="text-xs text-gray-600 dark:text-gray-400">{{ lastAction }}</div>
        </div>
      </div>
    `,
    data() {
      return {
        isConnected: false,
        tokenBalance: '50',
        loading: false,
        lastAction: null
      }
    },
    computed: {
      hasEnoughTokens() {
        return parseFloat(this.tokenBalance) >= 100
      }
    },
    methods: {
      toggleBalance() {
        this.tokenBalance = this.hasEnoughTokens ? '50' : '150'
        this.lastAction = `Token balance changed to ${this.tokenBalance} SUPA`
      },
      handleConnectWallet() {
        this.loading = true
        this.lastAction = 'Connecting wallet...'

        setTimeout(() => {
          this.isConnected = true
          this.loading = false
          this.lastAction = 'Wallet connected successfully!'
        }, 2000)
      },
      handleUnlock(data) {
        this.lastAction = `Unlock attempted for gate type: ${data.gateType}`
      }
    }
  })
}

export const MultipleGates: Story = {
  render: () => ({
    components: { Web3Gate },
    template: `
      <div class="space-y-8">
        <div class="text-center">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Multiple Gate Types
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Different gating mechanisms side by side
          </p>
        </div>

        <div class="grid gap-6 lg:grid-cols-2">
          <div>
            <h4 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              Wallet Gate (Connected)
            </h4>
            <Web3Gate
              gate-type="wallet"
              :is-connected="true"
              user-address="0x742d35Cc...47E"
              class="h-64"
            >
              <div class="flex items-center justify-center h-full">
                <div class="text-center text-green-600 dark:text-green-400">
                  <div class="text-2xl mb-2">✓</div>
                  <div>Wallet Connected</div>
                </div>
              </div>
            </Web3Gate>
          </div>

          <div>
            <h4 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              Token Gate (Insufficient)
            </h4>
            <Web3Gate
              gate-type="token"
              token-symbol="ETH"
              min-token-balance="1"
              :is-connected="true"
              user-token-balance="0.5"
              class="h-64"
            >
              <div class="flex items-center justify-center h-full">
                <div class="text-center text-orange-600 dark:text-orange-400">
                  <div class="text-2xl mb-2">⚡</div>
                  <div>Premium Features</div>
                </div>
              </div>
            </Web3Gate>
          </div>

          <div>
            <h4 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              NFT Gate (No NFTs)
            </h4>
            <Web3Gate
              gate-type="nft"
              nft-name="VIP Pass"
              :is-connected="true"
              :user-nft-balance="0"
              class="h-64"
            >
              <div class="flex items-center justify-center h-full">
                <div class="text-center text-purple-600 dark:text-purple-400">
                  <div class="text-2xl mb-2">🎨</div>
                  <div>Exclusive Art Gallery</div>
                </div>
              </div>
            </Web3Gate>
          </div>

          <div>
            <h4 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              Custom Gate (Partial)
            </h4>
            <Web3Gate
              gate-type="custom"
              :requirements="[
                { label: 'Verified Account', met: true, value: '✓' },
                { label: 'Premium Member', met: false, value: '' }
              ]"
              gate-title="VIP Access"
              class="h-64"
            >
              <div class="flex items-center justify-center h-full">
                <div class="text-center text-indigo-600 dark:text-indigo-400">
                  <div class="text-2xl mb-2">👑</div>
                  <div>VIP Content</div>
                </div>
              </div>
            </Web3Gate>
          </div>
        </div>
      </div>
    `
  })
}