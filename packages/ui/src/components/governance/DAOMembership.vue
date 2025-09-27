<template>
  <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
    <!-- Header -->
    <div class="p-6 border-b border-gray-200 dark:border-gray-700">
      <div class="flex items-center justify-between mb-4">
        <div>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
            {{ title || 'DAO Membership' }}
          </h2>
          <p v-if="subtitle" class="text-gray-600 dark:text-gray-300 mt-1">
            {{ subtitle }}
          </p>
        </div>
        <div class="text-right">
          <div
            :class="membershipStatusClasses"
            class="px-3 py-1 text-sm font-medium rounded-full"
          >
            {{ membershipStatus }}
          </div>
          <div v-if="memberSince" class="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Member since {{ formatDate(memberSince) }}
          </div>
        </div>
      </div>
    </div>

    <!-- Membership Overview -->
    <div class="p-6 border-b border-gray-200 dark:border-gray-700">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Voting Power -->
        <div class="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <div class="text-2xl font-bold text-blue-600 dark:text-blue-400">
            {{ votingPower }}
          </div>
          <div class="text-sm text-gray-600 dark:text-gray-300 mt-1">
            {{ governanceToken }} Voting Power
          </div>
          <div class="text-xs text-gray-500 dark:text-gray-400 mt-1">
            {{ votingPowerPercentage }}% of total supply
          </div>
        </div>

        <!-- Membership Tier -->
        <div class="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
          <div class="text-2xl font-bold text-purple-600 dark:text-purple-400">
            {{ membershipTier }}
          </div>
          <div class="text-sm text-gray-600 dark:text-gray-300 mt-1">
            Membership Tier
          </div>
          <div v-if="nextTier" class="text-xs text-gray-500 dark:text-gray-400 mt-1">
            {{ nextTierRequirement }} to {{ nextTier }}
          </div>
        </div>

        <!-- Participation Rate -->
        <div class="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
          <div class="text-2xl font-bold text-green-600 dark:text-green-400">
            {{ participationRate }}%
          </div>
          <div class="text-sm text-gray-600 dark:text-gray-300 mt-1">
            Participation Rate
          </div>
          <div class="text-xs text-gray-500 dark:text-gray-400 mt-1">
            {{ votedProposals }}/{{ totalProposals }} proposals
          </div>
        </div>
      </div>
    </div>

    <!-- Membership Benefits -->
    <div v-if="benefits && benefits.length > 0" class="p-6 border-b border-gray-200 dark:border-gray-700">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Your Membership Benefits
      </h3>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          v-for="benefit in benefits"
          :key="benefit.id"
          class="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg"
        >
          <div
            :class="benefit.available ? 'text-green-500' : 'text-gray-400'"
            class="mt-0.5"
          >
            <svg v-if="benefit.available" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </div>
          <div class="flex-1">
            <div class="font-medium text-gray-900 dark:text-white">
              {{ benefit.title }}
            </div>
            <div class="text-sm text-gray-600 dark:text-gray-300 mt-1">
              {{ benefit.description }}
            </div>
            <div v-if="!benefit.available && benefit.requirement" class="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Requires: {{ benefit.requirement }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- DAO Statistics -->
    <div v-if="daoStats" class="p-6 border-b border-gray-200 dark:border-gray-700">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        DAO Overview
      </h3>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="text-center">
          <div class="text-xl font-bold text-gray-900 dark:text-white">
            {{ daoStats.totalMembers.toLocaleString() }}
          </div>
          <div class="text-sm text-gray-500 dark:text-gray-400">Total Members</div>
        </div>
        <div class="text-center">
          <div class="text-xl font-bold text-gray-900 dark:text-white">
            {{ daoStats.activeProposals }}
          </div>
          <div class="text-sm text-gray-500 dark:text-gray-400">Active Proposals</div>
        </div>
        <div class="text-center">
          <div class="text-xl font-bold text-gray-900 dark:text-white">
            ${{ daoStats.treasuryValue }}
          </div>
          <div class="text-sm text-gray-500 dark:text-gray-400">Treasury Value</div>
        </div>
        <div class="text-center">
          <div class="text-xl font-bold text-gray-900 dark:text-white">
            {{ daoStats.avgParticipation }}%
          </div>
          <div class="text-sm text-gray-500 dark:text-gray-400">Avg Participation</div>
        </div>
      </div>
    </div>

    <!-- Delegation Status -->
    <div v-if="delegation" class="p-6 border-b border-gray-200 dark:border-gray-700">
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
          Delegation Status
        </h3>
        <button
          @click="$emit('manage-delegation')"
          class="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
        >
          Manage
        </button>
      </div>

      <div v-if="delegation.isDelegating" class="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
        <div class="flex items-center justify-between">
          <div>
            <div class="font-medium text-gray-900 dark:text-white">
              Delegated to {{ delegation.delegateName || truncateAddress(delegation.delegate) }}
            </div>
            <div class="text-sm text-gray-600 dark:text-gray-300 mt-1">
              {{ delegation.delegatedPower }} {{ governanceToken }} voting power delegated
            </div>
          </div>
          <button
            @click="$emit('revoke-delegation')"
            class="text-sm text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300"
          >
            Revoke
          </button>
        </div>
      </div>

      <div v-if="delegation.delegatedTo.length > 0" class="mt-4">
        <div class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Delegated to you: {{ delegation.totalDelegated }} {{ governanceToken }}
        </div>
        <div class="space-y-2">
          <div
            v-for="delegator in delegation.delegatedTo"
            :key="delegator.address"
            class="flex items-center justify-between text-sm"
          >
            <span class="text-gray-600 dark:text-gray-300">
              {{ delegator.name || truncateAddress(delegator.address) }}
            </span>
            <span class="font-medium text-gray-900 dark:text-white">
              {{ delegator.amount }} {{ governanceToken }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Recent Activity -->
    <div v-if="recentActivity && recentActivity.length > 0" class="p-6 border-b border-gray-200 dark:border-gray-700">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Recent Activity
      </h3>

      <div class="space-y-3">
        <div
          v-for="activity in recentActivity"
          :key="activity.id"
          class="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg"
        >
          <div
            :class="getActivityIconClasses(activity.type)"
            class="w-2 h-2 rounded-full"
          ></div>
          <div class="flex-1">
            <div class="text-sm font-medium text-gray-900 dark:text-white">
              {{ activity.description }}
            </div>
            <div class="text-xs text-gray-500 dark:text-gray-400">
              {{ formatDate(activity.timestamp) }}
            </div>
          </div>
          <div v-if="activity.value" class="text-sm font-medium text-gray-900 dark:text-white">
            {{ activity.value }}
          </div>
        </div>
      </div>
    </div>

    <!-- Action Buttons -->
    <div class="p-6">
      <div class="flex flex-col sm:flex-row gap-3">
        <button
          v-if="!isMember"
          @click="$emit('join-dao')"
          :disabled="loading"
          class="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          <svg v-if="loading" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Join DAO
        </button>

        <button
          v-if="isMember"
          @click="$emit('increase-voting-power')"
          class="flex-1 sm:flex-none bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
        >
          Increase Voting Power
        </button>

        <button
          @click="$emit('view-proposals')"
          class="flex-1 sm:flex-none border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium py-3 px-6 rounded-lg transition-colors"
        >
          View Proposals
        </button>

        <button
          v-if="canCreateProposal"
          @click="$emit('create-proposal')"
          class="flex-1 sm:flex-none border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium py-3 px-6 rounded-lg transition-colors"
        >
          Create Proposal
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: 'DAO Membership'
  },
  subtitle: {
    type: String,
    default: ''
  },
  membershipStatus: {
    type: String,
    default: 'Active',
    validator: (value) => ['Active', 'Inactive', 'Pending', 'Banned'].includes(value)
  },
  memberSince: {
    type: String,
    default: null
  },
  votingPower: {
    type: [String, Number],
    default: '0'
  },
  governanceToken: {
    type: String,
    default: 'GOV'
  },
  totalSupply: {
    type: [String, Number],
    default: '1000000'
  },
  membershipTier: {
    type: String,
    default: 'Member'
  },
  nextTier: {
    type: String,
    default: null
  },
  nextTierRequirement: {
    type: String,
    default: null
  },
  participationRate: {
    type: [String, Number],
    default: '0'
  },
  votedProposals: {
    type: [String, Number],
    default: '0'
  },
  totalProposals: {
    type: [String, Number],
    default: '0'
  },
  benefits: {
    type: Array,
    default: () => []
  },
  daoStats: {
    type: Object,
    default: null
  },
  delegation: {
    type: Object,
    default: null
  },
  recentActivity: {
    type: Array,
    default: () => []
  },
  canCreateProposal: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits([
  'join-dao',
  'increase-voting-power',
  'view-proposals',
  'create-proposal',
  'manage-delegation',
  'revoke-delegation'
])

const isMember = computed(() => {
  return props.membershipStatus.toLowerCase() === 'active'
})

const votingPowerPercentage = computed(() => {
  if (!props.totalSupply || props.totalSupply === 0) return 0
  return ((parseFloat(props.votingPower) / parseFloat(props.totalSupply)) * 100).toFixed(3)
})

const membershipStatusClasses = computed(() => {
  switch (props.membershipStatus.toLowerCase()) {
    case 'active':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
    case 'inactive':
      return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
    case 'pending':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
    case 'banned':
      return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
  }
})

const getActivityIconClasses = (type) => {
  switch (type) {
    case 'vote':
      return 'bg-blue-500'
    case 'proposal':
      return 'bg-purple-500'
    case 'delegation':
      return 'bg-yellow-500'
    case 'join':
      return 'bg-green-500'
    case 'reward':
      return 'bg-orange-500'
    default:
      return 'bg-gray-500'
  }
}

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

const truncateAddress = (address) => {
  if (!address) return ''
  return `${address.slice(0, 6)}...${address.slice(-4)}`
}
</script>