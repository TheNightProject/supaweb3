import type { Meta, StoryObj } from '@storybook/vue3'
import StakingInterface from '../../../ui/src/components/defi/StakingInterface.vue'

const meta: Meta<typeof StakingInterface> = {
  title: 'DeFi/StakingInterface',
  component: StakingInterface,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A comprehensive staking interface with APY display, rewards calculation, and auto-compound functionality.'
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
      description: 'Title of the staking interface'
    },
    subtitle: {
      control: 'text',
      description: 'Subtitle or description'
    },
    stakingToken: {
      control: 'object',
      description: 'Token being staked'
    },
    rewardToken: {
      control: 'object',
      description: 'Reward token details'
    },
    currentAPY: {
      control: 'text',
      description: 'Current APY percentage'
    },
    stakedAmount: {
      control: 'text',
      description: 'User staked amount'
    },
    rewardsEarned: {
      control: 'text',
      description: 'Rewards earned'
    },
    showAutoCompound: {
      control: 'boolean',
      description: 'Show auto-compound toggle'
    },
    showClaimRewards: {
      control: 'boolean',
      description: 'Show claim rewards section'
    },
    loading: {
      control: 'boolean',
      description: 'Loading state'
    },
    claiming: {
      control: 'boolean',
      description: 'Claiming state'
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'ETH Staking',
    subtitle: 'Stake ETH and earn rewards',
    stakingToken: {
      symbol: 'ETH',
      balance: '10.5',
      price: 2500,
      decimals: 18
    },
    rewardToken: {
      symbol: 'stETH',
      balance: '0',
      price: 2500,
      decimals: 18
    },
    currentAPY: '4.2',
    apyTrend: 0.3,
    stakedAmount: '2.5',
    rewardsEarned: '0.025',
    poolInfo: {
      tvl: '15.2M',
      totalStaked: '8.9M',
      participants: '12,340'
    },
    showAutoCompound: true,
    showClaimRewards: true,
    showTransactionDetails: true,
    loading: false,
    claiming: false
  }
}

export const HighAPY: Story = {
  args: {
    ...Default.args,
    title: 'High Yield Staking Pool',
    subtitle: 'Earn maximum rewards with our premium staking',
    currentAPY: '25.8',
    apyTrend: 5.2,
    stakingToken: {
      symbol: 'SUPA',
      balance: '1000',
      price: 50,
      decimals: 18
    },
    rewardToken: {
      symbol: 'REWARD',
      balance: '0',
      price: 25,
      decimals: 18
    },
    stakedAmount: '500',
    rewardsEarned: '125',
    poolInfo: {
      tvl: '2.8M',
      totalStaked: '1.2M',
      participants: '856'
    }
  }
}

export const WithCooldown: Story = {
  args: {
    ...Default.args,
    title: 'Staking with Cooldown',
    subtitle: 'Note: 7-day cooldown period for unstaking',
    cooldownPeriod: '7 days',
    unstakingPenalty: '2.5',
    cooldownEndTime: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
    showUnstakeTimer: true,
    additionalInfo: {
      lockPeriod: 'Flexible',
      compounding: 'Daily',
      totalStakers: '12,340',
      protocolFee: '0.5'
    }
  }
}

export const NoPosition: Story = {
  args: {
    ...Default.args,
    stakedAmount: '0',
    rewardsEarned: '0',
    title: 'Start Staking',
    subtitle: 'Begin earning rewards by staking your tokens'
  }
}

export const Loading: Story = {
  args: {
    ...Default.args,
    loading: true
  }
}

export const Claiming: Story = {
  args: {
    ...Default.args,
    claiming: true,
    rewardsEarned: '5.25'
  }
}

export const Interactive: Story = {
  render: () => ({
    components: { StakingInterface },
    template: `
      <div class="space-y-6">
        <div class="text-center">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Interactive Staking Interface
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Try staking, unstaking, and claiming rewards
          </p>
        </div>

        <StakingInterface
          :staking-token="stakingToken"
          :reward-token="rewardToken"
          :current-apy="currentAPY"
          :staked-amount="stakedAmount"
          :rewards-earned="rewardsEarned"
          :loading="loading"
          :claiming="claiming"
          title="Interactive ETH Staking"
          subtitle="Full-featured staking with live updates"
          @stake="handleStake"
          @unstake="handleUnstake"
          @claim-rewards="handleClaimRewards"
        />

        <div v-if="lastAction" class="rounded-lg bg-gray-100 p-3 dark:bg-gray-800">
          <div class="text-sm font-medium text-gray-700 dark:text-gray-300">Last Action:</div>
          <pre class="mt-1 text-xs text-gray-600 dark:text-gray-400">{{ lastAction }}</pre>
        </div>
      </div>
    `,
    data() {
      return {
        stakingToken: {
          symbol: 'ETH',
          balance: '10.5',
          price: 2500,
          decimals: 18
        },
        rewardToken: {
          symbol: 'stETH',
          balance: '0',
          price: 2500,
          decimals: 18
        },
        currentAPY: '4.2',
        stakedAmount: '2.5',
        rewardsEarned: '0.125',
        loading: false,
        claiming: false,
        lastAction: null
      }
    },
    methods: {
      async handleStake(data) {
        this.loading = true
        this.lastAction = `Staking ${data.amount} ${data.token.symbol}...`

        setTimeout(() => {
          const newStaked = parseFloat(this.stakedAmount) + parseFloat(data.amount)
          this.stakedAmount = newStaked.toString()
          this.stakingToken.balance = (parseFloat(this.stakingToken.balance) - parseFloat(data.amount)).toString()
          this.loading = false
          this.lastAction = `Successfully staked ${data.amount} ${data.token.symbol}!`
        }, 3000)
      },

      async handleUnstake(data) {
        this.loading = true
        this.lastAction = `Unstaking ${data.amount} ${data.token.symbol}...`

        setTimeout(() => {
          const newStaked = Math.max(0, parseFloat(this.stakedAmount) - parseFloat(data.amount))
          this.stakedAmount = newStaked.toString()
          this.stakingToken.balance = (parseFloat(this.stakingToken.balance) + parseFloat(data.amount)).toString()
          this.loading = false
          this.lastAction = `Successfully unstaked ${data.amount} ${data.token.symbol}!`
        }, 3000)
      },

      async handleClaimRewards(data) {
        this.claiming = true
        this.lastAction = `Claiming ${data.amount} ${data.token.symbol} rewards...`

        setTimeout(() => {
          this.rewardToken.balance = (parseFloat(this.rewardToken.balance) + parseFloat(this.rewardsEarned)).toString()
          this.rewardsEarned = '0'
          this.claiming = false
          this.lastAction = `Successfully claimed ${data.amount} ${data.token.symbol} rewards!`
        }, 2500)
      }
    }
  })
}

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' }
  },
  render: () => ({
    components: { StakingInterface },
    template: `
      <div class="dark">
        <div class="min-h-screen bg-gray-900 p-8">
          <StakingInterface
            :staking-token="{
              symbol: 'ETH',
              balance: '10.5',
              price: 2500,
              decimals: 18
            }"
            :reward-token="{
              symbol: 'stETH',
              balance: '0',
              price: 2500,
              decimals: 18
            }"
            current-apy="4.2"
            staked-amount="2.5"
            rewards-earned="0.125"
            title="🌙 Night Mode Staking"
            subtitle="Beautiful dark theme staking interface"
            :show-auto-compound="true"
          />
        </div>
      </div>
    `
  })
}