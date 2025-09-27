// Access Components
export { default as Web3Gate } from './components/access/Web3Gate.vue'

// Airdrop Components
export { default as AirdropClaim } from './components/airdrops/AirdropClaim.vue'
export { default as AirdropChecker } from './components/airdrops/AirdropChecker.vue'
export { default as AirdropHistory } from './components/airdrops/AirdropHistory.vue'

// Auth Components
export { default as WalletConnectButton } from './components/auth/WalletConnectButton.vue'
export { default as WalletConnectModal } from './components/auth/WalletConnectModal.vue'

// Common Components
export { default as Web3Icon } from './components/common/Web3Icon.vue'

// DeFi Components
export { default as StakingInterface } from './components/defi/StakingInterface.vue'
export { default as LiquidityPool } from './components/defi/LiquidityPool.vue'
export { default as YieldFarming } from './components/defi/YieldFarming.vue'
export { default as LendingBorrow } from './components/defi/LendingBorrow.vue'

// Governance Components
export { default as ProposalCard } from './components/governance/ProposalCard.vue'
export { default as VotingInterface } from './components/governance/VotingInterface.vue'
export { default as DAOMembership } from './components/governance/DAOMembership.vue'

// Portfolio/Analytics Components
export { default as PortfolioOverview } from './components/portfolio/PortfolioOverview.vue'
export { default as PnLTracker } from './components/portfolio/PnLTracker.vue'
export { default as GasTracker } from './components/portfolio/GasTracker.vue'

// Notification Components
export { default as Web3Toast } from './components/notifications/Web3Toast.vue'
export { default as PriceAlert } from './components/notifications/PriceAlert.vue'

// Gaming/Social Components
export { default as GameAssets } from './components/gaming/GameAssets.vue'
export { default as QuestTracker } from './components/gaming/QuestTracker.vue'
export { default as SocialProfile } from './components/social/SocialProfile.vue'

// NFT Components
export { default as NFTCard } from './components/nft/NFTCard.vue'
export { default as NFTGallery } from './components/nft/NFTGallery.vue'

// Network Components
export { default as ChainSwitcher } from './components/network/ChainSwitcher.vue'

// Token Components
export { default as TokenSwap } from './components/tokens/TokenSwap.vue'
export { default as SendToken } from './components/tokens/SendToken.vue'

// Transaction Components
export { default as TransactionHistory } from './components/transactions/TransactionHistory.vue'

// Types
export type { WalletType } from './components/auth/WalletConnectButton.vue'
export type { IconType, IconVariant } from './components/common/Web3Icon.vue'
