import{r as H,c as y,o as Me,b as a,f as r,d as l,t as o,n as u,F as T,g as P,j as Te,h as i,u as Pe}from"./vue.esm-bundler-DxM0YtBV.js";const $e={class:"bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"},qe={class:"p-6"},He={class:"flex items-start justify-between mb-4"},_e={class:"text-xl font-bold text-gray-900 dark:text-white"},Ue={key:0,class:"text-sm text-gray-600 dark:text-gray-400 mt-1"},Le={key:0,class:"space-y-4"},Oe={class:"flex items-center justify-between"},Re={class:"flex items-center space-x-4"},Ye=["src","alt"],Xe={key:1,class:"text-sm"},ze={class:"font-semibold text-gray-900 dark:text-white"},Je={class:"flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-400"},We={key:0},Ge={key:1,class:"text-green-600 dark:text-green-400 font-medium"},Ke={class:"flex items-center space-x-3"},Qe={key:0,class:"text-right"},Ze={key:0,class:"text-xs text-gray-500 dark:text-gray-400"},et=["onClick","disabled"],tt={key:0,class:"flex items-center space-x-2"},at={key:1},rt={key:2},it={key:0,class:"mt-3 pt-3 border-t border-green-200 dark:border-green-800"},nt={class:"text-xs text-green-700 dark:text-green-400"},st={class:"space-y-1"},ot={key:1,class:"text-center py-12"},lt={class:"text-lg font-medium text-gray-900 dark:text-white mb-2"},dt={class:"text-gray-600 dark:text-gray-400 mb-6"},ct=["disabled"],ut={key:0,class:"flex items-center space-x-2"},mt={key:1},gt={key:2,class:"space-y-4"},pt={key:3,class:"mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10 rounded-lg border border-green-200 dark:border-green-800"},bt={class:"flex justify-between items-center"},ht={class:"text-2xl font-bold text-green-900 dark:text-green-200"},ft={class:"text-right"},yt={class:"text-sm text-green-600 dark:text-green-400"},kt=["disabled"],xt={key:0,class:"flex items-center space-x-2"},vt={key:1},wt={key:4,class:"mt-6 pt-6 border-t border-gray-200 dark:border-gray-700"},Ct={key:0,class:"flex justify-between"},At=["disabled"],h={__name:"AirdropClaim",props:{title:{type:String,default:"Claimable Airdrops"},subtitle:{type:String,default:"Check and claim your eligible airdrops"},airdrops:{type:Array,default:()=>[]},userAddress:{type:String,default:""},loading:{type:Boolean,default:!1},loadingCount:{type:Number,default:3},checking:{type:Boolean,default:!1},showStatus:{type:Boolean,default:!0},showDetails:{type:Boolean,default:!0},showSummary:{type:Boolean,default:!0},showActions:{type:Boolean,default:!0},showRefresh:{type:Boolean,default:!0},showHistory:{type:Boolean,default:!0},emptyTitle:{type:String,default:"No Airdrops Available"},emptyDescription:{type:String,default:"Connect your wallet to check for eligible airdrops."},className:{type:String,default:""}},emits:["claim","claim-all","check-eligibility","show-history"],setup(e,{emit:g}){const c=e,p=g,b=H(null),f=H(!1),$=y(()=>c.airdrops.some(s=>s.eligible&&!s.claimed)),N=y(()=>c.airdrops.filter(s=>s.eligible&&!s.claimed).length),Be=y(()=>c.airdrops.filter(s=>s.eligible&&!s.claimed).reduce((s,n)=>s+parseFloat(n.usdValue||0),0)),je=y(()=>c.checking?"Checking...":$.value?`${N.value} Available`:"Not Eligible"),Ee=async s=>{b.value=s.id;try{p("claim",s),await new Promise(n=>setTimeout(n,2e3))}finally{b.value=null}},Ie=async()=>{const s=c.airdrops.filter(n=>n.eligible&&!n.claimed);f.value=!0;try{p("claim-all",s),await new Promise(n=>setTimeout(n,3e3))}finally{f.value=!1}},F=()=>{p("check-eligibility")},Ne=s=>{const n=new Date;return(new Date(s)-n)/(1e3*60*60*24)<7},Fe=s=>new Date(s).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"});return Me(()=>{c.userAddress&&c.airdrops.length===0&&F()}),(s,n)=>(i(),a("div",{class:u(["airdrop-claim",e.className])},[r("div",$e,[r("div",qe,[r("div",He,[r("div",null,[r("h2",_e,o(e.title),1),e.subtitle?(i(),a("p",Ue,o(e.subtitle),1)):l("",!0)]),e.showStatus?(i(),a("div",{key:0,class:u(["px-3 py-1 rounded-full text-xs font-medium",$.value?"bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400":e.checking?"bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400":"bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400"])},o(je.value),3)):l("",!0)]),e.airdrops.length>0?(i(),a("div",Le,[(i(!0),a(T,null,P(e.airdrops,(t,q)=>(i(),a("div",{key:t.id||q,class:u(["p-4 rounded-lg border transition-all duration-200",t.eligible?"border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/10":"border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800"])},[r("div",Oe,[r("div",Re,[t.icon?(i(),a("div",{key:0,class:u(["w-10 h-10 rounded-full flex items-center justify-center text-white font-bold",t.iconBg||"bg-gradient-to-r from-blue-500 to-purple-600"])},[t.icon.startsWith("http")?(i(),a("img",{key:0,src:t.icon,alt:t.project,class:"w-10 h-10 rounded-full"},null,8,Ye)):(i(),a("span",Xe,o(t.icon),1))],2)):(i(),a("div",{key:1,class:u(["w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm",t.iconBg||"bg-gradient-to-r from-blue-500 to-purple-600"])},o(t.project.slice(0,2).toUpperCase()),3)),r("div",null,[r("h3",ze,o(t.project),1),r("div",Je,[t.eligible?(i(),a("span",We,o(t.amount)+" "+o(t.token),1)):l("",!0),t.usdValue?(i(),a("span",Ge," ~$"+o(t.usdValue),1)):l("",!0),t.deadline?(i(),a("span",{key:2,class:u(["text-xs px-2 py-1 rounded",Ne(t.deadline)?"bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400":"bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"])}," Expires: "+o(Fe(t.deadline)),3)):l("",!0)])])]),r("div",Ke,[t.eligible?(i(),a("button",{key:1,onClick:M=>Ee(t),disabled:b.value===t.id||t.claimed,class:u(["px-4 py-2 rounded-lg font-medium transition-colors",t.claimed?"bg-gray-200 text-gray-500 cursor-not-allowed dark:bg-gray-700 dark:text-gray-400":b.value===t.id?"bg-blue-200 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300":"bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"])},[b.value===t.id?(i(),a("div",tt,[...n[2]||(n[2]=[r("div",{class:"w-4 h-4 border-2 border-blue-300 border-t-blue-600 rounded-full animate-spin"},null,-1),r("span",null,"Claiming...",-1)])])):t.claimed?(i(),a("span",at,"✓ Claimed")):(i(),a("span",rt,"Claim "+o(t.token),1))],10,et)):(i(),a("div",Qe,[n[1]||(n[1]=r("div",{class:"text-sm font-medium text-red-600 dark:text-red-400"}," Not Eligible ",-1)),t.reason?(i(),a("div",Ze,o(t.reason),1)):l("",!0)]))])]),e.showDetails&&t.eligible&&t.requirements?(i(),a("div",it,[r("div",nt,[n[4]||(n[4]=r("div",{class:"font-medium mb-1"},"Requirements Met:",-1)),r("ul",st,[(i(!0),a(T,null,P(t.requirements,M=>(i(),a("li",{key:M,class:"flex items-center space-x-2"},[n[3]||(n[3]=r("svg",{class:"w-3 h-3 text-green-500",fill:"currentColor",viewBox:"0 0 20 20"},[r("path",{"fill-rule":"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clip-rule":"evenodd"})],-1)),r("span",null,o(M),1)]))),128))])])])):l("",!0)],2))),128))])):!e.loading&&!e.checking?(i(),a("div",ot,[n[6]||(n[6]=r("div",{class:"w-16 h-16 mx-auto mb-4 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center"},[r("svg",{class:"w-8 h-8 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[r("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"})])],-1)),r("h3",lt,o(e.emptyTitle),1),r("p",dt,o(e.emptyDescription),1),e.showRefresh?(i(),a("button",{key:0,onClick:F,disabled:e.checking,class:"px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"},[e.checking?(i(),a("div",ut,[...n[5]||(n[5]=[r("div",{class:"w-4 h-4 border-2 border-blue-300 border-t-blue-600 rounded-full animate-spin"},null,-1),r("span",null,"Checking...",-1)])])):(i(),a("span",mt,"Check Again"))],8,ct)):l("",!0)])):l("",!0),e.loading||e.checking?(i(),a("div",gt,[(i(!0),a(T,null,P(e.loadingCount,t=>(i(),a("div",{key:t,class:"animate-pulse"},[...n[7]||(n[7]=[Pe('<div class="flex items-center justify-between p-4 rounded-lg bg-gray-100 dark:bg-gray-700"><div class="flex items-center space-x-4"><div class="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full"></div><div class="space-y-2"><div class="w-24 h-4 bg-gray-300 dark:bg-gray-600 rounded"></div><div class="w-32 h-3 bg-gray-300 dark:bg-gray-600 rounded"></div></div></div><div class="w-20 h-8 bg-gray-300 dark:bg-gray-600 rounded"></div></div>',1)])]))),128))])):l("",!0),e.airdrops.length>0&&e.showSummary?(i(),a("div",pt,[r("div",bt,[r("div",null,[n[8]||(n[8]=r("div",{class:"text-sm font-medium text-green-800 dark:text-green-300"}," Total Claimable Value ",-1)),r("div",ht," $"+o(Be.value.toLocaleString()),1)]),r("div",ft,[r("div",yt,o(N.value)+" of "+o(e.airdrops.length)+" eligible ",1),N.value>1?(i(),a("button",{key:0,onClick:Ie,disabled:f.value,class:"mt-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium transition-colors"},[f.value?(i(),a("div",xt,[...n[9]||(n[9]=[r("div",{class:"w-4 h-4 border-2 border-green-300 border-t-green-600 rounded-full animate-spin"},null,-1),r("span",null,"Claiming All...",-1)])])):(i(),a("span",vt,"Claim All"))],8,kt)):l("",!0)])])])):l("",!0),s.$slots.actions||e.showActions?(i(),a("div",wt,[Te(s.$slots,"actions",{},()=>[e.showActions?(i(),a("div",Ct,[r("button",{onClick:F,disabled:e.checking,class:"px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"}," 🔄 Refresh ",8,At),e.showHistory?(i(),a("button",{key:0,onClick:n[0]||(n[0]=t=>s.$emit("show-history")),class:"px-4 py-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"}," 📜 View History ")):l("",!0)])):l("",!0)])])):l("",!0)])])],2))}};h.__docgenInfo={exportName:"default",displayName:"AirdropClaim",description:"",tags:{},props:[{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"'Claimable Airdrops'"}},{name:"subtitle",type:{name:"string"},defaultValue:{func:!1,value:"'Check and claim your eligible airdrops'"}},{name:"airdrops",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"userAddress",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"loading",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"loadingCount",type:{name:"number"},defaultValue:{func:!1,value:"3"}},{name:"checking",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showStatus",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"showDetails",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"showSummary",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"showActions",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"showRefresh",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"showHistory",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"emptyTitle",type:{name:"string"},defaultValue:{func:!1,value:"'No Airdrops Available'"}},{name:"emptyDescription",type:{name:"string"},defaultValue:{func:!1,value:"'Connect your wallet to check for eligible airdrops.'"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"show-history"},{name:"claim"},{name:"claim-all"},{name:"check-eligibility"}],slots:[{name:"actions"}],sourceFiles:["/Users/steve/Projects/tnp.web.supaweb3/packages/ui/src/components/airdrops/AirdropClaim.vue"]};const m=[{id:"1",project:"Uniswap",token:"UNI",amount:"400",usdValue:"2400",eligible:!0,claimed:!1,deadline:"2025-01-15",icon:"🦄",iconBg:"bg-gradient-to-r from-pink-500 to-purple-600",requirements:["Used Uniswap before September 2020","Made at least 1 transaction","Held liquidity position"],description:"Early Uniswap users and liquidity providers"},{id:"2",project:"Optimism",token:"OP",amount:"1200",usdValue:"1800",eligible:!0,claimed:!1,deadline:"2024-12-31",icon:"🔴",iconBg:"bg-gradient-to-r from-red-500 to-pink-600",requirements:["Bridged to Optimism","Made transactions on L2","Used dApps on Optimism"]},{id:"3",project:"Arbitrum",token:"ARB",amount:"625",usdValue:"750",eligible:!0,claimed:!0,deadline:"2024-09-15",icon:"🔵",iconBg:"bg-gradient-to-r from-blue-500 to-cyan-600",requirements:["Bridged to Arbitrum One","Conducted transactions","Interacted with dApps"]},{id:"4",project:"ENS",token:"ENS",amount:"0",usdValue:"0",eligible:!1,claimed:!1,reason:"No ENS domain registered before snapshot",icon:"📛",iconBg:"bg-gradient-to-r from-blue-500 to-indigo-600"},{id:"5",project:"Blur",token:"BLUR",amount:"300",usdValue:"180",eligible:!0,claimed:!1,deadline:"2024-10-30",icon:"💨",iconBg:"bg-gradient-to-r from-orange-500 to-red-600",requirements:["Active NFT trader","Listed NFTs on Blur","Made bids on marketplace"]}],Dt={title:"Airdrops/AirdropClaim",component:h,parameters:{layout:"centered",docs:{description:{component:"A comprehensive interface for claiming available airdrops with eligibility checking, requirements display, and batch claiming functionality."}}},decorators:[()=>({template:'<div class="min-w-[600px] max-w-[800px]"><story /></div>'})],tags:["autodocs"],argTypes:{title:{control:"text",description:"Title of the claim interface"},subtitle:{control:"text",description:"Subtitle or description"},airdrops:{control:"object",description:"Array of airdrop objects"},userAddress:{control:"text",description:"Connected wallet address"},loading:{control:"boolean",description:"Show loading state"},checking:{control:"boolean",description:"Show checking eligibility state"},showStatus:{control:"boolean",description:"Show eligibility status badge"},showDetails:{control:"boolean",description:"Show requirement details"},showSummary:{control:"boolean",description:"Show total value summary"},showActions:{control:"boolean",description:"Show action buttons"},showRefresh:{control:"boolean",description:"Show refresh button"},showHistory:{control:"boolean",description:"Show history link"},loadingCount:{control:{type:"range",min:1,max:10,step:1},description:"Number of skeleton items when loading"},emptyTitle:{control:"text",description:"Title for empty state"},emptyDescription:{control:"text",description:"Description for empty state"},className:{control:"text",description:"Additional CSS classes"}}},d={args:{title:"Claimable Airdrops",subtitle:"Check and claim your eligible airdrops",airdrops:m,userAddress:"0x742d35Cc6C4C4C7218243e428F9e99F50934e47E",loading:!1,checking:!1,showStatus:!0,showDetails:!0,showSummary:!0,showActions:!0,showRefresh:!0,showHistory:!0}},k={args:{...d.args,airdrops:m.filter(e=>e.eligible&&!e.claimed)}},x={args:{...d.args,airdrops:m.map(e=>({...e,claimed:e.eligible}))}},v={args:{...d.args,airdrops:m.map(e=>({...e,eligible:!1,claimed:!1,reason:"Requirements not met"}))}},w={args:{...d.args,airdrops:[],loading:!0,loadingCount:5}},C={args:{...d.args,airdrops:[],checking:!0}},A={args:{...d.args,airdrops:[],loading:!1,checking:!1,emptyTitle:"No Airdrops Available",emptyDescription:"Connect your wallet to check for eligible airdrops."}},S={args:{...d.args,airdrops:[{id:"1",project:"Ethereum Name Service",token:"ENS",amount:"182",usdValue:"3640",eligible:!0,claimed:!1,deadline:"2025-05-04",icon:"🏷️",iconBg:"bg-gradient-to-r from-blue-500 to-indigo-600",requirements:["Registered .eth domain before Oct 2021","Set reverse record","Domain still active"]},{id:"2",project:"dYdX",token:"DYDX",amount:"7500",usdValue:"12000",eligible:!0,claimed:!1,deadline:"2024-12-01",icon:"📈",iconBg:"bg-gradient-to-r from-purple-500 to-pink-600",requirements:["Traded on dYdX Layer 2","Minimum $1000 volume","Active user before snapshot"]}]}},D={args:{...d.args,airdrops:[{id:"1",project:"SushiSwap",token:"SUSHI",amount:"340",usdValue:"450",eligible:!0,claimed:!1,deadline:new Date(Date.now()+2*24*60*60*1e3).toISOString(),icon:"🍣",iconBg:"bg-gradient-to-r from-pink-500 to-red-600",requirements:["Provided liquidity","Used SushiSwap before 2021","Held SUSHI tokens"]},{id:"2",project:"1inch",token:"1INCH",amount:"600",usdValue:"240",eligible:!0,claimed:!1,deadline:new Date(Date.now()+5*24*60*60*1e3).toISOString(),icon:"🔄",iconBg:"bg-gradient-to-r from-red-500 to-orange-600",requirements:["Used 1inch aggregator","Made swaps before Dec 2020","Minimum $100 volume"]}]}},V={args:{...d.args,title:"Available Claims",subtitle:"",showDetails:!1,showSummary:!1,showActions:!1,airdrops:m.slice(0,3)}},B={render:()=>({components:{AirdropClaim:h},template:`
      <div class="space-y-6">
        <div class="text-center">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Interactive Airdrop Claiming
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Try claiming airdrops and see real-time updates
          </p>
        </div>

        <AirdropClaim
          :airdrops="airdrops"
          :user-address="userAddress"
          :checking="checking"
          title="Your Airdrops"
          subtitle="Claim your eligible tokens"
          @claim="handleClaim"
          @claim-all="handleClaimAll"
          @check-eligibility="handleCheckEligibility"
          @show-history="handleShowHistory"
        />

        <div v-if="lastAction" class="rounded-lg bg-gray-100 p-3 dark:bg-gray-800">
          <div class="text-sm font-medium text-gray-700 dark:text-gray-300">Last Action:</div>
          <pre class="mt-1 text-xs text-gray-600 dark:text-gray-400">{{ lastAction }}</pre>
        </div>
      </div>
    `,data(){return{userAddress:"0x742d35Cc6C4C4C7218243e428F9e99F50934e47E",checking:!1,lastAction:null,airdrops:m}},methods:{async handleClaim(e){this.lastAction=`Claiming ${e.amount} ${e.token} from ${e.project}...`,setTimeout(()=>{const g=this.airdrops.findIndex(c=>c.id===e.id);g!==-1&&(this.airdrops[g].claimed=!0),this.lastAction=`Successfully claimed ${e.amount} ${e.token}!`},3e3)},async handleClaimAll(e){this.lastAction=`Claiming all ${e.length} eligible airdrops...`,setTimeout(()=>{e.forEach(g=>{const c=this.airdrops.findIndex(p=>p.id===g.id);c!==-1&&(this.airdrops[c].claimed=!0)}),this.lastAction="Successfully claimed all eligible airdrops!"},4e3)},handleCheckEligibility(){this.checking=!0,this.lastAction="Checking eligibility across protocols...",setTimeout(()=>{this.checking=!1,this.lastAction="Eligibility check complete!"},3e3)},handleShowHistory(){this.lastAction="Opening airdrop history..."}}})},j={render:()=>({components:{AirdropClaim:h},template:`
      <AirdropClaim
        :airdrops="airdrops"
        title="Premium Airdrops"
        subtitle="Exclusive drops for VIP users"
        empty-title="No Premium Drops"
        empty-description="Premium airdrops will appear here when available."
        class="max-w-2xl"
      >
        <template #actions>
          <div class="flex justify-between items-center">
            <div class="text-sm text-gray-600 dark:text-gray-400">
              🎯 VIP eligibility checked daily
            </div>
            <div class="flex space-x-2">
              <button class="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 text-sm font-medium transition-colors">
                Join VIP
              </button>
              <button class="px-4 py-2 text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 text-sm transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </template>
      </AirdropClaim>
    `,data(){return{airdrops:[{id:"1",project:"VIP Protocol",token:"VIP",amount:"1000",usdValue:"5000",eligible:!0,claimed:!1,icon:"👑",iconBg:"bg-gradient-to-r from-purple-500 to-pink-600",requirements:["VIP member","Minimum $10k portfolio","Active for 6+ months"]}]}}})},E={args:{...d.args,airdrops:[{id:"1",project:"Polygon",token:"MATIC",amount:"500",usdValue:"450",eligible:!0,claimed:!1,chain:"polygon",icon:"🔷",iconBg:"bg-gradient-to-r from-purple-500 to-indigo-600"},{id:"2",project:"Avalanche",token:"AVAX",amount:"25",usdValue:"850",eligible:!0,claimed:!1,chain:"avalanche",icon:"🔺",iconBg:"bg-gradient-to-r from-red-500 to-pink-600"},{id:"3",project:"Fantom",token:"FTM",amount:"2000",usdValue:"600",eligible:!0,claimed:!1,chain:"fantom",icon:"👻",iconBg:"bg-gradient-to-r from-blue-500 to-cyan-600"}]}},I={parameters:{backgrounds:{default:"dark"}},render:()=>({components:{AirdropClaim:h},template:`
      <div class="dark">
        <div class="min-h-screen bg-gray-900 p-8">
          <AirdropClaim
            :airdrops="airdrops"
            title="🌙 Night Mode Claims"
            subtitle="Your airdrops in beautiful dark mode"
            user-address="0x742d35Cc6C4C4C7218243e428F9e99F50934e47E"
          />
        </div>
      </div>
    `,data(){return{airdrops:m.slice(0,3)}}})};var _,U,L;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    title: 'Claimable Airdrops',
    subtitle: 'Check and claim your eligible airdrops',
    airdrops: mockAirdrops,
    userAddress: '0x742d35Cc6C4C4C7218243e428F9e99F50934e47E',
    loading: false,
    checking: false,
    showStatus: true,
    showDetails: true,
    showSummary: true,
    showActions: true,
    showRefresh: true,
    showHistory: true
  }
}`,...(L=(U=d.parameters)==null?void 0:U.docs)==null?void 0:L.source}}};var O,R,Y;k.parameters={...k.parameters,docs:{...(O=k.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    airdrops: mockAirdrops.filter(a => a.eligible && !a.claimed)
  }
}`,...(Y=(R=k.parameters)==null?void 0:R.docs)==null?void 0:Y.source}}};var X,z,J;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    airdrops: mockAirdrops.map(a => ({
      ...a,
      claimed: a.eligible
    }))
  }
}`,...(J=(z=x.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var W,G,K;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    airdrops: mockAirdrops.map(a => ({
      ...a,
      eligible: false,
      claimed: false,
      reason: 'Requirements not met'
    }))
  }
}`,...(K=(G=v.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var Q,Z,ee;w.parameters={...w.parameters,docs:{...(Q=w.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    airdrops: [],
    loading: true,
    loadingCount: 5
  }
}`,...(ee=(Z=w.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ae,re;C.parameters={...C.parameters,docs:{...(te=C.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    airdrops: [],
    checking: true
  }
}`,...(re=(ae=C.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var ie,ne,se;A.parameters={...A.parameters,docs:{...(ie=A.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    airdrops: [],
    loading: false,
    checking: false,
    emptyTitle: 'No Airdrops Available',
    emptyDescription: 'Connect your wallet to check for eligible airdrops.'
  }
}`,...(se=(ne=A.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var oe,le,de;S.parameters={...S.parameters,docs:{...(oe=S.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    airdrops: [{
      id: '1',
      project: 'Ethereum Name Service',
      token: 'ENS',
      amount: '182',
      usdValue: '3640',
      eligible: true,
      claimed: false,
      deadline: '2025-05-04',
      icon: '🏷️',
      iconBg: 'bg-gradient-to-r from-blue-500 to-indigo-600',
      requirements: ['Registered .eth domain before Oct 2021', 'Set reverse record', 'Domain still active']
    }, {
      id: '2',
      project: 'dYdX',
      token: 'DYDX',
      amount: '7500',
      usdValue: '12000',
      eligible: true,
      claimed: false,
      deadline: '2024-12-01',
      icon: '📈',
      iconBg: 'bg-gradient-to-r from-purple-500 to-pink-600',
      requirements: ['Traded on dYdX Layer 2', 'Minimum $1000 volume', 'Active user before snapshot']
    }]
  }
}`,...(de=(le=S.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ce,ue,me;D.parameters={...D.parameters,docs:{...(ce=D.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    airdrops: [{
      id: '1',
      project: 'SushiSwap',
      token: 'SUSHI',
      amount: '340',
      usdValue: '450',
      eligible: true,
      claimed: false,
      deadline: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(),
      // 2 days from now
      icon: '🍣',
      iconBg: 'bg-gradient-to-r from-pink-500 to-red-600',
      requirements: ['Provided liquidity', 'Used SushiSwap before 2021', 'Held SUSHI tokens']
    }, {
      id: '2',
      project: '1inch',
      token: '1INCH',
      amount: '600',
      usdValue: '240',
      eligible: true,
      claimed: false,
      deadline: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
      // 5 days from now
      icon: '🔄',
      iconBg: 'bg-gradient-to-r from-red-500 to-orange-600',
      requirements: ['Used 1inch aggregator', 'Made swaps before Dec 2020', 'Minimum $100 volume']
    }]
  }
}`,...(me=(ue=D.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var ge,pe,be;V.parameters={...V.parameters,docs:{...(ge=V.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title: 'Available Claims',
    subtitle: '',
    showDetails: false,
    showSummary: false,
    showActions: false,
    airdrops: mockAirdrops.slice(0, 3)
  }
}`,...(be=(pe=V.parameters)==null?void 0:pe.docs)==null?void 0:be.source}}};var he,fe,ye;B.parameters={...B.parameters,docs:{...(he=B.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => ({
    components: {
      AirdropClaim
    },
    template: \`
      <div class="space-y-6">
        <div class="text-center">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Interactive Airdrop Claiming
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Try claiming airdrops and see real-time updates
          </p>
        </div>

        <AirdropClaim
          :airdrops="airdrops"
          :user-address="userAddress"
          :checking="checking"
          title="Your Airdrops"
          subtitle="Claim your eligible tokens"
          @claim="handleClaim"
          @claim-all="handleClaimAll"
          @check-eligibility="handleCheckEligibility"
          @show-history="handleShowHistory"
        />

        <div v-if="lastAction" class="rounded-lg bg-gray-100 p-3 dark:bg-gray-800">
          <div class="text-sm font-medium text-gray-700 dark:text-gray-300">Last Action:</div>
          <pre class="mt-1 text-xs text-gray-600 dark:text-gray-400">{{ lastAction }}</pre>
        </div>
      </div>
    \`,
    data() {
      return {
        userAddress: '0x742d35Cc6C4C4C7218243e428F9e99F50934e47E',
        checking: false,
        lastAction: null,
        airdrops: mockAirdrops
      };
    },
    methods: {
      async handleClaim(airdrop) {
        this.lastAction = \`Claiming \${airdrop.amount} \${airdrop.token} from \${airdrop.project}...\`;

        // Simulate claim
        setTimeout(() => {
          const index = this.airdrops.findIndex(a => a.id === airdrop.id);
          if (index !== -1) {
            this.airdrops[index].claimed = true;
          }
          this.lastAction = \`Successfully claimed \${airdrop.amount} \${airdrop.token}!\`;
        }, 3000);
      },
      async handleClaimAll(airdrops) {
        this.lastAction = \`Claiming all \${airdrops.length} eligible airdrops...\`;
        setTimeout(() => {
          airdrops.forEach(airdrop => {
            const index = this.airdrops.findIndex(a => a.id === airdrop.id);
            if (index !== -1) {
              this.airdrops[index].claimed = true;
            }
          });
          this.lastAction = \`Successfully claimed all eligible airdrops!\`;
        }, 4000);
      },
      handleCheckEligibility() {
        this.checking = true;
        this.lastAction = 'Checking eligibility across protocols...';
        setTimeout(() => {
          this.checking = false;
          this.lastAction = 'Eligibility check complete!';
        }, 3000);
      },
      handleShowHistory() {
        this.lastAction = 'Opening airdrop history...';
      }
    }
  })
}`,...(ye=(fe=B.parameters)==null?void 0:fe.docs)==null?void 0:ye.source}}};var ke,xe,ve;j.parameters={...j.parameters,docs:{...(ke=j.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  render: () => ({
    components: {
      AirdropClaim
    },
    template: \`
      <AirdropClaim
        :airdrops="airdrops"
        title="Premium Airdrops"
        subtitle="Exclusive drops for VIP users"
        empty-title="No Premium Drops"
        empty-description="Premium airdrops will appear here when available."
        class="max-w-2xl"
      >
        <template #actions>
          <div class="flex justify-between items-center">
            <div class="text-sm text-gray-600 dark:text-gray-400">
              🎯 VIP eligibility checked daily
            </div>
            <div class="flex space-x-2">
              <button class="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 text-sm font-medium transition-colors">
                Join VIP
              </button>
              <button class="px-4 py-2 text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 text-sm transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </template>
      </AirdropClaim>
    \`,
    data() {
      return {
        airdrops: [{
          id: '1',
          project: 'VIP Protocol',
          token: 'VIP',
          amount: '1000',
          usdValue: '5000',
          eligible: true,
          claimed: false,
          icon: '👑',
          iconBg: 'bg-gradient-to-r from-purple-500 to-pink-600',
          requirements: ['VIP member', 'Minimum $10k portfolio', 'Active for 6+ months']
        }]
      };
    }
  })
}`,...(ve=(xe=j.parameters)==null?void 0:xe.docs)==null?void 0:ve.source}}};var we,Ce,Ae;E.parameters={...E.parameters,docs:{...(we=E.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    airdrops: [{
      id: '1',
      project: 'Polygon',
      token: 'MATIC',
      amount: '500',
      usdValue: '450',
      eligible: true,
      claimed: false,
      chain: 'polygon',
      icon: '🔷',
      iconBg: 'bg-gradient-to-r from-purple-500 to-indigo-600'
    }, {
      id: '2',
      project: 'Avalanche',
      token: 'AVAX',
      amount: '25',
      usdValue: '850',
      eligible: true,
      claimed: false,
      chain: 'avalanche',
      icon: '🔺',
      iconBg: 'bg-gradient-to-r from-red-500 to-pink-600'
    }, {
      id: '3',
      project: 'Fantom',
      token: 'FTM',
      amount: '2000',
      usdValue: '600',
      eligible: true,
      claimed: false,
      chain: 'fantom',
      icon: '👻',
      iconBg: 'bg-gradient-to-r from-blue-500 to-cyan-600'
    }]
  }
}`,...(Ae=(Ce=E.parameters)==null?void 0:Ce.docs)==null?void 0:Ae.source}}};var Se,De,Ve;I.parameters={...I.parameters,docs:{...(Se=I.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  render: () => ({
    components: {
      AirdropClaim
    },
    template: \`
      <div class="dark">
        <div class="min-h-screen bg-gray-900 p-8">
          <AirdropClaim
            :airdrops="airdrops"
            title="🌙 Night Mode Claims"
            subtitle="Your airdrops in beautiful dark mode"
            user-address="0x742d35Cc6C4C4C7218243e428F9e99F50934e47E"
          />
        </div>
      </div>
    \`,
    data() {
      return {
        airdrops: mockAirdrops.slice(0, 3)
      };
    }
  })
}`,...(Ve=(De=I.parameters)==null?void 0:De.docs)==null?void 0:Ve.source}}};const Vt=["Default","EligibleAirdrops","AlreadyClaimed","NotEligible","Loading","Checking","Empty","HighValue","ExpiringSoon","MinimalInterface","InteractiveClaiming","CustomContent","MultiChain","DarkMode"];export{x as AlreadyClaimed,C as Checking,j as CustomContent,I as DarkMode,d as Default,k as EligibleAirdrops,A as Empty,D as ExpiringSoon,S as HighValue,B as InteractiveClaiming,w as Loading,V as MinimalInterface,E as MultiChain,v as NotEligible,Vt as __namedExportsOrder,Dt as default};
