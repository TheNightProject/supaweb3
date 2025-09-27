import{r as w,c as l,b as n,f as e,d as h,t as a,k as X,w as T,v as Y,s as D,u as ee,F as M,g as $,h as o,n as f,p as te}from"./vue.esm-bundler-DxM0YtBV.js";const re={class:"bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"},se={class:"p-6 border-b border-gray-200 dark:border-gray-700"},ae={class:"flex items-center justify-between mb-4"},ne={class:"text-2xl font-bold text-gray-900 dark:text-white"},oe={key:0,class:"text-gray-600 dark:text-gray-300 mt-1"},ie={class:"grid grid-cols-1 md:grid-cols-4 gap-4"},le={class:"p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg"},de={class:"text-xl font-bold text-blue-800 dark:text-blue-200"},ce={class:"p-3 bg-green-50 dark:bg-green-900/20 rounded-lg"},ue={class:"text-xl font-bold text-green-800 dark:text-green-200"},ge={class:"p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg"},be={class:"text-xl font-bold text-purple-800 dark:text-purple-200"},me={class:"p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg"},ve={class:"text-xl font-bold text-yellow-800 dark:text-yellow-200"},pe={class:"p-6 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900"},ye={class:"flex flex-wrap items-center gap-4"},xe={class:"flex-1 min-w-[200px]"},he={class:"p-6"},fe={key:0,class:"text-center py-12"},ke={class:"mt-1 text-sm text-gray-500 dark:text-gray-400"},we={key:1,class:"space-y-4"},Pe={class:"flex items-start justify-between"},Ae={class:"flex items-start gap-4 flex-1"},_e={class:"w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold"},Te={class:"flex-1"},Ce={class:"flex items-center gap-2 mb-1"},Se={class:"font-semibold text-gray-900 dark:text-white"},De={class:"text-sm text-gray-600 dark:text-gray-300 mb-2"},Me={class:"flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400"},$e={key:0},Be={key:0,class:"mt-3"},Ne={class:"flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-1"},Ve={class:"w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5"},Ze={key:1,class:"mt-2 flex items-center gap-2"},je={class:"flex items-center gap-1"},He={class:"flex items-center gap-2 ml-4"},Ue=["onClick","title"],Le={key:0,class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},ze={key:1,class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},Ee=["onClick"],Fe=["onClick"],Ie={key:2,class:"flex items-center justify-between mt-6"},qe={class:"text-sm text-gray-500 dark:text-gray-400"},Oe={class:"flex items-center gap-2"},We=["disabled"],Ge={class:"px-3 py-1 text-sm text-gray-900 dark:text-white"},Qe=["disabled"],U={__name:"PriceAlert",props:{title:{type:String,default:"Price Alerts"},subtitle:{type:String,default:""},alerts:{type:Array,default:()=>[]},showPagination:{type:Boolean,default:!0},itemsPerPage:{type:Number,default:10}},emits:["create-alert","edit-alert","delete-alert","toggle-alert"],setup(v,{emit:Re}){const d=v,u=w(""),g=w(""),b=w(""),i=w(1),p=l(()=>{let r=d.alerts;if(u.value){const t=u.value.toLowerCase();r=r.filter(s=>s.asset.name.toLowerCase().includes(t)||s.asset.symbol.toLowerCase().includes(t))}return g.value&&(r=r.filter(t=>t.status===g.value)),b.value&&(r=r.filter(t=>t.type===b.value)),r.sort((t,s)=>{const y={triggered:3,active:2,paused:1},x=y[t.status]||0,c=y[s.status]||0;return x!==c?c-x:new Date(s.createdAt)-new Date(t.createdAt)})}),k=l(()=>Math.ceil(p.value.length/d.itemsPerPage)),A=l(()=>(i.value-1)*d.itemsPerPage),C=l(()=>A.value+d.itemsPerPage),L=l(()=>p.value.slice(A.value,C.value)),z=l(()=>d.alerts.filter(r=>r.status==="active").length),E=l(()=>{const r=new Date().toDateString();return d.alerts.filter(t=>t.lastTriggered&&new Date(t.lastTriggered).toDateString()===r).length}),F=l(()=>new Set(d.alerts.map(t=>t.asset.symbol)).size),I=l(()=>d.alerts.length),q=r=>{switch(r){case"active":return"bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";case"triggered":return"bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";case"paused":return"bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";default:return"bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"}},O=r=>{switch(r){case"above":return"bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";case"below":return"bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";case"change":return"bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";case"volume":return"bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";default:return"bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"}},W=r=>({above:"Above",below:"Below",change:"Change",volume:"Volume"})[r]||r,G=r=>{var t,s;switch(r.type){case"above":return`Alert when price goes above $${((t=r.targetPrice)==null?void 0:t.toFixed(4))||"0.0000"}`;case"below":return`Alert when price goes below $${((s=r.targetPrice)==null?void 0:s.toFixed(4))||"0.0000"}`;case"change":return`Alert when price changes by ${r.changePercent||0}% in ${r.timeframe||"24h"}`;case"volume":return`Alert when volume exceeds ${r.volumeThreshold||"N/A"}`;default:return"Price alert"}},_=r=>{if(r.type==="above"&&r.currentPrice&&r.basePrice&&r.targetPrice){const t=r.targetPrice-r.basePrice;return t===0?0:(r.currentPrice-r.basePrice)/t*100}else if(r.type==="below"&&r.currentPrice&&r.basePrice&&r.targetPrice){const t=r.basePrice-r.targetPrice;return t===0?0:(r.basePrice-r.currentPrice)/t*100}return 0},Q=r=>{const t=_(r);return t>=80?"bg-red-500":t>=60?"bg-yellow-500":"bg-blue-500"},R=()=>{u.value="",g.value="",b.value="",i.value=1},J=()=>{i.value<k.value&&i.value++},K=()=>{i.value>1&&i.value--},S=r=>new Date(r).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"});return(r,t)=>(o(),n("div",re,[e("div",se,[e("div",ae,[e("div",null,[e("h2",ne,a(v.title||"Price Alerts"),1),v.subtitle?(o(),n("p",oe,a(v.subtitle),1)):h("",!0)]),e("button",{onClick:t[0]||(t[0]=s=>r.$emit("create-alert")),class:"bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center gap-2"},[...t[4]||(t[4]=[e("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 6v6m0 0v6m0-6h6m-6 0H6"})],-1),X(" New Alert ",-1)])])]),e("div",ie,[e("div",le,[t[5]||(t[5]=e("div",{class:"text-sm text-blue-600 dark:text-blue-400 mb-1"},"Active Alerts",-1)),e("div",de,a(z.value),1)]),e("div",ce,[t[6]||(t[6]=e("div",{class:"text-sm text-green-600 dark:text-green-400 mb-1"},"Triggered Today",-1)),e("div",ue,a(E.value),1)]),e("div",ge,[t[7]||(t[7]=e("div",{class:"text-sm text-purple-600 dark:text-purple-400 mb-1"},"Watching",-1)),e("div",be,a(F.value)+" Assets ",1)]),e("div",me,[t[8]||(t[8]=e("div",{class:"text-sm text-yellow-600 dark:text-yellow-400 mb-1"},"Price Targets",-1)),e("div",ve,a(I.value),1)])])]),e("div",pe,[e("div",ye,[e("div",xe,[T(e("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=s=>u.value=s),placeholder:"Search alerts by asset name or symbol...",class:"w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm"},null,512),[[Y,u.value]])]),T(e("select",{"onUpdate:modelValue":t[2]||(t[2]=s=>g.value=s),class:"px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"},[...t[9]||(t[9]=[e("option",{value:""},"All Status",-1),e("option",{value:"active"},"Active",-1),e("option",{value:"triggered"},"Triggered",-1),e("option",{value:"paused"},"Paused",-1)])],512),[[D,g.value]]),T(e("select",{"onUpdate:modelValue":t[3]||(t[3]=s=>b.value=s),class:"px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"},[...t[10]||(t[10]=[ee('<option value="">All Types</option><option value="above">Price Above</option><option value="below">Price Below</option><option value="change">Price Change</option><option value="volume">Volume</option>',5)])],512),[[D,b.value]]),e("button",{onClick:R,class:"text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"}," Clear ")])]),e("div",he,[p.value.length===0?(o(),n("div",fe,[t[11]||(t[11]=e("svg",{class:"mx-auto h-12 w-12 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 17h5l-5 5v-5zM12 17H7a2 2 0 01-2-2V5a2 2 0 012-2h10a2 2 0 012 2v4M16 6l-3.5 6L14 9l-2-3z"})],-1)),t[12]||(t[12]=e("h3",{class:"mt-2 text-sm font-medium text-gray-900 dark:text-white"},"No alerts found",-1)),e("p",ke,a(u.value||g.value||b.value?"Try adjusting your filters":"Create your first price alert to get started"),1)])):(o(),n("div",we,[(o(!0),n(M,null,$(L.value,s=>{var y,x;return o(),n("div",{key:s.id,class:f(["p-4 border rounded-lg transition-all duration-200",s.status==="triggered"?"border-green-300 bg-green-50 dark:border-green-700 dark:bg-green-900/20":s.status==="active"?"border-blue-300 bg-blue-50 dark:border-blue-700 dark:bg-blue-900/20":"border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-900"])},[e("div",Pe,[e("div",Ae,[e("div",_e,a(s.asset.symbol.charAt(0)),1),e("div",Te,[e("div",Ce,[e("h3",Se,a(s.asset.name)+" ("+a(s.asset.symbol)+") ",1),e("span",{class:f(["px-2 py-1 text-xs font-medium rounded-full",q(s.status)])},a(s.status),3),e("span",{class:f(["px-2 py-1 text-xs font-medium rounded-full",O(s.type)])},a(W(s.type)),3)]),e("div",De,a(G(s)),1),e("div",Me,[e("div",null," Current: $"+a(((y=s.currentPrice)==null?void 0:y.toFixed(4))||"0.0000"),1),e("div",null," Target: $"+a(((x=s.targetPrice)==null?void 0:x.toFixed(4))||"0.0000"),1),s.lastTriggered?(o(),n("div",$e," Last triggered: "+a(S(s.lastTriggered)),1)):h("",!0),e("div",null," Created: "+a(S(s.createdAt)),1)]),s.status==="active"?(o(),n("div",Be,[e("div",Ne,[t[13]||(t[13]=e("span",null,"Progress to target",-1)),e("span",null,a(_(s))+"%",1)]),e("div",Ve,[e("div",{class:f([Q(s),"h-1.5 rounded-full transition-all duration-500"]),style:te({width:`${Math.min(100,Math.abs(_(s)))}%`})},null,6)])])):h("",!0),s.notifications&&s.notifications.length>0?(o(),n("div",Ze,[t[14]||(t[14]=e("span",{class:"text-xs text-gray-500 dark:text-gray-400"},"Notify via:",-1)),e("div",je,[(o(!0),n(M,null,$(s.notifications,c=>(o(),n("span",{key:c,class:"px-2 py-1 text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"},a(c),1))),128))])])):h("",!0)])]),e("div",He,[e("button",{onClick:c=>r.$emit("toggle-alert",s.id),class:f(["p-2 rounded-lg transition-colors text-sm",s.status==="active"?"text-yellow-600 hover:bg-yellow-100 dark:text-yellow-400 dark:hover:bg-yellow-900/20":"text-green-600 hover:bg-green-100 dark:text-green-400 dark:hover:bg-green-900/20"]),title:s.status==="active"?"Pause Alert":"Resume Alert"},[s.status==="active"?(o(),n("svg",Le,[...t[15]||(t[15]=[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1)])])):(o(),n("svg",ze,[...t[16]||(t[16]=[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m6-10a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1)])]))],10,Ue),e("button",{onClick:c=>r.$emit("edit-alert",s),class:"p-2 text-blue-600 hover:bg-blue-100 dark:text-blue-400 dark:hover:bg-blue-900/20 rounded-lg transition-colors",title:"Edit Alert"},[...t[17]||(t[17]=[e("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})],-1)])],8,Ee),e("button",{onClick:c=>r.$emit("delete-alert",s.id),class:"p-2 text-red-600 hover:bg-red-100 dark:text-red-400 dark:hover:bg-red-900/20 rounded-lg transition-colors",title:"Delete Alert"},[...t[18]||(t[18]=[e("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})],-1)])],8,Fe)])])],2)}),128))])),v.showPagination&&k.value>1?(o(),n("div",Ie,[e("div",qe," Showing "+a(A.value+1)+"-"+a(Math.min(C.value,p.value.length))+" of "+a(p.value.length)+" alerts ",1),e("div",Oe,[e("button",{onClick:K,disabled:i.value===1,class:"px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"}," Previous ",8,We),e("span",Ge,a(i.value)+" / "+a(k.value),1),e("button",{onClick:J,disabled:i.value===k.value,class:"px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"}," Next ",8,Qe)])])):h("",!0)])]))}};U.__docgenInfo={exportName:"default",displayName:"PriceAlert",description:"",tags:{},props:[{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"'Price Alerts'"}},{name:"subtitle",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"alerts",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"showPagination",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"itemsPerPage",type:{name:"number"},defaultValue:{func:!1,value:"10"}}],events:[{name:"create-alert"},{name:"toggle-alert"},{name:"edit-alert"},{name:"delete-alert"}],sourceFiles:["/Users/steve/Projects/tnp.web.supaweb3/packages/ui/src/components/notifications/PriceAlert.vue"]};const Ke={title:"Notifications/PriceAlert",component:U,parameters:{layout:"centered",docs:{description:{component:"Comprehensive price alert management system for tracking token and NFT price movements with customizable notifications."}}},decorators:[()=>({template:'<div class="min-w-[900px] max-w-[1200px]"><story /></div>'})],tags:["autodocs"]},m={args:{title:"Price Alerts",subtitle:"Monitor price movements and get notified when targets are reached",alerts:[{id:"1",asset:{symbol:"ETH",name:"Ethereum"},type:"above",status:"active",currentPrice:2485.5,targetPrice:2600,basePrice:2400,createdAt:"2024-09-25T10:00:00Z",notifications:["email","push"]},{id:"2",asset:{symbol:"BTC",name:"Bitcoin"},type:"below",status:"triggered",currentPrice:48500,targetPrice:5e4,basePrice:52e3,createdAt:"2024-09-20T14:30:00Z",lastTriggered:"2024-09-28T09:15:00Z",notifications:["email","sms","discord"]},{id:"3",asset:{symbol:"UNI",name:"Uniswap"},type:"change",status:"active",currentPrice:6.75,changePercent:15,timeframe:"24h",createdAt:"2024-09-22T16:45:00Z",notifications:["push"]},{id:"4",asset:{symbol:"SUPA",name:"SupaWeb3 Token"},type:"above",status:"paused",currentPrice:.85,targetPrice:1,basePrice:.75,createdAt:"2024-09-18T11:20:00Z",notifications:["email"]}]}},P={args:{...m.args,title:"Price Alerts - High Activity",alerts:[...m.args.alerts,{id:"5",asset:{symbol:"DOGE",name:"Dogecoin"},type:"above",status:"triggered",currentPrice:.085,targetPrice:.08,basePrice:.075,createdAt:"2024-09-28T08:00:00Z",lastTriggered:"2024-09-28T15:30:00Z",notifications:["email","push"]},{id:"6",asset:{symbol:"MATIC",name:"Polygon"},type:"below",status:"active",currentPrice:.72,targetPrice:.7,basePrice:.85,createdAt:"2024-09-26T12:15:00Z",notifications:["discord"]}]}};var B,N,V;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    title: 'Price Alerts',
    subtitle: 'Monitor price movements and get notified when targets are reached',
    alerts: [{
      id: '1',
      asset: {
        symbol: 'ETH',
        name: 'Ethereum'
      },
      type: 'above',
      status: 'active',
      currentPrice: 2485.50,
      targetPrice: 2600.00,
      basePrice: 2400.00,
      createdAt: '2024-09-25T10:00:00Z',
      notifications: ['email', 'push']
    }, {
      id: '2',
      asset: {
        symbol: 'BTC',
        name: 'Bitcoin'
      },
      type: 'below',
      status: 'triggered',
      currentPrice: 48500.00,
      targetPrice: 50000.00,
      basePrice: 52000.00,
      createdAt: '2024-09-20T14:30:00Z',
      lastTriggered: '2024-09-28T09:15:00Z',
      notifications: ['email', 'sms', 'discord']
    }, {
      id: '3',
      asset: {
        symbol: 'UNI',
        name: 'Uniswap'
      },
      type: 'change',
      status: 'active',
      currentPrice: 6.75,
      changePercent: 15,
      timeframe: '24h',
      createdAt: '2024-09-22T16:45:00Z',
      notifications: ['push']
    }, {
      id: '4',
      asset: {
        symbol: 'SUPA',
        name: 'SupaWeb3 Token'
      },
      type: 'above',
      status: 'paused',
      currentPrice: 0.85,
      targetPrice: 1.00,
      basePrice: 0.75,
      createdAt: '2024-09-18T11:20:00Z',
      notifications: ['email']
    }]
  }
}`,...(V=(N=m.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var Z,j,H;P.parameters={...P.parameters,docs:{...(Z=P.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title: 'Price Alerts - High Activity',
    alerts: [...Default.args.alerts, {
      id: '5',
      asset: {
        symbol: 'DOGE',
        name: 'Dogecoin'
      },
      type: 'above',
      status: 'triggered',
      currentPrice: 0.085,
      targetPrice: 0.08,
      basePrice: 0.075,
      createdAt: '2024-09-28T08:00:00Z',
      lastTriggered: '2024-09-28T15:30:00Z',
      notifications: ['email', 'push']
    }, {
      id: '6',
      asset: {
        symbol: 'MATIC',
        name: 'Polygon'
      },
      type: 'below',
      status: 'active',
      currentPrice: 0.72,
      targetPrice: 0.70,
      basePrice: 0.85,
      createdAt: '2024-09-26T12:15:00Z',
      notifications: ['discord']
    }]
  }
}`,...(H=(j=P.parameters)==null?void 0:j.docs)==null?void 0:H.source}}};const Xe=["Default","HighActivity"];export{m as Default,P as HighActivity,Xe as __namedExportsOrder,Ke as default};
