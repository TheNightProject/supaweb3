import type { Meta, StoryObj } from '@storybook/vue3'
import ChainSwitcher from '../../../ui/src/components/network/ChainSwitcher.vue'

const defaultChains = [
  {
    id: 'ethereum',
    name: 'Ethereum',
    description: 'Ethereum Mainnet',
    type: 'mainnet',
    status: 'active',
    icon: 'ethereum'
  },
  {
    id: 'polygon',
    name: 'Polygon',
    description: 'Polygon Mainnet',
    type: 'mainnet',
    status: 'active',
    icon: 'polygon'
  },
  {
    id: 'arbitrum',
    name: 'Arbitrum One',
    description: 'Arbitrum Layer 2',
    type: 'layer2',
    status: 'active',
    icon: 'arbitrum'
  },
  {
    id: 'optimism',
    name: 'Optimism',
    description: 'Optimism Layer 2',
    type: 'layer2',
    status: 'congested',
    icon: 'optimism'
  },
  {
    id: 'base',
    name: 'Base',
    description: 'Base Layer 2',
    type: 'layer2',
    status: 'active',
    icon: 'base'
  },
  {
    id: 'avalanche',
    name: 'Avalanche',
    description: 'Avalanche C-Chain',
    type: 'mainnet',
    status: 'active',
    icon: 'avalanche'
  },
  {
    id: 'fantom',
    name: 'Fantom',
    description: 'Fantom Opera',
    type: 'mainnet',
    status: 'maintenance',
    icon: 'fantom'
  },
  {
    id: 'bsc',
    name: 'BNB Smart Chain',
    description: 'Binance Smart Chain',
    type: 'mainnet',
    status: 'active',
    icon: 'binance-smart-chain'
  }
]

const meta: Meta<typeof ChainSwitcher> = {
  title: 'Network/ChainSwitcher',
  component: ChainSwitcher,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A network switching interface component that allows users to select and switch between different blockchain networks with multiple display variants.'
      }
    }
  },
  decorators: [
    () => ({
      template: '<div class="min-h-[300px] p-4"><story /></div>',
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    chains: {
      control: 'object',
      description: 'Array of available blockchain networks'
    },
    selectedChainId: {
      control: 'text',
      description: 'ID of the currently selected chain'
    },
    variant: {
      control: 'select',
      options: ['button', 'inline'],
      description: 'Display variant of the chain switcher'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the component'
    },
    appearance: {
      control: 'select',
      options: ['default', 'outline', 'ghost'],
      description: 'Visual appearance style'
    },
    columns: {
      control: { type: 'range', min: 1, max: 4, step: 1 },
      description: 'Number of columns for inline variant'
    },
    label: {
      control: 'text',
      description: 'Label for inline variant'
    },
    showSearch: {
      control: 'boolean',
      description: 'Show search input in dropdown'
    },
    showStatus: {
      control: 'boolean',
      description: 'Show network status indicators'
    },
    showIcons: {
      control: 'boolean',
      description: 'Show network icons using Web3Icon component'
    },
    groupByType: {
      control: 'boolean',
      description: 'Group networks by type in dropdown'
    },
    dropdownPosition: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Position of dropdown menu'
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the component'
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
    chains: defaultChains,
    selectedChainId: 'ethereum',
    variant: 'button',
    size: 'md',
    appearance: 'default',
    showSearch: true,
    showStatus: true,
    showIcons: true,
    groupByType: false
  }
}

export const ButtonVariant: Story = {
  args: {
    ...Default.args,
    variant: 'button'
  }
}

export const InlineVariant: Story = {
  args: {
    ...Default.args,
    variant: 'inline',
    label: 'Select Network',
    columns: 2
  }
}

export const SmallSize: Story = {
  args: {
    ...Default.args,
    size: 'sm'
  }
}

export const LargeSize: Story = {
  args: {
    ...Default.args,
    size: 'lg'
  }
}

export const OutlineAppearance: Story = {
  args: {
    ...Default.args,
    appearance: 'outline'
  }
}

export const GhostAppearance: Story = {
  args: {
    ...Default.args,
    appearance: 'ghost'
  }
}

export const WithGrouping: Story = {
  args: {
    ...Default.args,
    groupByType: true,
    showSearch: true
  }
}

export const WithoutSearch: Story = {
  args: {
    ...Default.args,
    showSearch: false
  }
}

export const WithoutStatus: Story = {
  args: {
    ...Default.args,
    showStatus: false
  }
}

export const WithoutIcons: Story = {
  args: {
    ...Default.args,
    showIcons: false
  }
}

export const IconsComparison: Story = {
  render: () => ({
    components: { ChainSwitcher },
    template: `
      <div class="space-y-6">
        <div class="space-y-2">
          <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300">With Network Icons</h3>
          <ChainSwitcher
            :chains="chains"
            selected-chain-id="ethereum"
            :show-icons="true"
            :show-status="true"
          />
        </div>

        <div class="space-y-2">
          <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300">With Colored Dots</h3>
          <ChainSwitcher
            :chains="chains"
            selected-chain-id="polygon"
            :show-icons="false"
            :show-status="true"
          />
        </div>

        <div class="space-y-2">
          <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300">Inline with Icons</h3>
          <ChainSwitcher
            :chains="chains.slice(0, 4)"
            selected-chain-id="arbitrum"
            variant="inline"
            :columns="2"
            label="Select Network"
            :show-icons="true"
            :show-status="true"
          />
        </div>
      </div>
    `,
    data() {
      return {
        chains: defaultChains
      }
    }
  })
}

export const RightDropdown: Story = {
  args: {
    ...Default.args,
    dropdownPosition: 'right'
  }
}

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true
  }
}

export const MainnetOnly: Story = {
  args: {
    chains: defaultChains.filter(chain => chain.type === 'mainnet'),
    selectedChainId: 'ethereum',
    variant: 'button',
    showStatus: true
  }
}

export const Layer2Only: Story = {
  args: {
    chains: defaultChains.filter(chain => chain.type === 'layer2'),
    selectedChainId: 'arbitrum',
    variant: 'inline',
    label: 'Layer 2 Networks',
    columns: 2
  }
}

export const InlineMultiColumn: Story = {
  args: {
    ...Default.args,
    variant: 'inline',
    label: 'Choose Network',
    columns: 3,
    showStatus: true
  }
}

export const InlineSingleColumn: Story = {
  args: {
    ...Default.args,
    variant: 'inline',
    label: 'Available Networks',
    columns: 1,
    showStatus: true
  }
}

export const PopularNetworks: Story = {
  args: {
    chains: [
      {
        id: 'ethereum',
        name: 'Ethereum',
        description: 'Most popular smart contract platform',
        type: 'mainnet',
        status: 'active'
      },
      {
        id: 'polygon',
        name: 'Polygon',
        description: 'Low-cost Ethereum scaling solution',
        type: 'mainnet',
        status: 'active'
      },
      {
        id: 'arbitrum',
        name: 'Arbitrum',
        description: 'Optimistic rollup for Ethereum',
        type: 'layer2',
        status: 'active'
      },
      {
        id: 'base',
        name: 'Base',
        description: 'Coinbase Layer 2',
        type: 'layer2',
        status: 'active'
      }
    ],
    selectedChainId: 'ethereum',
    variant: 'button',
    groupByType: true,
    showSearch: false
  }
}

export const AllSizes: Story = {
  render: () => ({
    components: { ChainSwitcher },
    template: `
      <div class="space-y-6">
        <div class="space-y-2">
          <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300">Small</h3>
          <ChainSwitcher size="sm" :chains="chains" selected-chain-id="ethereum" />
        </div>

        <div class="space-y-2">
          <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300">Medium (Default)</h3>
          <ChainSwitcher size="md" :chains="chains" selected-chain-id="polygon" />
        </div>

        <div class="space-y-2">
          <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300">Large</h3>
          <ChainSwitcher size="lg" :chains="chains" selected-chain-id="arbitrum" />
        </div>
      </div>
    `,
    data() {
      return {
        chains: defaultChains.slice(0, 5)
      }
    }
  })
}

export const AllAppearances: Story = {
  render: () => ({
    components: { ChainSwitcher },
    template: `
      <div class="space-y-6">
        <div class="space-y-2">
          <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300">Default</h3>
          <ChainSwitcher appearance="default" :chains="chains" selected-chain-id="ethereum" />
        </div>

        <div class="space-y-2">
          <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300">Outline</h3>
          <ChainSwitcher appearance="outline" :chains="chains" selected-chain-id="polygon" />
        </div>

        <div class="space-y-2">
          <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300">Ghost</h3>
          <ChainSwitcher appearance="ghost" :chains="chains" selected-chain-id="arbitrum" />
        </div>
      </div>
    `,
    data() {
      return {
        chains: defaultChains.slice(0, 5)
      }
    }
  })
}

export const ResponsiveInline: Story = {
  render: () => ({
    components: { ChainSwitcher },
    template: `
      <div class="space-y-8 max-w-4xl">
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">1 Column</h3>
          <ChainSwitcher
            variant="inline"
            :columns="1"
            label="Single Column Layout"
            :chains="chains"
            selected-chain-id="ethereum"
            :show-status="true"
          />
        </div>

        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">2 Columns</h3>
          <ChainSwitcher
            variant="inline"
            :columns="2"
            label="Two Column Layout"
            :chains="chains"
            selected-chain-id="polygon"
            :show-status="true"
          />
        </div>

        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">3 Columns</h3>
          <ChainSwitcher
            variant="inline"
            :columns="3"
            label="Three Column Layout"
            :chains="chains"
            selected-chain-id="arbitrum"
            :show-status="true"
          />
        </div>
      </div>
    `,
    data() {
      return {
        chains: defaultChains
      }
    }
  })
}

export const Interactive: Story = {
  render: () => ({
    components: { ChainSwitcher },
    template: `
      <div class="space-y-6">
        <div class="space-y-2">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            Selected Network: {{ selectedChain?.name || 'None' }}
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Try switching networks to see the selection change
          </p>
        </div>

        <div class="space-y-4">
          <div class="space-y-2">
            <h4 class="text-sm font-medium text-gray-700 dark:text-gray-300">Button Variant</h4>
            <ChainSwitcher
              :chains="chains"
              :selected-chain-id="selectedChainId"
              variant="button"
              :group-by-type="true"
              @change="handleChainChange"
            />
          </div>

          <div class="space-y-2">
            <h4 class="text-sm font-medium text-gray-700 dark:text-gray-300">Inline Variant</h4>
            <ChainSwitcher
              :chains="chains.slice(0, 4)"
              :selected-chain-id="selectedChainId"
              variant="inline"
              :columns="2"
              label="Quick Select"
              :show-status="true"
              @change="handleChainChange"
            />
          </div>
        </div>
      </div>
    `,
    data() {
      return {
        chains: defaultChains,
        selectedChainId: 'ethereum'
      }
    },
    computed: {
      selectedChain() {
        return this.chains.find(chain => chain.id === this.selectedChainId)
      }
    },
    methods: {
      handleChainChange(chain) {
        this.selectedChainId = chain.id
        console.log('Chain changed to:', chain)
      }
    }
  })
}