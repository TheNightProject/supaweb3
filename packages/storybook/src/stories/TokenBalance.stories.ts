import type { Meta, StoryObj } from '@storybook/vue3'
import TokenBalance from '../../../ui/src/components/tokens/TokenBalance.vue'
import type { TokenData, TokenAction } from '../../../ui/src/components/tokens/TokenBalance.vue'

const meta: Meta<typeof TokenBalance> = {
  title: 'Tokens/TokenBalance',
  component: TokenBalance,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A comprehensive token balance display component with multiple layouts, USD values, price changes, and action buttons. Integrates with Web3Icon for token logos.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    layout: {
      control: 'select',
      options: ['vertical', 'horizontal', 'compact', 'icon-only', 'text-only'],
      description: 'Layout style for the token display',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the component',
    },
    showUsdValue: {
      control: 'boolean',
      description: 'Show USD value as primary display',
    },
    showTokenName: {
      control: 'boolean',
      description: 'Show token name/symbol',
    },
    showFullName: {
      control: 'boolean',
      description: 'Show full token name',
    },
    showPriceChange: {
      control: 'boolean',
      description: 'Show price change indicator',
    },
    showSecondaryInfo: {
      control: 'boolean',
      description: 'Show secondary information',
    },
    showPrice: {
      control: 'boolean',
      description: 'Show price per token',
    },
    showActions: {
      control: 'boolean',
      description: 'Show action buttons',
    },
    loading: {
      control: 'boolean',
      description: 'Show loading state',
    },
    clickable: {
      control: 'boolean',
      description: 'Make the component clickable',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Sample token data
const sampleTokens: Record<string, TokenData> = {
  ETH: {
    symbol: 'ETH',
    name: 'Ethereum',
    balance: 2500000000000000000, // 2.5 ETH
    decimals: 18,
    usdPrice: 2340.50,
    priceChange: 5.24,
  },
  USDC: {
    symbol: 'USDC',
    name: 'USD Coin',
    balance: 1250000000, // 1,250 USDC
    decimals: 6,
    usdPrice: 1.00,
    priceChange: 0.01,
  },
  MATIC: {
    symbol: 'MATIC',
    name: 'Polygon',
    balance: 5000000000000000000000, // 5,000 MATIC
    decimals: 18,
    usdPrice: 0.85,
    priceChange: -2.15,
  },
  DAI: {
    symbol: 'DAI',
    name: 'Dai Stablecoin',
    balance: 500000000000000000000, // 500 DAI
    decimals: 18,
    usdPrice: 0.998,
    priceChange: -0.05,
  },
  BTC: {
    symbol: 'BTC',
    name: 'Bitcoin',
    balance: 5000000, // 0.05 BTC
    decimals: 8,
    usdPrice: 43250.00,
    priceChange: 3.78,
  }
}

const sampleActions: TokenAction[] = [
  { id: 'send', label: 'Send' },
  { id: 'swap', label: 'Swap' },
  { id: 'buy', label: 'Buy' }
]

export const Default: Story = {
  args: {
    token: sampleTokens.ETH,
    layout: 'vertical',
    size: 'md',
  },
}

export const Layouts: Story = {
  render: () => ({
    components: { TokenBalance },
    template: `
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-semibold mb-4">Vertical Layout</h3>
          <div class="grid grid-cols-3 gap-4">
            <TokenBalance
              v-for="token in tokens"
              :key="token.symbol"
              :token="token"
              layout="vertical"
              class=""
            />
          </div>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">Horizontal Layout</h3>
          <div class="space-y-3">
            <TokenBalance
              v-for="token in tokens"
              :key="token.symbol"
              :token="token"
              layout="horizontal"
              class=""
            />
          </div>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">Compact Layout</h3>
          <div class="space-y-2">
            <TokenBalance
              v-for="token in tokens"
              :key="token.symbol"
              :token="token"
              layout="compact"
              class="p-3 border rounded-lg"
            />
          </div>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">Icon Only</h3>
          <div class="flex gap-4">
            <TokenBalance
              v-for="token in tokens"
              :key="token.symbol"
              :token="token"
              layout="icon-only"
              size="lg"
              class="p-3 border rounded-lg"
            />
          </div>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">Text Only</h3>
          <div class="space-y-2">
            <TokenBalance
              v-for="token in tokens"
              :key="token.symbol"
              :token="token"
              layout="text-only"
              class="p-3 border rounded-lg"
            />
          </div>
        </div>
      </div>
    `,
    setup() {
      const tokens = [sampleTokens.ETH, sampleTokens.USDC, sampleTokens.MATIC]
      return { tokens }
    }
  }),
}

export const Sizes: Story = {
  render: () => ({
    components: { TokenBalance },
    template: `
      <div class="space-y-6">
        <div v-for="size in sizes" :key="size">
          <h3 class="text-lg font-semibold mb-4 capitalize">{{ size }} Size</h3>
          <div class="grid grid-cols-3 gap-4">
            <TokenBalance
              :token="token"
              :size="size"
              layout="vertical"
              class=""
            />
            <TokenBalance
              :token="token"
              :size="size"
              layout="horizontal"
              class=""
            />
            <TokenBalance
              :token="token"
              :size="size"
              layout="compact"
              class=""
            />
          </div>
        </div>
      </div>
    `,
    setup() {
      const sizes = ['xs', 'sm', 'md', 'lg', 'xl']
      const token = sampleTokens.ETH
      return { sizes, token }
    }
  }),
}

export const UsdDisplay: Story = {
  render: () => ({
    components: { TokenBalance },
    template: `
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-semibold mb-4">Token Amount Primary</h3>
          <div class="grid grid-cols-2 gap-4">
            <TokenBalance
              v-for="token in tokens"
              :key="token.symbol"
              :token="token"
              layout="vertical"
              :show-usd-value="false"
              class=""
            />
          </div>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">USD Value Primary</h3>
          <div class="grid grid-cols-2 gap-4">
            <TokenBalance
              v-for="token in tokens"
              :key="token.symbol"
              :token="token"
              layout="vertical"
              :show-usd-value="true"
              class=""
            />
          </div>
        </div>
      </div>
    `,
    setup() {
      const tokens = [sampleTokens.ETH, sampleTokens.BTC]
      return { tokens }
    }
  }),
}

export const PriceChanges: Story = {
  render: () => ({
    components: { TokenBalance },
    template: `
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-semibold mb-4">Positive Price Changes</h3>
          <div class="grid grid-cols-2 gap-4">
            <TokenBalance
              v-for="token in positiveTokens"
              :key="token.symbol"
              :token="token"
              layout="horizontal"
              class=""
            />
          </div>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">Negative Price Changes</h3>
          <div class="grid grid-cols-2 gap-4">
            <TokenBalance
              v-for="token in negativeTokens"
              :key="token.symbol"
              :token="token"
              layout="horizontal"
              class=""
            />
          </div>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">Without Price Changes</h3>
          <div class="grid grid-cols-2 gap-4">
            <TokenBalance
              v-for="token in neutralTokens"
              :key="token.symbol"
              :token="token"
              layout="horizontal"
              :show-price-change="false"
              class=""
            />
          </div>
        </div>
      </div>
    `,
    setup() {
      const positiveTokens = [sampleTokens.ETH, sampleTokens.BTC]
      const negativeTokens = [sampleTokens.MATIC, sampleTokens.DAI]
      const neutralTokens = [sampleTokens.USDC]
      return { positiveTokens, negativeTokens, neutralTokens }
    }
  }),
}

export const WithActions: Story = {
  args: {
    token: sampleTokens.ETH,
    layout: 'horizontal',
    showActions: true,
    actions: sampleActions,
  },
  render: (args) => ({
    components: { TokenBalance },
    setup() {
      const handleAction = (actionId: string, token: TokenData) => {
        alert(`Action "${actionId}" clicked for ${token.symbol}`)
      }
      return { args, handleAction }
    },
    template: `
      <TokenBalance
        v-bind="args"
        @action="handleAction"
        class=""
      />
    `,
  }),
}

export const Portfolio: Story = {
  render: () => ({
    components: { TokenBalance },
    template: `
      <div class="space-y-4 max-w-md">
        <h3 class="text-xl font-bold">My Portfolio</h3>
        <div class="space-y-3">
          <TokenBalance
            v-for="token in portfolio"
            :key="token.symbol"
            :token="token"
            layout="horizontal"
            :show-usd-value="true"
            :show-actions="true"
            :actions="actions"
            clickable
            class="hover:shadow-md transition-shadow"
            @click="handleTokenClick"
            @action="handleAction"
          />
        </div>
        <div class="pt-4 border-t">
          <div class="flex justify-between items-center">
            <span class="font-medium">Total Portfolio Value</span>
            <span class="text-lg font-bold text-green-600">{{ totalValue }}</span>
          </div>
        </div>
      </div>
    `,
    setup() {
      const portfolio = [
        sampleTokens.ETH,
        sampleTokens.USDC,
        sampleTokens.MATIC,
        sampleTokens.DAI,
        sampleTokens.BTC
      ]

      const actions = sampleActions

      const calculateUsdValue = (token: TokenData) => {
        if (!token.usdPrice) return 0
        const decimals = token.decimals || 18
        const balance = token.balance / Math.pow(10, decimals)
        return balance * token.usdPrice
      }

      const totalValue = portfolio.reduce((sum, token) => sum + calculateUsdValue(token), 0)
        .toLocaleString('en-US', { style: 'currency', currency: 'USD' })

      const handleTokenClick = (token: TokenData) => {
        alert(`Clicked on ${token.symbol}`)
      }

      const handleAction = (actionId: string, token: TokenData) => {
        alert(`Action "${actionId}" for ${token.symbol}`)
      }

      return { portfolio, actions, totalValue, handleTokenClick, handleAction }
    }
  }),
}

export const LoadingStates: Story = {
  render: () => ({
    components: { TokenBalance },
    template: `
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-semibold mb-4">Basic Loading States</h3>
          <div class="grid grid-cols-2 gap-6">
            <div>
              <h4 class="text-sm font-medium mb-2 text-gray-600">Vertical Layout</h4>
              <TokenBalance
                :token="token"
                layout="vertical"
                loading
                class=""
              />
            </div>
            <div>
              <h4 class="text-sm font-medium mb-2 text-gray-600">Horizontal Layout</h4>
              <TokenBalance
                :token="token"
                layout="horizontal"
                loading
                class=""
              />
            </div>
            <div>
              <h4 class="text-sm font-medium mb-2 text-gray-600">Compact Layout</h4>
              <TokenBalance
                :token="token"
                layout="compact"
                loading
                class=""
              />
            </div>
            <div>
              <h4 class="text-sm font-medium mb-2 text-gray-600">Icon Only</h4>
              <TokenBalance
                :token="token"
                layout="icon-only"
                loading
                class=""
              />
            </div>
          </div>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">Loading with Features</h3>
          <div class="grid grid-cols-1 gap-4">
            <div>
              <h4 class="text-sm font-medium mb-2 text-gray-600">With Actions & Price Changes</h4>
              <TokenBalance
                :token="token"
                layout="horizontal"
                :show-actions="true"
                :actions="actions"
                :show-price-change="true"
                :show-secondary-info="true"
                loading
                class=""
              />
            </div>

            <div>
              <h4 class="text-sm font-medium mb-2 text-gray-600">Vertical with All Features</h4>
              <div class="max-w-xs">
                <TokenBalance
                  :token="token"
                  layout="vertical"
                  :show-actions="true"
                  :actions="actions"
                  :show-price-change="true"
                  :show-secondary-info="true"
                  :show-price="true"
                  loading
                  class=""
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">Different Sizes</h3>
          <div class="grid grid-cols-3 gap-4">
            <div>
              <h4 class="text-sm font-medium mb-2 text-gray-600">Small</h4>
              <TokenBalance
                :token="token"
                layout="horizontal"
                size="sm"
                loading
                class=""
              />
            </div>
            <div>
              <h4 class="text-sm font-medium mb-2 text-gray-600">Medium</h4>
              <TokenBalance
                :token="token"
                layout="horizontal"
                size="md"
                loading
                class=""
              />
            </div>
            <div>
              <h4 class="text-sm font-medium mb-2 text-gray-600">Large</h4>
              <TokenBalance
                :token="token"
                layout="horizontal"
                size="lg"
                loading
                class=""
              />
            </div>
          </div>
        </div>
      </div>
    `,
    setup() {
      const token = sampleTokens.ETH
      const actions = sampleActions
      return { token, actions }
    }
  }),
}

export const CustomizationOptions: Story = {
  render: () => ({
    components: { TokenBalance },
    template: `
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-semibold mb-4">Full Information</h3>
          <TokenBalance
            :token="token"
            layout="vertical"
            :show-full-name="true"
            :show-price="true"
            :show-secondary-info="true"
            :show-price-change="true"
            class=""
          />
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">Minimal Display</h3>
          <TokenBalance
            :token="token"
            layout="compact"
            :show-token-name="false"
            :show-price-change="false"
            :show-secondary-info="false"
            class=""
          />
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">Price Focus</h3>
          <TokenBalance
            :token="token"
            layout="horizontal"
            :show-usd-value="true"
            :show-price="true"
            :show-price-change="true"
            class=""
          />
        </div>
      </div>
    `,
    setup() {
      const token = sampleTokens.ETH
      return { token }
    }
  }),
}

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  decorators: [
    () => ({
      template: '<div class="dark bg-gray-900 p-8"><story /></div>',
    }),
  ],
  render: () => ({
    components: { TokenBalance },
    template: `
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-semibold mb-4 text-white">Portfolio in Dark Mode</h3>
          <div class="space-y-3">
            <TokenBalance
              v-for="token in tokens"
              :key="token.symbol"
              :token="token"
              layout="horizontal"
              :show-usd-value="true"
              class=""
            />
          </div>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4 text-white">Different Layouts</h3>
          <div class="grid grid-cols-3 gap-4">
            <TokenBalance
              :token="tokens[0]"
              layout="vertical"
              class=""
            />
            <TokenBalance
              :token="tokens[1]"
              layout="compact"
              class=""
            />
            <TokenBalance
              :token="tokens[2]"
              layout="icon-only"
              size="lg"
              class=""
            />
          </div>
        </div>
      </div>
    `,
    setup() {
      const tokens = [sampleTokens.ETH, sampleTokens.USDC, sampleTokens.MATIC]
      return { tokens }
    }
  }),
}

export const Interactive: Story = {
  render: () => ({
    components: { TokenBalance },
    data() {
      return {
        selectedToken: 'ETH',
        selectedLayout: 'vertical' as const,
        selectedSize: 'md' as const,
        showUsdValue: false,
        showTokenName: true,
        showFullName: false,
        showPriceChange: true,
        showSecondaryInfo: true,
        showPrice: false,
        showActions: false,
        loading: false,
        clickable: false,
      }
    },
    computed: {
      currentToken() {
        return sampleTokens[this.selectedToken as keyof typeof sampleTokens]
      }
    },
    template: `
      <div class="space-y-6 max-w-4xl">
        <div class="grid grid-cols-3 gap-6">
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium mb-2">Token</label>
              <select v-model="selectedToken" class="w-full p-2 border rounded-lg">
                <option value="ETH">Ethereum (ETH)</option>
                <option value="USDC">USD Coin (USDC)</option>
                <option value="MATIC">Polygon (MATIC)</option>
                <option value="DAI">Dai (DAI)</option>
                <option value="BTC">Bitcoin (BTC)</option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-medium mb-2">Layout</label>
              <select v-model="selectedLayout" class="w-full p-2 border rounded-lg">
                <option value="vertical">Vertical</option>
                <option value="horizontal">Horizontal</option>
                <option value="compact">Compact</option>
                <option value="icon-only">Icon Only</option>
                <option value="text-only">Text Only</option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-medium mb-2">Size</label>
              <select v-model="selectedSize" class="w-full p-2 border rounded-lg">
                <option value="xs">Extra Small</option>
                <option value="sm">Small</option>
                <option value="md">Medium</option>
                <option value="lg">Large</option>
                <option value="xl">Extra Large</option>
              </select>
            </div>
          </div>

          <div class="space-y-4">
            <div class="space-y-2">
              <label class="flex items-center">
                <input v-model="showUsdValue" type="checkbox" class="mr-2" />
                Show USD Value Primary
              </label>
              <label class="flex items-center">
                <input v-model="showTokenName" type="checkbox" class="mr-2" />
                Show Token Name
              </label>
              <label class="flex items-center">
                <input v-model="showFullName" type="checkbox" class="mr-2" />
                Show Full Name
              </label>
              <label class="flex items-center">
                <input v-model="showPriceChange" type="checkbox" class="mr-2" />
                Show Price Change
              </label>
            </div>
          </div>

          <div class="space-y-4">
            <div class="space-y-2">
              <label class="flex items-center">
                <input v-model="showSecondaryInfo" type="checkbox" class="mr-2" />
                Show Secondary Info
              </label>
              <label class="flex items-center">
                <input v-model="showPrice" type="checkbox" class="mr-2" />
                Show Price Per Token
              </label>
              <label class="flex items-center">
                <input v-model="showActions" type="checkbox" class="mr-2" />
                Show Actions
              </label>
              <label class="flex items-center">
                <input v-model="loading" type="checkbox" class="mr-2" />
                Loading State
              </label>
              <label class="flex items-center">
                <input v-model="clickable" type="checkbox" class="mr-2" />
                Clickable
              </label>
            </div>
          </div>
        </div>

        <div class="border-t pt-6">
          <h3 class="text-lg font-semibold mb-4">Preview</h3>
          <div class="flex items-center justify-center p-8 border rounded-lg bg-gray-50 dark:bg-gray-800">
            <TokenBalance
              :token="currentToken"
              :layout="selectedLayout"
              :size="selectedSize"
              :show-usd-value="showUsdValue"
              :show-token-name="showTokenName"
              :show-full-name="showFullName"
              :show-price-change="showPriceChange"
              :show-secondary-info="showSecondaryInfo"
              :show-price="showPrice"
              :show-actions="showActions"
              :actions="showActions ? sampleActions : []"
              :loading="loading"
              :clickable="clickable"
              class=""
              @click="handleClick"
              @action="handleAction"
            />
          </div>
          <div class="mt-4 text-center">
            <code class="text-sm bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
              layout="{{ selectedLayout }}" size="{{ selectedSize }}" token="{{ selectedToken }}"
            </code>
          </div>
        </div>
      </div>
    `,
    methods: {
      handleClick(token: TokenData) {
        alert(`Clicked on ${token.symbol}`)
      },
      handleAction(actionId: string, token: TokenData) {
        alert(`Action "${actionId}" for ${token.symbol}`)
      }
    },
    setup() {
      return { sampleActions }
    }
  }),
}