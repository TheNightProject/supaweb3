# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.3.0] - 2025-10-02

### Added
- Complete Nuxt runtime component wrapper system for all 30 UI components
- Created wrapper components in organized directory structure (access, airdrops, auth, defi, gaming, governance, identity, nft, network, notifications, portfolio, social, tokens, transactions, common)
- Added missing component exports to UI package: SupaWeb3Address, SupaWeb3Avatar, TokenBalance

### Changed
- Reorganized component exports in UI package alphabetically by category for better maintainability
- Moved WalletConnectButton to proper auth directory in Nuxt runtime
- Updated WalletConnectButton import to use correct package name

### Fixed
- All components now properly exported and auto-importable in Nuxt applications
- Component discoverability improved with complete export coverage

## [0.2.4] - 2025-10-02

### Changed
- Updated CI/CD workflow name from "CI/CD Pipeline" to "Test & Deploy" for better clarity
- Updated commit command documentation to include version bumping and changelog generation

### Added
- Added changelog link to README.md pointing to supaweb3.com/changelog for easier access to version history

## [0.2.3] - 2025-10-01

### Added
- Initial release with core components
- Authentication components (WalletConnectButton, SupaWeb3AuthButton)
- Token components (TokenBalance)
- NFT components (NFTCard, NFTGallery)
- Portfolio components (PortfolioOverview)
- DeFi components (StakingInterface, LiquidityPool, YieldFarming, LendingBorrow)
- Airdrop components (AirdropChecker, AirdropClaim, AirdropHistory)
- Storybook documentation
- Tailwind CSS configuration preset
- Nuxt 3 module integration
