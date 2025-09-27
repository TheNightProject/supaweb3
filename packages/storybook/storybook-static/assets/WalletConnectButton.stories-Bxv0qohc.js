import{_ as h}from"./WalletConnectButton-BrnjTsVN.js";import"./vue.esm-bundler-DxM0YtBV.js";import"./WalletConnectModal-BtMAl8bb.js";import"./Web3Icon-CMoc-ptT.js";const ft={title:"Auth/WalletConnectButton",component:h,parameters:{layout:"centered",docs:{description:{component:"A Web3 wallet connection button that opens a modal with multiple wallet options."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","outline","ghost","gradient"],description:"Visual style variant of the button"},size:{control:"select",options:["sm","md","lg"],description:"Size of the button"},disabled:{control:"boolean",description:"Whether the button is disabled"},connectText:{control:"text",description:"Text shown when wallet is not connected"},connectingText:{control:"text",description:"Text shown while connecting"},connectedText:{control:"text",description:"Text shown when wallet is connected"},className:{control:"text",description:"Additional CSS classes"},enabledWallets:{control:"check",options:["metamask","walletconnect","coinbase","phantom","trust","argent","rainbow","ledger"],description:"Wallets available for connection"},priorityWallets:{control:"check",options:["metamask","walletconnect","coinbase","phantom","trust","argent","rainbow","ledger"],description:"Wallets shown in priority/popular section"}}},e={args:{variant:"default",size:"md"}},a={args:{variant:"outline",size:"md"}},n={args:{variant:"ghost",size:"md"}},s={args:{variant:"gradient",size:"md"}},r={args:{variant:"default",size:"sm"}},o={args:{variant:"default",size:"lg"}},l={args:{variant:"gradient",size:"md",connectText:"🚀 Launch Wallet",connectingText:"🔄 Connecting...",connectedText:"✅ Connected!"}},i={args:{variant:"default",size:"md",disabled:!0}},c={render:t=>({components:{WalletConnectButton:h},setup(){return{args:t}},template:`
      <div class="flex flex-col gap-4">
        <div class="flex gap-4 items-center">
          <WalletConnectButton variant="default" size="sm" />
          <WalletConnectButton variant="default" size="md" />
          <WalletConnectButton variant="default" size="lg" />
        </div>
        <div class="flex gap-4 items-center">
          <WalletConnectButton variant="outline" size="sm" />
          <WalletConnectButton variant="outline" size="md" />
          <WalletConnectButton variant="outline" size="lg" />
        </div>
        <div class="flex gap-4 items-center">
          <WalletConnectButton variant="ghost" size="sm" />
          <WalletConnectButton variant="ghost" size="md" />
          <WalletConnectButton variant="ghost" size="lg" />
        </div>
        <div class="flex gap-4 items-center">
          <WalletConnectButton variant="gradient" size="sm" />
          <WalletConnectButton variant="gradient" size="md" />
          <WalletConnectButton variant="gradient" size="lg" />
        </div>
      </div>
    `})},d={args:{variant:"gradient",size:"md",enabledWallets:["metamask"],priorityWallets:["metamask"]}},m={args:{variant:"outline",size:"md",enabledWallets:["phantom"],priorityWallets:["phantom"]}},u={args:{variant:"default",size:"md",enabledWallets:["metamask","walletconnect","coinbase"],priorityWallets:["metamask","walletconnect","coinbase"]}},p={args:{variant:"gradient",size:"lg",enabledWallets:["metamask","trust","rainbow"],priorityWallets:["trust","rainbow"]}},g={args:{variant:"outline",size:"md",enabledWallets:["ledger","metamask"],priorityWallets:["ledger"]}},v={args:{variant:"default",size:"md",enabledWallets:["metamask","walletconnect","coinbase","phantom","trust","rainbow"],priorityWallets:["phantom","trust"]}},W={render:t=>({components:{WalletConnectButton:h},setup(){return{args:t}},template:`
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="space-y-3">
          <h3 class="font-semibold text-gray-900 dark:text-white">MetaMask Only</h3>
          <WalletConnectButton
            variant="gradient"
            :enabled-wallets="['metamask']"
            :priority-wallets="['metamask']"
          />
        </div>

        <div class="space-y-3">
          <h3 class="font-semibold text-gray-900 dark:text-white">Mobile Wallets</h3>
          <WalletConnectButton
            variant="outline"
            :enabled-wallets="['trust', 'rainbow', 'metamask']"
            :priority-wallets="['trust', 'rainbow']"
          />
        </div>

        <div class="space-y-3">
          <h3 class="font-semibold text-gray-900 dark:text-white">Solana Ecosystem</h3>
          <WalletConnectButton
            variant="ghost"
            :enabled-wallets="['phantom']"
            :priority-wallets="['phantom']"
          />
        </div>

        <div class="space-y-3">
          <h3 class="font-semibold text-gray-900 dark:text-white">All Wallets</h3>
          <WalletConnectButton
            variant="default"
            :enabled-wallets="['metamask', 'walletconnect', 'coinbase', 'phantom', 'trust', 'argent', 'rainbow', 'ledger']"
            :priority-wallets="['metamask', 'walletconnect', 'coinbase']"
          />
        </div>
      </div>
    `})},b={parameters:{backgrounds:{default:"dark"}},decorators:[()=>({template:'<div class="dark bg-gray-900 p-8"><story /></div>'})],render:t=>({components:{WalletConnectButton:h},setup(){return{args:t}},template:`
      <div class="flex flex-col gap-4">
        <WalletConnectButton variant="default" />
        <WalletConnectButton variant="outline" />
        <WalletConnectButton variant="ghost" />
        <WalletConnectButton variant="gradient" />
      </div>
    `})};var w,f,C;e.parameters={...e.parameters,docs:{...(w=e.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    size: 'md'
  }
}`,...(C=(f=e.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var y,z,x;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    size: 'md'
  }
}`,...(x=(z=a.parameters)==null?void 0:z.docs)==null?void 0:x.source}}};var k,B,S;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    size: 'md'
  }
}`,...(S=(B=n.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var T,M,D;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    variant: 'gradient',
    size: 'md'
  }
}`,...(D=(M=s.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var O,A,_;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    size: 'sm'
  }
}`,...(_=(A=r.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};var E,G,L;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    size: 'lg'
  }
}`,...(L=(G=o.parameters)==null?void 0:G.docs)==null?void 0:L.source}}};var P,V,H;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    variant: 'gradient',
    size: 'md',
    connectText: '🚀 Launch Wallet',
    connectingText: '🔄 Connecting...',
    connectedText: '✅ Connected!'
  }
}`,...(H=(V=l.parameters)==null?void 0:V.docs)==null?void 0:H.source}}};var N,j,q;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    size: 'md',
    disabled: true
  }
}`,...(q=(j=i.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var F,I,J;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => ({
    components: {
      WalletConnectButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="flex flex-col gap-4">
        <div class="flex gap-4 items-center">
          <WalletConnectButton variant="default" size="sm" />
          <WalletConnectButton variant="default" size="md" />
          <WalletConnectButton variant="default" size="lg" />
        </div>
        <div class="flex gap-4 items-center">
          <WalletConnectButton variant="outline" size="sm" />
          <WalletConnectButton variant="outline" size="md" />
          <WalletConnectButton variant="outline" size="lg" />
        </div>
        <div class="flex gap-4 items-center">
          <WalletConnectButton variant="ghost" size="sm" />
          <WalletConnectButton variant="ghost" size="md" />
          <WalletConnectButton variant="ghost" size="lg" />
        </div>
        <div class="flex gap-4 items-center">
          <WalletConnectButton variant="gradient" size="sm" />
          <WalletConnectButton variant="gradient" size="md" />
          <WalletConnectButton variant="gradient" size="lg" />
        </div>
      </div>
    \`
  })
}`,...(J=(I=c.parameters)==null?void 0:I.docs)==null?void 0:J.source}}};var K,Q,R;d.parameters={...d.parameters,docs:{...(K=d.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    variant: 'gradient',
    size: 'md',
    enabledWallets: ['metamask'],
    priorityWallets: ['metamask']
  }
}`,...(R=(Q=d.parameters)==null?void 0:Q.docs)==null?void 0:R.source}}};var U,X,Y;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    size: 'md',
    enabledWallets: ['phantom'],
    priorityWallets: ['phantom']
  }
}`,...(Y=(X=m.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,tt;u.parameters={...u.parameters,docs:{...(Z=u.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    size: 'md',
    enabledWallets: ['metamask', 'walletconnect', 'coinbase'],
    priorityWallets: ['metamask', 'walletconnect', 'coinbase']
  }
}`,...(tt=($=u.parameters)==null?void 0:$.docs)==null?void 0:tt.source}}};var et,at,nt;p.parameters={...p.parameters,docs:{...(et=p.parameters)==null?void 0:et.docs,source:{originalSource:`{
  args: {
    variant: 'gradient',
    size: 'lg',
    enabledWallets: ['metamask', 'trust', 'rainbow'],
    priorityWallets: ['trust', 'rainbow']
  }
}`,...(nt=(at=p.parameters)==null?void 0:at.docs)==null?void 0:nt.source}}};var st,rt,ot;g.parameters={...g.parameters,docs:{...(st=g.parameters)==null?void 0:st.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    size: 'md',
    enabledWallets: ['ledger', 'metamask'],
    priorityWallets: ['ledger']
  }
}`,...(ot=(rt=g.parameters)==null?void 0:rt.docs)==null?void 0:ot.source}}};var lt,it,ct;v.parameters={...v.parameters,docs:{...(lt=v.parameters)==null?void 0:lt.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    size: 'md',
    enabledWallets: ['metamask', 'walletconnect', 'coinbase', 'phantom', 'trust', 'rainbow'],
    priorityWallets: ['phantom', 'trust']
  }
}`,...(ct=(it=v.parameters)==null?void 0:it.docs)==null?void 0:ct.source}}};var dt,mt,ut;W.parameters={...W.parameters,docs:{...(dt=W.parameters)==null?void 0:dt.docs,source:{originalSource:`{
  render: args => ({
    components: {
      WalletConnectButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="space-y-3">
          <h3 class="font-semibold text-gray-900 dark:text-white">MetaMask Only</h3>
          <WalletConnectButton
            variant="gradient"
            :enabled-wallets="['metamask']"
            :priority-wallets="['metamask']"
          />
        </div>

        <div class="space-y-3">
          <h3 class="font-semibold text-gray-900 dark:text-white">Mobile Wallets</h3>
          <WalletConnectButton
            variant="outline"
            :enabled-wallets="['trust', 'rainbow', 'metamask']"
            :priority-wallets="['trust', 'rainbow']"
          />
        </div>

        <div class="space-y-3">
          <h3 class="font-semibold text-gray-900 dark:text-white">Solana Ecosystem</h3>
          <WalletConnectButton
            variant="ghost"
            :enabled-wallets="['phantom']"
            :priority-wallets="['phantom']"
          />
        </div>

        <div class="space-y-3">
          <h3 class="font-semibold text-gray-900 dark:text-white">All Wallets</h3>
          <WalletConnectButton
            variant="default"
            :enabled-wallets="['metamask', 'walletconnect', 'coinbase', 'phantom', 'trust', 'argent', 'rainbow', 'ledger']"
            :priority-wallets="['metamask', 'walletconnect', 'coinbase']"
          />
        </div>
      </div>
    \`
  })
}`,...(ut=(mt=W.parameters)==null?void 0:mt.docs)==null?void 0:ut.source}}};var pt,gt,vt;b.parameters={...b.parameters,docs:{...(pt=b.parameters)==null?void 0:pt.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  decorators: [() => ({
    template: '<div class="dark bg-gray-900 p-8"><story /></div>'
  })],
  render: args => ({
    components: {
      WalletConnectButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="flex flex-col gap-4">
        <WalletConnectButton variant="default" />
        <WalletConnectButton variant="outline" />
        <WalletConnectButton variant="ghost" />
        <WalletConnectButton variant="gradient" />
      </div>
    \`
  })
}`,...(vt=(gt=b.parameters)==null?void 0:gt.docs)==null?void 0:vt.source}}};const Ct=["Default","Outline","Ghost","Gradient","Small","Large","CustomText","Disabled","AllVariants","MetaMaskOnly","SolanaWallets","PopularWalletsOnly","MobileWallets","HardwareWallets","CustomPriority","WalletConfigurations","DarkMode"];export{c as AllVariants,v as CustomPriority,l as CustomText,b as DarkMode,e as Default,i as Disabled,n as Ghost,s as Gradient,g as HardwareWallets,o as Large,d as MetaMaskOnly,p as MobileWallets,a as Outline,u as PopularWalletsOnly,r as Small,m as SolanaWallets,W as WalletConfigurations,Ct as __namedExportsOrder,ft as default};
