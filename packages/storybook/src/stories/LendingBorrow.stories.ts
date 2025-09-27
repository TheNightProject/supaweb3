import type { Meta, StoryObj } from '@storybook/vue3'
import LendingBorrow from '../../../ui/src/components/defi/LendingBorrow.vue'

const meta: Meta<typeof LendingBorrow> = {
  title: 'DeFi/LendingBorrow',
  component: LendingBorrow,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A comprehensive lending and borrowing interface with health factor monitoring, liquidation risk assessment, and multi-asset position management.'
      }
    }
  },
  decorators: [
    () => ({
      template: '<div class="min-w-[600px] max-w-[900px]"><story /></div>',
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Title of the lending platform'
    },
    subtitle: {
      control: 'text',
      description: 'Subtitle or description'
    },
    supplyAssets: {
      control: 'object',
      description: 'Available assets for supplying'
    },
    borrowAssets: {
      control: 'object',
      description: 'Available assets for borrowing'
    },
    userSupply: {
      control: 'object',
      description: 'User supplied positions'
    },
    userBorrow: {
      control: 'object',
      description: 'User borrowed positions'
    },
    accountHealth: {
      control: 'object',
      description: 'Account health metrics'
    },
    totalSupplied: {
      control: 'text',
      description: 'Total USD value supplied'
    },
    totalBorrowed: {
      control: 'text',
      description: 'Total USD value borrowed'
    },
    netAPY: {
      control: 'text',
      description: 'Net APY percentage'
    },
    showHealthWarnings: {
      control: 'boolean',
      description: 'Show health factor warnings'
    },
    showLiquidationRisk: {
      control: 'boolean',
      description: 'Show liquidation risk alerts'
    },
    loading: {
      control: 'boolean',
      description: 'Loading state'
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Lending & Borrowing',
    subtitle: 'Supply assets to earn interest and borrow against your collateral',
    supplyAssets: [
      {
        symbol: 'ETH',
        name: 'Ethereum',
        balance: '5.25',
        price: 2500,
        supplyApy: '3.2',
        totalSupply: '1.2M',
        supplied: '0',
        collateralFactor: '0.8',
        ltv: '80',
        decimals: 18
      },
      {
        symbol: 'USDC',
        name: 'USD Coin',
        balance: '15000',
        price: 1,
        supplyApy: '4.5',
        totalSupply: '850M',
        supplied: '5000',
        collateralFactor: '0.85',
        ltv: '85',
        decimals: 6
      },
      {
        symbol: 'DAI',
        name: 'Dai Stablecoin',
        balance: '8500',
        price: 0.999,
        supplyApy: '5.1',
        totalSupply: '120M',
        supplied: '0',
        collateralFactor: '0.85',
        ltv: '85',
        decimals: 18
      }
    ],
    borrowAssets: [
      {
        symbol: 'ETH',
        name: 'Ethereum',
        balance: '0',
        price: 2500,
        borrowApy: '5.8',
        totalBorrow: '450K',
        borrowed: '0',
        availableToBorrow: '3.2',
        decimals: 18
      },
      {
        symbol: 'USDC',
        name: 'USD Coin',
        balance: '0',
        price: 1,
        borrowApy: '7.2',
        totalBorrow: '520M',
        borrowed: '1500',
        availableToBorrow: '2800',
        decimals: 6
      },
      {
        symbol: 'USDT',
        name: 'Tether USD',
        balance: '0',
        price: 1,
        borrowApy: '6.9',
        totalBorrow: '380M',
        borrowed: '0',
        availableToBorrow: '3200',
        decimals: 6
      }
    ],
    userSupply: [
      {
        symbol: 'USDC',
        amount: '5000',
        usdValue: '5000',
        apy: '4.5'
      }
    ],
    userBorrow: [
      {
        symbol: 'USDC',
        amount: '1500',
        usdValue: '1500',
        apy: '7.2'
      }
    ],
    accountHealth: {
      factor: '2.45',
      status: 'healthy',
      collateralValue: '5000',
      borrowLimit: '4250',
      liquidationThreshold: '4500',
      utilizationRate: '35.3'
    },
    totalSupplied: '5000',
    totalBorrowed: '1500',
    netAPY: '1.8',
    showHealthWarnings: true,
    showLiquidationRisk: true,
    loading: false
  }
}

export const HealthyPosition: Story = {
  args: {
    ...Default.args,
    title: 'Safe Lending Position',
    subtitle: 'Well-collateralized position with healthy metrics',
    userSupply: [
      {
        symbol: 'ETH',
        amount: '4.0',
        usdValue: '10000',
        apy: '3.2'
      },
      {
        symbol: 'USDC',
        amount: '5000',
        usdValue: '5000',
        apy: '4.5'
      }
    ],
    userBorrow: [
      {
        symbol: 'USDC',
        amount: '2000',
        usdValue: '2000',
        apy: '7.2'
      }
    ],
    accountHealth: {
      factor: '5.85',
      status: 'healthy',
      collateralValue: '15000',
      borrowLimit: '12750',
      liquidationThreshold: '13500',
      utilizationRate: '15.7'
    },
    totalSupplied: '15000',
    totalBorrowed: '2000',
    netAPY: '2.9'
  }
}

export const WarningPosition: Story = {
  args: {
    ...Default.args,
    title: 'Moderate Risk Position',
    subtitle: 'Position approaching liquidation threshold - consider reducing risk',
    userSupply: [
      {
        symbol: 'ETH',
        amount: '2.0',
        usdValue: '5000',
        apy: '3.2'
      }
    ],
    userBorrow: [
      {
        symbol: 'USDC',
        amount: '3500',
        usdValue: '3500',
        apy: '7.2'
      },
      {
        symbol: 'USDT',
        amount: '800',
        usdValue: '800',
        apy: '6.9'
      }
    ],
    accountHealth: {
      factor: '1.45',
      status: 'warning',
      collateralValue: '5000',
      borrowLimit: '4250',
      liquidationThreshold: '4500',
      utilizationRate: '95.5'
    },
    totalSupplied: '5000',
    totalBorrowed: '4300',
    netAPY: '-2.1'
  }
}

export const DangerPosition: Story = {
  args: {
    ...Default.args,
    title: 'High Risk Position',
    subtitle: 'URGENT: Position at risk of liquidation - take immediate action',
    userSupply: [
      {
        symbol: 'ETH',
        amount: '2.0',
        usdValue: '5000',
        apy: '3.2'
      }
    ],
    userBorrow: [
      {
        symbol: 'USDC',
        amount: '4000',
        usdValue: '4000',
        apy: '7.2'
      },
      {
        symbol: 'USDT',
        amount: '400',
        usdValue: '400',
        apy: '6.9'
      }
    ],
    accountHealth: {
      factor: '1.12',
      status: 'danger',
      collateralValue: '5000',
      borrowLimit: '4250',
      liquidationThreshold: '4500',
      utilizationRate: '97.8'
    },
    totalSupplied: '5000',
    totalBorrowed: '4400',
    netAPY: '-3.8'
  }
}

export const NoPosition: Story = {
  args: {
    ...Default.args,
    title: 'Start Lending',
    subtitle: 'Supply assets to begin earning interest and unlock borrowing',
    userSupply: [],
    userBorrow: [],
    accountHealth: {
      factor: '0',
      status: 'none',
      collateralValue: '0',
      borrowLimit: '0',
      liquidationThreshold: '0',
      utilizationRate: '0'
    },
    totalSupplied: '0',
    totalBorrowed: '0',
    netAPY: '0'
  }
}

export const SupplyOnly: Story = {
  args: {
    ...Default.args,
    title: 'Supply Position',
    subtitle: 'Earning interest on supplied assets with no borrowed positions',
    userSupply: [
      {
        symbol: 'ETH',
        amount: '3.0',
        usdValue: '7500',
        apy: '3.2'
      },
      {
        symbol: 'USDC',
        amount: '10000',
        usdValue: '10000',
        apy: '4.5'
      }
    ],
    userBorrow: [],
    accountHealth: {
      factor: '∞',
      status: 'healthy',
      collateralValue: '17500',
      borrowLimit: '14875',
      liquidationThreshold: '15750',
      utilizationRate: '0'
    },
    totalSupplied: '17500',
    totalBorrowed: '0',
    netAPY: '3.9'
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
    components: { LendingBorrow },
    template: `
      <div class="space-y-6">
        <div class="text-center">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Interactive Lending & Borrowing
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Supply collateral, borrow assets, and monitor your health factor
          </p>
        </div>

        <LendingBorrow
          :supply-assets="supplyAssets"
          :borrow-assets="borrowAssets"
          :user-supply="userSupply"
          :user-borrow="userBorrow"
          :account-health="accountHealth"
          :total-supplied="totalSupplied"
          :total-borrowed="totalBorrowed"
          :net-apy="netAPY"
          :loading="loading"
          title="Interactive Lending Platform"
          subtitle="Full-featured lending with real-time health monitoring"
          @supply="handleSupply"
          @withdraw="handleWithdraw"
          @borrow="handleBorrow"
          @repay="handleRepay"
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
        supplyAssets: [
          {
            symbol: 'ETH',
            name: 'Ethereum',
            balance: '5.25',
            price: 2500,
            supplyApy: '3.2',
            totalSupply: '1.2M',
            supplied: '2.0',
            collateralFactor: '0.8',
            ltv: '80',
            decimals: 18
          },
          {
            symbol: 'USDC',
            name: 'USD Coin',
            balance: '15000',
            price: 1,
            supplyApy: '4.5',
            totalSupply: '850M',
            supplied: '5000',
            collateralFactor: '0.85',
            ltv: '85',
            decimals: 6
          }
        ],
        borrowAssets: [
          {
            symbol: 'ETH',
            name: 'Ethereum',
            balance: '0',
            price: 2500,
            borrowApy: '5.8',
            totalBorrow: '450K',
            borrowed: '0',
            availableToBorrow: '2.8',
            decimals: 18
          },
          {
            symbol: 'USDC',
            name: 'USD Coin',
            balance: '0',
            price: 1,
            borrowApy: '7.2',
            totalBorrow: '520M',
            borrowed: '1500',
            availableToBorrow: '4000',
            decimals: 6
          }
        ],
        userSupply: [
          {
            symbol: 'ETH',
            amount: '2.0',
            usdValue: '5000',
            apy: '3.2'
          },
          {
            symbol: 'USDC',
            amount: '5000',
            usdValue: '5000',
            apy: '4.5'
          }
        ],
        userBorrow: [
          {
            symbol: 'USDC',
            amount: '1500',
            usdValue: '1500',
            apy: '7.2'
          }
        ],
        totalSupplied: '10000',
        totalBorrowed: '1500',
        netAPY: '2.3',
        loading: false,
        lastAction: null
      }
    },
    computed: {
      accountHealth() {
        const supplied = parseFloat(this.totalSupplied)
        const borrowed = parseFloat(this.totalBorrowed)

        if (borrowed === 0) {
          return {
            factor: '∞',
            status: 'healthy',
            collateralValue: supplied.toString(),
            borrowLimit: (supplied * 0.85).toString(),
            liquidationThreshold: (supplied * 0.9).toString(),
            utilizationRate: '0'
          }
        }

        const factor = (supplied * 0.8) / borrowed
        const utilizationRate = (borrowed / (supplied * 0.85)) * 100

        let status = 'healthy'
        if (factor < 1.3) status = 'danger'
        else if (factor < 2.0) status = 'warning'

        return {
          factor: factor.toFixed(2),
          status,
          collateralValue: supplied.toString(),
          borrowLimit: (supplied * 0.85).toString(),
          liquidationThreshold: (supplied * 0.9).toString(),
          utilizationRate: utilizationRate.toFixed(1)
        }
      }
    },
    methods: {
      async handleSupply(data) {
        this.loading = true
        this.lastAction = `Supplying ${data.amount} ${data.asset.symbol}...`

        setTimeout(() => {
          // Update user supply position
          const existingSupply = this.userSupply.find(s => s.symbol === data.asset.symbol)
          if (existingSupply) {
            existingSupply.amount = (parseFloat(existingSupply.amount) + parseFloat(data.amount)).toString()
            existingSupply.usdValue = (parseFloat(existingSupply.usdValue) + (parseFloat(data.amount) * data.asset.price)).toString()
          } else {
            this.userSupply.push({
              symbol: data.asset.symbol,
              amount: data.amount,
              usdValue: (parseFloat(data.amount) * data.asset.price).toString(),
              apy: data.asset.supplyApy
            })
          }

          // Update asset balance and supplied amount
          const asset = this.supplyAssets.find(a => a.symbol === data.asset.symbol)
          if (asset) {
            asset.balance = (parseFloat(asset.balance) - parseFloat(data.amount)).toString()
            asset.supplied = (parseFloat(asset.supplied) + parseFloat(data.amount)).toString()
          }

          // Update total supplied
          this.totalSupplied = (parseFloat(this.totalSupplied) + (parseFloat(data.amount) * data.asset.price)).toString()

          this.loading = false
          this.lastAction = `Successfully supplied ${data.amount} ${data.asset.symbol}!`
        }, 3000)
      },

      async handleBorrow(data) {
        this.loading = true
        this.lastAction = `Borrowing ${data.amount} ${data.asset.symbol}...`

        setTimeout(() => {
          // Update user borrow position
          const existingBorrow = this.userBorrow.find(b => b.symbol === data.asset.symbol)
          if (existingBorrow) {
            existingBorrow.amount = (parseFloat(existingBorrow.amount) + parseFloat(data.amount)).toString()
            existingBorrow.usdValue = (parseFloat(existingBorrow.usdValue) + (parseFloat(data.amount) * data.asset.price)).toString()
          } else {
            this.userBorrow.push({
              symbol: data.asset.symbol,
              amount: data.amount,
              usdValue: (parseFloat(data.amount) * data.asset.price).toString(),
              apy: data.asset.borrowApy
            })
          }

          // Update asset borrowed amount
          const asset = this.borrowAssets.find(a => a.symbol === data.asset.symbol)
          if (asset) {
            asset.borrowed = (parseFloat(asset.borrowed) + parseFloat(data.amount)).toString()
            asset.balance = (parseFloat(asset.balance) + parseFloat(data.amount)).toString()
          }

          // Update total borrowed
          this.totalBorrowed = (parseFloat(this.totalBorrowed) + (parseFloat(data.amount) * data.asset.price)).toString()

          this.loading = false
          this.lastAction = `Successfully borrowed ${data.amount} ${data.asset.symbol}!`
        }, 3000)
      },

      async handleRepay(data) {
        this.loading = true
        this.lastAction = `Repaying ${data.amount} ${data.asset.symbol}...`

        setTimeout(() => {
          // Update user borrow position
          const borrowPosition = this.userBorrow.find(b => b.symbol === data.asset.symbol)
          if (borrowPosition) {
            const newAmount = Math.max(0, parseFloat(borrowPosition.amount) - parseFloat(data.amount))
            borrowPosition.amount = newAmount.toString()
            borrowPosition.usdValue = (newAmount * data.asset.price).toString()

            if (newAmount === 0) {
              this.userBorrow = this.userBorrow.filter(b => b.symbol !== data.asset.symbol)
            }
          }

          // Update total borrowed
          this.totalBorrowed = Math.max(0, parseFloat(this.totalBorrowed) - (parseFloat(data.amount) * data.asset.price)).toString()

          this.loading = false
          this.lastAction = `Successfully repaid ${data.amount} ${data.asset.symbol}!`
        }, 2500)
      },

      async handleWithdraw(data) {
        this.loading = true
        this.lastAction = `Withdrawing ${data.amount} ${data.asset.symbol}...`

        setTimeout(() => {
          // Update user supply position
          const supplyPosition = this.userSupply.find(s => s.symbol === data.asset.symbol)
          if (supplyPosition) {
            const newAmount = Math.max(0, parseFloat(supplyPosition.amount) - parseFloat(data.amount))
            supplyPosition.amount = newAmount.toString()
            supplyPosition.usdValue = (newAmount * data.asset.price).toString()

            if (newAmount === 0) {
              this.userSupply = this.userSupply.filter(s => s.symbol !== data.asset.symbol)
            }
          }

          // Update total supplied
          this.totalSupplied = Math.max(0, parseFloat(this.totalSupplied) - (parseFloat(data.amount) * data.asset.price)).toString()

          this.loading = false
          this.lastAction = `Successfully withdrew ${data.amount} ${data.asset.symbol}!`
        }, 2500)
      },

      async handleApprove(data) {
        this.lastAction = `Approving ${data.asset.symbol} for ${data.action}...`

        setTimeout(() => {
          this.lastAction = `Successfully approved ${data.asset.symbol}!`
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
    components: { LendingBorrow },
    template: `
      <div class="dark">
        <div class="min-h-screen bg-gray-900 p-8">
          <LendingBorrow
            :supply-assets="[{
              symbol: 'ETH',
              name: 'Ethereum',
              balance: '5.25',
              price: 2500,
              supplyApy: '3.2',
              totalSupply: '1.2M',
              supplied: '2.0',
              collateralFactor: '0.8',
              ltv: '80',
              decimals: 18
            }]"
            :borrow-assets="[{
              symbol: 'USDC',
              name: 'USD Coin',
              balance: '0',
              price: 1,
              borrowApy: '7.2',
              totalBorrow: '520M',
              borrowed: '1500',
              availableToBorrow: '2800',
              decimals: 6
            }]"
            :user-supply="[{
              symbol: 'ETH',
              amount: '2.0',
              usdValue: '5000',
              apy: '3.2'
            }]"
            :user-borrow="[{
              symbol: 'USDC',
              amount: '1500',
              usdValue: '1500',
              apy: '7.2'
            }]"
            :account-health="{
              factor: '2.45',
              status: 'healthy',
              collateralValue: '5000',
              borrowLimit: '4250',
              liquidationThreshold: '4500',
              utilizationRate: '35.3'
            }"
            total-supplied="5000"
            total-borrowed="1500"
            net-apy="1.8"
            title="🌙 Night Mode Lending"
            subtitle="Beautiful dark theme lending interface"
            :show-health-warnings="true"
            :show-liquidation-risk="true"
          />
        </div>
      </div>
    `
  })
}