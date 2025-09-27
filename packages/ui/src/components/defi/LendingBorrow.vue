<template>
  <div :class="['lending-borrow', className]">
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
          <div v-if="accountHealth" class="text-right">
            <div class="text-sm text-gray-600 dark:text-gray-400 mb-1">Health Factor</div>
            <div :class="[
              'text-lg font-bold',
              getHealthColor(accountHealth.factor)
            ]">
              {{ accountHealth.factor }}
            </div>
            <div class="text-xs text-gray-500 dark:text-gray-400">
              {{ getHealthStatus(accountHealth.factor) }}
            </div>
          </div>
        </div>

        <!-- Health Factor Bar -->
        <div v-if="accountHealth && showHealthBar" class="mb-6">
          <div class="flex justify-between items-center mb-2">
            <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Account Health</span>
            <span :class="['text-sm font-medium', getHealthColor(accountHealth.factor)]">
              {{ accountHealth.factor }}
            </span>
          </div>
          <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              :class="[
                'h-2 rounded-full transition-all duration-500',
                getHealthBarColor(accountHealth.factor)
              ]"
              :style="{ width: `${Math.min(parseFloat(accountHealth.factor) * 50, 100)}%` }"
            ></div>
          </div>
          <div class="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
            <span>Liquidation Risk</span>
            <span>Safe</span>
          </div>
        </div>

        <!-- Position Overview -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div class="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
            <div class="text-sm text-green-700 dark:text-green-300 mb-1">Total Supplied</div>
            <div class="text-2xl font-bold text-green-600 dark:text-green-400">
              ${{ totalSupplied || '0' }}
            </div>
            <div class="text-xs text-green-600 dark:text-green-400">
              Earning {{ supplyAPY || '0' }}% APY
            </div>
          </div>

          <div class="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
            <div class="text-sm text-red-700 dark:text-red-300 mb-1">Total Borrowed</div>
            <div class="text-2xl font-bold text-red-600 dark:text-red-400">
              ${{ totalBorrowed || '0' }}
            </div>
            <div class="text-xs text-red-600 dark:text-red-400">
              Paying {{ borrowAPY || '0' }}% APY
            </div>
          </div>

          <div class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
            <div class="text-sm text-blue-700 dark:text-blue-300 mb-1">Available to Borrow</div>
            <div class="text-2xl font-bold text-blue-600 dark:text-blue-400">
              ${{ availableToBorrow || '0' }}
            </div>
            <div class="text-xs text-blue-600 dark:text-blue-400">
              Based on collateral
            </div>
          </div>
        </div>

        <!-- Action Tabs -->
        <div class="flex bg-gray-100 dark:bg-gray-700 p-1 rounded-lg mb-6">
          <button
            @click="activeTab = 'supply'"
            :class="[
              'flex-1 py-2 px-4 rounded-md font-medium transition-colors',
              activeTab === 'supply'
                ? 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            ]"
          >
            Supply
          </button>
          <button
            @click="activeTab = 'borrow'"
            :class="[
              'flex-1 py-2 px-4 rounded-md font-medium transition-colors',
              activeTab === 'borrow'
                ? 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            ]"
          >
            Borrow
          </button>
          <button
            @click="activeTab = 'repay'"
            :class="[
              'flex-1 py-2 px-4 rounded-md font-medium transition-colors',
              activeTab === 'repay'
                ? 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            ]"
          >
            Repay
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

        <!-- Supply Section -->
        <div v-if="activeTab === 'supply'" class="space-y-6">
          <!-- Token Selection -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Asset to Supply
            </label>
            <div class="relative">
              <button
                @click="showTokenSelector = 'supply'"
                class="w-full flex items-center justify-between px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <div class="flex items-center space-x-3">
                  <div class="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {{ selectedSupplyToken?.symbol?.charAt(0) || 'T' }}
                  </div>
                  <div>
                    <div class="font-medium text-gray-900 dark:text-white">
                      {{ selectedSupplyToken?.symbol || 'Select Token' }}
                    </div>
                    <div class="text-sm text-gray-500 dark:text-gray-400">
                      Balance: {{ selectedSupplyToken?.balance || '0' }}
                    </div>
                  </div>
                </div>
                <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>

          <!-- Supply Amount -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Amount to Supply
            </label>
            <div class="relative">
              <input
                v-model="supplyAmount"
                type="number"
                :placeholder="`Enter ${selectedSupplyToken?.symbol || 'token'} amount`"
                :disabled="loading"
                class="w-full px-4 py-3 pr-20 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white disabled:opacity-50"
              />
              <button
                @click="setMaxSupply"
                class="absolute right-3 top-3 text-sm font-medium text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 transition-colors"
              >
                MAX
              </button>
            </div>
            <div class="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
              <span>Wallet: {{ selectedSupplyToken?.balance || '0' }} {{ selectedSupplyToken?.symbol }}</span>
              <span v-if="supplyAmount">≈ ${{ formatCurrency(parseFloat(supplyAmount) * (selectedSupplyToken?.price || 0)) }}</span>
            </div>
          </div>

          <!-- Supply Details -->
          <div v-if="supplyAmount && parseFloat(supplyAmount) > 0" class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
            <div class="text-sm font-medium text-green-900 dark:text-green-300 mb-2">Supply Details</div>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between">
                <span class="text-green-700 dark:text-green-400">Supply APY:</span>
                <span class="font-medium">{{ selectedSupplyToken?.supplyAPY || '0' }}%</span>
              </div>
              <div class="flex justify-between">
                <span class="text-green-700 dark:text-green-400">Collateral Factor:</span>
                <span class="font-medium">{{ selectedSupplyToken?.collateralFactor || '75' }}%</span>
              </div>
              <div class="flex justify-between">
                <span class="text-green-700 dark:text-green-400">New borrowing power:</span>
                <span class="font-medium text-green-600 dark:text-green-400">
                  +${{ calculateBorrowingPower() }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Borrow Section -->
        <div v-else-if="activeTab === 'borrow'" class="space-y-6">
          <!-- Available Assets -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Asset to Borrow
            </label>
            <div class="relative">
              <button
                @click="showTokenSelector = 'borrow'"
                class="w-full flex items-center justify-between px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <div class="flex items-center space-x-3">
                  <div class="w-8 h-8 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {{ selectedBorrowToken?.symbol?.charAt(0) || 'T' }}
                  </div>
                  <div>
                    <div class="font-medium text-gray-900 dark:text-white">
                      {{ selectedBorrowToken?.symbol || 'Select Token' }}
                    </div>
                    <div class="text-sm text-gray-500 dark:text-gray-400">
                      Available: ${{ selectedBorrowToken?.available || '0' }}
                    </div>
                  </div>
                </div>
                <div class="text-right">
                  <div class="text-sm font-medium text-red-600 dark:text-red-400">
                    {{ selectedBorrowToken?.borrowAPY || '0' }}% APY
                  </div>
                </div>
              </button>
            </div>
          </div>

          <!-- Borrow Amount -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Amount to Borrow
            </label>
            <div class="relative">
              <input
                v-model="borrowAmount"
                type="number"
                :placeholder="`Enter ${selectedBorrowToken?.symbol || 'token'} amount`"
                :disabled="loading"
                class="w-full px-4 py-3 pr-20 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white disabled:opacity-50"
              />
              <button
                @click="setMaxBorrow"
                class="absolute right-3 top-3 text-sm font-medium text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 transition-colors"
              >
                SAFE MAX
              </button>
            </div>
            <div class="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
              <span>Available: ${{ availableToBorrow || '0' }}</span>
              <span v-if="borrowAmount">≈ ${{ formatCurrency(parseFloat(borrowAmount) * (selectedBorrowToken?.price || 0)) }}</span>
            </div>
          </div>

          <!-- Health Factor Impact -->
          <div v-if="borrowAmount && parseFloat(borrowAmount) > 0" class="space-y-4">
            <div :class="[
              'p-4 rounded-lg border',
              newHealthFactor >= 1.5 ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800' :
              newHealthFactor >= 1.2 ? 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800' :
              'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
            ]">
              <div class="flex justify-between items-center mb-2">
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">New Health Factor</span>
                <span :class="[
                  'font-bold',
                  getHealthColor(newHealthFactor)
                ]">
                  {{ newHealthFactor.toFixed(2) }}
                </span>
              </div>
              <div class="text-xs text-gray-600 dark:text-gray-400">
                Current: {{ accountHealth?.factor || '∞' }} → New: {{ newHealthFactor.toFixed(2) }}
              </div>
            </div>

            <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <div class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Borrow Details</div>
              <div class="space-y-2 text-sm">
                <div class="flex justify-between">
                  <span class="text-gray-600 dark:text-gray-400">Borrow APY:</span>
                  <span class="font-medium">{{ selectedBorrowToken?.borrowAPY || '0' }}%</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600 dark:text-gray-400">Liquidation threshold:</span>
                  <span class="font-medium">{{ selectedBorrowToken?.liquidationThreshold || '85' }}%</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600 dark:text-gray-400">Monthly interest:</span>
                  <span class="font-medium text-red-600 dark:text-red-400">
                    ${{ calculateMonthlyInterest() }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Liquidation Warning -->
          <div v-if="newHealthFactor < 1.2" class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
            <div class="flex items-start space-x-3">
              <svg class="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
              </svg>
              <div>
                <div class="font-medium text-red-800 dark:text-red-300">Liquidation Risk</div>
                <div class="text-sm text-red-700 dark:text-red-400 mt-1">
                  Your health factor will drop to {{ newHealthFactor.toFixed(2) }}, which is close to liquidation risk.
                  Consider borrowing less or supplying more collateral.
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Repay Section -->
        <div v-else-if="activeTab === 'repay'" class="space-y-6">
          <!-- Borrowed Assets -->
          <div v-if="borrowedAssets?.length > 0">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              Your Borrowed Assets
            </label>
            <div class="space-y-3">
              <div
                v-for="(asset, index) in borrowedAssets"
                :key="index"
                :class="[
                  'p-4 border rounded-lg cursor-pointer transition-colors',
                  selectedRepayAsset?.symbol === asset.symbol
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                    : 'border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                ]"
                @click="selectRepayAsset(asset)"
              >
                <div class="flex justify-between items-center">
                  <div class="flex items-center space-x-3">
                    <div class="w-8 h-8 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {{ asset.symbol.charAt(0) }}
                    </div>
                    <div>
                      <div class="font-medium text-gray-900 dark:text-white">{{ asset.symbol }}</div>
                      <div class="text-sm text-gray-500 dark:text-gray-400">
                        Borrowed: {{ asset.borrowed }} ({{ asset.borrowAPY }}% APY)
                      </div>
                    </div>
                  </div>
                  <div class="text-right">
                    <div class="font-semibold text-gray-900 dark:text-white">
                      ${{ formatCurrency(parseFloat(asset.borrowed) * asset.price) }}
                    </div>
                    <div class="text-sm text-red-600 dark:text-red-400">
                      ${{ asset.dailyInterest }}/day interest
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Repay Amount -->
          <div v-if="selectedRepayAsset">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Amount to Repay
            </label>
            <div class="relative">
              <input
                v-model="repayAmount"
                type="number"
                :max="selectedRepayAsset.borrowed"
                :placeholder="`Enter ${selectedRepayAsset.symbol} amount`"
                :disabled="loading"
                class="w-full px-4 py-3 pr-20 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white disabled:opacity-50"
              />
              <button
                @click="setMaxRepay"
                class="absolute right-3 top-3 text-sm font-medium text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 transition-colors"
              >
                MAX
              </button>
            </div>
            <div class="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
              <span>Borrowed: {{ selectedRepayAsset.borrowed }} {{ selectedRepayAsset.symbol }}</span>
              <span>Wallet: {{ selectedRepayAsset.walletBalance || '0' }} {{ selectedRepayAsset.symbol }}</span>
            </div>
          </div>
        </div>

        <!-- Withdraw Section -->
        <div v-else-if="activeTab === 'withdraw'" class="space-y-6">
          <!-- Supplied Assets -->
          <div v-if="suppliedAssets?.length > 0">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              Your Supplied Assets
            </label>
            <div class="space-y-3">
              <div
                v-for="(asset, index) in suppliedAssets"
                :key="index"
                :class="[
                  'p-4 border rounded-lg cursor-pointer transition-colors',
                  selectedWithdrawAsset?.symbol === asset.symbol
                    ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                    : 'border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                ]"
                @click="selectWithdrawAsset(asset)"
              >
                <div class="flex justify-between items-center">
                  <div class="flex items-center space-x-3">
                    <div class="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {{ asset.symbol.charAt(0) }}
                    </div>
                    <div>
                      <div class="font-medium text-gray-900 dark:text-white">{{ asset.symbol }}</div>
                      <div class="text-sm text-gray-500 dark:text-gray-400">
                        Supplied: {{ asset.supplied }} ({{ asset.supplyAPY }}% APY)
                      </div>
                    </div>
                  </div>
                  <div class="text-right">
                    <div class="font-semibold text-gray-900 dark:text-white">
                      ${{ formatCurrency(parseFloat(asset.supplied) * asset.price) }}
                    </div>
                    <div class="text-sm text-green-600 dark:text-green-400">
                      ${{ asset.dailyEarnings }}/day earnings
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Withdraw Amount -->
          <div v-if="selectedWithdrawAsset">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Amount to Withdraw
            </label>
            <div class="relative">
              <input
                v-model="withdrawAmount"
                type="number"
                :max="selectedWithdrawAsset.supplied"
                :placeholder="`Enter ${selectedWithdrawAsset.symbol} amount`"
                :disabled="loading"
                class="w-full px-4 py-3 pr-20 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white disabled:opacity-50"
              />
              <button
                @click="setMaxWithdraw"
                class="absolute right-3 top-3 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
              >
                SAFE MAX
              </button>
            </div>
            <div class="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
              <span>Supplied: {{ selectedWithdrawAsset.supplied }} {{ selectedWithdrawAsset.symbol }}</span>
              <span>Available: {{ selectedWithdrawAsset.availableToWithdraw }} {{ selectedWithdrawAsset.symbol }}</span>
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
                : getActionButtonColor()
            ]"
          >
            <div v-if="loading" class="w-5 h-5 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
            <span>{{ actionButtonText }}</span>
          </button>
        </div>

        <!-- Transaction Summary -->
        <div v-if="showTransactionSummary && hasValidAmount" class="mt-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <div class="text-sm text-gray-600 dark:text-gray-400 space-y-1">
            <div class="flex justify-between">
              <span>Gas estimate:</span>
              <span>~${{ gasEstimate || '15' }}</span>
            </div>
            <div v-if="activeTab === 'borrow'" class="flex justify-between">
              <span>Health factor after:</span>
              <span :class="getHealthColor(newHealthFactor)">{{ newHealthFactor.toFixed(2) }}</span>
            </div>
            <div v-if="activeTab === 'supply' && supplyAmount" class="flex justify-between text-green-600 dark:text-green-400">
              <span>New borrowing power:</span>
              <span>+${{ calculateBorrowingPower() }}</span>
            </div>
          </div>
        </div>

        <!-- Risk Information -->
        <div v-if="showRiskInfo" class="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
          <div class="space-y-3 text-sm">
            <div class="flex justify-between">
              <span class="text-gray-600 dark:text-gray-400">Liquidation threshold:</span>
              <span class="font-medium text-gray-900 dark:text-white">{{ liquidationThreshold || '85' }}%</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-600 dark:text-gray-400">Liquidation penalty:</span>
              <span class="font-medium text-gray-900 dark:text-white">{{ liquidationPenalty || '5' }}%</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-600 dark:text-gray-400">Used as collateral:</span>
              <span class="font-medium text-gray-900 dark:text-white">${{ formatCurrency(totalSupplied) }}</span>
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
    default: 'Lending & Borrowing'
  },
  subtitle: {
    type: String,
    default: 'Supply assets to earn interest or borrow against your collateral'
  },

  // Account Data
  accountHealth: {
    type: Object,
    default: () => ({
      factor: '2.45'
    })
  },
  totalSupplied: {
    type: String,
    default: '0'
  },
  totalBorrowed: {
    type: String,
    default: '0'
  },
  availableToBorrow: {
    type: String,
    default: '0'
  },
  supplyAPY: {
    type: String,
    default: '0'
  },
  borrowAPY: {
    type: String,
    default: '0'
  },

  // User Positions
  suppliedAssets: {
    type: Array,
    default: () => []
  },
  borrowedAssets: {
    type: Array,
    default: () => []
  },

  // Available Tokens
  supplyTokens: {
    type: Array,
    default: () => []
  },
  borrowTokens: {
    type: Array,
    default: () => []
  },

  // Risk Parameters
  liquidationThreshold: {
    type: String,
    default: '85'
  },
  liquidationPenalty: {
    type: String,
    default: '5'
  },

  // UI Options
  showHealthBar: {
    type: Boolean,
    default: true
  },
  showTransactionSummary: {
    type: Boolean,
    default: true
  },
  showRiskInfo: {
    type: Boolean,
    default: true
  },

  // State
  loading: {
    type: Boolean,
    default: false
  },
  gasEstimate: {
    type: String,
    default: '15'
  },

  // Styling
  className: {
    type: String,
    default: ''
  }
})

const emit = defineEmits([
  'supply',
  'borrow',
  'repay',
  'withdraw'
])

// Local state
const activeTab = ref('supply')
const supplyAmount = ref('')
const borrowAmount = ref('')
const repayAmount = ref('')
const withdrawAmount = ref('')
const selectedSupplyToken = ref(props.supplyTokens?.[0] || null)
const selectedBorrowToken = ref(props.borrowTokens?.[0] || null)
const selectedRepayAsset = ref(null)
const selectedWithdrawAsset = ref(null)
const showTokenSelector = ref('')

// Computed properties
const hasValidAmount = computed(() => {
  if (activeTab.value === 'supply') return supplyAmount.value && parseFloat(supplyAmount.value) > 0
  if (activeTab.value === 'borrow') return borrowAmount.value && parseFloat(borrowAmount.value) > 0
  if (activeTab.value === 'repay') return repayAmount.value && parseFloat(repayAmount.value) > 0
  if (activeTab.value === 'withdraw') return withdrawAmount.value && parseFloat(withdrawAmount.value) > 0
  return false
})

const newHealthFactor = computed(() => {
  if (activeTab.value !== 'borrow' || !borrowAmount.value) {
    return parseFloat(props.accountHealth?.factor || '2.45')
  }

  // Simplified health factor calculation
  const currentFactor = parseFloat(props.accountHealth?.factor || '2.45')
  const borrowValue = parseFloat(borrowAmount.value) * (selectedBorrowToken.value?.price || 1)
  const totalBorrowedValue = parseFloat(props.totalBorrowed || '0') + borrowValue
  const suppliedValue = parseFloat(props.totalSupplied || '1000')

  return Math.max(0.1, (suppliedValue * 0.8) / Math.max(1, totalBorrowedValue))
})

const actionDisabled = computed(() => {
  if (props.loading) return true

  if (activeTab.value === 'supply') {
    return !supplyAmount.value || !selectedSupplyToken.value ||
           parseFloat(supplyAmount.value) <= 0 ||
           parseFloat(supplyAmount.value) > parseFloat(selectedSupplyToken.value?.balance || '0')
  }

  if (activeTab.value === 'borrow') {
    return !borrowAmount.value || !selectedBorrowToken.value ||
           parseFloat(borrowAmount.value) <= 0 ||
           newHealthFactor.value < 1.0
  }

  if (activeTab.value === 'repay') {
    return !repayAmount.value || !selectedRepayAsset.value ||
           parseFloat(repayAmount.value) <= 0 ||
           parseFloat(repayAmount.value) > parseFloat(selectedRepayAsset.value?.borrowed || '0')
  }

  if (activeTab.value === 'withdraw') {
    return !withdrawAmount.value || !selectedWithdrawAsset.value ||
           parseFloat(withdrawAmount.value) <= 0 ||
           parseFloat(withdrawAmount.value) > parseFloat(selectedWithdrawAsset.value?.availableToWithdraw || '0')
  }

  return false
})

const actionButtonText = computed(() => {
  if (props.loading) {
    const actions = { supply: 'Supplying...', borrow: 'Borrowing...', repay: 'Repaying...', withdraw: 'Withdrawing...' }
    return actions[activeTab.value]
  }

  const tab = activeTab.value
  const amounts = {
    supply: supplyAmount.value,
    borrow: borrowAmount.value,
    repay: repayAmount.value,
    withdraw: withdrawAmount.value
  }

  const tokens = {
    supply: selectedSupplyToken.value?.symbol,
    borrow: selectedBorrowToken.value?.symbol,
    repay: selectedRepayAsset.value?.symbol,
    withdraw: selectedWithdrawAsset.value?.symbol
  }

  if (amounts[tab] && tokens[tab]) {
    const action = tab.charAt(0).toUpperCase() + tab.slice(1)
    return `${action} ${amounts[tab]} ${tokens[tab]}`
  }

  return `Enter Amount to ${tab.charAt(0).toUpperCase() + tab.slice(1)}`
})

// Methods
const getHealthColor = (factor) => {
  const f = parseFloat(factor)
  if (f >= 2.0) return 'text-green-600 dark:text-green-400'
  if (f >= 1.5) return 'text-yellow-600 dark:text-yellow-400'
  if (f >= 1.2) return 'text-orange-600 dark:text-orange-400'
  return 'text-red-600 dark:text-red-400'
}

const getHealthStatus = (factor) => {
  const f = parseFloat(factor)
  if (f >= 2.0) return 'Very Safe'
  if (f >= 1.5) return 'Safe'
  if (f >= 1.2) return 'Moderate Risk'
  return 'High Risk'
}

const getHealthBarColor = (factor) => {
  const f = parseFloat(factor)
  if (f >= 2.0) return 'bg-green-500'
  if (f >= 1.5) return 'bg-yellow-500'
  if (f >= 1.2) return 'bg-orange-500'
  return 'bg-red-500'
}

const getActionButtonColor = () => {
  const colors = {
    supply: 'bg-green-500 text-white hover:bg-green-600',
    borrow: 'bg-red-500 text-white hover:bg-red-600',
    repay: 'bg-green-500 text-white hover:bg-green-600',
    withdraw: 'bg-blue-500 text-white hover:bg-blue-600'
  }
  return colors[activeTab.value] || 'bg-gray-500 text-white'
}

const setMaxSupply = () => {
  supplyAmount.value = selectedSupplyToken.value?.balance || '0'
}

const setMaxBorrow = () => {
  // Set to 80% of available to maintain safe health factor
  const available = parseFloat(props.availableToBorrow || '0')
  const safeAmount = (available * 0.8 / (selectedBorrowToken.value?.price || 1)).toFixed(6)
  borrowAmount.value = safeAmount
}

const setMaxRepay = () => {
  const borrowed = parseFloat(selectedRepayAsset.value?.borrowed || '0')
  const walletBalance = parseFloat(selectedRepayAsset.value?.walletBalance || '0')
  repayAmount.value = Math.min(borrowed, walletBalance).toFixed(6)
}

const setMaxWithdraw = () => {
  withdrawAmount.value = selectedWithdrawAsset.value?.availableToWithdraw || '0'
}

const selectRepayAsset = (asset) => {
  selectedRepayAsset.value = asset
  repayAmount.value = ''
}

const selectWithdrawAsset = (asset) => {
  selectedWithdrawAsset.value = asset
  withdrawAmount.value = ''
}

const calculateBorrowingPower = () => {
  if (!supplyAmount.value || !selectedSupplyToken.value) return '0'
  const value = parseFloat(supplyAmount.value) * selectedSupplyToken.value.price
  const collateralFactor = parseFloat(selectedSupplyToken.value.collateralFactor || '75') / 100
  return formatCurrency(value * collateralFactor)
}

const calculateMonthlyInterest = () => {
  if (!borrowAmount.value || !selectedBorrowToken.value) return '0'
  const principal = parseFloat(borrowAmount.value) * selectedBorrowToken.value.price
  const apy = parseFloat(selectedBorrowToken.value.borrowAPY || '0') / 100
  const monthly = principal * apy / 12
  return formatCurrency(monthly)
}

const handleAction = () => {
  const actions = {
    supply: () => emit('supply', {
      token: selectedSupplyToken.value,
      amount: supplyAmount.value
    }),
    borrow: () => emit('borrow', {
      token: selectedBorrowToken.value,
      amount: borrowAmount.value,
      healthFactor: newHealthFactor.value
    }),
    repay: () => emit('repay', {
      token: selectedRepayAsset.value,
      amount: repayAmount.value
    }),
    withdraw: () => emit('withdraw', {
      token: selectedWithdrawAsset.value,
      amount: withdrawAmount.value
    })
  }

  actions[activeTab.value]?.()
}

const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  }).format(value)
}
</script>