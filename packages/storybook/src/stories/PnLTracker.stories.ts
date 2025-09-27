import type { Meta, StoryObj } from '@storybook/vue3'
import PnLTracker from '../../../ui/src/components/portfolio/PnLTracker.vue'

const meta: Meta<typeof PnLTracker> = {
  title: 'Portfolio/PnLTracker',
  component: PnLTracker,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Advanced profit and loss tracking with tax reporting capabilities for comprehensive portfolio analysis.'
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
    title: 'P&L Tracker',
    subtitle: 'Track your trading performance and tax obligations',
    totalPnL: 15420.75,
    totalPnLPercent: 18.5,
    realizedPnL: 8500.25,
    unrealizedPnL: 6920.50,
    realizedTransactions: 147,
    taxLiability: 2125.06,
    transactions: [
      {
        id: '1',
        asset: 'ETH',
        type: 'Buy',
        amount: '5.0',
        entryPrice: 2000.00,
        exitPrice: 2500.00,
        pnl: 2500.00,
        pnlPercent: 25.0,
        status: 'realized',
        date: '2024-09-28T14:30:00Z'
      },
      {
        id: '2',
        asset: 'BTC',
        type: 'Sell',
        amount: '0.5',
        entryPrice: 45000.00,
        exitPrice: 50000.00,
        pnl: 2500.00,
        pnlPercent: 11.1,
        status: 'realized',
        date: '2024-09-27T09:15:00Z'
      },
      {
        id: '3',
        asset: 'UNI',
        type: 'Hold',
        amount: '500',
        entryPrice: 8.50,
        exitPrice: null,
        pnl: 750.00,
        pnlPercent: 17.6,
        status: 'unrealized',
        date: '2024-09-25T16:45:00Z'
      }
    ],
    availableAssets: ['ETH', 'BTC', 'UNI', 'USDC', 'SUPA'],
    showTaxReport: true,
    showTaxInfo: true,
    taxMethod: 'FIFO',
    taxYear: '2024'
  }
}

export const BearMarket: Story = {
  args: {
    ...Default.args,
    title: 'P&L Tracker - Bear Market',
    totalPnL: -8750.25,
    totalPnLPercent: -12.3,
    realizedPnL: -5200.00,
    unrealizedPnL: -3550.25,
    taxLiability: 0,
    transactions: [
      {
        id: '1',
        asset: 'ETH',
        type: 'Sell',
        amount: '3.0',
        entryPrice: 3000.00,
        exitPrice: 2200.00,
        pnl: -2400.00,
        pnlPercent: -26.7,
        status: 'realized',
        date: '2024-09-28T14:30:00Z'
      },
      {
        id: '2',
        asset: 'BTC',
        type: 'Hold',
        amount: '0.25',
        entryPrice: 55000.00,
        exitPrice: null,
        pnl: -2625.00,
        pnlPercent: -19.1,
        status: 'unrealized',
        date: '2024-09-25T11:20:00Z'
      }
    ]
  }
}