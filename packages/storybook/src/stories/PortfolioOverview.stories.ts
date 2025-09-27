import type { Meta, StoryObj } from '@storybook/vue3'
import PortfolioOverview from '../../../ui/src/components/portfolio/PortfolioOverview.vue'

const meta: Meta<typeof PortfolioOverview> = {
  title: 'Portfolio/PortfolioOverview',
  component: PortfolioOverview,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A comprehensive portfolio overview with asset allocation, performance metrics, and interactive charts.'
      }
    }
  },
  decorators: [
    () => ({
      template: '<div class="min-w-[800px] max-w-[1000px]"><story /></div>',
    }),
  ],
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Portfolio Overview',
    subtitle: 'Track your complete Web3 portfolio performance',
    totalValue: 125750.50,
    portfolioChange24h: 2856.75,
    allTimeHigh: 185000.00,
    allTimeHighDate: '2024-03-15T10:30:00Z',
    assets: [
      {
        symbol: 'ETH',
        name: 'Ethereum',
        amount: '25.5',
        value: 63750.00,
        change24h: 3.2
      },
      {
        symbol: 'BTC',
        name: 'Bitcoin',
        amount: '0.85',
        value: 42500.00,
        change24h: -1.1
      },
      {
        symbol: 'USDC',
        name: 'USD Coin',
        amount: '15000',
        value: 15000.00,
        change24h: 0.1
      },
      {
        symbol: 'UNI',
        name: 'Uniswap',
        amount: '500',
        value: 3250.00,
        change24h: 5.8
      },
      {
        symbol: 'SUPA',
        name: 'SupaWeb3 Token',
        amount: '2500',
        value: 1250.50,
        change24h: 12.4
      }
    ],
    totalPnL: 25750.50,
    realizedPnL: 12500.00,
    unrealizedPnL: 13250.50,
    bestPerformer: {
      symbol: 'SUPA',
      change: 12.4
    },
    protocolBreakdown: [
      { name: 'Uniswap', type: 'DEX', value: 45200.00, percentage: 35.9 },
      { name: 'Aave', type: 'Lending', value: 28500.00, percentage: 22.7 },
      { name: 'Compound', type: 'Lending', value: 18750.00, percentage: 14.9 },
      { name: 'MakerDAO', type: 'CDP', value: 12200.00, percentage: 9.7 }
    ]
  }
}

export const BearMarket: Story = {
  args: {
    ...Default.args,
    title: 'Portfolio - Bear Market',
    totalValue: 75250.30,
    portfolioChange24h: -8540.20,
    totalPnL: -24749.70,
    realizedPnL: -5000.00,
    unrealizedPnL: -19749.70,
    bestPerformer: {
      symbol: 'USDC',
      change: 0.1
    }
  }
}