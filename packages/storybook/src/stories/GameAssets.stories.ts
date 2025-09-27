import type { Meta, StoryObj } from '@storybook/vue3'
import GameAssets from '../../../ui/src/components/gaming/GameAssets.vue'

const meta: Meta<typeof GameAssets> = {
  title: 'Gaming/GameAssets',
  component: GameAssets,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A comprehensive gaming asset inventory for NFTs, tokens, and in-game items with filtering and management capabilities.'
      }
    }
  },
  decorators: [
    () => ({
      template: '<div class="min-w-[900px] max-w-[1200px]"><story /></div>',
    }),
  ],
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Game Assets',
    subtitle: 'Manage your gaming NFTs, tokens, and equipment',
    availableGames: [
      { id: 'axie', name: 'Axie Infinity' },
      { id: 'gods', name: 'Gods Unchained' },
      { id: 'sandbox', name: 'The Sandbox' },
      { id: 'decentraland', name: 'Decentraland' }
    ],
    assets: [
      {
        id: '1',
        name: 'Dragon Sword +5',
        type: 'equipment',
        rarity: 'legendary',
        gameId: 'gods',
        game: 'Gods Unchained',
        collection: 'Legendary Weapons',
        level: 5,
        quantity: 1,
        price: 850.00,
        image: 'https://via.placeholder.com/300x300?text=Dragon+Sword',
        stats: [
          { name: 'Attack', value: '95' },
          { name: 'Durability', value: '100%' },
          { name: 'Enchantment', value: 'Fire' }
        ],
        canEquip: true,
        canUpgrade: true,
        canSell: true
      },
      {
        id: '2',
        name: 'Mystic Axie #1234',
        type: 'nft',
        rarity: 'rare',
        gameId: 'axie',
        game: 'Axie Infinity',
        collection: 'Genesis Axies',
        quantity: 1,
        price: 450.00,
        image: 'https://via.placeholder.com/300x300?text=Mystic+Axie',
        stats: [
          { name: 'Health', value: '61' },
          { name: 'Speed', value: '35' },
          { name: 'Skill', value: '31' },
          { name: 'Morale', value: '43' }
        ],
        canEquip: false,
        canUpgrade: false,
        canSell: true
      },
      {
        id: '3',
        name: 'SAND Tokens',
        type: 'token',
        rarity: 'common',
        gameId: 'sandbox',
        game: 'The Sandbox',
        quantity: 2500,
        price: 0.45,
        stats: [
          { name: 'Total Value', value: '$1,125' },
          { name: 'APY', value: '5.2%' }
        ],
        canEquip: false,
        canUpgrade: false,
        canSell: true
      },
      {
        id: '4',
        name: 'Virtual Land Parcel',
        type: 'land',
        rarity: 'epic',
        gameId: 'decentraland',
        game: 'Decentraland',
        collection: 'Genesis City',
        quantity: 1,
        price: 1200.00,
        image: 'https://via.placeholder.com/300x300?text=Land+Parcel',
        stats: [
          { name: 'Size', value: '16x16' },
          { name: 'District', value: 'Fashion' },
          { name: 'Traffic', value: 'High' }
        ],
        canEquip: false,
        canUpgrade: true,
        canSell: true
      },
      {
        id: '5',
        name: 'Healing Potion',
        type: 'equipment',
        rarity: 'common',
        gameId: 'gods',
        game: 'Gods Unchained',
        collection: 'Consumables',
        quantity: 25,
        price: 2.50,
        stats: [
          { name: 'Healing', value: '+50 HP' },
          { name: 'Cooldown', value: '30s' }
        ],
        canEquip: true,
        canUpgrade: false,
        canSell: true
      }
    ]
  }
}

export const HighValueCollection: Story = {
  args: {
    ...Default.args,
    title: 'High-Value Gaming Portfolio',
    assets: [
      {
        id: '1',
        name: 'Origin Axie #001',
        type: 'nft',
        rarity: 'mythic',
        gameId: 'axie',
        game: 'Axie Infinity',
        collection: 'Origin Collection',
        quantity: 1,
        price: 15000.00,
        image: 'https://via.placeholder.com/300x300?text=Origin+Axie',
        stats: [
          { name: 'Health', value: '61' },
          { name: 'Speed', value: '61' },
          { name: 'Skill', value: '61' },
          { name: 'Morale', value: '61' }
        ],
        canEquip: false,
        canUpgrade: false,
        canSell: true
      },
      {
        id: '2',
        name: 'Excalibur Legendary',
        type: 'equipment',
        rarity: 'mythic',
        gameId: 'gods',
        game: 'Gods Unchained',
        collection: 'Mythic Artifacts',
        level: 10,
        quantity: 1,
        price: 8500.00,
        image: 'https://via.placeholder.com/300x300?text=Excalibur',
        stats: [
          { name: 'Attack', value: '150' },
          { name: 'Durability', value: '∞' },
          { name: 'Special', value: 'Holy' }
        ],
        canEquip: true,
        canUpgrade: false,
        canSell: true
      }
    ]
  }
}