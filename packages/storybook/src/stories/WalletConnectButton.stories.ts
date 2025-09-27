import type { Meta, StoryObj } from '@storybook/vue3'
import WalletConnectButton from '../../../ui/src/components/auth/WalletConnectButton.vue'

const meta: Meta<typeof WalletConnectButton> = {
  title: 'Auth/WalletConnectButton',
  component: WalletConnectButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A Web3 wallet connection button that opens a modal with multiple wallet options.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline', 'ghost', 'gradient'],
      description: 'Visual style variant of the button',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    connectText: {
      control: 'text',
      description: 'Text shown when wallet is not connected',
    },
    connectingText: {
      control: 'text',
      description: 'Text shown while connecting',
    },
    connectedText: {
      control: 'text',
      description: 'Text shown when wallet is connected',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    enabledWallets: {
      control: 'check',
      options: ['metamask', 'walletconnect', 'coinbase', 'phantom', 'trust', 'argent', 'rainbow', 'ledger'],
      description: 'Wallets available for connection',
    },
    priorityWallets: {
      control: 'check',
      options: ['metamask', 'walletconnect', 'coinbase', 'phantom', 'trust', 'argent', 'rainbow', 'ledger'],
      description: 'Wallets shown in priority/popular section',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'md',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    size: 'md',
  },
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    size: 'md',
  },
}

export const Gradient: Story = {
  args: {
    variant: 'gradient',
    size: 'md',
  },
}

export const Small: Story = {
  args: {
    variant: 'default',
    size: 'sm',
  },
}

export const Large: Story = {
  args: {
    variant: 'default',
    size: 'lg',
  },
}

export const CustomText: Story = {
  args: {
    variant: 'gradient',
    size: 'md',
    connectText: '🚀 Launch Wallet',
    connectingText: '🔄 Connecting...',
    connectedText: '✅ Connected!',
  },
}

export const Disabled: Story = {
  args: {
    variant: 'default',
    size: 'md',
    disabled: true,
  },
}

export const AllVariants: Story = {
  render: (args) => ({
    components: { WalletConnectButton },
    setup() {
      return { args }
    },
    template: `
      <div class="flex flex-col gap-4">
        <div class="flex gap-4 items-center">
          <WalletConnectButton variant="default" size="sm" />
          <WalletConnectButton variant="default" size="md" />
          <WalletConnectButton variant="default" size="lg" />
        </div>
        <div class="flex gap-4 items-center">
          <WalletConnectButton variant="outline" size="sm" />
          <WalletConnectButton variant="outline" size="md" />
          <WalletConnectButton variant="outline" size="lg" />
        </div>
        <div class="flex gap-4 items-center">
          <WalletConnectButton variant="ghost" size="sm" />
          <WalletConnectButton variant="ghost" size="md" />
          <WalletConnectButton variant="ghost" size="lg" />
        </div>
        <div class="flex gap-4 items-center">
          <WalletConnectButton variant="gradient" size="sm" />
          <WalletConnectButton variant="gradient" size="md" />
          <WalletConnectButton variant="gradient" size="lg" />
        </div>
      </div>
    `,
  }),
}

export const MetaMaskOnly: Story = {
  args: {
    variant: 'gradient',
    size: 'md',
    enabledWallets: ['metamask'],
    priorityWallets: ['metamask'],
  },
}

export const SolanaWallets: Story = {
  args: {
    variant: 'outline',
    size: 'md',
    enabledWallets: ['phantom'],
    priorityWallets: ['phantom'],
  },
}

export const PopularWalletsOnly: Story = {
  args: {
    variant: 'default',
    size: 'md',
    enabledWallets: ['metamask', 'walletconnect', 'coinbase'],
    priorityWallets: ['metamask', 'walletconnect', 'coinbase'],
  },
}

export const MobileWallets: Story = {
  args: {
    variant: 'gradient',
    size: 'lg',
    enabledWallets: ['metamask', 'trust', 'rainbow'],
    priorityWallets: ['trust', 'rainbow'],
  },
}

export const HardwareWallets: Story = {
  args: {
    variant: 'outline',
    size: 'md',
    enabledWallets: ['ledger', 'metamask'],
    priorityWallets: ['ledger'],
  },
}

export const CustomPriority: Story = {
  args: {
    variant: 'default',
    size: 'md',
    enabledWallets: ['metamask', 'walletconnect', 'coinbase', 'phantom', 'trust', 'rainbow'],
    priorityWallets: ['phantom', 'trust'],
  },
}

export const WalletConfigurations: Story = {
  render: (args) => ({
    components: { WalletConnectButton },
    setup() {
      return { args }
    },
    template: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="space-y-3">
          <h3 class="font-semibold text-gray-900 dark:text-white">MetaMask Only</h3>
          <WalletConnectButton
            variant="gradient"
            :enabled-wallets="['metamask']"
            :priority-wallets="['metamask']"
          />
        </div>

        <div class="space-y-3">
          <h3 class="font-semibold text-gray-900 dark:text-white">Mobile Wallets</h3>
          <WalletConnectButton
            variant="outline"
            :enabled-wallets="['trust', 'rainbow', 'metamask']"
            :priority-wallets="['trust', 'rainbow']"
          />
        </div>

        <div class="space-y-3">
          <h3 class="font-semibold text-gray-900 dark:text-white">Solana Ecosystem</h3>
          <WalletConnectButton
            variant="ghost"
            :enabled-wallets="['phantom']"
            :priority-wallets="['phantom']"
          />
        </div>

        <div class="space-y-3">
          <h3 class="font-semibold text-gray-900 dark:text-white">All Wallets</h3>
          <WalletConnectButton
            variant="default"
            :enabled-wallets="['metamask', 'walletconnect', 'coinbase', 'phantom', 'trust', 'argent', 'rainbow', 'ledger']"
            :priority-wallets="['metamask', 'walletconnect', 'coinbase']"
          />
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
  render: (args) => ({
    components: { WalletConnectButton },
    setup() {
      return { args }
    },
    template: `
      <div class="flex flex-col gap-4">
        <WalletConnectButton variant="default" />
        <WalletConnectButton variant="outline" />
        <WalletConnectButton variant="ghost" />
        <WalletConnectButton variant="gradient" />
      </div>
    `,
  }),
}