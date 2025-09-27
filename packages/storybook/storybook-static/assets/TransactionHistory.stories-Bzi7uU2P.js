import{_ as pt}from"./TransactionHistory-CuNBKbw1.js";import"./vue.esm-bundler-DxM0YtBV.js";import"./Web3Icon-CMoc-ptT.js";const e=[{hash:"0x1234567890abcdef1234567890abcdef12345678901234567890abcdef12345678",type:"swap",status:"confirmed",amount:"2.5",symbol:"ETH",fromSymbol:"ETH",toSymbol:"USDC",usdValue:"6,250.00",timestamp:Date.now()-1e3*60*5,gasUsed:"21,000",blockNumber:"18,500,123",chain:"ethereum",details:"Swapped ETH for USDC on Uniswap V3"},{hash:"0x2345678901abcdef2345678901abcdef23456789012345678901abcdef23456789",type:"receive",status:"confirmed",amount:"1000",symbol:"USDC",usdValue:"1,000.00",timestamp:Date.now()-1e3*60*60*2,gasUsed:"21,000",blockNumber:"18,499,856",chain:"ethereum"},{hash:"0x3456789012abcdef3456789012abcdef34567890123456789012abcdef34567890",type:"send",status:"pending",amount:"0.1",symbol:"ETH",usdValue:"250.00",timestamp:Date.now()-1e3*60*2,gasUsed:"21,000",chain:"ethereum"},{hash:"0x4567890123abcdef4567890123abcdef45678901234567890123abcdef45678901",type:"contract",status:"confirmed",amount:"",symbol:"",usdValue:"0.00",timestamp:Date.now()-1e3*60*60*6,gasUsed:"150,000",blockNumber:"18,499,234",chain:"ethereum",details:"Interacted with Compound lending protocol"},{hash:"0x5678901234abcdef5678901234abcdef56789012345678901234abcdef56789012",type:"mint",status:"confirmed",amount:"1",symbol:"NFT",usdValue:"500.00",timestamp:Date.now()-1e3*60*60*24,gasUsed:"85,000",blockNumber:"18,498,123",chain:"ethereum",details:"Minted CryptoPunk #1234"},{hash:"0x6789012345abcdef6789012345abcdef67890123456789012345abcdef67890123",type:"swap",status:"failed",amount:"100",symbol:"MATIC",fromSymbol:"MATIC",toSymbol:"USDC",usdValue:"85.00",timestamp:Date.now()-1e3*60*60*12,gasUsed:"0",chain:"polygon",details:"Transaction failed due to insufficient gas"},{hash:"0x7890123456abcdef7890123456abcdef78901234567890123456abcdef78901234",type:"stake",status:"confirmed",amount:"32",symbol:"ETH",usdValue:"80,000.00",timestamp:Date.now()-1e3*60*60*24*3,gasUsed:"45,000",blockNumber:"18,495,678",chain:"ethereum",details:"Staked ETH for Ethereum 2.0 validation"},{hash:"0x8901234567abcdef8901234567abcdef89012345678901234567abcdef89012345",type:"receive",status:"confirmed",amount:"0.05",symbol:"ETH",usdValue:"125.00",timestamp:Date.now()-1e3*60*60*24*5,gasUsed:"21,000",blockNumber:"18,493,456",chain:"arbitrum"}],bt={title:"Transactions/TransactionHistory",component:pt,parameters:{layout:"padded",docs:{description:{component:"A comprehensive transaction history component with filtering, status indicators, pagination, and block explorer integration."}}},tags:["autodocs"],argTypes:{transactions:{control:"object",description:"Array of transaction objects"},title:{control:"text",description:"Title of the transaction history"},subtitle:{control:"text",description:"Subtitle or description"},loading:{control:"boolean",description:"Show loading skeleton state"},loadingCount:{control:{type:"range",min:1,max:10,step:1},description:"Number of skeleton items when loading"},showFilters:{control:"boolean",description:"Show filter controls"},showChainFilter:{control:"boolean",description:"Show chain filter option"},showChainIcons:{control:"boolean",description:"Show network icons for each transaction"},showExplorerLink:{control:"boolean",description:"Show link to block explorer"},showRefresh:{control:"boolean",description:"Show refresh button"},showPagination:{control:"boolean",description:"Enable pagination"},itemsPerPage:{control:{type:"range",min:1,max:20,step:1},description:"Items per page when pagination is enabled"},emptyTitle:{control:"text",description:"Title for empty state"},emptyDescription:{control:"text",description:"Description for empty state"},explorerBaseUrl:{control:"text",description:"Base URL for block explorer links"},className:{control:"text",description:"Additional CSS classes"}}},n={args:{transactions:e,title:"Transaction History",subtitle:"Recent activity on your wallet",loading:!1,showFilters:!0,showChainFilter:!0,showChainIcons:!0,showExplorerLink:!0,showRefresh:!0,showPagination:!0,itemsPerPage:5}},a={args:{transactions:[],title:"Transaction History",loading:!0,loadingCount:5}},s={args:{transactions:[],title:"Transaction History",subtitle:"No transactions yet",loading:!1,emptyTitle:"No transactions found",emptyDescription:"Your transaction history will appear here once you start using your wallet."}},o={args:{...n.args,showFilters:!1}},r={args:{...n.args,showPagination:!1}},i={args:{transactions:e.slice(0,3),title:"Recent Transactions",showFilters:!1,showChainFilter:!1,showChainIcons:!1,showExplorerLink:!1,showRefresh:!1,showPagination:!1}},c={args:{transactions:[{...e[2],status:"pending"},{...e[0],status:"pending",timestamp:Date.now()-1e3*30},{...e[1],status:"pending",timestamp:Date.now()-1e3*60}],title:"Pending Transactions",subtitle:"Transactions waiting for confirmation"}},l={args:{transactions:[{...e[5],status:"failed"},{...e[0],status:"failed",details:"Transaction failed due to slippage tolerance"},{...e[3],status:"failed",details:"Insufficient gas fee"}],title:"Failed Transactions",subtitle:"Transactions that could not be completed"}},m={args:{transactions:e.filter(t=>t.type==="swap"),title:"Swap History",subtitle:"Your token exchange transactions"}},d={args:{transactions:e.filter(t=>t.chain==="ethereum"),title:"Ethereum Transactions",subtitle:"Activity on Ethereum mainnet",showChainFilter:!1}},u={args:{transactions:[...e.slice(0,2).map(t=>({...t,chain:"ethereum"})),...e.slice(2,4).map(t=>({...t,chain:"polygon"})),...e.slice(4,6).map(t=>({...t,chain:"arbitrum"})),...e.slice(6,8).map(t=>({...t,chain:"optimism"}))],title:"Multi-Chain Activity",subtitle:"Transactions across different networks",showChainFilter:!0,showChainIcons:!0}},p={args:{transactions:Array.from({length:50},(t,y)=>({...e[y%e.length],hash:`0x${Math.random().toString(16).substr(2,64)}`,timestamp:Date.now()-y*1e3*60*30,blockNumber:`18,${5e5-y*100}`})),title:"Complete Transaction History",subtitle:"50 recent transactions",itemsPerPage:10}},h={render:()=>({components:{TransactionHistory:pt},template:`
      <div class="space-y-6">
        <div class="text-center">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Interactive Transaction History
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Try filtering, clicking transactions, and using the explorer links
          </p>
        </div>

        <TransactionHistory
          :transactions="transactions"
          title="My Wallet Activity"
          subtitle="Recent transactions and interactions"
          :show-filters="true"
          :show-chain-filter="true"
          :show-chain-icons="true"
          :show-explorer-link="true"
          :show-refresh="true"
          :items-per-page="5"
          @transaction-click="handleTransactionClick"
          @refresh="handleRefresh"
          @explorer-click="handleExplorerClick"
        />

        <div v-if="lastAction" class="rounded-lg bg-gray-100 p-3 dark:bg-gray-800">
          <div class="text-sm font-medium text-gray-700 dark:text-gray-300">Last Action:</div>
          <pre class="mt-1 text-xs text-gray-600 dark:text-gray-400">{{ lastAction }}</pre>
        </div>
      </div>
    `,data(){return{transactions:e,lastAction:null}},methods:{handleTransactionClick(t){this.lastAction=`Clicked transaction: ${t.hash.slice(0,10)}...`},handleRefresh(){this.lastAction="Refresh button clicked"},handleExplorerClick(t){this.lastAction=`Explorer link clicked: ${t.url}`}}})},g={args:{...n.args,explorerBaseUrl:"https://polygonscan.com/tx/",transactions:e.map(t=>({...t,chain:"polygon"})),title:"Polygon Transactions",subtitle:"Using Polygonscan explorer"}},f={args:{transactions:[{hash:"0xa1b2c3d4e5f6789012345678901234567890123456789012345678901234567890",type:"swap",status:"confirmed",amount:"1000",symbol:"USDC",fromSymbol:"ETH",toSymbol:"USDC",usdValue:"1,000.00",timestamp:Date.now()-1e3*60*10,gasUsed:"150,000",blockNumber:"18,500,456",chain:"ethereum",details:"Swapped 0.4 ETH for 1000 USDC on Uniswap V3"},{hash:"0xb2c3d4e5f6789012345678901234567890123456789012345678901234567890a1",type:"contract",status:"confirmed",amount:"500",symbol:"USDC",usdValue:"500.00",timestamp:Date.now()-1e3*60*30,gasUsed:"200,000",blockNumber:"18,500,123",chain:"ethereum",details:"Supplied 500 USDC to Aave lending pool"},{hash:"0xc3d4e5f6789012345678901234567890123456789012345678901234567890a1b2",type:"stake",status:"confirmed",amount:"10",symbol:"ETH",usdValue:"25,000.00",timestamp:Date.now()-1e3*60*60*2,gasUsed:"100,000",blockNumber:"18,499,876",chain:"ethereum",details:"Staked 10 ETH in Lido staking protocol"}],title:"DeFi Activity",subtitle:"Decentralized finance transactions"}},b={args:{transactions:[{hash:"0xd4e5f6789012345678901234567890123456789012345678901234567890a1b2c3",type:"mint",status:"confirmed",amount:"1",symbol:"NFT",usdValue:"0.08",timestamp:Date.now()-1e3*60*15,gasUsed:"85,000",blockNumber:"18,500,789",chain:"ethereum",details:"Minted Bored Ape #9876"},{hash:"0xe5f6789012345678901234567890123456789012345678901234567890a1b2c3d4",type:"send",status:"confirmed",amount:"1",symbol:"NFT",usdValue:"2.5",timestamp:Date.now()-1e3*60*60,gasUsed:"50,000",blockNumber:"18,500,234",chain:"ethereum",details:"Transferred CryptoPunk #1234"},{hash:"0xf6789012345678901234567890123456789012345678901234567890a1b2c3d4e5",type:"receive",status:"confirmed",amount:"1",symbol:"NFT",usdValue:"1.2",timestamp:Date.now()-1e3*60*60*3,gasUsed:"21,000",blockNumber:"18,499,567",chain:"polygon",details:"Received Azuki #5678"}],title:"NFT Activity",subtitle:"Non-fungible token transactions"}};var w,k,x;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    transactions: mockTransactions,
    title: 'Transaction History',
    subtitle: 'Recent activity on your wallet',
    loading: false,
    showFilters: true,
    showChainFilter: true,
    showChainIcons: true,
    showExplorerLink: true,
    showRefresh: true,
    showPagination: true,
    itemsPerPage: 5
  }
}`,...(x=(k=n.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var T,S,C;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    transactions: [],
    title: 'Transaction History',
    loading: true,
    loadingCount: 5
  }
}`,...(C=(S=a.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var D,v,U;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    transactions: [],
    title: 'Transaction History',
    subtitle: 'No transactions yet',
    loading: false,
    emptyTitle: 'No transactions found',
    emptyDescription: 'Your transaction history will appear here once you start using your wallet.'
  }
}`,...(U=(v=s.parameters)==null?void 0:v.docs)==null?void 0:U.source}}};var A,E,N;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showFilters: false
  }
}`,...(N=(E=o.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var F,H,P;r.parameters={...r.parameters,docs:{...(F=r.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showPagination: false
  }
}`,...(P=(H=r.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var V,R,I;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    transactions: mockTransactions.slice(0, 3),
    title: 'Recent Transactions',
    showFilters: false,
    showChainFilter: false,
    showChainIcons: false,
    showExplorerLink: false,
    showRefresh: false,
    showPagination: false
  }
}`,...(I=(R=i.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};var M,L,$;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    transactions: [{
      ...mockTransactions[2],
      status: 'pending'
    }, {
      ...mockTransactions[0],
      status: 'pending',
      timestamp: Date.now() - 1000 * 30
    }, {
      ...mockTransactions[1],
      status: 'pending',
      timestamp: Date.now() - 1000 * 60
    }],
    title: 'Pending Transactions',
    subtitle: 'Transactions waiting for confirmation'
  }
}`,...($=(L=c.parameters)==null?void 0:L.docs)==null?void 0:$.source}}};var _,B,W;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    transactions: [{
      ...mockTransactions[5],
      status: 'failed'
    }, {
      ...mockTransactions[0],
      status: 'failed',
      details: 'Transaction failed due to slippage tolerance'
    }, {
      ...mockTransactions[3],
      status: 'failed',
      details: 'Insufficient gas fee'
    }],
    title: 'Failed Transactions',
    subtitle: 'Transactions that could not be completed'
  }
}`,...(W=(B=l.parameters)==null?void 0:B.docs)==null?void 0:W.source}}};var z,Y,O;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    transactions: mockTransactions.filter(tx => tx.type === 'swap'),
    title: 'Swap History',
    subtitle: 'Your token exchange transactions'
  }
}`,...(O=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:O.source}}};var j,q,G;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    transactions: mockTransactions.filter(tx => tx.chain === 'ethereum'),
    title: 'Ethereum Transactions',
    subtitle: 'Activity on Ethereum mainnet',
    showChainFilter: false
  }
}`,...(G=(q=d.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var J,K,Q;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    transactions: [...mockTransactions.slice(0, 2).map(tx => ({
      ...tx,
      chain: 'ethereum'
    })), ...mockTransactions.slice(2, 4).map(tx => ({
      ...tx,
      chain: 'polygon'
    })), ...mockTransactions.slice(4, 6).map(tx => ({
      ...tx,
      chain: 'arbitrum'
    })), ...mockTransactions.slice(6, 8).map(tx => ({
      ...tx,
      chain: 'optimism'
    }))],
    title: 'Multi-Chain Activity',
    subtitle: 'Transactions across different networks',
    showChainFilter: true,
    showChainIcons: true
  }
}`,...(Q=(K=u.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Z,tt;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    transactions: Array.from({
      length: 50
    }, (_, i) => ({
      ...mockTransactions[i % mockTransactions.length],
      hash: \`0x\${Math.random().toString(16).substr(2, 64)}\`,
      timestamp: Date.now() - i * 1000 * 60 * 30,
      // 30 min intervals
      blockNumber: \`18,\${500000 - i * 100}\`
    })),
    title: 'Complete Transaction History',
    subtitle: '50 recent transactions',
    itemsPerPage: 10
  }
}`,...(tt=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:tt.source}}};var et,nt,at;h.parameters={...h.parameters,docs:{...(et=h.parameters)==null?void 0:et.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TransactionHistory
    },
    template: \`
      <div class="space-y-6">
        <div class="text-center">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Interactive Transaction History
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Try filtering, clicking transactions, and using the explorer links
          </p>
        </div>

        <TransactionHistory
          :transactions="transactions"
          title="My Wallet Activity"
          subtitle="Recent transactions and interactions"
          :show-filters="true"
          :show-chain-filter="true"
          :show-chain-icons="true"
          :show-explorer-link="true"
          :show-refresh="true"
          :items-per-page="5"
          @transaction-click="handleTransactionClick"
          @refresh="handleRefresh"
          @explorer-click="handleExplorerClick"
        />

        <div v-if="lastAction" class="rounded-lg bg-gray-100 p-3 dark:bg-gray-800">
          <div class="text-sm font-medium text-gray-700 dark:text-gray-300">Last Action:</div>
          <pre class="mt-1 text-xs text-gray-600 dark:text-gray-400">{{ lastAction }}</pre>
        </div>
      </div>
    \`,
    data() {
      return {
        transactions: mockTransactions,
        lastAction: null
      };
    },
    methods: {
      handleTransactionClick(transaction) {
        this.lastAction = \`Clicked transaction: \${transaction.hash.slice(0, 10)}...\`;
      },
      handleRefresh() {
        this.lastAction = 'Refresh button clicked';
      },
      handleExplorerClick(data) {
        this.lastAction = \`Explorer link clicked: \${data.url}\`;
      }
    }
  })
}`,...(at=(nt=h.parameters)==null?void 0:nt.docs)==null?void 0:at.source}}};var st,ot,rt;g.parameters={...g.parameters,docs:{...(st=g.parameters)==null?void 0:st.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    explorerBaseUrl: 'https://polygonscan.com/tx/',
    transactions: mockTransactions.map(tx => ({
      ...tx,
      chain: 'polygon'
    })),
    title: 'Polygon Transactions',
    subtitle: 'Using Polygonscan explorer'
  }
}`,...(rt=(ot=g.parameters)==null?void 0:ot.docs)==null?void 0:rt.source}}};var it,ct,lt;f.parameters={...f.parameters,docs:{...(it=f.parameters)==null?void 0:it.docs,source:{originalSource:`{
  args: {
    transactions: [{
      hash: '0xa1b2c3d4e5f6789012345678901234567890123456789012345678901234567890',
      type: 'swap',
      status: 'confirmed',
      amount: '1000',
      symbol: 'USDC',
      fromSymbol: 'ETH',
      toSymbol: 'USDC',
      usdValue: '1,000.00',
      timestamp: Date.now() - 1000 * 60 * 10,
      gasUsed: '150,000',
      blockNumber: '18,500,456',
      chain: 'ethereum',
      details: 'Swapped 0.4 ETH for 1000 USDC on Uniswap V3'
    }, {
      hash: '0xb2c3d4e5f6789012345678901234567890123456789012345678901234567890a1',
      type: 'contract',
      status: 'confirmed',
      amount: '500',
      symbol: 'USDC',
      usdValue: '500.00',
      timestamp: Date.now() - 1000 * 60 * 30,
      gasUsed: '200,000',
      blockNumber: '18,500,123',
      chain: 'ethereum',
      details: 'Supplied 500 USDC to Aave lending pool'
    }, {
      hash: '0xc3d4e5f6789012345678901234567890123456789012345678901234567890a1b2',
      type: 'stake',
      status: 'confirmed',
      amount: '10',
      symbol: 'ETH',
      usdValue: '25,000.00',
      timestamp: Date.now() - 1000 * 60 * 60 * 2,
      gasUsed: '100,000',
      blockNumber: '18,499,876',
      chain: 'ethereum',
      details: 'Staked 10 ETH in Lido staking protocol'
    }],
    title: 'DeFi Activity',
    subtitle: 'Decentralized finance transactions'
  }
}`,...(lt=(ct=f.parameters)==null?void 0:ct.docs)==null?void 0:lt.source}}};var mt,dt,ut;b.parameters={...b.parameters,docs:{...(mt=b.parameters)==null?void 0:mt.docs,source:{originalSource:`{
  args: {
    transactions: [{
      hash: '0xd4e5f6789012345678901234567890123456789012345678901234567890a1b2c3',
      type: 'mint',
      status: 'confirmed',
      amount: '1',
      symbol: 'NFT',
      usdValue: '0.08',
      timestamp: Date.now() - 1000 * 60 * 15,
      gasUsed: '85,000',
      blockNumber: '18,500,789',
      chain: 'ethereum',
      details: 'Minted Bored Ape #9876'
    }, {
      hash: '0xe5f6789012345678901234567890123456789012345678901234567890a1b2c3d4',
      type: 'send',
      status: 'confirmed',
      amount: '1',
      symbol: 'NFT',
      usdValue: '2.5',
      timestamp: Date.now() - 1000 * 60 * 60,
      gasUsed: '50,000',
      blockNumber: '18,500,234',
      chain: 'ethereum',
      details: 'Transferred CryptoPunk #1234'
    }, {
      hash: '0xf6789012345678901234567890123456789012345678901234567890a1b2c3d4e5',
      type: 'receive',
      status: 'confirmed',
      amount: '1',
      symbol: 'NFT',
      usdValue: '1.2',
      timestamp: Date.now() - 1000 * 60 * 60 * 3,
      gasUsed: '21,000',
      blockNumber: '18,499,567',
      chain: 'polygon',
      details: 'Received Azuki #5678'
    }],
    title: 'NFT Activity',
    subtitle: 'Non-fungible token transactions'
  }
}`,...(ut=(dt=b.parameters)==null?void 0:dt.docs)==null?void 0:ut.source}}};const yt=["Default","Loading","Empty","WithoutFilters","WithoutPagination","Minimal","PendingTransactions","FailedTransactions","SwapTransactions","EthereumOnly","MultiChain","LargeHistory","Interactive","CustomExplorer","DeFiActivity","NFTActivity"];export{g as CustomExplorer,f as DeFiActivity,n as Default,s as Empty,d as EthereumOnly,l as FailedTransactions,h as Interactive,p as LargeHistory,a as Loading,i as Minimal,u as MultiChain,b as NFTActivity,c as PendingTransactions,m as SwapTransactions,o as WithoutFilters,r as WithoutPagination,yt as __namedExportsOrder,bt as default};
