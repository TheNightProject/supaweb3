import type { Meta, StoryObj } from '@storybook/vue3'
import NFTCard from '../../../ui/src/components/nft/NFTCard.vue'

const meta: Meta<typeof NFTCard> = {
  title: 'NFT/NFTCard',
  component: NFTCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A feature-rich NFT display card with image display, hover effects, metadata, and interactive elements.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    imageUrl: {
      control: 'text',
      description: 'URL of the NFT image'
    },
    name: {
      control: 'text',
      description: 'Name of the NFT'
    },
    collection: {
      control: 'text',
      description: 'Collection name'
    },
    price: {
      control: 'text',
      description: 'Price of the NFT (e.g., "2.5 ETH")'
    },
    owner: {
      control: 'text',
      description: 'Owner address or name'
    },
    chain: {
      control: 'select',
      options: ['ethereum', 'polygon', 'arbitrum', 'optimism', 'base'],
      description: 'Blockchain network'
    },
    showActions: {
      control: 'boolean',
      description: 'Show action buttons on hover'
    },
    showFavorite: {
      control: 'boolean',
      description: 'Show favorite heart button'
    },
    showOwner: {
      control: 'boolean',
      description: 'Show owner information'
    },
    showPriceInInfo: {
      control: 'boolean',
      description: 'Show price in the info section'
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
    imageUrl: 'https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?w=400&h=400&fit=crop',
    name: 'Cosmic Voyager #1234',
    collection: 'Cosmic Collection',
    price: '2.5 ETH',
    owner: '0x742d35Cc6C4C4C7218243e428F9e99F50934e47E',
    chain: 'ethereum',
    showActions: true,
    showFavorite: true,
    showOwner: true,
    showPriceInInfo: false
  }
}

export const WithPriceInInfo: Story = {
  args: {
    ...Default.args,
    showPriceInInfo: true
  }
}

export const PolygonChain: Story = {
  args: {
    ...Default.args,
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=400&fit=crop',
    name: 'Digital Dreams #5678',
    collection: 'Dreams Collection',
    price: '150 MATIC',
    chain: 'polygon'
  }
}

export const ArbitrumChain: Story = {
  args: {
    ...Default.args,
    imageUrl: 'https://images.unsplash.com/photo-1635372722656-389f87a941b7?w=400&h=400&fit=crop',
    name: 'Abstract Art #999',
    collection: 'Abstract Series',
    price: '0.8 ETH',
    chain: 'arbitrum'
  }
}

export const OptimismChain: Story = {
  args: {
    ...Default.args,
    imageUrl: 'https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=400&h=400&fit=crop',
    name: 'Neon Nights #111',
    collection: 'Neon Collection',
    price: '1.2 ETH',
    chain: 'optimism'
  }
}

export const BaseChain: Story = {
  args: {
    ...Default.args,
    imageUrl: 'https://images.unsplash.com/photo-1617791160588-241658c0f566?w=400&h=400&fit=crop',
    name: 'Base Builder #777',
    collection: 'Builder Series',
    price: '0.5 ETH',
    chain: 'base'
  }
}

export const HighValue: Story = {
  args: {
    ...Default.args,
    imageUrl: 'https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?w=400&h=400&fit=crop',
    name: 'Legendary Dragon #1',
    collection: 'Legendary Beasts',
    price: '50.0 ETH',
    owner: '0x123...789',
    chain: 'ethereum'
  }
}

export const NoPrice: Story = {
  args: {
    imageUrl: 'https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=400&h=400&fit=crop',
    name: 'Community Art #42',
    collection: 'Community Gallery',
    owner: '0xABC...DEF',
    price: '',
    chain: 'polygon'
  }
}

export const NoActions: Story = {
  args: {
    ...Default.args,
    showActions: false
  }
}

export const NoFavorite: Story = {
  args: {
    ...Default.args,
    showFavorite: false
  }
}

export const NoOwner: Story = {
  args: {
    ...Default.args,
    showOwner: false
  }
}

export const Minimal: Story = {
  args: {
    imageUrl: 'https://images.unsplash.com/photo-1617791160588-241658c0f566?w=400&h=400&fit=crop',
    name: 'Simple NFT',
    showActions: false,
    showFavorite: false,
    showOwner: false,
    price: ''
  }
}

export const LongNames: Story = {
  args: {
    ...Default.args,
    name: 'This is a Very Long NFT Name That Should Be Truncated Properly',
    collection: 'This is Also a Very Long Collection Name That Should Handle Overflow',
    owner: '0x1234567890abcdef1234567890abcdef12345678'
  }
}

export const ImageError: Story = {
  args: {
    ...Default.args,
    imageUrl: 'https://invalid-image-url.jpg',
    name: 'Broken Image NFT',
    collection: 'Error Collection'
  }
}

export const LoadingState: Story = {
  args: {
    ...Default.args,
    imageUrl: 'https://httpstat.us/200?sleep=5000',
    name: 'Loading NFT',
    collection: 'Slow Loading Collection'
  }
}

export const AllChains: Story = {
  render: () => ({
    components: { NFTCard },
    template: `
      <div class="grid grid-cols-3 gap-4 max-w-4xl">
        <NFTCard
          imageUrl="https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?w=400&h=400&fit=crop"
          name="Ethereum NFT"
          collection="ETH Collection"
          price="2.5 ETH"
          owner="0x742d35Cc..."
          chain="ethereum"
        />
        <NFTCard
          imageUrl="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=400&fit=crop"
          name="Polygon NFT"
          collection="MATIC Collection"
          price="150 MATIC"
          owner="0x123d35Cc..."
          chain="polygon"
        />
        <NFTCard
          imageUrl="https://images.unsplash.com/photo-1635372722656-389f87a941b7?w=400&h=400&fit=crop"
          name="Arbitrum NFT"
          collection="ARB Collection"
          price="0.8 ETH"
          owner="0x456d35Cc..."
          chain="arbitrum"
        />
        <NFTCard
          imageUrl="https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=400&h=400&fit=crop"
          name="Optimism NFT"
          collection="OP Collection"
          price="1.2 ETH"
          owner="0x789d35Cc..."
          chain="optimism"
        />
        <NFTCard
          imageUrl="https://images.unsplash.com/photo-1617791160588-241658c0f566?w=400&h=400&fit=crop"
          name="Base NFT"
          collection="BASE Collection"
          price="0.5 ETH"
          owner="0xABCd35Cc..."
          chain="base"
        />
      </div>
    `
  })
}