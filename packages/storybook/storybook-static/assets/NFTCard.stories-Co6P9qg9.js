import{_ as me}from"./NFTCard-BB9rbY10.js";import"./vue.esm-bundler-DxM0YtBV.js";const ge={title:"NFT/NFTCard",component:me,parameters:{layout:"centered",docs:{description:{component:"A feature-rich NFT display card with image display, hover effects, metadata, and interactive elements."}}},tags:["autodocs"],argTypes:{imageUrl:{control:"text",description:"URL of the NFT image"},name:{control:"text",description:"Name of the NFT"},collection:{control:"text",description:"Collection name"},price:{control:"text",description:'Price of the NFT (e.g., "2.5 ETH")'},owner:{control:"text",description:"Owner address or name"},chain:{control:"select",options:["ethereum","polygon","arbitrum","optimism","base"],description:"Blockchain network"},showActions:{control:"boolean",description:"Show action buttons on hover"},showFavorite:{control:"boolean",description:"Show favorite heart button"},showOwner:{control:"boolean",description:"Show owner information"},showPriceInInfo:{control:"boolean",description:"Show price in the info section"},className:{control:"text",description:"Additional CSS classes"}}},e={args:{imageUrl:"https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?w=400&h=400&fit=crop",name:"Cosmic Voyager #1234",collection:"Cosmic Collection",price:"2.5 ETH",owner:"0x742d35Cc6C4C4C7218243e428F9e99F50934e47E",chain:"ethereum",showActions:!0,showFavorite:!0,showOwner:!0,showPriceInInfo:!1}},o={args:{...e.args,showPriceInInfo:!0}},a={args:{...e.args,imageUrl:"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=400&fit=crop",name:"Digital Dreams #5678",collection:"Dreams Collection",price:"150 MATIC",chain:"polygon"}},r={args:{...e.args,imageUrl:"https://images.unsplash.com/photo-1635372722656-389f87a941b7?w=400&h=400&fit=crop",name:"Abstract Art #999",collection:"Abstract Series",price:"0.8 ETH",chain:"arbitrum"}},n={args:{...e.args,imageUrl:"https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=400&h=400&fit=crop",name:"Neon Nights #111",collection:"Neon Collection",price:"1.2 ETH",chain:"optimism"}},s={args:{...e.args,imageUrl:"https://images.unsplash.com/photo-1617791160588-241658c0f566?w=400&h=400&fit=crop",name:"Base Builder #777",collection:"Builder Series",price:"0.5 ETH",chain:"base"}},t={args:{...e.args,imageUrl:"https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?w=400&h=400&fit=crop",name:"Legendary Dragon #1",collection:"Legendary Beasts",price:"50.0 ETH",owner:"0x123...789",chain:"ethereum"}},c={args:{imageUrl:"https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=400&h=400&fit=crop",name:"Community Art #42",collection:"Community Gallery",owner:"0xABC...DEF",price:"",chain:"polygon"}},i={args:{...e.args,showActions:!1}},l={args:{...e.args,showFavorite:!1}},m={args:{...e.args,showOwner:!1}},p={args:{imageUrl:"https://images.unsplash.com/photo-1617791160588-241658c0f566?w=400&h=400&fit=crop",name:"Simple NFT",showActions:!1,showFavorite:!1,showOwner:!1,price:""}},h={args:{...e.args,name:"This is a Very Long NFT Name That Should Be Truncated Properly",collection:"This is Also a Very Long Collection Name That Should Handle Overflow",owner:"0x1234567890abcdef1234567890abcdef12345678"}},g={args:{...e.args,imageUrl:"https://invalid-image-url.jpg",name:"Broken Image NFT",collection:"Error Collection"}},d={args:{...e.args,imageUrl:"https://httpstat.us/200?sleep=5000",name:"Loading NFT",collection:"Slow Loading Collection"}},u={render:()=>({components:{NFTCard:me},template:`
      <div class="grid grid-cols-3 gap-4 max-w-4xl">
        <NFTCard
          imageUrl="https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?w=400&h=400&fit=crop"
          name="Ethereum NFT"
          collection="ETH Collection"
          price="2.5 ETH"
          owner="0x742d35Cc..."
          chain="ethereum"
        />
        <NFTCard
          imageUrl="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=400&fit=crop"
          name="Polygon NFT"
          collection="MATIC Collection"
          price="150 MATIC"
          owner="0x123d35Cc..."
          chain="polygon"
        />
        <NFTCard
          imageUrl="https://images.unsplash.com/photo-1635372722656-389f87a941b7?w=400&h=400&fit=crop"
          name="Arbitrum NFT"
          collection="ARB Collection"
          price="0.8 ETH"
          owner="0x456d35Cc..."
          chain="arbitrum"
        />
        <NFTCard
          imageUrl="https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=400&h=400&fit=crop"
          name="Optimism NFT"
          collection="OP Collection"
          price="1.2 ETH"
          owner="0x789d35Cc..."
          chain="optimism"
        />
        <NFTCard
          imageUrl="https://images.unsplash.com/photo-1617791160588-241658c0f566?w=400&h=400&fit=crop"
          name="Base NFT"
          collection="BASE Collection"
          price="0.5 ETH"
          owner="0xABCd35Cc..."
          chain="base"
        />
      </div>
    `})};var f,w,C;e.parameters={...e.parameters,docs:{...(f=e.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    imageUrl: 'https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?w=400&h=400&fit=crop',
    name: 'Cosmic Voyager #1234',
    collection: 'Cosmic Collection',
    price: '2.5 ETH',
    owner: '0x742d35Cc6C4C4C7218243e428F9e99F50934e47E',
    chain: 'ethereum',
    showActions: true,
    showFavorite: true,
    showOwner: true,
    showPriceInInfo: false
  }
}`,...(C=(w=e.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var T,N,F;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showPriceInInfo: true
  }
}`,...(F=(N=o.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};var b,A,S;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=400&fit=crop',
    name: 'Digital Dreams #5678',
    collection: 'Dreams Collection',
    price: '150 MATIC',
    chain: 'polygon'
  }
}`,...(S=(A=a.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var E,y,U;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    imageUrl: 'https://images.unsplash.com/photo-1635372722656-389f87a941b7?w=400&h=400&fit=crop',
    name: 'Abstract Art #999',
    collection: 'Abstract Series',
    price: '0.8 ETH',
    chain: 'arbitrum'
  }
}`,...(U=(y=r.parameters)==null?void 0:y.docs)==null?void 0:U.source}}};var x,B,H;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    imageUrl: 'https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=400&h=400&fit=crop',
    name: 'Neon Nights #111',
    collection: 'Neon Collection',
    price: '1.2 ETH',
    chain: 'optimism'
  }
}`,...(H=(B=n.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var D,I,v;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    imageUrl: 'https://images.unsplash.com/photo-1617791160588-241658c0f566?w=400&h=400&fit=crop',
    name: 'Base Builder #777',
    collection: 'Builder Series',
    price: '0.5 ETH',
    chain: 'base'
  }
}`,...(v=(I=s.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};var O,P,L;t.parameters={...t.parameters,docs:{...(O=t.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    imageUrl: 'https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?w=400&h=400&fit=crop',
    name: 'Legendary Dragon #1',
    collection: 'Legendary Beasts',
    price: '50.0 ETH',
    owner: '0x123...789',
    chain: 'ethereum'
  }
}`,...(L=(P=t.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};var M,V,_;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    imageUrl: 'https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=400&h=400&fit=crop',
    name: 'Community Art #42',
    collection: 'Community Gallery',
    owner: '0xABC...DEF',
    price: '',
    chain: 'polygon'
  }
}`,...(_=(V=c.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var k,R,j;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showActions: false
  }
}`,...(j=(R=i.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};var G,W,q;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showFavorite: false
  }
}`,...(q=(W=l.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var z,J,K;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showOwner: false
  }
}`,...(K=(J=m.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    imageUrl: 'https://images.unsplash.com/photo-1617791160588-241658c0f566?w=400&h=400&fit=crop',
    name: 'Simple NFT',
    showActions: false,
    showFavorite: false,
    showOwner: false,
    price: ''
  }
}`,...(Y=(X=p.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    name: 'This is a Very Long NFT Name That Should Be Truncated Properly',
    collection: 'This is Also a Very Long Collection Name That Should Handle Overflow',
    owner: '0x1234567890abcdef1234567890abcdef12345678'
  }
}`,...(ee=($=h.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var oe,ae,re;g.parameters={...g.parameters,docs:{...(oe=g.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    imageUrl: 'https://invalid-image-url.jpg',
    name: 'Broken Image NFT',
    collection: 'Error Collection'
  }
}`,...(re=(ae=g.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var ne,se,te;d.parameters={...d.parameters,docs:{...(ne=d.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    imageUrl: 'https://httpstat.us/200?sleep=5000',
    name: 'Loading NFT',
    collection: 'Slow Loading Collection'
  }
}`,...(te=(se=d.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};var ce,ie,le;u.parameters={...u.parameters,docs:{...(ce=u.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => ({
    components: {
      NFTCard
    },
    template: \`
      <div class="grid grid-cols-3 gap-4 max-w-4xl">
        <NFTCard
          imageUrl="https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?w=400&h=400&fit=crop"
          name="Ethereum NFT"
          collection="ETH Collection"
          price="2.5 ETH"
          owner="0x742d35Cc..."
          chain="ethereum"
        />
        <NFTCard
          imageUrl="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=400&fit=crop"
          name="Polygon NFT"
          collection="MATIC Collection"
          price="150 MATIC"
          owner="0x123d35Cc..."
          chain="polygon"
        />
        <NFTCard
          imageUrl="https://images.unsplash.com/photo-1635372722656-389f87a941b7?w=400&h=400&fit=crop"
          name="Arbitrum NFT"
          collection="ARB Collection"
          price="0.8 ETH"
          owner="0x456d35Cc..."
          chain="arbitrum"
        />
        <NFTCard
          imageUrl="https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=400&h=400&fit=crop"
          name="Optimism NFT"
          collection="OP Collection"
          price="1.2 ETH"
          owner="0x789d35Cc..."
          chain="optimism"
        />
        <NFTCard
          imageUrl="https://images.unsplash.com/photo-1617791160588-241658c0f566?w=400&h=400&fit=crop"
          name="Base NFT"
          collection="BASE Collection"
          price="0.5 ETH"
          owner="0xABCd35Cc..."
          chain="base"
        />
      </div>
    \`
  })
}`,...(le=(ie=u.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};const de=["Default","WithPriceInInfo","PolygonChain","ArbitrumChain","OptimismChain","BaseChain","HighValue","NoPrice","NoActions","NoFavorite","NoOwner","Minimal","LongNames","ImageError","LoadingState","AllChains"];export{u as AllChains,r as ArbitrumChain,s as BaseChain,e as Default,t as HighValue,g as ImageError,d as LoadingState,h as LongNames,p as Minimal,i as NoActions,l as NoFavorite,m as NoOwner,c as NoPrice,n as OptimismChain,a as PolygonChain,o as WithPriceInInfo,de as __namedExportsOrder,ge as default};
