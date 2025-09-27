import { ref, computed } from 'vue'

export interface TokenBalance {
  symbol: string
  balance: number
  price?: number
  value?: number
}

export function useTokenBalance(initialTokens: TokenBalance[] = []) {
  const tokens = ref<TokenBalance[]>(initialTokens)
  const isLoading = ref(false)

  const totalValue = computed(() => {
    return tokens.value.reduce((total, token) => {
      return total + (token.value || (token.balance * (token.price || 0)))
    }, 0)
  })

  const addToken = (token: TokenBalance) => {
    tokens.value.push(token)
  }

  const removeToken = (symbol: string) => {
    const index = tokens.value.findIndex(t => t.symbol === symbol)
    if (index > -1) {
      tokens.value.splice(index, 1)
    }
  }

  const updateTokenBalance = (symbol: string, balance: number) => {
    const token = tokens.value.find(t => t.symbol === symbol)
    if (token) {
      token.balance = balance
      if (token.price) {
        token.value = balance * token.price
      }
    }
  }

  const refreshBalances = async () => {
    isLoading.value = true
    // Mock refresh logic
    await new Promise(resolve => setTimeout(resolve, 1000))
    isLoading.value = false
  }

  return {
    tokens,
    totalValue,
    isLoading,
    addToken,
    removeToken,
    updateTokenBalance,
    refreshBalances
  }
}