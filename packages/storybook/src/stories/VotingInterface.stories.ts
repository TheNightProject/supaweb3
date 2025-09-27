import type { Meta, StoryObj } from '@storybook/vue3'
import VotingInterface from '../../../ui/src/components/governance/VotingInterface.vue'

const meta: Meta<typeof VotingInterface> = {
  title: 'Governance/VotingInterface',
  component: VotingInterface,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A comprehensive voting interface with delegation options, voting power management, and reason capture for governance proposals.'
      }
    }
  },
  decorators: [
    () => ({
      template: '<div class="min-w-[600px] max-w-[800px]"><story /></div>',
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Interface title'
    },
    subtitle: {
      control: 'text',
      description: 'Interface subtitle'
    },
    proposal: {
      control: 'object',
      description: 'Proposal data'
    },
    userVotingPower: {
      control: 'text',
      description: 'User voting power amount'
    },
    governanceToken: {
      control: 'text',
      description: 'Governance token symbol'
    },
    delegation: {
      control: 'object',
      description: 'Current delegation status'
    },
    showReason: {
      control: 'boolean',
      description: 'Show vote reason input'
    },
    showDelegation: {
      control: 'boolean',
      description: 'Show delegation options'
    },
    showCurrentResults: {
      control: 'boolean',
      description: 'Show current voting results'
    },
    allowPartialVoting: {
      control: 'boolean',
      description: 'Allow partial voting power usage'
    },
    hasVoted: {
      control: 'boolean',
      description: 'User has already voted'
    },
    canVote: {
      control: 'boolean',
      description: 'User can vote on proposal'
    },
    loading: {
      control: 'boolean',
      description: 'Loading state'
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Cast Your Vote',
    subtitle: 'Participate in governance by voting on this proposal',
    proposal: {
      id: '42',
      title: 'Increase Developer Grant Funding',
      description: 'Allocate additional treasury funds to support ecosystem development through developer grants and hackathons.',
      type: 'Treasury',
      quorum: 10,
      threshold: 50,
      endTime: '2024-10-02T10:00:00Z',
      votesFor: 125000,
      votesAgainst: 45000,
      votesAbstain: 15000
    },
    userVotingPower: '2500',
    governanceToken: 'SUPA',
    delegation: null,
    suggestedDelegates: [
      {
        address: '0x1234567890abcdef1234567890abcdef12345678',
        name: 'Core Dev Team',
        votingPower: '125,000',
        participationRate: '95'
      },
      {
        address: '0xabcdef1234567890abcdef1234567890abcdef12',
        name: 'Community Council',
        votingPower: '89,500',
        participationRate: '87'
      }
    ],
    showReason: true,
    showDelegation: true,
    showCurrentResults: false,
    allowPartialVoting: false,
    hasVoted: false,
    canVote: true,
    loading: false
  }
}

export const WithResults: Story = {
  args: {
    ...Default.args,
    title: 'Vote on Active Proposal',
    subtitle: 'See current results and cast your vote',
    showCurrentResults: true
  }
}

export const AlreadyVoted: Story = {
  args: {
    ...Default.args,
    title: 'Change Your Vote',
    subtitle: 'You have already voted on this proposal. You can change your vote if needed.',
    hasVoted: true,
    showCurrentResults: true
  }
}

export const WithDelegation: Story = {
  args: {
    ...Default.args,
    title: 'Voting Delegated',
    subtitle: 'Your voting power has been delegated. You can revoke delegation to vote directly.',
    delegation: {
      delegate: '0x1234567890abcdef1234567890abcdef12345678',
      delegateName: 'Core Dev Team',
      delegatedPower: '2500'
    },
    canVote: false
  }
}

export const PartialVoting: Story = {
  args: {
    ...Default.args,
    title: 'Advanced Voting Options',
    subtitle: 'Use partial voting power and delegate the rest',
    allowPartialVoting: true,
    userVotingPower: '10000'
  }
}

export const NoVotingPower: Story = {
  args: {
    ...Default.args,
    title: 'Insufficient Voting Power',
    subtitle: 'You need governance tokens to participate in voting',
    userVotingPower: '0',
    canVote: false,
    showDelegation: false
  }
}

export const VotingClosed: Story = {
  args: {
    ...Default.args,
    title: 'Voting Period Ended',
    subtitle: 'This proposal voting period has concluded',
    proposal: {
      ...Default.args.proposal,
      endTime: '2024-09-20T10:00:00Z'
    },
    canVote: false,
    showCurrentResults: true
  }
}

export const Loading: Story = {
  args: {
    ...Default.args,
    loading: true
  }
}

export const Interactive: Story = {
  render: () => ({
    components: { VotingInterface },
    template: `
      <div class="space-y-6">
        <div class="text-center">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Interactive Voting Interface
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Cast votes, delegate voting power, and manage governance participation
          </p>
        </div>

        <VotingInterface
          :proposal="proposal"
          :user-voting-power="userVotingPower"
          :governance-token="governanceToken"
          :delegation="delegation"
          :suggested-delegates="suggestedDelegates"
          :show-reason="true"
          :show-delegation="true"
          :show-current-results="showCurrentResults"
          :allow-partial-voting="allowPartialVoting"
          :has-voted="hasVoted"
          :can-vote="canVote"
          :loading="loading"
          title="Interactive Governance Vote"
          subtitle="Test all voting features in this interactive example"
          @vote="handleVote"
          @delegate="handleDelegate"
          @revoke-delegation="handleRevokeDelegation"
          @view-vote-history="handleViewVoteHistory"
        />

        <div v-if="lastAction" class="rounded-lg bg-gray-100 p-3 dark:bg-gray-800">
          <div class="text-sm font-medium text-gray-700 dark:text-gray-300">Last Action:</div>
          <pre class="mt-1 text-xs text-gray-600 dark:text-gray-400">{{ lastAction }}</pre>
        </div>
      </div>
    `,
    data() {
      return {
        proposal: {
          id: '42',
          title: 'Interactive Governance Proposal',
          description: 'Test proposal for demonstrating voting functionality with real-time updates and interaction capabilities.',
          type: 'Treasury',
          quorum: 10,
          threshold: 50,
          endTime: '2024-10-02T10:00:00Z',
          votesFor: 125000,
          votesAgainst: 45000,
          votesAbstain: 15000
        },
        userVotingPower: '2500',
        governanceToken: 'SUPA',
        delegation: null,
        suggestedDelegates: [
          {
            address: '0x1234567890abcdef1234567890abcdef12345678',
            name: 'Core Dev Team',
            votingPower: '125,000',
            participationRate: '95'
          },
          {
            address: '0xabcdef1234567890abcdef1234567890abcdef12',
            name: 'Community Council',
            votingPower: '89,500',
            participationRate: '87'
          }
        ],
        showCurrentResults: false,
        allowPartialVoting: false,
        hasVoted: false,
        canVote: true,
        loading: false,
        lastAction: null
      }
    },
    methods: {
      async handleVote(voteData) {
        this.loading = true
        this.lastAction = `Submitting vote: ${voteData.choice} with ${voteData.votingPower} ${this.governanceToken}...`

        setTimeout(() => {
          // Update proposal vote counts
          const voteAmount = parseFloat(voteData.votingPower)

          switch (voteData.choice) {
            case 'for':
              this.proposal.votesFor += voteAmount
              break
            case 'against':
              this.proposal.votesAgainst += voteAmount
              break
            case 'abstain':
              this.proposal.votesAbstain += voteAmount
              break
          }

          this.hasVoted = true
          this.showCurrentResults = true
          this.loading = false

          this.lastAction = `Successfully voted "${voteData.choice}" with ${voteData.votingPower} ${this.governanceToken}!${voteData.reason ? ` Reason: "${voteData.reason}"` : ''}`
        }, 2500)
      },

      async handleDelegate(delegationData) {
        this.loading = true
        this.lastAction = `Delegating voting power to ${delegationData.delegateName || delegationData.delegate}...`

        setTimeout(() => {
          this.delegation = {
            delegate: delegationData.delegate,
            delegateName: delegationData.delegateName,
            delegatedPower: this.userVotingPower
          }
          this.canVote = false
          this.loading = false
          this.lastAction = `Successfully delegated ${this.userVotingPower} ${this.governanceToken} to ${delegationData.delegateName || delegationData.delegate}!`
        }, 2000)
      },

      async handleRevokeDelegation() {
        this.loading = true
        this.lastAction = `Revoking delegation...`

        setTimeout(() => {
          this.delegation = null
          this.canVote = true
          this.loading = false
          this.lastAction = `Successfully revoked delegation! You can now vote directly.`
        }, 1500)
      },

      handleViewVoteHistory() {
        this.lastAction = `Opening vote history for user...`
      }
    }
  })
}

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' }
  },
  render: () => ({
    components: { VotingInterface },
    template: `
      <div class="dark">
        <div class="min-h-screen bg-gray-900 p-8">
          <VotingInterface
            :proposal="{
              id: '42',
              title: '🌙 Dark Mode Governance',
              description: 'Beautiful dark theme voting interface with comprehensive delegation and voting power management.',
              type: 'UI/UX',
              quorum: 10,
              threshold: 50,
              endTime: '2024-10-02T10:00:00Z',
              votesFor: 125000,
              votesAgainst: 45000,
              votesAbstain: 15000
            }"
            user-voting-power="2500"
            governance-token="SUPA"
            :suggested-delegates="[{
              address: '0x1234567890abcdef1234567890abcdef12345678',
              name: 'Night Owl Council',
              votingPower: '125,000',
              participationRate: '98'
            }]"
            title="🌙 Night Mode Voting"
            subtitle="Elegant dark theme governance interface"
            :show-reason="true"
            :show-delegation="true"
            :show-current-results="true"
            :can-vote="true"
          />
        </div>
      </div>
    `
  })
}