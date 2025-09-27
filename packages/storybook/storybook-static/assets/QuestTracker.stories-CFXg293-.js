import{r as O,c as u,b as a,f as e,w as R,s as W,u as U,n as g,t as r,d as c,F as y,g as x,h as n,p as C}from"./vue.esm-bundler-DxM0YtBV.js";const z={class:"bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"},J={class:"p-6 border-b border-gray-200 dark:border-gray-700"},Z={class:"flex items-center justify-between mb-4"},G={class:"flex items-center gap-3"},I=["disabled"],K={class:"grid grid-cols-1 md:grid-cols-4 gap-4"},Y={class:"p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg"},q={class:"text-xl font-bold text-blue-800 dark:text-blue-200"},ee={class:"p-3 bg-green-50 dark:bg-green-900/20 rounded-lg"},te={class:"text-xl font-bold text-green-800 dark:text-green-200"},se={class:"p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg"},re={class:"text-xl font-bold text-purple-800 dark:text-purple-200"},ae={class:"p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg"},ne={class:"text-xl font-bold text-yellow-800 dark:text-yellow-200"},oe={class:"p-6"},ie={class:"space-y-6"},le={key:0},de={class:"flex items-center justify-between mb-4"},ce={class:"text-sm text-gray-500 dark:text-gray-400"},pe={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},ue={class:"flex items-start justify-between mb-3"},ge={class:"flex-1"},me={class:"font-medium text-gray-900 dark:text-white mb-1"},ye={class:"text-sm text-gray-600 dark:text-gray-300"},xe={class:"text-2xl ml-3"},ve={class:"mb-3"},ke={class:"flex items-center justify-between text-sm mb-1"},fe={class:"font-medium text-gray-900 dark:text-white"},he={class:"w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2"},be={class:"flex items-center justify-between"},we={class:"flex items-center gap-2 text-sm"},_e={class:"text-yellow-600 dark:text-yellow-400"},Ce={key:0,class:"text-blue-600 dark:text-blue-400"},Se=["onClick"],De={key:1,class:"text-xs text-green-600 dark:text-green-400 font-medium"},Te={key:1},Fe={class:"space-y-4"},Pe={class:"flex items-start gap-4"},Be={class:"text-3xl"},$e={class:"flex-1"},Ne={class:"flex items-center gap-2 mb-1"},Xe={class:"font-medium text-gray-900 dark:text-white"},je={class:"text-sm text-gray-600 dark:text-gray-300 mb-3"},Ee={key:0,class:"space-y-2 mb-3"},Me={key:1,class:"mb-3"},Qe={class:"flex items-center justify-between text-sm mb-1"},Ae={class:"font-medium text-gray-900 dark:text-white"},Ve={class:"w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2"},Le={class:"flex items-center justify-between"},He={class:"flex items-center gap-3 text-sm"},Oe={class:"text-yellow-600 dark:text-yellow-400"},Re={key:0,class:"text-purple-600 dark:text-purple-400"},We={key:1,class:"text-pink-600 dark:text-pink-400"},Ue=["onClick"],ze={key:1,class:"text-xs text-green-600 dark:text-green-400 font-medium"},Je={key:2},Ze={class:"space-y-4"},Ge={class:"flex items-start gap-4"},Ie={class:"text-3xl"},Ke={class:"flex-1"},Ye={class:"flex items-center gap-2 mb-1"},qe={class:"font-medium text-gray-900 dark:text-white"},et={class:"text-sm text-gray-600 dark:text-gray-300 mb-2"},tt={class:"text-xs text-yellow-600 dark:text-yellow-400 mb-3"},st={class:"flex items-center justify-between"},rt={class:"flex items-center gap-3 text-sm"},at={class:"text-yellow-600 dark:text-yellow-400"},nt={class:"text-sm font-medium text-gray-900 dark:text-white"},j={__name:"QuestTracker",props:{quests:{type:Array,default:()=>[]},userStats:{type:Object,default:()=>({totalXP:0,currentStreak:0,completedToday:0})},loading:{type:Boolean,default:!1}},emits:["claim-reward","refresh"],setup(f,{emit:ot}){const p=f,l=O(""),h=u(()=>l.value?p.quests.filter(o=>o.category===l.value):p.quests),E=u(()=>p.quests.filter(o=>o.status==="active").length),M=u(()=>p.userStats.completedToday||0),Q=u(()=>p.userStats.totalXP||0),A=u(()=>p.userStats.currentStreak||0),b=u(()=>p.quests.filter(o=>o.category==="special")),V=u(()=>{const o=new Date,s=new Date(o);s.setDate(s.getDate()+1),s.setHours(0,0,0,0);const t=s-o,i=Math.floor(t/(1e3*60*60)),d=Math.floor(t%(1e3*60*60)/(1e3*60));return`${i}h ${d}m`}),w=o=>{const s=o.progress/o.target*100;return s>=100?"bg-green-500":s>=75?"bg-yellow-500":"bg-blue-500"},L=o=>{const s={easy:"bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",medium:"bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",hard:"bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",legendary:"bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"};return s[o==null?void 0:o.toLowerCase()]||s.easy},H=o=>{const s=new Date,i=new Date(o)-s;if(i<=0)return"Expired";const d=Math.floor(i/(1e3*60*60*24)),_=Math.floor(i%(1e3*60*60*24)/(1e3*60*60));return d>0?`in ${d}d ${_}h`:`in ${_}h`};return(o,s)=>(n(),a("div",z,[e("div",J,[e("div",Z,[s[4]||(s[4]=e("div",null,[e("h2",{class:"text-2xl font-bold text-gray-900 dark:text-white"},"Quest Tracker"),e("p",{class:"text-gray-600 dark:text-gray-300 mt-1"},"Complete quests to earn rewards and unlock achievements")],-1)),e("div",G,[R(e("select",{"onUpdate:modelValue":s[0]||(s[0]=t=>l.value=t),class:"px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"},[...s[2]||(s[2]=[U('<option value="">All Categories</option><option value="daily">Daily</option><option value="weekly">Weekly</option><option value="achievement">Achievement</option><option value="special">Special</option>',5)])],512),[[W,l.value]]),e("button",{onClick:s[1]||(s[1]=t=>o.$emit("refresh")),disabled:f.loading,class:"p-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"},[(n(),a("svg",{class:g([f.loading?"animate-spin":"","w-4 h-4 text-gray-600 dark:text-gray-400"]),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[...s[3]||(s[3]=[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"},null,-1)])],2))],8,I)])]),e("div",K,[e("div",Y,[s[5]||(s[5]=e("div",{class:"text-sm text-blue-600 dark:text-blue-400 mb-1"},"Active Quests",-1)),e("div",q,r(E.value),1)]),e("div",ee,[s[6]||(s[6]=e("div",{class:"text-sm text-green-600 dark:text-green-400 mb-1"},"Completed Today",-1)),e("div",te,r(M.value),1)]),e("div",se,[s[7]||(s[7]=e("div",{class:"text-sm text-purple-600 dark:text-purple-400 mb-1"},"Total XP",-1)),e("div",re,r(Q.value.toLocaleString()),1)]),e("div",ae,[s[8]||(s[8]=e("div",{class:"text-sm text-yellow-600 dark:text-yellow-400 mb-1"},"Streak",-1)),e("div",ne,r(A.value)+" days",1)])])]),e("div",oe,[e("div",ie,[!l.value||l.value==="daily"?(n(),a("div",le,[e("div",de,[s[9]||(s[9]=e("h3",{class:"text-lg font-semibold text-gray-900 dark:text-white"},"Daily Quests",-1)),e("div",ce," Resets in "+r(V.value),1)]),e("div",pe,[(n(!0),a(y,null,x(h.value.filter(t=>t.category==="daily"),t=>(n(),a("div",{key:t.id,class:"border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow"},[e("div",ue,[e("div",ge,[e("h4",me,r(t.title),1),e("p",ye,r(t.description),1)]),e("div",xe,r(t.icon),1)]),e("div",ve,[e("div",ke,[s[10]||(s[10]=e("span",{class:"text-gray-600 dark:text-gray-300"},"Progress",-1)),e("span",fe,r(t.progress)+"/"+r(t.target),1)]),e("div",he,[e("div",{class:g([w(t),"h-2 rounded-full transition-all duration-300"]),style:C({width:`${Math.min(100,t.progress/t.target*100)}%`})},null,6)])]),e("div",be,[e("div",we,[e("span",_e,"⭐ "+r(t.rewards.xp)+" XP",1),t.rewards.tokens?(n(),a("span",Ce," 💎 "+r(t.rewards.tokens),1)):c("",!0)]),t.status==="completed"?(n(),a("button",{key:0,onClick:i=>o.$emit("claim-reward",t.id),class:"bg-green-600 hover:bg-green-700 text-white text-xs font-medium py-1 px-3 rounded transition-colors"}," Claim ",8,Se)):t.status==="claimed"?(n(),a("span",De," ✓ Claimed ")):c("",!0)])]))),128))])])):c("",!0),!l.value||l.value==="achievement"?(n(),a("div",Te,[s[12]||(s[12]=e("h3",{class:"text-lg font-semibold text-gray-900 dark:text-white mb-4"},"Achievement Quests",-1)),e("div",Fe,[(n(!0),a(y,null,x(h.value.filter(t=>t.category==="achievement"),t=>(n(),a("div",{key:t.id,class:"border border-gray-200 dark:border-gray-700 rounded-lg p-4"},[e("div",Pe,[e("div",Be,r(t.icon),1),e("div",$e,[e("div",Ne,[e("h4",Xe,r(t.title),1),e("span",{class:g(["px-2 py-1 text-xs font-medium rounded-full",L(t.difficulty)])},r(t.difficulty),3)]),e("p",je,r(t.description),1),t.steps?(n(),a("div",Ee,[(n(!0),a(y,null,x(t.steps,(i,d)=>(n(),a("div",{key:d,class:"flex items-center gap-3 text-sm"},[e("div",{class:g(["w-5 h-5 rounded-full flex items-center justify-center text-xs font-medium",i.completed?"bg-green-500 text-white":d===t.currentStep?"bg-blue-500 text-white":"bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-300"])},r(i.completed?"✓":d+1),3),e("span",{class:g([i.completed?"text-green-600 dark:text-green-400":d===t.currentStep?"text-blue-600 dark:text-blue-400":"text-gray-500 dark:text-gray-400"])},r(i.description),3)]))),128))])):(n(),a("div",Me,[e("div",Qe,[s[11]||(s[11]=e("span",{class:"text-gray-600 dark:text-gray-300"},"Progress",-1)),e("span",Ae,r(t.progress)+"/"+r(t.target),1)]),e("div",Ve,[e("div",{class:g([w(t),"h-2 rounded-full transition-all duration-300"]),style:C({width:`${Math.min(100,t.progress/t.target*100)}%`})},null,6)])])),e("div",Le,[e("div",He,[e("span",Oe,"⭐ "+r(t.rewards.xp)+" XP",1),t.rewards.achievement?(n(),a("span",Re," 🏆 "+r(t.rewards.achievement),1)):c("",!0),t.rewards.nft?(n(),a("span",We," 🖼️ NFT Reward ")):c("",!0)]),t.status==="completed"?(n(),a("button",{key:0,onClick:i=>o.$emit("claim-reward",t.id),class:"bg-purple-600 hover:bg-purple-700 text-white text-xs font-medium py-1 px-3 rounded transition-colors"}," Claim ",8,Ue)):t.status==="claimed"?(n(),a("span",ze," ✓ Completed ")):c("",!0)])])])]))),128))])])):c("",!0),b.value.length>0&&(!l.value||l.value==="special")?(n(),a("div",Je,[s[15]||(s[15]=e("h3",{class:"text-lg font-semibold text-gray-900 dark:text-white mb-4"},"Special Events",-1)),e("div",Ze,[(n(!0),a(y,null,x(b.value,t=>(n(),a("div",{key:t.id,class:"border-2 border-dashed border-yellow-300 dark:border-yellow-600 rounded-lg p-4 bg-yellow-50 dark:bg-yellow-900/20"},[e("div",Ge,[e("div",Ie,r(t.icon),1),e("div",Ke,[e("div",Ye,[e("h4",qe,r(t.title),1),s[13]||(s[13]=e("span",{class:"px-2 py-1 text-xs font-medium bg-yellow-200 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-200 rounded-full"}," Limited Time ",-1))]),e("p",et,r(t.description),1),e("div",tt," ⏰ Ends "+r(H(t.endTime)),1),e("div",st,[e("div",rt,[e("span",at,"⭐ "+r(t.rewards.xp)+" XP",1),s[14]||(s[14]=e("span",{class:"text-purple-600 dark:text-purple-400"},"🎁 Special Reward",-1))]),e("div",nt,r(t.progress)+"/"+r(t.target),1)])])])]))),128))])])):c("",!0)])])]))}};j.__docgenInfo={exportName:"default",displayName:"QuestTracker",description:"",tags:{},props:[{name:"quests",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"userStats",type:{name:"object"},defaultValue:{func:!1,value:`{
  totalXP: 0,
  currentStreak: 0,
  completedToday: 0
}`}},{name:"loading",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"refresh"},{name:"claim-reward"}],sourceFiles:["/Users/steve/Projects/tnp.web.supaweb3/packages/ui/src/components/gaming/QuestTracker.vue"]};const lt={title:"Gaming/QuestTracker",component:j,parameters:{layout:"centered",docs:{description:{component:"On-chain quest and achievement system with daily challenges, multi-step quests, and reward tracking."}}},decorators:[()=>({template:'<div class="min-w-[800px] max-w-[1000px]"><story /></div>'})],tags:["autodocs"]},m={args:{quests:[{id:"1",category:"daily",title:"Complete 5 Trades",description:"Execute 5 successful token swaps",icon:"💱",progress:3,target:5,status:"active",rewards:{xp:100,tokens:50}},{id:"2",category:"daily",title:"Stake Tokens",description:"Stake at least 100 tokens in any pool",icon:"🏦",progress:100,target:100,status:"completed",rewards:{xp:150,tokens:25}},{id:"3",category:"achievement",title:"DeFi Master",description:"Complete all DeFi-related activities",icon:"🏆",difficulty:"legendary",progress:2,target:5,currentStep:2,status:"active",steps:[{description:"Complete first swap",completed:!0},{description:"Provide liquidity",completed:!0},{description:"Stake in governance",completed:!1},{description:"Create a proposal",completed:!1},{description:"Earn 1000 in rewards",completed:!1}],rewards:{xp:1e3,achievement:"DeFi Master Badge",nft:!0}},{id:"4",category:"achievement",title:"NFT Collector",description:"Build an impressive NFT collection",icon:"🖼️",difficulty:"hard",progress:8,target:10,status:"active",rewards:{xp:500,achievement:"Collector Badge"}},{id:"5",category:"special",title:"Hacktober Challenge",description:"Complete special October development challenges",icon:"🎃",progress:1,target:3,status:"active",endTime:"2024-10-31T23:59:59Z",rewards:{xp:2e3,tokens:500}}],userStats:{totalXP:12500,currentStreak:15,completedToday:3}}},v={args:{...m.args,userStats:{totalXP:45750,currentStreak:42,completedToday:8},quests:[...m.args.quests,{id:"6",category:"daily",title:"Social Engagement",description:"Like and comment on 10 posts",icon:"👥",progress:10,target:10,status:"completed",rewards:{xp:75,tokens:10}},{id:"7",category:"weekly",title:"Trading Volume",description:"Trade $10,000 worth of tokens this week",icon:"📈",progress:7500,target:1e4,status:"active",rewards:{xp:500,tokens:200}}]}},k={args:{quests:[{id:"1",category:"daily",title:"First Swap",description:"Complete your first token swap",icon:"🔄",progress:0,target:1,status:"active",rewards:{xp:50,tokens:10}},{id:"2",category:"achievement",title:"Web3 Novice",description:"Learn the basics of Web3",icon:"📚",difficulty:"easy",progress:1,target:3,currentStep:1,status:"active",steps:[{description:"Connect your wallet",completed:!0},{description:"Complete first transaction",completed:!1},{description:"Join a community",completed:!1}],rewards:{xp:200,achievement:"Novice Badge"}}],userStats:{totalXP:50,currentStreak:1,completedToday:0}}};var S,D,T;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    quests: [{
      id: '1',
      category: 'daily',
      title: 'Complete 5 Trades',
      description: 'Execute 5 successful token swaps',
      icon: '💱',
      progress: 3,
      target: 5,
      status: 'active',
      rewards: {
        xp: 100,
        tokens: 50
      }
    }, {
      id: '2',
      category: 'daily',
      title: 'Stake Tokens',
      description: 'Stake at least 100 tokens in any pool',
      icon: '🏦',
      progress: 100,
      target: 100,
      status: 'completed',
      rewards: {
        xp: 150,
        tokens: 25
      }
    }, {
      id: '3',
      category: 'achievement',
      title: 'DeFi Master',
      description: 'Complete all DeFi-related activities',
      icon: '🏆',
      difficulty: 'legendary',
      progress: 2,
      target: 5,
      currentStep: 2,
      status: 'active',
      steps: [{
        description: 'Complete first swap',
        completed: true
      }, {
        description: 'Provide liquidity',
        completed: true
      }, {
        description: 'Stake in governance',
        completed: false
      }, {
        description: 'Create a proposal',
        completed: false
      }, {
        description: 'Earn 1000 in rewards',
        completed: false
      }],
      rewards: {
        xp: 1000,
        achievement: 'DeFi Master Badge',
        nft: true
      }
    }, {
      id: '4',
      category: 'achievement',
      title: 'NFT Collector',
      description: 'Build an impressive NFT collection',
      icon: '🖼️',
      difficulty: 'hard',
      progress: 8,
      target: 10,
      status: 'active',
      rewards: {
        xp: 500,
        achievement: 'Collector Badge'
      }
    }, {
      id: '5',
      category: 'special',
      title: 'Hacktober Challenge',
      description: 'Complete special October development challenges',
      icon: '🎃',
      progress: 1,
      target: 3,
      status: 'active',
      endTime: '2024-10-31T23:59:59Z',
      rewards: {
        xp: 2000,
        tokens: 500
      }
    }],
    userStats: {
      totalXP: 12500,
      currentStreak: 15,
      completedToday: 3
    }
  }
}`,...(T=(D=m.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var F,P,B;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    userStats: {
      totalXP: 45750,
      currentStreak: 42,
      completedToday: 8
    },
    quests: [...Default.args.quests, {
      id: '6',
      category: 'daily',
      title: 'Social Engagement',
      description: 'Like and comment on 10 posts',
      icon: '👥',
      progress: 10,
      target: 10,
      status: 'completed',
      rewards: {
        xp: 75,
        tokens: 10
      }
    }, {
      id: '7',
      category: 'weekly',
      title: 'Trading Volume',
      description: 'Trade $10,000 worth of tokens this week',
      icon: '📈',
      progress: 7500,
      target: 10000,
      status: 'active',
      rewards: {
        xp: 500,
        tokens: 200
      }
    }]
  }
}`,...(B=(P=v.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};var $,N,X;k.parameters={...k.parameters,docs:{...($=k.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    quests: [{
      id: '1',
      category: 'daily',
      title: 'First Swap',
      description: 'Complete your first token swap',
      icon: '🔄',
      progress: 0,
      target: 1,
      status: 'active',
      rewards: {
        xp: 50,
        tokens: 10
      }
    }, {
      id: '2',
      category: 'achievement',
      title: 'Web3 Novice',
      description: 'Learn the basics of Web3',
      icon: '📚',
      difficulty: 'easy',
      progress: 1,
      target: 3,
      currentStep: 1,
      status: 'active',
      steps: [{
        description: 'Connect your wallet',
        completed: true
      }, {
        description: 'Complete first transaction',
        completed: false
      }, {
        description: 'Join a community',
        completed: false
      }],
      rewards: {
        xp: 200,
        achievement: 'Novice Badge'
      }
    }],
    userStats: {
      totalXP: 50,
      currentStreak: 1,
      completedToday: 0
    }
  }
}`,...(X=(N=k.parameters)==null?void 0:N.docs)==null?void 0:X.source}}};const dt=["Default","HighActivity","Beginner"];export{k as Beginner,m as Default,v as HighActivity,dt as __namedExportsOrder,lt as default};
