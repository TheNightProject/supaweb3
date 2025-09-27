import{_ as t}from"./ChainSwitcher-C5FiSC6d.js";import"./vue.esm-bundler-DxM0YtBV.js";import"./Web3Icon-CMoc-ptT.js";const n=[{id:"ethereum",name:"Ethereum",description:"Ethereum Mainnet",type:"mainnet",status:"active",icon:"ethereum"},{id:"polygon",name:"Polygon",description:"Polygon Mainnet",type:"mainnet",status:"active",icon:"polygon"},{id:"arbitrum",name:"Arbitrum One",description:"Arbitrum Layer 2",type:"layer2",status:"active",icon:"arbitrum"},{id:"optimism",name:"Optimism",description:"Optimism Layer 2",type:"layer2",status:"congested",icon:"optimism"},{id:"base",name:"Base",description:"Base Layer 2",type:"layer2",status:"active",icon:"base"},{id:"avalanche",name:"Avalanche",description:"Avalanche C-Chain",type:"mainnet",status:"active",icon:"avalanche"},{id:"fantom",name:"Fantom",description:"Fantom Opera",type:"mainnet",status:"maintenance",icon:"fantom"},{id:"bsc",name:"BNB Smart Chain",description:"Binance Smart Chain",type:"mainnet",status:"active",icon:"binance-smart-chain"}],je={title:"Network/ChainSwitcher",component:t,parameters:{layout:"padded",docs:{description:{component:"A network switching interface component that allows users to select and switch between different blockchain networks with multiple display variants."}}},decorators:[()=>({template:'<div class="min-h-[300px] p-4"><story /></div>'})],tags:["autodocs"],argTypes:{chains:{control:"object",description:"Array of available blockchain networks"},selectedChainId:{control:"text",description:"ID of the currently selected chain"},variant:{control:"select",options:["button","inline"],description:"Display variant of the chain switcher"},size:{control:"select",options:["sm","md","lg"],description:"Size of the component"},appearance:{control:"select",options:["default","outline","ghost"],description:"Visual appearance style"},columns:{control:{type:"range",min:1,max:4,step:1},description:"Number of columns for inline variant"},label:{control:"text",description:"Label for inline variant"},showSearch:{control:"boolean",description:"Show search input in dropdown"},showStatus:{control:"boolean",description:"Show network status indicators"},showIcons:{control:"boolean",description:"Show network icons using Web3Icon component"},groupByType:{control:"boolean",description:"Group networks by type in dropdown"},dropdownPosition:{control:"select",options:["left","right"],description:"Position of dropdown menu"},disabled:{control:"boolean",description:"Disable the component"},className:{control:"text",description:"Additional CSS classes"}}},e={args:{chains:n,selectedChainId:"ethereum",variant:"button",size:"md",appearance:"default",showSearch:!0,showStatus:!0,showIcons:!0,groupByType:!1}},s={args:{...e.args,variant:"button"}},r={args:{...e.args,variant:"inline",label:"Select Network",columns:2}},i={args:{...e.args,size:"sm"}},c={args:{...e.args,size:"lg"}},o={args:{...e.args,appearance:"outline"}},l={args:{...e.args,appearance:"ghost"}},h={args:{...e.args,groupByType:!0,showSearch:!0}},d={args:{...e.args,showSearch:!1}},u={args:{...e.args,showStatus:!1}},m={args:{...e.args,showIcons:!1}},p={render:()=>({components:{ChainSwitcher:t},template:`
      <div class="space-y-6">
        <div class="space-y-2">
          <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300">With Network Icons</h3>
          <ChainSwitcher
            :chains="chains"
            selected-chain-id="ethereum"
            :show-icons="true"
            :show-status="true"
          />
        </div>

        <div class="space-y-2">
          <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300">With Colored Dots</h3>
          <ChainSwitcher
            :chains="chains"
            selected-chain-id="polygon"
            :show-icons="false"
            :show-status="true"
          />
        </div>

        <div class="space-y-2">
          <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300">Inline with Icons</h3>
          <ChainSwitcher
            :chains="chains.slice(0, 4)"
            selected-chain-id="arbitrum"
            variant="inline"
            :columns="2"
            label="Select Network"
            :show-icons="true"
            :show-status="true"
          />
        </div>
      </div>
    `,data(){return{chains:n}}})},g={args:{...e.args,dropdownPosition:"right"}},y={args:{...e.args,disabled:!0}},v={args:{chains:n.filter(a=>a.type==="mainnet"),selectedChainId:"ethereum",variant:"button",showStatus:!0}},w={args:{chains:n.filter(a=>a.type==="layer2"),selectedChainId:"arbitrum",variant:"inline",label:"Layer 2 Networks",columns:2}},S={args:{...e.args,variant:"inline",label:"Choose Network",columns:3,showStatus:!0}},C={args:{...e.args,variant:"inline",label:"Available Networks",columns:1,showStatus:!0}},x={args:{chains:[{id:"ethereum",name:"Ethereum",description:"Most popular smart contract platform",type:"mainnet",status:"active"},{id:"polygon",name:"Polygon",description:"Low-cost Ethereum scaling solution",type:"mainnet",status:"active"},{id:"arbitrum",name:"Arbitrum",description:"Optimistic rollup for Ethereum",type:"layer2",status:"active"},{id:"base",name:"Base",description:"Coinbase Layer 2",type:"layer2",status:"active"}],selectedChainId:"ethereum",variant:"button",groupByType:!0,showSearch:!1}},f={render:()=>({components:{ChainSwitcher:t},template:`
      <div class="space-y-6">
        <div class="space-y-2">
          <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300">Small</h3>
          <ChainSwitcher size="sm" :chains="chains" selected-chain-id="ethereum" />
        </div>

        <div class="space-y-2">
          <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300">Medium (Default)</h3>
          <ChainSwitcher size="md" :chains="chains" selected-chain-id="polygon" />
        </div>

        <div class="space-y-2">
          <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300">Large</h3>
          <ChainSwitcher size="lg" :chains="chains" selected-chain-id="arbitrum" />
        </div>
      </div>
    `,data(){return{chains:n.slice(0,5)}}})},b={render:()=>({components:{ChainSwitcher:t},template:`
      <div class="space-y-6">
        <div class="space-y-2">
          <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300">Default</h3>
          <ChainSwitcher appearance="default" :chains="chains" selected-chain-id="ethereum" />
        </div>

        <div class="space-y-2">
          <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300">Outline</h3>
          <ChainSwitcher appearance="outline" :chains="chains" selected-chain-id="polygon" />
        </div>

        <div class="space-y-2">
          <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300">Ghost</h3>
          <ChainSwitcher appearance="ghost" :chains="chains" selected-chain-id="arbitrum" />
        </div>
      </div>
    `,data(){return{chains:n.slice(0,5)}}})},k={render:()=>({components:{ChainSwitcher:t},template:`
      <div class="space-y-8 max-w-4xl">
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">1 Column</h3>
          <ChainSwitcher
            variant="inline"
            :columns="1"
            label="Single Column Layout"
            :chains="chains"
            selected-chain-id="ethereum"
            :show-status="true"
          />
        </div>

        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">2 Columns</h3>
          <ChainSwitcher
            variant="inline"
            :columns="2"
            label="Two Column Layout"
            :chains="chains"
            selected-chain-id="polygon"
            :show-status="true"
          />
        </div>

        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">3 Columns</h3>
          <ChainSwitcher
            variant="inline"
            :columns="3"
            label="Three Column Layout"
            :chains="chains"
            selected-chain-id="arbitrum"
            :show-status="true"
          />
        </div>
      </div>
    `,data(){return{chains:n}}})},I={render:()=>({components:{ChainSwitcher:t},template:`
      <div class="space-y-6">
        <div class="space-y-2">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            Selected Network: {{ selectedChain?.name || 'None' }}
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Try switching networks to see the selection change
          </p>
        </div>

        <div class="space-y-4">
          <div class="space-y-2">
            <h4 class="text-sm font-medium text-gray-700 dark:text-gray-300">Button Variant</h4>
            <ChainSwitcher
              :chains="chains"
              :selected-chain-id="selectedChainId"
              variant="button"
              :group-by-type="true"
              @change="handleChainChange"
            />
          </div>

          <div class="space-y-2">
            <h4 class="text-sm font-medium text-gray-700 dark:text-gray-300">Inline Variant</h4>
            <ChainSwitcher
              :chains="chains.slice(0, 4)"
              :selected-chain-id="selectedChainId"
              variant="inline"
              :columns="2"
              label="Quick Select"
              :show-status="true"
              @change="handleChainChange"
            />
          </div>
        </div>
      </div>
    `,data(){return{chains:n,selectedChainId:"ethereum"}},computed:{selectedChain(){return this.chains.find(a=>a.id===this.selectedChainId)}},methods:{handleChainChange(a){this.selectedChainId=a.id,console.log("Chain changed to:",a)}}})};var D,L,N;e.parameters={...e.parameters,docs:{...(D=e.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    chains: defaultChains,
    selectedChainId: 'ethereum',
    variant: 'button',
    size: 'md',
    appearance: 'default',
    showSearch: true,
    showStatus: true,
    showIcons: true,
    groupByType: false
  }
}`,...(N=(L=e.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var A,z,B;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: 'button'
  }
}`,...(B=(z=s.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var O,T,W;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: 'inline',
    label: 'Select Network',
    columns: 2
  }
}`,...(W=(T=r.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var M,P,E;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: 'sm'
  }
}`,...(E=(P=i.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};var V,G,_;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: 'lg'
  }
}`,...(_=(G=c.parameters)==null?void 0:G.docs)==null?void 0:_.source}}};var R,F,Q;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: 'outline'
  }
}`,...(Q=(F=o.parameters)==null?void 0:F.docs)==null?void 0:Q.source}}};var j,q,H;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: 'ghost'
  }
}`,...(H=(q=l.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var J,K,U;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    groupByType: true,
    showSearch: true
  }
}`,...(U=(K=h.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};var X,Y,Z;d.parameters={...d.parameters,docs:{...(X=d.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showSearch: false
  }
}`,...(Z=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,ae;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showStatus: false
  }
}`,...(ae=(ee=u.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var ne,te,se;m.parameters={...m.parameters,docs:{...(ne=m.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showIcons: false
  }
}`,...(se=(te=m.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var re,ie,ce;p.parameters={...p.parameters,docs:{...(re=p.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ChainSwitcher
    },
    template: \`
      <div class="space-y-6">
        <div class="space-y-2">
          <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300">With Network Icons</h3>
          <ChainSwitcher
            :chains="chains"
            selected-chain-id="ethereum"
            :show-icons="true"
            :show-status="true"
          />
        </div>

        <div class="space-y-2">
          <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300">With Colored Dots</h3>
          <ChainSwitcher
            :chains="chains"
            selected-chain-id="polygon"
            :show-icons="false"
            :show-status="true"
          />
        </div>

        <div class="space-y-2">
          <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300">Inline with Icons</h3>
          <ChainSwitcher
            :chains="chains.slice(0, 4)"
            selected-chain-id="arbitrum"
            variant="inline"
            :columns="2"
            label="Select Network"
            :show-icons="true"
            :show-status="true"
          />
        </div>
      </div>
    \`,
    data() {
      return {
        chains: defaultChains
      };
    }
  })
}`,...(ce=(ie=p.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var oe,le,he;g.parameters={...g.parameters,docs:{...(oe=g.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    dropdownPosition: 'right'
  }
}`,...(he=(le=g.parameters)==null?void 0:le.docs)==null?void 0:he.source}}};var de,ue,me;y.parameters={...y.parameters,docs:{...(de=y.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  }
}`,...(me=(ue=y.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var pe,ge,ye;v.parameters={...v.parameters,docs:{...(pe=v.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    chains: defaultChains.filter(chain => chain.type === 'mainnet'),
    selectedChainId: 'ethereum',
    variant: 'button',
    showStatus: true
  }
}`,...(ye=(ge=v.parameters)==null?void 0:ge.docs)==null?void 0:ye.source}}};var ve,we,Se;w.parameters={...w.parameters,docs:{...(ve=w.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    chains: defaultChains.filter(chain => chain.type === 'layer2'),
    selectedChainId: 'arbitrum',
    variant: 'inline',
    label: 'Layer 2 Networks',
    columns: 2
  }
}`,...(Se=(we=w.parameters)==null?void 0:we.docs)==null?void 0:Se.source}}};var Ce,xe,fe;S.parameters={...S.parameters,docs:{...(Ce=S.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: 'inline',
    label: 'Choose Network',
    columns: 3,
    showStatus: true
  }
}`,...(fe=(xe=S.parameters)==null?void 0:xe.docs)==null?void 0:fe.source}}};var be,ke,Ie;C.parameters={...C.parameters,docs:{...(be=C.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: 'inline',
    label: 'Available Networks',
    columns: 1,
    showStatus: true
  }
}`,...(Ie=(ke=C.parameters)==null?void 0:ke.docs)==null?void 0:Ie.source}}};var De,Le,Ne;x.parameters={...x.parameters,docs:{...(De=x.parameters)==null?void 0:De.docs,source:{originalSource:`{
  args: {
    chains: [{
      id: 'ethereum',
      name: 'Ethereum',
      description: 'Most popular smart contract platform',
      type: 'mainnet',
      status: 'active'
    }, {
      id: 'polygon',
      name: 'Polygon',
      description: 'Low-cost Ethereum scaling solution',
      type: 'mainnet',
      status: 'active'
    }, {
      id: 'arbitrum',
      name: 'Arbitrum',
      description: 'Optimistic rollup for Ethereum',
      type: 'layer2',
      status: 'active'
    }, {
      id: 'base',
      name: 'Base',
      description: 'Coinbase Layer 2',
      type: 'layer2',
      status: 'active'
    }],
    selectedChainId: 'ethereum',
    variant: 'button',
    groupByType: true,
    showSearch: false
  }
}`,...(Ne=(Le=x.parameters)==null?void 0:Le.docs)==null?void 0:Ne.source}}};var Ae,ze,Be;f.parameters={...f.parameters,docs:{...(Ae=f.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ChainSwitcher
    },
    template: \`
      <div class="space-y-6">
        <div class="space-y-2">
          <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300">Small</h3>
          <ChainSwitcher size="sm" :chains="chains" selected-chain-id="ethereum" />
        </div>

        <div class="space-y-2">
          <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300">Medium (Default)</h3>
          <ChainSwitcher size="md" :chains="chains" selected-chain-id="polygon" />
        </div>

        <div class="space-y-2">
          <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300">Large</h3>
          <ChainSwitcher size="lg" :chains="chains" selected-chain-id="arbitrum" />
        </div>
      </div>
    \`,
    data() {
      return {
        chains: defaultChains.slice(0, 5)
      };
    }
  })
}`,...(Be=(ze=f.parameters)==null?void 0:ze.docs)==null?void 0:Be.source}}};var Oe,Te,We;b.parameters={...b.parameters,docs:{...(Oe=b.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ChainSwitcher
    },
    template: \`
      <div class="space-y-6">
        <div class="space-y-2">
          <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300">Default</h3>
          <ChainSwitcher appearance="default" :chains="chains" selected-chain-id="ethereum" />
        </div>

        <div class="space-y-2">
          <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300">Outline</h3>
          <ChainSwitcher appearance="outline" :chains="chains" selected-chain-id="polygon" />
        </div>

        <div class="space-y-2">
          <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300">Ghost</h3>
          <ChainSwitcher appearance="ghost" :chains="chains" selected-chain-id="arbitrum" />
        </div>
      </div>
    \`,
    data() {
      return {
        chains: defaultChains.slice(0, 5)
      };
    }
  })
}`,...(We=(Te=b.parameters)==null?void 0:Te.docs)==null?void 0:We.source}}};var Me,Pe,Ee;k.parameters={...k.parameters,docs:{...(Me=k.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ChainSwitcher
    },
    template: \`
      <div class="space-y-8 max-w-4xl">
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">1 Column</h3>
          <ChainSwitcher
            variant="inline"
            :columns="1"
            label="Single Column Layout"
            :chains="chains"
            selected-chain-id="ethereum"
            :show-status="true"
          />
        </div>

        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">2 Columns</h3>
          <ChainSwitcher
            variant="inline"
            :columns="2"
            label="Two Column Layout"
            :chains="chains"
            selected-chain-id="polygon"
            :show-status="true"
          />
        </div>

        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">3 Columns</h3>
          <ChainSwitcher
            variant="inline"
            :columns="3"
            label="Three Column Layout"
            :chains="chains"
            selected-chain-id="arbitrum"
            :show-status="true"
          />
        </div>
      </div>
    \`,
    data() {
      return {
        chains: defaultChains
      };
    }
  })
}`,...(Ee=(Pe=k.parameters)==null?void 0:Pe.docs)==null?void 0:Ee.source}}};var Ve,Ge,_e;I.parameters={...I.parameters,docs:{...(Ve=I.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ChainSwitcher
    },
    template: \`
      <div class="space-y-6">
        <div class="space-y-2">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            Selected Network: {{ selectedChain?.name || 'None' }}
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Try switching networks to see the selection change
          </p>
        </div>

        <div class="space-y-4">
          <div class="space-y-2">
            <h4 class="text-sm font-medium text-gray-700 dark:text-gray-300">Button Variant</h4>
            <ChainSwitcher
              :chains="chains"
              :selected-chain-id="selectedChainId"
              variant="button"
              :group-by-type="true"
              @change="handleChainChange"
            />
          </div>

          <div class="space-y-2">
            <h4 class="text-sm font-medium text-gray-700 dark:text-gray-300">Inline Variant</h4>
            <ChainSwitcher
              :chains="chains.slice(0, 4)"
              :selected-chain-id="selectedChainId"
              variant="inline"
              :columns="2"
              label="Quick Select"
              :show-status="true"
              @change="handleChainChange"
            />
          </div>
        </div>
      </div>
    \`,
    data() {
      return {
        chains: defaultChains,
        selectedChainId: 'ethereum'
      };
    },
    computed: {
      selectedChain() {
        return this.chains.find(chain => chain.id === this.selectedChainId);
      }
    },
    methods: {
      handleChainChange(chain) {
        this.selectedChainId = chain.id;
        console.log('Chain changed to:', chain);
      }
    }
  })
}`,...(_e=(Ge=I.parameters)==null?void 0:Ge.docs)==null?void 0:_e.source}}};const qe=["Default","ButtonVariant","InlineVariant","SmallSize","LargeSize","OutlineAppearance","GhostAppearance","WithGrouping","WithoutSearch","WithoutStatus","WithoutIcons","IconsComparison","RightDropdown","Disabled","MainnetOnly","Layer2Only","InlineMultiColumn","InlineSingleColumn","PopularNetworks","AllSizes","AllAppearances","ResponsiveInline","Interactive"];export{b as AllAppearances,f as AllSizes,s as ButtonVariant,e as Default,y as Disabled,l as GhostAppearance,p as IconsComparison,S as InlineMultiColumn,C as InlineSingleColumn,r as InlineVariant,I as Interactive,c as LargeSize,w as Layer2Only,v as MainnetOnly,o as OutlineAppearance,x as PopularNetworks,k as ResponsiveInline,g as RightDropdown,i as SmallSize,h as WithGrouping,m as WithoutIcons,d as WithoutSearch,u as WithoutStatus,qe as __namedExportsOrder,je as default};
