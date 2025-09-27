<template>
  <div :class="['yield-farming', className]">
    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
      <div class="p-6">
        <!-- Header -->
        <div class="flex justify-between items-start mb-6">
          <div>
            <h2 class="text-xl font-bold text-gray-900 dark:text-white flex items-center space-x-2">
              <span>{{ title }}</span>
              <span v-if="farmInfo?.multiplier" class="text-lg text-purple-600 dark:text-purple-400">
                {{ farmInfo.multiplier }}x
              </span>
            </h2>
            <p v-if="subtitle" class="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {{ subtitle }}
            </p>
            <div class="flex items-center space-x-3 mt-2">
              <div class="flex items-center space-x-1">
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {{ lpToken?.tokenA || 'TOKEN' }}/{{ lpToken?.tokenB || 'TOKEN' }}
                </span>
                <span v-if="farmInfo?.isNew" class="px-2 py-1 text-xs bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400 rounded">
                  NEW
                </span>
                <span v-if="farmInfo?.isHot" class="px-2 py-1 text-xs bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400 rounded">
                  🔥 HOT
                </span>
              </div>
            </div>
          </div>
          <div class="text-right">
            <div class="text-sm text-gray-600 dark:text-gray-400">TVL</div>
            <div class="text-lg font-semibold text-gray-900 dark:text-white">
              ${{ farmInfo?.tvl || '0' }}
            </div>
          </div>
        </div>

        <!-- Farm Stats -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div class="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
            <div class="text-sm text-green-700 dark:text-green-300 mb-1">APY</div>
            <div class="text-2xl font-bold text-green-600 dark:text-green-400">
              {{ currentAPY }}%
            </div>
            <div v-if="baseAPY !== currentAPY" class="text-xs text-green-600 dark:text-green-400">
              Base: {{ baseAPY }}% + Rewards
            </div>
          </div>

          <div class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
            <div class="text-sm text-blue-700 dark:text-blue-300 mb-1">Your Staked</div>
            <div class="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {{ userStaked || '0' }}
            </div>
            <div class="text-xs text-blue-600 dark:text-blue-400">
              LP Tokens
            </div>
          </div>

          <div class="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
            <div class="text-sm text-purple-700 dark:text-purple-300 mb-1">Rewards Earned</div>
            <div class="text-2xl font-bold text-purple-600 dark:text-purple-400">
              {{ rewardsEarned || '0' }}
            </div>
            <div class="text-xs text-purple-600 dark:text-purple-400">
              {{ rewardTokens?.[0]?.symbol || 'REWARD' }}
            </div>
          </div>

          <div class="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
            <div class="text-sm text-orange-700 dark:text-orange-300 mb-1">Your Share</div>
            <div class="text-2xl font-bold text-orange-600 dark:text-orange-400">
              {{ userPoolShare || '0' }}%
            </div>
            <div class="text-xs text-orange-600 dark:text-orange-400">
              of Pool
            </div>
          </div>
        </div>

        <!-- Auto-Compound Toggle -->
        <div v-if="showAutoCompound" class="mb-6 p-4 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/10 rounded-lg border border-purple-200 dark:border-purple-800">
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center">
                <svg class="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <div>
                <div class="font-medium text-gray-900 dark:text-white">Auto-Compound</div>
                <div class="text-sm text-gray-600 dark:text-gray-400">
                  Automatically reinvest rewards for maximum yield
                </div>
              </div>
            </div>
            <div class="flex items-center space-x-3">
              <div v-if="autoCompoundEnabled" class="text-right text-sm">
                <div class="text-green-600 dark:text-green-400 font-medium">
                  +{{ compoundBoost || '2.3' }}% APY Boost
                </div>
                <div class="text-gray-500 dark:text-gray-400">
                  Next compound: {{ nextCompoundTime || '6h 23m' }}
                </div>
              </div>
              <button
                @click="toggleAutoCompound"
                :class="[
                  'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2',
                  autoCompoundEnabled ? 'bg-purple-600' : 'bg-gray-200 dark:bg-gray-600'
                ]"
              >
                <span
                  :class="[
                    'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
                    autoCompoundEnabled ? 'translate-x-5' : 'translate-x-0'
                  ]"
                ></span>
              </button>
            </div>
          </div>
        </div>

        <!-- Action Tabs -->
        <div class="flex bg-gray-100 dark:bg-gray-700 p-1 rounded-lg mb-6">
          <button
            @click="activeTab = 'deposit'"
            :class="[
              'flex-1 py-2 px-4 rounded-md font-medium transition-colors',
              activeTab === 'deposit'
                ? 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            ]"
          >
            Deposit
          </button>
          <button
            @click="activeTab = 'withdraw'"
            :class="[
              'flex-1 py-2 px-4 rounded-md font-medium transition-colors',
              activeTab === 'withdraw'
                ? 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            ]"
          >
            Withdraw
          </button>
        </div>

        <!-- Deposit Section -->
        <div v-if="activeTab === 'deposit'" class="space-y-6">
          <!-- LP Token Input -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              LP Token Amount
            </label>
            <div class="relative">
              <input
                v-model="depositAmount"
                type="number"
                :placeholder="`Enter ${lpToken?.tokenA || 'TOKEN'}-${lpToken?.tokenB || 'TOKEN'} LP amount`"
                :disabled="loading"
                class="w-full px-4 py-3 pr-20 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white disabled:opacity-50"
              />
              <button
                @click="setMaxDeposit"
                class="absolute right-3 top-3 text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors"
              >
                MAX
              </button>
            </div>
            <div class="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
              <span>Balance: {{ lpToken?.balance || '0' }} LP</span>
              <span v-if="depositAmount">≈ ${{ formatCurrency(parseFloat(depositAmount) * (lpToken?.price || 0)) }}</span>
            </div>
          </div>

          <!-- Quick Deposit Buttons -->
          <div v-if="showQuickAmounts" class="flex gap-2">
            <button
              v-for="percentage in [25, 50, 75, 100]"
              :key="percentage"
              @click="setDepositPercentage(percentage)"
              class="px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              {{ percentage }}%
            </button>
          </div>

          <!-- Expected Rewards -->
          <div v-if="depositAmount && parseFloat(depositAmount) > 0" class="space-y-4">
            <!-- Reward Projections -->
            <div class="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/10 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
              <div class="text-sm font-medium text-purple-900 dark:text-purple-300 mb-3">
                Projected Rewards {{ autoCompoundEnabled ? '(With Auto-Compound)' : '' }}
              </div>
              <div class="space-y-2 text-sm">
                <div class="flex justify-between">
                  <span class="text-purple-700 dark:text-purple-400">Daily rewards:</span>
                  <span class="font-medium">{{ calculateRewards('daily') }} {{ rewardTokens?.[0]?.symbol || 'REWARD' }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-purple-700 dark:text-purple-400">Weekly rewards:</span>
                  <span class="font-medium">{{ calculateRewards('weekly') }} {{ rewardTokens?.[0]?.symbol || 'REWARD' }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-purple-700 dark:text-purple-400">Monthly rewards:</span>
                  <span class="font-medium text-purple-600 dark:text-purple-400">{{ calculateRewards('monthly') }} {{ rewardTokens?.[0]?.symbol || 'REWARD' }}</span>
                </div>
              </div>
            </div>

            <!-- Multiple Reward Tokens -->
            <div v-if="rewardTokens && rewardTokens.length > 1" class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <div class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Additional Rewards</div>
              <div class="space-y-2">
                <div
                  v-for="(token, index) in rewardTokens.slice(1)"
                  :key="index"
                  class="flex justify-between items-center"
                >
                  <div class="flex items-center space-x-2">
                    <div class="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {{ token.symbol.charAt(0) }}
                    </div>
                    <span class="text-sm font-medium text-gray-900 dark:text-white">{{ token.symbol }}</span>
                  </div>
                  <span class="text-sm text-gray-600 dark:text-gray-400">
                    {{ calculateRewards('daily', index + 1) }} / day
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Withdraw Section -->
        <div v-else class="space-y-6">
          <!-- Current Position -->
          <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <div class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Your Farming Position</div>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <div class="text-sm text-gray-600 dark:text-gray-400">Deposited LP</div>
                <div class="font-semibold text-gray-900 dark:text-white">
                  {{ userStaked || '0' }} LP
                </div>
                <div class="text-sm text-gray-500 dark:text-gray-400">
                  ≈ ${{ formatCurrency(parseFloat(userStaked || '0') * (lpToken?.price || 0)) }}
                </div>
              </div>
              <div>
                <div class="text-sm text-gray-600 dark:text-gray-400">Pending Rewards</div>
                <div class="font-semibold text-purple-600 dark:text-purple-400">
                  {{ rewardsEarned || '0' }} {{ rewardTokens?.[0]?.symbol || 'REWARD' }}
                </div>
                <div class="text-sm text-gray-500 dark:text-gray-400">
                  ≈ ${{ formatCurrency(parseFloat(rewardsEarned || '0') * (rewardTokens?.[0]?.price || 0)) }}
                </div>
              </div>
            </div>
          </div>

          <!-- Withdraw Amount -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Amount to Withdraw
            </label>
            <div class="relative">
              <input
                v-model="withdrawAmount"
                type="number"
                :max="userStaked"
                :placeholder="`Enter LP token amount`"
                :disabled="loading"
                class="w-full px-4 py-3 pr-20 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white disabled:opacity-50"
              />
              <button
                @click="setMaxWithdraw"
                class="absolute right-3 top-3 text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors"
              >
                MAX
              </button>
            </div>
            <div class="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Available: {{ userStaked || '0' }} LP tokens
            </div>
          </div>

          <!-- Withdraw Options -->
          <div class="space-y-3">
            <label class="flex items-center space-x-3 p-3 border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <input
                v-model="withdrawOption"
                value="withdraw-only"
                type="radio"
                class="w-4 h-4 text-purple-600 focus:ring-purple-500"
              />
              <div>
                <div class="font-medium text-gray-900 dark:text-white">Withdraw LP Tokens Only</div>
                <div class="text-sm text-gray-600 dark:text-gray-400">Keep your rewards for later claiming</div>
              </div>
            </label>

            <label class="flex items-center space-x-3 p-3 border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <input
                v-model="withdrawOption"
                value="withdraw-and-claim"
                type="radio"
                class="w-4 h-4 text-purple-600 focus:ring-purple-500"
              />
              <div>
                <div class="font-medium text-gray-900 dark:text-white">Withdraw & Claim Rewards</div>
                <div class="text-sm text-gray-600 dark:text-gray-400">
                  Withdraw LP tokens and claim {{ rewardsEarned || '0' }} {{ rewardTokens?.[0]?.symbol || 'REWARD' }}
                </div>
              </div>
            </label>
          </div>

          <!-- Emergency Withdraw Warning -->
          <div v-if="showEmergencyWithdraw" class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
            <div class="flex items-start space-x-3">
              <svg class="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
              </svg>
              <div>
                <div class="font-medium text-red-800 dark:text-red-300">Emergency Withdraw Available</div>
                <div class="text-sm text-red-700 dark:text-red-400 mt-1">
                  You can emergency withdraw your LP tokens without claiming rewards if needed.
                  <button class="underline hover:text-red-800 dark:hover:text-red-300 ml-1">
                    Emergency Withdraw
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Claim Rewards Section -->
        <div v-if="showClaimRewards && rewardsEarned && parseFloat(rewardsEarned) > 0" class="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
          <div class="flex justify-between items-center">
            <div>
              <div class="font-medium text-gray-900 dark:text-white">Pending Rewards</div>
              <div class="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <div>{{ rewardsEarned }} {{ rewardTokens?.[0]?.symbol || 'REWARD' }}</div>
                <div v-if="rewardTokens && rewardTokens.length > 1">
                  + {{ rewardTokens.length - 1 }} more reward tokens
                </div>
              </div>
            </div>
            <div class="flex space-x-2">
              <button
                v-if="showCompoundButton"
                @click="handleCompound"
                :disabled="claiming || loading"
                class="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed font-medium transition-colors flex items-center space-x-2"
              >
                <div v-if="claiming === 'compound'" class="w-4 h-4 border-2 border-purple-300 border-t-purple-600 rounded-full animate-spin"></div>
                <span>{{ claiming === 'compound' ? 'Compounding...' : 'Compound' }}</span>
              </button>
              <button
                @click="handleClaimRewards"
                :disabled="claiming || loading"
                class="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed font-medium transition-colors flex items-center space-x-2"
              >
                <div v-if="claiming === 'claim'" class="w-4 h-4 border-2 border-green-300 border-t-green-600 rounded-full animate-spin"></div>
                <span>{{ claiming === 'claim' ? 'Claiming...' : 'Claim' }}</span>
              </button>
            </div>
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
                : activeTab === 'deposit'
                ? 'bg-purple-500 text-white hover:bg-purple-600'
                : 'bg-red-500 text-white hover:bg-red-600'
            ]"
          >
            <div v-if="loading" class="w-5 h-5 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
            <span>{{ actionButtonText }}</span>
          </button>
        </div>

        <!-- Transaction Summary -->
        <div v-if="showTransactionSummary && (depositAmount || withdrawAmount)" class="mt-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <div class="text-sm text-gray-600 dark:text-gray-400 space-y-1">
            <div class="flex justify-between">
              <span>Gas estimate:</span>
              <span>~${{ gasEstimate || '8' }}</span>
            </div>
            <div v-if="activeTab === 'deposit' && autoCompoundEnabled" class="flex justify-between">
              <span>Auto-compound fee:</span>
              <span>{{ autoCompoundFee || '2' }}%</span>
            </div>
            <div v-if="activeTab === 'withdraw' && withdrawOption === 'withdraw-and-claim'" class="flex justify-between text-green-600 dark:text-green-400">
              <span>Rewards claimed:</span>
              <span>{{ rewardsEarned }} {{ rewardTokens?.[0]?.symbol }}</span>
            </div>
          </div>
        </div>

        <!-- Farm Information -->
        <div v-if="showFarmInfo" class="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <div class="text-gray-600 dark:text-gray-400">Reward Duration</div>
              <div class="font-medium text-gray-900 dark:text-white">
                {{ farmInfo?.rewardDuration || '30 days' }}
              </div>
            </div>
            <div>
              <div class="text-gray-600 dark:text-gray-400">Rewards End</div>
              <div class="font-medium text-gray-900 dark:text-white">
                {{ farmInfo?.rewardEndDate || 'Dec 31, 2024' }}
              </div>
            </div>
            <div>
              <div class="text-gray-600 dark:text-gray-400">Total Stakers</div>
              <div class="font-medium text-gray-900 dark:text-white">
                {{ farmInfo?.totalStakers || '1,234' }}
              </div>
            </div>
            <div>
              <div class="text-gray-600 dark:text-gray-400">Deposit Fee</div>
              <div class="font-medium text-gray-900 dark:text-white">
                {{ farmInfo?.depositFee || '0' }}%
              </div>
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
    default: 'Yield Farm'
  },
  subtitle: {
    type: String,
    default: 'Stake LP tokens to earn farming rewards'
  },

  // Farm Configuration
  farmInfo: {
    type: Object,
    default: () => ({
      multiplier: '2',
      isNew: false,
      isHot: true,
      tvl: '2.5M',
      rewardDuration: '30 days',
      rewardEndDate: 'Dec 31, 2024',
      totalStakers: '1,234',
      depositFee: '0'
    })
  },

  // Token Information
  lpToken: {
    type: Object,
    default: () => ({
      tokenA: 'ETH',
      tokenB: 'USDC',
      balance: '10.5',
      price: 100,
      decimals: 18
    })
  },
  rewardTokens: {
    type: Array,
    default: () => [
      { symbol: 'FARM', price: 50, decimals: 18 },
      { symbol: 'BONUS', price: 5, decimals: 18 }
    ]
  },

  // APY Data
  currentAPY: {
    type: [String, Number],
    default: '125.5'
  },
  baseAPY: {
    type: [String, Number],
    default: '25.5'
  },

  // User Position
  userStaked: {
    type: String,
    default: '0'
  },
  rewardsEarned: {
    type: String,
    default: '0'
  },
  userPoolShare: {
    type: String,
    default: '0'
  },

  // Auto-Compound
  showAutoCompound: {
    type: Boolean,
    default: true
  },
  autoCompoundEnabled: {
    type: Boolean,
    default: false
  },
  compoundBoost: {
    type: String,
    default: '2.3'
  },
  nextCompoundTime: {
    type: String,
    default: '6h 23m'
  },
  autoCompoundFee: {
    type: String,
    default: '2'
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
  showCompoundButton: {
    type: Boolean,
    default: true
  },
  showTransactionSummary: {
    type: Boolean,
    default: true
  },
  showEmergencyWithdraw: {
    type: Boolean,
    default: true
  },
  showFarmInfo: {
    type: Boolean,
    default: true
  },

  // State
  loading: {
    type: Boolean,
    default: false
  },
  claiming: {
    type: String,
    default: '' // 'claim', 'compound', or ''
  },
  gasEstimate: {
    type: String,
    default: '8'
  },

  // Styling
  className: {
    type: String,
    default: ''
  }
})

const emit = defineEmits([
  'deposit',
  'withdraw',
  'claim-rewards',
  'compound',
  'toggle-auto-compound'
])

// Local state
const activeTab = ref('deposit')
const depositAmount = ref('')
const withdrawAmount = ref('')
const withdrawOption = ref('withdraw-and-claim')

// Computed properties
const actionDisabled = computed(() => {
  if (props.loading) return true

  if (activeTab.value === 'deposit') {
    return !depositAmount.value || parseFloat(depositAmount.value) <= 0 ||
           parseFloat(depositAmount.value) > parseFloat(props.lpToken?.balance || '0')
  }

  if (activeTab.value === 'withdraw') {
    return !withdrawAmount.value || parseFloat(withdrawAmount.value) <= 0 ||
           parseFloat(withdrawAmount.value) > parseFloat(props.userStaked || '0')
  }

  return false
})

const actionButtonText = computed(() => {
  if (props.loading) {
    return activeTab.value === 'deposit' ? 'Depositing...' : 'Withdrawing...'
  }

  if (activeTab.value === 'deposit') {
    return depositAmount.value ? `Deposit ${depositAmount.value} LP` : 'Enter Amount'
  } else {
    const action = withdrawOption.value === 'withdraw-and-claim' ? 'Withdraw & Claim' : 'Withdraw'
    return withdrawAmount.value ? `${action} ${withdrawAmount.value} LP` : 'Enter Amount'
  }
})

// Methods
const setMaxDeposit = () => {
  depositAmount.value = props.lpToken?.balance || '0'
}

const setMaxWithdraw = () => {
  withdrawAmount.value = props.userStaked || '0'
}

const setDepositPercentage = (percentage) => {
  const balance = parseFloat(props.lpToken?.balance || '0')
  const amount = (balance * percentage / 100).toFixed(6)
  depositAmount.value = amount
}

const toggleAutoCompound = () => {
  emit('toggle-auto-compound', !props.autoCompoundEnabled)
}

const calculateRewards = (period, tokenIndex = 0) => {
  const amount = parseFloat(depositAmount.value || props.userStaked || '0')
  const apy = parseFloat(props.currentAPY || '0') / 100
  const boost = props.autoCompoundEnabled ? parseFloat(props.compoundBoost || '0') / 100 : 0

  const multipliers = {
    daily: 1/365,
    weekly: 7/365,
    monthly: 30/365,
    yearly: 1
  }

  // Adjust for different reward tokens (secondary tokens typically have lower rates)
  const tokenMultiplier = tokenIndex === 0 ? 1 : 0.3

  const rewards = amount * (apy + boost) * multipliers[period] * tokenMultiplier
  return rewards.toFixed(4)
}

const handleAction = () => {
  if (activeTab.value === 'deposit') {
    emit('deposit', {
      amount: depositAmount.value,
      lpToken: props.lpToken,
      autoCompound: props.autoCompoundEnabled
    })
  } else {
    emit('withdraw', {
      amount: withdrawAmount.value,
      option: withdrawOption.value,
      claimRewards: withdrawOption.value === 'withdraw-and-claim'
    })
  }
}

const handleClaimRewards = () => {
  emit('claim-rewards', {
    rewards: props.rewardsEarned,
    tokens: props.rewardTokens
  })
}

const handleCompound = () => {
  emit('compound', {
    rewards: props.rewardsEarned,
    tokens: props.rewardTokens
  })
}

const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  }).format(value)
}
</script>