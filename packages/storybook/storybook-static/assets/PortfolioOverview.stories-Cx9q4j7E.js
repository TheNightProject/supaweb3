import{r as U,c as v,b as l,f as e,d as u,t as a,w as B,s as z,u as y,n as d,k as x,F as b,g as h,h as s}from"./vue.esm-bundler-DxM0YtBV.js";const F={class:"bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"},T={class:"p-6 border-b border-gray-200 dark:border-gray-700"},$={class:"flex items-center justify-between mb-4"},H={class:"text-2xl font-bold text-gray-900 dark:text-white"},M={key:0,class:"text-gray-600 dark:text-gray-300 mt-1"},N={class:"flex items-center gap-3"},j=["disabled"],O={class:"grid grid-cols-1 md:grid-cols-3 gap-6"},E={class:"col-span-1 md:col-span-2"},W={class:"text-4xl font-bold text-gray-900 dark:text-white mb-2"},I={class:"flex items-center gap-2"},q={key:0,class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},R={key:1,class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},X={class:"flex flex-col justify-center"},Z={class:"text-lg font-semibold text-gray-900 dark:text-white"},Y={class:"text-xs text-gray-500 dark:text-gray-400"},G={key:0,class:"p-6 border-b border-gray-200 dark:border-gray-700"},J={class:"p-6 border-b border-gray-200 dark:border-gray-700"},K={class:"space-y-4"},Q={class:"flex items-center gap-3"},_={class:"w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-medium"},ee={class:"font-medium text-gray-900 dark:text-white"},te={class:"text-sm text-gray-500 dark:text-gray-400"},ae={class:"text-right"},re={class:"font-medium text-gray-900 dark:text-white"},ne={class:"text-sm text-gray-500 dark:text-gray-400"},oe={class:"text-right ml-4"},le={class:"text-sm font-medium text-gray-900 dark:text-white"},se={class:"p-6 border-b border-gray-200 dark:border-gray-700"},ie={class:"grid grid-cols-2 md:grid-cols-4 gap-4"},de={class:"text-center p-3 bg-gray-50 dark:bg-gray-900 rounded-lg"},me={class:"text-center p-3 bg-gray-50 dark:bg-gray-900 rounded-lg"},ue={class:"text-center p-3 bg-gray-50 dark:bg-gray-900 rounded-lg"},ge={class:"text-center p-3 bg-gray-50 dark:bg-gray-900 rounded-lg"},ce={class:"text-lg font-semibold text-gray-900 dark:text-white"},ve={class:"text-sm text-green-600 dark:text-green-400"},fe={key:1,class:"p-6 border-b border-gray-200 dark:border-gray-700"},ye={class:"space-y-3"},xe={class:"flex items-center gap-3"},be={class:"w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white text-sm font-medium"},he={class:"font-medium text-gray-900 dark:text-white"},pe={class:"text-sm text-gray-500 dark:text-gray-400"},ke={class:"text-right"},we={class:"font-medium text-gray-900 dark:text-white"},Pe={class:"text-sm text-gray-500 dark:text-gray-400"},Le={class:"p-6"},De={class:"flex flex-col sm:flex-row gap-3"},C={__name:"PortfolioOverview",props:{title:{type:String,default:"Portfolio Overview"},subtitle:{type:String,default:""},totalValue:{type:Number,required:!0},portfolioChange24h:{type:Number,default:0},allTimeHigh:{type:Number,default:0},allTimeHighDate:{type:String,default:null},assets:{type:Array,default:()=>[]},totalPnL:{type:Number,default:0},realizedPnL:{type:Number,default:0},unrealizedPnL:{type:Number,default:0},bestPerformer:{type:Object,default:()=>({symbol:"N/A",change:0})},protocolBreakdown:{type:Array,default:()=>[]},showChart:{type:Boolean,default:!0},showViewAll:{type:Boolean,default:!0},loading:{type:Boolean,default:!1}},emits:["timeframe-change","refresh","view-all-assets","export-portfolio","view-analytics","view-transactions"],setup(r,{emit:Ce}){const i=r,c=U("24h"),f=v(()=>i.totalValue===0?0:i.portfolioChange24h/(i.totalValue-i.portfolioChange24h)*100),V=v(()=>i.assets.sort((o,t)=>t.value-o.value).slice(0,5).map(o=>({...o,percentage:o.value/i.totalValue*100}))),S=v(()=>i.assets.length),A=o=>o?new Date(o).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}):"N/A";return(o,t)=>(s(),l("div",F,[e("div",T,[e("div",$,[e("div",null,[e("h2",H,a(r.title||"Portfolio Overview"),1),r.subtitle?(s(),l("p",M,a(r.subtitle),1)):u("",!0)]),e("div",N,[B(e("select",{"onUpdate:modelValue":t[0]||(t[0]=n=>c.value=n),onChange:t[1]||(t[1]=n=>o.$emit("timeframe-change",c.value)),class:"px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"},[...t[7]||(t[7]=[y('<option value="24h">24H</option><option value="7d">7D</option><option value="30d">30D</option><option value="90d">90D</option><option value="1y">1Y</option><option value="all">All</option>',6)])],544),[[z,c.value]]),e("button",{onClick:t[2]||(t[2]=n=>o.$emit("refresh")),disabled:r.loading,class:"p-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"},[(s(),l("svg",{class:d([r.loading?"animate-spin":"","w-4 h-4 text-gray-600 dark:text-gray-400"]),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[...t[8]||(t[8]=[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"},null,-1)])],2))],8,j)])]),e("div",O,[e("div",E,[e("div",W," $"+a(r.totalValue.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})),1),e("div",I,[e("div",{class:d(["flex items-center gap-1 text-sm font-medium",r.portfolioChange24h>=0?"text-green-600 dark:text-green-400":"text-red-600 dark:text-red-400"])},[r.portfolioChange24h>=0?(s(),l("svg",q,[...t[9]||(t[9]=[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M7 17l9.2-9.2M17 17V7H7"},null,-1)])])):(s(),l("svg",R,[...t[10]||(t[10]=[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 7l-9.2 9.2M7 7v10h10"},null,-1)])])),x(" "+a(r.portfolioChange24h>=0?"+":"")+"$"+a(Math.abs(r.portfolioChange24h).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}))+" ("+a(f.value>=0?"+":"")+a(f.value.toFixed(2))+"%) ",1)],2),t[11]||(t[11]=e("span",{class:"text-sm text-gray-500 dark:text-gray-400"},"24h",-1))])]),e("div",X,[t[12]||(t[12]=e("div",{class:"text-sm text-gray-500 dark:text-gray-400 mb-1"},"All-time High",-1)),e("div",Z," $"+a(r.allTimeHigh.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})),1),e("div",Y,a(A(r.allTimeHighDate)),1)])])]),r.showChart?(s(),l("div",G,[...t[13]||(t[13]=[y('<div class="h-64 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg flex items-center justify-center"><div class="text-center"><div class="text-lg font-medium text-gray-600 dark:text-gray-400 mb-2"> Portfolio Chart </div><div class="text-sm text-gray-500 dark:text-gray-500"> Chart visualization would be rendered here using a charting library </div><div class="mt-4 flex items-center justify-center gap-4 text-xs"><div class="flex items-center gap-1"><div class="w-3 h-3 bg-blue-500 rounded"></div><span class="text-gray-600 dark:text-gray-400">Portfolio Value</span></div><div class="flex items-center gap-1"><div class="w-3 h-3 bg-green-500 rounded"></div><span class="text-gray-600 dark:text-gray-400">Realized P&amp;L</span></div></div></div></div>',1)])])):u("",!0),e("div",J,[t[14]||(t[14]=e("h3",{class:"text-lg font-semibold text-gray-900 dark:text-white mb-4"}," Asset Allocation ",-1)),e("div",K,[(s(!0),l(b,null,h(V.value,n=>(s(),l("div",{key:n.symbol,class:"flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg"},[e("div",Q,[e("div",_,a(n.symbol.charAt(0)),1),e("div",null,[e("div",ee,a(n.symbol),1),e("div",te,a(n.name),1)])]),e("div",ae,[e("div",re," $"+a(n.value.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})),1),e("div",ne,a(n.amount)+" "+a(n.symbol),1)]),e("div",oe,[e("div",le,a(n.percentage.toFixed(1))+"% ",1),e("div",{class:d(["text-sm",n.change24h>=0?"text-green-600 dark:text-green-400":"text-red-600 dark:text-red-400"])},a(n.change24h>=0?"+":"")+a(n.change24h.toFixed(2))+"% ",3)])]))),128))]),r.showViewAll?(s(),l("button",{key:0,onClick:t[3]||(t[3]=n=>o.$emit("view-all-assets")),class:"w-full mt-4 py-2 text-sm text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"}," View All Assets ("+a(S.value)+") ",1)):u("",!0)]),e("div",se,[t[19]||(t[19]=e("h3",{class:"text-lg font-semibold text-gray-900 dark:text-white mb-4"}," Performance Metrics ",-1)),e("div",ie,[e("div",de,[t[15]||(t[15]=e("div",{class:"text-sm text-gray-500 dark:text-gray-400 mb-1"},"Total P&L",-1)),e("div",{class:d(["text-lg font-semibold",r.totalPnL>=0?"text-green-600 dark:text-green-400":"text-red-600 dark:text-red-400"])},a(r.totalPnL>=0?"+":"")+"$"+a(Math.abs(r.totalPnL).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})),3)]),e("div",me,[t[16]||(t[16]=e("div",{class:"text-sm text-gray-500 dark:text-gray-400 mb-1"},"Realized P&L",-1)),e("div",{class:d(["text-lg font-semibold",r.realizedPnL>=0?"text-green-600 dark:text-green-400":"text-red-600 dark:text-red-400"])},a(r.realizedPnL>=0?"+":"")+"$"+a(Math.abs(r.realizedPnL).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})),3)]),e("div",ue,[t[17]||(t[17]=e("div",{class:"text-sm text-gray-500 dark:text-gray-400 mb-1"},"Unrealized P&L",-1)),e("div",{class:d(["text-lg font-semibold",r.unrealizedPnL>=0?"text-green-600 dark:text-green-400":"text-red-600 dark:text-red-400"])},a(r.unrealizedPnL>=0?"+":"")+"$"+a(Math.abs(r.unrealizedPnL).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})),3)]),e("div",ge,[t[18]||(t[18]=e("div",{class:"text-sm text-gray-500 dark:text-gray-400 mb-1"},"Best Performer",-1)),e("div",ce,a(r.bestPerformer.symbol),1),e("div",ve," +"+a(r.bestPerformer.change.toFixed(2))+"% ",1)])])]),r.protocolBreakdown&&r.protocolBreakdown.length>0?(s(),l("div",fe,[t[20]||(t[20]=e("h3",{class:"text-lg font-semibold text-gray-900 dark:text-white mb-4"}," Protocol Breakdown ",-1)),e("div",ye,[(s(!0),l(b,null,h(r.protocolBreakdown,n=>(s(),l("div",{key:n.name,class:"flex items-center justify-between"},[e("div",xe,[e("div",be,a(n.name.charAt(0)),1),e("div",null,[e("div",he,a(n.name),1),e("div",pe,a(n.type),1)])]),e("div",ke,[e("div",we," $"+a(n.value.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})),1),e("div",Pe,a(n.percentage.toFixed(1))+"% ",1)])]))),128))])])):u("",!0),e("div",Le,[e("div",De,[e("button",{onClick:t[4]||(t[4]=n=>o.$emit("export-portfolio")),class:"flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"},[...t[21]||(t[21]=[e("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})],-1),x(" Export Portfolio ",-1)])]),e("button",{onClick:t[5]||(t[5]=n=>o.$emit("view-analytics")),class:"flex-1 sm:flex-none border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium py-3 px-6 rounded-lg transition-colors"}," View Analytics "),e("button",{onClick:t[6]||(t[6]=n=>o.$emit("view-transactions")),class:"flex-1 sm:flex-none border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium py-3 px-6 rounded-lg transition-colors"}," Transactions ")])])]))}};C.__docgenInfo={exportName:"default",displayName:"PortfolioOverview",description:"",tags:{},props:[{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"'Portfolio Overview'"}},{name:"subtitle",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"totalValue",type:{name:"number"},required:!0},{name:"portfolioChange24h",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"allTimeHigh",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"allTimeHighDate",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"assets",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"totalPnL",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"realizedPnL",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"unrealizedPnL",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"bestPerformer",type:{name:"object"},defaultValue:{func:!1,value:`{
  symbol: 'N/A',
  change: 0
}`}},{name:"protocolBreakdown",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"showChart",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"showViewAll",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"loading",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"timeframe-change"},{name:"refresh"},{name:"view-all-assets"},{name:"export-portfolio"},{name:"view-analytics"},{name:"view-transactions"}],sourceFiles:["/Users/steve/Projects/tnp.web.supaweb3/packages/ui/src/components/portfolio/PortfolioOverview.vue"]};const Se={title:"Portfolio/PortfolioOverview",component:C,parameters:{layout:"centered",docs:{description:{component:"A comprehensive portfolio overview with asset allocation, performance metrics, and interactive charts."}}},decorators:[()=>({template:'<div class="min-w-[800px] max-w-[1000px]"><story /></div>'})],tags:["autodocs"]},m={args:{title:"Portfolio Overview",subtitle:"Track your complete Web3 portfolio performance",totalValue:125750.5,portfolioChange24h:2856.75,allTimeHigh:185e3,allTimeHighDate:"2024-03-15T10:30:00Z",assets:[{symbol:"ETH",name:"Ethereum",amount:"25.5",value:63750,change24h:3.2},{symbol:"BTC",name:"Bitcoin",amount:"0.85",value:42500,change24h:-1.1},{symbol:"USDC",name:"USD Coin",amount:"15000",value:15e3,change24h:.1},{symbol:"UNI",name:"Uniswap",amount:"500",value:3250,change24h:5.8},{symbol:"SUPA",name:"SupaWeb3 Token",amount:"2500",value:1250.5,change24h:12.4}],totalPnL:25750.5,realizedPnL:12500,unrealizedPnL:13250.5,bestPerformer:{symbol:"SUPA",change:12.4},protocolBreakdown:[{name:"Uniswap",type:"DEX",value:45200,percentage:35.9},{name:"Aave",type:"Lending",value:28500,percentage:22.7},{name:"Compound",type:"Lending",value:18750,percentage:14.9},{name:"MakerDAO",type:"CDP",value:12200,percentage:9.7}]}},g={args:{...m.args,title:"Portfolio - Bear Market",totalValue:75250.3,portfolioChange24h:-8540.2,totalPnL:-24749.7,realizedPnL:-5e3,unrealizedPnL:-19749.7,bestPerformer:{symbol:"USDC",change:.1}}};var p,k,w;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: 'Portfolio Overview',
    subtitle: 'Track your complete Web3 portfolio performance',
    totalValue: 125750.50,
    portfolioChange24h: 2856.75,
    allTimeHigh: 185000.00,
    allTimeHighDate: '2024-03-15T10:30:00Z',
    assets: [{
      symbol: 'ETH',
      name: 'Ethereum',
      amount: '25.5',
      value: 63750.00,
      change24h: 3.2
    }, {
      symbol: 'BTC',
      name: 'Bitcoin',
      amount: '0.85',
      value: 42500.00,
      change24h: -1.1
    }, {
      symbol: 'USDC',
      name: 'USD Coin',
      amount: '15000',
      value: 15000.00,
      change24h: 0.1
    }, {
      symbol: 'UNI',
      name: 'Uniswap',
      amount: '500',
      value: 3250.00,
      change24h: 5.8
    }, {
      symbol: 'SUPA',
      name: 'SupaWeb3 Token',
      amount: '2500',
      value: 1250.50,
      change24h: 12.4
    }],
    totalPnL: 25750.50,
    realizedPnL: 12500.00,
    unrealizedPnL: 13250.50,
    bestPerformer: {
      symbol: 'SUPA',
      change: 12.4
    },
    protocolBreakdown: [{
      name: 'Uniswap',
      type: 'DEX',
      value: 45200.00,
      percentage: 35.9
    }, {
      name: 'Aave',
      type: 'Lending',
      value: 28500.00,
      percentage: 22.7
    }, {
      name: 'Compound',
      type: 'Lending',
      value: 18750.00,
      percentage: 14.9
    }, {
      name: 'MakerDAO',
      type: 'CDP',
      value: 12200.00,
      percentage: 9.7
    }]
  }
}`,...(w=(k=m.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var P,L,D;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title: 'Portfolio - Bear Market',
    totalValue: 75250.30,
    portfolioChange24h: -8540.20,
    totalPnL: -24749.70,
    realizedPnL: -5000.00,
    unrealizedPnL: -19749.70,
    bestPerformer: {
      symbol: 'USDC',
      change: 0.1
    }
  }
}`,...(D=(L=g.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};const Ae=["Default","BearMarket"];export{g as BearMarket,m as Default,Ae as __namedExportsOrder,Se as default};
