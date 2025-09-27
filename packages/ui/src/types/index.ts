export interface TokenData {
  symbol: string
  name: string
  balance: string
  usdValue?: number
  icon?: string
  chainId?: number
}

export interface NFTData {
  id: string
  name: string
  description?: string
  image: string
  owner?: string
  price?: {
    amount: string
    currency: string
  }
  collection?: {
    name: string
    verified?: boolean
  }
  chain?: string
}

export interface WalletData {
  address: string
  ens?: string
  avatar?: string
  balance?: string
  chainId?: number
  connected: boolean
}

export type ComponentVariant = 'default' | 'outline' | 'ghost'
export type ComponentSize = 'sm' | 'md' | 'lg'
export type LayoutType = 'vertical' | 'horizontal' | 'grid'