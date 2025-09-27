import{_ as n}from"./TokenSwap-DXDtFoBC.js";import"./vue.esm-bundler-DxM0YtBV.js";import"./Web3Icon-CMoc-ptT.js";const fe={title:"Tokens/TokenSwap",component:n,parameters:{layout:"centered",docs:{description:{component:"A DEX swap interface component that allows users to exchange tokens with configurable slippage, deadline, and real-time price calculations."}}},decorators:[()=>({template:'<div class="min-w-[400px] max-w-[480px]"><story /></div>'})],tags:["autodocs"],argTypes:{title:{control:"text",description:"Title of the swap interface"},fromToken:{control:"object",description:"Source token details"},toToken:{control:"object",description:"Destination token details"},defaultSlippage:{control:{type:"range",min:.1,max:5,step:.1},description:"Default slippage tolerance percentage"},defaultDeadline:{control:{type:"range",min:1,max:60,step:1},description:"Default transaction deadline in minutes"},rate:{control:"number",description:"Exchange rate between tokens"},priceImpact:{control:{type:"range",min:0,max:10,step:.01},description:"Price impact percentage"},networkFee:{control:"text",description:"Estimated network fee in USD"},poweredBy:{control:"text",description:"DEX or aggregator powering the swap"},disabled:{control:"boolean",description:"Disable swap functionality"},className:{control:"text",description:"Additional CSS classes"}}},e={args:{title:"Swap",fromToken:{symbol:"ETH",name:"Ethereum",balance:"10.5",price:2500},toToken:{symbol:"USDC",name:"USD Coin",balance:"1000",price:1},defaultSlippage:.5,defaultDeadline:20,rate:2500,priceImpact:.05,networkFee:"2.50",poweredBy:""}},t={args:{...e.args,fromToken:{symbol:"ETH",name:"Ethereum",balance:"5.25",price:2500},toToken:{symbol:"USDC",name:"USD Coin",balance:"10000",price:1},rate:2500,priceImpact:.02,networkFee:"3.00"}},r={args:{fromToken:{symbol:"BTC",name:"Bitcoin",balance:"0.5",price:45e3},toToken:{symbol:"ETH",name:"Ethereum",balance:"2.5",price:2500},defaultSlippage:.5,defaultDeadline:20,rate:18,priceImpact:.15,networkFee:"5.00"}},o={args:{fromToken:{symbol:"USDC",name:"USD Coin",balance:"5000",price:1},toToken:{symbol:"DAI",name:"Dai Stablecoin",balance:"2500",price:1},defaultSlippage:.1,defaultDeadline:10,rate:.9995,priceImpact:.01,networkFee:"1.50"}},s={args:{...e.args,priceImpact:5.2,networkFee:"8.00"}},c={args:{...e.args,fromToken:{symbol:"ETH",name:"Ethereum",balance:"0.01",price:2500}}},i={args:{fromToken:{symbol:"",name:"",balance:"0",price:0},toToken:{symbol:"",name:"",balance:"0",price:0},defaultSlippage:.5,defaultDeadline:20,rate:0,priceImpact:0,networkFee:"0"}},p={args:{...e.args,poweredBy:"Uniswap V3"}},l={args:{...e.args,defaultSlippage:2.5,defaultDeadline:30}},m={args:{...e.args,disabled:!0}},d={args:{fromToken:{symbol:"MATIC",name:"Polygon",balance:"1000",price:.85},toToken:{symbol:"USDT",name:"Tether USD",balance:"500",price:1},defaultSlippage:.5,defaultDeadline:15,rate:.85,priceImpact:.08,networkFee:"0.50",poweredBy:"1inch"}},k={args:{fromToken:{symbol:"LINK",name:"Chainlink",balance:"100",price:15},toToken:{symbol:"UNI",name:"Uniswap",balance:"50",price:6},defaultSlippage:.5,defaultDeadline:20,rate:2.5,priceImpact:.25,networkFee:"4.00",poweredBy:"SushiSwap"}},b={render:()=>({components:{TokenSwap:n},template:`
      <div class="space-y-6">
        <div class="text-center">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Interactive Token Swap
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Try entering amounts, changing settings, and clicking swap
          </p>
        </div>

        <TokenSwap
          :from-token="fromToken"
          :to-token="toToken"
          :rate="rate"
          :price-impact="priceImpact"
          :network-fee="networkFee"
          powered-by="Uniswap V3"
          @swap="handleSwap"
          @select-from-token="handleSelectFrom"
          @select-to-token="handleSelectTo"
          @settings-change="handleSettings"
        />

        <div v-if="lastAction" class="rounded-lg bg-gray-100 p-3 dark:bg-gray-800">
          <div class="text-sm font-medium text-gray-700 dark:text-gray-300">Last Action:</div>
          <pre class="mt-1 text-xs text-gray-600 dark:text-gray-400">{{ lastAction }}</pre>
        </div>
      </div>
    `,data(){return{fromToken:{symbol:"ETH",name:"Ethereum",balance:"10.5",price:2500},toToken:{symbol:"USDC",name:"USD Coin",balance:"5000",price:1},rate:2500,priceImpact:.05,networkFee:"2.50",lastAction:null}},methods:{handleSwap(a){if(this.lastAction=JSON.stringify(a,null,2),a.type==="reverse"){const Te=this.fromToken;this.fromToken=this.toToken,this.toToken=Te,this.rate=1/this.rate}},handleSelectFrom(){this.lastAction="Select From Token clicked"},handleSelectTo(){this.lastAction="Select To Token clicked"},handleSettings(a){this.lastAction=`Settings changed: ${JSON.stringify(a)}`}}})},g={render:()=>({components:{TokenSwap:n},template:`
      <div class="grid gap-6 md:grid-cols-2">
        <div>
          <h4 class="mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">
            ETH → USDC
          </h4>
          <TokenSwap
            :from-token="{ symbol: 'ETH', balance: '5', price: 2500 }"
            :to-token="{ symbol: 'USDC', balance: '1000', price: 1 }"
            :rate="2500"
            :price-impact="0.02"
            network-fee="2.50"
          />
        </div>

        <div>
          <h4 class="mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">
            BTC → ETH
          </h4>
          <TokenSwap
            :from-token="{ symbol: 'BTC', balance: '0.5', price: 45000 }"
            :to-token="{ symbol: 'ETH', balance: '10', price: 2500 }"
            :rate="18"
            :price-impact="0.15"
            network-fee="5.00"
          />
        </div>

        <div>
          <h4 class="mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">
            USDC → DAI
          </h4>
          <TokenSwap
            :from-token="{ symbol: 'USDC', balance: '5000', price: 1 }"
            :to-token="{ symbol: 'DAI', balance: '5000', price: 1 }"
            :rate="0.9995"
            :price-impact="0.01"
            network-fee="1.50"
          />
        </div>

        <div>
          <h4 class="mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">
            MATIC → USDT
          </h4>
          <TokenSwap
            :from-token="{ symbol: 'MATIC', balance: '1000', price: 0.85 }"
            :to-token="{ symbol: 'USDT', balance: '500', price: 1 }"
            :rate="0.85"
            :price-impact="0.08"
            network-fee="0.50"
          />
        </div>
      </div>
    `})},T={parameters:{backgrounds:{default:"dark"}},decorators:[()=>({template:'<div class="dark bg-gray-900 p-8 rounded-xl"><story /></div>'})],args:{...e.args,fromToken:{symbol:"ETH",name:"Ethereum",balance:"10.5",price:2500},toToken:{symbol:"USDC",name:"USD Coin",balance:"5000",price:1},rate:2500,priceImpact:.05,networkFee:"2.50",poweredBy:"Uniswap V3"}},S={render:()=>({components:{TokenSwap:n},template:`
      <div class="grid gap-6 lg:grid-cols-2">
        <div>
          <h3 class="mb-4 text-center text-sm font-semibold text-gray-700">Light Mode</h3>
          <div class="rounded-xl bg-gray-50 p-4">
            <TokenSwap
              :from-token="{ symbol: 'ETH', balance: '10.5', price: 2500 }"
              :to-token="{ symbol: 'USDC', balance: '5000', price: 1 }"
              :rate="2500"
              :price-impact="0.05"
              network-fee="2.50"
              powered-by="Uniswap V3"
            />
          </div>
        </div>

        <div>
          <h3 class="mb-4 text-center text-sm font-semibold text-gray-300">Dark Mode</h3>
          <div class="dark rounded-xl bg-gray-900 p-4">
            <TokenSwap
              :from-token="{ symbol: 'ETH', balance: '10.5', price: 2500 }"
              :to-token="{ symbol: 'USDC', balance: '5000', price: 1 }"
              :rate="2500"
              :price-impact="0.05"
              network-fee="2.50"
              powered-by="Uniswap V3"
            />
          </div>
        </div>
      </div>
    `})},y={render:()=>({components:{TokenSwap:n},template:`
      <div class="space-y-6">
        <TokenSwap
          title="Uniswap"
          :from-token="{ symbol: 'ETH', balance: '10', price: 2500 }"
          :to-token="{ symbol: 'USDC', balance: '5000', price: 1 }"
          :rate="2495"
          :price-impact="0.05"
          network-fee="3.00"
          powered-by="Uniswap V3"
        />

        <TokenSwap
          title="SushiSwap"
          :from-token="{ symbol: 'ETH', balance: '10', price: 2500 }"
          :to-token="{ symbol: 'USDC', balance: '5000', price: 1 }"
          :rate="2490"
          :price-impact="0.08"
          network-fee="2.80"
          powered-by="SushiSwap"
        />

        <TokenSwap
          title="1inch Aggregator"
          :from-token="{ symbol: 'ETH', balance: '10', price: 2500 }"
          :to-token="{ symbol: 'USDC', balance: '5000', price: 1 }"
          :rate="2498"
          :price-impact="0.03"
          network-fee="2.50"
          powered-by="1inch"
        />
      </div>
    `})};var u,f,w;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    title: 'Swap',
    fromToken: {
      symbol: 'ETH',
      name: 'Ethereum',
      balance: '10.5',
      price: 2500
    },
    toToken: {
      symbol: 'USDC',
      name: 'USD Coin',
      balance: '1000',
      price: 1
    },
    defaultSlippage: 0.5,
    defaultDeadline: 20,
    rate: 2500,
    priceImpact: 0.05,
    networkFee: '2.50',
    poweredBy: ''
  }
}`,...(w=(f=e.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var h,D,x;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    fromToken: {
      symbol: 'ETH',
      name: 'Ethereum',
      balance: '5.25',
      price: 2500
    },
    toToken: {
      symbol: 'USDC',
      name: 'USD Coin',
      balance: '10000',
      price: 1
    },
    rate: 2500,
    priceImpact: 0.02,
    networkFee: '3.00'
  }
}`,...(x=(D=t.parameters)==null?void 0:D.docs)==null?void 0:x.source}}};var v,U,C;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    fromToken: {
      symbol: 'BTC',
      name: 'Bitcoin',
      balance: '0.5',
      price: 45000
    },
    toToken: {
      symbol: 'ETH',
      name: 'Ethereum',
      balance: '2.5',
      price: 2500
    },
    defaultSlippage: 0.5,
    defaultDeadline: 20,
    rate: 18,
    priceImpact: 0.15,
    networkFee: '5.00'
  }
}`,...(C=(U=r.parameters)==null?void 0:U.docs)==null?void 0:C.source}}};var E,I,A;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    fromToken: {
      symbol: 'USDC',
      name: 'USD Coin',
      balance: '5000',
      price: 1
    },
    toToken: {
      symbol: 'DAI',
      name: 'Dai Stablecoin',
      balance: '2500',
      price: 1
    },
    defaultSlippage: 0.1,
    defaultDeadline: 10,
    rate: 0.9995,
    priceImpact: 0.01,
    networkFee: '1.50'
  }
}`,...(A=(I=o.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var H,F,B;s.parameters={...s.parameters,docs:{...(H=s.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    priceImpact: 5.2,
    networkFee: '8.00'
  }
}`,...(B=(F=s.parameters)==null?void 0:F.docs)==null?void 0:B.source}}};var M,N,V;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    fromToken: {
      symbol: 'ETH',
      name: 'Ethereum',
      balance: '0.01',
      price: 2500
    }
  }
}`,...(V=(N=c.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var L,P,O;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    fromToken: {
      symbol: '',
      name: '',
      balance: '0',
      price: 0
    },
    toToken: {
      symbol: '',
      name: '',
      balance: '0',
      price: 0
    },
    defaultSlippage: 0.5,
    defaultDeadline: 20,
    rate: 0,
    priceImpact: 0,
    networkFee: '0'
  }
}`,...(O=(P=i.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};var _,J,K;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    poweredBy: 'Uniswap V3'
  }
}`,...(K=(J=p.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var X,j,W;l.parameters={...l.parameters,docs:{...(X=l.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    defaultSlippage: 2.5,
    defaultDeadline: 30
  }
}`,...(W=(j=l.parameters)==null?void 0:j.docs)==null?void 0:W.source}}};var $,q,z;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  }
}`,...(z=(q=m.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var G,Q,R;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    fromToken: {
      symbol: 'MATIC',
      name: 'Polygon',
      balance: '1000',
      price: 0.85
    },
    toToken: {
      symbol: 'USDT',
      name: 'Tether USD',
      balance: '500',
      price: 1
    },
    defaultSlippage: 0.5,
    defaultDeadline: 15,
    rate: 0.85,
    priceImpact: 0.08,
    networkFee: '0.50',
    poweredBy: '1inch'
  }
}`,...(R=(Q=d.parameters)==null?void 0:Q.docs)==null?void 0:R.source}}};var Y,Z,ee;k.parameters={...k.parameters,docs:{...(Y=k.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    fromToken: {
      symbol: 'LINK',
      name: 'Chainlink',
      balance: '100',
      price: 15
    },
    toToken: {
      symbol: 'UNI',
      name: 'Uniswap',
      balance: '50',
      price: 6
    },
    defaultSlippage: 0.5,
    defaultDeadline: 20,
    rate: 2.5,
    priceImpact: 0.25,
    networkFee: '4.00',
    poweredBy: 'SushiSwap'
  }
}`,...(ee=(Z=k.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,ae,te;b.parameters={...b.parameters,docs:{...(ne=b.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TokenSwap
    },
    template: \`
      <div class="space-y-6">
        <div class="text-center">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Interactive Token Swap
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Try entering amounts, changing settings, and clicking swap
          </p>
        </div>

        <TokenSwap
          :from-token="fromToken"
          :to-token="toToken"
          :rate="rate"
          :price-impact="priceImpact"
          :network-fee="networkFee"
          powered-by="Uniswap V3"
          @swap="handleSwap"
          @select-from-token="handleSelectFrom"
          @select-to-token="handleSelectTo"
          @settings-change="handleSettings"
        />

        <div v-if="lastAction" class="rounded-lg bg-gray-100 p-3 dark:bg-gray-800">
          <div class="text-sm font-medium text-gray-700 dark:text-gray-300">Last Action:</div>
          <pre class="mt-1 text-xs text-gray-600 dark:text-gray-400">{{ lastAction }}</pre>
        </div>
      </div>
    \`,
    data() {
      return {
        fromToken: {
          symbol: 'ETH',
          name: 'Ethereum',
          balance: '10.5',
          price: 2500
        },
        toToken: {
          symbol: 'USDC',
          name: 'USD Coin',
          balance: '5000',
          price: 1
        },
        rate: 2500,
        priceImpact: 0.05,
        networkFee: '2.50',
        lastAction: null
      };
    },
    methods: {
      handleSwap(data) {
        this.lastAction = JSON.stringify(data, null, 2);
        if (data.type === 'reverse') {
          const temp = this.fromToken;
          this.fromToken = this.toToken;
          this.toToken = temp;
          this.rate = 1 / this.rate;
        }
      },
      handleSelectFrom() {
        this.lastAction = 'Select From Token clicked';
      },
      handleSelectTo() {
        this.lastAction = 'Select To Token clicked';
      },
      handleSettings(settings) {
        this.lastAction = \`Settings changed: \${JSON.stringify(settings)}\`;
      }
    }
  })
}`,...(te=(ae=b.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var re,oe,se;g.parameters={...g.parameters,docs:{...(re=g.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TokenSwap
    },
    template: \`
      <div class="grid gap-6 md:grid-cols-2">
        <div>
          <h4 class="mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">
            ETH → USDC
          </h4>
          <TokenSwap
            :from-token="{ symbol: 'ETH', balance: '5', price: 2500 }"
            :to-token="{ symbol: 'USDC', balance: '1000', price: 1 }"
            :rate="2500"
            :price-impact="0.02"
            network-fee="2.50"
          />
        </div>

        <div>
          <h4 class="mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">
            BTC → ETH
          </h4>
          <TokenSwap
            :from-token="{ symbol: 'BTC', balance: '0.5', price: 45000 }"
            :to-token="{ symbol: 'ETH', balance: '10', price: 2500 }"
            :rate="18"
            :price-impact="0.15"
            network-fee="5.00"
          />
        </div>

        <div>
          <h4 class="mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">
            USDC → DAI
          </h4>
          <TokenSwap
            :from-token="{ symbol: 'USDC', balance: '5000', price: 1 }"
            :to-token="{ symbol: 'DAI', balance: '5000', price: 1 }"
            :rate="0.9995"
            :price-impact="0.01"
            network-fee="1.50"
          />
        </div>

        <div>
          <h4 class="mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">
            MATIC → USDT
          </h4>
          <TokenSwap
            :from-token="{ symbol: 'MATIC', balance: '1000', price: 0.85 }"
            :to-token="{ symbol: 'USDT', balance: '500', price: 1 }"
            :rate="0.85"
            :price-impact="0.08"
            network-fee="0.50"
          />
        </div>
      </div>
    \`
  })
}`,...(se=(oe=g.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var ce,ie,pe;T.parameters={...T.parameters,docs:{...(ce=T.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  decorators: [() => ({
    template: '<div class="dark bg-gray-900 p-8 rounded-xl"><story /></div>'
  })],
  args: {
    ...Default.args,
    fromToken: {
      symbol: 'ETH',
      name: 'Ethereum',
      balance: '10.5',
      price: 2500
    },
    toToken: {
      symbol: 'USDC',
      name: 'USD Coin',
      balance: '5000',
      price: 1
    },
    rate: 2500,
    priceImpact: 0.05,
    networkFee: '2.50',
    poweredBy: 'Uniswap V3'
  }
}`,...(pe=(ie=T.parameters)==null?void 0:ie.docs)==null?void 0:pe.source}}};var le,me,de;S.parameters={...S.parameters,docs:{...(le=S.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TokenSwap
    },
    template: \`
      <div class="grid gap-6 lg:grid-cols-2">
        <div>
          <h3 class="mb-4 text-center text-sm font-semibold text-gray-700">Light Mode</h3>
          <div class="rounded-xl bg-gray-50 p-4">
            <TokenSwap
              :from-token="{ symbol: 'ETH', balance: '10.5', price: 2500 }"
              :to-token="{ symbol: 'USDC', balance: '5000', price: 1 }"
              :rate="2500"
              :price-impact="0.05"
              network-fee="2.50"
              powered-by="Uniswap V3"
            />
          </div>
        </div>

        <div>
          <h3 class="mb-4 text-center text-sm font-semibold text-gray-300">Dark Mode</h3>
          <div class="dark rounded-xl bg-gray-900 p-4">
            <TokenSwap
              :from-token="{ symbol: 'ETH', balance: '10.5', price: 2500 }"
              :to-token="{ symbol: 'USDC', balance: '5000', price: 1 }"
              :rate="2500"
              :price-impact="0.05"
              network-fee="2.50"
              powered-by="Uniswap V3"
            />
          </div>
        </div>
      </div>
    \`
  })
}`,...(de=(me=S.parameters)==null?void 0:me.docs)==null?void 0:de.source}}};var ke,be,ge;y.parameters={...y.parameters,docs:{...(ke=y.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TokenSwap
    },
    template: \`
      <div class="space-y-6">
        <TokenSwap
          title="Uniswap"
          :from-token="{ symbol: 'ETH', balance: '10', price: 2500 }"
          :to-token="{ symbol: 'USDC', balance: '5000', price: 1 }"
          :rate="2495"
          :price-impact="0.05"
          network-fee="3.00"
          powered-by="Uniswap V3"
        />

        <TokenSwap
          title="SushiSwap"
          :from-token="{ symbol: 'ETH', balance: '10', price: 2500 }"
          :to-token="{ symbol: 'USDC', balance: '5000', price: 1 }"
          :rate="2490"
          :price-impact="0.08"
          network-fee="2.80"
          powered-by="SushiSwap"
        />

        <TokenSwap
          title="1inch Aggregator"
          :from-token="{ symbol: 'ETH', balance: '10', price: 2500 }"
          :to-token="{ symbol: 'USDC', balance: '5000', price: 1 }"
          :rate="2498"
          :price-impact="0.03"
          network-fee="2.50"
          powered-by="1inch"
        />
      </div>
    \`
  })
}`,...(ge=(be=y.parameters)==null?void 0:be.docs)==null?void 0:ge.source}}};const we=["Default","ETHToUSDC","BTCToETH","USDCToDAI","HighPriceImpact","LowBalance","NoTokenSelected","WithPoweredBy","CustomSlippage","Disabled","MATICToUSDT","LINKToUNI","Interactive","MultipleSwaps","DarkMode","DarkModeComparison","DifferentDEXs"];export{r as BTCToETH,l as CustomSlippage,T as DarkMode,S as DarkModeComparison,e as Default,y as DifferentDEXs,m as Disabled,t as ETHToUSDC,s as HighPriceImpact,b as Interactive,k as LINKToUNI,c as LowBalance,d as MATICToUSDT,g as MultipleSwaps,i as NoTokenSelected,o as USDCToDAI,p as WithPoweredBy,we as __namedExportsOrder,fe as default};
