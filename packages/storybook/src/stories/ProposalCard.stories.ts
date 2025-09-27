import type { Meta, StoryObj } from '@storybook/vue3'
import ProposalCard from '../../../ui/src/components/governance/ProposalCard.vue'

const meta: Meta<typeof ProposalCard> = {
  title: 'Governance/ProposalCard',
  component: ProposalCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A comprehensive governance proposal card with voting progress, quorum tracking, and user interaction capabilities.'
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
    proposal: {
      control: 'object',
      description: 'Proposal data object'
    },
    userVote: {
      control: 'object',
      description: 'User current vote if any'
    },
    showDelegate: {
      control: 'boolean',
      description: 'Show delegation button'
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
    proposal: {
      id: '42',
      title: 'Increase Treasury Allocation for Developer Grants',
      description: 'This proposal aims to allocate an additional 500,000 SUPA tokens from the treasury to fund developer grants for building ecosystem tools and applications.',
      type: 'Treasury',
      status: 'Active',
      proposer: '0x742d35cc6394c3f6cbbe21c6f53e85c40c614c5e',
      proposerVotingPower: '25,000',
      governanceToken: 'SUPA',
      quorum: 10,
      threshold: 50,
      votesFor: 125000,
      votesAgainst: 45000,
      votesAbstain: 15000,
      totalSupply: 2500000,
      startTime: '2024-09-25T10:00:00Z',
      endTime: '2024-10-02T10:00:00Z',
      createdAt: '2024-09-24T15:30:00Z'
    },
    userVote: null,
    showDelegate: true,
    loading: false
  }
}

export const UserVoted: Story = {
  args: {
    ...Default.args,
    userVote: {
      choice: 'For',
      votingPower: '1,250',
      timestamp: '2024-09-26T14:20:00Z'
    }
  }
}

export const HighPriority: Story = {
  args: {
    ...Default.args,
    proposal: {
      ...Default.args.proposal,
      title: 'Emergency Protocol Upgrade',
      description: 'Critical security update required to address recently discovered vulnerability in the staking contract.',
      priority: 'High',
      type: 'Security',
      status: 'Active',
      votesFor: 850000,
      votesAgainst: 25000,
      votesAbstain: 5000,
      endTime: '2024-09-30T23:59:59Z'
    }
  }
}

export const QuorumNotMet: Story = {
  args: {
    ...Default.args,
    proposal: {
      ...Default.args.proposal,
      title: 'Update Governance Parameters',
      description: 'Proposal to adjust voting thresholds and quorum requirements for future proposals.',
      votesFor: 45000,
      votesAgainst: 12000,
      votesAbstain: 3000,
      quorum: 15
    }
  }
}

export const ClosingProposal: Story = {
  args: {
    ...Default.args,
    proposal: {
      ...Default.args.proposal,
      title: 'Community Fund Reallocation',
      description: 'Reallocate unused funds from previous grants to marketing and partnership initiatives.',
      endTime: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(), // 2 hours from now
      votesFor: 185000,
      votesAgainst: 95000,
      votesAbstain: 25000
    }
  }
}

export const ExecutedProposal: Story = {
  args: {
    ...Default.args,
    proposal: {
      ...Default.args.proposal,
      title: 'Increase Block Rewards',
      description: 'Successfully executed proposal to increase validator block rewards by 15%.',
      status: 'Executed',
      endTime: '2024-09-20T10:00:00Z',
      votesFor: 920000,
      votesAgainst: 85000,
      votesAbstain: 45000
    },
    userVote: {
      choice: 'For',
      votingPower: '2,500',
      timestamp: '2024-09-18T09:15:00Z'
    }
  }
}

export const FailedProposal: Story = {
  args: {
    ...Default.args,
    proposal: {
      ...Default.args.proposal,
      title: 'Reduce Transaction Fees',
      description: 'Failed proposal to reduce network transaction fees due to insufficient support.',
      status: 'Failed',
      endTime: '2024-09-15T10:00:00Z',
      votesFor: 65000,
      votesAgainst: 285000,
      votesAbstain: 35000
    }
  }
}

export const PendingProposal: Story = {
  args: {
    ...Default.args,
    proposal: {
      ...Default.args.proposal,
      title: 'NFT Marketplace Integration',
      description: 'Proposal to integrate native NFT marketplace functionality into the protocol.',
      status: 'Pending',
      startTime: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // 1 day from now
      endTime: new Date(Date.now() + 8 * 24 * 60 * 60 * 1000).toISOString(), // 8 days from now
      votesFor: 0,
      votesAgainst: 0,
      votesAbstain: 0
    }
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
    components: { ProposalCard },
    template: `
      <div class="space-y-6">
        <div class="text-center">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Interactive Proposal Card
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Vote, view details, and interact with governance proposals
          </p>
        </div>

        <ProposalCard
          :proposal="proposal"
          :user-vote="userVote"
          :loading="loading"
          :show-delegate="true"
          @vote="handleVote"
          @view-details="handleViewDetails"
          @delegate="handleDelegate"
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
          title: 'Interactive Treasury Proposal',
          description: 'This is an interactive proposal where you can test voting functionality and see real-time updates.',
          type: 'Treasury',
          status: 'Active',
          proposer: '0x742d35cc6394c3f6cbbe21c6f53e85c40c614c5e',
          proposerVotingPower: '25,000',
          governanceToken: 'SUPA',
          quorum: 10,
          threshold: 50,
          votesFor: 125000,
          votesAgainst: 45000,
          votesAbstain: 15000,
          totalSupply: 2500000,
          startTime: '2024-09-25T10:00:00Z',
          endTime: '2024-10-02T10:00:00Z',
          createdAt: '2024-09-24T15:30:00Z'
        },
        userVote: null,
        loading: false,
        lastAction: null
      }
    },
    methods: {
      async handleVote(proposal) {
        this.loading = true
        this.lastAction = `Opening vote interface for proposal #${proposal.id}...`

        setTimeout(() => {
          // Simulate vote submission
          this.userVote = {
            choice: 'For',
            votingPower: '1,250',
            timestamp: new Date().toISOString()
          }

          // Update vote counts
          this.proposal.votesFor += 1250

          this.loading = false
          this.lastAction = `Successfully voted "For" on proposal #${proposal.id}!`
        }, 2000)
      },

      handleViewDetails(proposal) {
        this.lastAction = `Viewing detailed information for proposal #${proposal.id}: "${proposal.title}"`
      },

      handleDelegate(proposal) {
        this.lastAction = `Opening delegation interface for proposal #${proposal.id}`
      }
    }
  })
}

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' }
  },
  render: () => ({
    components: { ProposalCard },
    template: `
      <div class="dark">
        <div class="min-h-screen bg-gray-900 p-8">
          <ProposalCard
            :proposal="{
              id: '42',
              title: '🌙 Night Mode Governance',
              description: 'Beautiful dark theme proposal card with comprehensive voting interface and real-time progress tracking.',
              type: 'UI/UX',
              status: 'Active',
              priority: 'Medium',
              proposer: '0x742d35cc6394c3f6cbbe21c6f53e85c40c614c5e',
              proposerVotingPower: '25,000',
              governanceToken: 'SUPA',
              quorum: 10,
              threshold: 50,
              votesFor: 125000,
              votesAgainst: 45000,
              votesAbstain: 15000,
              totalSupply: 2500000,
              startTime: '2024-09-25T10:00:00Z',
              endTime: '2024-10-02T10:00:00Z',
              createdAt: '2024-09-24T15:30:00Z'
            }"
            :user-vote="{
              choice: 'For',
              votingPower: '2,500',
              timestamp: '2024-09-26T14:20:00Z'
            }"
            :show-delegate="true"
          />
        </div>
      </div>
    `
  })
}