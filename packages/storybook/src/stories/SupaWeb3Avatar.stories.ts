import type { Meta, StoryObj } from '@storybook/vue3'
import SupaWeb3Avatar from '../../../ui/src/components/identity/SupaWeb3Avatar.vue'

const meta: Meta<typeof SupaWeb3Avatar> = {
  title: 'Identity/SupaWeb3Avatar',
  component: SupaWeb3Avatar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile avatar component for Web3 profiles with generated avatars from addresses, ENS support, status indicators, and badges.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    address: {
      control: 'text',
      description: 'Wallet address for generating avatar',
    },
    ensName: {
      control: 'text',
      description: 'ENS name for the user',
    },
    ensAvatar: {
      control: 'text',
      description: 'ENS avatar URL',
    },
    src: {
      control: 'text',
      description: 'Direct image URL for avatar',
    },
    alt: {
      control: 'text',
      description: 'Alt text for the avatar image',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
      description: 'Size of the avatar',
    },
    shape: {
      control: 'select',
      options: ['circle', 'square', 'rounded'],
      description: 'Shape of the avatar',
    },
    showInitials: {
      control: 'boolean',
      description: 'Show initials instead of icon for generated avatars',
    },
    initials: {
      control: 'text',
      description: 'Custom initials to display',
    },
    status: {
      control: 'select',
      options: ['online', 'offline', 'away', 'busy'],
      description: 'User status indicator',
    },
    showStatus: {
      control: 'boolean',
      description: 'Show status indicator',
    },
    statusTooltip: {
      control: 'text',
      description: 'Tooltip for status indicator',
    },
    badge: {
      control: 'text',
      description: 'Badge content (text or number)',
    },
    badgePosition: {
      control: 'select',
      options: ['top-right', 'top-left', 'bottom-right', 'bottom-left'],
      description: 'Position of the badge',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    generatedType: {
      control: 'select',
      options: ['gradient', 'pattern', 'solid'],
      description: 'Type of generated avatar',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    address: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3',
    shape: 'rounded',
  },
}

export const WithImage: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=3',
    alt: 'User Avatar',
  },
}

export const WithENS: Story = {
  args: {
    ensName: 'vitalik.eth',
    address: '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045',
    showInitials: true,
  },
}

export const Sizes: Story = {
  render: () => ({
    components: { SupaWeb3Avatar },
    template: `
      <div class="flex items-center gap-4">
        <SupaWeb3Avatar
          address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
          size="xs"
          shape="rounded"
        />
        <SupaWeb3Avatar
          address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
          size="sm"
          shape="rounded"
        />
        <SupaWeb3Avatar
          address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
          size="md"
          shape="rounded"
        />
        <SupaWeb3Avatar
          address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
          size="lg"
          shape="rounded"
        />
        <SupaWeb3Avatar
          address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
          size="xl"
          shape="rounded"
        />
        <SupaWeb3Avatar
          address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
          size="2xl"
          shape="rounded"
        />
        <SupaWeb3Avatar
          address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
          size="3xl"
          shape="rounded"
        />
      </div>
    `,
  }),
}

export const Shapes: Story = {
  render: () => ({
    components: { SupaWeb3Avatar },
    template: `
      <div class="flex items-center gap-6">
        <div class="text-center">
          <SupaWeb3Avatar
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            shape="circle"
            size="lg"
          />
          <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Circle</p>
        </div>
        <div class="text-center">
          <SupaWeb3Avatar
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            shape="square"
            size="lg"
          />
          <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Square</p>
        </div>
        <div class="text-center">
          <SupaWeb3Avatar
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            shape="rounded"
            size="lg"
          />
          <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Rounded</p>
        </div>
      </div>
    `,
  }),
}

export const GeneratedTypes: Story = {
  render: () => ({
    components: { SupaWeb3Avatar },
    template: `
      <div class="space-y-4">
        <div>
          <h3 class="text-sm font-medium mb-3">Gradient Avatars</h3>
          <div class="flex items-center gap-3">
            <SupaWeb3Avatar
              address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
              generated-type="gradient"
              size="lg"
              shape="rounded"
              :show-initials="true"
            />
            <SupaWeb3Avatar
              address="0x1234567890123456789012345678901234567890"
              generated-type="gradient"
              size="lg"
              shape="rounded"
              :show-initials="true"
            />
            <SupaWeb3Avatar
              address="0xabcdefabcdefabcdefabcdefabcdefabcdefabcd"
              generated-type="gradient"
              size="lg"
              shape="rounded"
              :show-initials="true"
            />
            <SupaWeb3Avatar
              address="0x9876543210987654321098765432109876543210"
              generated-type="gradient"
              size="lg"
              shape="rounded"
              :show-initials="true"
            />
          </div>
        </div>

        <div>
          <h3 class="text-sm font-medium mb-3">Solid Color Avatars</h3>
          <div class="flex items-center gap-3">
            <SupaWeb3Avatar
              address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
              generated-type="solid"
              size="lg"
            />
            <SupaWeb3Avatar
              address="0x1234567890123456789012345678901234567890"
              generated-type="solid"
              size="lg"
            />
            <SupaWeb3Avatar
              address="0xabcdefabcdefabcdefabcdefabcdefabcdefabcd"
              generated-type="solid"
              size="lg"
            />
            <SupaWeb3Avatar
              address="0x9876543210987654321098765432109876543210"
              generated-type="solid"
              size="lg"
            />
          </div>
        </div>

        <div>
          <h3 class="text-sm font-medium mb-3">With Initials</h3>
          <div class="flex items-center gap-3">
            <SupaWeb3Avatar
              address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
              :show-initials="true"
              size="lg"
            />
            <SupaWeb3Avatar
              ens-name="alice.eth"
              :show-initials="true"
              size="lg"
            />
            <SupaWeb3Avatar
              initials="JD"
              :show-initials="true"
              size="lg"
            />
            <SupaWeb3Avatar
              ens-name="cryptopunk.eth"
              :show-initials="true"
              size="lg"
            />
          </div>
        </div>
      </div>
    `,
  }),
}

export const WithStatus: Story = {
  render: () => ({
    components: { SupaWeb3Avatar },
    template: `
      <div class="flex items-center gap-6">
        <div class="text-center">
          <SupaWeb3Avatar
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            :show-status="true"
            status="online"
            status-tooltip="Active now"
            size="lg"
          />
          <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Online</p>
        </div>
        <div class="text-center">
          <SupaWeb3Avatar
            address="0x1234567890123456789012345678901234567890"
            :show-status="true"
            status="away"
            status-tooltip="Away"
            size="lg"
          />
          <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Away</p>
        </div>
        <div class="text-center">
          <SupaWeb3Avatar
            address="0xabcdefabcdefabcdefabcdefabcdefabcdefabcd"
            :show-status="true"
            status="busy"
            status-tooltip="Do not disturb"
            size="lg"
          />
          <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Busy</p>
        </div>
        <div class="text-center">
          <SupaWeb3Avatar
            address="0x9876543210987654321098765432109876543210"
            :show-status="true"
            status="offline"
            status-tooltip="Offline"
            size="lg"
          />
          <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Offline</p>
        </div>
      </div>
    `,
  }),
}

export const WithBadges: Story = {
  render: () => ({
    components: { SupaWeb3Avatar },
    template: `
      <div class="grid grid-cols-2 gap-8">
        <div class="flex items-center gap-4">
          <SupaWeb3Avatar
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            badge="3"
            badge-position="top-right"
            size="lg"
          />
          <span class="text-sm">Top Right Badge</span>
        </div>

        <div class="flex items-center gap-4">
          <SupaWeb3Avatar
            address="0x1234567890123456789012345678901234567890"
            badge="New"
            badge-position="top-left"
            size="lg"
          />
          <span class="text-sm">Top Left Badge</span>
        </div>

        <div class="flex items-center gap-4">
          <SupaWeb3Avatar
            address="0xabcdefabcdefabcdefabcdefabcdefabcdefabcd"
            badge="99+"
            badge-position="bottom-right"
            size="lg"
          />
          <span class="text-sm">Bottom Right Badge</span>
        </div>

        <div class="flex items-center gap-4">
          <SupaWeb3Avatar
            address="0x9876543210987654321098765432109876543210"
            badge="!"
            badge-position="bottom-left"
            size="lg"
          />
          <span class="text-sm">Bottom Left Badge</span>
        </div>
      </div>
    `,
  }),
}

export const CombinedFeatures: Story = {
  render: () => ({
    components: { SupaWeb3Avatar },
    template: `
      <div class="flex items-center gap-6">
        <SupaWeb3Avatar
          address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
          :show-status="true"
          status="online"
          badge="3"
          size="xl"
        />
        <SupaWeb3Avatar
          ens-name="alice.eth"
          :show-initials="true"
          :show-status="true"
          status="away"
          badge="New"
          size="xl"
        />
        <SupaWeb3Avatar
          src="https://i.pravatar.cc/150?img=5"
          :show-status="true"
          status="busy"
          badge="99+"
          size="xl"
        />
      </div>
    `,
  }),
}

export const AvatarGroup: Story = {
  render: () => ({
    components: { SupaWeb3Avatar },
    template: `
      <div class="space-y-6">
        <div>
          <h3 class="text-sm font-medium mb-3">Stacked Avatars</h3>
          <div class="flex -space-x-3">
            <SupaWeb3Avatar
              address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
              size="lg"
              class="ring-2 ring-white dark:ring-gray-800"
            />
            <SupaWeb3Avatar
              address="0x1234567890123456789012345678901234567890"
              size="lg"
              class="ring-2 ring-white dark:ring-gray-800"
            />
            <SupaWeb3Avatar
              address="0xabcdefabcdefabcdefabcdefabcdefabcdefabcd"
              size="lg"
              class="ring-2 ring-white dark:ring-gray-800"
            />
            <SupaWeb3Avatar
              address="0x9876543210987654321098765432109876543210"
              size="lg"
              class="ring-2 ring-white dark:ring-gray-800"
            />
            <div class="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-sm font-medium ring-2 ring-white dark:ring-gray-800">
              +5
            </div>
          </div>
        </div>

        <div>
          <h3 class="text-sm font-medium mb-3">Avatar List</h3>
          <div class="flex gap-2">
            <SupaWeb3Avatar
              address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
              size="md"
            />
            <SupaWeb3Avatar
              address="0x1234567890123456789012345678901234567890"
              size="md"
            />
            <SupaWeb3Avatar
              address="0xabcdefabcdefabcdefabcdefabcdefabcdefabcd"
              size="md"
            />
            <SupaWeb3Avatar
              address="0x9876543210987654321098765432109876543210"
              size="md"
            />
          </div>
        </div>
      </div>
    `,
  }),
}

export const RealWorldExamples: Story = {
  render: () => ({
    components: { SupaWeb3Avatar },
    template: `
      <div class="space-y-6">
        <div class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          <h3 class="text-sm font-semibold mb-3">User Profile Card</h3>
          <div class="flex items-center gap-4">
            <SupaWeb3Avatar
              address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
              size="2xl"
              :show-status="true"
              status="online"
            />
            <div>
              <h4 class="font-semibold">Alice.eth</h4>
              <p class="text-sm text-gray-600 dark:text-gray-400">0x742d...bEb3</p>
              <div class="flex items-center gap-2 mt-1">
                <span class="text-xs px-2 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded">Verified</span>
                <span class="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded">NFT Holder</span>
              </div>
            </div>
          </div>
        </div>

        <div class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          <h3 class="text-sm font-semibold mb-3">Comment Thread</h3>
          <div class="space-y-3">
            <div class="flex gap-3">
              <SupaWeb3Avatar
                address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
                size="sm"
              />
              <div class="flex-1">
                <p class="text-sm font-medium">0x742d...bEb3</p>
                <p class="text-sm text-gray-600 dark:text-gray-400">Great project! Looking forward to the next update.</p>
              </div>
            </div>
            <div class="flex gap-3">
              <SupaWeb3Avatar
                address="0x1234567890123456789012345678901234567890"
                size="sm"
              />
              <div class="flex-1">
                <p class="text-sm font-medium">0x1234...7890</p>
                <p class="text-sm text-gray-600 dark:text-gray-400">Agreed! The UI looks amazing.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          <h3 class="text-sm font-semibold mb-3">Transaction History</h3>
          <div class="space-y-2">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <SupaWeb3Avatar
                  address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
                  size="xs"
                />
                <span class="text-sm">Sent to 0xabcd...efab</span>
              </div>
              <span class="text-sm font-medium">-0.5 ETH</span>
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <SupaWeb3Avatar
                  address="0x9876543210987654321098765432109876543210"
                  size="xs"
                />
                <span class="text-sm">Received from 0x9876...3210</span>
              </div>
              <span class="text-sm font-medium text-green-600 dark:text-green-400">+1.2 ETH</span>
            </div>
          </div>
        </div>

        <div class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          <h3 class="text-sm font-semibold mb-3">Team Members</h3>
          <div class="flex items-center gap-4">
            <SupaWeb3Avatar
              src="https://i.pravatar.cc/150?img=3"
              :show-status="true"
              status="online"
              size="lg"
            />
            <SupaWeb3Avatar
              src="https://i.pravatar.cc/150?img=5"
              :show-status="true"
              status="away"
              badge="2"
              size="lg"
            />
            <SupaWeb3Avatar
              src="https://i.pravatar.cc/150?img=8"
              :show-status="true"
              status="offline"
              size="lg"
            />
            <SupaWeb3Avatar
              address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
              :show-status="true"
              status="busy"
              size="lg"
            />
          </div>
        </div>
      </div>
    `,
  }),
}

export const Interactive: Story = {
  render: () => ({
    components: { SupaWeb3Avatar },
    data() {
      return {
        address: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3',
        ensName: '',
        src: '',
        size: 'lg' as const,
        shape: 'circle' as const,
        generatedType: 'gradient' as const,
        showInitials: false,
        initials: '',
        showStatus: false,
        status: 'online' as const,
        badge: '',
        badgePosition: 'top-right' as const,
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
            <label class="block text-sm font-medium mb-2">Image URL</label>
            <input
              v-model="src"
              type="text"
              placeholder="https://..."
              class="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600"
            />
          </div>

          <div>
            <label class="block text-sm font-medium mb-2">Custom Initials</label>
            <input
              v-model="initials"
              type="text"
              maxlength="2"
              class="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600"
            />
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
              <option value="2xl">2X Large</option>
              <option value="3xl">3X Large</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium mb-2">Shape</label>
            <select
              v-model="shape"
              class="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600"
            >
              <option value="circle">Circle</option>
              <option value="square">Square</option>
              <option value="rounded">Rounded</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium mb-2">Generated Type</label>
            <select
              v-model="generatedType"
              class="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600"
            >
              <option value="gradient">Gradient</option>
              <option value="solid">Solid</option>
              <option value="pattern">Pattern</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium mb-2">Status</label>
            <select
              v-model="status"
              class="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600"
            >
              <option value="online">Online</option>
              <option value="away">Away</option>
              <option value="busy">Busy</option>
              <option value="offline">Offline</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium mb-2">Badge</label>
            <input
              v-model="badge"
              type="text"
              placeholder="3, New, 99+, etc."
              class="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600"
            />
          </div>

          <div>
            <label class="block text-sm font-medium mb-2">Badge Position</label>
            <select
              v-model="badgePosition"
              class="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600"
            >
              <option value="top-right">Top Right</option>
              <option value="top-left">Top Left</option>
              <option value="bottom-right">Bottom Right</option>
              <option value="bottom-left">Bottom Left</option>
            </select>
          </div>
        </div>

        <div class="flex flex-wrap gap-4">
          <label class="flex items-center gap-2">
            <input v-model="showInitials" type="checkbox" />
            <span class="text-sm">Show Initials</span>
          </label>

          <label class="flex items-center gap-2">
            <input v-model="showStatus" type="checkbox" />
            <span class="text-sm">Show Status</span>
          </label>
        </div>

        <div class="border-t pt-6">
          <h3 class="text-lg font-semibold mb-4">Preview</h3>
          <div class="flex items-center justify-center p-8 border rounded-lg bg-gray-50 dark:bg-gray-800">
            <SupaWeb3Avatar
              :address="address"
              :ens-name="ensName"
              :src="src"
              :size="size"
              :shape="shape"
              :generated-type="generatedType"
              :show-initials="showInitials"
              :initials="initials"
              :show-status="showStatus"
              :status="status"
              :badge="badge"
              :badge-position="badgePosition"
            />
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
    components: { SupaWeb3Avatar },
    template: `
      <div class="flex items-center gap-4">
        <SupaWeb3Avatar
          address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
          size="lg"
        />
        <SupaWeb3Avatar
          address="0x1234567890123456789012345678901234567890"
          size="lg"
          :show-status="true"
          status="online"
        />
        <SupaWeb3Avatar
          ens-name="alice.eth"
          :show-initials="true"
          size="lg"
          badge="3"
        />
        <SupaWeb3Avatar
          src="https://i.pravatar.cc/150?img=8"
          size="lg"
          :show-status="true"
          status="away"
        />
      </div>
    `,
  }),
}