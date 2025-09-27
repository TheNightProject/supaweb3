import type { Meta, StoryObj } from '@storybook/vue3'
import AirdropClaim from '../../../ui/src/components/airdrops/AirdropClaim.vue'

// Mock airdrop data
const mockAirdrops = [
  {
    id: '1',
    project: 'Uniswap',
    token: 'UNI',
    amount: '400',
    usdValue: '2400',
    eligible: true,
    claimed: false,
    deadline: '2025-01-15',
    icon: '🦄',
    iconBg: 'bg-gradient-to-r from-pink-500 to-purple-600',
    requirements: [
      'Used Uniswap before September 2020',
      'Made at least 1 transaction',
      'Held liquidity position'
    ],
    description: 'Early Uniswap users and liquidity providers'
  },
  {
    id: '2',
    project: 'Optimism',
    token: 'OP',
    amount: '1200',
    usdValue: '1800',
    eligible: true,
    claimed: false,
    deadline: '2024-12-31',
    icon: '🔴',
    iconBg: 'bg-gradient-to-r from-red-500 to-pink-600',
    requirements: [
      'Bridged to Optimism',
      'Made transactions on L2',
      'Used dApps on Optimism'
    ]
  },
  {
    id: '3',
    project: 'Arbitrum',
    token: 'ARB',
    amount: '625',
    usdValue: '750',
    eligible: true,
    claimed: true,
    deadline: '2024-09-15',
    icon: '🔵',
    iconBg: 'bg-gradient-to-r from-blue-500 to-cyan-600',
    requirements: [
      'Bridged to Arbitrum One',
      'Conducted transactions',
      'Interacted with dApps'
    ]
  },
  {
    id: '4',
    project: 'ENS',
    token: 'ENS',
    amount: '0',
    usdValue: '0',
    eligible: false,
    claimed: false,
    reason: 'No ENS domain registered before snapshot',
    icon: '📛',
    iconBg: 'bg-gradient-to-r from-blue-500 to-indigo-600'
  },
  {
    id: '5',
    project: 'Blur',
    token: 'BLUR',
    amount: '300',
    usdValue: '180',
    eligible: true,
    claimed: false,
    deadline: '2024-10-30',
    icon: '💨',
    iconBg: 'bg-gradient-to-r from-orange-500 to-red-600',
    requirements: [
      'Active NFT trader',
      'Listed NFTs on Blur',
      'Made bids on marketplace'
    ]
  }
]

const meta: Meta<typeof AirdropClaim> = {
  title: 'Airdrops/AirdropClaim',
  component: AirdropClaim,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A comprehensive interface for claiming available airdrops with eligibility checking, requirements display, and batch claiming functionality.'
      }
    }
  },
  decorators: [
    () => ({
      template: '<div class="min-w-[600px] max-w-[800px]"><story /></div>',
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Title of the claim interface'
    },
    subtitle: {
      control: 'text',
      description: 'Subtitle or description'
    },
    airdrops: {
      control: 'object',
      description: 'Array of airdrop objects'
    },
    userAddress: {
      control: 'text',
      description: 'Connected wallet address'
    },
    loading: {
      control: 'boolean',
      description: 'Show loading state'
    },
    checking: {
      control: 'boolean',
      description: 'Show checking eligibility state'
    },
    showStatus: {
      control: 'boolean',
      description: 'Show eligibility status badge'
    },
    showDetails: {
      control: 'boolean',
      description: 'Show requirement details'
    },
    showSummary: {
      control: 'boolean',
      description: 'Show total value summary'
    },
    showActions: {
      control: 'boolean',
      description: 'Show action buttons'
    },
    showRefresh: {
      control: 'boolean',
      description: 'Show refresh button'
    },
    showHistory: {
      control: 'boolean',
      description: 'Show history link'
    },
    loadingCount: {
      control: { type: 'range', min: 1, max: 10, step: 1 },
      description: 'Number of skeleton items when loading'
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
    title: 'Claimable Airdrops',
    subtitle: 'Check and claim your eligible airdrops',
    airdrops: mockAirdrops,
    userAddress: '0x742d35Cc6C4C4C7218243e428F9e99F50934e47E',
    loading: false,
    checking: false,
    showStatus: true,
    showDetails: true,
    showSummary: true,
    showActions: true,
    showRefresh: true,
    showHistory: true
  }
}

export const EligibleAirdrops: Story = {
  args: {
    ...Default.args,
    airdrops: mockAirdrops.filter(a => a.eligible && !a.claimed)
  }
}

export const AlreadyClaimed: Story = {
  args: {
    ...Default.args,
    airdrops: mockAirdrops.map(a => ({ ...a, claimed: a.eligible }))
  }
}

export const NotEligible: Story = {
  args: {
    ...Default.args,
    airdrops: mockAirdrops.map(a => ({ ...a, eligible: false, claimed: false, reason: 'Requirements not met' }))
  }
}

export const Loading: Story = {
  args: {
    ...Default.args,
    airdrops: [],
    loading: true,
    loadingCount: 5
  }
}

export const Checking: Story = {
  args: {
    ...Default.args,
    airdrops: [],
    checking: true
  }
}

export const Empty: Story = {
  args: {
    ...Default.args,
    airdrops: [],
    loading: false,
    checking: false,
    emptyTitle: 'No Airdrops Available',
    emptyDescription: 'Connect your wallet to check for eligible airdrops.'
  }
}

export const HighValue: Story = {
  args: {
    ...Default.args,
    airdrops: [
      {
        id: '1',
        project: 'Ethereum Name Service',
        token: 'ENS',
        amount: '182',
        usdValue: '3640',
        eligible: true,
        claimed: false,
        deadline: '2025-05-04',
        icon: '🏷️',
        iconBg: 'bg-gradient-to-r from-blue-500 to-indigo-600',
        requirements: [
          'Registered .eth domain before Oct 2021',
          'Set reverse record',
          'Domain still active'
        ]
      },
      {
        id: '2',
        project: 'dYdX',
        token: 'DYDX',
        amount: '7500',
        usdValue: '12000',
        eligible: true,
        claimed: false,
        deadline: '2024-12-01',
        icon: '📈',
        iconBg: 'bg-gradient-to-r from-purple-500 to-pink-600',
        requirements: [
          'Traded on dYdX Layer 2',
          'Minimum $1000 volume',
          'Active user before snapshot'
        ]
      }
    ]
  }
}

export const ExpiringSoon: Story = {
  args: {
    ...Default.args,
    airdrops: [
      {
        id: '1',
        project: 'SushiSwap',
        token: 'SUSHI',
        amount: '340',
        usdValue: '450',
        eligible: true,
        claimed: false,
        deadline: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days from now
        icon: '🍣',
        iconBg: 'bg-gradient-to-r from-pink-500 to-red-600',
        requirements: [
          'Provided liquidity',
          'Used SushiSwap before 2021',
          'Held SUSHI tokens'
        ]
      },
      {
        id: '2',
        project: '1inch',
        token: '1INCH',
        amount: '600',
        usdValue: '240',
        eligible: true,
        claimed: false,
        deadline: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(), // 5 days from now
        icon: '🔄',
        iconBg: 'bg-gradient-to-r from-red-500 to-orange-600',
        requirements: [
          'Used 1inch aggregator',
          'Made swaps before Dec 2020',
          'Minimum $100 volume'
        ]
      }
    ]
  }
}

export const MinimalInterface: Story = {
  args: {
    ...Default.args,
    title: 'Available Claims',
    subtitle: '',
    showDetails: false,
    showSummary: false,
    showActions: false,
    airdrops: mockAirdrops.slice(0, 3)
  }
}

export const InteractiveClaiming: Story = {
  render: () => ({
    components: { AirdropClaim },
    template: `
      <div class="space-y-6">
        <div class="text-center">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Interactive Airdrop Claiming
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Try claiming airdrops and see real-time updates
          </p>
        </div>

        <AirdropClaim
          :airdrops="airdrops"
          :user-address="userAddress"
          :checking="checking"
          title="Your Airdrops"
          subtitle="Claim your eligible tokens"
          @claim="handleClaim"
          @claim-all="handleClaimAll"
          @check-eligibility="handleCheckEligibility"
          @show-history="handleShowHistory"
        />

        <div v-if="lastAction" class="rounded-lg bg-gray-100 p-3 dark:bg-gray-800">
          <div class="text-sm font-medium text-gray-700 dark:text-gray-300">Last Action:</div>
          <pre class="mt-1 text-xs text-gray-600 dark:text-gray-400">{{ lastAction }}</pre>
        </div>
      </div>
    `,
    data() {
      return {
        userAddress: '0x742d35Cc6C4C4C7218243e428F9e99F50934e47E',
        checking: false,
        lastAction: null,
        airdrops: mockAirdrops
      }
    },
    methods: {
      async handleClaim(airdrop) {
        this.lastAction = `Claiming ${airdrop.amount} ${airdrop.token} from ${airdrop.project}...`

        // Simulate claim
        setTimeout(() => {
          const index = this.airdrops.findIndex(a => a.id === airdrop.id)
          if (index !== -1) {
            this.airdrops[index].claimed = true
          }
          this.lastAction = `Successfully claimed ${airdrop.amount} ${airdrop.token}!`
        }, 3000)
      },

      async handleClaimAll(airdrops) {
        this.lastAction = `Claiming all ${airdrops.length} eligible airdrops...`

        setTimeout(() => {
          airdrops.forEach(airdrop => {
            const index = this.airdrops.findIndex(a => a.id === airdrop.id)
            if (index !== -1) {
              this.airdrops[index].claimed = true
            }
          })
          this.lastAction = `Successfully claimed all eligible airdrops!`
        }, 4000)
      },

      handleCheckEligibility() {
        this.checking = true
        this.lastAction = 'Checking eligibility across protocols...'

        setTimeout(() => {
          this.checking = false
          this.lastAction = 'Eligibility check complete!'
        }, 3000)
      },

      handleShowHistory() {
        this.lastAction = 'Opening airdrop history...'
      }
    }
  })
}

export const CustomContent: Story = {
  render: () => ({
    components: { AirdropClaim },
    template: `
      <AirdropClaim
        :airdrops="airdrops"
        title="Premium Airdrops"
        subtitle="Exclusive drops for VIP users"
        empty-title="No Premium Drops"
        empty-description="Premium airdrops will appear here when available."
        class="max-w-2xl"
      >
        <template #actions>
          <div class="flex justify-between items-center">
            <div class="text-sm text-gray-600 dark:text-gray-400">
              🎯 VIP eligibility checked daily
            </div>
            <div class="flex space-x-2">
              <button class="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 text-sm font-medium transition-colors">
                Join VIP
              </button>
              <button class="px-4 py-2 text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 text-sm transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </template>
      </AirdropClaim>
    `,
    data() {
      return {
        airdrops: [
          {
            id: '1',
            project: 'VIP Protocol',
            token: 'VIP',
            amount: '1000',
            usdValue: '5000',
            eligible: true,
            claimed: false,
            icon: '👑',
            iconBg: 'bg-gradient-to-r from-purple-500 to-pink-600',
            requirements: ['VIP member', 'Minimum $10k portfolio', 'Active for 6+ months']
          }
        ]
      }
    }
  })
}

export const MultiChain: Story = {
  args: {
    ...Default.args,
    airdrops: [
      {
        id: '1',
        project: 'Polygon',
        token: 'MATIC',
        amount: '500',
        usdValue: '450',
        eligible: true,
        claimed: false,
        chain: 'polygon',
        icon: '🔷',
        iconBg: 'bg-gradient-to-r from-purple-500 to-indigo-600'
      },
      {
        id: '2',
        project: 'Avalanche',
        token: 'AVAX',
        amount: '25',
        usdValue: '850',
        eligible: true,
        claimed: false,
        chain: 'avalanche',
        icon: '🔺',
        iconBg: 'bg-gradient-to-r from-red-500 to-pink-600'
      },
      {
        id: '3',
        project: 'Fantom',
        token: 'FTM',
        amount: '2000',
        usdValue: '600',
        eligible: true,
        claimed: false,
        chain: 'fantom',
        icon: '👻',
        iconBg: 'bg-gradient-to-r from-blue-500 to-cyan-600'
      }
    ]
  }
}

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' }
  },
  render: () => ({
    components: { AirdropClaim },
    template: `
      <div class="dark">
        <div class="min-h-screen bg-gray-900 p-8">
          <AirdropClaim
            :airdrops="airdrops"
            title="🌙 Night Mode Claims"
            subtitle="Your airdrops in beautiful dark mode"
            user-address="0x742d35Cc6C4C4C7218243e428F9e99F50934e47E"
          />
        </div>
      </div>
    `,
    data() {
      return {
        airdrops: mockAirdrops.slice(0, 3)
      }
    }
  })
}