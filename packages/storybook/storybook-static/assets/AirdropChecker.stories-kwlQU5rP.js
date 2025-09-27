import{r as v,c as k,i as Re,b as n,f as e,d as c,t as a,w as L,v as Be,C as $e,F as M,g as j,s as Ne,p as Te,n as h,h as l,D as We}from"./vue.esm-bundler-DxM0YtBV.js";const Le={class:"bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"},Me={class:"p-6"},je={class:"text-center mb-6"},Ue={class:"text-2xl font-bold text-gray-900 dark:text-white mb-2"},Ie={class:"text-gray-600 dark:text-gray-400"},Oe={class:"mb-6"},He={class:"flex space-x-3"},Ke={class:"flex-1 relative"},Xe=["placeholder","disabled"],Ye={key:0,class:"absolute right-3 top-3.5"},ze=["disabled"],qe={key:0,class:"w-5 h-5 border-2 border-blue-300 border-t-blue-600 rounded-full animate-spin"},Ge={key:0,class:"mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800"},Je={class:"flex items-center justify-between"},Qe={key:1,class:"mb-6"},Ze={class:"grid grid-cols-2 md:grid-cols-3 gap-3"},et=["value"],tt={class:"flex items-center space-x-2 flex-1 min-w-0"},rt=["src","alt"],ot={key:1},st={class:"text-sm font-medium text-gray-900 dark:text-white truncate"},nt={key:2,class:"space-y-4"},lt={class:"grid grid-cols-2 md:grid-cols-4 gap-4 mb-6"},at={class:"bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800"},it={class:"text-2xl font-bold text-green-600 dark:text-green-400"},dt={class:"bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800"},ct={class:"text-2xl font-bold text-blue-600 dark:text-blue-400"},ut={class:"bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800"},gt={class:"text-2xl font-bold text-purple-600 dark:text-purple-400"},pt={class:"bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800"},mt={class:"text-2xl font-bold text-orange-600 dark:text-orange-400"},ht={key:0,class:"flex items-center justify-between"},bt={class:"flex items-center space-x-4"},kt=["onClick"],ft={class:"flex items-center space-x-2"},xt={class:"space-y-3"},yt={class:"flex items-center justify-between"},vt={class:"flex items-center space-x-4"},Ct=["src","alt"],wt={key:1,class:"text-sm"},At={class:"font-semibold text-gray-900 dark:text-white flex items-center space-x-2"},Ft={class:"flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-400"},Pt={key:0},St={key:1,class:"text-green-600 dark:text-green-400 font-medium"},Dt={class:"text-right"},Et={key:0,class:h(["px-3 py-1 rounded-full text-sm font-medium","bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"])},_t={key:1,class:"px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"},Vt={key:2,class:"px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400"},Rt={key:3,class:"text-xs text-gray-500 dark:text-gray-400 mt-1"},Bt={class:"mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 flex justify-between"},$t={key:3,class:"text-center py-12"},Nt={class:"text-gray-600 dark:text-gray-400 mb-4"},Tt={class:"max-w-xs mx-auto"},Wt={class:"bg-gray-200 dark:bg-gray-700 rounded-full h-2"},Lt={class:"text-sm text-gray-500 dark:text-gray-400 mt-2"},x={__name:"AirdropChecker",props:{title:{type:String,default:"Airdrop Eligibility Checker"},subtitle:{type:String,default:"Check your wallet across multiple protocols for claimable airdrops"},userAddress:{type:String,default:""},isConnected:{type:Boolean,default:!1},showConnectWallet:{type:Boolean,default:!0},availableProtocols:{type:Array,default:()=>[]},defaultProtocols:{type:Array,default:()=>[]},showProtocolFilter:{type:Boolean,default:!0},showResultsFilter:{type:Boolean,default:!0},addressPlaceholder:{type:String,default:"0x... or yourname.eth"},checking:{type:Boolean,default:!1},className:{type:String,default:""}},emits:["check","connect-wallet","claim-eligible","export-results"],setup(o,{expose:m,emit:f}){const u=o,C=f,i=v(u.userAddress),d=v(u.defaultProtocols.length>0?[...u.defaultProtocols]:[]),g=v([]),F=v("all"),w=v("value"),y=v(0),Ae=k(()=>i.value&&(i.value.startsWith("0x")&&i.value.length===42||i.value.includes(".eth"))),Fe=k(()=>g.value.length>0&&!u.checking),P=k(()=>g.value.filter(s=>s.eligible).length),Pe=k(()=>g.value.filter(s=>s.eligible).reduce((s,r)=>s+parseFloat(r.usdValue||0),0)),Se=k(()=>g.value.length),I=k(()=>g.value.filter(s=>s.eligible&&s.deadline&&W(s.deadline)).length),De=k(()=>[{key:"all",label:"All",count:g.value.length},{key:"eligible",label:"Eligible",count:P.value},{key:"urgent",label:"Expiring Soon",count:I.value}]),O=k(()=>{let s=g.value;return F.value==="eligible"?s=s.filter(r=>r.eligible):F.value==="urgent"&&(s=s.filter(r=>r.eligible&&r.deadline&&W(r.deadline))),s=[...s].sort((r,t)=>w.value==="value"?parseFloat(t.usdValue||0)-parseFloat(r.usdValue||0):w.value==="deadline"?!r.deadline&&!t.deadline?0:r.deadline?t.deadline?new Date(r.deadline)-new Date(t.deadline):-1:1:w.value==="protocol"?r.protocol.localeCompare(t.protocol):0),s});Re(()=>u.userAddress,s=>{s&&(i.value=s)});const H=async()=>{if(!i.value||d.value.length===0)return;g.value=[],y.value=0,C("check",{address:i.value,protocols:d.value});const s=setInterval(()=>{y.value+=10,y.value>=100&&clearInterval(s)},200)},Ee=()=>{C("export-results",g.value)},W=s=>{const r=new Date;return(new Date(s)-r)/(1e3*60*60*24)<7},_e=s=>new Date(s).toLocaleDateString("en-US",{month:"short",day:"numeric"}),Ve=s=>({ethereum:"bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400",polygon:"bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400",arbitrum:"bg-cyan-100 text-cyan-800 dark:bg-cyan-900/20 dark:text-cyan-400",optimism:"bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400",avalanche:"bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400"})[s.toLowerCase()]||"bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";return u.availableProtocols.length>0&&d.value.length===0&&(d.value=u.availableProtocols.slice(0,5).map(s=>s.id)),m({setResults:s=>{g.value=s},setProgress:s=>{y.value=s}}),(s,r)=>(l(),n("div",{class:h(["airdrop-checker",o.className])},[e("div",Le,[e("div",Me,[e("div",je,[e("h2",Ue,a(o.title),1),e("p",Ie,a(o.subtitle),1)]),e("div",Oe,[r[6]||(r[6]=e("label",{class:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"}," Wallet Address or ENS Name ",-1)),e("div",He,[e("div",Ke,[L(e("input",{"onUpdate:modelValue":r[0]||(r[0]=t=>i.value=t),onKeyup:$e(H,["enter"]),placeholder:o.addressPlaceholder,disabled:o.checking,class:"w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white disabled:opacity-50"},null,40,Xe),[[Be,i.value]]),Ae.value?(l(),n("div",Ye,[...r[5]||(r[5]=[e("svg",{class:"w-5 h-5 text-green-500",fill:"currentColor",viewBox:"0 0 20 20"},[e("path",{"fill-rule":"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clip-rule":"evenodd"})],-1)])])):c("",!0)]),e("button",{onClick:H,disabled:!i.value||o.checking,class:"px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed font-medium transition-colors flex items-center space-x-2"},[o.checking?(l(),n("div",qe)):c("",!0),e("span",null,a(o.checking?"Checking...":"Check Eligibility"),1)],8,ze)])]),o.showConnectWallet&&!o.isConnected?(l(),n("div",Ge,[e("div",Je,[r[7]||(r[7]=e("div",null,[e("div",{class:"text-sm font-medium text-blue-900 dark:text-blue-300"}," Connect Your Wallet "),e("div",{class:"text-xs text-blue-700 dark:text-blue-400"}," Automatically check eligibility for your connected address ")],-1)),e("button",{onClick:r[1]||(r[1]=t=>s.$emit("connect-wallet")),class:"px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm font-medium transition-colors"}," Connect ")])])):c("",!0),o.showProtocolFilter?(l(),n("div",Qe,[r[8]||(r[8]=e("label",{class:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3"}," Check Protocols ",-1)),e("div",Ze,[(l(!0),n(M,null,j(o.availableProtocols,t=>(l(),n("label",{key:t.id,class:"flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"},[L(e("input",{"onUpdate:modelValue":r[2]||(r[2]=A=>d.value=A),value:t.id,type:"checkbox",class:"w-4 h-4 text-blue-600 rounded focus:ring-blue-500"},null,8,et),[[We,d.value]]),e("div",tt,[t.icon?(l(),n("div",{key:0,class:h(["w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold",t.iconBg||"bg-gray-400"])},[t.icon.startsWith("http")?(l(),n("img",{key:0,src:t.icon,alt:t.name,class:"w-6 h-6 rounded-full"},null,8,rt)):(l(),n("span",ot,a(t.icon),1))],2)):c("",!0),e("span",st,a(t.name),1)])]))),128))])])):c("",!0),Fe.value?(l(),n("div",nt,[e("div",lt,[e("div",at,[e("div",it,a(P.value),1),r[9]||(r[9]=e("div",{class:"text-sm text-green-700 dark:text-green-300"}," Eligible ",-1))]),e("div",dt,[e("div",ct," $"+a(Pe.value.toLocaleString()),1),r[10]||(r[10]=e("div",{class:"text-sm text-blue-700 dark:text-blue-300"}," Total Value ",-1))]),e("div",ut,[e("div",gt,a(Se.value),1),r[11]||(r[11]=e("div",{class:"text-sm text-purple-700 dark:text-purple-300"}," Protocols ",-1))]),e("div",pt,[e("div",mt,a(I.value),1),r[12]||(r[12]=e("div",{class:"text-sm text-orange-700 dark:text-orange-300"}," Expiring Soon ",-1))])]),o.showResultsFilter?(l(),n("div",ht,[e("div",bt,[(l(!0),n(M,null,j(De.value,t=>(l(),n("button",{key:t.key,onClick:A=>F.value=t.key,class:h(["px-4 py-2 rounded-lg text-sm font-medium transition-colors",F.value===t.key?"bg-blue-500 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"])},a(t.label)+" ("+a(t.count)+") ",11,kt))),128))]),e("div",ft,[r[14]||(r[14]=e("label",{class:"text-sm text-gray-700 dark:text-gray-300"},"Sort:",-1)),L(e("select",{"onUpdate:modelValue":r[3]||(r[3]=t=>w.value=t),class:"px-3 py-1 border border-gray-300 dark:border-gray-600 rounded text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"},[...r[13]||(r[13]=[e("option",{value:"value"},"Value (High to Low)",-1),e("option",{value:"deadline"},"Deadline (Urgent First)",-1),e("option",{value:"protocol"},"Protocol Name",-1)])],512),[[Ne,w.value]])])])):c("",!0),e("div",xt,[(l(!0),n(M,null,j(O.value,t=>(l(),n("div",{key:t.id,class:h(["p-4 rounded-lg border transition-all duration-200",t.eligible?"border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/10":"border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800"])},[e("div",yt,[e("div",vt,[t.icon?(l(),n("div",{key:0,class:h(["w-10 h-10 rounded-full flex items-center justify-center text-white font-bold",t.iconBg||"bg-gradient-to-r from-blue-500 to-purple-600"])},[t.icon.startsWith("http")?(l(),n("img",{key:0,src:t.icon,alt:t.protocol,class:"w-10 h-10 rounded-full"},null,8,Ct)):(l(),n("span",wt,a(t.icon),1))],2)):(l(),n("div",{key:1,class:h(["w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm",t.iconBg||"bg-gradient-to-r from-blue-500 to-purple-600"])},a(t.protocol.slice(0,2).toUpperCase()),3)),e("div",null,[e("h3",At,[e("span",null,a(t.protocol),1),t.chain?(l(),n("span",{key:0,class:h(["px-2 py-1 text-xs rounded",Ve(t.chain)])},a(t.chain),3)):c("",!0)]),e("div",Ft,[t.eligible?(l(),n("span",Pt,a(t.amount)+" "+a(t.token),1)):c("",!0),t.usdValue?(l(),n("span",St," ~$"+a(t.usdValue),1)):c("",!0),t.deadline?(l(),n("span",{key:2,class:h(["text-xs px-2 py-1 rounded",W(t.deadline)?"bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400":"bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"])}," Expires: "+a(_e(t.deadline)),3)):c("",!0)])])]),e("div",Dt,[t.eligible?(l(),n("div",Et," ✓ Eligible ")):t.checking?(l(),n("div",_t," Checking... ")):(l(),n("div",Vt," Not Eligible ")),!t.eligible&&t.reason?(l(),n("div",Rt,a(t.reason),1)):c("",!0)])])],2))),128))]),e("div",Bt,[e("button",{onClick:Ee,class:"px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"}," 📊 Export Results "),P.value>0?(l(),n("button",{key:0,onClick:r[4]||(r[4]=t=>s.$emit("claim-eligible",O.value.filter(A=>A.eligible))),class:"px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 font-medium transition-colors"}," Claim All Eligible ("+a(P.value)+") ",1)):c("",!0)])])):o.checking?(l(),n("div",$t,[r[15]||(r[15]=e("div",{class:"w-16 h-16 mx-auto mb-4 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center"},[e("div",{class:"w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"})],-1)),r[16]||(r[16]=e("h3",{class:"text-lg font-medium text-gray-900 dark:text-white mb-2"}," Checking Eligibility ",-1)),e("p",Nt," Scanning "+a(d.value.length)+" protocols for airdrops... ",1),e("div",Tt,[e("div",Wt,[e("div",{class:"bg-blue-500 h-2 rounded-full transition-all duration-500",style:Te({width:`${y.value}%`})},null,4)]),e("div",Lt,a(Math.round(y.value))+"% Complete ",1)])])):c("",!0)])])],2))}};x.__docgenInfo={exportName:"default",displayName:"AirdropChecker",description:"",tags:{},expose:[{name:"setResults"},{name:"setProgress"}],props:[{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"'Airdrop Eligibility Checker'"}},{name:"subtitle",type:{name:"string"},defaultValue:{func:!1,value:"'Check your wallet across multiple protocols for claimable airdrops'"}},{name:"userAddress",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"isConnected",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showConnectWallet",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"availableProtocols",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"defaultProtocols",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"showProtocolFilter",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"showResultsFilter",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"addressPlaceholder",type:{name:"string"},defaultValue:{func:!1,value:"'0x... or yourname.eth'"}},{name:"checking",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"connect-wallet"},{name:"claim-eligible"},{name:"check"},{name:"export-results"}],sourceFiles:["/Users/steve/Projects/tnp.web.supaweb3/packages/ui/src/components/airdrops/AirdropChecker.vue"]};const p=[{id:"uniswap",name:"Uniswap",icon:"🦄",iconBg:"bg-gradient-to-r from-pink-500 to-purple-600",category:"DEX"},{id:"compound",name:"Compound",icon:"🏦",iconBg:"bg-gradient-to-r from-green-500 to-blue-600",category:"Lending"},{id:"aave",name:"Aave",icon:"👻",iconBg:"bg-gradient-to-r from-blue-500 to-indigo-600",category:"Lending"},{id:"ens",name:"ENS",icon:"🏷️",iconBg:"bg-gradient-to-r from-blue-500 to-cyan-600",category:"Identity"},{id:"optimism",name:"Optimism",icon:"🔴",iconBg:"bg-gradient-to-r from-red-500 to-pink-600",category:"Layer 2"},{id:"arbitrum",name:"Arbitrum",icon:"🔵",iconBg:"bg-gradient-to-r from-blue-500 to-cyan-600",category:"Layer 2"},{id:"polygon",name:"Polygon",icon:"🔷",iconBg:"bg-gradient-to-r from-purple-500 to-indigo-600",category:"Layer 2"},{id:"looksrare",name:"LooksRare",icon:"👀",iconBg:"bg-gradient-to-r from-green-500 to-teal-600",category:"NFT"},{id:"blur",name:"Blur",icon:"💨",iconBg:"bg-gradient-to-r from-orange-500 to-red-600",category:"NFT"},{id:"dydx",name:"dYdX",icon:"📈",iconBg:"bg-gradient-to-r from-purple-500 to-pink-600",category:"Derivatives"}],U=[{id:"1",protocol:"Uniswap",token:"UNI",amount:"400",usdValue:"2400",eligible:!0,chain:"ethereum",deadline:"2025-01-15",icon:"🦄",iconBg:"bg-gradient-to-r from-pink-500 to-purple-600",checking:!1},{id:"2",protocol:"Optimism",token:"OP",amount:"1200",usdValue:"1800",eligible:!0,chain:"optimism",deadline:"2024-12-31",icon:"🔴",iconBg:"bg-gradient-to-r from-red-500 to-pink-600",checking:!1},{id:"3",protocol:"ENS",token:"ENS",amount:"0",usdValue:"0",eligible:!1,chain:"ethereum",reason:"No ENS domain registered before snapshot",icon:"🏷️",iconBg:"bg-gradient-to-r from-blue-500 to-indigo-600",checking:!1},{id:"4",protocol:"Compound",token:"COMP",amount:"25",usdValue:"1250",eligible:!0,chain:"ethereum",icon:"🏦",iconBg:"bg-gradient-to-r from-green-500 to-blue-600",checking:!1},{id:"5",protocol:"Blur",token:"BLUR",amount:"300",usdValue:"180",eligible:!0,chain:"ethereum",deadline:new Date(Date.now()+3*24*60*60*1e3).toISOString(),icon:"💨",iconBg:"bg-gradient-to-r from-orange-500 to-red-600",checking:!1}],jt={title:"Airdrops/AirdropChecker",component:x,parameters:{layout:"centered",docs:{description:{component:"A comprehensive tool for checking airdrop eligibility across multiple protocols with filtering, sorting, and batch claiming capabilities."}}},decorators:[()=>({template:'<div class="min-w-[700px] max-w-[900px]"><story /></div>'})],tags:["autodocs"],argTypes:{title:{control:"text",description:"Title of the checker interface"},subtitle:{control:"text",description:"Subtitle or description"},userAddress:{control:"text",description:"Connected wallet address"},isConnected:{control:"boolean",description:"Wallet connection status"},showConnectWallet:{control:"boolean",description:"Show wallet connection prompt"},availableProtocols:{control:"object",description:"Array of available protocols"},defaultProtocols:{control:"object",description:"Default selected protocols"},showProtocolFilter:{control:"boolean",description:"Show protocol selection checkboxes"},showResultsFilter:{control:"boolean",description:"Show results filtering options"},addressPlaceholder:{control:"text",description:"Placeholder text for address input"},checking:{control:"boolean",description:"Show checking state"},className:{control:"text",description:"Additional CSS classes"}}},b={args:{title:"Airdrop Eligibility Checker",subtitle:"Check your wallet across multiple protocols for claimable airdrops",userAddress:"",isConnected:!1,showConnectWallet:!0,availableProtocols:p,defaultProtocols:["uniswap","compound","ens","optimism","arbitrum"],showProtocolFilter:!0,showResultsFilter:!0,addressPlaceholder:"0x... or yourname.eth",checking:!1}},S={args:{...b.args,userAddress:"0x742d35Cc6C4C4C7218243e428F9e99F50934e47E",isConnected:!0,showConnectWallet:!1}},D={render:()=>({components:{AirdropChecker:x},setup(){return{protocols:p,results:U}},template:`
      <AirdropChecker
        :available-protocols="protocols"
        :default-protocols="['uniswap', 'optimism', 'compound', 'blur']"
        :user-address="'0x742d35Cc6C4C4C7218243e428F9e99F50934e47E'"
        :is-connected="true"
        ref="checker"
      />
    `,mounted(){setTimeout(()=>{var o;(o=this.$refs.checker)==null||o.setResults(this.results)},100)}})},E={args:{...b.args,userAddress:"0x742d35Cc6C4C4C7218243e428F9e99F50934e47E",isConnected:!0,checking:!0}},_={args:{...b.args,availableProtocols:p.slice(0,5),defaultProtocols:["uniswap","compound","ens"],userAddress:"0x742d35Cc6C4C4C7218243e428F9e99F50934e47E",isConnected:!0}},V={args:{...b.args,showProtocolFilter:!1,availableProtocols:p.slice(0,3),defaultProtocols:["uniswap","compound","ens"],userAddress:"0x742d35Cc6C4C4C7218243e428F9e99F50934e47E",isConnected:!0}},R={render:()=>({components:{AirdropChecker:x},template:`
      <div class="space-y-6">
        <div class="text-center">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Interactive Airdrop Checker
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Try checking different addresses and see the results
          </p>
        </div>

        <AirdropChecker
          :available-protocols="protocols"
          :default-protocols="selectedProtocols"
          :user-address="userAddress"
          :is-connected="isConnected"
          :checking="checking"
          title="Multi-Protocol Checker"
          subtitle="Discover unclaimed airdrops across DeFi"
          ref="checker"
          @check="handleCheck"
          @connect-wallet="handleConnectWallet"
          @claim-eligible="handleClaimEligible"
          @export-results="handleExportResults"
        />

        <div v-if="lastAction" class="rounded-lg bg-gray-100 p-3 dark:bg-gray-800">
          <div class="text-sm font-medium text-gray-700 dark:text-gray-300">Last Action:</div>
          <pre class="mt-1 text-xs text-gray-600 dark:text-gray-400">{{ lastAction }}</pre>
        </div>
      </div>
    `,data(){return{protocols:p,selectedProtocols:["uniswap","optimism","compound","blur"],userAddress:"",isConnected:!1,checking:!1,lastAction:null}},methods:{async handleCheck(o){var u,C;this.checking=!0,this.lastAction=`Checking ${o.address} across ${o.protocols.length} protocols...`;const m=10;for(let i=0;i<=m;i++)await new Promise(d=>setTimeout(d,300)),(u=this.$refs.checker)==null||u.setProgress(i/m*100);const f=U.filter(i=>o.protocols.some(d=>i.protocol.toLowerCase().includes(d)));(C=this.$refs.checker)==null||C.setResults(f),this.checking=!1,this.lastAction=`Found ${f.filter(i=>i.eligible).length} eligible airdrops worth $${f.reduce((i,d)=>i+parseFloat(d.usdValue||0),0).toLocaleString()}`},handleConnectWallet(){this.lastAction="Connecting wallet...",setTimeout(()=>{this.isConnected=!0,this.userAddress="0x742d35Cc6C4C4C7218243e428F9e99F50934e47E",this.lastAction="Wallet connected successfully!"},2e3)},handleClaimEligible(o){this.lastAction=`Claiming ${o.length} eligible airdrops...`,setTimeout(()=>{this.lastAction="Successfully claimed all eligible airdrops!"},3e3)},handleExportResults(o){this.lastAction=`Exported ${o.length} results to CSV`}}})},B={parameters:{viewport:{defaultViewport:"mobile1"}},args:{...b.args,availableProtocols:p.slice(0,6),userAddress:"0x742d35Cc6C4C4C7218243e428F9e99F50934e47E",isConnected:!0}},$={parameters:{backgrounds:{default:"dark"}},render:()=>({components:{AirdropChecker:x},template:`
      <div class="dark">
        <div class="min-h-screen bg-gray-900 p-8">
          <AirdropChecker
            :available-protocols="protocols"
            :default-protocols="['uniswap', 'optimism', 'compound']"
            title="🌙 Night Airdrop Hunter"
            subtitle="Find your airdrops in the darkness of DeFi"
            :user-address="'0x742d35Cc6C4C4C7218243e428F9e99F50934e47E'"
            :is-connected="true"
            ref="checker"
          />
        </div>
      </div>
    `,data(){return{protocols:p}},mounted(){setTimeout(()=>{var o;(o=this.$refs.checker)==null||o.setResults(U.slice(0,4))},500)}})},N={render:()=>({components:{AirdropChecker:x},setup(){return{protocols:p,results:[{id:"1",protocol:"dYdX",token:"DYDX",amount:"7500",usdValue:"22500",eligible:!0,chain:"ethereum",icon:"📈",iconBg:"bg-gradient-to-r from-purple-500 to-pink-600"},{id:"2",protocol:"ENS",token:"ENS",amount:"182",usdValue:"3640",eligible:!0,chain:"ethereum",icon:"🏷️",iconBg:"bg-gradient-to-r from-blue-500 to-indigo-600"},{id:"3",protocol:"LooksRare",token:"LOOKS",amount:"2000",usdValue:"1200",eligible:!0,chain:"ethereum",icon:"👀",iconBg:"bg-gradient-to-r from-green-500 to-teal-600"}]}},template:`
      <div class="space-y-4">
        <div class="text-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg border border-green-200 dark:border-green-800">
          <h3 class="text-lg font-semibold text-green-900 dark:text-green-300 mb-1">
            🎉 High Value Discovery!
          </h3>
          <p class="text-sm text-green-700 dark:text-green-400">
            This address has $27,340 in unclaimed airdrops!
          </p>
        </div>

        <AirdropChecker
          :available-protocols="protocols"
          :default-protocols="['dydx', 'ens', 'looksrare']"
          title="Whale Alert 🐋"
          subtitle="Major airdrops detected for this address"
          :user-address="'0xwhaleaddress...'"
          :is-connected="true"
          ref="checker"
        />
      </div>
    `,mounted(){setTimeout(()=>{var o;(o=this.$refs.checker)==null||o.setResults(this.results)},200)}})},T={render:()=>({components:{AirdropChecker:x},setup(){const o=p.slice(0,6).map((m,f)=>({id:String(f+1),protocol:m.name,token:m.name.slice(0,4).toUpperCase(),amount:"0",usdValue:"0",eligible:!1,chain:"ethereum",reason:"No activity during eligibility period",icon:m.icon,iconBg:m.iconBg,checking:!1}));return{protocols:p,results:o}},template:`
      <div class="space-y-4">
        <div class="text-center p-4 bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 rounded-lg border border-red-200 dark:border-red-800">
          <h3 class="text-lg font-semibold text-red-900 dark:text-red-300 mb-1">
            😔 No Airdrops Found
          </h3>
          <p class="text-sm text-red-700 dark:text-red-400">
            This address doesn't qualify for any current airdrops
          </p>
        </div>

        <AirdropChecker
          :available-protocols="protocols"
          :default-protocols="['uniswap', 'compound', 'ens', 'optimism', 'arbitrum', 'aave']"
          title="Airdrop Search Results"
          subtitle="Keep trying - new drops happen all the time!"
          :user-address="'0xnewaddress...'"
          :is-connected="true"
          ref="checker"
        />
      </div>
    `,mounted(){setTimeout(()=>{var o;(o=this.$refs.checker)==null||o.setResults(this.results)},200)}})};var K,X,Y;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    title: 'Airdrop Eligibility Checker',
    subtitle: 'Check your wallet across multiple protocols for claimable airdrops',
    userAddress: '',
    isConnected: false,
    showConnectWallet: true,
    availableProtocols: mockProtocols,
    defaultProtocols: ['uniswap', 'compound', 'ens', 'optimism', 'arbitrum'],
    showProtocolFilter: true,
    showResultsFilter: true,
    addressPlaceholder: '0x... or yourname.eth',
    checking: false
  }
}`,...(Y=(X=b.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var z,q,G;S.parameters={...S.parameters,docs:{...(z=S.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    userAddress: '0x742d35Cc6C4C4C7218243e428F9e99F50934e47E',
    isConnected: true,
    showConnectWallet: false
  }
}`,...(G=(q=S.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var J,Q,Z;D.parameters={...D.parameters,docs:{...(J=D.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => ({
    components: {
      AirdropChecker
    },
    setup() {
      return {
        protocols: mockProtocols,
        results: mockResults
      };
    },
    template: \`
      <AirdropChecker
        :available-protocols="protocols"
        :default-protocols="['uniswap', 'optimism', 'compound', 'blur']"
        :user-address="'0x742d35Cc6C4C4C7218243e428F9e99F50934e47E'"
        :is-connected="true"
        ref="checker"
      />
    \`,
    mounted() {
      // Simulate results after component mounts
      setTimeout(() => {
        this.$refs.checker?.setResults(this.results);
      }, 100);
    }
  })
}`,...(Z=(Q=D.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var ee,te,re;E.parameters={...E.parameters,docs:{...(ee=E.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    userAddress: '0x742d35Cc6C4C4C7218243e428F9e99F50934e47E',
    isConnected: true,
    checking: true
  }
}`,...(re=(te=E.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var oe,se,ne;_.parameters={..._.parameters,docs:{...(oe=_.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    availableProtocols: mockProtocols.slice(0, 5),
    defaultProtocols: ['uniswap', 'compound', 'ens'],
    userAddress: '0x742d35Cc6C4C4C7218243e428F9e99F50934e47E',
    isConnected: true
  }
}`,...(ne=(se=_.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var le,ae,ie;V.parameters={...V.parameters,docs:{...(le=V.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showProtocolFilter: false,
    availableProtocols: mockProtocols.slice(0, 3),
    defaultProtocols: ['uniswap', 'compound', 'ens'],
    userAddress: '0x742d35Cc6C4C4C7218243e428F9e99F50934e47E',
    isConnected: true
  }
}`,...(ie=(ae=V.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};var de,ce,ue;R.parameters={...R.parameters,docs:{...(de=R.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => ({
    components: {
      AirdropChecker
    },
    template: \`
      <div class="space-y-6">
        <div class="text-center">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Interactive Airdrop Checker
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Try checking different addresses and see the results
          </p>
        </div>

        <AirdropChecker
          :available-protocols="protocols"
          :default-protocols="selectedProtocols"
          :user-address="userAddress"
          :is-connected="isConnected"
          :checking="checking"
          title="Multi-Protocol Checker"
          subtitle="Discover unclaimed airdrops across DeFi"
          ref="checker"
          @check="handleCheck"
          @connect-wallet="handleConnectWallet"
          @claim-eligible="handleClaimEligible"
          @export-results="handleExportResults"
        />

        <div v-if="lastAction" class="rounded-lg bg-gray-100 p-3 dark:bg-gray-800">
          <div class="text-sm font-medium text-gray-700 dark:text-gray-300">Last Action:</div>
          <pre class="mt-1 text-xs text-gray-600 dark:text-gray-400">{{ lastAction }}</pre>
        </div>
      </div>
    \`,
    data() {
      return {
        protocols: mockProtocols,
        selectedProtocols: ['uniswap', 'optimism', 'compound', 'blur'],
        userAddress: '',
        isConnected: false,
        checking: false,
        lastAction: null
      };
    },
    methods: {
      async handleCheck(data) {
        this.checking = true;
        this.lastAction = \`Checking \${data.address} across \${data.protocols.length} protocols...\`;

        // Simulate checking with progress
        const totalSteps = 10;
        for (let i = 0; i <= totalSteps; i++) {
          await new Promise(resolve => setTimeout(resolve, 300));
          this.$refs.checker?.setProgress(i / totalSteps * 100);
        }

        // Set results
        const results = mockResults.filter(r => data.protocols.some(p => r.protocol.toLowerCase().includes(p)));
        this.$refs.checker?.setResults(results);
        this.checking = false;
        this.lastAction = \`Found \${results.filter(r => r.eligible).length} eligible airdrops worth $\${results.reduce((sum, r) => sum + parseFloat(r.usdValue || 0), 0).toLocaleString()}\`;
      },
      handleConnectWallet() {
        this.lastAction = 'Connecting wallet...';
        setTimeout(() => {
          this.isConnected = true;
          this.userAddress = '0x742d35Cc6C4C4C7218243e428F9e99F50934e47E';
          this.lastAction = 'Wallet connected successfully!';
        }, 2000);
      },
      handleClaimEligible(eligibleAirdrops) {
        this.lastAction = \`Claiming \${eligibleAirdrops.length} eligible airdrops...\`;
        setTimeout(() => {
          this.lastAction = \`Successfully claimed all eligible airdrops!\`;
        }, 3000);
      },
      handleExportResults(results) {
        this.lastAction = \`Exported \${results.length} results to CSV\`;
      }
    }
  })
}`,...(ue=(ce=R.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var ge,pe,me;B.parameters={...B.parameters,docs:{...(ge=B.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  },
  args: {
    ...Default.args,
    availableProtocols: mockProtocols.slice(0, 6),
    userAddress: '0x742d35Cc6C4C4C7218243e428F9e99F50934e47E',
    isConnected: true
  }
}`,...(me=(pe=B.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var he,be,ke;$.parameters={...$.parameters,docs:{...(he=$.parameters)==null?void 0:he.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  render: () => ({
    components: {
      AirdropChecker
    },
    template: \`
      <div class="dark">
        <div class="min-h-screen bg-gray-900 p-8">
          <AirdropChecker
            :available-protocols="protocols"
            :default-protocols="['uniswap', 'optimism', 'compound']"
            title="🌙 Night Airdrop Hunter"
            subtitle="Find your airdrops in the darkness of DeFi"
            :user-address="'0x742d35Cc6C4C4C7218243e428F9e99F50934e47E'"
            :is-connected="true"
            ref="checker"
          />
        </div>
      </div>
    \`,
    data() {
      return {
        protocols: mockProtocols
      };
    },
    mounted() {
      // Add some results for demo
      setTimeout(() => {
        this.$refs.checker?.setResults(mockResults.slice(0, 4));
      }, 500);
    }
  })
}`,...(ke=(be=$.parameters)==null?void 0:be.docs)==null?void 0:ke.source}}};var fe,xe,ye;N.parameters={...N.parameters,docs:{...(fe=N.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: () => ({
    components: {
      AirdropChecker
    },
    setup() {
      const highValueResults = [{
        id: '1',
        protocol: 'dYdX',
        token: 'DYDX',
        amount: '7500',
        usdValue: '22500',
        eligible: true,
        chain: 'ethereum',
        icon: '📈',
        iconBg: 'bg-gradient-to-r from-purple-500 to-pink-600'
      }, {
        id: '2',
        protocol: 'ENS',
        token: 'ENS',
        amount: '182',
        usdValue: '3640',
        eligible: true,
        chain: 'ethereum',
        icon: '🏷️',
        iconBg: 'bg-gradient-to-r from-blue-500 to-indigo-600'
      }, {
        id: '3',
        protocol: 'LooksRare',
        token: 'LOOKS',
        amount: '2000',
        usdValue: '1200',
        eligible: true,
        chain: 'ethereum',
        icon: '👀',
        iconBg: 'bg-gradient-to-r from-green-500 to-teal-600'
      }];
      return {
        protocols: mockProtocols,
        results: highValueResults
      };
    },
    template: \`
      <div class="space-y-4">
        <div class="text-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg border border-green-200 dark:border-green-800">
          <h3 class="text-lg font-semibold text-green-900 dark:text-green-300 mb-1">
            🎉 High Value Discovery!
          </h3>
          <p class="text-sm text-green-700 dark:text-green-400">
            This address has $27,340 in unclaimed airdrops!
          </p>
        </div>

        <AirdropChecker
          :available-protocols="protocols"
          :default-protocols="['dydx', 'ens', 'looksrare']"
          title="Whale Alert 🐋"
          subtitle="Major airdrops detected for this address"
          :user-address="'0xwhaleaddress...'"
          :is-connected="true"
          ref="checker"
        />
      </div>
    \`,
    mounted() {
      setTimeout(() => {
        this.$refs.checker?.setResults(this.results);
      }, 200);
    }
  })
}`,...(ye=(xe=N.parameters)==null?void 0:xe.docs)==null?void 0:ye.source}}};var ve,Ce,we;T.parameters={...T.parameters,docs:{...(ve=T.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  render: () => ({
    components: {
      AirdropChecker
    },
    setup() {
      const noEligibilityResults = mockProtocols.slice(0, 6).map((protocol, index) => ({
        id: String(index + 1),
        protocol: protocol.name,
        token: protocol.name.slice(0, 4).toUpperCase(),
        amount: '0',
        usdValue: '0',
        eligible: false,
        chain: 'ethereum',
        reason: 'No activity during eligibility period',
        icon: protocol.icon,
        iconBg: protocol.iconBg,
        checking: false
      }));
      return {
        protocols: mockProtocols,
        results: noEligibilityResults
      };
    },
    template: \`
      <div class="space-y-4">
        <div class="text-center p-4 bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 rounded-lg border border-red-200 dark:border-red-800">
          <h3 class="text-lg font-semibold text-red-900 dark:text-red-300 mb-1">
            😔 No Airdrops Found
          </h3>
          <p class="text-sm text-red-700 dark:text-red-400">
            This address doesn't qualify for any current airdrops
          </p>
        </div>

        <AirdropChecker
          :available-protocols="protocols"
          :default-protocols="['uniswap', 'compound', 'ens', 'optimism', 'arbitrum', 'aave']"
          title="Airdrop Search Results"
          subtitle="Keep trying - new drops happen all the time!"
          :user-address="'0xnewaddress...'"
          :is-connected="true"
          ref="checker"
        />
      </div>
    \`,
    mounted() {
      setTimeout(() => {
        this.$refs.checker?.setResults(this.results);
      }, 200);
    }
  })
}`,...(we=(Ce=T.parameters)==null?void 0:Ce.docs)==null?void 0:we.source}}};const Ut=["Default","ConnectedWallet","WithResults","Checking","LimitedProtocols","NoProtocolFilter","Interactive","MobileView","DarkMode","HighValueFinds","NoEligibility"];export{E as Checking,S as ConnectedWallet,$ as DarkMode,b as Default,N as HighValueFinds,R as Interactive,_ as LimitedProtocols,B as MobileView,T as NoEligibility,V as NoProtocolFilter,D as WithResults,Ut as __namedExportsOrder,jt as default};
