<template>
  <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
    <!-- Proposal Header -->
    <div class="p-6 border-b border-gray-200 dark:border-gray-700">
      <div class="flex items-start justify-between mb-4">
        <div class="flex-1">
          <div class="flex items-center gap-3 mb-2">
            <span class="text-sm font-medium text-gray-500 dark:text-gray-400">
              {{ proposal.type }}
            </span>
            <span
              :class="statusClasses"
              class="px-2 py-1 text-xs font-medium rounded-full"
            >
              {{ proposal.status }}
            </span>
            <span
              v-if="proposal.priority"
              :class="priorityClasses"
              class="px-2 py-1 text-xs font-medium rounded-full"
            >
              {{ proposal.priority }}
            </span>
          </div>
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {{ proposal.title }}
          </h3>
          <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            {{ proposal.description }}
          </p>
        </div>
        <div class="ml-4 text-right">
          <div class="text-2xl font-bold text-gray-900 dark:text-white">
            #{{ proposal.id }}
          </div>
          <div class="text-sm text-gray-500 dark:text-gray-400">
            {{ formatDate(proposal.createdAt) }}
          </div>
        </div>
      </div>

      <!-- Proposal Details -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <div class="text-xs text-gray-500 dark:text-gray-400 mb-1">Proposer</div>
          <div class="text-sm font-medium text-gray-900 dark:text-white">
            {{ truncateAddress(proposal.proposer) }}
          </div>
        </div>
        <div>
          <div class="text-xs text-gray-500 dark:text-gray-400 mb-1">Voting Power</div>
          <div class="text-sm font-medium text-gray-900 dark:text-white">
            {{ proposal.proposerVotingPower }} {{ proposal.governanceToken }}
          </div>
        </div>
        <div>
          <div class="text-xs text-gray-500 dark:text-gray-400 mb-1">Quorum</div>
          <div class="text-sm font-medium text-gray-900 dark:text-white">
            {{ proposal.quorum }}%
          </div>
        </div>
        <div>
          <div class="text-xs text-gray-500 dark:text-gray-400 mb-1">Threshold</div>
          <div class="text-sm font-medium text-gray-900 dark:text-white">
            {{ proposal.threshold }}%
          </div>
        </div>
      </div>
    </div>

    <!-- Voting Progress -->
    <div class="p-6 border-b border-gray-200 dark:border-gray-700">
      <div class="flex items-center justify-between mb-4">
        <h4 class="text-lg font-semibold text-gray-900 dark:text-white">
          Voting Results
        </h4>
        <div class="text-sm text-gray-500 dark:text-gray-400">
          {{ totalVotes.toLocaleString() }} votes cast
        </div>
      </div>

      <!-- Vote Bars -->
      <div class="space-y-3">
        <div>
          <div class="flex justify-between items-center mb-1">
            <span class="text-sm font-medium text-green-600 dark:text-green-400">
              For
            </span>
            <span class="text-sm font-medium text-gray-900 dark:text-white">
              {{ proposal.votesFor.toLocaleString() }} ({{ forPercentage }}%)
            </span>
          </div>
          <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
            <div
              class="bg-green-500 h-3 rounded-full transition-all duration-500"
              :style="{ width: `${forPercentage}%` }"
            ></div>
          </div>
        </div>

        <div>
          <div class="flex justify-between items-center mb-1">
            <span class="text-sm font-medium text-red-600 dark:text-red-400">
              Against
            </span>
            <span class="text-sm font-medium text-gray-900 dark:text-white">
              {{ proposal.votesAgainst.toLocaleString() }} ({{ againstPercentage }}%)
            </span>
          </div>
          <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
            <div
              class="bg-red-500 h-3 rounded-full transition-all duration-500"
              :style="{ width: `${againstPercentage}%` }"
            ></div>
          </div>
        </div>

        <div>
          <div class="flex justify-between items-center mb-1">
            <span class="text-sm font-medium text-yellow-600 dark:text-yellow-400">
              Abstain
            </span>
            <span class="text-sm font-medium text-gray-900 dark:text-white">
              {{ proposal.votesAbstain.toLocaleString() }} ({{ abstainPercentage }}%)
            </span>
          </div>
          <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
            <div
              class="bg-yellow-500 h-3 rounded-full transition-all duration-500"
              :style="{ width: `${abstainPercentage}%` }"
            ></div>
          </div>
        </div>
      </div>

      <!-- Quorum Progress -->
      <div class="mt-4">
        <div class="flex justify-between items-center mb-1">
          <span class="text-sm font-medium text-gray-700 dark:text-gray-300">
            Quorum Progress
          </span>
          <span class="text-sm font-medium text-gray-900 dark:text-white">
            {{ quorumProgress }}% / {{ proposal.quorum }}%
          </span>
        </div>
        <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div
            :class="quorumMet ? 'bg-blue-500' : 'bg-gray-400'"
            class="h-2 rounded-full transition-all duration-500"
            :style="{ width: `${Math.min(quorumProgress, 100)}%` }"
          ></div>
        </div>
        <div v-if="quorumMet" class="text-xs text-blue-600 dark:text-blue-400 mt-1">
          ✓ Quorum met
        </div>
      </div>
    </div>

    <!-- Timing Information -->
    <div class="p-6 border-b border-gray-200 dark:border-gray-700">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <div class="text-xs text-gray-500 dark:text-gray-400 mb-1">Start Time</div>
          <div class="text-sm font-medium text-gray-900 dark:text-white">
            {{ formatDate(proposal.startTime) }}
          </div>
        </div>
        <div>
          <div class="text-xs text-gray-500 dark:text-gray-400 mb-1">End Time</div>
          <div class="text-sm font-medium text-gray-900 dark:text-white">
            {{ formatDate(proposal.endTime) }}
          </div>
        </div>
        <div>
          <div class="text-xs text-gray-500 dark:text-gray-400 mb-1">Time Remaining</div>
          <div
            :class="timeRemainingClass"
            class="text-sm font-medium"
          >
            {{ timeRemaining }}
          </div>
        </div>
      </div>
    </div>

    <!-- User Voting Status -->
    <div v-if="userVote" class="p-4 bg-blue-50 dark:bg-blue-900/20 border-b border-gray-200 dark:border-gray-700">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <div
            :class="userVoteClasses"
            class="w-3 h-3 rounded-full"
          ></div>
          <span class="text-sm font-medium text-gray-700 dark:text-gray-300">
            You voted: {{ userVote.choice }}
          </span>
        </div>
        <div class="text-sm text-gray-600 dark:text-gray-400">
          {{ userVote.votingPower }} {{ proposal.governanceToken }}
        </div>
      </div>
    </div>

    <!-- Action Buttons -->
    <div class="p-6">
      <div class="flex flex-col sm:flex-row gap-3">
        <button
          v-if="canVote"
          @click="$emit('vote', proposal)"
          :disabled="loading"
          class="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          <svg v-if="loading" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          {{ userVote ? 'Change Vote' : 'Vote Now' }}
        </button>

        <button
          @click="$emit('view-details', proposal)"
          class="flex-1 sm:flex-none border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium py-3 px-6 rounded-lg transition-colors"
        >
          View Details
        </button>

        <button
          v-if="showDelegate"
          @click="$emit('delegate', proposal)"
          class="flex-1 sm:flex-none border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium py-3 px-6 rounded-lg transition-colors"
        >
          Delegate
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  proposal: {
    type: Object,
    required: true,
    validator: (proposal) => {
      return proposal &&
        typeof proposal.id !== 'undefined' &&
        typeof proposal.title === 'string' &&
        typeof proposal.description === 'string' &&
        typeof proposal.status === 'string'
    }
  },
  userVote: {
    type: Object,
    default: null
  },
  showDelegate: {
    type: Boolean,
    default: true
  },
  loading: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['vote', 'view-details', 'delegate'])

const totalVotes = computed(() => {
  return props.proposal.votesFor + props.proposal.votesAgainst + props.proposal.votesAbstain
})

const forPercentage = computed(() => {
  if (totalVotes.value === 0) return 0
  return Math.round((props.proposal.votesFor / totalVotes.value) * 100)
})

const againstPercentage = computed(() => {
  if (totalVotes.value === 0) return 0
  return Math.round((props.proposal.votesAgainst / totalVotes.value) * 100)
})

const abstainPercentage = computed(() => {
  if (totalVotes.value === 0) return 0
  return Math.round((props.proposal.votesAbstain / totalVotes.value) * 100)
})

const quorumProgress = computed(() => {
  const totalSupply = props.proposal.totalSupply || 1000000
  return Math.round((totalVotes.value / totalSupply) * 100)
})

const quorumMet = computed(() => {
  return quorumProgress.value >= props.proposal.quorum
})

const statusClasses = computed(() => {
  const baseClasses = 'px-2 py-1 text-xs font-medium rounded-full'
  switch (props.proposal.status.toLowerCase()) {
    case 'active':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
    case 'pending':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
    case 'executed':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
    case 'failed':
      return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
    case 'cancelled':
      return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
  }
})

const priorityClasses = computed(() => {
  if (!props.proposal.priority) return ''
  switch (props.proposal.priority.toLowerCase()) {
    case 'high':
      return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
    case 'medium':
      return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
    case 'low':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
  }
})

const userVoteClasses = computed(() => {
  if (!props.userVote) return ''
  switch (props.userVote.choice.toLowerCase()) {
    case 'for':
      return 'bg-green-500'
    case 'against':
      return 'bg-red-500'
    case 'abstain':
      return 'bg-yellow-500'
    default:
      return 'bg-gray-500'
  }
})

const canVote = computed(() => {
  return props.proposal.status.toLowerCase() === 'active' &&
         new Date(props.proposal.endTime) > new Date()
})

const timeRemaining = computed(() => {
  const now = new Date()
  const end = new Date(props.proposal.endTime)
  const diff = end - now

  if (diff <= 0) return 'Voting ended'

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))

  if (days > 0) return `${days}d ${hours}h`
  if (hours > 0) return `${hours}h ${minutes}m`
  return `${minutes}m`
})

const timeRemainingClass = computed(() => {
  const now = new Date()
  const end = new Date(props.proposal.endTime)
  const diff = end - now
  const hours = diff / (1000 * 60 * 60)

  if (diff <= 0) return 'text-gray-500 dark:text-gray-400'
  if (hours < 24) return 'text-red-600 dark:text-red-400'
  if (hours < 72) return 'text-yellow-600 dark:text-yellow-400'
  return 'text-gray-900 dark:text-white'
})

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

const truncateAddress = (address) => {
  if (!address) return ''
  return `${address.slice(0, 6)}...${address.slice(-4)}`
}
</script>