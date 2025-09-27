import type { Meta, StoryObj } from '@storybook/vue3'
import GasTracker from '../../../ui/src/components/portfolio/GasTracker.vue'

const meta: Meta<typeof GasTracker> = {
  title: 'Portfolio/GasTracker',
  component: GasTracker,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Real-time gas price monitoring with cost calculator and price alerts for efficient transaction timing.'
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
    title: 'Gas Tracker',
    subtitle: 'Monitor gas prices and optimize transaction costs',
    networks: [
      {
        id: 'ethereum',
        name: 'Ethereum',
        nativeCurrency: 'ETH',
        blockNumber: 18456789,
        blockTime: 12,
        baseFee: 15.2,
        networkLoad: 78
      },
      {
        id: 'polygon',
        name: 'Polygon',
        nativeCurrency: 'MATIC',
        blockNumber: 48123456,
        blockTime: 2,
        baseFee: 30.5,
        networkLoad: 45
      }
    ],
    slowPrice: 12,
    standardPrice: 18,
    fastPrice: 25,
    slowTime: 5,
    standardTime: 2,
    fastTime: 1,
    nativeTokenPrice: 2500,
    gasAlerts: [
      {
        id: '1',
        type: 'below',
        threshold: 15,
        speed: 'standard',
        network: 'Ethereum',
        active: true
      },
      {
        id: '2',
        type: 'above',
        threshold: 50,
        speed: 'fast',
        network: 'Ethereum',
        active: false
      }
    ]
  }
}

export const HighGasPeriod: Story = {
  args: {
    ...Default.args,
    title: 'Gas Tracker - High Congestion',
    subtitle: 'Network congestion causing elevated gas prices',
    slowPrice: 45,
    standardPrice: 65,
    fastPrice: 120,
    slowTime: 15,
    standardTime: 8,
    fastTime: 3,
    networks: [
      {
        id: 'ethereum',
        name: 'Ethereum',
        nativeCurrency: 'ETH',
        blockNumber: 18456790,
        blockTime: 12,
        baseFee: 42.8,
        networkLoad: 95
      }
    ]
  }
}