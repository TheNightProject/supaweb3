import{_ as e}from"./Web3Icon-CMoc-ptT.js";import"./vue.esm-bundler-DxM0YtBV.js";const K={title:"Common/Web3Icon",component:e,parameters:{layout:"centered",docs:{description:{component:"A component that displays Web3 icons for wallets, tokens, and networks using the @web3icons/core library. Icons are loaded from CDN and include fallbacks."}}},tags:["autodocs"],argTypes:{type:{control:"select",options:["wallets","tokens","networks"],description:"Type of icon to display"},variant:{control:"select",options:["branded","mono"],description:"Icon variant (branded or monochrome)"},symbol:{control:"text",description:"Symbol/name of the icon (e.g., metamask, BTC, ethereum)"},size:{control:{type:"range",min:16,max:128,step:8},description:"Size of the icon in pixels"},className:{control:"text",description:"Additional CSS classes"},fallbackText:{control:"text",description:"Text to show when icon fails to load"}}},t={args:{type:"wallets",variant:"branded",symbol:"metamask",size:32}},a={render:()=>({components:{Web3Icon:e},template:`
      <div class="grid grid-cols-4 gap-6 p-4">
        <div v-for="wallet in wallets" :key="wallet" class="flex flex-col items-center gap-2">
          <Web3Icon
            type="wallets"
            variant="branded"
            :symbol="wallet"
            :size="40"
            :fallback-text="wallet.charAt(0).toUpperCase()"
          />
          <span class="text-xs text-gray-600 dark:text-gray-400 text-center">{{ wallet }}</span>
        </div>
      </div>
    `,setup(){return{wallets:["metamask","wallet-connect","coinbase","phantom","trust","argent","rainbow","ledger","exodus","rabby","safe","keplr","backpack","zengo","imtoken","okx"]}}})},s={render:()=>({components:{Web3Icon:e},template:`
      <div class="grid grid-cols-6 gap-6 p-4">
        <div v-for="token in tokens" :key="token" class="flex flex-col items-center gap-2">
          <Web3Icon
            type="tokens"
            variant="branded"
            :symbol="token"
            :size="40"
            :fallback-text="token"
          />
          <span class="text-xs text-gray-600 dark:text-gray-400 text-center">{{ token }}</span>
        </div>
      </div>
    `,setup(){return{tokens:["BTC","ETH","USDC","USDT","DAI","MATIC","SOL","ADA","DOT","LINK","UNI","AAVE","CRV","COMP","MKR","SNX","SUSHI","YFI"]}}})},o={render:()=>({components:{Web3Icon:e},template:`
      <div class="grid grid-cols-4 gap-6 p-4">
        <div v-for="network in networks" :key="network" class="flex flex-col items-center gap-2">
          <Web3Icon
            type="networks"
            variant="branded"
            :symbol="network"
            :size="40"
            :fallback-text="network.charAt(0).toUpperCase()"
          />
          <span class="text-xs text-gray-600 dark:text-gray-400 text-center">{{ network }}</span>
        </div>
      </div>
    `,setup(){return{networks:["ethereum","bitcoin","polygon","binance-smart-chain","avalanche","fantom","optimism","solana","cardano","polkadot","cosmos"]}}})},l={render:()=>({components:{Web3Icon:e},template:`
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-semibold mb-4">Branded vs Mono</h3>
          <div class="grid grid-cols-2 gap-8">
            <div class="space-y-4">
              <h4 class="font-medium">Branded</h4>
              <div class="flex gap-4">
                <Web3Icon type="wallets" variant="branded" symbol="metamask" :size="48" />
                <Web3Icon type="tokens" variant="branded" symbol="ETH" :size="48" />
                <Web3Icon type="networks" variant="branded" symbol="ethereum" :size="48" />
              </div>
            </div>
            <div class="space-y-4">
              <h4 class="font-medium">Mono</h4>
              <div class="flex gap-4">
                <Web3Icon type="wallets" variant="mono" symbol="metamask" :size="48" />
                <Web3Icon type="tokens" variant="mono" symbol="ETH" :size="48" />
                <Web3Icon type="networks" variant="mono" symbol="ethereum" :size="48" />
              </div>
            </div>
          </div>
        </div>
      </div>
    `})},r={render:()=>({components:{Web3Icon:e},template:`
      <div class="flex items-center gap-4">
        <div v-for="size in sizes" :key="size" class="flex flex-col items-center gap-2">
          <Web3Icon
            type="wallets"
            variant="branded"
            symbol="metamask"
            :size="size"
          />
          <span class="text-xs text-gray-600 dark:text-gray-400">{{ size }}px</span>
        </div>
      </div>
    `,setup(){return{sizes:[16,24,32,48,64,96]}}})},i={render:()=>({components:{Web3Icon:e},template:`
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-semibold mb-4">Valid Icons</h3>
          <div class="flex gap-4">
            <Web3Icon type="wallets" variant="branded" symbol="metamask" :size="48" fallback-text="M" />
            <Web3Icon type="tokens" variant="branded" symbol="ETH" :size="48" fallback-text="E" />
            <Web3Icon type="networks" variant="branded" symbol="ethereum" :size="48" fallback-text="E" />
          </div>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">Invalid Icons (Shows Fallback)</h3>
          <div class="flex gap-4">
            <Web3Icon type="wallets" variant="branded" symbol="nonexistent-wallet" :size="48" fallback-text="?" />
            <Web3Icon type="tokens" variant="branded" symbol="FAKE" :size="48" fallback-text="F" />
            <Web3Icon type="networks" variant="branded" symbol="nonexistent-network" :size="48" fallback-text="N" />
          </div>
        </div>
      </div>
    `})},c={parameters:{backgrounds:{default:"dark"}},decorators:[()=>({template:'<div class="dark bg-gray-900 p-8"><story /></div>'})],render:()=>({components:{Web3Icon:e},template:`
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-semibold mb-4 text-white">Icons in Dark Mode</h3>
          <div class="flex gap-4">
            <Web3Icon type="wallets" variant="branded" symbol="metamask" :size="48" />
            <Web3Icon type="wallets" variant="branded" symbol="wallet-connect" :size="48" />
            <Web3Icon type="wallets" variant="branded" symbol="coinbase" :size="48" />
            <Web3Icon type="wallets" variant="branded" symbol="phantom" :size="48" />
          </div>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4 text-white">Fallbacks in Dark Mode</h3>
          <div class="flex gap-4">
            <Web3Icon type="wallets" variant="branded" symbol="invalid1" :size="48" fallback-text="A" />
            <Web3Icon type="wallets" variant="branded" symbol="invalid2" :size="48" fallback-text="B" />
            <Web3Icon type="wallets" variant="branded" symbol="invalid3" :size="48" fallback-text="C" />
          </div>
        </div>
      </div>
    `})},d={render:()=>({components:{Web3Icon:e},data(){return{selectedType:"wallets",selectedVariant:"branded",selectedSymbol:"metamask",selectedSize:48,symbolsByType:{wallets:["metamask","walletconnect","coinbase-wallet","phantom","trust-wallet","rainbow"],tokens:["BTC","ETH","USDC","USDT","DAI","MATIC"],networks:["ethereum","bitcoin","polygon","binance-smart-chain","avalanche","solana"]}}},computed:{availableSymbols(){return this.symbolsByType[this.selectedType]}},watch:{selectedType(n){this.selectedSymbol=this.symbolsByType[n][0]}},template:`
      <div class="space-y-6">
        <div class="space-y-4">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium mb-2">Type</label>
              <select v-model="selectedType" class="w-full p-2 border rounded-lg">
                <option value="wallets">Wallets</option>
                <option value="tokens">Tokens</option>
                <option value="networks">Networks</option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-medium mb-2">Variant</label>
              <select v-model="selectedVariant" class="w-full p-2 border rounded-lg">
                <option value="branded">Branded</option>
                <option value="mono">Mono</option>
              </select>
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium mb-2">Symbol</label>
            <select v-model="selectedSymbol" class="w-full p-2 border rounded-lg">
              <option v-for="symbol in availableSymbols" :key="symbol" :value="symbol">
                {{ symbol }}
              </option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium mb-2">Size: {{ selectedSize }}px</label>
            <input
              v-model="selectedSize"
              type="range"
              min="16"
              max="128"
              step="8"
              class="w-full"
            />
          </div>
        </div>

        <div class="border-t pt-6">
          <h3 class="text-lg font-semibold mb-4">Preview</h3>
          <div class="flex items-center justify-center p-8 border rounded-lg bg-gray-50 dark:bg-gray-800">
            <Web3Icon
              :type="selectedType"
              :variant="selectedVariant"
              :symbol="selectedSymbol"
              :size="selectedSize"
              :fallback-text="selectedSymbol.charAt(0).toUpperCase()"
            />
          </div>
          <div class="mt-4 text-center">
            <code class="text-sm bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
              type="{{ selectedType }}" variant="{{ selectedVariant }}" symbol="{{ selectedSymbol }}" size="{{ selectedSize }}"
            </code>
          </div>
        </div>
      </div>
    `})};var m,b,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    type: 'wallets',
    variant: 'branded',
    symbol: 'metamask',
    size: 32
  }
}`,...(p=(b=t.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};var v,y,k;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Web3Icon
    },
    template: \`
      <div class="grid grid-cols-4 gap-6 p-4">
        <div v-for="wallet in wallets" :key="wallet" class="flex flex-col items-center gap-2">
          <Web3Icon
            type="wallets"
            variant="branded"
            :symbol="wallet"
            :size="40"
            :fallback-text="wallet.charAt(0).toUpperCase()"
          />
          <span class="text-xs text-gray-600 dark:text-gray-400 text-center">{{ wallet }}</span>
        </div>
      </div>
    \`,
    setup() {
      const wallets = ['metamask', 'wallet-connect', 'coinbase', 'phantom', 'trust', 'argent', 'rainbow', 'ledger', 'exodus', 'rabby', 'safe', 'keplr', 'backpack', 'zengo', 'imtoken', 'okx'];
      return {
        wallets
      };
    }
  })
}`,...(k=(y=a.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var x,g,w;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Web3Icon
    },
    template: \`
      <div class="grid grid-cols-6 gap-6 p-4">
        <div v-for="token in tokens" :key="token" class="flex flex-col items-center gap-2">
          <Web3Icon
            type="tokens"
            variant="branded"
            :symbol="token"
            :size="40"
            :fallback-text="token"
          />
          <span class="text-xs text-gray-600 dark:text-gray-400 text-center">{{ token }}</span>
        </div>
      </div>
    \`,
    setup() {
      const tokens = ['BTC', 'ETH', 'USDC', 'USDT', 'DAI', 'MATIC', 'SOL', 'ADA', 'DOT', 'LINK', 'UNI', 'AAVE', 'CRV', 'COMP', 'MKR', 'SNX', 'SUSHI', 'YFI'];
      return {
        tokens
      };
    }
  })
}`,...(w=(g=s.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};var u,f,I;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Web3Icon
    },
    template: \`
      <div class="grid grid-cols-4 gap-6 p-4">
        <div v-for="network in networks" :key="network" class="flex flex-col items-center gap-2">
          <Web3Icon
            type="networks"
            variant="branded"
            :symbol="network"
            :size="40"
            :fallback-text="network.charAt(0).toUpperCase()"
          />
          <span class="text-xs text-gray-600 dark:text-gray-400 text-center">{{ network }}</span>
        </div>
      </div>
    \`,
    setup() {
      const networks = ['ethereum', 'bitcoin', 'polygon', 'binance-smart-chain', 'avalanche', 'fantom', 'optimism', 'solana', 'cardano', 'polkadot', 'cosmos'];
      return {
        networks
      };
    }
  })
}`,...(I=(f=o.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};var h,z,W;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Web3Icon
    },
    template: \`
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-semibold mb-4">Branded vs Mono</h3>
          <div class="grid grid-cols-2 gap-8">
            <div class="space-y-4">
              <h4 class="font-medium">Branded</h4>
              <div class="flex gap-4">
                <Web3Icon type="wallets" variant="branded" symbol="metamask" :size="48" />
                <Web3Icon type="tokens" variant="branded" symbol="ETH" :size="48" />
                <Web3Icon type="networks" variant="branded" symbol="ethereum" :size="48" />
              </div>
            </div>
            <div class="space-y-4">
              <h4 class="font-medium">Mono</h4>
              <div class="flex gap-4">
                <Web3Icon type="wallets" variant="mono" symbol="metamask" :size="48" />
                <Web3Icon type="tokens" variant="mono" symbol="ETH" :size="48" />
                <Web3Icon type="networks" variant="mono" symbol="ethereum" :size="48" />
              </div>
            </div>
          </div>
        </div>
      </div>
    \`
  })
}`,...(W=(z=l.parameters)==null?void 0:z.docs)==null?void 0:W.source}}};var S,T,A;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Web3Icon
    },
    template: \`
      <div class="flex items-center gap-4">
        <div v-for="size in sizes" :key="size" class="flex flex-col items-center gap-2">
          <Web3Icon
            type="wallets"
            variant="branded"
            symbol="metamask"
            :size="size"
          />
          <span class="text-xs text-gray-600 dark:text-gray-400">{{ size }}px</span>
        </div>
      </div>
    \`,
    setup() {
      const sizes = [16, 24, 32, 48, 64, 96];
      return {
        sizes
      };
    }
  })
}`,...(A=(T=r.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var C,D,M;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Web3Icon
    },
    template: \`
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-semibold mb-4">Valid Icons</h3>
          <div class="flex gap-4">
            <Web3Icon type="wallets" variant="branded" symbol="metamask" :size="48" fallback-text="M" />
            <Web3Icon type="tokens" variant="branded" symbol="ETH" :size="48" fallback-text="E" />
            <Web3Icon type="networks" variant="branded" symbol="ethereum" :size="48" fallback-text="E" />
          </div>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">Invalid Icons (Shows Fallback)</h3>
          <div class="flex gap-4">
            <Web3Icon type="wallets" variant="branded" symbol="nonexistent-wallet" :size="48" fallback-text="?" />
            <Web3Icon type="tokens" variant="branded" symbol="FAKE" :size="48" fallback-text="F" />
            <Web3Icon type="networks" variant="branded" symbol="nonexistent-network" :size="48" fallback-text="N" />
          </div>
        </div>
      </div>
    \`
  })
}`,...(M=(D=i.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var B,E,U;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  decorators: [() => ({
    template: '<div class="dark bg-gray-900 p-8"><story /></div>'
  })],
  render: () => ({
    components: {
      Web3Icon
    },
    template: \`
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-semibold mb-4 text-white">Icons in Dark Mode</h3>
          <div class="flex gap-4">
            <Web3Icon type="wallets" variant="branded" symbol="metamask" :size="48" />
            <Web3Icon type="wallets" variant="branded" symbol="wallet-connect" :size="48" />
            <Web3Icon type="wallets" variant="branded" symbol="coinbase" :size="48" />
            <Web3Icon type="wallets" variant="branded" symbol="phantom" :size="48" />
          </div>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4 text-white">Fallbacks in Dark Mode</h3>
          <div class="flex gap-4">
            <Web3Icon type="wallets" variant="branded" symbol="invalid1" :size="48" fallback-text="A" />
            <Web3Icon type="wallets" variant="branded" symbol="invalid2" :size="48" fallback-text="B" />
            <Web3Icon type="wallets" variant="branded" symbol="invalid3" :size="48" fallback-text="C" />
          </div>
        </div>
      </div>
    \`
  })
}`,...(U=(E=c.parameters)==null?void 0:E.docs)==null?void 0:U.source}}};var V,N,F;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Web3Icon
    },
    data() {
      return {
        selectedType: 'wallets' as 'wallets' | 'tokens' | 'networks',
        selectedVariant: 'branded' as 'branded' | 'mono',
        selectedSymbol: 'metamask',
        selectedSize: 48,
        symbolsByType: {
          wallets: ['metamask', 'walletconnect', 'coinbase-wallet', 'phantom', 'trust-wallet', 'rainbow'],
          tokens: ['BTC', 'ETH', 'USDC', 'USDT', 'DAI', 'MATIC'],
          networks: ['ethereum', 'bitcoin', 'polygon', 'binance-smart-chain', 'avalanche', 'solana']
        }
      };
    },
    computed: {
      availableSymbols() {
        return this.symbolsByType[this.selectedType];
      }
    },
    watch: {
      selectedType(newType) {
        this.selectedSymbol = this.symbolsByType[newType][0];
      }
    },
    template: \`
      <div class="space-y-6">
        <div class="space-y-4">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium mb-2">Type</label>
              <select v-model="selectedType" class="w-full p-2 border rounded-lg">
                <option value="wallets">Wallets</option>
                <option value="tokens">Tokens</option>
                <option value="networks">Networks</option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-medium mb-2">Variant</label>
              <select v-model="selectedVariant" class="w-full p-2 border rounded-lg">
                <option value="branded">Branded</option>
                <option value="mono">Mono</option>
              </select>
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium mb-2">Symbol</label>
            <select v-model="selectedSymbol" class="w-full p-2 border rounded-lg">
              <option v-for="symbol in availableSymbols" :key="symbol" :value="symbol">
                {{ symbol }}
              </option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium mb-2">Size: {{ selectedSize }}px</label>
            <input
              v-model="selectedSize"
              type="range"
              min="16"
              max="128"
              step="8"
              class="w-full"
            />
          </div>
        </div>

        <div class="border-t pt-6">
          <h3 class="text-lg font-semibold mb-4">Preview</h3>
          <div class="flex items-center justify-center p-8 border rounded-lg bg-gray-50 dark:bg-gray-800">
            <Web3Icon
              :type="selectedType"
              :variant="selectedVariant"
              :symbol="selectedSymbol"
              :size="selectedSize"
              :fallback-text="selectedSymbol.charAt(0).toUpperCase()"
            />
          </div>
          <div class="mt-4 text-center">
            <code class="text-sm bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
              type="{{ selectedType }}" variant="{{ selectedVariant }}" symbol="{{ selectedSymbol }}" size="{{ selectedSize }}"
            </code>
          </div>
        </div>
      </div>
    \`
  })
}`,...(F=(N=d.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};const _=["Default","WalletIcons","TokenIcons","NetworkIcons","Variants","Sizes","WithFallbacks","DarkMode","Interactive"];export{c as DarkMode,t as Default,d as Interactive,o as NetworkIcons,r as Sizes,s as TokenIcons,l as Variants,a as WalletIcons,i as WithFallbacks,_ as __namedExportsOrder,K as default};
