import{_ as n}from"./SendToken-BIic__kS.js";import"./vue.esm-bundler-DxM0YtBV.js";import"./Web3Icon-CMoc-ptT.js";const t=[{name:"Alice",address:"0x742d35Cc6C4C4C7218243e428F9e99F50934e47E"},{name:"Bob",address:"0x8ba1f109551bD432803012645Hac136c22C501e"},{name:"Charlie",address:"0x1234567890123456789012345678901234567890"}],Ce={title:"Tokens/SendToken",component:n,parameters:{layout:"centered",docs:{description:{component:"A comprehensive token sending interface with ENS resolution, address validation, gas estimation, and transaction preview."}}},decorators:[()=>({template:'<div class="min-w-[480px] max-w-[520px]"><story /></div>'})],tags:["autodocs"],argTypes:{title:{control:"text",description:"Title of the send interface"},subtitle:{control:"text",description:"Subtitle or description"},selectedToken:{control:"object",description:"Currently selected token details"},fromAddress:{control:"text",description:"Sender wallet address"},addressBook:{control:"object",description:"Array of saved addresses/contacts"},showAddressBook:{control:"boolean",description:"Show address book suggestions"},showGasOptions:{control:"boolean",description:"Show gas speed selection"},showPreview:{control:"boolean",description:"Show transaction preview"},showDisclaimer:{control:"boolean",description:"Show disclaimer text"},disclaimer:{control:"text",description:"Custom disclaimer text"},loading:{control:"boolean",description:"Show loading state"},loadingText:{control:"text",description:"Text shown during loading"},className:{control:"text",description:"Additional CSS classes"}}},e={args:{title:"Send Token",subtitle:"Send tokens to any address or ENS name",selectedToken:{symbol:"ETH",balance:"10.5",price:2500,decimals:18},fromAddress:"0x742d35Cc6C4C4C7218243e428F9e99F50934e47E",addressBook:t,showAddressBook:!0,showGasOptions:!0,showPreview:!0,showDisclaimer:!0,loading:!1}},a={args:{...e.args,selectedToken:{symbol:"ETH",balance:"5.25",price:2500,decimals:18}}},o={args:{...e.args,title:"Send USDC",selectedToken:{symbol:"USDC",balance:"10000",price:1,decimals:6}}},r={args:{...e.args,title:"Send Bitcoin",selectedToken:{symbol:"BTC",balance:"0.5",price:45e3,decimals:8}}},d={args:{...e.args,showAddressBook:!1,addressBook:[]}},i={args:{...e.args,showGasOptions:!1}},l={args:{...e.args,showPreview:!1}},c={args:{...e.args,title:"Send",subtitle:"",showAddressBook:!1,showGasOptions:!1,showPreview:!1,showDisclaimer:!1}},m={args:{...e.args,loading:!0,loadingText:"Processing transaction..."}},g={args:{...e.args,selectedToken:{symbol:"",balance:"",price:0,decimals:18}}},k={args:{...e.args,selectedToken:{symbol:"ETH",balance:"0.001",price:2500,decimals:18}}},u={args:{...e.args,title:"Send High Value Token",selectedToken:{symbol:"WBTC",balance:"2.5",price:45e3,decimals:8}}},p={args:{...e.args,title:"Send Stablecoin",selectedToken:{symbol:"DAI",balance:"5000",price:1,decimals:18}}},b={args:{...e.args,disclaimer:"This is a testnet transaction. No real funds will be transferred."}},S={render:()=>({components:{SendToken:n},template:`
      <div class="space-y-6">
        <div class="text-center">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Interactive Send Token
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Try entering amounts, addresses, and ENS names (use "vitalik.eth" or "test.eth")
          </p>
        </div>

        <SendToken
          :selected-token="selectedToken"
          :from-address="fromAddress"
          :address-book="addressBook"
          :loading="loading"
          :loading-text="loadingText"
          title="Send Tokens"
          subtitle="Enter recipient and amount"
          @select-token="handleSelectToken"
          @send="handleSend"
          @ens-resolve="handleENSResolve"
          @gas-estimate="handleGasEstimate"
        />

        <div v-if="lastAction" class="rounded-lg bg-gray-100 p-3 dark:bg-gray-800">
          <div class="text-sm font-medium text-gray-700 dark:text-gray-300">Last Action:</div>
          <pre class="mt-1 text-xs text-gray-600 dark:text-gray-400">{{ lastAction }}</pre>
        </div>
      </div>
    `,data(){return{selectedToken:{symbol:"ETH",balance:"10.5",price:2500,decimals:18},fromAddress:"0x742d35Cc6C4C4C7218243e428F9e99F50934e47E",addressBook:t,loading:!1,loadingText:"Sending...",lastAction:null}},methods:{handleSelectToken(){this.lastAction="Token selection clicked"},handleSend(s){this.loading=!0,this.lastAction=`Send initiated: ${JSON.stringify(s,null,2)}`,setTimeout(()=>{this.loading=!1,this.lastAction="Transaction sent successfully!"},3e3)},handleENSResolve(s){this.lastAction=`ENS resolved: ${s.name} → ${s.address}`},handleGasEstimate(s){this.lastAction=`Gas estimate requested: ${JSON.stringify(s)}`}}})},h={render:()=>({components:{SendToken:n},template:`
      <div class="grid gap-6 lg:grid-cols-2">
        <div>
          <h4 class="mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">
            Send ETH
          </h4>
          <SendToken
            :selected-token="{ symbol: 'ETH', balance: '5.25', price: 2500 }"
            :from-address="fromAddress"
            :address-book="addressBook"
            title="Send ETH"
            :show-gas-options="true"
          />
        </div>

        <div>
          <h4 class="mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">
            Send USDC
          </h4>
          <SendToken
            :selected-token="{ symbol: 'USDC', balance: '10000', price: 1 }"
            :from-address="fromAddress"
            :address-book="addressBook"
            title="Send USDC"
            :show-gas-options="true"
          />
        </div>

        <div>
          <h4 class="mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">
            Send BTC
          </h4>
          <SendToken
            :selected-token="{ symbol: 'BTC', balance: '0.5', price: 45000 }"
            :from-address="fromAddress"
            :address-book="addressBook"
            title="Send BTC"
            :show-gas-options="true"
          />
        </div>

        <div>
          <h4 class="mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">
            Send DAI
          </h4>
          <SendToken
            :selected-token="{ symbol: 'DAI', balance: '5000', price: 1 }"
            :from-address="fromAddress"
            :address-book="addressBook"
            title="Send DAI"
            :show-gas-options="true"
          />
        </div>
      </div>
    `,data(){return{fromAddress:"0x742d35Cc6C4C4C7218243e428F9e99F50934e47E",addressBook:t}}})},T={render:()=>({components:{SendToken:n},template:`
      <div class="space-y-8">
        <div>
          <h4 class="mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">
            Normal State
          </h4>
          <SendToken
            :selected-token="{ symbol: 'ETH', balance: '10.5', price: 2500 }"
            :from-address="fromAddress"
            :address-book="addressBook"
            title="Send ETH"
          />
        </div>

        <div>
          <h4 class="mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">
            Loading State
          </h4>
          <SendToken
            :selected-token="{ symbol: 'ETH', balance: '10.5', price: 2500 }"
            :from-address="fromAddress"
            :address-book="addressBook"
            title="Send ETH"
            :loading="true"
            loading-text="Confirming transaction..."
          />
        </div>

        <div>
          <h4 class="mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">
            No Token Selected
          </h4>
          <SendToken
            :selected-token="{ symbol: '', balance: '', price: 0 }"
            :from-address="fromAddress"
            :address-book="addressBook"
            title="Send Token"
          />
        </div>
      </div>
    `,data(){return{fromAddress:"0x742d35Cc6C4C4C7218243e428F9e99F50934e47E",addressBook:t}}})},f={render:()=>({components:{SendToken:n},template:`
      <div class="space-y-4">
        <div class="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 class="font-medium text-blue-900 dark:text-blue-300 mb-2">
            Try ENS Resolution
          </h4>
          <p class="text-sm text-blue-700 dark:text-blue-400">
            Enter these ENS names in the recipient field:
          </p>
          <ul class="mt-2 text-sm text-blue-700 dark:text-blue-400">
            <li>• <code class="bg-blue-100 dark:bg-blue-800 px-1 rounded">vitalik.eth</code></li>
            <li>• <code class="bg-blue-100 dark:bg-blue-800 px-1 rounded">test.eth</code></li>
          </ul>
        </div>

        <SendToken
          :selected-token="{ symbol: 'ETH', balance: '10.5', price: 2500 }"
          :from-address="fromAddress"
          :address-book="addressBook"
          title="Send with ENS"
          subtitle="Try entering an ENS name as the recipient"
        />
      </div>
    `,data(){return{fromAddress:"0x742d35Cc6C4C4C7218243e428F9e99F50934e47E",addressBook:t}}})};var x,y,v;e.parameters={...e.parameters,docs:{...(x=e.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: 'Send Token',
    subtitle: 'Send tokens to any address or ENS name',
    selectedToken: {
      symbol: 'ETH',
      balance: '10.5',
      price: 2500,
      decimals: 18
    },
    fromAddress: '0x742d35Cc6C4C4C7218243e428F9e99F50934e47E',
    addressBook: mockAddressBook,
    showAddressBook: true,
    showGasOptions: true,
    showPreview: true,
    showDisclaimer: true,
    loading: false
  }
}`,...(v=(y=e.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var C,A,E;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    selectedToken: {
      symbol: 'ETH',
      balance: '5.25',
      price: 2500,
      decimals: 18
    }
  }
}`,...(E=(A=a.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var w,B,D;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title: 'Send USDC',
    selectedToken: {
      symbol: 'USDC',
      balance: '10000',
      price: 1,
      decimals: 6
    }
  }
}`,...(D=(B=o.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var N,H,F;r.parameters={...r.parameters,docs:{...(N=r.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title: 'Send Bitcoin',
    selectedToken: {
      symbol: 'BTC',
      balance: '0.5',
      price: 45000,
      decimals: 8
    }
  }
}`,...(F=(H=r.parameters)==null?void 0:H.docs)==null?void 0:F.source}}};var G,O,I;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showAddressBook: false,
    addressBook: []
  }
}`,...(I=(O=d.parameters)==null?void 0:O.docs)==null?void 0:I.source}}};var U,P,L;i.parameters={...i.parameters,docs:{...(U=i.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showGasOptions: false
  }
}`,...(L=(P=i.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};var W,$,R;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showPreview: false
  }
}`,...(R=($=l.parameters)==null?void 0:$.docs)==null?void 0:R.source}}};var _,J,M;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title: 'Send',
    subtitle: '',
    showAddressBook: false,
    showGasOptions: false,
    showPreview: false,
    showDisclaimer: false
  }
}`,...(M=(J=c.parameters)==null?void 0:J.docs)==null?void 0:M.source}}};var V,j,q;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    loading: true,
    loadingText: 'Processing transaction...'
  }
}`,...(q=(j=m.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var z,K,Q;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    selectedToken: {
      symbol: '',
      balance: '',
      price: 0,
      decimals: 18
    }
  }
}`,...(Q=(K=g.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;k.parameters={...k.parameters,docs:{...(X=k.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    selectedToken: {
      symbol: 'ETH',
      balance: '0.001',
      price: 2500,
      decimals: 18
    }
  }
}`,...(Z=(Y=k.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,se,ne;u.parameters={...u.parameters,docs:{...(ee=u.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title: 'Send High Value Token',
    selectedToken: {
      symbol: 'WBTC',
      balance: '2.5',
      price: 45000,
      decimals: 8
    }
  }
}`,...(ne=(se=u.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var te,ae,oe;p.parameters={...p.parameters,docs:{...(te=p.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title: 'Send Stablecoin',
    selectedToken: {
      symbol: 'DAI',
      balance: '5000',
      price: 1,
      decimals: 18
    }
  }
}`,...(oe=(ae=p.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var re,de,ie;b.parameters={...b.parameters,docs:{...(re=b.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disclaimer: 'This is a testnet transaction. No real funds will be transferred.'
  }
}`,...(ie=(de=b.parameters)==null?void 0:de.docs)==null?void 0:ie.source}}};var le,ce,me;S.parameters={...S.parameters,docs:{...(le=S.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => ({
    components: {
      SendToken
    },
    template: \`
      <div class="space-y-6">
        <div class="text-center">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Interactive Send Token
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Try entering amounts, addresses, and ENS names (use "vitalik.eth" or "test.eth")
          </p>
        </div>

        <SendToken
          :selected-token="selectedToken"
          :from-address="fromAddress"
          :address-book="addressBook"
          :loading="loading"
          :loading-text="loadingText"
          title="Send Tokens"
          subtitle="Enter recipient and amount"
          @select-token="handleSelectToken"
          @send="handleSend"
          @ens-resolve="handleENSResolve"
          @gas-estimate="handleGasEstimate"
        />

        <div v-if="lastAction" class="rounded-lg bg-gray-100 p-3 dark:bg-gray-800">
          <div class="text-sm font-medium text-gray-700 dark:text-gray-300">Last Action:</div>
          <pre class="mt-1 text-xs text-gray-600 dark:text-gray-400">{{ lastAction }}</pre>
        </div>
      </div>
    \`,
    data() {
      return {
        selectedToken: {
          symbol: 'ETH',
          balance: '10.5',
          price: 2500,
          decimals: 18
        },
        fromAddress: '0x742d35Cc6C4C4C7218243e428F9e99F50934e47E',
        addressBook: mockAddressBook,
        loading: false,
        loadingText: 'Sending...',
        lastAction: null
      };
    },
    methods: {
      handleSelectToken() {
        this.lastAction = 'Token selection clicked';
      },
      handleSend(transaction) {
        this.loading = true;
        this.lastAction = \`Send initiated: \${JSON.stringify(transaction, null, 2)}\`;
        setTimeout(() => {
          this.loading = false;
          this.lastAction = 'Transaction sent successfully!';
        }, 3000);
      },
      handleENSResolve(data) {
        this.lastAction = \`ENS resolved: \${data.name} → \${data.address}\`;
      },
      handleGasEstimate(data) {
        this.lastAction = \`Gas estimate requested: \${JSON.stringify(data)}\`;
      }
    }
  })
}`,...(me=(ce=S.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};var ge,ke,ue;h.parameters={...h.parameters,docs:{...(ge=h.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => ({
    components: {
      SendToken
    },
    template: \`
      <div class="grid gap-6 lg:grid-cols-2">
        <div>
          <h4 class="mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">
            Send ETH
          </h4>
          <SendToken
            :selected-token="{ symbol: 'ETH', balance: '5.25', price: 2500 }"
            :from-address="fromAddress"
            :address-book="addressBook"
            title="Send ETH"
            :show-gas-options="true"
          />
        </div>

        <div>
          <h4 class="mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">
            Send USDC
          </h4>
          <SendToken
            :selected-token="{ symbol: 'USDC', balance: '10000', price: 1 }"
            :from-address="fromAddress"
            :address-book="addressBook"
            title="Send USDC"
            :show-gas-options="true"
          />
        </div>

        <div>
          <h4 class="mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">
            Send BTC
          </h4>
          <SendToken
            :selected-token="{ symbol: 'BTC', balance: '0.5', price: 45000 }"
            :from-address="fromAddress"
            :address-book="addressBook"
            title="Send BTC"
            :show-gas-options="true"
          />
        </div>

        <div>
          <h4 class="mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">
            Send DAI
          </h4>
          <SendToken
            :selected-token="{ symbol: 'DAI', balance: '5000', price: 1 }"
            :from-address="fromAddress"
            :address-book="addressBook"
            title="Send DAI"
            :show-gas-options="true"
          />
        </div>
      </div>
    \`,
    data() {
      return {
        fromAddress: '0x742d35Cc6C4C4C7218243e428F9e99F50934e47E',
        addressBook: mockAddressBook
      };
    }
  })
}`,...(ue=(ke=h.parameters)==null?void 0:ke.docs)==null?void 0:ue.source}}};var pe,be,Se;T.parameters={...T.parameters,docs:{...(pe=T.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => ({
    components: {
      SendToken
    },
    template: \`
      <div class="space-y-8">
        <div>
          <h4 class="mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">
            Normal State
          </h4>
          <SendToken
            :selected-token="{ symbol: 'ETH', balance: '10.5', price: 2500 }"
            :from-address="fromAddress"
            :address-book="addressBook"
            title="Send ETH"
          />
        </div>

        <div>
          <h4 class="mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">
            Loading State
          </h4>
          <SendToken
            :selected-token="{ symbol: 'ETH', balance: '10.5', price: 2500 }"
            :from-address="fromAddress"
            :address-book="addressBook"
            title="Send ETH"
            :loading="true"
            loading-text="Confirming transaction..."
          />
        </div>

        <div>
          <h4 class="mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">
            No Token Selected
          </h4>
          <SendToken
            :selected-token="{ symbol: '', balance: '', price: 0 }"
            :from-address="fromAddress"
            :address-book="addressBook"
            title="Send Token"
          />
        </div>
      </div>
    \`,
    data() {
      return {
        fromAddress: '0x742d35Cc6C4C4C7218243e428F9e99F50934e47E',
        addressBook: mockAddressBook
      };
    }
  })
}`,...(Se=(be=T.parameters)==null?void 0:be.docs)==null?void 0:Se.source}}};var he,Te,fe;f.parameters={...f.parameters,docs:{...(he=f.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => ({
    components: {
      SendToken
    },
    template: \`
      <div class="space-y-4">
        <div class="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 class="font-medium text-blue-900 dark:text-blue-300 mb-2">
            Try ENS Resolution
          </h4>
          <p class="text-sm text-blue-700 dark:text-blue-400">
            Enter these ENS names in the recipient field:
          </p>
          <ul class="mt-2 text-sm text-blue-700 dark:text-blue-400">
            <li>• <code class="bg-blue-100 dark:bg-blue-800 px-1 rounded">vitalik.eth</code></li>
            <li>• <code class="bg-blue-100 dark:bg-blue-800 px-1 rounded">test.eth</code></li>
          </ul>
        </div>

        <SendToken
          :selected-token="{ symbol: 'ETH', balance: '10.5', price: 2500 }"
          :from-address="fromAddress"
          :address-book="addressBook"
          title="Send with ENS"
          subtitle="Try entering an ENS name as the recipient"
        />
      </div>
    \`,
    data() {
      return {
        fromAddress: '0x742d35Cc6C4C4C7218243e428F9e99F50934e47E',
        addressBook: mockAddressBook
      };
    }
  })
}`,...(fe=(Te=f.parameters)==null?void 0:Te.docs)==null?void 0:fe.source}}};const Ae=["Default","ETHSend","USDCSend","BTCSend","WithoutAddressBook","WithoutGasOptions","WithoutPreview","Minimal","Loading","NoTokenSelected","LowBalance","HighValueToken","StablecoinSend","CustomDisclaimer","Interactive","MultipleTokens","DifferentStates","ENSExample"];export{r as BTCSend,b as CustomDisclaimer,e as Default,T as DifferentStates,f as ENSExample,a as ETHSend,u as HighValueToken,S as Interactive,m as Loading,k as LowBalance,c as Minimal,h as MultipleTokens,g as NoTokenSelected,p as StablecoinSend,o as USDCSend,d as WithoutAddressBook,i as WithoutGasOptions,l as WithoutPreview,Ae as __namedExportsOrder,Ce as default};
