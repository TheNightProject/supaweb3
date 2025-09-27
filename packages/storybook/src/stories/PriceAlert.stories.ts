import type { Meta, StoryObj } from '@storybook/vue3'
import PriceAlert from '../../../ui/src/components/notifications/PriceAlert.vue'

const meta: Meta<typeof PriceAlert> = {
  title: 'Notifications/PriceAlert',
  component: PriceAlert,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Comprehensive price alert management system for tracking token and NFT price movements with customizable notifications.'
      }
    }
  },
  decorators: [
    () => ({
      template: '<div class="min-w-[900px] max-w-[1200px]"><story /></div>',
    }),
  ],
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Price Alerts',
    subtitle: 'Monitor price movements and get notified when targets are reached',
    alerts: [
      {
        id: '1',
        asset: {
          symbol: 'ETH',
          name: 'Ethereum'
        },
        type: 'above',
        status: 'active',
        currentPrice: 2485.50,
        targetPrice: 2600.00,
        basePrice: 2400.00,
        createdAt: '2024-09-25T10:00:00Z',
        notifications: ['email', 'push']
      },
      {
        id: '2',
        asset: {
          symbol: 'BTC',
          name: 'Bitcoin'
        },
        type: 'below',
        status: 'triggered',
        currentPrice: 48500.00,
        targetPrice: 50000.00,
        basePrice: 52000.00,
        createdAt: '2024-09-20T14:30:00Z',
        lastTriggered: '2024-09-28T09:15:00Z',
        notifications: ['email', 'sms', 'discord']
      },
      {
        id: '3',
        asset: {
          symbol: 'UNI',
          name: 'Uniswap'
        },
        type: 'change',
        status: 'active',
        currentPrice: 6.75,
        changePercent: 15,
        timeframe: '24h',
        createdAt: '2024-09-22T16:45:00Z',
        notifications: ['push']
      },
      {
        id: '4',
        asset: {
          symbol: 'SUPA',
          name: 'SupaWeb3 Token'
        },
        type: 'above',
        status: 'paused',
        currentPrice: 0.85,
        targetPrice: 1.00,
        basePrice: 0.75,
        createdAt: '2024-09-18T11:20:00Z',
        notifications: ['email']
      }
    ]
  }
}

export const HighActivity: Story = {
  args: {
    ...Default.args,
    title: 'Price Alerts - High Activity',
    alerts: [
      ...Default.args.alerts,
      {
        id: '5',
        asset: {
          symbol: 'DOGE',
          name: 'Dogecoin'
        },
        type: 'above',
        status: 'triggered',
        currentPrice: 0.085,
        targetPrice: 0.08,
        basePrice: 0.075,
        createdAt: '2024-09-28T08:00:00Z',
        lastTriggered: '2024-09-28T15:30:00Z',
        notifications: ['email', 'push']
      },
      {
        id: '6',
        asset: {
          symbol: 'MATIC',
          name: 'Polygon'
        },
        type: 'below',
        status: 'active',
        currentPrice: 0.72,
        targetPrice: 0.70,
        basePrice: 0.85,
        createdAt: '2024-09-26T12:15:00Z',
        notifications: ['discord']
      }
    ]
  }
}