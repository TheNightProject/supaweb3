import type { Meta, StoryObj } from '@storybook/vue3'
import NFTGallery from '../../../ui/src/components/nft/NFTGallery.vue'

const mockNfts = [
  {
    id: '1',
    imageUrl: 'https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?w=400&h=400&fit=crop',
    name: 'Cosmic Voyager #1234',
    collection: 'Cosmic Collection',
    price: '2.5 ETH',
    owner: '0x742d35Cc6C4C4C7218243e428F9e99F50934e47E',
    chain: 'ethereum'
  },
  {
    id: '2',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=400&fit=crop',
    name: 'Digital Dreams #5678',
    collection: 'Dreams Collection',
    price: '150 MATIC',
    owner: '0x123d35Cc6C4C4C7218243e428F9e99F50934e47E',
    chain: 'polygon'
  },
  {
    id: '3',
    imageUrl: 'https://images.unsplash.com/photo-1635372722656-389f87a941b7?w=400&h=400&fit=crop',
    name: 'Abstract Art #999',
    collection: 'Abstract Series',
    price: '0.8 ETH',
    owner: '0x456d35Cc6C4C4C7218243e428F9e99F50934e47E',
    chain: 'arbitrum'
  },
  {
    id: '4',
    imageUrl: 'https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=400&h=400&fit=crop',
    name: 'Neon Nights #111',
    collection: 'Neon Collection',
    price: '1.2 ETH',
    owner: '0x789d35Cc6C4C4C7218243e428F9e99F50934e47E',
    chain: 'optimism'
  },
  {
    id: '5',
    imageUrl: 'https://images.unsplash.com/photo-1617791160588-241658c0f566?w=400&h=400&fit=crop',
    name: 'Base Builder #777',
    collection: 'Builder Series',
    price: '0.5 ETH',
    owner: '0xABCd35Cc6C4C4C7218243e428F9e99F50934e47E',
    chain: 'base'
  },
  {
    id: '6',
    imageUrl: 'https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?w=400&h=400&fit=crop',
    name: 'Legendary Dragon #1',
    collection: 'Legendary Beasts',
    price: '50.0 ETH',
    owner: '0x111d35Cc6C4C4C7218243e428F9e99F50934e47E',
    chain: 'ethereum'
  },
  {
    id: '7',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=400&fit=crop',
    name: 'Cyber Punk #404',
    collection: 'Cyber Collection',
    price: '3.3 ETH',
    owner: '0x222d35Cc6C4C4C7218243e428F9e99F50934e47E',
    chain: 'ethereum'
  },
  {
    id: '8',
    imageUrl: 'https://images.unsplash.com/photo-1635372722656-389f87a941b7?w=400&h=400&fit=crop',
    name: 'Future Vision #2077',
    collection: 'Future Series',
    price: '1.8 ETH',
    owner: '0x333d35Cc6C4C4C7218243e428F9e99F50934e47E',
    chain: 'polygon'
  }
]

const largeNftCollection = Array.from({ length: 50 }, (_, i) => ({
  id: `large-${i + 1}`,
  imageUrl: `https://images.unsplash.com/photo-${1634193295627 + i}?w=400&h=400&fit=crop`,
  name: `Collection Item #${i + 1}`,
  collection: 'Large Collection',
  price: `${(Math.random() * 10).toFixed(1)} ETH`,
  owner: `0x${Math.random().toString(16).substr(2, 40)}`,
  chain: ['ethereum', 'polygon', 'arbitrum', 'optimism', 'base'][i % 5]
}))

const meta: Meta<typeof NFTGallery> = {
  title: 'NFT/NFTGallery',
  component: NFTGallery,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A responsive grid-based gallery for displaying collections of NFTs with pagination, loading states, and customizable layouts.'
      }
    }
  },
  decorators: [
    () => ({
      template: '<div class="p-6 max-w-7xl mx-auto"><story /></div>',
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    nfts: {
      control: 'object',
      description: 'Array of NFT objects to display'
    },
    title: {
      control: 'text',
      description: 'Gallery title'
    },
    description: {
      control: 'text',
      description: 'Gallery description'
    },
    columns: {
      control: { type: 'range', min: 1, max: 8, step: 1 },
      description: 'Number of columns in the grid'
    },
    loading: {
      control: 'boolean',
      description: 'Show loading skeleton state'
    },
    loadingCount: {
      control: { type: 'range', min: 1, max: 20, step: 1 },
      description: 'Number of skeleton items to show when loading'
    },
    emptyTitle: {
      control: 'text',
      description: 'Title for empty state'
    },
    emptyDescription: {
      control: 'text',
      description: 'Description for empty state'
    },
    itemsPerPage: {
      control: { type: 'range', min: 0, max: 50, step: 1 },
      description: 'Number of items per page (0 for no pagination)'
    },
    showLoadMore: {
      control: 'boolean',
      description: 'Show load more button instead of pagination'
    },
    showPagination: {
      control: 'boolean',
      description: 'Show pagination controls'
    },
    showStats: {
      control: 'boolean',
      description: 'Show item count statistics'
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes'
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    nfts: mockNfts,
    title: 'NFT Collection',
    description: 'Discover amazing digital artworks and collectibles',
    columns: 4,
    loading: false,
    showStats: true
  }
}

export const WithTitle: Story = {
  args: {
    ...Default.args,
    title: 'Featured Collection',
    description: 'Hand-picked NFTs from top artists and creators'
  }
}

export const ThreeColumns: Story = {
  args: {
    ...Default.args,
    columns: 3,
    title: '3-Column Layout'
  }
}

export const TwoColumns: Story = {
  args: {
    ...Default.args,
    columns: 2,
    title: '2-Column Layout'
  }
}

export const SixColumns: Story = {
  args: {
    ...Default.args,
    columns: 6,
    nfts: largeNftCollection.slice(0, 12),
    title: '6-Column Layout'
  }
}

export const Loading: Story = {
  args: {
    nfts: [],
    title: 'Loading Collection',
    loading: true,
    loadingCount: 8,
    columns: 4
  }
}

export const Empty: Story = {
  args: {
    nfts: [],
    title: 'Empty Collection',
    loading: false,
    emptyTitle: 'No NFTs available',
    emptyDescription: 'This collection is currently empty. Check back later for new additions.'
  }
}

export const WithPagination: Story = {
  args: {
    nfts: largeNftCollection,
    title: 'Paginated Collection',
    description: 'Large collection with pagination controls',
    columns: 4,
    itemsPerPage: 8,
    showPagination: true,
    showStats: true
  }
}

export const WithLoadMore: Story = {
  args: {
    nfts: mockNfts,
    title: 'Load More Collection',
    description: 'Collection with load more functionality',
    columns: 4,
    showLoadMore: true,
    showStats: true
  }
}

export const Minimal: Story = {
  args: {
    nfts: mockNfts.slice(0, 4),
    columns: 4,
    showStats: false
  }
}

export const LargeCollection: Story = {
  args: {
    nfts: largeNftCollection,
    title: 'Large NFT Collection',
    description: 'A comprehensive collection of digital artworks',
    columns: 4,
    itemsPerPage: 12,
    showPagination: true,
    showStats: true
  }
}

export const SingleColumn: Story = {
  args: {
    nfts: mockNfts.slice(0, 3),
    title: 'Single Column Layout',
    description: 'Perfect for featured or highlighted NFTs',
    columns: 1
  }
}

export const ResponsiveShowcase: Story = {
  render: () => ({
    components: { NFTGallery },
    template: `
      <div class="space-y-8">
        <NFTGallery
          :nfts="nfts"
          title="Featured Collection"
          description="Responsive grid that adapts to screen size"
          :columns="4"
          :showStats="true"
        />
      </div>
    `,
    data() {
      return {
        nfts: mockNfts
      }
    }
  })
}