import{r as l}from"./vue.esm-bundler-DxM0YtBV.js";import{W as a}from"./WalletConnectModal-BtMAl8bb.js";import"./Web3Icon-CMoc-ptT.js";const U={title:"Auth/WalletConnectModal",component:a,parameters:{layout:"centered",docs:{description:{component:"A modal component for selecting and connecting Web3 wallets. Displays popular wallet options like MetaMask, WalletConnect, Coinbase, and Phantom."}}},tags:["autodocs"],argTypes:{onClose:{action:"close",description:"Event emitted when modal is closed"},onConnect:{action:"connect",description:"Event emitted when a wallet is selected for connection"},enabledWallets:{control:"check",options:["metamask","walletconnect","coinbase","phantom","trust","argent","rainbow","ledger"],description:"Wallets available for connection"},priorityWallets:{control:"check",options:["metamask","walletconnect","coinbase","phantom","trust","argent","rainbow","ledger"],description:"Wallets shown in priority/popular section"}}},s={render:()=>({components:{WalletConnectModal:a},setup(){const e=l(!0);return{showModal:e,handleClose:()=>{e.value=!1,setTimeout(()=>{e.value=!0},500)},handleConnect:n=>{console.log("Connecting to:",n),alert(`Connecting to ${n}`)}}},template:`
      <div>
        <WalletConnectModal
          v-if="showModal"
          @close="handleClose"
          @connect="handleConnect"
        />
        <div v-if="!showModal" class="text-center p-4">
          <p class="text-gray-600 dark:text-gray-400">Modal closed. Reopening...</p>
        </div>
      </div>
    `})},c={parameters:{backgrounds:{default:"dark"}},decorators:[()=>({template:'<div class="dark"><story /></div>'})],render:()=>({components:{WalletConnectModal:a},setup(){const e=l(!0);return{showModal:e,handleClose:()=>{e.value=!1,setTimeout(()=>{e.value=!0},500)},handleConnect:n=>{console.log("Dark mode - Connecting to:",n)}}},template:`
      <WalletConnectModal
        v-if="showModal"
        @close="handleClose"
        @connect="handleConnect"
      />
    `})},r={render:()=>({components:{WalletConnectModal:a},setup(){const e=l(!1);return{showModal:e,openModal:()=>{e.value=!0},handleClose:()=>{e.value=!1},handleConnect:v=>{console.log("Connecting to:",v),e.value=!1}}},template:`
      <div>
        <button
          @click="openModal"
          class="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all"
        >
          Open Wallet Selection
        </button>

        <Teleport to="body">
          <WalletConnectModal
            v-if="showModal"
            @close="handleClose"
            @connect="handleConnect"
          />
        </Teleport>
      </div>
    `})},d={render:()=>({components:{WalletConnectModal:a},setup(){const e=l(!1),o=l(""),t=l("");return{showModal:e,openModal:()=>{e.value=!0,o.value=""},handleClose:()=>{e.value=!1,t.value||(o.value="Connection cancelled")},handleConnect:async C=>{t.value=C,o.value=`Connecting to ${C}...`,e.value=!1,await new Promise(H=>setTimeout(H,2e3)),o.value=`Connected to ${C}!`},connectionStatus:o,selectedWallet:t,disconnect:()=>{t.value="",o.value="Disconnected"}}},template:`
      <div class="min-h-[400px] flex flex-col items-center justify-center gap-4">
        <div class="text-center">
          <h3 class="text-lg font-semibold mb-2">Wallet Connection Demo</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Click the button below to open the wallet selection modal
          </p>
        </div>

        <button
          v-if="!selectedWallet"
          @click="openModal"
          class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all hover:scale-105 active:scale-95"
        >
          Connect Wallet
        </button>

        <div v-if="selectedWallet" class="flex flex-col items-center gap-3">
          <div class="flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900 rounded-lg">
            <svg class="w-5 h-5 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span class="text-green-800 dark:text-green-200 font-medium">{{ selectedWallet }}</span>
          </div>
          <button
            @click="disconnect"
            class="px-4 py-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-950 rounded-lg font-medium transition-all"
          >
            Disconnect
          </button>
        </div>

        <div v-if="connectionStatus" class="mt-4 text-sm text-gray-600 dark:text-gray-400">
          Status: {{ connectionStatus }}
        </div>

        <Teleport to="body">
          <WalletConnectModal
            v-if="showModal"
            @close="handleClose"
            @connect="handleConnect"
          />
        </Teleport>
      </div>
    `})},i={render:()=>({components:{WalletConnectModal:a},setup(){const e=l(!0);return{showModal:e,handleClose:()=>{e.value=!1,setTimeout(()=>{e.value=!0},500)},handleConnect:n=>{console.log("Connecting to:",n)}}},template:`
      <WalletConnectModal
        v-if="showModal"
        :enabled-wallets="['metamask']"
        :priority-wallets="['metamask']"
        @close="handleClose"
        @connect="handleConnect"
      />
    `})},u={render:()=>({components:{WalletConnectModal:a},setup(){const e=l(!0);return{showModal:e,handleClose:()=>{e.value=!1,setTimeout(()=>{e.value=!0},500)},handleConnect:n=>{console.log("Connecting to:",n)}}},template:`
      <WalletConnectModal
        v-if="showModal"
        :enabled-wallets="['phantom']"
        :priority-wallets="['phantom']"
        @close="handleClose"
        @connect="handleConnect"
      />
    `})},p={render:()=>({components:{WalletConnectModal:a},setup(){const e=l(!0);return{showModal:e,handleClose:()=>{e.value=!1,setTimeout(()=>{e.value=!0},500)},handleConnect:n=>{console.log("Connecting to:",n)}}},template:`
      <WalletConnectModal
        v-if="showModal"
        :enabled-wallets="['trust', 'rainbow', 'metamask']"
        :priority-wallets="['trust', 'rainbow']"
        @close="handleClose"
        @connect="handleConnect"
      />
    `})},h={render:()=>({components:{WalletConnectModal:a},setup(){const e=l(!0);return{showModal:e,handleClose:()=>{e.value=!1,setTimeout(()=>{e.value=!0},500)},handleConnect:n=>{console.log("Connecting to:",n)}}},template:`
      <WalletConnectModal
        v-if="showModal"
        :enabled-wallets="['metamask', 'phantom', 'ledger', 'argent']"
        :priority-wallets="['phantom', 'ledger']"
        @close="handleClose"
        @connect="handleConnect"
      />
    `})},m={parameters:{viewport:{defaultViewport:"iphone12"}},render:()=>({components:{WalletConnectModal:a},setup(){const e=l(!0);return{showModal:e,handleClose:()=>{e.value=!1,setTimeout(()=>{e.value=!0},500)},handleConnect:n=>{console.log("Mobile - Connecting to:",n)}}},template:`
      <WalletConnectModal
        v-if="showModal"
        @close="handleClose"
        @connect="handleConnect"
      />
    `})};var w,g,M;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => ({
    components: {
      WalletConnectModal
    },
    setup() {
      const showModal = ref(true);
      const handleClose = () => {
        showModal.value = false;
        setTimeout(() => {
          showModal.value = true;
        }, 500);
      };
      const handleConnect = (walletType: string) => {
        console.log('Connecting to:', walletType);
        alert(\`Connecting to \${walletType}\`);
      };
      return {
        showModal,
        handleClose,
        handleConnect
      };
    },
    template: \`
      <div>
        <WalletConnectModal
          v-if="showModal"
          @close="handleClose"
          @connect="handleConnect"
        />
        <div v-if="!showModal" class="text-center p-4">
          <p class="text-gray-600 dark:text-gray-400">Modal closed. Reopening...</p>
        </div>
      </div>
    \`
  })
}`,...(M=(g=s.parameters)==null?void 0:g.docs)==null?void 0:M.source}}};var f,b,y;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  decorators: [() => ({
    template: '<div class="dark"><story /></div>'
  })],
  render: () => ({
    components: {
      WalletConnectModal
    },
    setup() {
      const showModal = ref(true);
      const handleClose = () => {
        showModal.value = false;
        setTimeout(() => {
          showModal.value = true;
        }, 500);
      };
      const handleConnect = (walletType: string) => {
        console.log('Dark mode - Connecting to:', walletType);
      };
      return {
        showModal,
        handleClose,
        handleConnect
      };
    },
    template: \`
      <WalletConnectModal
        v-if="showModal"
        @close="handleClose"
        @connect="handleConnect"
      />
    \`
  })
}`,...(y=(b=c.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var k,x,W;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => ({
    components: {
      WalletConnectModal
    },
    setup() {
      const showModal = ref(false);
      const openModal = () => {
        showModal.value = true;
      };
      const handleClose = () => {
        showModal.value = false;
      };
      const handleConnect = (walletType: string) => {
        console.log('Connecting to:', walletType);
        showModal.value = false;
      };
      return {
        showModal,
        openModal,
        handleClose,
        handleConnect
      };
    },
    template: \`
      <div>
        <button
          @click="openModal"
          class="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all"
        >
          Open Wallet Selection
        </button>

        <Teleport to="body">
          <WalletConnectModal
            v-if="showModal"
            @close="handleClose"
            @connect="handleConnect"
          />
        </Teleport>
      </div>
    \`
  })
}`,...(W=(x=r.parameters)==null?void 0:x.docs)==null?void 0:W.source}}};var T,S,D;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => ({
    components: {
      WalletConnectModal
    },
    setup() {
      const showModal = ref(false);
      const connectionStatus = ref('');
      const selectedWallet = ref('');
      const openModal = () => {
        showModal.value = true;
        connectionStatus.value = '';
      };
      const handleClose = () => {
        showModal.value = false;
        if (!selectedWallet.value) {
          connectionStatus.value = 'Connection cancelled';
        }
      };
      const handleConnect = async (walletType: string) => {
        selectedWallet.value = walletType;
        connectionStatus.value = \`Connecting to \${walletType}...\`;
        showModal.value = false;

        // Simulate connection process
        await new Promise(resolve => setTimeout(resolve, 2000));
        connectionStatus.value = \`Connected to \${walletType}!\`;
      };
      const disconnect = () => {
        selectedWallet.value = '';
        connectionStatus.value = 'Disconnected';
      };
      return {
        showModal,
        openModal,
        handleClose,
        handleConnect,
        connectionStatus,
        selectedWallet,
        disconnect
      };
    },
    template: \`
      <div class="min-h-[400px] flex flex-col items-center justify-center gap-4">
        <div class="text-center">
          <h3 class="text-lg font-semibold mb-2">Wallet Connection Demo</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Click the button below to open the wallet selection modal
          </p>
        </div>

        <button
          v-if="!selectedWallet"
          @click="openModal"
          class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all hover:scale-105 active:scale-95"
        >
          Connect Wallet
        </button>

        <div v-if="selectedWallet" class="flex flex-col items-center gap-3">
          <div class="flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900 rounded-lg">
            <svg class="w-5 h-5 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span class="text-green-800 dark:text-green-200 font-medium">{{ selectedWallet }}</span>
          </div>
          <button
            @click="disconnect"
            class="px-4 py-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-950 rounded-lg font-medium transition-all"
          >
            Disconnect
          </button>
        </div>

        <div v-if="connectionStatus" class="mt-4 text-sm text-gray-600 dark:text-gray-400">
          Status: {{ connectionStatus }}
        </div>

        <Teleport to="body">
          <WalletConnectModal
            v-if="showModal"
            @close="handleClose"
            @connect="handleConnect"
          />
        </Teleport>
      </div>
    \`
  })
}`,...(D=(S=d.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var $,E,O;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => ({
    components: {
      WalletConnectModal
    },
    setup() {
      const showModal = ref(true);
      const handleClose = () => {
        showModal.value = false;
        setTimeout(() => {
          showModal.value = true;
        }, 500);
      };
      const handleConnect = (walletType: string) => {
        console.log('Connecting to:', walletType);
      };
      return {
        showModal,
        handleClose,
        handleConnect
      };
    },
    template: \`
      <WalletConnectModal
        v-if="showModal"
        :enabled-wallets="['metamask']"
        :priority-wallets="['metamask']"
        @close="handleClose"
        @connect="handleConnect"
      />
    \`
  })
}`,...(O=(E=i.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var j,V,P;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => ({
    components: {
      WalletConnectModal
    },
    setup() {
      const showModal = ref(true);
      const handleClose = () => {
        showModal.value = false;
        setTimeout(() => {
          showModal.value = true;
        }, 500);
      };
      const handleConnect = (walletType: string) => {
        console.log('Connecting to:', walletType);
      };
      return {
        showModal,
        handleClose,
        handleConnect
      };
    },
    template: \`
      <WalletConnectModal
        v-if="showModal"
        :enabled-wallets="['phantom']"
        :priority-wallets="['phantom']"
        @close="handleClose"
        @connect="handleConnect"
      />
    \`
  })
}`,...(P=(V=u.parameters)==null?void 0:V.docs)==null?void 0:P.source}}};var z,A,B;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => ({
    components: {
      WalletConnectModal
    },
    setup() {
      const showModal = ref(true);
      const handleClose = () => {
        showModal.value = false;
        setTimeout(() => {
          showModal.value = true;
        }, 500);
      };
      const handleConnect = (walletType: string) => {
        console.log('Connecting to:', walletType);
      };
      return {
        showModal,
        handleClose,
        handleConnect
      };
    },
    template: \`
      <WalletConnectModal
        v-if="showModal"
        :enabled-wallets="['trust', 'rainbow', 'metamask']"
        :priority-wallets="['trust', 'rainbow']"
        @close="handleClose"
        @connect="handleConnect"
      />
    \`
  })
}`,...(B=(A=p.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var I,R,_;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => ({
    components: {
      WalletConnectModal
    },
    setup() {
      const showModal = ref(true);
      const handleClose = () => {
        showModal.value = false;
        setTimeout(() => {
          showModal.value = true;
        }, 500);
      };
      const handleConnect = (walletType: string) => {
        console.log('Connecting to:', walletType);
      };
      return {
        showModal,
        handleClose,
        handleConnect
      };
    },
    template: \`
      <WalletConnectModal
        v-if="showModal"
        :enabled-wallets="['metamask', 'phantom', 'ledger', 'argent']"
        :priority-wallets="['phantom', 'ledger']"
        @close="handleClose"
        @connect="handleConnect"
      />
    \`
  })
}`,...(_=(R=h.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var q,F,G;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'iphone12'
    }
  },
  render: () => ({
    components: {
      WalletConnectModal
    },
    setup() {
      const showModal = ref(true);
      const handleClose = () => {
        showModal.value = false;
        setTimeout(() => {
          showModal.value = true;
        }, 500);
      };
      const handleConnect = (walletType: string) => {
        console.log('Mobile - Connecting to:', walletType);
      };
      return {
        showModal,
        handleClose,
        handleConnect
      };
    },
    template: \`
      <WalletConnectModal
        v-if="showModal"
        @close="handleClose"
        @connect="handleConnect"
      />
    \`
  })
}`,...(G=(F=m.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};const X=["Default","DarkMode","WithCustomTrigger","Interactive","MetaMaskOnly","SolanaEcosystem","MobileWallets","CustomConfiguration","MobileView"];export{h as CustomConfiguration,c as DarkMode,s as Default,d as Interactive,i as MetaMaskOnly,m as MobileView,p as MobileWallets,u as SolanaEcosystem,r as WithCustomTrigger,X as __namedExportsOrder,U as default};
