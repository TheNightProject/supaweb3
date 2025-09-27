import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'

// Import all components
import Web3Gate from '../../../ui/src/components/access/Web3Gate.vue'
import WalletConnectButton from '../../../ui/src/components/auth/WalletConnectButton.vue'
import WalletConnectModal from '../../../ui/src/components/auth/WalletConnectModal.vue'
import Web3Icon from '../../../ui/src/components/common/Web3Icon.vue'
import NFTCard from '../../../ui/src/components/nft/NFTCard.vue'
import NFTGallery from '../../../ui/src/components/nft/NFTGallery.vue'
import ChainSwitcher from '../../../ui/src/components/network/ChainSwitcher.vue'
import TokenSwap from '../../../ui/src/components/tokens/TokenSwap.vue'
import SendToken from '../../../ui/src/components/tokens/SendToken.vue'
import TransactionHistory from '../../../ui/src/components/transactions/TransactionHistory.vue'

// Mock data
const mockNFTs = [
  {
    id: '1',
    name: 'Cool Ape #1234',
    image: 'https://picsum.photos/300/300?random=1',
    price: '2.5 ETH',
    priceUsd: '$6,250',
    collection: 'Cool Apes',
    owner: 'alice.eth',
    chain: 'ethereum',
    favorited: true,
    verified: true
  },
  {
    id: '2',
    name: 'Digital Art #5678',
    image: 'https://picsum.photos/300/300?random=2',
    price: '1.2 ETH',
    priceUsd: '$3,000',
    collection: 'Digital Dreams',
    owner: 'bob.eth',
    chain: 'ethereum',
    favorited: false,
    verified: true
  },
  {
    id: '3',
    name: 'Pixel Punk #9999',
    image: 'https://picsum.photos/300/300?random=3',
    price: '0.8 MATIC',
    priceUsd: '$680',
    collection: 'Pixel Punks',
    owner: '0x742d35Cc6C4C4C7218243e428F9e99F50934e47E',
    chain: 'polygon',
    favorited: true,
    verified: false
  }
]

const mockTransactions = [
  {
    hash: '0x1234567890abcdef1234567890abcdef12345678901234567890abcdef12345678',
    type: 'swap',
    status: 'confirmed',
    amount: '2.5',
    symbol: 'ETH',
    fromSymbol: 'ETH',
    toSymbol: 'USDC',
    usdValue: '6,250.00',
    timestamp: Date.now() - 1000 * 60 * 5,
    gasUsed: '21,000',
    blockNumber: '18,500,123',
    chain: 'ethereum',
    details: 'Swapped ETH for USDC on Uniswap V3'
  },
  {
    hash: '0x2345678901abcdef2345678901abcdef23456789012345678901abcdef23456789',
    type: 'send',
    status: 'pending',
    amount: '1000',
    symbol: 'USDC',
    usdValue: '1,000.00',
    timestamp: Date.now() - 1000 * 60 * 2,
    gasUsed: '21,000',
    chain: 'ethereum'
  },
  {
    hash: '0x3456789012abcdef3456789012abcdef34567890123456789012abcdef34567890',
    type: 'mint',
    status: 'confirmed',
    amount: '1',
    symbol: 'NFT',
    usdValue: '500.00',
    timestamp: Date.now() - 1000 * 60 * 60,
    gasUsed: '85,000',
    blockNumber: '18,499,856',
    chain: 'ethereum',
    details: 'Minted Cool Ape #1234'
  }
]

const mockAddressBook = [
  { name: 'Alice', address: '0x742d35Cc6C4C4C7218243e428F9e99F50934e47E' },
  { name: 'Bob', address: '0x8ba1f109551bD432803012645Hac136c22C501e' }
]

const mockChains = [
  {
    id: 1,
    name: 'Ethereum',
    shortName: 'ETH',
    icon: 'ethereum',
    rpcUrl: 'https://mainnet.infura.io/v3/...',
    blockExplorer: 'https://etherscan.io',
    nativeCurrency: { symbol: 'ETH', decimals: 18 }
  },
  {
    id: 137,
    name: 'Polygon',
    shortName: 'MATIC',
    icon: 'polygon',
    rpcUrl: 'https://polygon-rpc.com',
    blockExplorer: 'https://polygonscan.com',
    nativeCurrency: { symbol: 'MATIC', decimals: 18 }
  },
  {
    id: 42161,
    name: 'Arbitrum',
    shortName: 'ARB',
    icon: 'arbitrum',
    rpcUrl: 'https://arb1.arbitrum.io/rpc',
    blockExplorer: 'https://arbiscan.io',
    nativeCurrency: { symbol: 'ETH', decimals: 18 }
  }
]

const meta: Meta = {
  title: 'Demo/Complete Web3 App',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A comprehensive demo showing all SupaWeb3 components working together in a realistic Web3 application interface.'
      }
    }
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof meta>

export const FullDashboard: Story = {
  render: () => ({
    components: {
      Web3Gate,
      WalletConnectButton,
      WalletConnectModal,
      Web3Icon,
      NFTCard,
      NFTGallery,
      ChainSwitcher,
      TokenSwap,
      SendToken,
      TransactionHistory
    },
    template: `
      <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
        <!-- Header -->
        <header class="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
              <!-- Logo -->
              <div class="flex items-center space-x-3">
                <div class="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                  <Web3Icon type="tokens" symbol="ethereum" :size="20" class="text-white" />
                </div>
                <h1 class="text-xl font-bold text-gray-900 dark:text-white">
                  SupaWeb3 Demo
                </h1>
              </div>

              <!-- Header Actions -->
              <div class="flex items-center space-x-4">
                <ChainSwitcher
                  :chains="chains"
                  :selected-chain-id="selectedChainId"
                  variant="compact"
                  :show-icons="true"
                  @chain-select="handleChainChange"
                />

                <WalletConnectButton
                  :is-connected="isConnected"
                  :address="userAddress"
                  :loading="connectLoading"
                  variant="default"
                  size="sm"
                  @connect="handleConnect"
                  @disconnect="handleDisconnect"
                />
              </div>
            </div>
          </div>
        </header>

        <!-- Main Content -->
        <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div class="grid gap-8 lg:grid-cols-12">
            <!-- Left Sidebar -->
            <div class="lg:col-span-8 space-y-8">
              <!-- Token Swap Section -->
              <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
                <h2 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Token Swap
                </h2>
                <TokenSwap
                  :available-tokens="availableTokens"
                  :selected-from-token="fromToken"
                  :selected-to-token="toToken"
                  :loading="swapLoading"
                  @swap="handleSwap"
                  @token-select="handleTokenSelect"
                />
              </div>

              <!-- Send Token Section -->
              <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
                <h2 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Send Tokens
                </h2>
                <SendToken
                  title="Send to Address"
                  subtitle="Transfer tokens to any wallet or ENS name"
                  :selected-token="selectedSendToken"
                  :from-address="userAddress"
                  :address-book="addressBook"
                  :show-address-book="true"
                  :show-gas-options="true"
                  :loading="sendLoading"
                  @send="handleSend"
                  @ens-resolve="handleENSResolve"
                />
              </div>

              <!-- Premium Content (Token Gated) -->
              <Web3Gate
                gate-type="token"
                token-symbol="SUPA"
                min-token-balance="100"
                :is-connected="isConnected"
                :user-token-balance="userTokenBalance"
                :user-address="userAddress"
                gate-title="Premium Analytics"
                gate-description="Hold 100+ SUPA tokens to access advanced trading analytics"
                overlay-style="glass"
                @connect-wallet="handleConnect"
                @unlock="handleUnlock"
              >
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
                  <h2 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    🚀 Premium Analytics Dashboard
                  </h2>
                  <div class="grid gap-4 md:grid-cols-3">
                    <div class="bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg p-4 text-white">
                      <div class="text-2xl font-bold">+24.5%</div>
                      <div class="text-sm opacity-90">Portfolio Growth</div>
                    </div>
                    <div class="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg p-4 text-white">
                      <div class="text-2xl font-bold">$12.4K</div>
                      <div class="text-sm opacity-90">Total Value</div>
                    </div>
                    <div class="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-4 text-white">
                      <div class="text-2xl font-bold">15</div>
                      <div class="text-sm opacity-90">Active Positions</div>
                    </div>
                  </div>
                </div>
              </Web3Gate>
            </div>

            <!-- Right Sidebar -->
            <div class="lg:col-span-4 space-y-8">
              <!-- Transaction History -->
              <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
                <TransactionHistory
                  :transactions="transactions"
                  title="Recent Activity"
                  :show-filters="false"
                  :show-pagination="false"
                  :show-chain-icons="true"
                  :items-per-page="3"
                  @transaction-click="handleTransactionClick"
                />
              </div>

              <!-- NFT Gallery -->
              <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
                <h2 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  My NFTs
                </h2>
                <NFTGallery
                  :nfts="nfts.slice(0, 3)"
                  :columns="1"
                  :show-load-more="false"
                  @nft-click="handleNFTClick"
                  @favorite="handleNFTFavorite"
                />
              </div>
            </div>
          </div>

          <!-- Bottom Section - Full Width -->
          <div class="mt-8">
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
              <h2 class="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                Featured NFT Collection
              </h2>
              <NFTGallery
                :nfts="nfts"
                :columns="3"
                :show-load-more="true"
                @nft-click="handleNFTClick"
                @favorite="handleNFTFavorite"
                @load-more="handleLoadMore"
              />
            </div>
          </div>
        </main>

        <!-- Wallet Connect Modal -->
        <WalletConnectModal
          :show="showConnectModal"
          :loading="connectLoading"
          :error="connectError"
          @close="showConnectModal = false"
          @wallet-select="handleWalletSelect"
        />

        <!-- Status Messages -->
        <div v-if="statusMessage" class="fixed bottom-4 right-4 z-50">
          <div :class="[
            'px-4 py-3 rounded-lg shadow-lg max-w-sm',
            statusMessage.type === 'success' ? 'bg-green-500 text-white' :
            statusMessage.type === 'error' ? 'bg-red-500 text-white' :
            'bg-blue-500 text-white'
          ]">
            <div class="font-medium">{{ statusMessage.title }}</div>
            <div v-if="statusMessage.description" class="text-sm mt-1 opacity-90">
              {{ statusMessage.description }}
            </div>
          </div>
        </div>
      </div>
    `,
    data() {
      return {
        // Wallet State
        isConnected: false,
        userAddress: '',
        connectLoading: false,
        connectError: '',
        showConnectModal: false,
        userTokenBalance: '75', // Below threshold for premium content

        // Network State
        selectedChainId: 1,
        chains: mockChains,

        // Token State
        availableTokens: [
          { symbol: 'ETH', balance: '5.25', price: 2500, decimals: 18 },
          { symbol: 'USDC', balance: '10000', price: 1, decimals: 6 },
          { symbol: 'USDT', balance: '5000', price: 1, decimals: 6 },
          { symbol: 'DAI', balance: '2500', price: 1, decimals: 18 }
        ],
        fromToken: { symbol: 'ETH', balance: '5.25', price: 2500, decimals: 18 },
        toToken: { symbol: 'USDC', balance: '10000', price: 1, decimals: 6 },
        selectedSendToken: { symbol: 'ETH', balance: '5.25', price: 2500, decimals: 18 },

        // Data
        nfts: mockNFTs,
        transactions: mockTransactions,
        addressBook: mockAddressBook,

        // Loading States
        swapLoading: false,
        sendLoading: false,

        // UI State
        statusMessage: null
      }
    },
    methods: {
      // Wallet Methods
      handleConnect() {
        this.showConnectModal = true
      },

      handleDisconnect() {
        this.isConnected = false
        this.userAddress = ''
        this.showStatus('Wallet Disconnected', 'Successfully disconnected from wallet', 'info')
      },

      handleWalletSelect(wallet) {
        this.connectLoading = true
        this.connectError = ''

        // Simulate connection
        setTimeout(() => {
          this.isConnected = true
          this.userAddress = '0x742d35Cc6C4C4C7218243e428F9e99F50934e47E'
          this.connectLoading = false
          this.showConnectModal = false
          this.showStatus('Wallet Connected', `Connected to ${wallet.name}`, 'success')
        }, 2000)
      },

      // Chain Methods
      handleChainChange(chain) {
        this.selectedChainId = chain.id
        this.showStatus('Network Changed', `Switched to ${chain.name}`, 'success')
      },

      // Token Methods
      handleTokenSelect(data) {
        if (data.position === 'from') {
          this.fromToken = data.token
        } else {
          this.toToken = data.token
        }
      },

      handleSwap(transaction) {
        this.swapLoading = true
        this.showStatus('Swap Initiated', 'Processing token swap...', 'info')

        setTimeout(() => {
          this.swapLoading = false
          this.showStatus('Swap Successful', `Swapped ${transaction.fromAmount} ${transaction.fromToken} for ${transaction.toAmount} ${transaction.toToken}`, 'success')

          // Add to transaction history
          this.transactions.unshift({
            hash: '0x' + Math.random().toString(16).substr(2, 64),
            type: 'swap',
            status: 'confirmed',
            amount: transaction.fromAmount,
            symbol: transaction.fromToken,
            fromSymbol: transaction.fromToken,
            toSymbol: transaction.toToken,
            usdValue: (parseFloat(transaction.fromAmount) * 2500).toLocaleString(),
            timestamp: Date.now(),
            gasUsed: '150,000',
            blockNumber: '18,500,' + Math.floor(Math.random() * 1000),
            chain: 'ethereum'
          })
        }, 3000)
      },

      handleSend(transaction) {
        this.sendLoading = true
        this.showStatus('Send Initiated', 'Processing token transfer...', 'info')

        setTimeout(() => {
          this.sendLoading = false
          this.showStatus('Send Successful', `Sent ${transaction.amount} ${transaction.token} to ${transaction.recipient}`, 'success')

          // Add to transaction history
          this.transactions.unshift({
            hash: '0x' + Math.random().toString(16).substr(2, 64),
            type: 'send',
            status: 'pending',
            amount: transaction.amount,
            symbol: transaction.token,
            usdValue: (parseFloat(transaction.amount) * 2500).toLocaleString(),
            timestamp: Date.now(),
            gasUsed: '21,000',
            chain: 'ethereum'
          })
        }, 2500)
      },

      handleENSResolve(data) {
        this.showStatus('ENS Resolved', `${data.name} → ${data.address.slice(0, 10)}...`, 'success')
      },

      // NFT Methods
      handleNFTClick(nft) {
        this.showStatus('NFT Clicked', `Viewing ${nft.name}`, 'info')
      },

      handleNFTFavorite(nft) {
        const index = this.nfts.findIndex(n => n.id === nft.id)
        if (index !== -1) {
          this.nfts[index].favorited = !this.nfts[index].favorited
          this.showStatus(
            this.nfts[index].favorited ? 'Added to Favorites' : 'Removed from Favorites',
            `${nft.name}`,
            'info'
          )
        }
      },

      handleLoadMore() {
        this.showStatus('Loading More', 'Fetching additional NFTs...', 'info')
      },

      // Transaction Methods
      handleTransactionClick(transaction) {
        this.showStatus('Transaction Details', `Hash: ${transaction.hash.slice(0, 10)}...`, 'info')
      },

      // Gate Methods
      handleUnlock() {
        this.userTokenBalance = '150' // Simulate getting more tokens
        this.showStatus('Gate Unlocked', 'Premium content is now accessible!', 'success')
      },

      // Utility Methods
      showStatus(title, description, type = 'info') {
        this.statusMessage = { title, description, type }
        setTimeout(() => {
          this.statusMessage = null
        }, 4000)
      }
    }
  })
}

export const MobileView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  },
  render: () => ({
    components: {
      WalletConnectButton,
      Web3Icon,
      NFTGallery,
      ChainSwitcher,
      TransactionHistory
    },
    template: `
      <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
        <!-- Mobile Header -->
        <header class="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-40">
          <div class="px-4 py-3">
            <div class="flex justify-between items-center">
              <div class="flex items-center space-x-2">
                <Web3Icon type="tokens" symbol="ethereum" :size="24" />
                <h1 class="text-lg font-bold text-gray-900 dark:text-white">
                  SupaWeb3
                </h1>
              </div>
              <WalletConnectButton
                :is-connected="isConnected"
                :address="userAddress"
                variant="outline"
                size="sm"
                @connect="handleConnect"
              />
            </div>
          </div>
        </header>

        <!-- Mobile Content -->
        <div class="px-4 py-6 space-y-6">
          <!-- Chain Switcher -->
          <ChainSwitcher
            :chains="chains"
            :selected-chain-id="1"
            variant="dropdown"
            :show-icons="true"
            class="w-full"
          />

          <!-- Recent Activity -->
          <div class="bg-white dark:bg-gray-800 rounded-lg p-4">
            <TransactionHistory
              :transactions="transactions.slice(0, 3)"
              title="Recent Activity"
              :show-filters="false"
              :show-pagination="false"
              :show-chain-icons="false"
            />
          </div>

          <!-- NFTs -->
          <div class="bg-white dark:bg-gray-800 rounded-lg p-4">
            <h2 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              My Collection
            </h2>
            <NFTGallery
              :nfts="nfts"
              :columns="2"
              :show-load-more="true"
            />
          </div>
        </div>
      </div>
    `,
    data() {
      return {
        isConnected: true,
        userAddress: '0x742d35Cc6C4C4C7218243e428F9e99F50934e47E',
        chains: mockChains,
        nfts: mockNFTs,
        transactions: mockTransactions
      }
    },
    methods: {
      handleConnect() {
        console.log('Connect wallet clicked')
      }
    }
  })
}

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' }
  },
  render: () => ({
    components: {
      Web3Gate,
      WalletConnectButton,
      NFTCard,
      ChainSwitcher,
      TokenSwap,
      TransactionHistory
    },
    template: `
      <div class="dark">
        <div class="min-h-screen bg-gray-900">
          <div class="max-w-4xl mx-auto px-4 py-8 space-y-8">
            <!-- Header -->
            <div class="flex justify-between items-center">
              <h1 class="text-2xl font-bold text-white">
                SupaWeb3 Dark Mode
              </h1>
              <div class="flex items-center space-x-4">
                <ChainSwitcher
                  :chains="chains"
                  :selected-chain-id="1"
                  :show-icons="true"
                />
                <WalletConnectButton
                  :is-connected="true"
                  address="0x742d35Cc6C4C4C7218243e428F9e99F50934e47E"
                />
              </div>
            </div>

            <!-- Components Grid -->
            <div class="grid gap-6 md:grid-cols-2">
              <div class="bg-gray-800 rounded-xl p-6">
                <h3 class="text-lg font-semibold text-white mb-4">Token Swap</h3>
                <TokenSwap
                  :available-tokens="availableTokens"
                  :selected-from-token="fromToken"
                  :selected-to-token="toToken"
                />
              </div>

              <div class="bg-gray-800 rounded-xl p-6">
                <h3 class="text-lg font-semibold text-white mb-4">Recent Activity</h3>
                <TransactionHistory
                  :transactions="transactions.slice(0, 3)"
                  :show-filters="false"
                  :show-pagination="false"
                />
              </div>
            </div>

            <!-- Gated Content -->
            <Web3Gate
              gate-type="nft"
              nft-name="Premium NFT"
              :is-connected="true"
              :user-nft-balance="0"
              overlay-style="glass"
            >
              <div class="bg-gray-800 rounded-xl p-8 text-center">
                <h2 class="text-2xl font-bold text-white mb-4">
                  🌙 Dark Mode Premium Content
                </h2>
                <p class="text-gray-300">
                  This exclusive dark-themed content showcases the beauty of Web3 UX.
                </p>
              </div>
            </Web3Gate>

            <!-- NFT Showcase -->
            <div class="bg-gray-800 rounded-xl p-6">
              <h3 class="text-lg font-semibold text-white mb-4">Featured NFT</h3>
              <div class="max-w-sm">
                <NFTCard
                  :nft="nfts[0]"
                  :show-actions="true"
                  :show-chain-badge="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    data() {
      return {
        chains: mockChains,
        nfts: mockNFTs,
        transactions: mockTransactions,
        availableTokens: [
          { symbol: 'ETH', balance: '5.25', price: 2500 },
          { symbol: 'USDC', balance: '10000', price: 1 }
        ],
        fromToken: { symbol: 'ETH', balance: '5.25', price: 2500 },
        toToken: { symbol: 'USDC', balance: '10000', price: 1 }
      }
    }
  })
}