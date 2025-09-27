import type { Meta, StoryObj } from '@storybook/vue3'
import LiquidityPool from '../../../ui/src/components/defi/LiquidityPool.vue'

const meta: Meta<typeof LiquidityPool> = {
  title: 'DeFi/LiquidityPool',
  component: LiquidityPool,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A comprehensive liquidity pool interface for adding and removing liquidity with impermanent loss warnings and price impact calculations.'
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
      description: 'Title of the liquidity pool'
    },
    subtitle: {
      control: 'text',
      description: 'Subtitle or description'
    },
    tokenA: {
      control: 'object',
      description: 'First token in the pair'
    },
    tokenB: {
      control: 'object',
      description: 'Second token in the pair'
    },
    poolInfo: {
      control: 'object',
      description: 'Pool statistics and information'
    },
    userPosition: {
      control: 'object',
      description: 'User current position in pool'
    },
    fees: {
      control: 'object',
      description: 'Pool fee structure'
    },
    loading: {
      control: 'boolean',
      description: 'Loading state'
    },
    showImpermanentLoss: {
      control: 'boolean',
      description: 'Show impermanent loss warnings'
    },
    showPriceImpact: {
      control: 'boolean',
      description: 'Show price impact calculations'
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'ETH/USDC Pool',
    subtitle: 'High liquidity trading pair with 0.3% fees',
    tokenA: {
      symbol: 'ETH',
      balance: '5.25',
      price: 2500,
      decimals: 18
    },
    tokenB: {
      symbol: 'USDC',
      balance: '15000',
      price: 1,
      decimals: 6
    },
    poolInfo: {
      tvl: '125.8M',
      volume24h: '45.2M',
      fees24h: '135,600',
      apr: '12.5',
      tokenAReserve: '50,240',
      tokenBReserve: '125,600,000',
      lpTokenSupply: '2,234,567'
    },
    userPosition: {
      lpTokens: '1,250',
      tokenAAmount: '2.1',
      tokenBAmount: '5,250',
      shareOfPool: '0.056',
      value: '13,125'
    },
    fees: {
      trading: '0.3',
      protocol: '0.05',
      liquidity: '0.25'
    },
    showImpermanentLoss: true,
    showPriceImpact: true,
    loading: false
  }
}

export const NewPosition: Story = {
  args: {
    ...Default.args,
    title: 'Add Liquidity - ETH/USDC',
    subtitle: 'Start earning fees by providing liquidity',
    userPosition: {
      lpTokens: '0',
      tokenAAmount: '0',
      tokenBAmount: '0',
      shareOfPool: '0',
      value: '0'
    }
  }
}

export const HighVolatility: Story = {
  args: {
    ...Default.args,
    title: 'SUPA/ETH Pool',
    subtitle: 'High volatility pair - higher risk, higher rewards',
    tokenA: {
      symbol: 'SUPA',
      balance: '10000',
      price: 25,
      decimals: 18
    },
    tokenB: {
      symbol: 'ETH',
      balance: '5.25',
      price: 2500,
      decimals: 18
    },
    poolInfo: {
      tvl: '2.8M',
      volume24h: '850K',
      fees24h: '2,550',
      apr: '45.8',
      tokenAReserve: '112,000',
      tokenBReserve: '1,120',
      lpTokenSupply: '11,200'
    },
    userPosition: {
      lpTokens: '500',
      tokenAAmount: '5000',
      tokenBAmount: '5',
      shareOfPool: '4.46',
      value: '37,500'
    }
  }
}

export const StablecoinPair: Story = {
  args: {
    ...Default.args,
    title: 'USDC/DAI Pool',
    subtitle: 'Stable trading pair with minimal impermanent loss',
    tokenA: {
      symbol: 'USDC',
      balance: '50000',
      price: 1,
      decimals: 6
    },
    tokenB: {
      symbol: 'DAI',
      balance: '50000',
      price: 0.999,
      decimals: 18
    },
    poolInfo: {
      tvl: '89.2M',
      volume24h: '12.3M',
      fees24h: '36,900',
      apr: '5.2',
      tokenAReserve: '44,600,000',
      tokenBReserve: '44,644,400',
      lpTokenSupply: '44,622,200'
    },
    userPosition: {
      lpTokens: '25000',
      tokenAAmount: '25000',
      tokenBAmount: '25011',
      shareOfPool: '0.056',
      value: '50,011'
    }
  }
}

export const LowLiquidity: Story = {
  args: {
    ...Default.args,
    title: 'NEW/ETH Pool',
    subtitle: 'New token pair - low liquidity, high price impact',
    tokenA: {
      symbol: 'NEW',
      balance: '1000000',
      price: 0.05,
      decimals: 18
    },
    tokenB: {
      symbol: 'ETH',
      balance: '5.25',
      price: 2500,
      decimals: 18
    },
    poolInfo: {
      tvl: '125K',
      volume24h: '15K',
      fees24h: '45',
      apr: '18.2',
      tokenAReserve: '2,500,000',
      tokenBReserve: '50',
      lpTokenSupply: '11,180'
    },
    userPosition: {
      lpTokens: '0',
      tokenAAmount: '0',
      tokenBAmount: '0',
      shareOfPool: '0',
      value: '0'
    }
  }
}

export const Loading: Story = {
  args: {
    ...Default.args,
    loading: true
  }
}

export const Interactive: Story = {
  render: () => ({
    components: { LiquidityPool },
    template: `
      <div class="space-y-6">
        <div class="text-center">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Interactive Liquidity Pool
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Add or remove liquidity and see real-time calculations
          </p>
        </div>

        <LiquidityPool
          :token-a="tokenA"
          :token-b="tokenB"
          :pool-info="poolInfo"
          :user-position="userPosition"
          :fees="fees"
          :loading="loading"
          title="Interactive ETH/USDC Pool"
          subtitle="Live liquidity management with price impact warnings"
          @add-liquidity="handleAddLiquidity"
          @remove-liquidity="handleRemoveLiquidity"
          @approve="handleApprove"
        />

        <div v-if="lastAction" class="rounded-lg bg-gray-100 p-3 dark:bg-gray-800">
          <div class="text-sm font-medium text-gray-700 dark:text-gray-300">Last Action:</div>
          <pre class="mt-1 text-xs text-gray-600 dark:text-gray-400">{{ lastAction }}</pre>
        </div>
      </div>
    `,
    data() {
      return {
        tokenA: {
          symbol: 'ETH',
          balance: '5.25',
          price: 2500,
          decimals: 18
        },
        tokenB: {
          symbol: 'USDC',
          balance: '15000',
          price: 1,
          decimals: 6
        },
        poolInfo: {
          tvl: '125.8M',
          volume24h: '45.2M',
          fees24h: '135,600',
          apr: '12.5',
          tokenAReserve: '50,240',
          tokenBReserve: '125,600,000',
          lpTokenSupply: '2,234,567'
        },
        userPosition: {
          lpTokens: '1,250',
          tokenAAmount: '2.1',
          tokenBAmount: '5,250',
          shareOfPool: '0.056',
          value: '13,125'
        },
        fees: {
          trading: '0.3',
          protocol: '0.05',
          liquidity: '0.25'
        },
        loading: false,
        lastAction: null
      }
    },
    methods: {
      async handleAddLiquidity(data) {
        this.loading = true
        this.lastAction = `Adding ${data.tokenAAmount} ${data.tokenA.symbol} + ${data.tokenBAmount} ${data.tokenB.symbol}...`

        setTimeout(() => {
          const newLpTokens = parseFloat(this.userPosition.lpTokens) + parseFloat(data.expectedLpTokens || '100')
          this.userPosition.lpTokens = newLpTokens.toString()

          this.userPosition.tokenAAmount = (parseFloat(this.userPosition.tokenAAmount) + parseFloat(data.tokenAAmount)).toString()
          this.userPosition.tokenBAmount = (parseFloat(this.userPosition.tokenBAmount) + parseFloat(data.tokenBAmount)).toString()

          this.tokenA.balance = (parseFloat(this.tokenA.balance) - parseFloat(data.tokenAAmount)).toString()
          this.tokenB.balance = (parseFloat(this.tokenB.balance) - parseFloat(data.tokenBAmount)).toString()

          this.loading = false
          this.lastAction = `Successfully added liquidity! Received ${data.expectedLpTokens || '100'} LP tokens`
        }, 3000)
      },

      async handleRemoveLiquidity(data) {
        this.loading = true
        this.lastAction = `Removing ${data.lpTokens} LP tokens...`

        setTimeout(() => {
          this.userPosition.lpTokens = (parseFloat(this.userPosition.lpTokens) - parseFloat(data.lpTokens)).toString()

          this.tokenA.balance = (parseFloat(this.tokenA.balance) + parseFloat(data.expectedTokenA || '1')).toString()
          this.tokenB.balance = (parseFloat(this.tokenB.balance) + parseFloat(data.expectedTokenB || '2500')).toString()

          this.loading = false
          this.lastAction = `Successfully removed liquidity! Received ${data.expectedTokenA || '1'} ${this.tokenA.symbol} + ${data.expectedTokenB || '2500'} ${this.tokenB.symbol}`
        }, 3000)
      },

      async handleApprove(data) {
        this.lastAction = `Approving ${data.token.symbol} for liquidity operations...`

        setTimeout(() => {
          this.lastAction = `Successfully approved ${data.token.symbol}!`
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
    components: { LiquidityPool },
    template: `
      <div class="dark">
        <div class="min-h-screen bg-gray-900 p-8">
          <LiquidityPool
            :token-a="{
              symbol: 'ETH',
              balance: '5.25',
              price: 2500,
              decimals: 18
            }"
            :token-b="{
              symbol: 'USDC',
              balance: '15000',
              price: 1,
              decimals: 6
            }"
            :pool-info="{
              tvl: '125.8M',
              volume24h: '45.2M',
              fees24h: '135,600',
              apr: '12.5',
              tokenAReserve: '50,240',
              tokenBReserve: '125,600,000',
              lpTokenSupply: '2,234,567'
            }"
            :user-position="{
              lpTokens: '1,250',
              tokenAAmount: '2.1',
              tokenBAmount: '5,250',
              shareOfPool: '0.056',
              value: '13,125'
            }"
            :fees="{
              trading: '0.3',
              protocol: '0.05',
              liquidity: '0.25'
            }"
            title="🌙 Night Mode LP"
            subtitle="Beautiful dark theme liquidity interface"
            :show-impermanent-loss="true"
            :show-price-impact="true"
          />
        </div>
      </div>
    `
  })
}