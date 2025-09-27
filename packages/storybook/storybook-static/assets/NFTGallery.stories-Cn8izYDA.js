import{_ as oe}from"./NFTGallery-D5irf432.js";import"./vue.esm-bundler-DxM0YtBV.js";import"./NFTCard-BB9rbY10.js";const o=[{id:"1",imageUrl:"https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?w=400&h=400&fit=crop",name:"Cosmic Voyager #1234",collection:"Cosmic Collection",price:"2.5 ETH",owner:"0x742d35Cc6C4C4C7218243e428F9e99F50934e47E",chain:"ethereum"},{id:"2",imageUrl:"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=400&fit=crop",name:"Digital Dreams #5678",collection:"Dreams Collection",price:"150 MATIC",owner:"0x123d35Cc6C4C4C7218243e428F9e99F50934e47E",chain:"polygon"},{id:"3",imageUrl:"https://images.unsplash.com/photo-1635372722656-389f87a941b7?w=400&h=400&fit=crop",name:"Abstract Art #999",collection:"Abstract Series",price:"0.8 ETH",owner:"0x456d35Cc6C4C4C7218243e428F9e99F50934e47E",chain:"arbitrum"},{id:"4",imageUrl:"https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=400&h=400&fit=crop",name:"Neon Nights #111",collection:"Neon Collection",price:"1.2 ETH",owner:"0x789d35Cc6C4C4C7218243e428F9e99F50934e47E",chain:"optimism"},{id:"5",imageUrl:"https://images.unsplash.com/photo-1617791160588-241658c0f566?w=400&h=400&fit=crop",name:"Base Builder #777",collection:"Builder Series",price:"0.5 ETH",owner:"0xABCd35Cc6C4C4C7218243e428F9e99F50934e47E",chain:"base"},{id:"6",imageUrl:"https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?w=400&h=400&fit=crop",name:"Legendary Dragon #1",collection:"Legendary Beasts",price:"50.0 ETH",owner:"0x111d35Cc6C4C4C7218243e428F9e99F50934e47E",chain:"ethereum"},{id:"7",imageUrl:"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=400&fit=crop",name:"Cyber Punk #404",collection:"Cyber Collection",price:"3.3 ETH",owner:"0x222d35Cc6C4C4C7218243e428F9e99F50934e47E",chain:"ethereum"},{id:"8",imageUrl:"https://images.unsplash.com/photo-1635372722656-389f87a941b7?w=400&h=400&fit=crop",name:"Future Vision #2077",collection:"Future Series",price:"1.8 ETH",owner:"0x333d35Cc6C4C4C7218243e428F9e99F50934e47E",chain:"polygon"}],h=Array.from({length:50},(te,t)=>({id:`large-${t+1}`,imageUrl:`https://images.unsplash.com/photo-${1634193295627+t}?w=400&h=400&fit=crop`,name:`Collection Item #${t+1}`,collection:"Large Collection",price:`${(Math.random()*10).toFixed(1)} ETH`,owner:`0x${Math.random().toString(16).substr(2,40)}`,chain:["ethereum","polygon","arbitrum","optimism","base"][t%5]})),ae={title:"NFT/NFTGallery",component:oe,parameters:{layout:"fullscreen",docs:{description:{component:"A responsive grid-based gallery for displaying collections of NFTs with pagination, loading states, and customizable layouts."}}},decorators:[()=>({template:'<div class="p-6 max-w-7xl mx-auto"><story /></div>'})],tags:["autodocs"],argTypes:{nfts:{control:"object",description:"Array of NFT objects to display"},title:{control:"text",description:"Gallery title"},description:{control:"text",description:"Gallery description"},columns:{control:{type:"range",min:1,max:8,step:1},description:"Number of columns in the grid"},loading:{control:"boolean",description:"Show loading skeleton state"},loadingCount:{control:{type:"range",min:1,max:20,step:1},description:"Number of skeleton items to show when loading"},emptyTitle:{control:"text",description:"Title for empty state"},emptyDescription:{control:"text",description:"Description for empty state"},itemsPerPage:{control:{type:"range",min:0,max:50,step:1},description:"Number of items per page (0 for no pagination)"},showLoadMore:{control:"boolean",description:"Show load more button instead of pagination"},showPagination:{control:"boolean",description:"Show pagination controls"},showStats:{control:"boolean",description:"Show item count statistics"},className:{control:"text",description:"Additional CSS classes"}}},e={args:{nfts:o,title:"NFT Collection",description:"Discover amazing digital artworks and collectibles",columns:4,loading:!1,showStats:!0}},n={args:{...e.args,title:"Featured Collection",description:"Hand-picked NFTs from top artists and creators"}},s={args:{...e.args,columns:3,title:"3-Column Layout"}},r={args:{...e.args,columns:2,title:"2-Column Layout"}},a={args:{...e.args,columns:6,nfts:h.slice(0,12),title:"6-Column Layout"}},i={args:{nfts:[],title:"Loading Collection",loading:!0,loadingCount:8,columns:4}},c={args:{nfts:[],title:"Empty Collection",loading:!1,emptyTitle:"No NFTs available",emptyDescription:"This collection is currently empty. Check back later for new additions."}},l={args:{nfts:h,title:"Paginated Collection",description:"Large collection with pagination controls",columns:4,itemsPerPage:8,showPagination:!0,showStats:!0}},m={args:{nfts:o,title:"Load More Collection",description:"Collection with load more functionality",columns:4,showLoadMore:!0,showStats:!0}},p={args:{nfts:o.slice(0,4),columns:4,showStats:!1}},d={args:{nfts:h,title:"Large NFT Collection",description:"A comprehensive collection of digital artworks",columns:4,itemsPerPage:12,showPagination:!0,showStats:!0}},u={args:{nfts:o.slice(0,3),title:"Single Column Layout",description:"Perfect for featured or highlighted NFTs",columns:1}},g={render:()=>({components:{NFTGallery:oe},template:`
      <div class="space-y-8">
        <NFTGallery
          :nfts="nfts"
          title="Featured Collection"
          description="Responsive grid that adapts to screen size"
          :columns="4"
          :showStats="true"
        />
      </div>
    `,data(){return{nfts:o}}})};var f,C,w;e.parameters={...e.parameters,docs:{...(f=e.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    nfts: mockNfts,
    title: 'NFT Collection',
    description: 'Discover amazing digital artworks and collectibles',
    columns: 4,
    loading: false,
    showStats: true
  }
}`,...(w=(C=e.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var y,S,F;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title: 'Featured Collection',
    description: 'Hand-picked NFTs from top artists and creators'
  }
}`,...(F=(S=n.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};var T,N,b;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    columns: 3,
    title: '3-Column Layout'
  }
}`,...(b=(N=s.parameters)==null?void 0:N.docs)==null?void 0:b.source}}};var L,x,P;r.parameters={...r.parameters,docs:{...(L=r.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    columns: 2,
    title: '2-Column Layout'
  }
}`,...(P=(x=r.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};var E,k,v;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    columns: 6,
    nfts: largeNftCollection.slice(0, 12),
    title: '6-Column Layout'
  }
}`,...(v=(k=a.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var D,M,A;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    nfts: [],
    title: 'Loading Collection',
    loading: true,
    loadingCount: 8,
    columns: 4
  }
}`,...(A=(M=i.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};var H,U,G;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    nfts: [],
    title: 'Empty Collection',
    loading: false,
    emptyTitle: 'No NFTs available',
    emptyDescription: 'This collection is currently empty. Check back later for new additions.'
  }
}`,...(G=(U=c.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var W,_,z;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    nfts: largeNftCollection,
    title: 'Paginated Collection',
    description: 'Large collection with pagination controls',
    columns: 4,
    itemsPerPage: 8,
    showPagination: true,
    showStats: true
  }
}`,...(z=(_=l.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var B,$,R;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    nfts: mockNfts,
    title: 'Load More Collection',
    description: 'Collection with load more functionality',
    columns: 4,
    showLoadMore: true,
    showStats: true
  }
}`,...(R=($=m.parameters)==null?void 0:$.docs)==null?void 0:R.source}}};var j,I,V;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    nfts: mockNfts.slice(0, 4),
    columns: 4,
    showStats: false
  }
}`,...(V=(I=p.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var O,q,J;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    nfts: largeNftCollection,
    title: 'Large NFT Collection',
    description: 'A comprehensive collection of digital artworks',
    columns: 4,
    itemsPerPage: 12,
    showPagination: true,
    showStats: true
  }
}`,...(J=(q=d.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var K,Q,X;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    nfts: mockNfts.slice(0, 3),
    title: 'Single Column Layout',
    description: 'Perfect for featured or highlighted NFTs',
    columns: 1
  }
}`,...(X=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => ({
    components: {
      NFTGallery
    },
    template: \`
      <div class="space-y-8">
        <NFTGallery
          :nfts="nfts"
          title="Featured Collection"
          description="Responsive grid that adapts to screen size"
          :columns="4"
          :showStats="true"
        />
      </div>
    \`,
    data() {
      return {
        nfts: mockNfts
      };
    }
  })
}`,...(ee=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const ie=["Default","WithTitle","ThreeColumns","TwoColumns","SixColumns","Loading","Empty","WithPagination","WithLoadMore","Minimal","LargeCollection","SingleColumn","ResponsiveShowcase"];export{e as Default,c as Empty,d as LargeCollection,i as Loading,p as Minimal,g as ResponsiveShowcase,u as SingleColumn,a as SixColumns,s as ThreeColumns,r as TwoColumns,m as WithLoadMore,l as WithPagination,n as WithTitle,ie as __namedExportsOrder,ae as default};
