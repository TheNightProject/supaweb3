import type { Meta, StoryObj } from '@storybook/vue3'
import YieldFarming from '../../../ui/src/components/defi/YieldFarming.vue'

const meta: Meta<typeof YieldFarming> = {
  title: 'DeFi/YieldFarming',
  component: YieldFarming,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A comprehensive yield farming interface with multiple reward tokens, auto-compound options, and farm performance tracking.'
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
      description: 'Title of the farming pool'
    },
    subtitle: {
      control: 'text',
      description: 'Subtitle or description'
    },
    stakingToken: {
      control: 'object',
      description: 'Token being staked for farming'
    },
    rewardTokens: {
      control: 'object',
      description: 'Array of reward tokens'
    },
    farmInfo: {
      control: 'object',
      description: 'Farm statistics and information'
    },
    userPosition: {
      control: 'object',
      description: 'User current farming position'
    },
    multiplier: {
      control: 'text',
      description: 'Farm reward multiplier'
    },
    autoCompoundEnabled: {
      control: 'boolean',
      description: 'Auto-compound feature enabled'
    },
    showMultipleRewards: {
      control: 'boolean',
      description: 'Show multiple reward tokens'
    },
    showAutoCompound: {
      control: 'boolean',
      description: 'Show auto-compound options'
    },
    loading: {
      control: 'boolean',
      description: 'Loading state'
    },
    harvesting: {
      control: 'boolean',
      description: 'Harvesting rewards state'
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'ETH-USDC LP Farm',
    subtitle: 'Earn SUPA rewards by staking LP tokens',
    stakingToken: {
      symbol: 'ETH-USDC LP',
      balance: '12.5',
      price: 450,
      decimals: 18
    },
    rewardTokens: [
      {
        symbol: 'SUPA',
        balance: '0',
        price: 25,
        decimals: 18,
        apr: '45.2',
        dailyRewards: '2.5'
      }
    ],
    farmInfo: {
      tvl: '8.9M',
      totalStaked: '19,780',
      participants: '1,234',
      startTime: '2024-01-15T00:00:00Z',
      endTime: '2024-12-31T23:59:59Z',
      allocPoint: '1000',
      emissionRate: '10'
    },
    userPosition: {
      stakedAmount: '5.5',
      pendingRewards: [
        {
          symbol: 'SUPA',
          amount: '12.5',
          usdValue: '312.50'
        }
      ],
      totalRewardsEarned: '125.8',
      stakingTime: '2024-03-01T10:30:00Z'
    },
    multiplier: '2.5x',
    autoCompoundEnabled: true,
    showMultipleRewards: false,
    showAutoCompound: true,
    loading: false,
    harvesting: false
  }
}

export const MultipleRewards: Story = {
  args: {
    ...Default.args,
    title: 'High Yield Multi-Reward Farm',
    subtitle: 'Earn multiple tokens from a single stake',
    rewardTokens: [
      {
        symbol: 'SUPA',
        balance: '25.8',
        price: 25,
        decimals: 18,
        apr: '35.2',
        dailyRewards: '2.1'
      },
      {
        symbol: 'BONUS',
        balance: '0',
        price: 5,
        decimals: 18,
        apr: '15.8',
        dailyRewards: '8.5'
      },
      {
        symbol: 'EXTRA',
        balance: '0',
        price: 1.5,
        decimals: 18,
        apr: '8.3',
        dailyRewards: '15.2'
      }
    ],
    userPosition: {
      stakedAmount: '5.5',
      pendingRewards: [
        {
          symbol: 'SUPA',
          amount: '12.5',
          usdValue: '312.50'
        },
        {
          symbol: 'BONUS',
          amount: '45.2',
          usdValue: '226.00'
        },
        {
          symbol: 'EXTRA',
          amount: '125.8',
          usdValue: '188.70'
        }
      ],
      totalRewardsEarned: '2,458.75',
      stakingTime: '2024-01-20T14:15:00Z'
    },
    multiplier: '5x',
    showMultipleRewards: true
  }
}

export const HighAPR: Story = {
  args: {
    ...Default.args,
    title: 'SUPA Booster Farm',
    subtitle: 'Limited time high APR farming opportunity',
    stakingToken: {
      symbol: 'SUPA',
      balance: '1000',
      price: 25,
      decimals: 18
    },
    rewardTokens: [
      {
        symbol: 'SUPA',
        balance: '156.8',
        price: 25,
        decimals: 18,
        apr: '145.8',
        dailyRewards: '8.2'
      }
    ],
    farmInfo: {
      tvl: '2.1M',
      totalStaked: '84,000',
      participants: '456',
      startTime: '2024-09-01T00:00:00Z',
      endTime: '2024-10-31T23:59:59Z',
      allocPoint: '5000',
      emissionRate: '50'
    },
    userPosition: {
      stakedAmount: '500',
      pendingRewards: [
        {
          symbol: 'SUPA',
          amount: '85.2',
          usdValue: '2,130.00'
        }
      ],
      totalRewardsEarned: '1,256.4',
      stakingTime: '2024-09-05T09:20:00Z'
    },
    multiplier: '10x'
  }
}

export const ExpiredFarm: Story = {
  args: {
    ...Default.args,
    title: 'Legacy Farm (Expired)',
    subtitle: 'Farm has ended - withdraw your position',
    farmInfo: {
      tvl: '125K',
      totalStaked: '278',
      participants: '45',
      startTime: '2024-01-01T00:00:00Z',
      endTime: '2024-08-31T23:59:59Z',
      allocPoint: '500',
      emissionRate: '0'
    },
    rewardTokens: [
      {
        symbol: 'SUPA',
        balance: '45.2',
        price: 25,
        decimals: 18,
        apr: '0',
        dailyRewards: '0'
      }
    ],
    userPosition: {
      stakedAmount: '2.8',
      pendingRewards: [
        {
          symbol: 'SUPA',
          amount: '156.8',
          usdValue: '3,920.00'
        }
      ],
      totalRewardsEarned: '2,458.75',
      stakingTime: '2024-02-15T11:45:00Z'
    },
    multiplier: '0x',
    autoCompoundEnabled: false,
    showAutoCompound: false
  }
}

export const NewFarm: Story = {
  args: {
    ...Default.args,
    title: 'Brand New Farm',
    subtitle: 'Fresh farming opportunity - be an early adopter',
    farmInfo: {
      tvl: '25K',
      totalStaked: '56',
      participants: '12',
      startTime: new Date().toISOString(),
      endTime: '2025-03-31T23:59:59Z',
      allocPoint: '2000',
      emissionRate: '25'
    },
    userPosition: {
      stakedAmount: '0',
      pendingRewards: [],
      totalRewardsEarned: '0',
      stakingTime: null
    },
    multiplier: '4x'
  }
}

export const Loading: Story = {
  args: {
    ...Default.args,
    loading: true
  }
}

export const Harvesting: Story = {
  args: {
    ...Default.args,
    harvesting: true,
    userPosition: {
      ...Default.args.userPosition,
      pendingRewards: [
        {
          symbol: 'SUPA',
          amount: '45.8',
          usdValue: '1,145.00'
        }
      ]
    }
  }
}

export const Interactive: Story = {
  render: () => ({
    components: { YieldFarming },
    template: `
      <div class="space-y-6">
        <div class="text-center">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Interactive Yield Farming
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Stake, harvest, and manage your farming positions
          </p>
        </div>

        <YieldFarming
          :staking-token="stakingToken"
          :reward-tokens="rewardTokens"
          :farm-info="farmInfo"
          :user-position="userPosition"
          :multiplier="multiplier"
          :auto-compound-enabled="autoCompoundEnabled"
          :loading="loading"
          :harvesting="harvesting"
          title="Interactive LP Farm"
          subtitle="Full-featured farming with live updates"
          @stake="handleStake"
          @unstake="handleUnstake"
          @harvest="handleHarvest"
          @toggle-auto-compound="handleToggleAutoCompound"
          @emergency-withdraw="handleEmergencyWithdraw"
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
          symbol: 'ETH-USDC LP',
          balance: '12.5',
          price: 450,
          decimals: 18
        },
        rewardTokens: [
          {
            symbol: 'SUPA',
            balance: '25.8',
            price: 25,
            decimals: 18,
            apr: '45.2',
            dailyRewards: '2.5'
          }
        ],
        farmInfo: {
          tvl: '8.9M',
          totalStaked: '19,780',
          participants: '1,234',
          startTime: '2024-01-15T00:00:00Z',
          endTime: '2024-12-31T23:59:59Z',
          allocPoint: '1000',
          emissionRate: '10'
        },
        userPosition: {
          stakedAmount: '5.5',
          pendingRewards: [
            {
              symbol: 'SUPA',
              amount: '12.5',
              usdValue: '312.50'
            }
          ],
          totalRewardsEarned: '125.8',
          stakingTime: '2024-03-01T10:30:00Z'
        },
        multiplier: '2.5x',
        autoCompoundEnabled: true,
        loading: false,
        harvesting: false,
        lastAction: null
      }
    },
    methods: {
      async handleStake(data) {
        this.loading = true
        this.lastAction = `Staking ${data.amount} ${data.token.symbol}...`

        setTimeout(() => {
          const newStaked = parseFloat(this.userPosition.stakedAmount) + parseFloat(data.amount)
          this.userPosition.stakedAmount = newStaked.toString()
          this.stakingToken.balance = (parseFloat(this.stakingToken.balance) - parseFloat(data.amount)).toString()
          this.loading = false
          this.lastAction = `Successfully staked ${data.amount} ${data.token.symbol}!`
        }, 3000)
      },

      async handleUnstake(data) {
        this.loading = true
        this.lastAction = `Unstaking ${data.amount} ${data.token.symbol}...`

        setTimeout(() => {
          const newStaked = Math.max(0, parseFloat(this.userPosition.stakedAmount) - parseFloat(data.amount))
          this.userPosition.stakedAmount = newStaked.toString()
          this.stakingToken.balance = (parseFloat(this.stakingToken.balance) + parseFloat(data.amount)).toString()
          this.loading = false
          this.lastAction = `Successfully unstaked ${data.amount} ${data.token.symbol}!`
        }, 3000)
      },

      async handleHarvest(data) {
        this.harvesting = true
        this.lastAction = `Harvesting rewards...`

        setTimeout(() => {
          data.rewards.forEach(reward => {
            const rewardToken = this.rewardTokens.find(t => t.symbol === reward.symbol)
            if (rewardToken) {
              rewardToken.balance = (parseFloat(rewardToken.balance) + parseFloat(reward.amount)).toString()
            }
          })

          this.userPosition.pendingRewards = this.userPosition.pendingRewards.map(r => ({
            ...r,
            amount: '0',
            usdValue: '0'
          }))

          this.harvesting = false
          this.lastAction = `Successfully harvested ${data.rewards.map(r => `${r.amount} ${r.symbol}`).join(', ')}!`
        }, 2500)
      },

      handleToggleAutoCompound() {
        this.autoCompoundEnabled = !this.autoCompoundEnabled
        this.lastAction = `Auto-compound ${this.autoCompoundEnabled ? 'enabled' : 'disabled'}`
      },

      async handleEmergencyWithdraw() {
        this.loading = true
        this.lastAction = `Emergency withdrawing all positions...`

        setTimeout(() => {
          this.stakingToken.balance = (parseFloat(this.stakingToken.balance) + parseFloat(this.userPosition.stakedAmount)).toString()
          this.userPosition.stakedAmount = '0'
          this.userPosition.pendingRewards = []
          this.loading = false
          this.lastAction = `Emergency withdrawal completed - all positions withdrawn`
        }, 2000)
      }
    }
  })
}

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' }
  },
  render: () => ({
    components: { YieldFarming },
    template: `
      <div class="dark">
        <div class="min-h-screen bg-gray-900 p-8">
          <YieldFarming
            :staking-token="{
              symbol: 'ETH-USDC LP',
              balance: '12.5',
              price: 450,
              decimals: 18
            }"
            :reward-tokens="[{
              symbol: 'SUPA',
              balance: '25.8',
              price: 25,
              decimals: 18,
              apr: '45.2',
              dailyRewards: '2.5'
            }]"
            :farm-info="{
              tvl: '8.9M',
              totalStaked: '19,780',
              participants: '1,234',
              startTime: '2024-01-15T00:00:00Z',
              endTime: '2024-12-31T23:59:59Z',
              allocPoint: '1000',
              emissionRate: '10'
            }"
            :user-position="{
              stakedAmount: '5.5',
              pendingRewards: [{
                symbol: 'SUPA',
                amount: '12.5',
                usdValue: '312.50'
              }],
              totalRewardsEarned: '125.8',
              stakingTime: '2024-03-01T10:30:00Z'
            }"
            multiplier="2.5x"
            :auto-compound-enabled="true"
            title="🌙 Night Mode Farm"
            subtitle="Beautiful dark theme farming interface"
            :show-auto-compound="true"
          />
        </div>
      </div>
    `
  })
}