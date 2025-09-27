<template>
  <div :class="['send-token', className]">
    <div class="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <!-- Header -->
      <div class="mb-6">
        <h2 class="text-xl font-semibold text-gray-900 dark:text-white">
          {{ title }}
        </h2>
        <p v-if="subtitle" class="mt-1 text-sm text-gray-600 dark:text-gray-400">
          {{ subtitle }}
        </p>
      </div>

      <form @submit.prevent="handleSend">
        <!-- Token Selection -->
        <div class="mb-6">
          <label class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
            Token
          </label>
          <button
            type="button"
            @click="selectToken"
            class="flex w-full items-center justify-between rounded-lg border border-gray-300 bg-gray-50 p-3 transition-colors hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            <div class="flex items-center space-x-3">
              <Web3Icon
                v-if="selectedToken.symbol"
                type="tokens"
                :symbol="selectedToken.symbol"
                :size="24"
              />
              <div class="text-left">
                <div class="font-medium text-gray-900 dark:text-white">
                  {{ selectedToken.symbol || 'Select Token' }}
                </div>
                <div v-if="selectedToken.balance" class="text-sm text-gray-600 dark:text-gray-400">
                  Balance: {{ selectedToken.balance }}
                </div>
              </div>
            </div>
            <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        <!-- Recipient Address -->
        <div class="mb-6">
          <label class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
            Recipient Address
          </label>
          <div class="space-y-2">
            <div class="relative">
              <input
                v-model="recipientInput"
                type="text"
                placeholder="0x... or ENS name"
                :class="[
                  'w-full rounded-lg border px-4 py-3 pr-12 focus:border-blue-500 focus:outline-none',
                  recipientError
                    ? 'border-red-300 dark:border-red-600'
                    : 'border-gray-300 dark:border-gray-600',
                  'dark:bg-gray-700 dark:text-white dark:placeholder-gray-400'
                ]"
                @blur="validateRecipient"
                @input="onRecipientInput"
              />
              <!-- Loading/Status Icon -->
              <div class="absolute right-3 top-1/2 -translate-y-1/2">
                <div v-if="isResolvingENS" class="h-5 w-5 animate-spin rounded-full border-2 border-blue-500 border-t-transparent"></div>
                <svg v-else-if="recipientValid && resolvedAddress" class="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <svg v-else-if="recipientError" class="h-5 w-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </div>

            <!-- ENS Resolution Display -->
            <div v-if="ensName && resolvedAddress" class="rounded bg-blue-50 p-2 text-sm dark:bg-blue-900/20">
              <span class="text-blue-700 dark:text-blue-400">
                {{ ensName }} → {{ truncateAddress(resolvedAddress) }}
              </span>
            </div>

            <!-- Error Message -->
            <div v-if="recipientError" class="text-sm text-red-600 dark:text-red-400">
              {{ recipientError }}
            </div>

            <!-- Address Book -->
            <div v-if="showAddressBook && addressBook.length > 0" class="space-y-1">
              <div class="text-xs font-medium text-gray-600 dark:text-gray-400">Recent addresses:</div>
              <div class="flex flex-wrap gap-2">
                <button
                  v-for="contact in addressBook.slice(0, 3)"
                  :key="contact.address"
                  type="button"
                  @click="selectFromAddressBook(contact)"
                  class="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 transition-colors hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                >
                  {{ contact.name || truncateAddress(contact.address) }}
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Amount -->
        <div class="mb-6">
          <div class="mb-2 flex items-center justify-between">
            <label class="text-sm font-medium text-gray-700 dark:text-gray-300">
              Amount
            </label>
            <button
              v-if="selectedToken.balance"
              type="button"
              @click="setMaxAmount"
              class="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Max: {{ selectedToken.balance }}
            </button>
          </div>
          <div class="relative">
            <input
              v-model="amount"
              type="number"
              step="any"
              placeholder="0.0"
              :class="[
                'w-full rounded-lg border px-4 py-3 text-lg font-medium focus:border-blue-500 focus:outline-none',
                amountError
                  ? 'border-red-300 dark:border-red-600'
                  : 'border-gray-300 dark:border-gray-600',
                'dark:bg-gray-700 dark:text-white dark:placeholder-gray-400'
              ]"
              @input="validateAmount"
            />
            <div
              v-if="selectedToken.symbol"
              class="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-medium text-gray-600 dark:text-gray-400"
            >
              {{ selectedToken.symbol }}
            </div>
          </div>
          <div v-if="usdValue" class="mt-1 text-sm text-gray-600 dark:text-gray-400">
            ≈ ${{ usdValue }}
          </div>
          <div v-if="amountError" class="mt-1 text-sm text-red-600 dark:text-red-400">
            {{ amountError }}
          </div>
        </div>

        <!-- Transaction Speed/Gas -->
        <div v-if="showGasOptions" class="mb-6">
          <label class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
            Transaction Speed
          </label>
          <div class="grid grid-cols-3 gap-2">
            <button
              v-for="option in gasOptions"
              :key="option.type"
              type="button"
              @click="selectedGasOption = option.type"
              :class="[
                'rounded-lg border p-3 text-center transition-colors',
                selectedGasOption === option.type
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                  : 'border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700'
              ]"
            >
              <div class="font-medium text-gray-900 dark:text-white">{{ option.label }}</div>
              <div class="text-sm text-gray-600 dark:text-gray-400">{{ option.time }}</div>
              <div class="text-xs text-gray-500 dark:text-gray-500">${{ option.cost }}</div>
            </button>
          </div>
        </div>

        <!-- Transaction Preview -->
        <div v-if="showPreview && canShowPreview" class="mb-6 rounded-lg bg-gray-50 p-4 dark:bg-gray-900/50">
          <h3 class="mb-3 font-medium text-gray-900 dark:text-white">Transaction Preview</h3>
          <div class="space-y-2 text-sm">
            <div class="flex justify-between">
              <span class="text-gray-600 dark:text-gray-400">From:</span>
              <span class="font-mono text-gray-900 dark:text-white">{{ truncateAddress(fromAddress) }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-600 dark:text-gray-400">To:</span>
              <span class="font-mono text-gray-900 dark:text-white">{{ truncateAddress(resolvedAddress || recipientInput) }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-600 dark:text-gray-400">Amount:</span>
              <span class="font-medium text-gray-900 dark:text-white">{{ amount }} {{ selectedToken.symbol }}</span>
            </div>
            <div v-if="estimatedGas" class="flex justify-between">
              <span class="text-gray-600 dark:text-gray-400">Network Fee:</span>
              <span class="text-gray-900 dark:text-white">${{ estimatedGas }}</span>
            </div>
            <div class="border-t border-gray-200 pt-2 dark:border-gray-700">
              <div class="flex justify-between font-medium">
                <span class="text-gray-900 dark:text-white">Total Cost:</span>
                <span class="text-gray-900 dark:text-white">${{ totalCost }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Send Button -->
        <button
          type="submit"
          :disabled="!canSend || loading"
          :class="[
            'w-full rounded-lg px-4 py-3 font-semibold transition-colors',
            canSend && !loading
              ? 'bg-blue-500 text-white hover:bg-blue-600'
              : 'bg-gray-200 text-gray-500 cursor-not-allowed dark:bg-gray-700 dark:text-gray-400'
          ]"
        >
          <div v-if="loading" class="flex items-center justify-center space-x-2">
            <div class="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
            <span>{{ loadingText }}</span>
          </div>
          <span v-else>{{ sendButtonText }}</span>
        </button>

        <!-- Disclaimer -->
        <div v-if="showDisclaimer" class="mt-4 text-xs text-gray-500 dark:text-gray-400">
          {{ disclaimer }}
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import Web3Icon from '../common/Web3Icon.vue'

const props = defineProps({
  title: {
    type: String,
    default: 'Send Token'
  },
  subtitle: {
    type: String,
    default: ''
  },
  selectedToken: {
    type: Object,
    default: () => ({
      symbol: 'ETH',
      balance: '10.5',
      price: 2500,
      decimals: 18
    })
  },
  fromAddress: {
    type: String,
    default: '0x742d35Cc6C4C4C7218243e428F9e99F50934e47E'
  },
  addressBook: {
    type: Array,
    default: () => []
  },
  showAddressBook: {
    type: Boolean,
    default: true
  },
  showGasOptions: {
    type: Boolean,
    default: true
  },
  showPreview: {
    type: Boolean,
    default: true
  },
  showDisclaimer: {
    type: Boolean,
    default: true
  },
  disclaimer: {
    type: String,
    default: 'Double-check all details before sending. Transactions cannot be reversed.'
  },
  loading: {
    type: Boolean,
    default: false
  },
  loadingText: {
    type: String,
    default: 'Sending...'
  },
  className: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['select-token', 'send', 'ens-resolve', 'gas-estimate'])

const recipientInput = ref('')
const amount = ref('')
const recipientError = ref('')
const amountError = ref('')
const isResolvingENS = ref(false)
const resolvedAddress = ref('')
const ensName = ref('')
const selectedGasOption = ref('standard')

const gasOptions = [
  { type: 'slow', label: 'Slow', time: '~5 min', cost: '2.50' },
  { type: 'standard', label: 'Standard', time: '~2 min', cost: '3.75' },
  { type: 'fast', label: 'Fast', time: '~30 sec', cost: '5.25' }
]

const estimatedGas = computed(() => {
  const option = gasOptions.find(opt => opt.type === selectedGasOption.value)
  return option?.cost || '0'
})

const usdValue = computed(() => {
  if (!amount.value || !props.selectedToken.price) return null
  return (parseFloat(amount.value) * props.selectedToken.price).toFixed(2)
})

const totalCost = computed(() => {
  const amountCost = usdValue.value ? parseFloat(usdValue.value) : 0
  const gasCost = parseFloat(estimatedGas.value)
  return (amountCost + gasCost).toFixed(2)
})

const recipientValid = computed(() => {
  return resolvedAddress.value || isValidAddress(recipientInput.value)
})

const canShowPreview = computed(() => {
  return amount.value && recipientValid.value && props.selectedToken.symbol
})

const canSend = computed(() => {
  return canShowPreview.value &&
         !recipientError.value &&
         !amountError.value &&
         !isResolvingENS.value &&
         !props.loading
})

const sendButtonText = computed(() => {
  if (!props.selectedToken.symbol) return 'Select Token'
  if (!recipientInput.value) return 'Enter Recipient'
  if (!amount.value) return 'Enter Amount'
  if (recipientError.value || amountError.value) return 'Fix Errors'
  if (isResolvingENS.value) return 'Resolving ENS...'
  return `Send ${props.selectedToken.symbol}`
})

const isValidAddress = (address) => {
  return /^0x[a-fA-F0-9]{40}$/.test(address)
}

const isENSName = (name) => {
  return name.includes('.') && !isValidAddress(name)
}

const truncateAddress = (address) => {
  if (!address) return ''
  return `${address.slice(0, 6)}...${address.slice(-4)}`
}

const validateRecipient = async () => {
  recipientError.value = ''
  resolvedAddress.value = ''
  ensName.value = ''

  if (!recipientInput.value) {
    recipientError.value = 'Recipient address is required'
    return
  }

  if (isValidAddress(recipientInput.value)) {
    resolvedAddress.value = recipientInput.value
    return
  }

  if (isENSName(recipientInput.value)) {
    await resolveENS(recipientInput.value)
    return
  }

  recipientError.value = 'Invalid address or ENS name'
}

const resolveENS = async (name) => {
  isResolvingENS.value = true
  ensName.value = name

  try {
    // Simulate ENS resolution
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Mock ENS resolution
    if (name === 'vitalik.eth') {
      resolvedAddress.value = '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045'
    } else if (name === 'test.eth') {
      resolvedAddress.value = '0x742d35Cc6C4C4C7218243e428F9e99F50934e47E'
    } else {
      throw new Error('ENS name not found')
    }

    emit('ens-resolve', { name, address: resolvedAddress.value })
  } catch (error) {
    recipientError.value = `Could not resolve ENS name: ${name}`
    ensName.value = ''
  } finally {
    isResolvingENS.value = false
  }
}

const onRecipientInput = () => {
  if (recipientError.value) {
    recipientError.value = ''
  }
  resolvedAddress.value = ''
  ensName.value = ''
}

const validateAmount = () => {
  amountError.value = ''

  if (!amount.value) return

  const numAmount = parseFloat(amount.value)

  if (isNaN(numAmount) || numAmount <= 0) {
    amountError.value = 'Amount must be greater than 0'
    return
  }

  if (props.selectedToken.balance) {
    const balance = parseFloat(props.selectedToken.balance)
    if (numAmount > balance) {
      amountError.value = 'Insufficient balance'
      return
    }
  }
}

const setMaxAmount = () => {
  if (props.selectedToken.balance) {
    amount.value = props.selectedToken.balance
    validateAmount()
  }
}

const selectToken = () => {
  emit('select-token')
}

const selectFromAddressBook = (contact) => {
  recipientInput.value = contact.address
  validateRecipient()
}

const handleSend = () => {
  if (!canSend.value) return

  const transaction = {
    from: props.fromAddress,
    to: resolvedAddress.value || recipientInput.value,
    amount: amount.value,
    token: props.selectedToken,
    gasOption: selectedGasOption.value,
    estimatedGas: estimatedGas.value,
    totalCost: totalCost.value,
    ensName: ensName.value || null
  }

  emit('send', transaction)
}

watch(() => amount.value, validateAmount)
watch(() => selectedGasOption.value, () => {
  emit('gas-estimate', {
    gasOption: selectedGasOption.value,
    amount: amount.value,
    token: props.selectedToken
  })
})
</script>