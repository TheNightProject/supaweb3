import type { Meta, StoryObj } from '@storybook/vue3'
import DAOMembership from '../../../ui/src/components/governance/DAOMembership.vue'

const meta: Meta<typeof DAOMembership> = {
  title: 'Governance/DAOMembership',
  component: DAOMembership,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A comprehensive DAO membership dashboard showing voting power, benefits, participation metrics, and delegation status.'
      }
    }
  },
  decorators: [
    () => ({
      template: '<div class="min-w-[700px] max-w-[900px]"><story /></div>',
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Dashboard title'
    },
    subtitle: {
      control: 'text',
      description: 'Dashboard subtitle'
    },
    membershipStatus: {
      control: 'select',
      options: ['Active', 'Inactive', 'Pending', 'Banned'],
      description: 'Current membership status'
    },
    memberSince: {
      control: 'text',
      description: 'Membership start date'
    },
    votingPower: {
      control: 'text',
      description: 'User voting power amount'
    },
    governanceToken: {
      control: 'text',
      description: 'Governance token symbol'
    },
    membershipTier: {
      control: 'text',
      description: 'Current membership tier'
    },
    participationRate: {
      control: 'number',
      description: 'Voting participation percentage'
    },
    benefits: {
      control: 'object',
      description: 'Available membership benefits'
    },
    delegation: {
      control: 'object',
      description: 'Delegation status and information'
    },
    canCreateProposal: {
      control: 'boolean',
      description: 'User can create proposals'
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
    title: 'DAO Membership',
    subtitle: 'Manage your governance participation and benefits',
    membershipStatus: 'Active',
    memberSince: '2024-03-15T10:00:00Z',
    votingPower: '25000',
    governanceToken: 'SUPA',
    totalSupply: '2500000',
    membershipTier: 'Silver',
    nextTier: 'Gold',
    nextTierRequirement: '25,000 more SUPA',
    participationRate: '78',
    votedProposals: '14',
    totalProposals: '18',
    benefits: [
      {
        id: '1',
        title: 'Voting Rights',
        description: 'Vote on all governance proposals',
        available: true
      },
      {
        id: '2',
        title: 'Proposal Creation',
        description: 'Create and submit proposals for community vote',
        available: true
      },
      {
        id: '3',
        title: 'Premium Support',
        description: 'Priority customer support and technical assistance',
        available: true
      },
      {
        id: '4',
        title: 'Exclusive Events',
        description: 'Access to member-only events and AMAs',
        available: false,
        requirement: 'Gold tier membership'
      },
      {
        id: '5',
        title: 'Early Access',
        description: 'Beta testing access for new features',
        available: false,
        requirement: 'Gold tier membership'
      },
      {
        id: '6',
        title: 'Revenue Sharing',
        description: 'Share in protocol revenue distribution',
        available: false,
        requirement: 'Platinum tier membership'
      }
    ],
    daoStats: {
      totalMembers: 12340,
      activeProposals: 5,
      treasuryValue: '15.2M',
      avgParticipation: 65
    },
    delegation: {
      isDelegating: false,
      delegate: null,
      delegateName: null,
      delegatedPower: '0',
      totalDelegated: '8500',
      delegatedTo: [
        {
          address: '0x1234567890abcdef1234567890abcdef12345678',
          name: 'Community Dev',
          amount: '2500'
        },
        {
          address: '0xabcdef1234567890abcdef1234567890abcdef12',
          name: null,
          amount: '6000'
        }
      ]
    },
    recentActivity: [
      {
        id: '1',
        type: 'vote',
        description: 'Voted "For" on Treasury Allocation Proposal #42',
        timestamp: '2024-09-28T14:30:00Z',
        value: '2,500 SUPA'
      },
      {
        id: '2',
        type: 'proposal',
        description: 'Created proposal "Update Governance Parameters"',
        timestamp: '2024-09-25T09:15:00Z'
      },
      {
        id: '3',
        type: 'delegation',
        description: 'Received delegation from 0x1234...5678',
        timestamp: '2024-09-22T16:45:00Z',
        value: '2,500 SUPA'
      },
      {
        id: '4',
        type: 'reward',
        description: 'Received participation rewards',
        timestamp: '2024-09-20T12:00:00Z',
        value: '150 SUPA'
      }
    ],
    canCreateProposal: true,
    loading: false
  }
}

export const NewMember: Story = {
  args: {
    ...Default.args,
    title: 'Welcome to the DAO',
    subtitle: 'Complete your membership setup and start participating',
    membershipStatus: 'Pending',
    memberSince: null,
    votingPower: '1000',
    membershipTier: 'Bronze',
    nextTier: 'Silver',
    nextTierRequirement: '9,000 more SUPA',
    participationRate: '0',
    votedProposals: '0',
    totalProposals: '18',
    benefits: [
      {
        id: '1',
        title: 'Voting Rights',
        description: 'Vote on all governance proposals',
        available: false,
        requirement: 'Complete membership verification'
      },
      {
        id: '2',
        title: 'Proposal Creation',
        description: 'Create and submit proposals for community vote',
        available: false,
        requirement: 'Silver tier membership'
      }
    ],
    delegation: {
      isDelegating: false,
      delegate: null,
      delegateName: null,
      delegatedPower: '0',
      totalDelegated: '0',
      delegatedTo: []
    },
    recentActivity: [],
    canCreateProposal: false
  }
}

export const PowerUser: Story = {
  args: {
    ...Default.args,
    title: 'Power User Dashboard',
    subtitle: 'Elite member with maximum governance participation',
    membershipStatus: 'Active',
    memberSince: '2023-08-10T10:00:00Z',
    votingPower: '185000',
    membershipTier: 'Platinum',
    nextTier: null,
    nextTierRequirement: null,
    participationRate: '96',
    votedProposals: '47',
    totalProposals: '49',
    benefits: [
      {
        id: '1',
        title: 'Voting Rights',
        description: 'Vote on all governance proposals',
        available: true
      },
      {
        id: '2',
        title: 'Proposal Creation',
        description: 'Create and submit proposals for community vote',
        available: true
      },
      {
        id: '3',
        title: 'Premium Support',
        description: 'Priority customer support and technical assistance',
        available: true
      },
      {
        id: '4',
        title: 'Exclusive Events',
        description: 'Access to member-only events and AMAs',
        available: true
      },
      {
        id: '5',
        title: 'Early Access',
        description: 'Beta testing access for new features',
        available: true
      },
      {
        id: '6',
        title: 'Revenue Sharing',
        description: 'Share in protocol revenue distribution',
        available: true
      },
      {
        id: '7',
        title: 'Governance Council',
        description: 'Eligible for governance council nomination',
        available: true
      }
    ],
    delegation: {
      isDelegating: false,
      delegate: null,
      delegateName: null,
      delegatedPower: '0',
      totalDelegated: '45500',
      delegatedTo: [
        {
          address: '0x1111111111111111111111111111111111111111',
          name: 'DevTeam Lead',
          amount: '15000'
        },
        {
          address: '0x2222222222222222222222222222222222222222',
          name: 'Community Manager',
          amount: '12500'
        },
        {
          address: '0x3333333333333333333333333333333333333333',
          name: null,
          amount: '18000'
        }
      ]
    }
  }
}

export const DelegatedMember: Story = {
  args: {
    ...Default.args,
    title: 'Delegated Governance',
    subtitle: 'Your voting power is currently delegated',
    delegation: {
      isDelegating: true,
      delegate: '0x742d35cc6394c3f6cbbe21c6f53e85c40c614c5e',
      delegateName: 'Core Development Team',
      delegatedPower: '25000',
      totalDelegated: '0',
      delegatedTo: []
    }
  }
}

export const InactiveMember: Story = {
  args: {
    ...Default.args,
    title: 'Reactivate Membership',
    subtitle: 'Your membership is currently inactive',
    membershipStatus: 'Inactive',
    participationRate: '15',
    votedProposals: '3',
    totalProposals: '20',
    benefits: [
      {
        id: '1',
        title: 'Voting Rights',
        description: 'Vote on all governance proposals',
        available: false,
        requirement: 'Reactivate membership'
      },
      {
        id: '2',
        title: 'Proposal Creation',
        description: 'Create and submit proposals for community vote',
        available: false,
        requirement: 'Active membership status'
      }
    ],
    canCreateProposal: false
  }
}

export const NonMember: Story = {
  args: {
    ...Default.args,
    title: 'Join the DAO',
    subtitle: 'Become a member to participate in governance',
    membershipStatus: 'Inactive',
    memberSince: null,
    votingPower: '0',
    membershipTier: 'None',
    nextTier: 'Bronze',
    nextTierRequirement: 'Acquire 1,000 SUPA tokens',
    participationRate: '0',
    votedProposals: '0',
    totalProposals: '18',
    benefits: [],
    delegation: null,
    recentActivity: [],
    canCreateProposal: false
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
    components: { DAOMembership },
    template: `
      <div class="space-y-6">
        <div class="text-center">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Interactive DAO Membership
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Manage membership, voting power, and governance participation
          </p>
        </div>

        <DAOMembership
          :membership-status="membershipStatus"
          :member-since="memberSince"
          :voting-power="votingPower"
          :governance-token="governanceToken"
          :total-supply="totalSupply"
          :membership-tier="membershipTier"
          :next-tier="nextTier"
          :next-tier-requirement="nextTierRequirement"
          :participation-rate="participationRate"
          :voted-proposals="votedProposals"
          :total-proposals="totalProposals"
          :benefits="benefits"
          :dao-stats="daoStats"
          :delegation="delegation"
          :recent-activity="recentActivity"
          :can-create-proposal="canCreateProposal"
          :loading="loading"
          title="Interactive DAO Dashboard"
          subtitle="Test all membership features and interactions"
          @join-dao="handleJoinDao"
          @increase-voting-power="handleIncreaseVotingPower"
          @view-proposals="handleViewProposals"
          @create-proposal="handleCreateProposal"
          @manage-delegation="handleManageDelegation"
          @revoke-delegation="handleRevokeDelegation"
        />

        <div v-if="lastAction" class="rounded-lg bg-gray-100 p-3 dark:bg-gray-800">
          <div class="text-sm font-medium text-gray-700 dark:text-gray-300">Last Action:</div>
          <pre class="mt-1 text-xs text-gray-600 dark:text-gray-400">{{ lastAction }}</pre>
        </div>
      </div>
    `,
    data() {
      return {
        membershipStatus: 'Active',
        memberSince: '2024-03-15T10:00:00Z',
        votingPower: '25000',
        governanceToken: 'SUPA',
        totalSupply: '2500000',
        membershipTier: 'Silver',
        nextTier: 'Gold',
        nextTierRequirement: '25,000 more SUPA',
        participationRate: '78',
        votedProposals: '14',
        totalProposals: '18',
        benefits: [
          {
            id: '1',
            title: 'Voting Rights',
            description: 'Vote on all governance proposals',
            available: true
          },
          {
            id: '2',
            title: 'Proposal Creation',
            description: 'Create and submit proposals for community vote',
            available: true
          },
          {
            id: '3',
            title: 'Premium Support',
            description: 'Priority customer support and technical assistance',
            available: true
          },
          {
            id: '4',
            title: 'Exclusive Events',
            description: 'Access to member-only events and AMAs',
            available: false,
            requirement: 'Gold tier membership'
          }
        ],
        daoStats: {
          totalMembers: 12340,
          activeProposals: 5,
          treasuryValue: '15.2M',
          avgParticipation: 65
        },
        delegation: {
          isDelegating: false,
          delegate: null,
          delegateName: null,
          delegatedPower: '0',
          totalDelegated: '8500',
          delegatedTo: [
            {
              address: '0x1234567890abcdef1234567890abcdef12345678',
              name: 'Community Dev',
              amount: '2500'
            }
          ]
        },
        recentActivity: [
          {
            id: '1',
            type: 'vote',
            description: 'Voted "For" on Treasury Allocation Proposal #42',
            timestamp: '2024-09-28T14:30:00Z',
            value: '2,500 SUPA'
          }
        ],
        canCreateProposal: true,
        loading: false,
        lastAction: null
      }
    },
    methods: {
      async handleJoinDao() {
        this.loading = true
        this.lastAction = `Joining DAO and acquiring membership...`

        setTimeout(() => {
          this.membershipStatus = 'Active'
          this.memberSince = new Date().toISOString()
          this.votingPower = '1000'
          this.membershipTier = 'Bronze'
          this.loading = false
          this.lastAction = `Successfully joined the DAO! Welcome aboard!`
        }, 3000)
      },

      async handleIncreaseVotingPower() {
        this.loading = true
        this.lastAction = `Increasing voting power through token acquisition...`

        setTimeout(() => {
          const currentPower = parseFloat(this.votingPower)
          const increase = 5000
          this.votingPower = (currentPower + increase).toString()

          if (currentPower < 50000 && (currentPower + increase) >= 50000) {
            this.membershipTier = 'Gold'
            this.nextTier = 'Platinum'
            this.nextTierRequirement = '100,000 more SUPA'
          }

          this.loading = false
          this.lastAction = `Successfully increased voting power by ${increase} ${this.governanceToken}!`
        }, 2500)
      },

      handleViewProposals() {
        this.lastAction = `Opening governance proposals list...`
      },

      handleCreateProposal() {
        this.lastAction = `Opening proposal creation interface...`
      },

      async handleManageDelegation() {
        this.lastAction = `Opening delegation management interface...`
      },

      async handleRevokeDelegation() {
        this.loading = true
        this.lastAction = `Revoking current delegation...`

        setTimeout(() => {
          this.delegation.isDelegating = false
          this.delegation.delegate = null
          this.delegation.delegateName = null
          this.delegation.delegatedPower = '0'
          this.loading = false
          this.lastAction = `Successfully revoked delegation! You can now vote directly.`
        }, 2000)
      }
    }
  })
}

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' }
  },
  render: () => ({
    components: { DAOMembership },
    template: `
      <div class="dark">
        <div class="min-h-screen bg-gray-900 p-8">
          <DAOMembership
            membership-status="Active"
            member-since="2024-03-15T10:00:00Z"
            voting-power="25000"
            governance-token="SUPA"
            total-supply="2500000"
            membership-tier="Gold"
            participation-rate="89"
            voted-proposals="16"
            total-proposals="18"
            :benefits="[{
              id: '1',
              title: '🌙 Night Voting Rights',
              description: 'Vote on all governance proposals in beautiful dark mode',
              available: true
            }, {
              id: '2',
              title: '🚀 Dark Theme Proposals',
              description: 'Create elegant dark-themed proposals',
              available: true
            }]"
            :dao-stats="{
              totalMembers: 12340,
              activeProposals: 5,
              treasuryValue: '15.2M',
              avgParticipation: 65
            }"
            :delegation="{
              isDelegating: false,
              totalDelegated: '8500',
              delegatedTo: [{
                address: '0x1234567890abcdef1234567890abcdef12345678',
                name: 'Night Owl Dev',
                amount: '2500'
              }]
            }"
            :can-create-proposal="true"
            title="🌙 Night Mode DAO"
            subtitle="Beautiful dark theme governance dashboard"
          />
        </div>
      </div>
    `
  })
}