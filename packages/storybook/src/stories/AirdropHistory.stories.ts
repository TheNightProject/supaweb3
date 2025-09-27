import type { Meta, StoryObj } from '@storybook/vue3'
import AirdropHistory from '../../../ui/src/components/airdrops/AirdropHistory.vue'

// Mock history data
const mockHistory = [
  {
    id: '1',
    project: 'Uniswap',
    token: 'UNI',
    amount: '400',
    usdValue: '2400',
    claimedAt: '2023-09-15T14:30:00Z',
    txHash: '0x1234567890abcdef1234567890abcdef12345678901234567890abcdef12345678',
    status: 'claimed',
    chain: 'ethereum',
    icon: '🦄',
    iconBg: 'bg-gradient-to-r from-pink-500 to-purple-600',
    description: 'Early liquidity provider airdrop',
    tags: ['DEX', 'LP', 'Early User']
  },
  {
    id: '2',
    project: 'Optimism',
    token: 'OP',
    amount: '1200',
    usdValue: '1800',
    claimedAt: '2023-08-22T10:15:00Z',
    txHash: '0x2345678901abcdef2345678901abcdef23456789012345678901abcdef23456789',
    status: 'claimed',
    chain: 'optimism',
    icon: '🔴',
    iconBg: 'bg-gradient-to-r from-red-500 to-pink-600',
    description: 'Layer 2 adoption incentive',
    tags: ['L2', 'Bridge', 'Early Adopter']
  },
  {
    id: '3',
    project: 'ENS',
    token: 'ENS',
    amount: '182',
    usdValue: '3640',
    claimedAt: '2023-07-10T16:45:00Z',
    txHash: '0x3456789012abcdef3456789012abcdef34567890123456789012abcdef34567890',
    status: 'claimed',
    chain: 'ethereum',
    icon: '🏷️',
    iconBg: 'bg-gradient-to-r from-blue-500 to-indigo-600',
    description: 'Domain holder distribution',
    tags: ['Identity', 'Domain', 'Governance']
  },
  {
    id: '4',
    project: 'Arbitrum',
    token: 'ARB',
    amount: '625',
    usdValue: '1250',
    claimedAt: '2023-06-18T09:20:00Z',
    txHash: '0x4567890123abcdef4567890123abcdef45678901234567890123abcdef45678901',
    status: 'claimed',
    chain: 'arbitrum',
    icon: '🔵',
    iconBg: 'bg-gradient-to-r from-blue-500 to-cyan-600',
    description: 'L2 ecosystem growth reward',
    tags: ['L2', 'DeFi', 'Volume']
  },
  {
    id: '5',
    project: 'dYdX',
    token: 'DYDX',
    amount: '7500',
    usdValue: '15000',
    claimedAt: '2023-05-25T13:10:00Z',
    txHash: '0x5678901234abcdef5678901234abcdef56789012345678901234abcdef56789012',
    status: 'claimed',
    chain: 'ethereum',
    icon: '📈',
    iconBg: 'bg-gradient-to-r from-purple-500 to-pink-600',
    description: 'High volume trader reward',
    tags: ['Derivatives', 'Volume', 'Trader']
  },
  {
    id: '6',
    project: 'LooksRare',
    token: 'LOOKS',
    amount: '2000',
    usdValue: '1200',
    claimedAt: '2023-04-12T11:55:00Z',
    txHash: '0x6789012345abcdef6789012345abcdef67890123456789012345abcdef67890123',
    status: 'claimed',
    chain: 'ethereum',
    icon: '👀',
    iconBg: 'bg-gradient-to-r from-green-500 to-teal-600',
    description: 'NFT marketplace activity reward',
    tags: ['NFT', 'Marketplace', 'Trading']
  },
  {
    id: '7',
    project: 'Hop Protocol',
    token: 'HOP',
    amount: '500',
    usdValue: '350',
    claimedAt: '2023-03-08T15:30:00Z',
    txHash: '0x7890123456abcdef7890123456abcdef78901234567890123456abcdef78901234',
    status: 'claimed',
    chain: 'ethereum',
    icon: '🌉',
    iconBg: 'bg-gradient-to-r from-blue-500 to-green-600',
    description: 'Cross-chain bridge usage',
    tags: ['Bridge', 'Multi-chain', 'DeFi']
  },
  {
    id: '8',
    project: 'Blur',
    token: 'BLUR',
    amount: '300',
    usdValue: '540',
    claimedAt: '2023-02-20T08:15:00Z',
    txHash: '0x8901234567abcdef8901234567abcdef89012345678901234567abcdef89012345',
    status: 'claimed',
    chain: 'ethereum',
    icon: '💨',
    iconBg: 'bg-gradient-to-r from-orange-500 to-red-600',
    description: 'NFT trading incentive',
    tags: ['NFT', 'Pro Trader', 'Blur']
  },
  {
    id: '9',
    project: 'ApeCoin',
    token: 'APE',
    amount: '10094',
    usdValue: '25235',
    claimedAt: '2023-01-14T12:00:00Z',
    txHash: '0x9012345678abcdef9012345678abcdef90123456789012345678abcdef90123456',
    status: 'claimed',
    chain: 'ethereum',
    icon: '🐵',
    iconBg: 'bg-gradient-to-r from-brown-500 to-yellow-600',
    description: 'BAYC/MAYC holder distribution',
    tags: ['NFT', 'BAYC', 'Holder']
  },
  {
    id: '10',
    project: 'Polygon',
    token: 'MATIC',
    amount: '100',
    usdValue: '80',
    claimedAt: '2022-12-05T17:45:00Z',
    txHash: '0xa123456789abcdefa123456789abcdefa1234567890123456789abcdefa123456',
    status: 'claimed',
    chain: 'polygon',
    icon: '🔷',
    iconBg: 'bg-gradient-to-r from-purple-500 to-indigo-600',
    description: 'Early ecosystem participant',
    tags: ['L2', 'Gas', 'Scaling']
  }
]

const meta: Meta<typeof AirdropHistory> = {
  title: 'Airdrops/AirdropHistory',
  component: AirdropHistory,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A comprehensive history viewer for claimed airdrops with filtering, sorting, pagination, and export functionality.'
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
      description: 'Title of the history interface'
    },
    subtitle: {
      control: 'text',
      description: 'Subtitle or description'
    },
    history: {
      control: 'object',
      description: 'Array of airdrop history objects'
    },
    showSummary: {
      control: 'boolean',
      description: 'Show summary statistics'
    },
    showFilters: {
      control: 'boolean',
      description: 'Show filtering options'
    },
    showChainFilter: {
      control: 'boolean',
      description: 'Show chain filter dropdown'
    },
    showSearch: {
      control: 'boolean',
      description: 'Show search input'
    },
    showDetails: {
      control: 'boolean',
      description: 'Show description and tags'
    },
    showTxLinks: {
      control: 'boolean',
      description: 'Show transaction hash links'
    },
    showPagination: {
      control: 'boolean',
      description: 'Enable pagination'
    },
    showRefresh: {
      control: 'boolean',
      description: 'Show refresh button'
    },
    showExport: {
      control: 'boolean',
      description: 'Show export options'
    },
    showCheckAirdrops: {
      control: 'boolean',
      description: 'Show check airdrops button in empty state'
    },
    itemsPerPage: {
      control: { type: 'range', min: 5, max: 50, step: 5 },
      description: 'Items per page when pagination is enabled'
    },
    loading: {
      control: 'boolean',
      description: 'Show loading state'
    },
    emptyTitle: {
      control: 'text',
      description: 'Title for empty state'
    },
    emptyDescription: {
      control: 'text',
      description: 'Description for empty state'
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
    title: 'Airdrop History',
    subtitle: 'Track your claimed airdrops and their value over time',
    history: mockHistory,
    showSummary: true,
    showFilters: true,
    showChainFilter: true,
    showSearch: true,
    showDetails: true,
    showTxLinks: true,
    showPagination: true,
    showRefresh: true,
    showExport: true,
    showCheckAirdrops: true,
    itemsPerPage: 10,
    loading: false
  }
}

export const RecentActivity: Story = {
  args: {
    ...Default.args,
    history: mockHistory.slice(0, 5),
    title: 'Recent Claims',
    subtitle: 'Your latest airdrop activity'
  }
}

export const HighValueHistory: Story = {
  args: {
    ...Default.args,
    history: mockHistory.filter(h => parseFloat(h.usdValue) > 1000),
    title: 'High Value Claims',
    subtitle: 'Your most valuable airdrops (>$1000)'
  }
}

export const EthereumOnly: Story = {
  args: {
    ...Default.args,
    history: mockHistory.filter(h => h.chain === 'ethereum'),
    title: 'Ethereum Airdrops',
    subtitle: 'All your mainnet claims',
    showChainFilter: false
  }
}

export const Loading: Story = {
  args: {
    ...Default.args,
    history: [],
    loading: true
  }
}

export const Empty: Story = {
  args: {
    ...Default.args,
    history: [],
    loading: false,
    emptyTitle: 'No Airdrop History',
    emptyDescription: 'Your claimed airdrops will appear here once you start claiming them.'
  }
}

export const MinimalInterface: Story = {
  args: {
    ...Default.args,
    history: mockHistory.slice(0, 6),
    title: 'Simple History',
    subtitle: '',
    showSummary: false,
    showFilters: false,
    showDetails: false,
    showExport: false,
    showRefresh: false,
    showPagination: false
  }
}

export const CompactView: Story = {
  args: {
    ...Default.args,
    history: mockHistory,
    itemsPerPage: 15,
    showDetails: false,
    title: 'Compact History',
    subtitle: 'All claims in a compact format'
  }
}

export const Interactive: Story = {
  render: () => ({
    components: { AirdropHistory },
    template: `
      <div class="space-y-6">
        <div class="text-center">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Interactive Airdrop History
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Try filtering, searching, and exporting your airdrop history
          </p>
        </div>

        <AirdropHistory
          :history="history"
          :loading="loading"
          title="My Airdrop Journey"
          subtitle="Complete history with interactive features"
          @refresh="handleRefresh"
          @view-transaction="handleViewTransaction"
          @check-airdrops="handleCheckAirdrops"
          @export-csv="handleExportCSV"
          @export-json="handleExportJSON"
        />

        <div v-if="lastAction" class="rounded-lg bg-gray-100 p-3 dark:bg-gray-800">
          <div class="text-sm font-medium text-gray-700 dark:text-gray-300">Last Action:</div>
          <pre class="mt-1 text-xs text-gray-600 dark:text-gray-400">{{ lastAction }}</pre>
        </div>
      </div>
    `,
    data() {
      return {
        history: mockHistory,
        loading: false,
        lastAction: null
      }
    },
    methods: {
      handleRefresh() {
        this.loading = true
        this.lastAction = 'Refreshing airdrop history...'

        setTimeout(() => {
          this.loading = false
          this.lastAction = 'History refreshed successfully!'
        }, 2000)
      },

      handleViewTransaction(item) {
        this.lastAction = `Opening transaction: ${item.txHash.slice(0, 10)}... in block explorer`
      },

      handleCheckAirdrops() {
        this.lastAction = 'Opening airdrop checker to find new airdrops...'
      },

      handleExportCSV(data) {
        this.lastAction = `Exported ${data.length} records to CSV file`
      },

      handleExportJSON(data) {
        this.lastAction = `Exported ${data.length} records to JSON file`
      }
    }
  })
}

export const YearlyBreakdown: Story = {
  render: () => ({
    components: { AirdropHistory },
    template: `
      <div class="space-y-6">
        <div class="text-center mb-6">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            2023 Airdrop Performance 📊
          </h3>
          <p class="text-gray-600 dark:text-gray-400">
            A complete breakdown of your 2023 airdrop claims
          </p>
        </div>

        <!-- Year Summary Cards -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div class="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800 text-center">
            <div class="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
              $50,095
            </div>
            <div class="text-sm text-green-700 dark:text-green-300 font-medium">
              Total Claimed Value
            </div>
          </div>
          <div class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800 text-center">
            <div class="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              10
            </div>
            <div class="text-sm text-blue-700 dark:text-blue-300 font-medium">
              Protocols Claimed
            </div>
          </div>
          <div class="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800 text-center">
            <div class="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              23,798
            </div>
            <div class="text-sm text-purple-700 dark:text-purple-300 font-medium">
              Total Tokens
            </div>
          </div>
          <div class="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-800 text-center">
            <div class="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
              4
            </div>
            <div class="text-sm text-orange-700 dark:text-orange-300 font-medium">
              Chains Used
            </div>
          </div>
        </div>

        <AirdropHistory
          :history="history"
          title="Complete 2023 History"
          subtitle="Every airdrop claimed this year"
          :items-per-page="8"
        />
      </div>
    `,
    data() {
      return {
        history: mockHistory
      }
    }
  })
}

export const MultiChainPortfolio: Story = {
  args: {
    ...Default.args,
    history: [
      ...mockHistory.slice(0, 3),
      {
        id: 'polygon-1',
        project: 'Polygon Ecosystem',
        token: 'MATIC',
        amount: '500',
        usdValue: '450',
        claimedAt: '2023-08-15T14:30:00Z',
        txHash: '0xpolygon123...',
        status: 'claimed',
        chain: 'polygon',
        icon: '🔷',
        iconBg: 'bg-gradient-to-r from-purple-500 to-indigo-600',
        tags: ['L2', 'Ecosystem']
      },
      {
        id: 'avalanche-1',
        project: 'Avalanche Rush',
        token: 'AVAX',
        amount: '25',
        usdValue: '850',
        claimedAt: '2023-07-20T10:15:00Z',
        txHash: '0xavalanche123...',
        status: 'claimed',
        chain: 'avalanche',
        icon: '🔺',
        iconBg: 'bg-gradient-to-r from-red-500 to-pink-600',
        tags: ['L1', 'DeFi']
      },
      {
        id: 'bsc-1',
        project: 'PancakeSwap',
        token: 'CAKE',
        amount: '150',
        usdValue: '300',
        claimedAt: '2023-06-10T16:45:00Z',
        txHash: '0xbsc123...',
        status: 'claimed',
        chain: 'bsc',
        icon: '🥞',
        iconBg: 'bg-gradient-to-r from-yellow-500 to-orange-600',
        tags: ['DEX', 'Yield']
      }
    ],
    title: 'Multi-Chain Airdrops',
    subtitle: 'Claims across different blockchain networks'
  }
}

export const MobileView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  },
  args: {
    ...Default.args,
    history: mockHistory.slice(0, 8),
    itemsPerPage: 5,
    showDetails: false
  }
}

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' }
  },
  render: () => ({
    components: { AirdropHistory },
    template: `
      <div class="dark">
        <div class="min-h-screen bg-gray-900 p-8">
          <AirdropHistory
            :history="history"
            title="🌙 Night Mode History"
            subtitle="Your airdrop journey in elegant dark theme"
            :items-per-page="6"
          />
        </div>
      </div>
    `,
    data() {
      return {
        history: mockHistory.slice(0, 8)
      }
    }
  })
}

export const PendingClaims: Story = {
  args: {
    ...Default.args,
    history: [
      {
        id: '1',
        project: 'New Protocol',
        token: 'NEW',
        amount: '500',
        usdValue: '750',
        claimedAt: '2023-09-20T12:00:00Z',
        txHash: '0xpending123...',
        status: 'pending',
        chain: 'ethereum',
        icon: '⏳',
        iconBg: 'bg-gradient-to-r from-yellow-500 to-orange-600',
        description: 'Transaction pending confirmation'
      },
      {
        id: '2',
        project: 'Failed Claim',
        token: 'FAIL',
        amount: '200',
        usdValue: '100',
        claimedAt: '2023-09-19T15:30:00Z',
        txHash: '0xfailed123...',
        status: 'failed',
        chain: 'ethereum',
        icon: '❌',
        iconBg: 'bg-gradient-to-r from-red-500 to-pink-600',
        description: 'Transaction failed due to gas issues'
      },
      ...mockHistory.slice(0, 3)
    ],
    title: 'Recent Claims & Status',
    subtitle: 'Including pending and failed transactions'
  }
}