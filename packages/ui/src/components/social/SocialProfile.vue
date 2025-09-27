<template>
  <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
    <!-- Profile Header -->
    <div class="relative">
      <!-- Cover Image -->
      <div class="h-32 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

      <!-- Profile Content -->
      <div class="px-6 pb-6">
        <!-- Avatar and Basic Info -->
        <div class="flex items-end -mt-16 mb-4">
          <div class="relative">
            <div class="w-24 h-24 bg-white dark:bg-gray-800 rounded-full p-2">
              <img
                v-if="profile.avatar"
                :src="profile.avatar"
                :alt="profile.username"
                class="w-full h-full rounded-full object-cover"
              />
              <div
                v-else
                class="w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl"
              >
                {{ profile.username?.charAt(0)?.toUpperCase() || '?' }}
              </div>
            </div>
            <!-- Verification Badge -->
            <div
              v-if="profile.verified"
              class="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center"
            >
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
          </div>

          <div class="ml-4 flex-1">
            <div class="flex items-center gap-2 mb-1">
              <h1 class="text-2xl font-bold text-gray-900 dark:text-white">
                {{ profile.displayName || profile.username }}
              </h1>
              <span
                v-if="profile.level"
                class="px-2 py-1 text-sm font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 rounded-full"
              >
                Level {{ profile.level }}
              </span>
            </div>
            <div class="text-gray-600 dark:text-gray-300">
              @{{ profile.username }}
            </div>
            <div v-if="profile.walletAddress" class="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {{ truncateAddress(profile.walletAddress) }}
            </div>
          </div>

          <div class="flex items-center gap-2">
            <button
              v-if="!isOwnProfile"
              @click="$emit('follow', profile.id)"
              :class="[
                'px-4 py-2 rounded-lg font-medium transition-colors',
                profile.isFollowing
                  ? 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              ]"
            >
              {{ profile.isFollowing ? 'Following' : 'Follow' }}
            </button>
            <button
              @click="$emit('share-profile', profile)"
              class="p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Bio -->
        <div v-if="profile.bio" class="mb-4">
          <p class="text-gray-700 dark:text-gray-300">{{ profile.bio }}</p>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-4 gap-4 mb-6">
          <div class="text-center">
            <div class="text-xl font-bold text-gray-900 dark:text-white">
              {{ profile.stats.followers.toLocaleString() }}
            </div>
            <div class="text-sm text-gray-500 dark:text-gray-400">Followers</div>
          </div>
          <div class="text-center">
            <div class="text-xl font-bold text-gray-900 dark:text-white">
              {{ profile.stats.following.toLocaleString() }}
            </div>
            <div class="text-sm text-gray-500 dark:text-gray-400">Following</div>
          </div>
          <div class="text-center">
            <div class="text-xl font-bold text-gray-900 dark:text-white">
              {{ profile.stats.achievements }}
            </div>
            <div class="text-sm text-gray-500 dark:text-gray-400">Achievements</div>
          </div>
          <div class="text-center">
            <div class="text-xl font-bold text-gray-900 dark:text-white">
              {{ profile.stats.reputation.toLocaleString() }}
            </div>
            <div class="text-sm text-gray-500 dark:text-gray-400">Reputation</div>
          </div>
        </div>

        <!-- Achievements -->
        <div v-if="achievements && achievements.length > 0" class="mb-6">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Recent Achievements</h3>
          <div class="flex flex-wrap gap-2">
            <div
              v-for="achievement in achievements.slice(0, 6)"
              :key="achievement.id"
              class="flex items-center gap-2 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200 px-3 py-2 rounded-lg text-sm"
              :title="achievement.description"
            >
              <span class="text-lg">{{ achievement.icon }}</span>
              <span class="font-medium">{{ achievement.name }}</span>
            </div>
          </div>
          <button
            v-if="achievements.length > 6"
            @click="$emit('view-all-achievements')"
            class="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mt-2"
          >
            View all {{ achievements.length }} achievements
          </button>
        </div>

        <!-- Activity Feed -->
        <div v-if="recentActivity && recentActivity.length > 0">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Recent Activity</h3>
          <div class="space-y-3">
            <div
              v-for="activity in recentActivity.slice(0, 5)"
              :key="activity.id"
              class="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg"
            >
              <div class="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span class="text-white text-sm">{{ getActivityIcon(activity.type) }}</span>
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm text-gray-900 dark:text-white">{{ activity.description }}</p>
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">{{ formatDate(activity.timestamp) }}</p>
              </div>
            </div>
          </div>
          <button
            @click="$emit('view-full-activity')"
            class="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mt-3"
          >
            View full activity
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  profile: {
    type: Object,
    required: true
  },
  achievements: {
    type: Array,
    default: () => []
  },
  recentActivity: {
    type: Array,
    default: () => []
  },
  isOwnProfile: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits([
  'follow',
  'share-profile',
  'view-all-achievements',
  'view-full-activity'
])

const truncateAddress = (address) => {
  if (!address) return ''
  return `${address.slice(0, 6)}...${address.slice(-4)}`
}

const getActivityIcon = (type) => {
  const icons = {
    achievement: '🏆',
    nft: '🖼️',
    trade: '💱',
    game: '🎮',
    social: '👥',
    transaction: '💸'
  }
  return icons[type] || '📝'
}

const formatDate = (timestamp) => {
  const date = new Date(timestamp)
  const now = new Date()
  const diffMs = now - date
  const diffMins = Math.floor(diffMs / 60000)
  const diffHours = Math.floor(diffMs / 3600000)
  const diffDays = Math.floor(diffMs / 86400000)

  if (diffMins < 1) return 'Just now'
  if (diffMins < 60) return `${diffMins}m ago`
  if (diffHours < 24) return `${diffHours}h ago`
  if (diffDays < 7) return `${diffDays}d ago`

  return date.toLocaleDateString()
}
</script>