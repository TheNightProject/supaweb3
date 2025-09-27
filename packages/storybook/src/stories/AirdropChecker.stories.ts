import type { Meta, StoryObj } from '@storybook/vue3'
import AirdropChecker from '../../../ui/src/components/airdrops/AirdropChecker.vue'

// Mock protocols data
const mockProtocols = [
  {
    id: 'uniswap',
    name: 'Uniswap',
    icon: '🦄',
    iconBg: 'bg-gradient-to-r from-pink-500 to-purple-600',
    category: 'DEX'
  },
  {
    id: 'compound',
    name: 'Compound',
    icon: '🏦',
    iconBg: 'bg-gradient-to-r from-green-500 to-blue-600',
    category: 'Lending'
  },
  {
    id: 'aave',
    name: 'Aave',
    icon: '👻',
    iconBg: 'bg-gradient-to-r from-blue-500 to-indigo-600',
    category: 'Lending'
  },
  {
    id: 'ens',
    name: 'ENS',
    icon: '🏷️',
    iconBg: 'bg-gradient-to-r from-blue-500 to-cyan-600',
    category: 'Identity'
  },
  {
    id: 'optimism',
    name: 'Optimism',
    icon: '🔴',
    iconBg: 'bg-gradient-to-r from-red-500 to-pink-600',
    category: 'Layer 2'
  },
  {
    id: 'arbitrum',
    name: 'Arbitrum',
    icon: '🔵',
    iconBg: 'bg-gradient-to-r from-blue-500 to-cyan-600',
    category: 'Layer 2'
  },
  {
    id: 'polygon',
    name: 'Polygon',
    icon: '🔷',
    iconBg: 'bg-gradient-to-r from-purple-500 to-indigo-600',
    category: 'Layer 2'
  },
  {
    id: 'looksrare',
    name: 'LooksRare',
    icon: '👀',
    iconBg: 'bg-gradient-to-r from-green-500 to-teal-600',
    category: 'NFT'
  },
  {
    id: 'blur',
    name: 'Blur',
    icon: '💨',
    iconBg: 'bg-gradient-to-r from-orange-500 to-red-600',
    category: 'NFT'
  },
  {
    id: 'dydx',
    name: 'dYdX',
    icon: '📈',
    iconBg: 'bg-gradient-to-r from-purple-500 to-pink-600',
    category: 'Derivatives'
  }
]

// Mock results data
const mockResults = [
  {
    id: '1',
    protocol: 'Uniswap',
    token: 'UNI',
    amount: '400',
    usdValue: '2400',
    eligible: true,
    chain: 'ethereum',
    deadline: '2025-01-15',
    icon: '🦄',
    iconBg: 'bg-gradient-to-r from-pink-500 to-purple-600',
    checking: false
  },
  {
    id: '2',
    protocol: 'Optimism',
    token: 'OP',
    amount: '1200',
    usdValue: '1800',
    eligible: true,
    chain: 'optimism',
    deadline: '2024-12-31',
    icon: '🔴',
    iconBg: 'bg-gradient-to-r from-red-500 to-pink-600',
    checking: false
  },
  {
    id: '3',
    protocol: 'ENS',
    token: 'ENS',
    amount: '0',
    usdValue: '0',
    eligible: false,
    chain: 'ethereum',
    reason: 'No ENS domain registered before snapshot',
    icon: '🏷️',
    iconBg: 'bg-gradient-to-r from-blue-500 to-indigo-600',
    checking: false
  },
  {
    id: '4',
    protocol: 'Compound',
    token: 'COMP',
    amount: '25',
    usdValue: '1250',
    eligible: true,
    chain: 'ethereum',
    icon: '🏦',
    iconBg: 'bg-gradient-to-r from-green-500 to-blue-600',
    checking: false
  },
  {
    id: '5',
    protocol: 'Blur',
    token: 'BLUR',
    amount: '300',
    usdValue: '180',
    eligible: true,
    chain: 'ethereum',
    deadline: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days from now
    icon: '💨',
    iconBg: 'bg-gradient-to-r from-orange-500 to-red-600',
    checking: false
  }
]

const meta: Meta<typeof AirdropChecker> = {
  title: 'Airdrops/AirdropChecker',
  component: AirdropChecker,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A comprehensive tool for checking airdrop eligibility across multiple protocols with filtering, sorting, and batch claiming capabilities.'
      }
    }
  },
  decorators: [
    () => ({
      template: '<div class="min-w-[700px] max-w-[900px]"><story /></div>',
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Title of the checker interface'
    },
    subtitle: {
      control: 'text',
      description: 'Subtitle or description'
    },
    userAddress: {
      control: 'text',
      description: 'Connected wallet address'
    },
    isConnected: {
      control: 'boolean',
      description: 'Wallet connection status'
    },
    showConnectWallet: {
      control: 'boolean',
      description: 'Show wallet connection prompt'
    },
    availableProtocols: {
      control: 'object',
      description: 'Array of available protocols'
    },
    defaultProtocols: {
      control: 'object',
      description: 'Default selected protocols'
    },
    showProtocolFilter: {
      control: 'boolean',
      description: 'Show protocol selection checkboxes'
    },
    showResultsFilter: {
      control: 'boolean',
      description: 'Show results filtering options'
    },
    addressPlaceholder: {
      control: 'text',
      description: 'Placeholder text for address input'
    },
    checking: {
      control: 'boolean',
      description: 'Show checking state'
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes'
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Airdrop Eligibility Checker',
    subtitle: 'Check your wallet across multiple protocols for claimable airdrops',
    userAddress: '',
    isConnected: false,
    showConnectWallet: true,
    availableProtocols: mockProtocols,
    defaultProtocols: ['uniswap', 'compound', 'ens', 'optimism', 'arbitrum'],
    showProtocolFilter: true,
    showResultsFilter: true,
    addressPlaceholder: '0x... or yourname.eth',
    checking: false
  }
}

export const ConnectedWallet: Story = {
  args: {
    ...Default.args,
    userAddress: '0x742d35Cc6C4C4C7218243e428F9e99F50934e47E',
    isConnected: true,
    showConnectWallet: false
  }
}

export const WithResults: Story = {
  render: () => ({
    components: { AirdropChecker },
    setup() {
      return {
        protocols: mockProtocols,
        results: mockResults
      }
    },
    template: `
      <AirdropChecker
        :available-protocols="protocols"
        :default-protocols="['uniswap', 'optimism', 'compound', 'blur']"
        :user-address="'0x742d35Cc6C4C4C7218243e428F9e99F50934e47E'"
        :is-connected="true"
        ref="checker"
      />
    `,
    mounted() {
      // Simulate results after component mounts
      setTimeout(() => {
        this.$refs.checker?.setResults(this.results)
      }, 100)
    }
  })
}

export const Checking: Story = {
  args: {
    ...Default.args,
    userAddress: '0x742d35Cc6C4C4C7218243e428F9e99F50934e47E',
    isConnected: true,
    checking: true
  }
}

export const LimitedProtocols: Story = {
  args: {
    ...Default.args,
    availableProtocols: mockProtocols.slice(0, 5),
    defaultProtocols: ['uniswap', 'compound', 'ens'],
    userAddress: '0x742d35Cc6C4C4C7218243e428F9e99F50934e47E',
    isConnected: true
  }
}

export const NoProtocolFilter: Story = {
  args: {
    ...Default.args,
    showProtocolFilter: false,
    availableProtocols: mockProtocols.slice(0, 3),
    defaultProtocols: ['uniswap', 'compound', 'ens'],
    userAddress: '0x742d35Cc6C4C4C7218243e428F9e99F50934e47E',
    isConnected: true
  }
}

export const Interactive: Story = {
  render: () => ({
    components: { AirdropChecker },
    template: `
      <div class="space-y-6">
        <div class="text-center">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Interactive Airdrop Checker
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Try checking different addresses and see the results
          </p>
        </div>

        <AirdropChecker
          :available-protocols="protocols"
          :default-protocols="selectedProtocols"
          :user-address="userAddress"
          :is-connected="isConnected"
          :checking="checking"
          title="Multi-Protocol Checker"
          subtitle="Discover unclaimed airdrops across DeFi"
          ref="checker"
          @check="handleCheck"
          @connect-wallet="handleConnectWallet"
          @claim-eligible="handleClaimEligible"
          @export-results="handleExportResults"
        />

        <div v-if="lastAction" class="rounded-lg bg-gray-100 p-3 dark:bg-gray-800">
          <div class="text-sm font-medium text-gray-700 dark:text-gray-300">Last Action:</div>
          <pre class="mt-1 text-xs text-gray-600 dark:text-gray-400">{{ lastAction }}</pre>
        </div>
      </div>
    `,
    data() {
      return {
        protocols: mockProtocols,
        selectedProtocols: ['uniswap', 'optimism', 'compound', 'blur'],
        userAddress: '',
        isConnected: false,
        checking: false,
        lastAction: null
      }
    },
    methods: {
      async handleCheck(data) {
        this.checking = true
        this.lastAction = `Checking ${data.address} across ${data.protocols.length} protocols...`

        // Simulate checking with progress
        const totalSteps = 10
        for (let i = 0; i <= totalSteps; i++) {
          await new Promise(resolve => setTimeout(resolve, 300))
          this.$refs.checker?.setProgress((i / totalSteps) * 100)
        }

        // Set results
        const results = mockResults.filter(r =>
          data.protocols.some(p => r.protocol.toLowerCase().includes(p))
        )

        this.$refs.checker?.setResults(results)
        this.checking = false
        this.lastAction = `Found ${results.filter(r => r.eligible).length} eligible airdrops worth $${results.reduce((sum, r) => sum + parseFloat(r.usdValue || 0), 0).toLocaleString()}`
      },

      handleConnectWallet() {
        this.lastAction = 'Connecting wallet...'
        setTimeout(() => {
          this.isConnected = true
          this.userAddress = '0x742d35Cc6C4C4C7218243e428F9e99F50934e47E'
          this.lastAction = 'Wallet connected successfully!'
        }, 2000)
      },

      handleClaimEligible(eligibleAirdrops) {
        this.lastAction = `Claiming ${eligibleAirdrops.length} eligible airdrops...`
        setTimeout(() => {
          this.lastAction = `Successfully claimed all eligible airdrops!`
        }, 3000)
      },

      handleExportResults(results) {
        this.lastAction = `Exported ${results.length} results to CSV`
      }
    }
  })
}

export const MobileView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  },
  args: {
    ...Default.args,
    availableProtocols: mockProtocols.slice(0, 6),
    userAddress: '0x742d35Cc6C4C4C7218243e428F9e99F50934e47E',
    isConnected: true
  }
}

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' }
  },
  render: () => ({
    components: { AirdropChecker },
    template: `
      <div class="dark">
        <div class="min-h-screen bg-gray-900 p-8">
          <AirdropChecker
            :available-protocols="protocols"
            :default-protocols="['uniswap', 'optimism', 'compound']"
            title="🌙 Night Airdrop Hunter"
            subtitle="Find your airdrops in the darkness of DeFi"
            :user-address="'0x742d35Cc6C4C4C7218243e428F9e99F50934e47E'"
            :is-connected="true"
            ref="checker"
          />
        </div>
      </div>
    `,
    data() {
      return {
        protocols: mockProtocols
      }
    },
    mounted() {
      // Add some results for demo
      setTimeout(() => {
        this.$refs.checker?.setResults(mockResults.slice(0, 4))
      }, 500)
    }
  })
}

export const HighValueFinds: Story = {
  render: () => ({
    components: { AirdropChecker },
    setup() {
      const highValueResults = [
        {
          id: '1',
          protocol: 'dYdX',
          token: 'DYDX',
          amount: '7500',
          usdValue: '22500',
          eligible: true,
          chain: 'ethereum',
          icon: '📈',
          iconBg: 'bg-gradient-to-r from-purple-500 to-pink-600'
        },
        {
          id: '2',
          protocol: 'ENS',
          token: 'ENS',
          amount: '182',
          usdValue: '3640',
          eligible: true,
          chain: 'ethereum',
          icon: '🏷️',
          iconBg: 'bg-gradient-to-r from-blue-500 to-indigo-600'
        },
        {
          id: '3',
          protocol: 'LooksRare',
          token: 'LOOKS',
          amount: '2000',
          usdValue: '1200',
          eligible: true,
          chain: 'ethereum',
          icon: '👀',
          iconBg: 'bg-gradient-to-r from-green-500 to-teal-600'
        }
      ]

      return {
        protocols: mockProtocols,
        results: highValueResults
      }
    },
    template: `
      <div class="space-y-4">
        <div class="text-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg border border-green-200 dark:border-green-800">
          <h3 class="text-lg font-semibold text-green-900 dark:text-green-300 mb-1">
            🎉 High Value Discovery!
          </h3>
          <p class="text-sm text-green-700 dark:text-green-400">
            This address has $27,340 in unclaimed airdrops!
          </p>
        </div>

        <AirdropChecker
          :available-protocols="protocols"
          :default-protocols="['dydx', 'ens', 'looksrare']"
          title="Whale Alert 🐋"
          subtitle="Major airdrops detected for this address"
          :user-address="'0xwhaleaddress...'"
          :is-connected="true"
          ref="checker"
        />
      </div>
    `,
    mounted() {
      setTimeout(() => {
        this.$refs.checker?.setResults(this.results)
      }, 200)
    }
  })
}

export const NoEligibility: Story = {
  render: () => ({
    components: { AirdropChecker },
    setup() {
      const noEligibilityResults = mockProtocols.slice(0, 6).map((protocol, index) => ({
        id: String(index + 1),
        protocol: protocol.name,
        token: protocol.name.slice(0, 4).toUpperCase(),
        amount: '0',
        usdValue: '0',
        eligible: false,
        chain: 'ethereum',
        reason: 'No activity during eligibility period',
        icon: protocol.icon,
        iconBg: protocol.iconBg,
        checking: false
      }))

      return {
        protocols: mockProtocols,
        results: noEligibilityResults
      }
    },
    template: `
      <div class="space-y-4">
        <div class="text-center p-4 bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 rounded-lg border border-red-200 dark:border-red-800">
          <h3 class="text-lg font-semibold text-red-900 dark:text-red-300 mb-1">
            😔 No Airdrops Found
          </h3>
          <p class="text-sm text-red-700 dark:text-red-400">
            This address doesn't qualify for any current airdrops
          </p>
        </div>

        <AirdropChecker
          :available-protocols="protocols"
          :default-protocols="['uniswap', 'compound', 'ens', 'optimism', 'arbitrum', 'aave']"
          title="Airdrop Search Results"
          subtitle="Keep trying - new drops happen all the time!"
          :user-address="'0xnewaddress...'"
          :is-connected="true"
          ref="checker"
        />
      </div>
    `,
    mounted() {
      setTimeout(() => {
        this.$refs.checker?.setResults(this.results)
      }, 200)
    }
  })
}