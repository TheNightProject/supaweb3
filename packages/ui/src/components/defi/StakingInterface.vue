<template>
  <div :class="['staking-interface', className]">
    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
      <div class="p-6">
        <!-- Header -->
        <div class="flex justify-between items-start mb-6">
          <div>
            <h2 class="text-xl font-bold text-gray-900 dark:text-white">
              {{ title }}
            </h2>
            <p v-if="subtitle" class="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {{ subtitle }}
            </p>
          </div>
          <div v-if="poolInfo" class="text-right">
            <div class="text-sm text-gray-600 dark:text-gray-400">Pool TVL</div>
            <div class="text-lg font-semibold text-gray-900 dark:text-white">
              ${{ poolInfo.tvl }}
            </div>
          </div>
        </div>

        <!-- Stake/Unstake Toggle -->
        <div class="flex bg-gray-100 dark:bg-gray-700 p-1 rounded-lg mb-6">
          <button
            @click="activeTab = 'stake'"
            :class="[
              'flex-1 py-2 px-4 rounded-md font-medium transition-colors',
              activeTab === 'stake'
                ? 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            ]"
          >
            Stake
          </button>
          <button
            @click="activeTab = 'unstake'"
            :class="[
              'flex-1 py-2 px-4 rounded-md font-medium transition-colors',
              activeTab === 'unstake'
                ? 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            ]"
          >
            Unstake
          </button>
        </div>

        <!-- Staking Section -->
        <div v-if="activeTab === 'stake'" class="space-y-6">
          <!-- APY Display -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
              <div class="text-sm text-green-700 dark:text-green-300 mb-1">Current APY</div>
              <div class="text-2xl font-bold text-green-600 dark:text-green-400">
                {{ currentAPY }}%
              </div>
              <div v-if="apyTrend" class="text-xs text-green-600 dark:text-green-400 mt-1">
                {{ apyTrend > 0 ? '↗' : apyTrend < 0 ? '↘' : '→' }} {{ Math.abs(apyTrend) }}% vs last week
              </div>
            </div>

            <div class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
              <div class="text-sm text-blue-700 dark:text-blue-300 mb-1">Your Staked</div>
              <div class="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {{ stakedAmount || '0' }}
              </div>
              <div class="text-xs text-blue-600 dark:text-blue-400 mt-1">
                {{ stakingToken?.symbol || 'TOKEN' }}
              </div>
            </div>

            <div class="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
              <div class="text-sm text-purple-700 dark:text-purple-300 mb-1">Rewards Earned</div>
              <div class="text-2xl font-bold text-purple-600 dark:text-purple-400">
                {{ rewardsEarned || '0' }}
              </div>
              <div class="text-xs text-purple-600 dark:text-purple-400 mt-1">
                {{ rewardToken?.symbol || 'REWARD' }}
              </div>
            </div>
          </div>

          <!-- Stake Amount Input -->
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Amount to Stake
              </label>
              <div class="relative">
                <input
                  v-model="stakeAmount"
                  type="number"
                  :placeholder="`Enter ${stakingToken?.symbol || 'TOKEN'} amount`"
                  :disabled="loading || claiming"
                  class="w-full px-4 py-3 pr-20 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white disabled:opacity-50"
                />
                <button
                  @click="setMaxStakeAmount"
                  class="absolute right-3 top-3 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                >
                  MAX
                </button>
              </div>
              <div class="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                <span>Balance: {{ stakingToken?.balance || '0' }} {{ stakingToken?.symbol }}</span>
                <span v-if="stakeAmount">≈ ${{ formatCurrency(parseFloat(stakeAmount) * (stakingToken?.price || 0)) }}</span>
              </div>
            </div>

            <!-- Quick Amount Buttons -->
            <div v-if="showQuickAmounts" class="flex gap-2">
              <button
                v-for="percentage in [25, 50, 75, 100]"
                :key="percentage"
                @click="setStakePercentage(percentage)"
                class="px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                {{ percentage }}%
              </button>
            </div>

            <!-- Projected Rewards -->
            <div v-if="stakeAmount && parseFloat(stakeAmount) > 0" class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <div class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                Projected Annual Rewards
              </div>
              <div class="space-y-2 text-sm">
                <div class="flex justify-between">
                  <span class="text-gray-600 dark:text-gray-400">Daily rewards:</span>
                  <span class="font-medium">{{ calculateRewards('daily') }} {{ rewardToken?.symbol }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600 dark:text-gray-400">Monthly rewards:</span>
                  <span class="font-medium">{{ calculateRewards('monthly') }} {{ rewardToken?.symbol }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600 dark:text-gray-400">Annual rewards:</span>
                  <span class="font-medium text-green-600 dark:text-green-400">{{ calculateRewards('yearly') }} {{ rewardToken?.symbol }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Unstaking Section -->
        <div v-else class="space-y-6">
          <!-- Current Position -->
          <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <div class="flex justify-between items-center mb-3">
              <h3 class="font-medium text-gray-900 dark:text-white">Your Staking Position</h3>
              <div v-if="showUnstakeTimer && cooldownEndTime" class="text-sm text-orange-600 dark:text-orange-400">
                Cooldown: {{ formatTimeRemaining(cooldownEndTime) }}
              </div>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <div class="text-sm text-gray-600 dark:text-gray-400">Staked Amount</div>
                <div class="text-lg font-semibold text-gray-900 dark:text-white">
                  {{ stakedAmount || '0' }} {{ stakingToken?.symbol }}
                </div>
                <div class="text-sm text-gray-500 dark:text-gray-400">
                  ≈ ${{ formatCurrency(parseFloat(stakedAmount || '0') * (stakingToken?.price || 0)) }}
                </div>
              </div>
              <div>
                <div class="text-sm text-gray-600 dark:text-gray-400">Rewards Earned</div>
                <div class="text-lg font-semibold text-green-600 dark:text-green-400">
                  {{ rewardsEarned || '0' }} {{ rewardToken?.symbol }}
                </div>
                <div class="text-sm text-gray-500 dark:text-gray-400">
                  ≈ ${{ formatCurrency(parseFloat(rewardsEarned || '0') * (rewardToken?.price || 0)) }}
                </div>
              </div>
            </div>
          </div>

          <!-- Unstake Amount -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Amount to Unstake
            </label>
            <div class="relative">
              <input
                v-model="unstakeAmount"
                type="number"
                :max="stakedAmount"
                :placeholder="`Enter ${stakingToken?.symbol || 'TOKEN'} amount`"
                :disabled="loading || claiming"
                class="w-full px-4 py-3 pr-20 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white disabled:opacity-50"
              />
              <button
                @click="setMaxUnstakeAmount"
                class="absolute right-3 top-3 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
              >
                MAX
              </button>
            </div>
            <div class="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Available: {{ stakedAmount || '0' }} {{ stakingToken?.symbol }}
            </div>
          </div>

          <!-- Unstaking Warning -->
          <div v-if="unstakingPenalty || cooldownPeriod" class="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
            <div class="flex items-start space-x-3">
              <svg class="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
              </svg>
              <div>
                <div class="font-medium text-yellow-800 dark:text-yellow-300">Unstaking Notice</div>
                <div class="text-sm text-yellow-700 dark:text-yellow-400 mt-1">
                  <ul class="space-y-1">
                    <li v-if="cooldownPeriod">• Cooldown period: {{ cooldownPeriod }} before tokens are available</li>
                    <li v-if="unstakingPenalty">• Early unstaking penalty: {{ unstakingPenalty }}%</li>
                    <li>• Rewards will stop accumulating for unstaked amount</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Claim Rewards Section -->
        <div v-if="showClaimRewards && rewardsEarned && parseFloat(rewardsEarned) > 0" class="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
          <div class="flex justify-between items-center">
            <div>
              <div class="font-medium text-gray-900 dark:text-white">Claimable Rewards</div>
              <div class="text-sm text-gray-600 dark:text-gray-400">
                {{ rewardsEarned }} {{ rewardToken?.symbol }} (≈ ${{ formatCurrency(parseFloat(rewardsEarned || '0') * (rewardToken?.price || 0)) }})
              </div>
            </div>
            <button
              @click="handleClaimRewards"
              :disabled="claiming || loading"
              class="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed font-medium transition-colors flex items-center space-x-2"
            >
              <div v-if="claiming" class="w-4 h-4 border-2 border-purple-300 border-t-purple-600 rounded-full animate-spin"></div>
              <span>{{ claiming ? 'Claiming...' : 'Claim Rewards' }}</span>
            </button>
          </div>
        </div>

        <!-- Action Button -->
        <div class="mt-6">
          <button
            @click="handleAction"
            :disabled="actionDisabled"
            :class="[
              'w-full py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2',
              actionDisabled
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed dark:bg-gray-700 dark:text-gray-400'
                : activeTab === 'stake'
                ? 'bg-blue-500 text-white hover:bg-blue-600'
                : 'bg-red-500 text-white hover:bg-red-600'
            ]"
          >
            <div v-if="loading" class="w-5 h-5 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
            <span>{{ actionButtonText }}</span>
          </button>
        </div>

        <!-- Transaction Details -->
        <div v-if="showTransactionDetails && (stakeAmount || unstakeAmount)" class="mt-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <div class="text-sm text-gray-600 dark:text-gray-400 space-y-1">
            <div class="flex justify-between">
              <span>Gas fee estimate:</span>
              <span>~${{ gasEstimate || '5' }}</span>
            </div>
            <div v-if="activeTab === 'stake'" class="flex justify-between">
              <span>You will receive:</span>
              <span>{{ stakeAmount }} st{{ stakingToken?.symbol || 'TOKEN' }}</span>
            </div>
            <div v-if="activeTab === 'unstake' && unstakingPenalty" class="flex justify-between text-orange-600 dark:text-orange-400">
              <span>Penalty fee:</span>
              <span>{{ calculatePenalty() }} {{ stakingToken?.symbol }}</span>
            </div>
          </div>
        </div>

        <!-- Additional Info -->
        <div v-if="additionalInfo" class="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div v-if="additionalInfo.lockPeriod">
              <div class="text-gray-600 dark:text-gray-400">Lock Period</div>
              <div class="font-medium text-gray-900 dark:text-white">{{ additionalInfo.lockPeriod }}</div>
            </div>
            <div v-if="additionalInfo.compounding">
              <div class="text-gray-600 dark:text-gray-400">Auto-Compound</div>
              <div class="font-medium text-gray-900 dark:text-white">{{ additionalInfo.compounding }}</div>
            </div>
            <div v-if="additionalInfo.totalStakers">
              <div class="text-gray-600 dark:text-gray-400">Total Stakers</div>
              <div class="font-medium text-gray-900 dark:text-white">{{ additionalInfo.totalStakers }}</div>
            </div>
            <div v-if="additionalInfo.protocolFee">
              <div class="text-gray-600 dark:text-gray-400">Protocol Fee</div>
              <div class="font-medium text-gray-900 dark:text-white">{{ additionalInfo.protocolFee }}%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  // Content
  title: {
    type: String,
    default: 'Staking Interface'
  },
  subtitle: {
    type: String,
    default: 'Stake your tokens and earn rewards'
  },

  // Token Information
  stakingToken: {
    type: Object,
    default: () => ({
      symbol: 'ETH',
      balance: '10.5',
      price: 2500,
      decimals: 18
    })
  },
  rewardToken: {
    type: Object,
    default: () => ({
      symbol: 'REWARD',
      balance: '0',
      price: 1,
      decimals: 18
    })
  },

  // Staking Data
  currentAPY: {
    type: [String, Number],
    default: '12.5'
  },
  apyTrend: {
    type: Number,
    default: 0
  },
  stakedAmount: {
    type: String,
    default: '0'
  },
  rewardsEarned: {
    type: String,
    default: '0'
  },

  // Pool Information
  poolInfo: {
    type: Object,
    default: () => ({
      tvl: '15.2M',
      totalStaked: '8.9M',
      participants: '1,234'
    })
  },

  // Unstaking Rules
  cooldownPeriod: {
    type: String,
    default: ''
  },
  unstakingPenalty: {
    type: [String, Number],
    default: 0
  },
  cooldownEndTime: {
    type: String,
    default: ''
  },

  // Additional Information
  additionalInfo: {
    type: Object,
    default: () => ({})
  },

  // UI Options
  showQuickAmounts: {
    type: Boolean,
    default: true
  },
  showClaimRewards: {
    type: Boolean,
    default: true
  },
  showTransactionDetails: {
    type: Boolean,
    default: true
  },
  showUnstakeTimer: {
    type: Boolean,
    default: true
  },

  // State
  loading: {
    type: Boolean,
    default: false
  },
  claiming: {
    type: Boolean,
    default: false
  },
  gasEstimate: {
    type: String,
    default: '5'
  },

  // Styling
  className: {
    type: String,
    default: ''
  }
})

const emit = defineEmits([
  'stake',
  'unstake',
  'claim-rewards'
])

// Local state
const activeTab = ref('stake')
const stakeAmount = ref('')
const unstakeAmount = ref('')

// Computed properties
const actionDisabled = computed(() => {
  if (props.loading) return true

  if (activeTab.value === 'stake') {
    return !stakeAmount.value || parseFloat(stakeAmount.value) <= 0 ||
           parseFloat(stakeAmount.value) > parseFloat(props.stakingToken?.balance || '0')
  }

  if (activeTab.value === 'unstake') {
    return !unstakeAmount.value || parseFloat(unstakeAmount.value) <= 0 ||
           parseFloat(unstakeAmount.value) > parseFloat(props.stakedAmount || '0')
  }

  return false
})

const actionButtonText = computed(() => {
  if (props.loading) {
    return activeTab.value === 'stake' ? 'Staking...' : 'Unstaking...'
  }

  if (activeTab.value === 'stake') {
    return stakeAmount.value ? `Stake ${stakeAmount.value} ${props.stakingToken?.symbol}` : 'Enter Amount'
  } else {
    return unstakeAmount.value ? `Unstake ${unstakeAmount.value} ${props.stakingToken?.symbol}` : 'Enter Amount'
  }
})

// Methods
const setMaxStakeAmount = () => {
  stakeAmount.value = props.stakingToken?.balance || '0'
}

const setMaxUnstakeAmount = () => {
  unstakeAmount.value = props.stakedAmount || '0'
}

const setStakePercentage = (percentage) => {
  const balance = parseFloat(props.stakingToken?.balance || '0')
  const amount = (balance * percentage / 100).toFixed(6)
  stakeAmount.value = amount
}

const calculateRewards = (period) => {
  const amount = parseFloat(stakeAmount.value || '0')
  const apy = parseFloat(props.currentAPY || '0') / 100

  const multipliers = {
    daily: 1/365,
    monthly: 1/12,
    yearly: 1
  }

  const rewards = amount * apy * multipliers[period]
  return rewards.toFixed(4)
}

const calculatePenalty = () => {
  const amount = parseFloat(unstakeAmount.value || '0')
  const penalty = parseFloat(props.unstakingPenalty || '0') / 100
  return (amount * penalty).toFixed(4)
}

const handleAction = () => {
  if (activeTab.value === 'stake') {
    emit('stake', {
      amount: stakeAmount.value,
      token: props.stakingToken
    })
  } else {
    emit('unstake', {
      amount: unstakeAmount.value,
      token: props.stakingToken
    })
  }
}

const handleClaimRewards = () => {
  emit('claim-rewards', {
    amount: props.rewardsEarned,
    token: props.rewardToken
  })
}

const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  }).format(value)
}

const formatTimeRemaining = (endTime) => {
  const now = new Date().getTime()
  const end = new Date(endTime).getTime()
  const diff = Math.max(0, end - now)

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))

  if (days > 0) return `${days}d ${hours}h`
  if (hours > 0) return `${hours}h ${minutes}m`
  return `${minutes}m`
}
</script>