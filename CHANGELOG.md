# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.4.2] - 2025-10-04

### Added
- Automatic Tailwind v4 source scanning for SupaWeb3 components
- Created `supaweb3-tailwind.css` file with `@source` directives for Tailwind v4
- Auto-detection and injection of Tailwind v4 source scanning when @nuxt/ui or @tailwindcss/postcss is present

### Changed
- Improved Tailwind v4 integration - no manual `@source` configuration needed in user's CSS files
- Nuxt module now automatically includes component scanning for Tailwind v4 projects

## [0.4.1] - 2025-10-04

### Changed
- Include source files in published packages for better debugging and IDE support
- Added `src` directory to package files for both `@supaweb3/ui` and `@supaweb3/nuxt`

## [0.4.0] - 2025-10-04

### Changed
- **BREAKING:** Renamed package scope from `@thenightproject/supaweb3-*` to `@supaweb3/*`
  - `@thenightproject/supaweb3-ui` → `@supaweb3/ui`
  - `@thenightproject/supaweb3-nuxt` → `@supaweb3/nuxt`
  - `@thenightproject/supaweb3-config` → `@supaweb3/config`
- Updated all imports and references throughout codebase to use new package names
- Updated CI/CD workflows to reference new package names
- Updated documentation with new package installation instructions

### Migration Guide
Users upgrading from 0.3.x need to update their imports:

```diff
- import { WalletConnectButton } from '@thenightproject/supaweb3-ui'
+ import { WalletConnectButton } from '@supaweb3/ui'

- modules: ['@thenightproject/supaweb3-nuxt']
+ modules: ['@supaweb3/nuxt']
```

## [0.3.3] - 2025-10-04

### Fixed
- Storybook build now properly handles .vue files from workspace-linked UI package
- Added explicit Vue plugin to Storybook's Vite configuration
- Re-enabled Storybook build and GitHub Pages deployment in CI workflow
- Fixed .gitignore formatting and removed storybook-static from git tracking

### Changed
- Storybook deployment to GitHub Pages now functional for component documentation

## [0.3.2] - 2025-10-03

### Fixed
- CI build process now builds packages before typechecking to resolve TypeScript module errors
- Added TypeScript declaration file generation using vite-plugin-dts for proper type exports
- Removed auto-install of @nuxtjs/tailwindcss to prevent installation failures

### Added
- Smart Tailwind CSS detection supporting both v3 and v4
- Auto-detection of @nuxt/ui (includes Tailwind v4)
- Auto-detection of @nuxtjs/tailwindcss (Tailwind v3)
- Auto-detection of @tailwindcss/postcss (Tailwind v4)
- Tailwind content configuration documentation for both v3 and v4

### Changed
- Upgraded Storybook from 7.6.17 to 8.6.14 (latest stable)
- Updated documentation with flexible Tailwind setup options
- Added module configuration options documentation
- Improved warning messages for missing Tailwind CSS

## [0.3.1] - 2025-10-02

### Changed
- Updated Nuxt compatibility from `^3.0.0` to `>=3.0.0` to officially support both Nuxt 3 and Nuxt 4
- Updated package description to reflect Nuxt 3/4 support
- Added `nuxt4` keyword to package metadata

### Documentation
- Updated README with Nuxt 3/4 integration section and compatibility note
- Updated CLAUDE.md references to indicate Nuxt 3/4 support throughout

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
