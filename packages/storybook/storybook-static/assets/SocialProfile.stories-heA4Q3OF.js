import{b as o,f as e,d,t as s,n as O,F as v,g as x,h as r}from"./vue.esm-bundler-DxM0YtBV.js";const Z={class:"bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"},j={class:"relative"},M={class:"px-6 pb-6"},V={class:"flex items-end -mt-16 mb-4"},U={class:"relative"},H={class:"w-24 h-24 bg-white dark:bg-gray-800 rounded-full p-2"},L=["src","alt"],q={key:1,class:"w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl"},z={key:0,class:"absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center"},J={class:"ml-4 flex-1"},R={class:"flex items-center gap-2 mb-1"},I={class:"text-2xl font-bold text-gray-900 dark:text-white"},G={key:0,class:"px-2 py-1 text-sm font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 rounded-full"},K={class:"text-gray-600 dark:text-gray-300"},Q={key:0,class:"text-sm text-gray-500 dark:text-gray-400 mt-1"},X={class:"flex items-center gap-2"},Y={key:0,class:"mb-4"},_={class:"text-gray-700 dark:text-gray-300"},ee={class:"grid grid-cols-4 gap-4 mb-6"},te={class:"text-center"},ie={class:"text-xl font-bold text-gray-900 dark:text-white"},ne={class:"text-center"},se={class:"text-xl font-bold text-gray-900 dark:text-white"},oe={class:"text-center"},re={class:"text-xl font-bold text-gray-900 dark:text-white"},ae={class:"text-center"},le={class:"text-xl font-bold text-gray-900 dark:text-white"},de={key:1,class:"mb-6"},ce={class:"flex flex-wrap gap-2"},ue=["title"],me={class:"text-lg"},fe={class:"font-medium"},pe={key:2},ge={class:"space-y-3"},ye={class:"w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0"},ve={class:"text-white text-sm"},xe={class:"flex-1 min-w-0"},we={class:"text-sm text-gray-900 dark:text-white"},he={class:"text-xs text-gray-500 dark:text-gray-400 mt-1"},S={__name:"SocialProfile",props:{profile:{type:Object,required:!0},achievements:{type:Array,default:()=>[]},recentActivity:{type:Array,default:()=>[]},isOwnProfile:{type:Boolean,default:!1}},emits:["follow","share-profile","view-all-achievements","view-full-activity"],setup(t,{emit:be}){const W=a=>a?`${a.slice(0,6)}...${a.slice(-4)}`:"",$=a=>({achievement:"🏆",nft:"🖼️",trade:"💱",game:"🎮",social:"👥",transaction:"💸"})[a]||"📝",E=a=>{const i=new Date(a),c=new Date-i,n=Math.floor(c/6e4),g=Math.floor(c/36e5),y=Math.floor(c/864e5);return n<1?"Just now":n<60?`${n}m ago`:g<24?`${g}h ago`:y<7?`${y}d ago`:i.toLocaleDateString()};return(a,i)=>{var p,c;return r(),o("div",Z,[e("div",j,[i[12]||(i[12]=e("div",{class:"h-32 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"},null,-1)),e("div",M,[e("div",V,[e("div",U,[e("div",H,[t.profile.avatar?(r(),o("img",{key:0,src:t.profile.avatar,alt:t.profile.username,class:"w-full h-full rounded-full object-cover"},null,8,L)):(r(),o("div",q,s(((c=(p=t.profile.username)==null?void 0:p.charAt(0))==null?void 0:c.toUpperCase())||"?"),1))]),t.profile.verified?(r(),o("div",z,[...i[4]||(i[4]=[e("svg",{class:"w-4 h-4 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})],-1)])])):d("",!0)]),e("div",J,[e("div",R,[e("h1",I,s(t.profile.displayName||t.profile.username),1),t.profile.level?(r(),o("span",G," Level "+s(t.profile.level),1)):d("",!0)]),e("div",K," @"+s(t.profile.username),1),t.profile.walletAddress?(r(),o("div",Q,s(W(t.profile.walletAddress)),1)):d("",!0)]),e("div",X,[t.isOwnProfile?d("",!0):(r(),o("button",{key:0,onClick:i[0]||(i[0]=n=>a.$emit("follow",t.profile.id)),class:O(["px-4 py-2 rounded-lg font-medium transition-colors",t.profile.isFollowing?"bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600":"bg-blue-600 text-white hover:bg-blue-700"])},s(t.profile.isFollowing?"Following":"Follow"),3)),e("button",{onClick:i[1]||(i[1]=n=>a.$emit("share-profile",t.profile)),class:"p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 rounded-lg transition-colors"},[...i[5]||(i[5]=[e("svg",{class:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"})],-1)])])])]),t.profile.bio?(r(),o("div",Y,[e("p",_,s(t.profile.bio),1)])):d("",!0),e("div",ee,[e("div",te,[e("div",ie,s(t.profile.stats.followers.toLocaleString()),1),i[6]||(i[6]=e("div",{class:"text-sm text-gray-500 dark:text-gray-400"},"Followers",-1))]),e("div",ne,[e("div",se,s(t.profile.stats.following.toLocaleString()),1),i[7]||(i[7]=e("div",{class:"text-sm text-gray-500 dark:text-gray-400"},"Following",-1))]),e("div",oe,[e("div",re,s(t.profile.stats.achievements),1),i[8]||(i[8]=e("div",{class:"text-sm text-gray-500 dark:text-gray-400"},"Achievements",-1))]),e("div",ae,[e("div",le,s(t.profile.stats.reputation.toLocaleString()),1),i[9]||(i[9]=e("div",{class:"text-sm text-gray-500 dark:text-gray-400"},"Reputation",-1))])]),t.achievements&&t.achievements.length>0?(r(),o("div",de,[i[10]||(i[10]=e("h3",{class:"text-lg font-semibold text-gray-900 dark:text-white mb-3"},"Recent Achievements",-1)),e("div",ce,[(r(!0),o(v,null,x(t.achievements.slice(0,6),n=>(r(),o("div",{key:n.id,class:"flex items-center gap-2 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200 px-3 py-2 rounded-lg text-sm",title:n.description},[e("span",me,s(n.icon),1),e("span",fe,s(n.name),1)],8,ue))),128))]),t.achievements.length>6?(r(),o("button",{key:0,onClick:i[2]||(i[2]=n=>a.$emit("view-all-achievements")),class:"text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mt-2"}," View all "+s(t.achievements.length)+" achievements ",1)):d("",!0)])):d("",!0),t.recentActivity&&t.recentActivity.length>0?(r(),o("div",pe,[i[11]||(i[11]=e("h3",{class:"text-lg font-semibold text-gray-900 dark:text-white mb-3"},"Recent Activity",-1)),e("div",ge,[(r(!0),o(v,null,x(t.recentActivity.slice(0,5),n=>(r(),o("div",{key:n.id,class:"flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg"},[e("div",ye,[e("span",ve,s($(n.type)),1)]),e("div",xe,[e("p",we,s(n.description),1),e("p",he,s(E(n.timestamp)),1)])]))),128))]),e("button",{onClick:i[3]||(i[3]=n=>a.$emit("view-full-activity")),class:"text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mt-3"}," View full activity ")])):d("",!0)])])])}}};S.__docgenInfo={exportName:"default",displayName:"SocialProfile",description:"",tags:{},props:[{name:"profile",type:{name:"object"},required:!0},{name:"achievements",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"recentActivity",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"isOwnProfile",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"follow"},{name:"share-profile"},{name:"view-all-achievements"},{name:"view-full-activity"}],sourceFiles:["/Users/steve/Projects/tnp.web.supaweb3/packages/ui/src/components/social/SocialProfile.vue"]};const De={title:"Social/SocialProfile",component:S,parameters:{layout:"centered",docs:{description:{component:"Web3 social profile component featuring achievements, activity feeds, and reputation tracking."}}},decorators:[()=>({template:'<div class="min-w-[600px] max-w-[800px]"><story /></div>'})],tags:["autodocs"]},l={args:{profile:{id:"user123",username:"web3builder",displayName:"Web3 Builder",bio:"Building the future of decentralized web. Passionate about DeFi, NFTs, and blockchain technology.",avatar:"https://via.placeholder.com/150x150?text=W3B",verified:!0,level:42,walletAddress:"0x742d35cc6394c3f6cbbe21c6f53e85c40c614c5e",isFollowing:!1,stats:{followers:1250,following:387,achievements:23,reputation:8540}},achievements:[{id:"1",name:"Early Adopter",description:"Joined the platform in the first month",icon:"🚀"},{id:"2",name:"DeFi Expert",description:"Completed 100+ DeFi transactions",icon:"💰"},{id:"3",name:"NFT Collector",description:"Owns 50+ unique NFTs",icon:"🖼️"},{id:"4",name:"Community Builder",description:"Helped 1000+ users",icon:"👥"},{id:"5",name:"Governance Participant",description:"Voted on 25+ proposals",icon:"🗳️"},{id:"6",name:"Bug Hunter",description:"Reported critical security issues",icon:"🐛"},{id:"7",name:"Whale Tracker",description:"Portfolio value over $100k",icon:"🐋"}],recentActivity:[{id:"1",type:"achievement",description:'Unlocked "DeFi Expert" achievement',timestamp:"2024-09-28T14:30:00Z"},{id:"2",type:"nft",description:"Purchased Bored Ape #1234",timestamp:"2024-09-27T16:45:00Z"},{id:"3",type:"trade",description:"Swapped 5 ETH for 12,500 USDC",timestamp:"2024-09-26T11:20:00Z"},{id:"4",type:"social",description:"Followed @cryptowhale",timestamp:"2024-09-25T09:15:00Z"},{id:"5",type:"game",description:"Completed daily quest in Axie Infinity",timestamp:"2024-09-24T18:30:00Z"}],isOwnProfile:!1}},u={args:{...l.args,profile:{...l.args.profile,username:"myusername",displayName:"My Profile",isFollowing:!1},isOwnProfile:!0}},m={args:{...l.args,profile:{...l.args.profile,isFollowing:!0}}},f={args:{...l.args,profile:{id:"newuser",username:"cryptonewbie",displayName:"Crypto Newbie",bio:"Just getting started in Web3!",avatar:null,verified:!1,level:1,walletAddress:"0x1234567890abcdef1234567890abcdef12345678",isFollowing:!1,stats:{followers:5,following:12,achievements:1,reputation:10}},achievements:[{id:"1",name:"Welcome",description:"Created your first Web3 profile",icon:"👋"}],recentActivity:[{id:"1",type:"social",description:"Created Web3 profile",timestamp:"2024-09-28T10:00:00Z"}]}};var w,h,b;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    profile: {
      id: 'user123',
      username: 'web3builder',
      displayName: 'Web3 Builder',
      bio: 'Building the future of decentralized web. Passionate about DeFi, NFTs, and blockchain technology.',
      avatar: 'https://via.placeholder.com/150x150?text=W3B',
      verified: true,
      level: 42,
      walletAddress: '0x742d35cc6394c3f6cbbe21c6f53e85c40c614c5e',
      isFollowing: false,
      stats: {
        followers: 1250,
        following: 387,
        achievements: 23,
        reputation: 8540
      }
    },
    achievements: [{
      id: '1',
      name: 'Early Adopter',
      description: 'Joined the platform in the first month',
      icon: '🚀'
    }, {
      id: '2',
      name: 'DeFi Expert',
      description: 'Completed 100+ DeFi transactions',
      icon: '💰'
    }, {
      id: '3',
      name: 'NFT Collector',
      description: 'Owns 50+ unique NFTs',
      icon: '🖼️'
    }, {
      id: '4',
      name: 'Community Builder',
      description: 'Helped 1000+ users',
      icon: '👥'
    }, {
      id: '5',
      name: 'Governance Participant',
      description: 'Voted on 25+ proposals',
      icon: '🗳️'
    }, {
      id: '6',
      name: 'Bug Hunter',
      description: 'Reported critical security issues',
      icon: '🐛'
    }, {
      id: '7',
      name: 'Whale Tracker',
      description: 'Portfolio value over $100k',
      icon: '🐋'
    }],
    recentActivity: [{
      id: '1',
      type: 'achievement',
      description: 'Unlocked "DeFi Expert" achievement',
      timestamp: '2024-09-28T14:30:00Z'
    }, {
      id: '2',
      type: 'nft',
      description: 'Purchased Bored Ape #1234',
      timestamp: '2024-09-27T16:45:00Z'
    }, {
      id: '3',
      type: 'trade',
      description: 'Swapped 5 ETH for 12,500 USDC',
      timestamp: '2024-09-26T11:20:00Z'
    }, {
      id: '4',
      type: 'social',
      description: 'Followed @cryptowhale',
      timestamp: '2024-09-25T09:15:00Z'
    }, {
      id: '5',
      type: 'game',
      description: 'Completed daily quest in Axie Infinity',
      timestamp: '2024-09-24T18:30:00Z'
    }],
    isOwnProfile: false
  }
}`,...(b=(h=l.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var k,D,F;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    profile: {
      ...Default.args.profile,
      username: 'myusername',
      displayName: 'My Profile',
      isFollowing: false
    },
    isOwnProfile: true
  }
}`,...(F=(D=u.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var C,A,P;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    profile: {
      ...Default.args.profile,
      isFollowing: true
    }
  }
}`,...(P=(A=m.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var B,T,N;f.parameters={...f.parameters,docs:{...(B=f.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    profile: {
      id: 'newuser',
      username: 'cryptonewbie',
      displayName: 'Crypto Newbie',
      bio: 'Just getting started in Web3!',
      avatar: null,
      verified: false,
      level: 1,
      walletAddress: '0x1234567890abcdef1234567890abcdef12345678',
      isFollowing: false,
      stats: {
        followers: 5,
        following: 12,
        achievements: 1,
        reputation: 10
      }
    },
    achievements: [{
      id: '1',
      name: 'Welcome',
      description: 'Created your first Web3 profile',
      icon: '👋'
    }],
    recentActivity: [{
      id: '1',
      type: 'social',
      description: 'Created Web3 profile',
      timestamp: '2024-09-28T10:00:00Z'
    }]
  }
}`,...(N=(T=f.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};const Fe=["Default","OwnProfile","FollowingProfile","NewUser"];export{l as Default,m as FollowingProfile,f as NewUser,u as OwnProfile,Fe as __namedExportsOrder,De as default};
