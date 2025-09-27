<template>
  <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
    <!-- Header -->
    <div class="p-6 border-b border-gray-200 dark:border-gray-700">
      <div class="flex items-center justify-between mb-4">
        <div>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Quest Tracker</h2>
          <p class="text-gray-600 dark:text-gray-300 mt-1">Complete quests to earn rewards and unlock achievements</p>
        </div>
        <div class="flex items-center gap-3">
          <select
            v-model="selectedCategory"
            class="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
          >
            <option value="">All Categories</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="achievement">Achievement</option>
            <option value="special">Special</option>
          </select>
          <button
            @click="$emit('refresh')"
            :disabled="loading"
            class="p-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <svg :class="loading ? 'animate-spin' : ''" class="w-4 h-4 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Quest Summary -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div class="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <div class="text-sm text-blue-600 dark:text-blue-400 mb-1">Active Quests</div>
          <div class="text-xl font-bold text-blue-800 dark:text-blue-200">{{ activeQuests }}</div>
        </div>
        <div class="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
          <div class="text-sm text-green-600 dark:text-green-400 mb-1">Completed Today</div>
          <div class="text-xl font-bold text-green-800 dark:text-green-200">{{ completedToday }}</div>
        </div>
        <div class="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
          <div class="text-sm text-purple-600 dark:text-purple-400 mb-1">Total XP</div>
          <div class="text-xl font-bold text-purple-800 dark:text-purple-200">{{ totalXP.toLocaleString() }}</div>
        </div>
        <div class="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
          <div class="text-sm text-yellow-600 dark:text-yellow-400 mb-1">Streak</div>
          <div class="text-xl font-bold text-yellow-800 dark:text-yellow-200">{{ currentStreak }} days</div>
        </div>
      </div>
    </div>

    <!-- Quest Categories -->
    <div class="p-6">
      <div class="space-y-6">
        <!-- Daily Quests -->
        <div v-if="!selectedCategory || selectedCategory === 'daily'">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Daily Quests</h3>
            <div class="text-sm text-gray-500 dark:text-gray-400">
              Resets in {{ timeUntilReset }}
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              v-for="quest in filteredQuests.filter(q => q.category === 'daily')"
              :key="quest.id"
              class="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div class="flex items-start justify-between mb-3">
                <div class="flex-1">
                  <h4 class="font-medium text-gray-900 dark:text-white mb-1">{{ quest.title }}</h4>
                  <p class="text-sm text-gray-600 dark:text-gray-300">{{ quest.description }}</p>
                </div>
                <div class="text-2xl ml-3">{{ quest.icon }}</div>
              </div>

              <!-- Progress Bar -->
              <div class="mb-3">
                <div class="flex items-center justify-between text-sm mb-1">
                  <span class="text-gray-600 dark:text-gray-300">Progress</span>
                  <span class="font-medium text-gray-900 dark:text-white">
                    {{ quest.progress }}/{{ quest.target }}
                  </span>
                </div>
                <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    :class="getProgressBarClasses(quest)"
                    class="h-2 rounded-full transition-all duration-300"
                    :style="{ width: `${Math.min(100, (quest.progress / quest.target) * 100)}%` }"
                  ></div>
                </div>
              </div>

              <!-- Rewards -->
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2 text-sm">
                  <span class="text-yellow-600 dark:text-yellow-400">⭐ {{ quest.rewards.xp }} XP</span>
                  <span v-if="quest.rewards.tokens" class="text-blue-600 dark:text-blue-400">
                    💎 {{ quest.rewards.tokens }}
                  </span>
                </div>
                <button
                  v-if="quest.status === 'completed'"
                  @click="$emit('claim-reward', quest.id)"
                  class="bg-green-600 hover:bg-green-700 text-white text-xs font-medium py-1 px-3 rounded transition-colors"
                >
                  Claim
                </button>
                <span
                  v-else-if="quest.status === 'claimed'"
                  class="text-xs text-green-600 dark:text-green-400 font-medium"
                >
                  ✓ Claimed
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Achievement Quests -->
        <div v-if="!selectedCategory || selectedCategory === 'achievement'">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Achievement Quests</h3>
          <div class="space-y-4">
            <div
              v-for="quest in filteredQuests.filter(q => q.category === 'achievement')"
              :key="quest.id"
              class="border border-gray-200 dark:border-gray-700 rounded-lg p-4"
            >
              <div class="flex items-start gap-4">
                <div class="text-3xl">{{ quest.icon }}</div>
                <div class="flex-1">
                  <div class="flex items-center gap-2 mb-1">
                    <h4 class="font-medium text-gray-900 dark:text-white">{{ quest.title }}</h4>
                    <span
                      :class="[
                        'px-2 py-1 text-xs font-medium rounded-full',
                        getDifficultyClasses(quest.difficulty)
                      ]"
                    >
                      {{ quest.difficulty }}
                    </span>
                  </div>
                  <p class="text-sm text-gray-600 dark:text-gray-300 mb-3">{{ quest.description }}</p>

                  <!-- Multi-step Progress -->
                  <div v-if="quest.steps" class="space-y-2 mb-3">
                    <div
                      v-for="(step, index) in quest.steps"
                      :key="index"
                      class="flex items-center gap-3 text-sm"
                    >
                      <div
                        :class="[
                          'w-5 h-5 rounded-full flex items-center justify-center text-xs font-medium',
                          step.completed
                            ? 'bg-green-500 text-white'
                            : index === quest.currentStep
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-300'
                        ]"
                      >
                        {{ step.completed ? '✓' : index + 1 }}
                      </div>
                      <span
                        :class="[
                          step.completed
                            ? 'text-green-600 dark:text-green-400'
                            : index === quest.currentStep
                            ? 'text-blue-600 dark:text-blue-400'
                            : 'text-gray-500 dark:text-gray-400'
                        ]"
                      >
                        {{ step.description }}
                      </span>
                    </div>
                  </div>

                  <!-- Simple Progress -->
                  <div v-else class="mb-3">
                    <div class="flex items-center justify-between text-sm mb-1">
                      <span class="text-gray-600 dark:text-gray-300">Progress</span>
                      <span class="font-medium text-gray-900 dark:text-white">
                        {{ quest.progress }}/{{ quest.target }}
                      </span>
                    </div>
                    <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        :class="getProgressBarClasses(quest)"
                        class="h-2 rounded-full transition-all duration-300"
                        :style="{ width: `${Math.min(100, (quest.progress / quest.target) * 100)}%` }"
                      ></div>
                    </div>
                  </div>

                  <!-- Rewards -->
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3 text-sm">
                      <span class="text-yellow-600 dark:text-yellow-400">⭐ {{ quest.rewards.xp }} XP</span>
                      <span v-if="quest.rewards.achievement" class="text-purple-600 dark:text-purple-400">
                        🏆 {{ quest.rewards.achievement }}
                      </span>
                      <span v-if="quest.rewards.nft" class="text-pink-600 dark:text-pink-400">
                        🖼️ NFT Reward
                      </span>
                    </div>
                    <button
                      v-if="quest.status === 'completed'"
                      @click="$emit('claim-reward', quest.id)"
                      class="bg-purple-600 hover:bg-purple-700 text-white text-xs font-medium py-1 px-3 rounded transition-colors"
                    >
                      Claim
                    </button>
                    <span
                      v-else-if="quest.status === 'claimed'"
                      class="text-xs text-green-600 dark:text-green-400 font-medium"
                    >
                      ✓ Completed
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Special Events -->
        <div v-if="specialQuests.length > 0 && (!selectedCategory || selectedCategory === 'special')">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Special Events</h3>
          <div class="space-y-4">
            <div
              v-for="quest in specialQuests"
              :key="quest.id"
              class="border-2 border-dashed border-yellow-300 dark:border-yellow-600 rounded-lg p-4 bg-yellow-50 dark:bg-yellow-900/20"
            >
              <div class="flex items-start gap-4">
                <div class="text-3xl">{{ quest.icon }}</div>
                <div class="flex-1">
                  <div class="flex items-center gap-2 mb-1">
                    <h4 class="font-medium text-gray-900 dark:text-white">{{ quest.title }}</h4>
                    <span class="px-2 py-1 text-xs font-medium bg-yellow-200 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-200 rounded-full">
                      Limited Time
                    </span>
                  </div>
                  <p class="text-sm text-gray-600 dark:text-gray-300 mb-2">{{ quest.description }}</p>
                  <div class="text-xs text-yellow-600 dark:text-yellow-400 mb-3">
                    ⏰ Ends {{ formatTimeRemaining(quest.endTime) }}
                  </div>

                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3 text-sm">
                      <span class="text-yellow-600 dark:text-yellow-400">⭐ {{ quest.rewards.xp }} XP</span>
                      <span class="text-purple-600 dark:text-purple-400">🎁 Special Reward</span>
                    </div>
                    <div class="text-sm font-medium text-gray-900 dark:text-white">
                      {{ quest.progress }}/{{ quest.target }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  quests: {
    type: Array,
    default: () => []
  },
  userStats: {
    type: Object,
    default: () => ({
      totalXP: 0,
      currentStreak: 0,
      completedToday: 0
    })
  },
  loading: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['claim-reward', 'refresh'])

const selectedCategory = ref('')

const filteredQuests = computed(() => {
  if (!selectedCategory.value) return props.quests
  return props.quests.filter(quest => quest.category === selectedCategory.value)
})

const activeQuests = computed(() => {
  return props.quests.filter(quest => quest.status === 'active').length
})

const completedToday = computed(() => {
  return props.userStats.completedToday || 0
})

const totalXP = computed(() => {
  return props.userStats.totalXP || 0
})

const currentStreak = computed(() => {
  return props.userStats.currentStreak || 0
})

const specialQuests = computed(() => {
  return props.quests.filter(quest => quest.category === 'special')
})

const timeUntilReset = computed(() => {
  const now = new Date()
  const tomorrow = new Date(now)
  tomorrow.setDate(tomorrow.getDate() + 1)
  tomorrow.setHours(0, 0, 0, 0)

  const diff = tomorrow - now
  const hours = Math.floor(diff / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))

  return `${hours}h ${minutes}m`
})

const getProgressBarClasses = (quest) => {
  const progress = (quest.progress / quest.target) * 100
  if (progress >= 100) return 'bg-green-500'
  if (progress >= 75) return 'bg-yellow-500'
  return 'bg-blue-500'
}

const getDifficultyClasses = (difficulty) => {
  const classes = {
    easy: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    hard: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
    legendary: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
  }
  return classes[difficulty?.toLowerCase()] || classes.easy
}

const formatTimeRemaining = (endTime) => {
  const now = new Date()
  const end = new Date(endTime)
  const diff = end - now

  if (diff <= 0) return 'Expired'

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))

  if (days > 0) return `in ${days}d ${hours}h`
  return `in ${hours}h`
}
</script>