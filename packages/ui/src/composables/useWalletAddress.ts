import { ref, computed } from 'vue'

export function useWalletAddress(address?: string) {
  const walletAddress = ref(address || '')

  const truncatedAddress = computed(() => {
    if (!walletAddress.value) return ''
    return `${walletAddress.value.slice(0, 6)}...${walletAddress.value.slice(-4)}`
  })

  const isValidAddress = computed(() => {
    return /^0x[a-fA-F0-9]{40}$/.test(walletAddress.value)
  })

  const setAddress = (newAddress: string) => {
    walletAddress.value = newAddress
  }

  const clearAddress = () => {
    walletAddress.value = ''
  }

  return {
    walletAddress,
    truncatedAddress,
    isValidAddress,
    setAddress,
    clearAddress
  }
}