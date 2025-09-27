declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '@web3icons/core' {
  export const svgs: {
    wallets: Record<string, { branded: string; mono: string }>
    tokens: Record<string, { branded: string; mono: string }>
    networks: Record<string, { branded: string; mono: string }>
  }
  export function getChainIcon(chainId: number | string): string
  export function getTokenIcon(symbol: string): string
  export function getProtocolIcon(protocol: string): string
  export function getAllIcons(): Record<string, string>
}