<template>
  <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
    <!-- Header -->
    <div class="p-6 border-b border-gray-200 dark:border-gray-700">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
          {{ title || 'Cast Your Vote' }}
        </h2>
        <div class="text-right">
          <div class="text-sm text-gray-500 dark:text-gray-400">Your Voting Power</div>
          <div class="text-xl font-bold text-blue-600 dark:text-blue-400">
            {{ userVotingPower }} {{ governanceToken }}
          </div>
        </div>
      </div>

      <p v-if="subtitle" class="text-gray-600 dark:text-gray-300">
        {{ subtitle }}
      </p>
    </div>

    <!-- Proposal Summary -->
    <div v-if="proposal" class="p-6 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        Proposal #{{ proposal.id }}: {{ proposal.title }}
      </h3>
      <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
        {{ proposal.description }}
      </p>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
        <div>
          <span class="text-gray-500 dark:text-gray-400">Type:</span>
          <span class="ml-1 font-medium text-gray-900 dark:text-white">{{ proposal.type }}</span>
        </div>
        <div>
          <span class="text-gray-500 dark:text-gray-400">Quorum:</span>
          <span class="ml-1 font-medium text-gray-900 dark:text-white">{{ proposal.quorum }}%</span>
        </div>
        <div>
          <span class="text-gray-500 dark:text-gray-400">Threshold:</span>
          <span class="ml-1 font-medium text-gray-900 dark:text-white">{{ proposal.threshold }}%</span>
        </div>
        <div>
          <span class="text-gray-500 dark:text-gray-400">Ends:</span>
          <span class="ml-1 font-medium text-gray-900 dark:text-white">{{ formatDate(proposal.endTime) }}</span>
        </div>
      </div>
    </div>

    <!-- Delegation Status -->
    <div v-if="delegation" class="p-4 bg-blue-50 dark:bg-blue-900/20 border-b border-gray-200 dark:border-gray-700">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
          <span class="text-sm font-medium text-gray-700 dark:text-gray-300">
            You have delegated your voting power to {{ truncateAddress(delegation.delegate) }}
          </span>
        </div>
        <button
          @click="$emit('revoke-delegation')"
          class="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
        >
          Revoke
        </button>
      </div>
    </div>

    <!-- Vote Options -->
    <div class="p-6">
      <div class="mb-6">
        <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Select Your Vote
        </h4>

        <div class="space-y-3">
          <label
            v-for="option in voteOptions"
            :key="option.value"
            :class="[
              'flex items-center justify-between p-4 border-2 rounded-lg cursor-pointer transition-all',
              selectedVote === option.value
                ? option.selectedClass
                : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
            ]"
          >
            <div class="flex items-center gap-3">
              <input
                type="radio"
                :value="option.value"
                v-model="selectedVote"
                :disabled="!canVote || loading"
                class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <div>
                <div :class="option.textClass" class="font-medium">
                  {{ option.label }}
                </div>
                <div class="text-sm text-gray-500 dark:text-gray-400">
                  {{ option.description }}
                </div>
              </div>
            </div>
            <div v-if="showCurrentResults" class="text-right">
              <div :class="option.textClass" class="font-medium">
                {{ getVoteCount(option.value).toLocaleString() }}
              </div>
              <div class="text-sm text-gray-500 dark:text-gray-400">
                {{ getVotePercentage(option.value) }}%
              </div>
            </div>
          </label>
        </div>
      </div>

      <!-- Vote Reason -->
      <div v-if="showReason" class="mb-6">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Reason for Vote (Optional)
        </label>
        <textarea
          v-model="voteReason"
          :disabled="!canVote || loading"
          placeholder="Explain your vote decision..."
          rows="3"
          class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
        ></textarea>
      </div>

      <!-- Voting Power Allocation -->
      <div v-if="allowPartialVoting" class="mb-6">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Voting Power to Use
        </label>
        <div class="flex items-center gap-4">
          <input
            type="range"
            v-model="votingPowerToUse"
            :min="0"
            :max="userVotingPower"
            :step="0.01"
            :disabled="!canVote || loading"
            class="flex-1"
          />
          <div class="text-sm font-medium text-gray-900 dark:text-white min-w-[100px] text-right">
            {{ votingPowerToUse }} {{ governanceToken }}
          </div>
        </div>
        <div class="text-xs text-gray-500 dark:text-gray-400 mt-1">
          {{ votingPowerPercentage }}% of your total voting power
        </div>
      </div>

      <!-- Delegation Options -->
      <div v-if="showDelegation && !delegation" class="mb-6">
        <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Or Delegate Your Vote
        </h4>

        <div class="space-y-3">
          <div v-if="suggestedDelegates.length > 0">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Suggested Delegates
            </label>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                v-for="delegate in suggestedDelegates"
                :key="delegate.address"
                @click="selectDelegate(delegate)"
                :disabled="loading"
                class="p-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-left transition-colors"
              >
                <div class="font-medium text-gray-900 dark:text-white">
                  {{ delegate.name || truncateAddress(delegate.address) }}
                </div>
                <div class="text-sm text-gray-500 dark:text-gray-400">
                  {{ delegate.votingPower }} {{ governanceToken }} • {{ delegate.participationRate }}% participation
                </div>
              </button>
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Or Enter Delegate Address
            </label>
            <div class="flex gap-2">
              <input
                type="text"
                v-model="customDelegate"
                :disabled="loading"
                placeholder="0x..."
                class="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
              <button
                @click="delegateToCustom"
                :disabled="!customDelegate || loading"
                class="bg-gray-600 hover:bg-gray-700 disabled:bg-gray-400 text-white font-medium py-2 px-4 rounded-lg transition-colors"
              >
                Delegate
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="flex flex-col sm:flex-row gap-3">
        <button
          @click="submitVote"
          :disabled="!canSubmit || loading"
          class="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          <svg v-if="loading" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          {{ hasVoted ? 'Change Vote' : 'Submit Vote' }}
        </button>

        <button
          v-if="hasVoted"
          @click="$emit('view-vote-history')"
          class="flex-1 sm:flex-none border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium py-3 px-6 rounded-lg transition-colors"
        >
          Vote History
        </button>
      </div>

      <!-- Vote Confirmation -->
      <div v-if="showConfirmation" class="mt-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
        <div class="flex items-center gap-2">
          <svg class="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span class="text-sm font-medium text-green-800 dark:text-green-200">
            Vote submitted successfully!
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: 'Cast Your Vote'
  },
  subtitle: {
    type: String,
    default: ''
  },
  proposal: {
    type: Object,
    default: null
  },
  userVotingPower: {
    type: [String, Number],
    default: '0'
  },
  governanceToken: {
    type: String,
    default: 'GOV'
  },
  delegation: {
    type: Object,
    default: null
  },
  suggestedDelegates: {
    type: Array,
    default: () => []
  },
  showReason: {
    type: Boolean,
    default: true
  },
  showDelegation: {
    type: Boolean,
    default: true
  },
  showCurrentResults: {
    type: Boolean,
    default: false
  },
  allowPartialVoting: {
    type: Boolean,
    default: false
  },
  hasVoted: {
    type: Boolean,
    default: false
  },
  canVote: {
    type: Boolean,
    default: true
  },
  loading: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['vote', 'delegate', 'revoke-delegation', 'view-vote-history'])

const selectedVote = ref('')
const voteReason = ref('')
const votingPowerToUse = ref(props.userVotingPower)
const customDelegate = ref('')
const showConfirmation = ref(false)

const voteOptions = [
  {
    value: 'for',
    label: 'For',
    description: 'Vote in favor of this proposal',
    textClass: 'text-green-600 dark:text-green-400',
    selectedClass: 'border-green-300 bg-green-50 dark:border-green-600 dark:bg-green-900/20'
  },
  {
    value: 'against',
    label: 'Against',
    description: 'Vote against this proposal',
    textClass: 'text-red-600 dark:text-red-400',
    selectedClass: 'border-red-300 bg-red-50 dark:border-red-600 dark:bg-red-900/20'
  },
  {
    value: 'abstain',
    label: 'Abstain',
    description: 'Abstain from voting but count toward quorum',
    textClass: 'text-yellow-600 dark:text-yellow-400',
    selectedClass: 'border-yellow-300 bg-yellow-50 dark:border-yellow-600 dark:bg-yellow-900/20'
  }
]

const canSubmit = computed(() => {
  return selectedVote.value && props.canVote && !props.loading
})

const votingPowerPercentage = computed(() => {
  if (!props.userVotingPower || props.userVotingPower === 0) return 0
  return Math.round((votingPowerToUse.value / props.userVotingPower) * 100)
})

const getVoteCount = (option) => {
  if (!props.proposal) return 0
  switch (option) {
    case 'for': return props.proposal.votesFor || 0
    case 'against': return props.proposal.votesAgainst || 0
    case 'abstain': return props.proposal.votesAbstain || 0
    default: return 0
  }
}

const getVotePercentage = (option) => {
  if (!props.proposal) return 0
  const total = (props.proposal.votesFor || 0) + (props.proposal.votesAgainst || 0) + (props.proposal.votesAbstain || 0)
  if (total === 0) return 0
  return Math.round((getVoteCount(option) / total) * 100)
}

const submitVote = () => {
  const voteData = {
    choice: selectedVote.value,
    reason: voteReason.value,
    votingPower: props.allowPartialVoting ? votingPowerToUse.value : props.userVotingPower,
    proposal: props.proposal
  }

  emit('vote', voteData)
  showConfirmation.value = true

  setTimeout(() => {
    showConfirmation.value = false
  }, 3000)
}

const selectDelegate = (delegate) => {
  emit('delegate', {
    delegate: delegate.address,
    delegateName: delegate.name,
    proposal: props.proposal
  })
}

const delegateToCustom = () => {
  if (customDelegate.value) {
    emit('delegate', {
      delegate: customDelegate.value,
      proposal: props.proposal
    })
  }
}

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