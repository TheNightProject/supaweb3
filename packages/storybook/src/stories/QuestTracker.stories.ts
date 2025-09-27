import type { Meta, StoryObj } from '@storybook/vue3'
import QuestTracker from '../../../ui/src/components/gaming/QuestTracker.vue'

const meta: Meta<typeof QuestTracker> = {
  title: 'Gaming/QuestTracker',
  component: QuestTracker,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'On-chain quest and achievement system with daily challenges, multi-step quests, and reward tracking.'
      }
    }
  },
  decorators: [
    () => ({
      template: '<div class="min-w-[800px] max-w-[1000px]"><story /></div>',
    }),
  ],
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    quests: [
      {
        id: '1',
        category: 'daily',
        title: 'Complete 5 Trades',
        description: 'Execute 5 successful token swaps',
        icon: '💱',
        progress: 3,
        target: 5,
        status: 'active',
        rewards: {
          xp: 100,
          tokens: 50
        }
      },
      {
        id: '2',
        category: 'daily',
        title: 'Stake Tokens',
        description: 'Stake at least 100 tokens in any pool',
        icon: '🏦',
        progress: 100,
        target: 100,
        status: 'completed',
        rewards: {
          xp: 150,
          tokens: 25
        }
      },
      {
        id: '3',
        category: 'achievement',
        title: 'DeFi Master',
        description: 'Complete all DeFi-related activities',
        icon: '🏆',
        difficulty: 'legendary',
        progress: 2,
        target: 5,
        currentStep: 2,
        status: 'active',
        steps: [
          { description: 'Complete first swap', completed: true },
          { description: 'Provide liquidity', completed: true },
          { description: 'Stake in governance', completed: false },
          { description: 'Create a proposal', completed: false },
          { description: 'Earn 1000 in rewards', completed: false }
        ],
        rewards: {
          xp: 1000,
          achievement: 'DeFi Master Badge',
          nft: true
        }
      },
      {
        id: '4',
        category: 'achievement',
        title: 'NFT Collector',
        description: 'Build an impressive NFT collection',
        icon: '🖼️',
        difficulty: 'hard',
        progress: 8,
        target: 10,
        status: 'active',
        rewards: {
          xp: 500,
          achievement: 'Collector Badge'
        }
      },
      {
        id: '5',
        category: 'special',
        title: 'Hacktober Challenge',
        description: 'Complete special October development challenges',
        icon: '🎃',
        progress: 1,
        target: 3,
        status: 'active',
        endTime: '2024-10-31T23:59:59Z',
        rewards: {
          xp: 2000,
          tokens: 500
        }
      }
    ],
    userStats: {
      totalXP: 12500,
      currentStreak: 15,
      completedToday: 3
    }
  }
}

export const HighActivity: Story = {
  args: {
    ...Default.args,
    userStats: {
      totalXP: 45750,
      currentStreak: 42,
      completedToday: 8
    },
    quests: [
      ...Default.args.quests,
      {
        id: '6',
        category: 'daily',
        title: 'Social Engagement',
        description: 'Like and comment on 10 posts',
        icon: '👥',
        progress: 10,
        target: 10,
        status: 'completed',
        rewards: {
          xp: 75,
          tokens: 10
        }
      },
      {
        id: '7',
        category: 'weekly',
        title: 'Trading Volume',
        description: 'Trade $10,000 worth of tokens this week',
        icon: '📈',
        progress: 7500,
        target: 10000,
        status: 'active',
        rewards: {
          xp: 500,
          tokens: 200
        }
      }
    ]
  }
}

export const Beginner: Story = {
  args: {
    quests: [
      {
        id: '1',
        category: 'daily',
        title: 'First Swap',
        description: 'Complete your first token swap',
        icon: '🔄',
        progress: 0,
        target: 1,
        status: 'active',
        rewards: {
          xp: 50,
          tokens: 10
        }
      },
      {
        id: '2',
        category: 'achievement',
        title: 'Web3 Novice',
        description: 'Learn the basics of Web3',
        icon: '📚',
        difficulty: 'easy',
        progress: 1,
        target: 3,
        currentStep: 1,
        status: 'active',
        steps: [
          { description: 'Connect your wallet', completed: true },
          { description: 'Complete first transaction', completed: false },
          { description: 'Join a community', completed: false }
        ],
        rewards: {
          xp: 200,
          achievement: 'Novice Badge'
        }
      }
    ],
    userStats: {
      totalXP: 50,
      currentStreak: 1,
      completedToday: 0
    }
  }
}