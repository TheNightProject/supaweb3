import type { Meta, StoryObj } from '@storybook/vue3'
import SocialProfile from '../../../ui/src/components/social/SocialProfile.vue'

const meta: Meta<typeof SocialProfile> = {
  title: 'Social/SocialProfile',
  component: SocialProfile,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Web3 social profile component featuring achievements, activity feeds, and reputation tracking.'
      }
    }
  },
  decorators: [
    () => ({
      template: '<div class="min-w-[600px] max-w-[800px]"><story /></div>',
    }),
  ],
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    profile: {
      id: 'user123',
      username: 'web3builder',
      displayName: 'Web3 Builder',
      bio: 'Building the future of decentralized web. Passionate about DeFi, NFTs, and blockchain technology.',
      avatar: 'https://via.placeholder.com/150x150?text=W3B',
      verified: true,
      level: 42,
      walletAddress: '0x742d35cc6394c3f6cbbe21c6f53e85c40c614c5e',
      isFollowing: false,
      stats: {
        followers: 1250,
        following: 387,
        achievements: 23,
        reputation: 8540
      }
    },
    achievements: [
      {
        id: '1',
        name: 'Early Adopter',
        description: 'Joined the platform in the first month',
        icon: '🚀'
      },
      {
        id: '2',
        name: 'DeFi Expert',
        description: 'Completed 100+ DeFi transactions',
        icon: '💰'
      },
      {
        id: '3',
        name: 'NFT Collector',
        description: 'Owns 50+ unique NFTs',
        icon: '🖼️'
      },
      {
        id: '4',
        name: 'Community Builder',
        description: 'Helped 1000+ users',
        icon: '👥'
      },
      {
        id: '5',
        name: 'Governance Participant',
        description: 'Voted on 25+ proposals',
        icon: '🗳️'
      },
      {
        id: '6',
        name: 'Bug Hunter',
        description: 'Reported critical security issues',
        icon: '🐛'
      },
      {
        id: '7',
        name: 'Whale Tracker',
        description: 'Portfolio value over $100k',
        icon: '🐋'
      }
    ],
    recentActivity: [
      {
        id: '1',
        type: 'achievement',
        description: 'Unlocked "DeFi Expert" achievement',
        timestamp: '2024-09-28T14:30:00Z'
      },
      {
        id: '2',
        type: 'nft',
        description: 'Purchased Bored Ape #1234',
        timestamp: '2024-09-27T16:45:00Z'
      },
      {
        id: '3',
        type: 'trade',
        description: 'Swapped 5 ETH for 12,500 USDC',
        timestamp: '2024-09-26T11:20:00Z'
      },
      {
        id: '4',
        type: 'social',
        description: 'Followed @cryptowhale',
        timestamp: '2024-09-25T09:15:00Z'
      },
      {
        id: '5',
        type: 'game',
        description: 'Completed daily quest in Axie Infinity',
        timestamp: '2024-09-24T18:30:00Z'
      }
    ],
    isOwnProfile: false
  }
}

export const OwnProfile: Story = {
  args: {
    ...Default.args,
    profile: {
      ...Default.args.profile,
      username: 'myusername',
      displayName: 'My Profile',
      isFollowing: false
    },
    isOwnProfile: true
  }
}

export const FollowingProfile: Story = {
  args: {
    ...Default.args,
    profile: {
      ...Default.args.profile,
      isFollowing: true
    }
  }
}

export const NewUser: Story = {
  args: {
    ...Default.args,
    profile: {
      id: 'newuser',
      username: 'cryptonewbie',
      displayName: 'Crypto Newbie',
      bio: 'Just getting started in Web3!',
      avatar: null,
      verified: false,
      level: 1,
      walletAddress: '0x1234567890abcdef1234567890abcdef12345678',
      isFollowing: false,
      stats: {
        followers: 5,
        following: 12,
        achievements: 1,
        reputation: 10
      }
    },
    achievements: [
      {
        id: '1',
        name: 'Welcome',
        description: 'Created your first Web3 profile',
        icon: '👋'
      }
    ],
    recentActivity: [
      {
        id: '1',
        type: 'social',
        description: 'Created Web3 profile',
        timestamp: '2024-09-28T10:00:00Z'
      }
    ]
  }
}