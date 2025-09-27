import { ref, computed } from 'vue'

export interface Web3Connection {
  isConnected: boolean
  address: string | null
  chainId: number | null
  provider: any
}

export function useWeb3Connection() {
  const isConnected = ref(false)
  const address = ref<string | null>(null)
  const chainId = ref<number | null>(null)
  const provider = ref<any>(null)

  const connection = computed((): Web3Connection => ({
    isConnected: isConnected.value,
    address: address.value,
    chainId: chainId.value,
    provider: provider.value
  }))

  const connect = async (providerType: string) => {
    // Mock implementation
    console.log('Connecting to', providerType)
    isConnected.value = true
    address.value = '0x742d35Cc6634C0532925a3b8D942B5428dDda55'
    chainId.value = 1
  }

  const disconnect = () => {
    isConnected.value = false
    address.value = null
    chainId.value = null
    provider.value = null
  }

  return {
    connection,
    isConnected,
    address,
    chainId,
    provider,
    connect,
    disconnect
  }
}