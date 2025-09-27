import type { Meta, StoryObj } from '@storybook/vue3'
import TokenSwap from '../../../ui/src/components/tokens/TokenSwap.vue'

const meta: Meta<typeof TokenSwap> = {
  title: 'Tokens/TokenSwap',
  component: TokenSwap,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A DEX swap interface component that allows users to exchange tokens with configurable slippage, deadline, and real-time price calculations.'
      }
    }
  },
  decorators: [
    () => ({
      template: '<div class="min-w-[400px] max-w-[480px]"><story /></div>',
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Title of the swap interface'
    },
    fromToken: {
      control: 'object',
      description: 'Source token details'
    },
    toToken: {
      control: 'object',
      description: 'Destination token details'
    },
    defaultSlippage: {
      control: { type: 'range', min: 0.1, max: 5, step: 0.1 },
      description: 'Default slippage tolerance percentage'
    },
    defaultDeadline: {
      control: { type: 'range', min: 1, max: 60, step: 1 },
      description: 'Default transaction deadline in minutes'
    },
    rate: {
      control: 'number',
      description: 'Exchange rate between tokens'
    },
    priceImpact: {
      control: { type: 'range', min: 0, max: 10, step: 0.01 },
      description: 'Price impact percentage'
    },
    networkFee: {
      control: 'text',
      description: 'Estimated network fee in USD'
    },
    poweredBy: {
      control: 'text',
      description: 'DEX or aggregator powering the swap'
    },
    disabled: {
      control: 'boolean',
      description: 'Disable swap functionality'
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
    title: 'Swap',
    fromToken: {
      symbol: 'ETH',
      name: 'Ethereum',
      balance: '10.5',
      price: 2500
    },
    toToken: {
      symbol: 'USDC',
      name: 'USD Coin',
      balance: '1000',
      price: 1
    },
    defaultSlippage: 0.5,
    defaultDeadline: 20,
    rate: 2500,
    priceImpact: 0.05,
    networkFee: '2.50',
    poweredBy: ''
  }
}

export const ETHToUSDC: Story = {
  args: {
    ...Default.args,
    fromToken: {
      symbol: 'ETH',
      name: 'Ethereum',
      balance: '5.25',
      price: 2500
    },
    toToken: {
      symbol: 'USDC',
      name: 'USD Coin',
      balance: '10000',
      price: 1
    },
    rate: 2500,
    priceImpact: 0.02,
    networkFee: '3.00'
  }
}

export const BTCToETH: Story = {
  args: {
    fromToken: {
      symbol: 'BTC',
      name: 'Bitcoin',
      balance: '0.5',
      price: 45000
    },
    toToken: {
      symbol: 'ETH',
      name: 'Ethereum',
      balance: '2.5',
      price: 2500
    },
    defaultSlippage: 0.5,
    defaultDeadline: 20,
    rate: 18,
    priceImpact: 0.15,
    networkFee: '5.00'
  }
}

export const USDCToDAI: Story = {
  args: {
    fromToken: {
      symbol: 'USDC',
      name: 'USD Coin',
      balance: '5000',
      price: 1
    },
    toToken: {
      symbol: 'DAI',
      name: 'Dai Stablecoin',
      balance: '2500',
      price: 1
    },
    defaultSlippage: 0.1,
    defaultDeadline: 10,
    rate: 0.9995,
    priceImpact: 0.01,
    networkFee: '1.50'
  }
}

export const HighPriceImpact: Story = {
  args: {
    ...Default.args,
    priceImpact: 5.2,
    networkFee: '8.00'
  }
}

export const LowBalance: Story = {
  args: {
    ...Default.args,
    fromToken: {
      symbol: 'ETH',
      name: 'Ethereum',
      balance: '0.01',
      price: 2500
    }
  }
}

export const NoTokenSelected: Story = {
  args: {
    fromToken: {
      symbol: '',
      name: '',
      balance: '0',
      price: 0
    },
    toToken: {
      symbol: '',
      name: '',
      balance: '0',
      price: 0
    },
    defaultSlippage: 0.5,
    defaultDeadline: 20,
    rate: 0,
    priceImpact: 0,
    networkFee: '0'
  }
}

export const WithPoweredBy: Story = {
  args: {
    ...Default.args,
    poweredBy: 'Uniswap V3'
  }
}

export const CustomSlippage: Story = {
  args: {
    ...Default.args,
    defaultSlippage: 2.5,
    defaultDeadline: 30
  }
}

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true
  }
}

export const MATICToUSDT: Story = {
  args: {
    fromToken: {
      symbol: 'MATIC',
      name: 'Polygon',
      balance: '1000',
      price: 0.85
    },
    toToken: {
      symbol: 'USDT',
      name: 'Tether USD',
      balance: '500',
      price: 1
    },
    defaultSlippage: 0.5,
    defaultDeadline: 15,
    rate: 0.85,
    priceImpact: 0.08,
    networkFee: '0.50',
    poweredBy: '1inch'
  }
}

export const LINKToUNI: Story = {
  args: {
    fromToken: {
      symbol: 'LINK',
      name: 'Chainlink',
      balance: '100',
      price: 15
    },
    toToken: {
      symbol: 'UNI',
      name: 'Uniswap',
      balance: '50',
      price: 6
    },
    defaultSlippage: 0.5,
    defaultDeadline: 20,
    rate: 2.5,
    priceImpact: 0.25,
    networkFee: '4.00',
    poweredBy: 'SushiSwap'
  }
}

export const Interactive: Story = {
  render: () => ({
    components: { TokenSwap },
    template: `
      <div class="space-y-6">
        <div class="text-center">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Interactive Token Swap
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Try entering amounts, changing settings, and clicking swap
          </p>
        </div>

        <TokenSwap
          :from-token="fromToken"
          :to-token="toToken"
          :rate="rate"
          :price-impact="priceImpact"
          :network-fee="networkFee"
          powered-by="Uniswap V3"
          @swap="handleSwap"
          @select-from-token="handleSelectFrom"
          @select-to-token="handleSelectTo"
          @settings-change="handleSettings"
        />

        <div v-if="lastAction" class="rounded-lg bg-gray-100 p-3 dark:bg-gray-800">
          <div class="text-sm font-medium text-gray-700 dark:text-gray-300">Last Action:</div>
          <pre class="mt-1 text-xs text-gray-600 dark:text-gray-400">{{ lastAction }}</pre>
        </div>
      </div>
    `,
    data() {
      return {
        fromToken: {
          symbol: 'ETH',
          name: 'Ethereum',
          balance: '10.5',
          price: 2500
        },
        toToken: {
          symbol: 'USDC',
          name: 'USD Coin',
          balance: '5000',
          price: 1
        },
        rate: 2500,
        priceImpact: 0.05,
        networkFee: '2.50',
        lastAction: null
      }
    },
    methods: {
      handleSwap(data) {
        this.lastAction = JSON.stringify(data, null, 2)

        if (data.type === 'reverse') {
          const temp = this.fromToken
          this.fromToken = this.toToken
          this.toToken = temp
          this.rate = 1 / this.rate
        }
      },
      handleSelectFrom() {
        this.lastAction = 'Select From Token clicked'
      },
      handleSelectTo() {
        this.lastAction = 'Select To Token clicked'
      },
      handleSettings(settings) {
        this.lastAction = `Settings changed: ${JSON.stringify(settings)}`
      }
    }
  })
}

export const MultipleSwaps: Story = {
  render: () => ({
    components: { TokenSwap },
    template: `
      <div class="grid gap-6 md:grid-cols-2">
        <div>
          <h4 class="mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">
            ETH → USDC
          </h4>
          <TokenSwap
            :from-token="{ symbol: 'ETH', balance: '5', price: 2500 }"
            :to-token="{ symbol: 'USDC', balance: '1000', price: 1 }"
            :rate="2500"
            :price-impact="0.02"
            network-fee="2.50"
          />
        </div>

        <div>
          <h4 class="mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">
            BTC → ETH
          </h4>
          <TokenSwap
            :from-token="{ symbol: 'BTC', balance: '0.5', price: 45000 }"
            :to-token="{ symbol: 'ETH', balance: '10', price: 2500 }"
            :rate="18"
            :price-impact="0.15"
            network-fee="5.00"
          />
        </div>

        <div>
          <h4 class="mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">
            USDC → DAI
          </h4>
          <TokenSwap
            :from-token="{ symbol: 'USDC', balance: '5000', price: 1 }"
            :to-token="{ symbol: 'DAI', balance: '5000', price: 1 }"
            :rate="0.9995"
            :price-impact="0.01"
            network-fee="1.50"
          />
        </div>

        <div>
          <h4 class="mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">
            MATIC → USDT
          </h4>
          <TokenSwap
            :from-token="{ symbol: 'MATIC', balance: '1000', price: 0.85 }"
            :to-token="{ symbol: 'USDT', balance: '500', price: 1 }"
            :rate="0.85"
            :price-impact="0.08"
            network-fee="0.50"
          />
        </div>
      </div>
    `
  })
}

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  decorators: [
    () => ({
      template: '<div class="dark bg-gray-900 p-8 rounded-xl"><story /></div>',
    }),
  ],
  args: {
    ...Default.args,
    fromToken: {
      symbol: 'ETH',
      name: 'Ethereum',
      balance: '10.5',
      price: 2500
    },
    toToken: {
      symbol: 'USDC',
      name: 'USD Coin',
      balance: '5000',
      price: 1
    },
    rate: 2500,
    priceImpact: 0.05,
    networkFee: '2.50',
    poweredBy: 'Uniswap V3'
  }
}

export const DarkModeComparison: Story = {
  render: () => ({
    components: { TokenSwap },
    template: `
      <div class="grid gap-6 lg:grid-cols-2">
        <div>
          <h3 class="mb-4 text-center text-sm font-semibold text-gray-700">Light Mode</h3>
          <div class="rounded-xl bg-gray-50 p-4">
            <TokenSwap
              :from-token="{ symbol: 'ETH', balance: '10.5', price: 2500 }"
              :to-token="{ symbol: 'USDC', balance: '5000', price: 1 }"
              :rate="2500"
              :price-impact="0.05"
              network-fee="2.50"
              powered-by="Uniswap V3"
            />
          </div>
        </div>

        <div>
          <h3 class="mb-4 text-center text-sm font-semibold text-gray-300">Dark Mode</h3>
          <div class="dark rounded-xl bg-gray-900 p-4">
            <TokenSwap
              :from-token="{ symbol: 'ETH', balance: '10.5', price: 2500 }"
              :to-token="{ symbol: 'USDC', balance: '5000', price: 1 }"
              :rate="2500"
              :price-impact="0.05"
              network-fee="2.50"
              powered-by="Uniswap V3"
            />
          </div>
        </div>
      </div>
    `
  })
}

export const DifferentDEXs: Story = {
  render: () => ({
    components: { TokenSwap },
    template: `
      <div class="space-y-6">
        <TokenSwap
          title="Uniswap"
          :from-token="{ symbol: 'ETH', balance: '10', price: 2500 }"
          :to-token="{ symbol: 'USDC', balance: '5000', price: 1 }"
          :rate="2495"
          :price-impact="0.05"
          network-fee="3.00"
          powered-by="Uniswap V3"
        />

        <TokenSwap
          title="SushiSwap"
          :from-token="{ symbol: 'ETH', balance: '10', price: 2500 }"
          :to-token="{ symbol: 'USDC', balance: '5000', price: 1 }"
          :rate="2490"
          :price-impact="0.08"
          network-fee="2.80"
          powered-by="SushiSwap"
        />

        <TokenSwap
          title="1inch Aggregator"
          :from-token="{ symbol: 'ETH', balance: '10', price: 2500 }"
          :to-token="{ symbol: 'USDC', balance: '5000', price: 1 }"
          :rate="2498"
          :price-impact="0.03"
          network-fee="2.50"
          powered-by="1inch"
        />
      </div>
    `
  })
}