import type { Meta, StoryObj } from '@storybook/vue3'
import Web3Toast from '../../../ui/src/components/notifications/Web3Toast.vue'

const meta: Meta<typeof Web3Toast> = {
  title: 'Notifications/Web3Toast',
  component: Web3Toast,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Rich Web3 transaction notifications with transaction details, progress tracking, and action buttons.'
      }
    }
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof meta>

export const Success: Story = {
  args: {
    id: '1',
    type: 'success',
    title: 'Transaction Confirmed',
    message: 'Your swap was successful!',
    transactionHash: '0x1234567890abcdef1234567890abcdef12345678901234567890abcdef12345678',
    gasUsed: 145000,
    gasFee: 12.50,
    blockNumber: 18456789,
    explorerUrl: 'https://etherscan.io',
    position: 'top-right',
    duration: 5000
  }
}

export const Error: Story = {
  args: {
    id: '2',
    type: 'error',
    title: 'Transaction Failed',
    message: 'Insufficient balance for gas fees',
    position: 'top-right',
    duration: 8000
  }
}

export const Loading: Story = {
  args: {
    id: '3',
    type: 'loading',
    title: 'Processing Transaction',
    message: 'Please wait while your transaction is being processed...',
    showProgress: true,
    progress: 75,
    progressLabel: 'Confirmations',
    position: 'top-right',
    persistent: true
  }
}

export const Transaction: Story = {
  args: {
    id: '4',
    type: 'transaction',
    title: 'Swap ETH → USDC',
    message: 'Exchanging 2.5 ETH for 6,250 USDC',
    transactionHash: '0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890',
    gasUsed: 180000,
    gasFee: 18.75,
    blockNumber: 18456790,
    explorerUrl: 'https://etherscan.io',
    actionButton: {
      label: 'Add USDC to Wallet',
      action: 'add-token'
    },
    position: 'top-right'
  }
}