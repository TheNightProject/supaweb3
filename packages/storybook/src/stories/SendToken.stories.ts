import type { Meta, StoryObj } from '@storybook/vue3'
import SendToken from '../../../ui/src/components/tokens/SendToken.vue'

const mockAddressBook = [
  {
    name: 'Alice',
    address: '0x742d35Cc6C4C4C7218243e428F9e99F50934e47E'
  },
  {
    name: 'Bob',
    address: '0x8ba1f109551bD432803012645Hac136c22C501e'
  },
  {
    name: 'Charlie',
    address: '0x1234567890123456789012345678901234567890'
  }
]

const meta: Meta<typeof SendToken> = {
  title: 'Tokens/SendToken',
  component: SendToken,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A comprehensive token sending interface with ENS resolution, address validation, gas estimation, and transaction preview.'
      }
    }
  },
  decorators: [
    () => ({
      template: '<div class="min-w-[480px] max-w-[520px]"><story /></div>',
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Title of the send interface'
    },
    subtitle: {
      control: 'text',
      description: 'Subtitle or description'
    },
    selectedToken: {
      control: 'object',
      description: 'Currently selected token details'
    },
    fromAddress: {
      control: 'text',
      description: 'Sender wallet address'
    },
    addressBook: {
      control: 'object',
      description: 'Array of saved addresses/contacts'
    },
    showAddressBook: {
      control: 'boolean',
      description: 'Show address book suggestions'
    },
    showGasOptions: {
      control: 'boolean',
      description: 'Show gas speed selection'
    },
    showPreview: {
      control: 'boolean',
      description: 'Show transaction preview'
    },
    showDisclaimer: {
      control: 'boolean',
      description: 'Show disclaimer text'
    },
    disclaimer: {
      control: 'text',
      description: 'Custom disclaimer text'
    },
    loading: {
      control: 'boolean',
      description: 'Show loading state'
    },
    loadingText: {
      control: 'text',
      description: 'Text shown during loading'
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
    title: 'Send Token',
    subtitle: 'Send tokens to any address or ENS name',
    selectedToken: {
      symbol: 'ETH',
      balance: '10.5',
      price: 2500,
      decimals: 18
    },
    fromAddress: '0x742d35Cc6C4C4C7218243e428F9e99F50934e47E',
    addressBook: mockAddressBook,
    showAddressBook: true,
    showGasOptions: true,
    showPreview: true,
    showDisclaimer: true,
    loading: false
  }
}

export const ETHSend: Story = {
  args: {
    ...Default.args,
    selectedToken: {
      symbol: 'ETH',
      balance: '5.25',
      price: 2500,
      decimals: 18
    }
  }
}

export const USDCSend: Story = {
  args: {
    ...Default.args,
    title: 'Send USDC',
    selectedToken: {
      symbol: 'USDC',
      balance: '10000',
      price: 1,
      decimals: 6
    }
  }
}

export const BTCSend: Story = {
  args: {
    ...Default.args,
    title: 'Send Bitcoin',
    selectedToken: {
      symbol: 'BTC',
      balance: '0.5',
      price: 45000,
      decimals: 8
    }
  }
}

export const WithoutAddressBook: Story = {
  args: {
    ...Default.args,
    showAddressBook: false,
    addressBook: []
  }
}

export const WithoutGasOptions: Story = {
  args: {
    ...Default.args,
    showGasOptions: false
  }
}

export const WithoutPreview: Story = {
  args: {
    ...Default.args,
    showPreview: false
  }
}

export const Minimal: Story = {
  args: {
    ...Default.args,
    title: 'Send',
    subtitle: '',
    showAddressBook: false,
    showGasOptions: false,
    showPreview: false,
    showDisclaimer: false
  }
}

export const Loading: Story = {
  args: {
    ...Default.args,
    loading: true,
    loadingText: 'Processing transaction...'
  }
}

export const NoTokenSelected: Story = {
  args: {
    ...Default.args,
    selectedToken: {
      symbol: '',
      balance: '',
      price: 0,
      decimals: 18
    }
  }
}

export const LowBalance: Story = {
  args: {
    ...Default.args,
    selectedToken: {
      symbol: 'ETH',
      balance: '0.001',
      price: 2500,
      decimals: 18
    }
  }
}

export const HighValueToken: Story = {
  args: {
    ...Default.args,
    title: 'Send High Value Token',
    selectedToken: {
      symbol: 'WBTC',
      balance: '2.5',
      price: 45000,
      decimals: 8
    }
  }
}

export const StablecoinSend: Story = {
  args: {
    ...Default.args,
    title: 'Send Stablecoin',
    selectedToken: {
      symbol: 'DAI',
      balance: '5000',
      price: 1,
      decimals: 18
    }
  }
}

export const CustomDisclaimer: Story = {
  args: {
    ...Default.args,
    disclaimer: 'This is a testnet transaction. No real funds will be transferred.'
  }
}

export const Interactive: Story = {
  render: () => ({
    components: { SendToken },
    template: `
      <div class="space-y-6">
        <div class="text-center">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Interactive Send Token
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Try entering amounts, addresses, and ENS names (use "vitalik.eth" or "test.eth")
          </p>
        </div>

        <SendToken
          :selected-token="selectedToken"
          :from-address="fromAddress"
          :address-book="addressBook"
          :loading="loading"
          :loading-text="loadingText"
          title="Send Tokens"
          subtitle="Enter recipient and amount"
          @select-token="handleSelectToken"
          @send="handleSend"
          @ens-resolve="handleENSResolve"
          @gas-estimate="handleGasEstimate"
        />

        <div v-if="lastAction" class="rounded-lg bg-gray-100 p-3 dark:bg-gray-800">
          <div class="text-sm font-medium text-gray-700 dark:text-gray-300">Last Action:</div>
          <pre class="mt-1 text-xs text-gray-600 dark:text-gray-400">{{ lastAction }}</pre>
        </div>
      </div>
    `,
    data() {
      return {
        selectedToken: {
          symbol: 'ETH',
          balance: '10.5',
          price: 2500,
          decimals: 18
        },
        fromAddress: '0x742d35Cc6C4C4C7218243e428F9e99F50934e47E',
        addressBook: mockAddressBook,
        loading: false,
        loadingText: 'Sending...',
        lastAction: null
      }
    },
    methods: {
      handleSelectToken() {
        this.lastAction = 'Token selection clicked'
      },
      handleSend(transaction) {
        this.loading = true
        this.lastAction = `Send initiated: ${JSON.stringify(transaction, null, 2)}`

        setTimeout(() => {
          this.loading = false
          this.lastAction = 'Transaction sent successfully!'
        }, 3000)
      },
      handleENSResolve(data) {
        this.lastAction = `ENS resolved: ${data.name} → ${data.address}`
      },
      handleGasEstimate(data) {
        this.lastAction = `Gas estimate requested: ${JSON.stringify(data)}`
      }
    }
  })
}

export const MultipleTokens: Story = {
  render: () => ({
    components: { SendToken },
    template: `
      <div class="grid gap-6 lg:grid-cols-2">
        <div>
          <h4 class="mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">
            Send ETH
          </h4>
          <SendToken
            :selected-token="{ symbol: 'ETH', balance: '5.25', price: 2500 }"
            :from-address="fromAddress"
            :address-book="addressBook"
            title="Send ETH"
            :show-gas-options="true"
          />
        </div>

        <div>
          <h4 class="mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">
            Send USDC
          </h4>
          <SendToken
            :selected-token="{ symbol: 'USDC', balance: '10000', price: 1 }"
            :from-address="fromAddress"
            :address-book="addressBook"
            title="Send USDC"
            :show-gas-options="true"
          />
        </div>

        <div>
          <h4 class="mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">
            Send BTC
          </h4>
          <SendToken
            :selected-token="{ symbol: 'BTC', balance: '0.5', price: 45000 }"
            :from-address="fromAddress"
            :address-book="addressBook"
            title="Send BTC"
            :show-gas-options="true"
          />
        </div>

        <div>
          <h4 class="mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">
            Send DAI
          </h4>
          <SendToken
            :selected-token="{ symbol: 'DAI', balance: '5000', price: 1 }"
            :from-address="fromAddress"
            :address-book="addressBook"
            title="Send DAI"
            :show-gas-options="true"
          />
        </div>
      </div>
    `,
    data() {
      return {
        fromAddress: '0x742d35Cc6C4C4C7218243e428F9e99F50934e47E',
        addressBook: mockAddressBook
      }
    }
  })
}

export const DifferentStates: Story = {
  render: () => ({
    components: { SendToken },
    template: `
      <div class="space-y-8">
        <div>
          <h4 class="mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">
            Normal State
          </h4>
          <SendToken
            :selected-token="{ symbol: 'ETH', balance: '10.5', price: 2500 }"
            :from-address="fromAddress"
            :address-book="addressBook"
            title="Send ETH"
          />
        </div>

        <div>
          <h4 class="mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">
            Loading State
          </h4>
          <SendToken
            :selected-token="{ symbol: 'ETH', balance: '10.5', price: 2500 }"
            :from-address="fromAddress"
            :address-book="addressBook"
            title="Send ETH"
            :loading="true"
            loading-text="Confirming transaction..."
          />
        </div>

        <div>
          <h4 class="mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">
            No Token Selected
          </h4>
          <SendToken
            :selected-token="{ symbol: '', balance: '', price: 0 }"
            :from-address="fromAddress"
            :address-book="addressBook"
            title="Send Token"
          />
        </div>
      </div>
    `,
    data() {
      return {
        fromAddress: '0x742d35Cc6C4C4C7218243e428F9e99F50934e47E',
        addressBook: mockAddressBook
      }
    }
  })
}

export const ENSExample: Story = {
  render: () => ({
    components: { SendToken },
    template: `
      <div class="space-y-4">
        <div class="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 class="font-medium text-blue-900 dark:text-blue-300 mb-2">
            Try ENS Resolution
          </h4>
          <p class="text-sm text-blue-700 dark:text-blue-400">
            Enter these ENS names in the recipient field:
          </p>
          <ul class="mt-2 text-sm text-blue-700 dark:text-blue-400">
            <li>• <code class="bg-blue-100 dark:bg-blue-800 px-1 rounded">vitalik.eth</code></li>
            <li>• <code class="bg-blue-100 dark:bg-blue-800 px-1 rounded">test.eth</code></li>
          </ul>
        </div>

        <SendToken
          :selected-token="{ symbol: 'ETH', balance: '10.5', price: 2500 }"
          :from-address="fromAddress"
          :address-book="addressBook"
          title="Send with ENS"
          subtitle="Try entering an ENS name as the recipient"
        />
      </div>
    `,
    data() {
      return {
        fromAddress: '0x742d35Cc6C4C4C7218243e428F9e99F50934e47E',
        addressBook: mockAddressBook
      }
    }
  })
}