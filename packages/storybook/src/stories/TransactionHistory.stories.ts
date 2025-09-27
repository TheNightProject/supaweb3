import type { Meta, StoryObj } from '@storybook/vue3'
import TransactionHistory from '../../../ui/src/components/transactions/TransactionHistory.vue'

// Mock transaction data
const mockTransactions = [
  {
    hash: '0x1234567890abcdef1234567890abcdef12345678901234567890abcdef12345678',
    type: 'swap',
    status: 'confirmed',
    amount: '2.5',
    symbol: 'ETH',
    fromSymbol: 'ETH',
    toSymbol: 'USDC',
    usdValue: '6,250.00',
    timestamp: Date.now() - 1000 * 60 * 5, // 5 minutes ago
    gasUsed: '21,000',
    blockNumber: '18,500,123',
    chain: 'ethereum',
    details: 'Swapped ETH for USDC on Uniswap V3'
  },
  {
    hash: '0x2345678901abcdef2345678901abcdef23456789012345678901abcdef23456789',
    type: 'receive',
    status: 'confirmed',
    amount: '1000',
    symbol: 'USDC',
    usdValue: '1,000.00',
    timestamp: Date.now() - 1000 * 60 * 60 * 2, // 2 hours ago
    gasUsed: '21,000',
    blockNumber: '18,499,856',
    chain: 'ethereum'
  },
  {
    hash: '0x3456789012abcdef3456789012abcdef34567890123456789012abcdef34567890',
    type: 'send',
    status: 'pending',
    amount: '0.1',
    symbol: 'ETH',
    usdValue: '250.00',
    timestamp: Date.now() - 1000 * 60 * 2, // 2 minutes ago
    gasUsed: '21,000',
    chain: 'ethereum'
  },
  {
    hash: '0x4567890123abcdef4567890123abcdef45678901234567890123abcdef45678901',
    type: 'contract',
    status: 'confirmed',
    amount: '',
    symbol: '',
    usdValue: '0.00',
    timestamp: Date.now() - 1000 * 60 * 60 * 6, // 6 hours ago
    gasUsed: '150,000',
    blockNumber: '18,499,234',
    chain: 'ethereum',
    details: 'Interacted with Compound lending protocol'
  },
  {
    hash: '0x5678901234abcdef5678901234abcdef56789012345678901234abcdef56789012',
    type: 'mint',
    status: 'confirmed',
    amount: '1',
    symbol: 'NFT',
    usdValue: '500.00',
    timestamp: Date.now() - 1000 * 60 * 60 * 24, // 1 day ago
    gasUsed: '85,000',
    blockNumber: '18,498,123',
    chain: 'ethereum',
    details: 'Minted CryptoPunk #1234'
  },
  {
    hash: '0x6789012345abcdef6789012345abcdef67890123456789012345abcdef67890123',
    type: 'swap',
    status: 'failed',
    amount: '100',
    symbol: 'MATIC',
    fromSymbol: 'MATIC',
    toSymbol: 'USDC',
    usdValue: '85.00',
    timestamp: Date.now() - 1000 * 60 * 60 * 12, // 12 hours ago
    gasUsed: '0',
    chain: 'polygon',
    details: 'Transaction failed due to insufficient gas'
  },
  {
    hash: '0x7890123456abcdef7890123456abcdef78901234567890123456abcdef78901234',
    type: 'stake',
    status: 'confirmed',
    amount: '32',
    symbol: 'ETH',
    usdValue: '80,000.00',
    timestamp: Date.now() - 1000 * 60 * 60 * 24 * 3, // 3 days ago
    gasUsed: '45,000',
    blockNumber: '18,495,678',
    chain: 'ethereum',
    details: 'Staked ETH for Ethereum 2.0 validation'
  },
  {
    hash: '0x8901234567abcdef8901234567abcdef89012345678901234567abcdef89012345',
    type: 'receive',
    status: 'confirmed',
    amount: '0.05',
    symbol: 'ETH',
    usdValue: '125.00',
    timestamp: Date.now() - 1000 * 60 * 60 * 24 * 5, // 5 days ago
    gasUsed: '21,000',
    blockNumber: '18,493,456',
    chain: 'arbitrum'
  }
]

const meta: Meta<typeof TransactionHistory> = {
  title: 'Transactions/TransactionHistory',
  component: TransactionHistory,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A comprehensive transaction history component with filtering, status indicators, pagination, and block explorer integration.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    transactions: {
      control: 'object',
      description: 'Array of transaction objects'
    },
    title: {
      control: 'text',
      description: 'Title of the transaction history'
    },
    subtitle: {
      control: 'text',
      description: 'Subtitle or description'
    },
    loading: {
      control: 'boolean',
      description: 'Show loading skeleton state'
    },
    loadingCount: {
      control: { type: 'range', min: 1, max: 10, step: 1 },
      description: 'Number of skeleton items when loading'
    },
    showFilters: {
      control: 'boolean',
      description: 'Show filter controls'
    },
    showChainFilter: {
      control: 'boolean',
      description: 'Show chain filter option'
    },
    showChainIcons: {
      control: 'boolean',
      description: 'Show network icons for each transaction'
    },
    showExplorerLink: {
      control: 'boolean',
      description: 'Show link to block explorer'
    },
    showRefresh: {
      control: 'boolean',
      description: 'Show refresh button'
    },
    showPagination: {
      control: 'boolean',
      description: 'Enable pagination'
    },
    itemsPerPage: {
      control: { type: 'range', min: 1, max: 20, step: 1 },
      description: 'Items per page when pagination is enabled'
    },
    emptyTitle: {
      control: 'text',
      description: 'Title for empty state'
    },
    emptyDescription: {
      control: 'text',
      description: 'Description for empty state'
    },
    explorerBaseUrl: {
      control: 'text',
      description: 'Base URL for block explorer links'
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
    transactions: mockTransactions,
    title: 'Transaction History',
    subtitle: 'Recent activity on your wallet',
    loading: false,
    showFilters: true,
    showChainFilter: true,
    showChainIcons: true,
    showExplorerLink: true,
    showRefresh: true,
    showPagination: true,
    itemsPerPage: 5
  }
}

export const Loading: Story = {
  args: {
    transactions: [],
    title: 'Transaction History',
    loading: true,
    loadingCount: 5
  }
}

export const Empty: Story = {
  args: {
    transactions: [],
    title: 'Transaction History',
    subtitle: 'No transactions yet',
    loading: false,
    emptyTitle: 'No transactions found',
    emptyDescription: 'Your transaction history will appear here once you start using your wallet.'
  }
}

export const WithoutFilters: Story = {
  args: {
    ...Default.args,
    showFilters: false
  }
}

export const WithoutPagination: Story = {
  args: {
    ...Default.args,
    showPagination: false
  }
}

export const Minimal: Story = {
  args: {
    transactions: mockTransactions.slice(0, 3),
    title: 'Recent Transactions',
    showFilters: false,
    showChainFilter: false,
    showChainIcons: false,
    showExplorerLink: false,
    showRefresh: false,
    showPagination: false
  }
}

export const PendingTransactions: Story = {
  args: {
    transactions: [
      {
        ...mockTransactions[2],
        status: 'pending'
      },
      {
        ...mockTransactions[0],
        status: 'pending',
        timestamp: Date.now() - 1000 * 30
      },
      {
        ...mockTransactions[1],
        status: 'pending',
        timestamp: Date.now() - 1000 * 60
      }
    ],
    title: 'Pending Transactions',
    subtitle: 'Transactions waiting for confirmation'
  }
}

export const FailedTransactions: Story = {
  args: {
    transactions: [
      {
        ...mockTransactions[5],
        status: 'failed'
      },
      {
        ...mockTransactions[0],
        status: 'failed',
        details: 'Transaction failed due to slippage tolerance'
      },
      {
        ...mockTransactions[3],
        status: 'failed',
        details: 'Insufficient gas fee'
      }
    ],
    title: 'Failed Transactions',
    subtitle: 'Transactions that could not be completed'
  }
}

export const SwapTransactions: Story = {
  args: {
    transactions: mockTransactions.filter(tx => tx.type === 'swap'),
    title: 'Swap History',
    subtitle: 'Your token exchange transactions'
  }
}

export const EthereumOnly: Story = {
  args: {
    transactions: mockTransactions.filter(tx => tx.chain === 'ethereum'),
    title: 'Ethereum Transactions',
    subtitle: 'Activity on Ethereum mainnet',
    showChainFilter: false
  }
}

export const MultiChain: Story = {
  args: {
    transactions: [
      ...mockTransactions.slice(0, 2).map(tx => ({ ...tx, chain: 'ethereum' })),
      ...mockTransactions.slice(2, 4).map(tx => ({ ...tx, chain: 'polygon' })),
      ...mockTransactions.slice(4, 6).map(tx => ({ ...tx, chain: 'arbitrum' })),
      ...mockTransactions.slice(6, 8).map(tx => ({ ...tx, chain: 'optimism' }))
    ],
    title: 'Multi-Chain Activity',
    subtitle: 'Transactions across different networks',
    showChainFilter: true,
    showChainIcons: true
  }
}

export const LargeHistory: Story = {
  args: {
    transactions: Array.from({ length: 50 }, (_, i) => ({
      ...mockTransactions[i % mockTransactions.length],
      hash: `0x${Math.random().toString(16).substr(2, 64)}`,
      timestamp: Date.now() - (i * 1000 * 60 * 30), // 30 min intervals
      blockNumber: `18,${500000 - i * 100}`
    })),
    title: 'Complete Transaction History',
    subtitle: '50 recent transactions',
    itemsPerPage: 10
  }
}

export const Interactive: Story = {
  render: () => ({
    components: { TransactionHistory },
    template: `
      <div class="space-y-6">
        <div class="text-center">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Interactive Transaction History
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Try filtering, clicking transactions, and using the explorer links
          </p>
        </div>

        <TransactionHistory
          :transactions="transactions"
          title="My Wallet Activity"
          subtitle="Recent transactions and interactions"
          :show-filters="true"
          :show-chain-filter="true"
          :show-chain-icons="true"
          :show-explorer-link="true"
          :show-refresh="true"
          :items-per-page="5"
          @transaction-click="handleTransactionClick"
          @refresh="handleRefresh"
          @explorer-click="handleExplorerClick"
        />

        <div v-if="lastAction" class="rounded-lg bg-gray-100 p-3 dark:bg-gray-800">
          <div class="text-sm font-medium text-gray-700 dark:text-gray-300">Last Action:</div>
          <pre class="mt-1 text-xs text-gray-600 dark:text-gray-400">{{ lastAction }}</pre>
        </div>
      </div>
    `,
    data() {
      return {
        transactions: mockTransactions,
        lastAction: null
      }
    },
    methods: {
      handleTransactionClick(transaction) {
        this.lastAction = `Clicked transaction: ${transaction.hash.slice(0, 10)}...`
      },
      handleRefresh() {
        this.lastAction = 'Refresh button clicked'
      },
      handleExplorerClick(data) {
        this.lastAction = `Explorer link clicked: ${data.url}`
      }
    }
  })
}

export const CustomExplorer: Story = {
  args: {
    ...Default.args,
    explorerBaseUrl: 'https://polygonscan.com/tx/',
    transactions: mockTransactions.map(tx => ({ ...tx, chain: 'polygon' })),
    title: 'Polygon Transactions',
    subtitle: 'Using Polygonscan explorer'
  }
}

export const DeFiActivity: Story = {
  args: {
    transactions: [
      {
        hash: '0xa1b2c3d4e5f6789012345678901234567890123456789012345678901234567890',
        type: 'swap',
        status: 'confirmed',
        amount: '1000',
        symbol: 'USDC',
        fromSymbol: 'ETH',
        toSymbol: 'USDC',
        usdValue: '1,000.00',
        timestamp: Date.now() - 1000 * 60 * 10,
        gasUsed: '150,000',
        blockNumber: '18,500,456',
        chain: 'ethereum',
        details: 'Swapped 0.4 ETH for 1000 USDC on Uniswap V3'
      },
      {
        hash: '0xb2c3d4e5f6789012345678901234567890123456789012345678901234567890a1',
        type: 'contract',
        status: 'confirmed',
        amount: '500',
        symbol: 'USDC',
        usdValue: '500.00',
        timestamp: Date.now() - 1000 * 60 * 30,
        gasUsed: '200,000',
        blockNumber: '18,500,123',
        chain: 'ethereum',
        details: 'Supplied 500 USDC to Aave lending pool'
      },
      {
        hash: '0xc3d4e5f6789012345678901234567890123456789012345678901234567890a1b2',
        type: 'stake',
        status: 'confirmed',
        amount: '10',
        symbol: 'ETH',
        usdValue: '25,000.00',
        timestamp: Date.now() - 1000 * 60 * 60 * 2,
        gasUsed: '100,000',
        blockNumber: '18,499,876',
        chain: 'ethereum',
        details: 'Staked 10 ETH in Lido staking protocol'
      }
    ],
    title: 'DeFi Activity',
    subtitle: 'Decentralized finance transactions'
  }
}

export const NFTActivity: Story = {
  args: {
    transactions: [
      {
        hash: '0xd4e5f6789012345678901234567890123456789012345678901234567890a1b2c3',
        type: 'mint',
        status: 'confirmed',
        amount: '1',
        symbol: 'NFT',
        usdValue: '0.08',
        timestamp: Date.now() - 1000 * 60 * 15,
        gasUsed: '85,000',
        blockNumber: '18,500,789',
        chain: 'ethereum',
        details: 'Minted Bored Ape #9876'
      },
      {
        hash: '0xe5f6789012345678901234567890123456789012345678901234567890a1b2c3d4',
        type: 'send',
        status: 'confirmed',
        amount: '1',
        symbol: 'NFT',
        usdValue: '2.5',
        timestamp: Date.now() - 1000 * 60 * 60,
        gasUsed: '50,000',
        blockNumber: '18,500,234',
        chain: 'ethereum',
        details: 'Transferred CryptoPunk #1234'
      },
      {
        hash: '0xf6789012345678901234567890123456789012345678901234567890a1b2c3d4e5',
        type: 'receive',
        status: 'confirmed',
        amount: '1',
        symbol: 'NFT',
        usdValue: '1.2',
        timestamp: Date.now() - 1000 * 60 * 60 * 3,
        gasUsed: '21,000',
        blockNumber: '18,499,567',
        chain: 'polygon',
        details: 'Received Azuki #5678'
      }
    ],
    title: 'NFT Activity',
    subtitle: 'Non-fungible token transactions'
  }
}