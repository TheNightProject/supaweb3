import type { Meta, StoryObj } from '@storybook/vue3'
import SupaWeb3Address from '../../../ui/src/components/identity/SupaWeb3Address.vue'

const meta: Meta<typeof SupaWeb3Address> = {
  title: 'Identity/SupaWeb3Address',
  component: SupaWeb3Address,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A smart wallet address display component with truncation, copy functionality, and ENS support. Perfect for showing wallet addresses in a user-friendly format.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    address: {
      control: 'text',
      description: 'The wallet address to display',
    },
    ensName: {
      control: 'text',
      description: 'Optional ENS name to display instead of address',
    },
    variant: {
      control: 'select',
      options: ['default', 'outline', 'ghost', 'link'],
      description: 'Visual style variant',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the address display',
    },
    truncate: {
      control: 'boolean',
      description: 'Whether to truncate the address',
    },
    truncateLength: {
      control: { type: 'range', min: 2, max: 10, step: 1 },
      description: 'Number of characters to show at start and end when truncated',
    },
    showCopyButton: {
      control: 'boolean',
      description: 'Show copy to clipboard button',
    },
    copyOnly: {
      control: 'boolean',
      description: 'Make address non-clickable, only copyable',
    },
    showAvatar: {
      control: 'boolean',
      description: 'Show avatar/identicon',
    },
    avatarPosition: {
      control: 'select',
      options: ['left', 'right', 'none'],
      description: 'Position of the avatar',
    },
    linkTo: {
      control: 'text',
      description: 'URL to link to when clicked (e.g., Etherscan)',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    copyTooltip: {
      control: 'text',
      description: 'Tooltip text for copy button',
    },
    toastMessage: {
      control: 'text',
      description: 'Message to show when copied',
    },
    toastDuration: {
      control: { type: 'range', min: 500, max: 5000, step: 500 },
      description: 'Duration of toast message in milliseconds',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    address: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3',
  },
}

export const WithENS: Story = {
  args: {
    address: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3',
    ensName: 'vitalik.eth',
  },
}

export const Variants: Story = {
  render: () => ({
    components: { SupaWeb3Address },
    template: `
      <div class="space-y-4">
        <div class="flex items-center gap-4">
          <span class="text-sm font-medium w-20">Default:</span>
          <SupaWeb3Address
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            variant="default"
          />
        </div>
        <div class="flex items-center gap-4">
          <span class="text-sm font-medium w-20">Outline:</span>
          <SupaWeb3Address
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            variant="outline"
          />
        </div>
        <div class="flex items-center gap-4">
          <span class="text-sm font-medium w-20">Ghost:</span>
          <SupaWeb3Address
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            variant="ghost"
          />
        </div>
        <div class="flex items-center gap-4">
          <span class="text-sm font-medium w-20">Link:</span>
          <SupaWeb3Address
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            variant="link"
          />
        </div>
      </div>
    `,
  }),
}

export const Sizes: Story = {
  render: () => ({
    components: { SupaWeb3Address },
    template: `
      <div class="space-y-4">
        <div class="flex items-center gap-4">
          <span class="text-xs font-medium w-12">XS:</span>
          <SupaWeb3Address
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            size="xs"
          />
        </div>
        <div class="flex items-center gap-4">
          <span class="text-sm font-medium w-12">SM:</span>
          <SupaWeb3Address
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            size="sm"
          />
        </div>
        <div class="flex items-center gap-4">
          <span class="text-base font-medium w-12">MD:</span>
          <SupaWeb3Address
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            size="md"
          />
        </div>
        <div class="flex items-center gap-4">
          <span class="text-lg font-medium w-12">LG:</span>
          <SupaWeb3Address
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            size="lg"
          />
        </div>
        <div class="flex items-center gap-4">
          <span class="text-xl font-medium w-12">XL:</span>
          <SupaWeb3Address
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            size="xl"
          />
        </div>
      </div>
    `,
  }),
}

export const TruncationOptions: Story = {
  render: () => ({
    components: { SupaWeb3Address },
    template: `
      <div class="space-y-4">
        <div>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Full Address (no truncation):</p>
          <SupaWeb3Address
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            :truncate="false"
          />
        </div>
        <div>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Truncate 2 characters:</p>
          <SupaWeb3Address
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            :truncate-length="2"
          />
        </div>
        <div>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Truncate 4 characters (default):</p>
          <SupaWeb3Address
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            :truncate-length="4"
          />
        </div>
        <div>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Truncate 6 characters:</p>
          <SupaWeb3Address
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            :truncate-length="6"
          />
        </div>
        <div>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Truncate 8 characters:</p>
          <SupaWeb3Address
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            :truncate-length="8"
          />
        </div>
      </div>
    `,
  }),
}

export const WithAvatar: Story = {
  render: () => ({
    components: { SupaWeb3Address },
    template: `
      <div class="space-y-4">
        <div>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Avatar on left:</p>
          <SupaWeb3Address
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            :show-avatar="true"
            avatar-position="left"
          />
        </div>
        <div>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Avatar on right:</p>
          <SupaWeb3Address
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            :show-avatar="true"
            avatar-position="right"
          />
        </div>
        <div>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">With ENS and avatar:</p>
          <SupaWeb3Address
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            ens-name="vitalik.eth"
            :show-avatar="true"
            avatar-position="left"
          />
        </div>
      </div>
    `,
  }),
}

export const CopyOptions: Story = {
  render: () => ({
    components: { SupaWeb3Address },
    template: `
      <div class="space-y-4">
        <div>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">With copy button (default):</p>
          <SupaWeb3Address
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            :show-copy-button="true"
          />
        </div>
        <div>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Without copy button:</p>
          <SupaWeb3Address
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            :show-copy-button="false"
          />
        </div>
        <div>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Copy only (non-clickable):</p>
          <SupaWeb3Address
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            :copy-only="true"
          />
        </div>
        <div>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Custom copy tooltip:</p>
          <SupaWeb3Address
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            copy-tooltip="Copy wallet address"
          />
        </div>
      </div>
    `,
  }),
}

export const LinkedAddress: Story = {
  args: {
    address: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3',
    linkTo: 'https://etherscan.io/address/0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3',
    variant: 'link',
  },
}

export const RealWorldExamples: Story = {
  render: () => ({
    components: { SupaWeb3Address },
    template: `
      <div class="space-y-6">
        <div class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          <h3 class="text-sm font-semibold mb-3">Transaction List Item</h3>
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <span class="text-sm text-gray-600 dark:text-gray-400">From:</span>
              <SupaWeb3Address
                address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
                size="sm"
                :show-avatar="true"
              />
            </div>
            <span class="text-sm font-medium">0.5 ETH</span>
          </div>
        </div>

        <div class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          <h3 class="text-sm font-semibold mb-3">User Profile Card</h3>
          <div class="flex items-center gap-4">
            <div class="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500"></div>
            <div>
              <SupaWeb3Address
                address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
                ens-name="alice.eth"
                size="lg"
                variant="ghost"
                :show-copy-button="false"
              />
              <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">Member since 2021</p>
            </div>
          </div>
        </div>

        <div class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          <h3 class="text-sm font-semibold mb-3">Compact Header</h3>
          <div class="flex items-center justify-between">
            <span class="text-sm">Connected:</span>
            <SupaWeb3Address
              address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
              size="xs"
              variant="outline"
              :truncate-length="3"
            />
          </div>
        </div>

        <div class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          <h3 class="text-sm font-semibold mb-3">Footer Link</h3>
          <SupaWeb3Address
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            variant="link"
            size="sm"
            link-to="https://etherscan.io/address/0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            :show-copy-button="false"
          />
        </div>
      </div>
    `,
  }),
}

export const Interactive: Story = {
  render: () => ({
    components: { SupaWeb3Address },
    data() {
      return {
        address: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3',
        ensName: '',
        variant: 'default' as const,
        size: 'md' as const,
        truncate: true,
        truncateLength: 4,
        showCopyButton: true,
        copyOnly: false,
        showAvatar: false,
        avatarPosition: 'left' as const,
        copyCount: 0,
        clickCount: 0,
      }
    },
    template: `
      <div class="w-full max-w-2xl space-y-6">
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium mb-2">Address</label>
            <input
              v-model="address"
              type="text"
              class="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600"
            />
          </div>

          <div>
            <label class="block text-sm font-medium mb-2">ENS Name</label>
            <input
              v-model="ensName"
              type="text"
              placeholder="vitalik.eth"
              class="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600"
            />
          </div>

          <div>
            <label class="block text-sm font-medium mb-2">Variant</label>
            <select
              v-model="variant"
              class="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600"
            >
              <option value="default">Default</option>
              <option value="outline">Outline</option>
              <option value="ghost">Ghost</option>
              <option value="link">Link</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium mb-2">Size</label>
            <select
              v-model="size"
              class="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600"
            >
              <option value="xs">Extra Small</option>
              <option value="sm">Small</option>
              <option value="md">Medium</option>
              <option value="lg">Large</option>
              <option value="xl">Extra Large</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium mb-2">Truncate Length: {{ truncateLength }}</label>
            <input
              v-model="truncateLength"
              type="range"
              min="2"
              max="10"
              class="w-full"
            />
          </div>

          <div>
            <label class="block text-sm font-medium mb-2">Avatar Position</label>
            <select
              v-model="avatarPosition"
              class="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600"
            >
              <option value="left">Left</option>
              <option value="right">Right</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>

        <div class="flex flex-wrap gap-4">
          <label class="flex items-center gap-2">
            <input v-model="truncate" type="checkbox" />
            <span class="text-sm">Truncate</span>
          </label>

          <label class="flex items-center gap-2">
            <input v-model="showCopyButton" type="checkbox" />
            <span class="text-sm">Show Copy Button</span>
          </label>

          <label class="flex items-center gap-2">
            <input v-model="copyOnly" type="checkbox" />
            <span class="text-sm">Copy Only</span>
          </label>

          <label class="flex items-center gap-2">
            <input v-model="showAvatar" type="checkbox" />
            <span class="text-sm">Show Avatar</span>
          </label>
        </div>

        <div class="border-t pt-6">
          <h3 class="text-lg font-semibold mb-4">Preview</h3>
          <div class="flex items-center justify-center p-8 border rounded-lg bg-gray-50 dark:bg-gray-800">
            <SupaWeb3Address
              :address="address"
              :ens-name="ensName"
              :variant="variant"
              :size="size"
              :truncate="truncate"
              :truncate-length="truncateLength"
              :show-copy-button="showCopyButton"
              :copy-only="copyOnly"
              :show-avatar="showAvatar"
              :avatar-position="avatarPosition"
              @copy="copyCount++"
              @click="clickCount++"
            />
          </div>
          <div class="mt-4 flex gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>Copied: {{ copyCount }} times</span>
            <span>Clicked: {{ clickCount }} times</span>
          </div>
        </div>
      </div>
    `,
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
    components: { SupaWeb3Address },
    template: `
      <div class="space-y-4">
        <SupaWeb3Address
          address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
          variant="default"
        />
        <SupaWeb3Address
          address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
          variant="outline"
        />
        <SupaWeb3Address
          address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
          variant="ghost"
        />
        <SupaWeb3Address
          address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
          variant="link"
        />
      </div>
    `,
  }),
}