import{r as D,c as X,b as s,f as t,d as o,t as n,n as p,w as G,v as q,F as Ie,g as Ce,h as r}from"./vue.esm-bundler-DxM0YtBV.js";const $e={class:"bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"},De={class:"p-6"},Me={class:"flex justify-between items-start mb-6"},Re={class:"text-xl font-bold text-gray-900 dark:text-white"},Ve={key:0,class:"text-sm text-gray-600 dark:text-gray-400 mt-1"},He={key:0,class:"text-right"},Ue={class:"text-lg font-semibold text-gray-900 dark:text-white"},je={class:"flex bg-gray-100 dark:bg-gray-700 p-1 rounded-lg mb-6"},Ye={key:0,class:"space-y-6"},Ne={class:"grid grid-cols-1 md:grid-cols-3 gap-4"},Be={class:"bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800"},Oe={class:"text-2xl font-bold text-green-600 dark:text-green-400"},Le={key:0,class:"text-xs text-green-600 dark:text-green-400 mt-1"},We={class:"bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800"},ze={class:"text-2xl font-bold text-blue-600 dark:text-blue-400"},Ke={class:"text-xs text-blue-600 dark:text-blue-400 mt-1"},Qe={class:"bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800"},Xe={class:"text-2xl font-bold text-purple-600 dark:text-purple-400"},Ge={class:"text-xs text-purple-600 dark:text-purple-400 mt-1"},qe={class:"space-y-4"},Je={class:"relative"},Ze=["placeholder","disabled"],_e={class:"flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1"},et={key:0},tt={key:0,class:"flex gap-2"},at=["onClick"],nt={key:1,class:"bg-gray-50 dark:bg-gray-800 p-4 rounded-lg"},st={class:"space-y-2 text-sm"},rt={class:"flex justify-between"},ot={class:"font-medium"},lt={class:"flex justify-between"},it={class:"font-medium"},dt={class:"flex justify-between"},ut={class:"font-medium text-green-600 dark:text-green-400"},ct={key:1,class:"space-y-6"},mt={class:"bg-gray-50 dark:bg-gray-800 p-4 rounded-lg"},gt={class:"flex justify-between items-center mb-3"},kt={key:0,class:"text-sm text-orange-600 dark:text-orange-400"},yt={class:"grid grid-cols-2 gap-4"},bt={class:"text-lg font-semibold text-gray-900 dark:text-white"},ft={class:"text-sm text-gray-500 dark:text-gray-400"},xt={class:"text-lg font-semibold text-green-600 dark:text-green-400"},wt={class:"text-sm text-gray-500 dark:text-gray-400"},vt={class:"relative"},pt=["max","placeholder","disabled"],ht={class:"text-xs text-gray-500 dark:text-gray-400 mt-1"},Tt={key:0,class:"bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800"},St={class:"flex items-start space-x-3"},At={class:"text-sm text-yellow-700 dark:text-yellow-400 mt-1"},Et={class:"space-y-1"},Ft={key:0},Pt={key:1},It={key:2,class:"mt-6 pt-6 border-t border-gray-200 dark:border-gray-700"},Ct={class:"flex justify-between items-center"},$t={class:"text-sm text-gray-600 dark:text-gray-400"},Dt=["disabled"],Mt={key:0,class:"w-4 h-4 border-2 border-purple-300 border-t-purple-600 rounded-full animate-spin"},Rt={class:"mt-6"},Vt=["disabled"],Ht={key:0,class:"w-5 h-5 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"},Ut={key:3,class:"mt-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"},jt={class:"text-sm text-gray-600 dark:text-gray-400 space-y-1"},Yt={class:"flex justify-between"},Nt={key:0,class:"flex justify-between"},Bt={key:1,class:"flex justify-between text-orange-600 dark:text-orange-400"},Ot={key:4,class:"mt-6 pt-6 border-t border-gray-200 dark:border-gray-700"},Lt={class:"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm"},Wt={key:0},zt={class:"font-medium text-gray-900 dark:text-white"},Kt={key:1},Qt={class:"font-medium text-gray-900 dark:text-white"},Xt={key:2},Gt={class:"font-medium text-gray-900 dark:text-white"},qt={key:3},Jt={class:"font-medium text-gray-900 dark:text-white"},I={__name:"StakingInterface",props:{title:{type:String,default:"Staking Interface"},subtitle:{type:String,default:"Stake your tokens and earn rewards"},stakingToken:{type:Object,default:()=>({symbol:"ETH",balance:"10.5",price:2500,decimals:18})},rewardToken:{type:Object,default:()=>({symbol:"REWARD",balance:"0",price:1,decimals:18})},currentAPY:{type:[String,Number],default:"12.5"},apyTrend:{type:Number,default:0},stakedAmount:{type:String,default:"0"},rewardsEarned:{type:String,default:"0"},poolInfo:{type:Object,default:()=>({tvl:"15.2M",totalStaked:"8.9M",participants:"1,234"})},cooldownPeriod:{type:String,default:""},unstakingPenalty:{type:[String,Number],default:0},cooldownEndTime:{type:String,default:""},additionalInfo:{type:Object,default:()=>({})},showQuickAmounts:{type:Boolean,default:!0},showClaimRewards:{type:Boolean,default:!0},showTransactionDetails:{type:Boolean,default:!0},showUnstakeTimer:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},claiming:{type:Boolean,default:!1},gasEstimate:{type:String,default:"5"},className:{type:String,default:""}},emits:["stake","unstake","claim-rewards"],setup(e,{emit:x}){const d=e,C=x,u=D("stake"),i=D(""),c=D(""),M=X(()=>{var l;return d.loading?!0:u.value==="stake"?!i.value||parseFloat(i.value)<=0||parseFloat(i.value)>parseFloat(((l=d.stakingToken)==null?void 0:l.balance)||"0"):u.value==="unstake"?!c.value||parseFloat(c.value)<=0||parseFloat(c.value)>parseFloat(d.stakedAmount||"0"):!1}),pe=X(()=>{var l,a;return d.loading?u.value==="stake"?"Staking...":"Unstaking...":u.value==="stake"?i.value?`Stake ${i.value} ${(l=d.stakingToken)==null?void 0:l.symbol}`:"Enter Amount":c.value?`Unstake ${c.value} ${(a=d.stakingToken)==null?void 0:a.symbol}`:"Enter Amount"}),he=()=>{var l;i.value=((l=d.stakingToken)==null?void 0:l.balance)||"0"},Te=()=>{c.value=d.stakedAmount||"0"},Se=l=>{var m;const y=(parseFloat(((m=d.stakingToken)==null?void 0:m.balance)||"0")*l/100).toFixed(6);i.value=y},$=l=>{const a=parseFloat(i.value||"0"),y=parseFloat(d.currentAPY||"0")/100,m={daily:1/365,monthly:1/12,yearly:1};return(a*y*m[l]).toFixed(4)},Ae=()=>{const l=parseFloat(c.value||"0"),a=parseFloat(d.unstakingPenalty||"0")/100;return(l*a).toFixed(4)},Ee=()=>{u.value==="stake"?C("stake",{amount:i.value,token:d.stakingToken}):C("unstake",{amount:c.value,token:d.stakingToken})},Fe=()=>{C("claim-rewards",{amount:d.rewardsEarned,token:d.rewardToken})},v=l=>new Intl.NumberFormat("en-US",{minimumFractionDigits:0,maximumFractionDigits:2}).format(l),Pe=l=>{const a=new Date().getTime(),y=new Date(l).getTime(),m=Math.max(0,y-a),b=Math.floor(m/(1e3*60*60*24)),f=Math.floor(m%(1e3*60*60*24)/(1e3*60*60)),w=Math.floor(m%(1e3*60*60)/(1e3*60));return b>0?`${b}d ${f}h`:f>0?`${f}h ${w}m`:`${w}m`};return(l,a)=>{var y,m,b,f,w,R,V,H,U,j,Y,N,B,O,L,W,z,K,Q;return r(),s("div",{class:p(["staking-interface",e.className])},[t("div",$e,[t("div",De,[t("div",Me,[t("div",null,[t("h2",Re,n(e.title),1),e.subtitle?(r(),s("p",Ve,n(e.subtitle),1)):o("",!0)]),e.poolInfo?(r(),s("div",He,[a[4]||(a[4]=t("div",{class:"text-sm text-gray-600 dark:text-gray-400"},"Pool TVL",-1)),t("div",Ue," $"+n(e.poolInfo.tvl),1)])):o("",!0)]),t("div",je,[t("button",{onClick:a[0]||(a[0]=g=>u.value="stake"),class:p(["flex-1 py-2 px-4 rounded-md font-medium transition-colors",u.value==="stake"?"bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm":"text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"])}," Stake ",2),t("button",{onClick:a[1]||(a[1]=g=>u.value="unstake"),class:p(["flex-1 py-2 px-4 rounded-md font-medium transition-colors",u.value==="unstake"?"bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm":"text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"])}," Unstake ",2)]),u.value==="stake"?(r(),s("div",Ye,[t("div",Ne,[t("div",Be,[a[5]||(a[5]=t("div",{class:"text-sm text-green-700 dark:text-green-300 mb-1"},"Current APY",-1)),t("div",Oe,n(e.currentAPY)+"% ",1),e.apyTrend?(r(),s("div",Le,n(e.apyTrend>0?"↗":e.apyTrend<0?"↘":"→")+" "+n(Math.abs(e.apyTrend))+"% vs last week ",1)):o("",!0)]),t("div",We,[a[6]||(a[6]=t("div",{class:"text-sm text-blue-700 dark:text-blue-300 mb-1"},"Your Staked",-1)),t("div",ze,n(e.stakedAmount||"0"),1),t("div",Ke,n(((y=e.stakingToken)==null?void 0:y.symbol)||"TOKEN"),1)]),t("div",Qe,[a[7]||(a[7]=t("div",{class:"text-sm text-purple-700 dark:text-purple-300 mb-1"},"Rewards Earned",-1)),t("div",Xe,n(e.rewardsEarned||"0"),1),t("div",Ge,n(((m=e.rewardToken)==null?void 0:m.symbol)||"REWARD"),1)])]),t("div",qe,[t("div",null,[a[8]||(a[8]=t("label",{class:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"}," Amount to Stake ",-1)),t("div",Je,[G(t("input",{"onUpdate:modelValue":a[2]||(a[2]=g=>i.value=g),type:"number",placeholder:`Enter ${((b=e.stakingToken)==null?void 0:b.symbol)||"TOKEN"} amount`,disabled:e.loading||e.claiming,class:"w-full px-4 py-3 pr-20 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white disabled:opacity-50"},null,8,Ze),[[q,i.value]]),t("button",{onClick:he,class:"absolute right-3 top-3 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"}," MAX ")]),t("div",_e,[t("span",null,"Balance: "+n(((f=e.stakingToken)==null?void 0:f.balance)||"0")+" "+n((w=e.stakingToken)==null?void 0:w.symbol),1),i.value?(r(),s("span",et,"≈ $"+n(v(parseFloat(i.value)*(((R=e.stakingToken)==null?void 0:R.price)||0))),1)):o("",!0)])]),e.showQuickAmounts?(r(),s("div",tt,[(r(),s(Ie,null,Ce([25,50,75,100],g=>t("button",{key:g,onClick:Zt=>Se(g),class:"px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"},n(g)+"% ",9,at)),64))])):o("",!0),i.value&&parseFloat(i.value)>0?(r(),s("div",nt,[a[12]||(a[12]=t("div",{class:"text-sm font-medium text-gray-700 dark:text-gray-300 mb-3"}," Projected Annual Rewards ",-1)),t("div",st,[t("div",rt,[a[9]||(a[9]=t("span",{class:"text-gray-600 dark:text-gray-400"},"Daily rewards:",-1)),t("span",ot,n($("daily"))+" "+n((V=e.rewardToken)==null?void 0:V.symbol),1)]),t("div",lt,[a[10]||(a[10]=t("span",{class:"text-gray-600 dark:text-gray-400"},"Monthly rewards:",-1)),t("span",it,n($("monthly"))+" "+n((H=e.rewardToken)==null?void 0:H.symbol),1)]),t("div",dt,[a[11]||(a[11]=t("span",{class:"text-gray-600 dark:text-gray-400"},"Annual rewards:",-1)),t("span",ut,n($("yearly"))+" "+n((U=e.rewardToken)==null?void 0:U.symbol),1)])])])):o("",!0)])])):(r(),s("div",ct,[t("div",mt,[t("div",gt,[a[13]||(a[13]=t("h3",{class:"font-medium text-gray-900 dark:text-white"},"Your Staking Position",-1)),e.showUnstakeTimer&&e.cooldownEndTime?(r(),s("div",kt," Cooldown: "+n(Pe(e.cooldownEndTime)),1)):o("",!0)]),t("div",yt,[t("div",null,[a[14]||(a[14]=t("div",{class:"text-sm text-gray-600 dark:text-gray-400"},"Staked Amount",-1)),t("div",bt,n(e.stakedAmount||"0")+" "+n((j=e.stakingToken)==null?void 0:j.symbol),1),t("div",ft," ≈ $"+n(v(parseFloat(e.stakedAmount||"0")*(((Y=e.stakingToken)==null?void 0:Y.price)||0))),1)]),t("div",null,[a[15]||(a[15]=t("div",{class:"text-sm text-gray-600 dark:text-gray-400"},"Rewards Earned",-1)),t("div",xt,n(e.rewardsEarned||"0")+" "+n((N=e.rewardToken)==null?void 0:N.symbol),1),t("div",wt," ≈ $"+n(v(parseFloat(e.rewardsEarned||"0")*(((B=e.rewardToken)==null?void 0:B.price)||0))),1)])])]),t("div",null,[a[16]||(a[16]=t("label",{class:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"}," Amount to Unstake ",-1)),t("div",vt,[G(t("input",{"onUpdate:modelValue":a[3]||(a[3]=g=>c.value=g),type:"number",max:e.stakedAmount,placeholder:`Enter ${((O=e.stakingToken)==null?void 0:O.symbol)||"TOKEN"} amount`,disabled:e.loading||e.claiming,class:"w-full px-4 py-3 pr-20 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white disabled:opacity-50"},null,8,pt),[[q,c.value]]),t("button",{onClick:Te,class:"absolute right-3 top-3 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"}," MAX ")]),t("div",ht," Available: "+n(e.stakedAmount||"0")+" "+n((L=e.stakingToken)==null?void 0:L.symbol),1)]),e.unstakingPenalty||e.cooldownPeriod?(r(),s("div",Tt,[t("div",St,[a[19]||(a[19]=t("svg",{class:"w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5",fill:"currentColor",viewBox:"0 0 20 20"},[t("path",{"fill-rule":"evenodd",d:"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z","clip-rule":"evenodd"})],-1)),t("div",null,[a[18]||(a[18]=t("div",{class:"font-medium text-yellow-800 dark:text-yellow-300"},"Unstaking Notice",-1)),t("div",At,[t("ul",Et,[e.cooldownPeriod?(r(),s("li",Ft,"• Cooldown period: "+n(e.cooldownPeriod)+" before tokens are available",1)):o("",!0),e.unstakingPenalty?(r(),s("li",Pt,"• Early unstaking penalty: "+n(e.unstakingPenalty)+"%",1)):o("",!0),a[17]||(a[17]=t("li",null,"• Rewards will stop accumulating for unstaked amount",-1))])])])])])):o("",!0)])),e.showClaimRewards&&e.rewardsEarned&&parseFloat(e.rewardsEarned)>0?(r(),s("div",It,[t("div",Ct,[t("div",null,[a[20]||(a[20]=t("div",{class:"font-medium text-gray-900 dark:text-white"},"Claimable Rewards",-1)),t("div",$t,n(e.rewardsEarned)+" "+n((W=e.rewardToken)==null?void 0:W.symbol)+" (≈ $"+n(v(parseFloat(e.rewardsEarned||"0")*(((z=e.rewardToken)==null?void 0:z.price)||0)))+") ",1)]),t("button",{onClick:Fe,disabled:e.claiming||e.loading,class:"px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed font-medium transition-colors flex items-center space-x-2"},[e.claiming?(r(),s("div",Mt)):o("",!0),t("span",null,n(e.claiming?"Claiming...":"Claim Rewards"),1)],8,Dt)])])):o("",!0),t("div",Rt,[t("button",{onClick:Ee,disabled:M.value,class:p(["w-full py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2",M.value?"bg-gray-200 text-gray-500 cursor-not-allowed dark:bg-gray-700 dark:text-gray-400":u.value==="stake"?"bg-blue-500 text-white hover:bg-blue-600":"bg-red-500 text-white hover:bg-red-600"])},[e.loading?(r(),s("div",Ht)):o("",!0),t("span",null,n(pe.value),1)],10,Vt)]),e.showTransactionDetails&&(i.value||c.value)?(r(),s("div",Ut,[t("div",jt,[t("div",Yt,[a[21]||(a[21]=t("span",null,"Gas fee estimate:",-1)),t("span",null,"~$"+n(e.gasEstimate||"5"),1)]),u.value==="stake"?(r(),s("div",Nt,[a[22]||(a[22]=t("span",null,"You will receive:",-1)),t("span",null,n(i.value)+" st"+n(((K=e.stakingToken)==null?void 0:K.symbol)||"TOKEN"),1)])):o("",!0),u.value==="unstake"&&e.unstakingPenalty?(r(),s("div",Bt,[a[23]||(a[23]=t("span",null,"Penalty fee:",-1)),t("span",null,n(Ae())+" "+n((Q=e.stakingToken)==null?void 0:Q.symbol),1)])):o("",!0)])])):o("",!0),e.additionalInfo?(r(),s("div",Ot,[t("div",Lt,[e.additionalInfo.lockPeriod?(r(),s("div",Wt,[a[24]||(a[24]=t("div",{class:"text-gray-600 dark:text-gray-400"},"Lock Period",-1)),t("div",zt,n(e.additionalInfo.lockPeriod),1)])):o("",!0),e.additionalInfo.compounding?(r(),s("div",Kt,[a[25]||(a[25]=t("div",{class:"text-gray-600 dark:text-gray-400"},"Auto-Compound",-1)),t("div",Qt,n(e.additionalInfo.compounding),1)])):o("",!0),e.additionalInfo.totalStakers?(r(),s("div",Xt,[a[26]||(a[26]=t("div",{class:"text-gray-600 dark:text-gray-400"},"Total Stakers",-1)),t("div",Gt,n(e.additionalInfo.totalStakers),1)])):o("",!0),e.additionalInfo.protocolFee?(r(),s("div",qt,[a[27]||(a[27]=t("div",{class:"text-gray-600 dark:text-gray-400"},"Protocol Fee",-1)),t("div",Jt,n(e.additionalInfo.protocolFee)+"%",1)])):o("",!0)])])):o("",!0)])])],2)}}};I.__docgenInfo={exportName:"default",displayName:"StakingInterface",description:"",tags:{},props:[{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"'Staking Interface'"}},{name:"subtitle",type:{name:"string"},defaultValue:{func:!1,value:"'Stake your tokens and earn rewards'"}},{name:"stakingToken",type:{name:"object"},defaultValue:{func:!1,value:`{
  symbol: 'ETH',
  balance: '10.5',
  price: 2500,
  decimals: 18
}`}},{name:"rewardToken",type:{name:"object"},defaultValue:{func:!1,value:`{
  symbol: 'REWARD',
  balance: '0',
  price: 1,
  decimals: 18
}`}},{name:"currentAPY",type:{name:"string|number"},defaultValue:{func:!1,value:"'12.5'"}},{name:"apyTrend",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"stakedAmount",type:{name:"string"},defaultValue:{func:!1,value:"'0'"}},{name:"rewardsEarned",type:{name:"string"},defaultValue:{func:!1,value:"'0'"}},{name:"poolInfo",type:{name:"object"},defaultValue:{func:!1,value:`{
  tvl: '15.2M',
  totalStaked: '8.9M',
  participants: '1,234'
}`}},{name:"cooldownPeriod",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"unstakingPenalty",type:{name:"string|number"},defaultValue:{func:!1,value:"0"}},{name:"cooldownEndTime",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"additionalInfo",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"showQuickAmounts",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"showClaimRewards",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"showTransactionDetails",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"showUnstakeTimer",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"loading",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"claiming",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"gasEstimate",type:{name:"string"},defaultValue:{func:!1,value:"'5'"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"stake"},{name:"unstake"},{name:"claim-rewards"}],sourceFiles:["/Users/steve/Projects/tnp.web.supaweb3/packages/ui/src/components/defi/StakingInterface.vue"]};const ea={title:"DeFi/StakingInterface",component:I,parameters:{layout:"centered",docs:{description:{component:"A comprehensive staking interface with APY display, rewards calculation, and auto-compound functionality."}}},decorators:[()=>({template:'<div class="min-w-[600px] max-w-[800px]"><story /></div>'})],tags:["autodocs"],argTypes:{title:{control:"text",description:"Title of the staking interface"},subtitle:{control:"text",description:"Subtitle or description"},stakingToken:{control:"object",description:"Token being staked"},rewardToken:{control:"object",description:"Reward token details"},currentAPY:{control:"text",description:"Current APY percentage"},stakedAmount:{control:"text",description:"User staked amount"},rewardsEarned:{control:"text",description:"Rewards earned"},showAutoCompound:{control:"boolean",description:"Show auto-compound toggle"},showClaimRewards:{control:"boolean",description:"Show claim rewards section"},loading:{control:"boolean",description:"Loading state"},claiming:{control:"boolean",description:"Claiming state"}}},k={args:{title:"ETH Staking",subtitle:"Stake ETH and earn rewards",stakingToken:{symbol:"ETH",balance:"10.5",price:2500,decimals:18},rewardToken:{symbol:"stETH",balance:"0",price:2500,decimals:18},currentAPY:"4.2",apyTrend:.3,stakedAmount:"2.5",rewardsEarned:"0.025",poolInfo:{tvl:"15.2M",totalStaked:"8.9M",participants:"12,340"},showAutoCompound:!0,showClaimRewards:!0,showTransactionDetails:!0,loading:!1,claiming:!1}},h={args:{...k.args,title:"High Yield Staking Pool",subtitle:"Earn maximum rewards with our premium staking",currentAPY:"25.8",apyTrend:5.2,stakingToken:{symbol:"SUPA",balance:"1000",price:50,decimals:18},rewardToken:{symbol:"REWARD",balance:"0",price:25,decimals:18},stakedAmount:"500",rewardsEarned:"125",poolInfo:{tvl:"2.8M",totalStaked:"1.2M",participants:"856"}}},T={args:{...k.args,title:"Staking with Cooldown",subtitle:"Note: 7-day cooldown period for unstaking",cooldownPeriod:"7 days",unstakingPenalty:"2.5",cooldownEndTime:new Date(Date.now()+5*24*60*60*1e3).toISOString(),showUnstakeTimer:!0,additionalInfo:{lockPeriod:"Flexible",compounding:"Daily",totalStakers:"12,340",protocolFee:"0.5"}}},S={args:{...k.args,stakedAmount:"0",rewardsEarned:"0",title:"Start Staking",subtitle:"Begin earning rewards by staking your tokens"}},A={args:{...k.args,loading:!0}},E={args:{...k.args,claiming:!0,rewardsEarned:"5.25"}},F={render:()=>({components:{StakingInterface:I},template:`
      <div class="space-y-6">
        <div class="text-center">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Interactive Staking Interface
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Try staking, unstaking, and claiming rewards
          </p>
        </div>

        <StakingInterface
          :staking-token="stakingToken"
          :reward-token="rewardToken"
          :current-apy="currentAPY"
          :staked-amount="stakedAmount"
          :rewards-earned="rewardsEarned"
          :loading="loading"
          :claiming="claiming"
          title="Interactive ETH Staking"
          subtitle="Full-featured staking with live updates"
          @stake="handleStake"
          @unstake="handleUnstake"
          @claim-rewards="handleClaimRewards"
        />

        <div v-if="lastAction" class="rounded-lg bg-gray-100 p-3 dark:bg-gray-800">
          <div class="text-sm font-medium text-gray-700 dark:text-gray-300">Last Action:</div>
          <pre class="mt-1 text-xs text-gray-600 dark:text-gray-400">{{ lastAction }}</pre>
        </div>
      </div>
    `,data(){return{stakingToken:{symbol:"ETH",balance:"10.5",price:2500,decimals:18},rewardToken:{symbol:"stETH",balance:"0",price:2500,decimals:18},currentAPY:"4.2",stakedAmount:"2.5",rewardsEarned:"0.125",loading:!1,claiming:!1,lastAction:null}},methods:{async handleStake(e){this.loading=!0,this.lastAction=`Staking ${e.amount} ${e.token.symbol}...`,setTimeout(()=>{const x=parseFloat(this.stakedAmount)+parseFloat(e.amount);this.stakedAmount=x.toString(),this.stakingToken.balance=(parseFloat(this.stakingToken.balance)-parseFloat(e.amount)).toString(),this.loading=!1,this.lastAction=`Successfully staked ${e.amount} ${e.token.symbol}!`},3e3)},async handleUnstake(e){this.loading=!0,this.lastAction=`Unstaking ${e.amount} ${e.token.symbol}...`,setTimeout(()=>{const x=Math.max(0,parseFloat(this.stakedAmount)-parseFloat(e.amount));this.stakedAmount=x.toString(),this.stakingToken.balance=(parseFloat(this.stakingToken.balance)+parseFloat(e.amount)).toString(),this.loading=!1,this.lastAction=`Successfully unstaked ${e.amount} ${e.token.symbol}!`},3e3)},async handleClaimRewards(e){this.claiming=!0,this.lastAction=`Claiming ${e.amount} ${e.token.symbol} rewards...`,setTimeout(()=>{this.rewardToken.balance=(parseFloat(this.rewardToken.balance)+parseFloat(this.rewardsEarned)).toString(),this.rewardsEarned="0",this.claiming=!1,this.lastAction=`Successfully claimed ${e.amount} ${e.token.symbol} rewards!`},2500)}}})},P={parameters:{backgrounds:{default:"dark"}},render:()=>({components:{StakingInterface:I},template:`
      <div class="dark">
        <div class="min-h-screen bg-gray-900 p-8">
          <StakingInterface
            :staking-token="{
              symbol: 'ETH',
              balance: '10.5',
              price: 2500,
              decimals: 18
            }"
            :reward-token="{
              symbol: 'stETH',
              balance: '0',
              price: 2500,
              decimals: 18
            }"
            current-apy="4.2"
            staked-amount="2.5"
            rewards-earned="0.125"
            title="🌙 Night Mode Staking"
            subtitle="Beautiful dark theme staking interface"
            :show-auto-compound="true"
          />
        </div>
      </div>
    `})};var J,Z,_;k.parameters={...k.parameters,docs:{...(J=k.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    title: 'ETH Staking',
    subtitle: 'Stake ETH and earn rewards',
    stakingToken: {
      symbol: 'ETH',
      balance: '10.5',
      price: 2500,
      decimals: 18
    },
    rewardToken: {
      symbol: 'stETH',
      balance: '0',
      price: 2500,
      decimals: 18
    },
    currentAPY: '4.2',
    apyTrend: 0.3,
    stakedAmount: '2.5',
    rewardsEarned: '0.025',
    poolInfo: {
      tvl: '15.2M',
      totalStaked: '8.9M',
      participants: '12,340'
    },
    showAutoCompound: true,
    showClaimRewards: true,
    showTransactionDetails: true,
    loading: false,
    claiming: false
  }
}`,...(_=(Z=k.parameters)==null?void 0:Z.docs)==null?void 0:_.source}}};var ee,te,ae;h.parameters={...h.parameters,docs:{...(ee=h.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title: 'High Yield Staking Pool',
    subtitle: 'Earn maximum rewards with our premium staking',
    currentAPY: '25.8',
    apyTrend: 5.2,
    stakingToken: {
      symbol: 'SUPA',
      balance: '1000',
      price: 50,
      decimals: 18
    },
    rewardToken: {
      symbol: 'REWARD',
      balance: '0',
      price: 25,
      decimals: 18
    },
    stakedAmount: '500',
    rewardsEarned: '125',
    poolInfo: {
      tvl: '2.8M',
      totalStaked: '1.2M',
      participants: '856'
    }
  }
}`,...(ae=(te=h.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var ne,se,re;T.parameters={...T.parameters,docs:{...(ne=T.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title: 'Staking with Cooldown',
    subtitle: 'Note: 7-day cooldown period for unstaking',
    cooldownPeriod: '7 days',
    unstakingPenalty: '2.5',
    cooldownEndTime: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
    showUnstakeTimer: true,
    additionalInfo: {
      lockPeriod: 'Flexible',
      compounding: 'Daily',
      totalStakers: '12,340',
      protocolFee: '0.5'
    }
  }
}`,...(re=(se=T.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var oe,le,ie;S.parameters={...S.parameters,docs:{...(oe=S.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    stakedAmount: '0',
    rewardsEarned: '0',
    title: 'Start Staking',
    subtitle: 'Begin earning rewards by staking your tokens'
  }
}`,...(ie=(le=S.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var de,ue,ce;A.parameters={...A.parameters,docs:{...(de=A.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    loading: true
  }
}`,...(ce=(ue=A.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};var me,ge,ke;E.parameters={...E.parameters,docs:{...(me=E.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    claiming: true,
    rewardsEarned: '5.25'
  }
}`,...(ke=(ge=E.parameters)==null?void 0:ge.docs)==null?void 0:ke.source}}};var ye,be,fe;F.parameters={...F.parameters,docs:{...(ye=F.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: () => ({
    components: {
      StakingInterface
    },
    template: \`
      <div class="space-y-6">
        <div class="text-center">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Interactive Staking Interface
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Try staking, unstaking, and claiming rewards
          </p>
        </div>

        <StakingInterface
          :staking-token="stakingToken"
          :reward-token="rewardToken"
          :current-apy="currentAPY"
          :staked-amount="stakedAmount"
          :rewards-earned="rewardsEarned"
          :loading="loading"
          :claiming="claiming"
          title="Interactive ETH Staking"
          subtitle="Full-featured staking with live updates"
          @stake="handleStake"
          @unstake="handleUnstake"
          @claim-rewards="handleClaimRewards"
        />

        <div v-if="lastAction" class="rounded-lg bg-gray-100 p-3 dark:bg-gray-800">
          <div class="text-sm font-medium text-gray-700 dark:text-gray-300">Last Action:</div>
          <pre class="mt-1 text-xs text-gray-600 dark:text-gray-400">{{ lastAction }}</pre>
        </div>
      </div>
    \`,
    data() {
      return {
        stakingToken: {
          symbol: 'ETH',
          balance: '10.5',
          price: 2500,
          decimals: 18
        },
        rewardToken: {
          symbol: 'stETH',
          balance: '0',
          price: 2500,
          decimals: 18
        },
        currentAPY: '4.2',
        stakedAmount: '2.5',
        rewardsEarned: '0.125',
        loading: false,
        claiming: false,
        lastAction: null
      };
    },
    methods: {
      async handleStake(data) {
        this.loading = true;
        this.lastAction = \`Staking \${data.amount} \${data.token.symbol}...\`;
        setTimeout(() => {
          const newStaked = parseFloat(this.stakedAmount) + parseFloat(data.amount);
          this.stakedAmount = newStaked.toString();
          this.stakingToken.balance = (parseFloat(this.stakingToken.balance) - parseFloat(data.amount)).toString();
          this.loading = false;
          this.lastAction = \`Successfully staked \${data.amount} \${data.token.symbol}!\`;
        }, 3000);
      },
      async handleUnstake(data) {
        this.loading = true;
        this.lastAction = \`Unstaking \${data.amount} \${data.token.symbol}...\`;
        setTimeout(() => {
          const newStaked = Math.max(0, parseFloat(this.stakedAmount) - parseFloat(data.amount));
          this.stakedAmount = newStaked.toString();
          this.stakingToken.balance = (parseFloat(this.stakingToken.balance) + parseFloat(data.amount)).toString();
          this.loading = false;
          this.lastAction = \`Successfully unstaked \${data.amount} \${data.token.symbol}!\`;
        }, 3000);
      },
      async handleClaimRewards(data) {
        this.claiming = true;
        this.lastAction = \`Claiming \${data.amount} \${data.token.symbol} rewards...\`;
        setTimeout(() => {
          this.rewardToken.balance = (parseFloat(this.rewardToken.balance) + parseFloat(this.rewardsEarned)).toString();
          this.rewardsEarned = '0';
          this.claiming = false;
          this.lastAction = \`Successfully claimed \${data.amount} \${data.token.symbol} rewards!\`;
        }, 2500);
      }
    }
  })
}`,...(fe=(be=F.parameters)==null?void 0:be.docs)==null?void 0:fe.source}}};var xe,we,ve;P.parameters={...P.parameters,docs:{...(xe=P.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  render: () => ({
    components: {
      StakingInterface
    },
    template: \`
      <div class="dark">
        <div class="min-h-screen bg-gray-900 p-8">
          <StakingInterface
            :staking-token="{
              symbol: 'ETH',
              balance: '10.5',
              price: 2500,
              decimals: 18
            }"
            :reward-token="{
              symbol: 'stETH',
              balance: '0',
              price: 2500,
              decimals: 18
            }"
            current-apy="4.2"
            staked-amount="2.5"
            rewards-earned="0.125"
            title="🌙 Night Mode Staking"
            subtitle="Beautiful dark theme staking interface"
            :show-auto-compound="true"
          />
        </div>
      </div>
    \`
  })
}`,...(ve=(we=P.parameters)==null?void 0:we.docs)==null?void 0:ve.source}}};const ta=["Default","HighAPY","WithCooldown","NoPosition","Loading","Claiming","Interactive","DarkMode"];export{E as Claiming,P as DarkMode,k as Default,h as HighAPY,F as Interactive,A as Loading,S as NoPosition,T as WithCooldown,ta as __namedExportsOrder,ea as default};
