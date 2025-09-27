import{r as b,c as m,b as s,f as r,d as l,t as i,n as y,w as H,s as I,u as $,F as S,g as V,v as Xe,h as n}from"./vue.esm-bundler-DxM0YtBV.js";const ze={class:"bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"},qe={class:"p-6"},Ke={class:"flex justify-between items-start mb-6"},We={class:"text-xl font-bold text-gray-900 dark:text-white"},Ge={key:0,class:"text-sm text-gray-600 dark:text-gray-400 mt-1"},Qe={key:0,class:"flex items-center space-x-2"},et=["disabled"],tt={key:0,class:"grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"},rt={class:"bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800"},at={class:"text-2xl font-bold text-green-600 dark:text-green-400"},ot={class:"bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800"},st={class:"text-2xl font-bold text-blue-600 dark:text-blue-400"},nt={class:"bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800"},it={class:"text-2xl font-bold text-purple-600 dark:text-purple-400"},lt={key:1,class:"flex flex-wrap items-center justify-between gap-4 mb-6"},dt={class:"flex items-center space-x-2"},ct=["value"],ut={key:1,class:"relative"},pt={class:"flex items-center space-x-2"},gt={key:2,class:"space-y-4"},mt={class:"flex items-center justify-between"},ht={class:"flex items-center space-x-4"},yt=["src","alt"],xt={key:1,class:"text-sm"},bt={class:"font-semibold text-gray-900 dark:text-white flex items-center space-x-2"},ft={class:"flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-400 mt-1"},vt={class:"font-medium"},kt={key:0,class:"text-green-600 dark:text-green-400"},wt={class:"text-xs"},At={class:"flex items-center space-x-2"},Ct=["onClick"],Ht={key:0,class:"mt-3 pt-3 border-t border-gray-200 dark:border-gray-700"},St={key:0,class:"text-sm text-gray-600 dark:text-gray-400 mb-2"},Vt={key:1,class:"flex flex-wrap gap-2"},Tt={key:3,class:"mt-6 flex justify-center"},Dt={class:"flex items-center space-x-2"},Pt=["disabled"],Et={class:"px-4 py-2 text-sm text-gray-600 dark:text-gray-400"},Bt=["disabled"],jt={key:4,class:"space-y-4"},Ft={key:5,class:"text-center py-12"},Nt={class:"text-lg font-medium text-gray-900 dark:text-white mb-2"},Lt={class:"text-gray-600 dark:text-gray-400 mb-6"},Mt={key:6,class:"mt-6 pt-6 border-t border-gray-200 dark:border-gray-700"},Rt={class:"flex justify-between items-center"},Yt={class:"text-sm text-gray-600 dark:text-gray-400"},f={__name:"AirdropHistory",props:{title:{type:String,default:"Airdrop History"},subtitle:{type:String,default:"Track your claimed airdrops and their value over time"},history:{type:Array,default:()=>[]},showSummary:{type:Boolean,default:!0},showFilters:{type:Boolean,default:!0},showChainFilter:{type:Boolean,default:!0},showSearch:{type:Boolean,default:!0},showDetails:{type:Boolean,default:!0},showTxLinks:{type:Boolean,default:!0},showPagination:{type:Boolean,default:!0},showRefresh:{type:Boolean,default:!0},showExport:{type:Boolean,default:!0},showCheckAirdrops:{type:Boolean,default:!0},itemsPerPage:{type:Number,default:10},loading:{type:Boolean,default:!1},emptyTitle:{type:String,default:"No Airdrop History"},emptyDescription:{type:String,default:"Your claimed airdrops will appear here once you start claiming them."},className:{type:String,default:""}},emits:["refresh","view-transaction","check-airdrops","export-csv","export-json"],setup(a,{emit:je}){const u=a,v=je,k=b("all"),w=b("all"),A=b(""),h=b("date"),p=b(1),Fe=m(()=>[...new Set(u.history.map(e=>e.chain).filter(Boolean))].sort()),g=m(()=>{let o=[...u.history];if(k.value!=="all"){const e=new Date,t={"7d":7,"30d":30,"90d":90,"1y":365},Z=new Date(e-t[k.value]*24*60*60*1e3);o=o.filter(x=>new Date(x.claimedAt)>=Z)}if(w.value!=="all"&&(o=o.filter(e=>e.chain===w.value)),A.value){const e=A.value.toLowerCase();o=o.filter(t=>t.project.toLowerCase().includes(e)||t.token.toLowerCase().includes(e)||t.description&&t.description.toLowerCase().includes(e))}return o.sort((e,t)=>h.value==="date"?new Date(t.claimedAt)-new Date(e.claimedAt):h.value==="value"?parseFloat(t.usdValue||0)-parseFloat(e.usdValue||0):h.value==="protocol"?e.project.localeCompare(t.project):h.value==="amount"?parseFloat(t.amount||0)-parseFloat(e.amount||0):0),o}),Ne=m(()=>{if(!u.showPagination)return g.value;const o=(p.value-1)*u.itemsPerPage,e=o+u.itemsPerPage;return g.value.slice(o,e)}),C=m(()=>Math.ceil(g.value.length/u.itemsPerPage)),Le=m(()=>u.history.length),Me=m(()=>u.history.reduce((o,e)=>o+parseFloat(e.usdValue||0),0)),Re=m(()=>new Set(u.history.map(o=>o.project)).size),Ye=()=>{v("refresh")},Oe=o=>{v("view-transaction",o)},Ze=()=>{v("export-csv",g.value)},Ie=()=>{v("export-json",g.value)},_e=o=>new Date(o).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),_=o=>({ethereum:"Ethereum",polygon:"Polygon",arbitrum:"Arbitrum",optimism:"Optimism",avalanche:"Avalanche",bsc:"BSC"})[o.toLowerCase()]||o.charAt(0).toUpperCase()+o.slice(1),$e=o=>({ethereum:"bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400",polygon:"bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400",arbitrum:"bg-cyan-100 text-cyan-800 dark:bg-cyan-900/20 dark:text-cyan-400",optimism:"bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400",avalanche:"bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400",bsc:"bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"})[o.toLowerCase()]||"bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",Ue=o=>({claimed:"bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400",pending:"bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400",failed:"bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400"})[o]||"bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",Je=o=>o.charAt(0).toUpperCase()+o.slice(1);return(o,e)=>(n(),s("div",{class:y(["airdrop-history",a.className])},[r("div",ze,[r("div",qe,[r("div",Ke,[r("div",null,[r("h2",We,i(a.title),1),a.subtitle?(n(),s("p",Ge,i(a.subtitle),1)):l("",!0)]),a.showRefresh?(n(),s("div",Qe,[r("button",{onClick:Ye,disabled:a.loading,class:"p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"},[(n(),s("svg",{class:y(["w-5 h-5",{"animate-spin":a.loading}]),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[...e[7]||(e[7]=[r("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"},null,-1)])],2))],8,et)])):l("",!0)]),a.showSummary&&a.history.length>0?(n(),s("div",tt,[r("div",rt,[r("div",at,i(Le.value),1),e[8]||(e[8]=r("div",{class:"text-sm text-green-700 dark:text-green-300"}," Total Claimed ",-1))]),r("div",ot,[r("div",st," $"+i(Me.value.toLocaleString()),1),e[9]||(e[9]=r("div",{class:"text-sm text-blue-700 dark:text-blue-300"}," Total Value ",-1))]),r("div",nt,[r("div",it,i(Re.value),1),e[10]||(e[10]=r("div",{class:"text-sm text-purple-700 dark:text-purple-300"}," Protocols ",-1))])])):l("",!0),a.showFilters&&a.history.length>0?(n(),s("div",lt,[r("div",dt,[H(r("select",{"onUpdate:modelValue":e[0]||(e[0]=t=>k.value=t),class:"px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"},[...e[11]||(e[11]=[$('<option value="all">All Time</option><option value="7d">Last 7 Days</option><option value="30d">Last 30 Days</option><option value="90d">Last 90 Days</option><option value="1y">This Year</option>',5)])],512),[[I,k.value]]),a.showChainFilter?H((n(),s("select",{key:0,"onUpdate:modelValue":e[1]||(e[1]=t=>w.value=t),class:"px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"},[e[12]||(e[12]=r("option",{value:"all"},"All Chains",-1)),(n(!0),s(S,null,V(Fe.value,t=>(n(),s("option",{key:t,value:t},i(_(t)),9,ct))),128))],512)),[[I,w.value]]):l("",!0),a.showSearch?(n(),s("div",ut,[H(r("input",{"onUpdate:modelValue":e[2]||(e[2]=t=>A.value=t),placeholder:"Search protocols...",class:"pl-8 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white w-48"},null,512),[[Xe,A.value]]),e[13]||(e[13]=r("svg",{class:"w-4 h-4 text-gray-400 absolute left-2.5 top-2.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[r("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})],-1))])):l("",!0)]),r("div",pt,[e[15]||(e[15]=r("label",{class:"text-sm text-gray-700 dark:text-gray-300"},"Sort:",-1)),H(r("select",{"onUpdate:modelValue":e[3]||(e[3]=t=>h.value=t),class:"px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"},[...e[14]||(e[14]=[r("option",{value:"date"},"Date (Newest First)",-1),r("option",{value:"value"},"Value (High to Low)",-1),r("option",{value:"protocol"},"Protocol Name",-1),r("option",{value:"amount"},"Amount",-1)])],512),[[I,h.value]])])])):l("",!0),g.value.length>0?(n(),s("div",gt,[(n(!0),s(S,null,V(Ne.value,(t,Z)=>(n(),s("div",{key:t.id||Z,class:"p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200"},[r("div",mt,[r("div",ht,[t.icon?(n(),s("div",{key:0,class:y(["w-12 h-12 rounded-full flex items-center justify-center text-white font-bold",t.iconBg||"bg-gradient-to-r from-blue-500 to-purple-600"])},[t.icon.startsWith("http")?(n(),s("img",{key:0,src:t.icon,alt:t.project,class:"w-12 h-12 rounded-full"},null,8,yt)):(n(),s("span",xt,i(t.icon),1))],2)):(n(),s("div",{key:1,class:y(["w-12 h-12 rounded-full flex items-center justify-center text-white font-bold",t.iconBg||"bg-gradient-to-r from-blue-500 to-purple-600"])},i(t.project.slice(0,2).toUpperCase()),3)),r("div",null,[r("h3",bt,[r("span",null,i(t.project),1),t.chain?(n(),s("span",{key:0,class:y(["px-2 py-1 text-xs rounded",$e(t.chain)])},i(_(t.chain)),3)):l("",!0)]),r("div",ft,[r("span",vt,i(t.amount)+" "+i(t.token),1),t.usdValue?(n(),s("span",kt," $"+i(t.usdValue),1)):l("",!0),r("span",wt,i(_e(t.claimedAt)),1)])])]),r("div",At,[t.txHash&&a.showTxLinks?(n(),s("button",{key:0,onClick:x=>Oe(t),class:"p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors",title:"View Transaction"},[...e[16]||(e[16]=[r("svg",{class:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[r("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})],-1)])],8,Ct)):l("",!0),r("div",{class:y(["px-3 py-1 rounded-full text-xs font-medium",Ue(t.status)])},i(Je(t.status)),3)])]),a.showDetails&&(t.description||t.tags)?(n(),s("div",Ht,[t.description?(n(),s("p",St,i(t.description),1)):l("",!0),t.tags&&t.tags.length>0?(n(),s("div",Vt,[(n(!0),s(S,null,V(t.tags,x=>(n(),s("span",{key:x,class:"px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded"},i(x),1))),128))])):l("",!0)])):l("",!0)]))),128))])):l("",!0),a.showPagination&&C.value>1?(n(),s("div",Tt,[r("nav",Dt,[r("button",{onClick:e[4]||(e[4]=t=>p.value=Math.max(1,p.value-1)),disabled:p.value===1,class:"px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"}," Previous ",8,Pt),r("span",Et," Page "+i(p.value)+" of "+i(C.value),1),r("button",{onClick:e[5]||(e[5]=t=>p.value=Math.min(C.value,p.value+1)),disabled:p.value===C.value,class:"px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"}," Next ",8,Bt)])])):l("",!0),a.loading?(n(),s("div",jt,[(n(),s(S,null,V(5,t=>r("div",{key:t,class:"animate-pulse"},[...e[17]||(e[17]=[$('<div class="flex items-center space-x-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg"><div class="w-12 h-12 bg-gray-300 dark:bg-gray-600 rounded-full"></div><div class="flex-1 space-y-2"><div class="w-32 h-4 bg-gray-300 dark:bg-gray-600 rounded"></div><div class="w-48 h-3 bg-gray-300 dark:bg-gray-600 rounded"></div></div><div class="w-20 h-6 bg-gray-300 dark:bg-gray-600 rounded-full"></div></div>',1)])])),64))])):a.history.length===0?(n(),s("div",Ft,[e[18]||(e[18]=r("div",{class:"w-16 h-16 mx-auto mb-4 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center"},[r("svg",{class:"w-8 h-8 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[r("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})])],-1)),r("h3",Nt,i(a.emptyTitle),1),r("p",Lt,i(a.emptyDescription),1),a.showCheckAirdrops?(n(),s("button",{key:0,onClick:e[6]||(e[6]=t=>o.$emit("check-airdrops")),class:"px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-medium transition-colors"}," Check for Airdrops ")):l("",!0)])):l("",!0),a.showExport&&a.history.length>0?(n(),s("div",Mt,[r("div",Rt,[r("div",Yt,i(g.value.length)+" "+i(g.value.length===1?"record":"records")+" found ",1),r("div",{class:"flex items-center space-x-2"},[r("button",{onClick:Ze,class:"px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"}," 📊 Export CSV "),r("button",{onClick:Ie,class:"px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"}," 📄 Export JSON ")])])])):l("",!0)])])],2))}};f.__docgenInfo={exportName:"default",displayName:"AirdropHistory",description:"",tags:{},props:[{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"'Airdrop History'"}},{name:"subtitle",type:{name:"string"},defaultValue:{func:!1,value:"'Track your claimed airdrops and their value over time'"}},{name:"history",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"showSummary",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"showFilters",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"showChainFilter",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"showSearch",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"showDetails",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"showTxLinks",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"showPagination",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"showRefresh",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"showExport",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"showCheckAirdrops",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"itemsPerPage",type:{name:"number"},defaultValue:{func:!1,value:"10"}},{name:"loading",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"emptyTitle",type:{name:"string"},defaultValue:{func:!1,value:"'No Airdrop History'"}},{name:"emptyDescription",type:{name:"string"},defaultValue:{func:!1,value:"'Your claimed airdrops will appear here once you start claiming them.'"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"check-airdrops"},{name:"refresh"},{name:"view-transaction"},{name:"export-csv"},{name:"export-json"}],sourceFiles:["/Users/steve/Projects/tnp.web.supaweb3/packages/ui/src/components/airdrops/AirdropHistory.vue"]};const c=[{id:"1",project:"Uniswap",token:"UNI",amount:"400",usdValue:"2400",claimedAt:"2023-09-15T14:30:00Z",txHash:"0x1234567890abcdef1234567890abcdef12345678901234567890abcdef12345678",status:"claimed",chain:"ethereum",icon:"🦄",iconBg:"bg-gradient-to-r from-pink-500 to-purple-600",description:"Early liquidity provider airdrop",tags:["DEX","LP","Early User"]},{id:"2",project:"Optimism",token:"OP",amount:"1200",usdValue:"1800",claimedAt:"2023-08-22T10:15:00Z",txHash:"0x2345678901abcdef2345678901abcdef23456789012345678901abcdef23456789",status:"claimed",chain:"optimism",icon:"🔴",iconBg:"bg-gradient-to-r from-red-500 to-pink-600",description:"Layer 2 adoption incentive",tags:["L2","Bridge","Early Adopter"]},{id:"3",project:"ENS",token:"ENS",amount:"182",usdValue:"3640",claimedAt:"2023-07-10T16:45:00Z",txHash:"0x3456789012abcdef3456789012abcdef34567890123456789012abcdef34567890",status:"claimed",chain:"ethereum",icon:"🏷️",iconBg:"bg-gradient-to-r from-blue-500 to-indigo-600",description:"Domain holder distribution",tags:["Identity","Domain","Governance"]},{id:"4",project:"Arbitrum",token:"ARB",amount:"625",usdValue:"1250",claimedAt:"2023-06-18T09:20:00Z",txHash:"0x4567890123abcdef4567890123abcdef45678901234567890123abcdef45678901",status:"claimed",chain:"arbitrum",icon:"🔵",iconBg:"bg-gradient-to-r from-blue-500 to-cyan-600",description:"L2 ecosystem growth reward",tags:["L2","DeFi","Volume"]},{id:"5",project:"dYdX",token:"DYDX",amount:"7500",usdValue:"15000",claimedAt:"2023-05-25T13:10:00Z",txHash:"0x5678901234abcdef5678901234abcdef56789012345678901234abcdef56789012",status:"claimed",chain:"ethereum",icon:"📈",iconBg:"bg-gradient-to-r from-purple-500 to-pink-600",description:"High volume trader reward",tags:["Derivatives","Volume","Trader"]},{id:"6",project:"LooksRare",token:"LOOKS",amount:"2000",usdValue:"1200",claimedAt:"2023-04-12T11:55:00Z",txHash:"0x6789012345abcdef6789012345abcdef67890123456789012345abcdef67890123",status:"claimed",chain:"ethereum",icon:"👀",iconBg:"bg-gradient-to-r from-green-500 to-teal-600",description:"NFT marketplace activity reward",tags:["NFT","Marketplace","Trading"]},{id:"7",project:"Hop Protocol",token:"HOP",amount:"500",usdValue:"350",claimedAt:"2023-03-08T15:30:00Z",txHash:"0x7890123456abcdef7890123456abcdef78901234567890123456abcdef78901234",status:"claimed",chain:"ethereum",icon:"🌉",iconBg:"bg-gradient-to-r from-blue-500 to-green-600",description:"Cross-chain bridge usage",tags:["Bridge","Multi-chain","DeFi"]},{id:"8",project:"Blur",token:"BLUR",amount:"300",usdValue:"540",claimedAt:"2023-02-20T08:15:00Z",txHash:"0x8901234567abcdef8901234567abcdef89012345678901234567abcdef89012345",status:"claimed",chain:"ethereum",icon:"💨",iconBg:"bg-gradient-to-r from-orange-500 to-red-600",description:"NFT trading incentive",tags:["NFT","Pro Trader","Blur"]},{id:"9",project:"ApeCoin",token:"APE",amount:"10094",usdValue:"25235",claimedAt:"2023-01-14T12:00:00Z",txHash:"0x9012345678abcdef9012345678abcdef90123456789012345678abcdef90123456",status:"claimed",chain:"ethereum",icon:"🐵",iconBg:"bg-gradient-to-r from-brown-500 to-yellow-600",description:"BAYC/MAYC holder distribution",tags:["NFT","BAYC","Holder"]},{id:"10",project:"Polygon",token:"MATIC",amount:"100",usdValue:"80",claimedAt:"2022-12-05T17:45:00Z",txHash:"0xa123456789abcdefa123456789abcdefa1234567890123456789abcdefa123456",status:"claimed",chain:"polygon",icon:"🔷",iconBg:"bg-gradient-to-r from-purple-500 to-indigo-600",description:"Early ecosystem participant",tags:["L2","Gas","Scaling"]}],Zt={title:"Airdrops/AirdropHistory",component:f,parameters:{layout:"centered",docs:{description:{component:"A comprehensive history viewer for claimed airdrops with filtering, sorting, pagination, and export functionality."}}},decorators:[()=>({template:'<div class="min-w-[700px] max-w-[900px]"><story /></div>'})],tags:["autodocs"],argTypes:{title:{control:"text",description:"Title of the history interface"},subtitle:{control:"text",description:"Subtitle or description"},history:{control:"object",description:"Array of airdrop history objects"},showSummary:{control:"boolean",description:"Show summary statistics"},showFilters:{control:"boolean",description:"Show filtering options"},showChainFilter:{control:"boolean",description:"Show chain filter dropdown"},showSearch:{control:"boolean",description:"Show search input"},showDetails:{control:"boolean",description:"Show description and tags"},showTxLinks:{control:"boolean",description:"Show transaction hash links"},showPagination:{control:"boolean",description:"Enable pagination"},showRefresh:{control:"boolean",description:"Show refresh button"},showExport:{control:"boolean",description:"Show export options"},showCheckAirdrops:{control:"boolean",description:"Show check airdrops button in empty state"},itemsPerPage:{control:{type:"range",min:5,max:50,step:5},description:"Items per page when pagination is enabled"},loading:{control:"boolean",description:"Show loading state"},emptyTitle:{control:"text",description:"Title for empty state"},emptyDescription:{control:"text",description:"Description for empty state"},className:{control:"text",description:"Additional CSS classes"}}},d={args:{title:"Airdrop History",subtitle:"Track your claimed airdrops and their value over time",history:c,showSummary:!0,showFilters:!0,showChainFilter:!0,showSearch:!0,showDetails:!0,showTxLinks:!0,showPagination:!0,showRefresh:!0,showExport:!0,showCheckAirdrops:!0,itemsPerPage:10,loading:!1}},T={args:{...d.args,history:c.slice(0,5),title:"Recent Claims",subtitle:"Your latest airdrop activity"}},D={args:{...d.args,history:c.filter(a=>parseFloat(a.usdValue)>1e3),title:"High Value Claims",subtitle:"Your most valuable airdrops (>$1000)"}},P={args:{...d.args,history:c.filter(a=>a.chain==="ethereum"),title:"Ethereum Airdrops",subtitle:"All your mainnet claims",showChainFilter:!1}},E={args:{...d.args,history:[],loading:!0}},B={args:{...d.args,history:[],loading:!1,emptyTitle:"No Airdrop History",emptyDescription:"Your claimed airdrops will appear here once you start claiming them."}},j={args:{...d.args,history:c.slice(0,6),title:"Simple History",subtitle:"",showSummary:!1,showFilters:!1,showDetails:!1,showExport:!1,showRefresh:!1,showPagination:!1}},F={args:{...d.args,history:c,itemsPerPage:15,showDetails:!1,title:"Compact History",subtitle:"All claims in a compact format"}},N={render:()=>({components:{AirdropHistory:f},template:`
      <div class="space-y-6">
        <div class="text-center">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Interactive Airdrop History
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Try filtering, searching, and exporting your airdrop history
          </p>
        </div>

        <AirdropHistory
          :history="history"
          :loading="loading"
          title="My Airdrop Journey"
          subtitle="Complete history with interactive features"
          @refresh="handleRefresh"
          @view-transaction="handleViewTransaction"
          @check-airdrops="handleCheckAirdrops"
          @export-csv="handleExportCSV"
          @export-json="handleExportJSON"
        />

        <div v-if="lastAction" class="rounded-lg bg-gray-100 p-3 dark:bg-gray-800">
          <div class="text-sm font-medium text-gray-700 dark:text-gray-300">Last Action:</div>
          <pre class="mt-1 text-xs text-gray-600 dark:text-gray-400">{{ lastAction }}</pre>
        </div>
      </div>
    `,data(){return{history:c,loading:!1,lastAction:null}},methods:{handleRefresh(){this.loading=!0,this.lastAction="Refreshing airdrop history...",setTimeout(()=>{this.loading=!1,this.lastAction="History refreshed successfully!"},2e3)},handleViewTransaction(a){this.lastAction=`Opening transaction: ${a.txHash.slice(0,10)}... in block explorer`},handleCheckAirdrops(){this.lastAction="Opening airdrop checker to find new airdrops..."},handleExportCSV(a){this.lastAction=`Exported ${a.length} records to CSV file`},handleExportJSON(a){this.lastAction=`Exported ${a.length} records to JSON file`}}})},L={render:()=>({components:{AirdropHistory:f},template:`
      <div class="space-y-6">
        <div class="text-center mb-6">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            2023 Airdrop Performance 📊
          </h3>
          <p class="text-gray-600 dark:text-gray-400">
            A complete breakdown of your 2023 airdrop claims
          </p>
        </div>

        <!-- Year Summary Cards -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div class="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800 text-center">
            <div class="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
              $50,095
            </div>
            <div class="text-sm text-green-700 dark:text-green-300 font-medium">
              Total Claimed Value
            </div>
          </div>
          <div class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800 text-center">
            <div class="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              10
            </div>
            <div class="text-sm text-blue-700 dark:text-blue-300 font-medium">
              Protocols Claimed
            </div>
          </div>
          <div class="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800 text-center">
            <div class="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              23,798
            </div>
            <div class="text-sm text-purple-700 dark:text-purple-300 font-medium">
              Total Tokens
            </div>
          </div>
          <div class="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-800 text-center">
            <div class="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
              4
            </div>
            <div class="text-sm text-orange-700 dark:text-orange-300 font-medium">
              Chains Used
            </div>
          </div>
        </div>

        <AirdropHistory
          :history="history"
          title="Complete 2023 History"
          subtitle="Every airdrop claimed this year"
          :items-per-page="8"
        />
      </div>
    `,data(){return{history:c}}})},M={args:{...d.args,history:[...c.slice(0,3),{id:"polygon-1",project:"Polygon Ecosystem",token:"MATIC",amount:"500",usdValue:"450",claimedAt:"2023-08-15T14:30:00Z",txHash:"0xpolygon123...",status:"claimed",chain:"polygon",icon:"🔷",iconBg:"bg-gradient-to-r from-purple-500 to-indigo-600",tags:["L2","Ecosystem"]},{id:"avalanche-1",project:"Avalanche Rush",token:"AVAX",amount:"25",usdValue:"850",claimedAt:"2023-07-20T10:15:00Z",txHash:"0xavalanche123...",status:"claimed",chain:"avalanche",icon:"🔺",iconBg:"bg-gradient-to-r from-red-500 to-pink-600",tags:["L1","DeFi"]},{id:"bsc-1",project:"PancakeSwap",token:"CAKE",amount:"150",usdValue:"300",claimedAt:"2023-06-10T16:45:00Z",txHash:"0xbsc123...",status:"claimed",chain:"bsc",icon:"🥞",iconBg:"bg-gradient-to-r from-yellow-500 to-orange-600",tags:["DEX","Yield"]}],title:"Multi-Chain Airdrops",subtitle:"Claims across different blockchain networks"}},R={parameters:{viewport:{defaultViewport:"mobile1"}},args:{...d.args,history:c.slice(0,8),itemsPerPage:5,showDetails:!1}},Y={parameters:{backgrounds:{default:"dark"}},render:()=>({components:{AirdropHistory:f},template:`
      <div class="dark">
        <div class="min-h-screen bg-gray-900 p-8">
          <AirdropHistory
            :history="history"
            title="🌙 Night Mode History"
            subtitle="Your airdrop journey in elegant dark theme"
            :items-per-page="6"
          />
        </div>
      </div>
    `,data(){return{history:c.slice(0,8)}}})},O={args:{...d.args,history:[{id:"1",project:"New Protocol",token:"NEW",amount:"500",usdValue:"750",claimedAt:"2023-09-20T12:00:00Z",txHash:"0xpending123...",status:"pending",chain:"ethereum",icon:"⏳",iconBg:"bg-gradient-to-r from-yellow-500 to-orange-600",description:"Transaction pending confirmation"},{id:"2",project:"Failed Claim",token:"FAIL",amount:"200",usdValue:"100",claimedAt:"2023-09-19T15:30:00Z",txHash:"0xfailed123...",status:"failed",chain:"ethereum",icon:"❌",iconBg:"bg-gradient-to-r from-red-500 to-pink-600",description:"Transaction failed due to gas issues"},...c.slice(0,3)],title:"Recent Claims & Status",subtitle:"Including pending and failed transactions"}};var U,J,X;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    title: 'Airdrop History',
    subtitle: 'Track your claimed airdrops and their value over time',
    history: mockHistory,
    showSummary: true,
    showFilters: true,
    showChainFilter: true,
    showSearch: true,
    showDetails: true,
    showTxLinks: true,
    showPagination: true,
    showRefresh: true,
    showExport: true,
    showCheckAirdrops: true,
    itemsPerPage: 10,
    loading: false
  }
}`,...(X=(J=d.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var z,q,K;T.parameters={...T.parameters,docs:{...(z=T.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    history: mockHistory.slice(0, 5),
    title: 'Recent Claims',
    subtitle: 'Your latest airdrop activity'
  }
}`,...(K=(q=T.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};var W,G,Q;D.parameters={...D.parameters,docs:{...(W=D.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    history: mockHistory.filter(h => parseFloat(h.usdValue) > 1000),
    title: 'High Value Claims',
    subtitle: 'Your most valuable airdrops (>$1000)'
  }
}`,...(Q=(G=D.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};var ee,te,re;P.parameters={...P.parameters,docs:{...(ee=P.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    history: mockHistory.filter(h => h.chain === 'ethereum'),
    title: 'Ethereum Airdrops',
    subtitle: 'All your mainnet claims',
    showChainFilter: false
  }
}`,...(re=(te=P.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var ae,oe,se;E.parameters={...E.parameters,docs:{...(ae=E.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    history: [],
    loading: true
  }
}`,...(se=(oe=E.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var ne,ie,le;B.parameters={...B.parameters,docs:{...(ne=B.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    history: [],
    loading: false,
    emptyTitle: 'No Airdrop History',
    emptyDescription: 'Your claimed airdrops will appear here once you start claiming them.'
  }
}`,...(le=(ie=B.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var de,ce,ue;j.parameters={...j.parameters,docs:{...(de=j.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    history: mockHistory.slice(0, 6),
    title: 'Simple History',
    subtitle: '',
    showSummary: false,
    showFilters: false,
    showDetails: false,
    showExport: false,
    showRefresh: false,
    showPagination: false
  }
}`,...(ue=(ce=j.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var pe,ge,me;F.parameters={...F.parameters,docs:{...(pe=F.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    history: mockHistory,
    itemsPerPage: 15,
    showDetails: false,
    title: 'Compact History',
    subtitle: 'All claims in a compact format'
  }
}`,...(me=(ge=F.parameters)==null?void 0:ge.docs)==null?void 0:me.source}}};var he,ye,xe;N.parameters={...N.parameters,docs:{...(he=N.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => ({
    components: {
      AirdropHistory
    },
    template: \`
      <div class="space-y-6">
        <div class="text-center">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Interactive Airdrop History
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Try filtering, searching, and exporting your airdrop history
          </p>
        </div>

        <AirdropHistory
          :history="history"
          :loading="loading"
          title="My Airdrop Journey"
          subtitle="Complete history with interactive features"
          @refresh="handleRefresh"
          @view-transaction="handleViewTransaction"
          @check-airdrops="handleCheckAirdrops"
          @export-csv="handleExportCSV"
          @export-json="handleExportJSON"
        />

        <div v-if="lastAction" class="rounded-lg bg-gray-100 p-3 dark:bg-gray-800">
          <div class="text-sm font-medium text-gray-700 dark:text-gray-300">Last Action:</div>
          <pre class="mt-1 text-xs text-gray-600 dark:text-gray-400">{{ lastAction }}</pre>
        </div>
      </div>
    \`,
    data() {
      return {
        history: mockHistory,
        loading: false,
        lastAction: null
      };
    },
    methods: {
      handleRefresh() {
        this.loading = true;
        this.lastAction = 'Refreshing airdrop history...';
        setTimeout(() => {
          this.loading = false;
          this.lastAction = 'History refreshed successfully!';
        }, 2000);
      },
      handleViewTransaction(item) {
        this.lastAction = \`Opening transaction: \${item.txHash.slice(0, 10)}... in block explorer\`;
      },
      handleCheckAirdrops() {
        this.lastAction = 'Opening airdrop checker to find new airdrops...';
      },
      handleExportCSV(data) {
        this.lastAction = \`Exported \${data.length} records to CSV file\`;
      },
      handleExportJSON(data) {
        this.lastAction = \`Exported \${data.length} records to JSON file\`;
      }
    }
  })
}`,...(xe=(ye=N.parameters)==null?void 0:ye.docs)==null?void 0:xe.source}}};var be,fe,ve;L.parameters={...L.parameters,docs:{...(be=L.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => ({
    components: {
      AirdropHistory
    },
    template: \`
      <div class="space-y-6">
        <div class="text-center mb-6">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            2023 Airdrop Performance 📊
          </h3>
          <p class="text-gray-600 dark:text-gray-400">
            A complete breakdown of your 2023 airdrop claims
          </p>
        </div>

        <!-- Year Summary Cards -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div class="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800 text-center">
            <div class="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
              $50,095
            </div>
            <div class="text-sm text-green-700 dark:text-green-300 font-medium">
              Total Claimed Value
            </div>
          </div>
          <div class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800 text-center">
            <div class="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              10
            </div>
            <div class="text-sm text-blue-700 dark:text-blue-300 font-medium">
              Protocols Claimed
            </div>
          </div>
          <div class="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800 text-center">
            <div class="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              23,798
            </div>
            <div class="text-sm text-purple-700 dark:text-purple-300 font-medium">
              Total Tokens
            </div>
          </div>
          <div class="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-800 text-center">
            <div class="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
              4
            </div>
            <div class="text-sm text-orange-700 dark:text-orange-300 font-medium">
              Chains Used
            </div>
          </div>
        </div>

        <AirdropHistory
          :history="history"
          title="Complete 2023 History"
          subtitle="Every airdrop claimed this year"
          :items-per-page="8"
        />
      </div>
    \`,
    data() {
      return {
        history: mockHistory
      };
    }
  })
}`,...(ve=(fe=L.parameters)==null?void 0:fe.docs)==null?void 0:ve.source}}};var ke,we,Ae;M.parameters={...M.parameters,docs:{...(ke=M.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    history: [...mockHistory.slice(0, 3), {
      id: 'polygon-1',
      project: 'Polygon Ecosystem',
      token: 'MATIC',
      amount: '500',
      usdValue: '450',
      claimedAt: '2023-08-15T14:30:00Z',
      txHash: '0xpolygon123...',
      status: 'claimed',
      chain: 'polygon',
      icon: '🔷',
      iconBg: 'bg-gradient-to-r from-purple-500 to-indigo-600',
      tags: ['L2', 'Ecosystem']
    }, {
      id: 'avalanche-1',
      project: 'Avalanche Rush',
      token: 'AVAX',
      amount: '25',
      usdValue: '850',
      claimedAt: '2023-07-20T10:15:00Z',
      txHash: '0xavalanche123...',
      status: 'claimed',
      chain: 'avalanche',
      icon: '🔺',
      iconBg: 'bg-gradient-to-r from-red-500 to-pink-600',
      tags: ['L1', 'DeFi']
    }, {
      id: 'bsc-1',
      project: 'PancakeSwap',
      token: 'CAKE',
      amount: '150',
      usdValue: '300',
      claimedAt: '2023-06-10T16:45:00Z',
      txHash: '0xbsc123...',
      status: 'claimed',
      chain: 'bsc',
      icon: '🥞',
      iconBg: 'bg-gradient-to-r from-yellow-500 to-orange-600',
      tags: ['DEX', 'Yield']
    }],
    title: 'Multi-Chain Airdrops',
    subtitle: 'Claims across different blockchain networks'
  }
}`,...(Ae=(we=M.parameters)==null?void 0:we.docs)==null?void 0:Ae.source}}};var Ce,He,Se;R.parameters={...R.parameters,docs:{...(Ce=R.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  },
  args: {
    ...Default.args,
    history: mockHistory.slice(0, 8),
    itemsPerPage: 5,
    showDetails: false
  }
}`,...(Se=(He=R.parameters)==null?void 0:He.docs)==null?void 0:Se.source}}};var Ve,Te,De;Y.parameters={...Y.parameters,docs:{...(Ve=Y.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  render: () => ({
    components: {
      AirdropHistory
    },
    template: \`
      <div class="dark">
        <div class="min-h-screen bg-gray-900 p-8">
          <AirdropHistory
            :history="history"
            title="🌙 Night Mode History"
            subtitle="Your airdrop journey in elegant dark theme"
            :items-per-page="6"
          />
        </div>
      </div>
    \`,
    data() {
      return {
        history: mockHistory.slice(0, 8)
      };
    }
  })
}`,...(De=(Te=Y.parameters)==null?void 0:Te.docs)==null?void 0:De.source}}};var Pe,Ee,Be;O.parameters={...O.parameters,docs:{...(Pe=O.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    history: [{
      id: '1',
      project: 'New Protocol',
      token: 'NEW',
      amount: '500',
      usdValue: '750',
      claimedAt: '2023-09-20T12:00:00Z',
      txHash: '0xpending123...',
      status: 'pending',
      chain: 'ethereum',
      icon: '⏳',
      iconBg: 'bg-gradient-to-r from-yellow-500 to-orange-600',
      description: 'Transaction pending confirmation'
    }, {
      id: '2',
      project: 'Failed Claim',
      token: 'FAIL',
      amount: '200',
      usdValue: '100',
      claimedAt: '2023-09-19T15:30:00Z',
      txHash: '0xfailed123...',
      status: 'failed',
      chain: 'ethereum',
      icon: '❌',
      iconBg: 'bg-gradient-to-r from-red-500 to-pink-600',
      description: 'Transaction failed due to gas issues'
    }, ...mockHistory.slice(0, 3)],
    title: 'Recent Claims & Status',
    subtitle: 'Including pending and failed transactions'
  }
}`,...(Be=(Ee=O.parameters)==null?void 0:Ee.docs)==null?void 0:Be.source}}};const It=["Default","RecentActivity","HighValueHistory","EthereumOnly","Loading","Empty","MinimalInterface","CompactView","Interactive","YearlyBreakdown","MultiChainPortfolio","MobileView","DarkMode","PendingClaims"];export{F as CompactView,Y as DarkMode,d as Default,B as Empty,P as EthereumOnly,D as HighValueHistory,N as Interactive,E as Loading,j as MinimalInterface,R as MobileView,M as MultiChainPortfolio,O as PendingClaims,T as RecentActivity,L as YearlyBreakdown,It as __namedExportsOrder,Zt as default};
