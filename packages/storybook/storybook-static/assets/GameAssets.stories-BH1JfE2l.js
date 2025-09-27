import{r as x,c as d,b as r,f as e,d as i,t as l,w as A,s as E,F as w,g as _,n as q,u as D,v as ae,h as s,l as b,k as ne}from"./vue.esm-bundler-DxM0YtBV.js";const re={class:"bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"},le={class:"p-6 border-b border-gray-200 dark:border-gray-700"},se={class:"flex items-center justify-between mb-4"},oe={class:"text-2xl font-bold text-gray-900 dark:text-white"},ie={key:0,class:"text-gray-600 dark:text-gray-300 mt-1"},de={class:"flex items-center gap-3"},ue=["value"],ce=["disabled"],ge={class:"grid grid-cols-1 md:grid-cols-4 gap-4"},me={class:"p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg"},pe={class:"text-xl font-bold text-purple-800 dark:text-purple-200"},ye={class:"text-xs text-purple-600 dark:text-purple-400"},ve={class:"p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg"},xe={class:"text-xl font-bold text-blue-800 dark:text-blue-200"},be={class:"text-xs text-blue-600 dark:text-blue-400"},he={class:"p-4 bg-green-50 dark:bg-green-900/20 rounded-lg"},ke={class:"text-xl font-bold text-green-800 dark:text-green-200"},fe={class:"text-xs text-green-600 dark:text-green-400"},we={class:"p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg"},_e={class:"text-xl font-bold text-yellow-800 dark:text-yellow-200"},qe={class:"p-6 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900"},Ce={class:"flex flex-wrap items-center justify-between gap-4"},Se={class:"flex flex-wrap items-center gap-4"},Ae={class:"flex items-center gap-2"},Me={class:"flex items-center gap-2"},Pe={class:"flex items-center gap-2"},Ue={class:"flex items-center gap-2"},Ee={class:"p-6"},Ge={key:0,class:"text-center py-12"},Ve={class:"mt-1 text-sm text-gray-500 dark:text-gray-400"},Ie={key:1,class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"},$e=["onClick"],Te={class:"aspect-square bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 relative overflow-hidden"},De=["src","alt"],He={key:1,class:"w-full h-full flex items-center justify-center"},Le={class:"text-4xl font-bold text-gray-400"},je={key:2,class:"absolute top-2 right-2 bg-black/50 text-white px-2 py-1 text-xs rounded-full"},Fe={key:3,class:"absolute bottom-2 right-2 bg-blue-600 text-white px-2 py-1 text-xs rounded-full"},Ne={class:"p-4"},Be={class:"flex items-start justify-between mb-2"},ze={class:"flex-1 min-w-0"},Oe={class:"font-semibold text-gray-900 dark:text-white truncate"},Re={class:"text-sm text-gray-500 dark:text-gray-400 truncate"},Qe={key:0,class:"text-right ml-2"},We={class:"text-sm font-medium text-gray-900 dark:text-white"},Ye={key:0,class:"space-y-1"},Je={class:"text-gray-500 dark:text-gray-400"},Ke={class:"font-medium text-gray-900 dark:text-white"},Xe={class:"flex items-center gap-2 mt-3"},Ze=["onClick"],et=["onClick"],tt=["onClick"],at={key:2,class:"space-y-3"},nt=["onClick"],rt={class:"w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-lg overflow-hidden flex-shrink-0"},lt=["src","alt"],st={key:1,class:"w-full h-full flex items-center justify-center"},ot={class:"text-lg font-bold text-gray-400"},it={class:"flex-1 min-w-0"},dt={class:"flex items-center gap-2 mb-1"},ut={class:"font-semibold text-gray-900 dark:text-white truncate"},ct={key:0,class:"px-2 py-1 text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"},gt={class:"text-sm text-gray-500 dark:text-gray-400"},mt={key:0},pt={key:0,class:"hidden md:flex items-center gap-4"},yt={class:"text-xs text-gray-500 dark:text-gray-400"},vt={class:"text-sm font-medium text-gray-900 dark:text-white"},xt={class:"flex items-center gap-3"},bt={key:0,class:"text-right"},ht={class:"text-sm font-medium text-gray-900 dark:text-white"},kt={class:"flex items-center gap-1"},ft=["onClick"],wt=["onClick"],_t=["onClick"],qt={key:3,class:"flex items-center justify-between mt-6"},Ct={class:"text-sm text-gray-500 dark:text-gray-400"},St={class:"flex items-center gap-2"},At=["disabled"],Mt={class:"px-3 py-1 text-sm text-gray-900 dark:text-white"},Pt=["disabled"],z={__name:"GameAssets",props:{title:{type:String,default:"Game Assets"},subtitle:{type:String,default:""},assets:{type:Array,default:()=>[]},availableGames:{type:Array,default:()=>[]},loading:{type:Boolean,default:!1},showPagination:{type:Boolean,default:!0},itemsPerPage:{type:Number,default:12}},emits:["game-filter","refresh","asset-click","equip-asset","upgrade-asset","sell-asset","view-details"],setup(g,{emit:Ut}){const u=g,m=x(""),p=x(""),y=x(""),v=x(""),h=x("grid"),c=x(1),k=d(()=>{let n=u.assets;if(m.value&&(n=n.filter(t=>t.gameId===m.value)),p.value&&(n=n.filter(t=>t.type===p.value)),y.value&&(n=n.filter(t=>t.rarity===y.value)),v.value){const t=v.value.toLowerCase();n=n.filter(a=>{var o,f;return a.name.toLowerCase().includes(t)||((o=a.collection)==null?void 0:o.toLowerCase().includes(t))||((f=a.game)==null?void 0:f.toLowerCase().includes(t))})}return n.sort((t,a)=>{const o={mythic:6,legendary:5,epic:4,rare:3,uncommon:2,common:1},f=o[t.rarity]||0,T=o[a.rarity]||0;return f!==T?T-f:(a.price||0)-(t.price||0)})}),S=d(()=>Math.ceil(k.value.length/u.itemsPerPage)),P=d(()=>(c.value-1)*u.itemsPerPage),G=d(()=>P.value+u.itemsPerPage),V=d(()=>k.value.slice(P.value,G.value)),O=d(()=>m.value||p.value||y.value||v.value),R=d(()=>u.assets.reduce((n,t)=>n+(t.price||0)*(t.quantity||1),0)),Q=d(()=>u.assets.reduce((n,t)=>n+(t.quantity||1),0)),W=d(()=>u.assets.filter(n=>n.type==="nft").reduce((n,t)=>n+(t.quantity||1),0)),Y=d(()=>u.assets.filter(n=>n.type==="token").reduce((n,t)=>n+(t.quantity||1),0)),J=d(()=>new Set(u.assets.map(t=>t.collection).filter(Boolean)).size),K=d(()=>new Set(u.assets.filter(t=>t.type==="token").map(t=>t.name)).size),X=d(()=>new Set(u.assets.map(t=>t.gameId).filter(Boolean)).size),I=n=>{const t={common:"bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200",uncommon:"bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",rare:"bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",epic:"bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",legendary:"bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",mythic:"bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"};return t[n==null?void 0:n.toLowerCase()]||t.common},U=()=>{c.value=1},Z=()=>{m.value="",p.value="",y.value="",v.value="",c.value=1},ee=()=>{c.value<S.value&&c.value++},te=()=>{c.value>1&&c.value--},$=n=>{n.target.style.display="none"};return(n,t)=>(s(),r("div",re,[e("div",le,[e("div",se,[e("div",null,[e("h2",oe,l(g.title||"Game Assets"),1),g.subtitle?(s(),r("p",ie,l(g.subtitle),1)):i("",!0)]),e("div",de,[A(e("select",{"onUpdate:modelValue":t[0]||(t[0]=a=>m.value=a),onChange:t[1]||(t[1]=a=>n.$emit("game-filter",m.value)),class:"px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"},[t[8]||(t[8]=e("option",{value:""},"All Games",-1)),(s(!0),r(w,null,_(g.availableGames,a=>(s(),r("option",{key:a.id,value:a.id},l(a.name),9,ue))),128))],544),[[E,m.value]]),e("button",{onClick:t[2]||(t[2]=a=>n.$emit("refresh")),disabled:g.loading,class:"p-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"},[(s(),r("svg",{class:q([g.loading?"animate-spin":"","w-4 h-4 text-gray-600 dark:text-gray-400"]),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[...t[9]||(t[9]=[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"},null,-1)])],2))],8,ce)])]),e("div",ge,[e("div",me,[t[10]||(t[10]=e("div",{class:"text-sm text-purple-600 dark:text-purple-400 mb-1"},"Total Value",-1)),e("div",pe," $"+l(R.value.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})),1),e("div",ye,l(Q.value)+" assets ",1)]),e("div",ve,[t[11]||(t[11]=e("div",{class:"text-sm text-blue-600 dark:text-blue-400 mb-1"},"NFTs",-1)),e("div",xe,l(W.value),1),e("div",be,l(J.value)+" collections ",1)]),e("div",he,[t[12]||(t[12]=e("div",{class:"text-sm text-green-600 dark:text-green-400 mb-1"},"Tokens",-1)),e("div",ke,l(Y.value),1),e("div",fe,l(K.value)+" types ",1)]),e("div",we,[t[13]||(t[13]=e("div",{class:"text-sm text-yellow-600 dark:text-yellow-400 mb-1"},"Games",-1)),e("div",_e,l(X.value),1),t[14]||(t[14]=e("div",{class:"text-xs text-yellow-600 dark:text-yellow-400"}," Active games ",-1))])])]),e("div",qe,[e("div",Ce,[e("div",Se,[e("div",Ae,[t[16]||(t[16]=e("label",{class:"text-sm font-medium text-gray-700 dark:text-gray-300"},"Type:",-1)),A(e("select",{"onUpdate:modelValue":t[3]||(t[3]=a=>p.value=a),onChange:U,class:"px-3 py-1 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"},[...t[15]||(t[15]=[D('<option value="">All Types</option><option value="nft">NFTs</option><option value="token">Tokens</option><option value="equipment">Equipment</option><option value="character">Characters</option><option value="land">Land</option>',6)])],544),[[E,p.value]])]),e("div",Me,[t[18]||(t[18]=e("label",{class:"text-sm font-medium text-gray-700 dark:text-gray-300"},"Rarity:",-1)),A(e("select",{"onUpdate:modelValue":t[4]||(t[4]=a=>y.value=a),onChange:U,class:"px-3 py-1 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"},[...t[17]||(t[17]=[D('<option value="">All Rarities</option><option value="common">Common</option><option value="uncommon">Uncommon</option><option value="rare">Rare</option><option value="epic">Epic</option><option value="legendary">Legendary</option><option value="mythic">Mythic</option>',7)])],544),[[E,y.value]])]),e("div",Pe,[A(e("input",{type:"text","onUpdate:modelValue":t[5]||(t[5]=a=>v.value=a),onInput:U,placeholder:"Search assets...",class:"px-3 py-1 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm w-40"},null,544),[[ae,v.value]])]),e("button",{onClick:Z,class:"text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"}," Clear ")]),e("div",Ue,[e("button",{onClick:t[6]||(t[6]=a=>h.value="grid"),class:q(["p-2 rounded-lg transition-colors",h.value==="grid"?"bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400":"text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"])},[...t[19]||(t[19]=[e("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"})],-1)])],2),e("button",{onClick:t[7]||(t[7]=a=>h.value="list"),class:q(["p-2 rounded-lg transition-colors",h.value==="list"?"bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400":"text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"])},[...t[20]||(t[20]=[e("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 10h16M4 14h16M4 18h16"})],-1)])],2)])])]),e("div",Ee,[k.value.length===0?(s(),r("div",Ge,[t[21]||(t[21]=e("svg",{class:"mx-auto h-12 w-12 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"})],-1)),t[22]||(t[22]=e("h3",{class:"mt-2 text-sm font-medium text-gray-900 dark:text-white"},"No assets found",-1)),e("p",Ve,l(O.value?"Try adjusting your filters":"Start playing games to collect assets"),1)])):h.value==="grid"?(s(),r("div",Ie,[(s(!0),r(w,null,_(V.value,a=>(s(),r("div",{key:a.id,class:"group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-200 cursor-pointer",onClick:o=>n.$emit("asset-click",a)},[e("div",Te,[a.image?(s(),r("img",{key:0,src:a.image,alt:a.name,class:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-200",onError:$},null,40,De)):(s(),r("div",He,[e("div",Le,l(a.name.charAt(0)),1)])),e("div",{class:q(["absolute top-2 left-2 px-2 py-1 text-xs font-medium rounded-full",I(a.rarity)])},l(a.rarity),3),a.level?(s(),r("div",je," Lv."+l(a.level),1)):i("",!0),a.quantity>1?(s(),r("div",Fe,l(a.quantity),1)):i("",!0)]),e("div",Ne,[e("div",Be,[e("div",ze,[e("h3",Oe,l(a.name),1),e("p",Re,l(a.collection||a.game),1)]),a.price?(s(),r("div",Qe,[e("div",We," $"+l(a.price.toFixed(2)),1)])):i("",!0)]),a.stats&&a.stats.length>0?(s(),r("div",Ye,[(s(!0),r(w,null,_(a.stats.slice(0,2),o=>(s(),r("div",{key:o.name,class:"flex items-center justify-between text-xs"},[e("span",Je,l(o.name),1),e("span",Ke,l(o.value),1)]))),128))])):i("",!0),e("div",Xe,[a.canEquip?(s(),r("button",{key:0,onClick:b(o=>n.$emit("equip-asset",a),["stop"]),class:"flex-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium py-2 px-3 rounded transition-colors"}," Equip ",8,Ze)):i("",!0),a.canUpgrade?(s(),r("button",{key:1,onClick:b(o=>n.$emit("upgrade-asset",a),["stop"]),class:"flex-1 bg-green-600 hover:bg-green-700 text-white text-xs font-medium py-2 px-3 rounded transition-colors"}," Upgrade ",8,et)):i("",!0),a.canSell?(s(),r("button",{key:2,onClick:b(o=>n.$emit("sell-asset",a),["stop"]),class:"flex-1 bg-red-600 hover:bg-red-700 text-white text-xs font-medium py-2 px-3 rounded transition-colors"}," Sell ",8,tt)):i("",!0)])])],8,$e))),128))])):(s(),r("div",at,[(s(!0),r(w,null,_(V.value,a=>(s(),r("div",{key:a.id,class:"flex items-center gap-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors cursor-pointer",onClick:o=>n.$emit("asset-click",a)},[e("div",rt,[a.image?(s(),r("img",{key:0,src:a.image,alt:a.name,class:"w-full h-full object-cover",onError:$},null,40,lt)):(s(),r("div",st,[e("div",ot,l(a.name.charAt(0)),1)]))]),e("div",it,[e("div",dt,[e("h3",ut,l(a.name),1),e("span",{class:q(["px-2 py-1 text-xs font-medium rounded-full",I(a.rarity)])},l(a.rarity),3),a.level?(s(),r("span",ct," Lv."+l(a.level),1)):i("",!0)]),e("div",gt,[ne(l(a.collection||a.game)+" ",1),a.quantity>1?(s(),r("span",mt," • Qty: "+l(a.quantity),1)):i("",!0)])]),a.stats&&a.stats.length>0?(s(),r("div",pt,[(s(!0),r(w,null,_(a.stats.slice(0,3),o=>(s(),r("div",{key:o.name,class:"text-center"},[e("div",yt,l(o.name),1),e("div",vt,l(o.value),1)]))),128))])):i("",!0),e("div",xt,[a.price?(s(),r("div",bt,[e("div",ht," $"+l(a.price.toFixed(2)),1)])):i("",!0),e("div",kt,[a.canEquip?(s(),r("button",{key:0,onClick:b(o=>n.$emit("equip-asset",a),["stop"]),class:"p-2 text-blue-600 hover:bg-blue-100 dark:text-blue-400 dark:hover:bg-blue-900/20 rounded transition-colors",title:"Equip"},[...t[23]||(t[23]=[e("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})],-1)])],8,ft)):i("",!0),a.canUpgrade?(s(),r("button",{key:1,onClick:b(o=>n.$emit("upgrade-asset",a),["stop"]),class:"p-2 text-green-600 hover:bg-green-100 dark:text-green-400 dark:hover:bg-green-900/20 rounded transition-colors",title:"Upgrade"},[...t[24]||(t[24]=[e("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"})],-1)])],8,wt)):i("",!0),e("button",{onClick:b(o=>n.$emit("view-details",a),["stop"]),class:"p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 rounded transition-colors",title:"View Details"},[...t[25]||(t[25]=[e("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})],-1)])],8,_t)])])],8,nt))),128))])),g.showPagination&&S.value>1?(s(),r("div",qt,[e("div",Ct," Showing "+l(P.value+1)+"-"+l(Math.min(G.value,k.value.length))+" of "+l(k.value.length)+" assets ",1),e("div",St,[e("button",{onClick:te,disabled:c.value===1,class:"px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"}," Previous ",8,At),e("span",Mt,l(c.value)+" / "+l(S.value),1),e("button",{onClick:ee,disabled:c.value===S.value,class:"px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"}," Next ",8,Pt)])])):i("",!0)])]))}};z.__docgenInfo={exportName:"default",displayName:"GameAssets",description:"",tags:{},props:[{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"'Game Assets'"}},{name:"subtitle",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"assets",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"availableGames",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"loading",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showPagination",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"itemsPerPage",type:{name:"number"},defaultValue:{func:!1,value:"12"}}],events:[{name:"game-filter"},{name:"refresh"},{name:"asset-click"},{name:"equip-asset"},{name:"upgrade-asset"},{name:"sell-asset"},{name:"view-details"}],sourceFiles:["/Users/steve/Projects/tnp.web.supaweb3/packages/ui/src/components/gaming/GameAssets.vue"]};const Gt={title:"Gaming/GameAssets",component:z,parameters:{layout:"centered",docs:{description:{component:"A comprehensive gaming asset inventory for NFTs, tokens, and in-game items with filtering and management capabilities."}}},decorators:[()=>({template:'<div class="min-w-[900px] max-w-[1200px]"><story /></div>'})],tags:["autodocs"]},C={args:{title:"Game Assets",subtitle:"Manage your gaming NFTs, tokens, and equipment",availableGames:[{id:"axie",name:"Axie Infinity"},{id:"gods",name:"Gods Unchained"},{id:"sandbox",name:"The Sandbox"},{id:"decentraland",name:"Decentraland"}],assets:[{id:"1",name:"Dragon Sword +5",type:"equipment",rarity:"legendary",gameId:"gods",game:"Gods Unchained",collection:"Legendary Weapons",level:5,quantity:1,price:850,image:"https://via.placeholder.com/300x300?text=Dragon+Sword",stats:[{name:"Attack",value:"95"},{name:"Durability",value:"100%"},{name:"Enchantment",value:"Fire"}],canEquip:!0,canUpgrade:!0,canSell:!0},{id:"2",name:"Mystic Axie #1234",type:"nft",rarity:"rare",gameId:"axie",game:"Axie Infinity",collection:"Genesis Axies",quantity:1,price:450,image:"https://via.placeholder.com/300x300?text=Mystic+Axie",stats:[{name:"Health",value:"61"},{name:"Speed",value:"35"},{name:"Skill",value:"31"},{name:"Morale",value:"43"}],canEquip:!1,canUpgrade:!1,canSell:!0},{id:"3",name:"SAND Tokens",type:"token",rarity:"common",gameId:"sandbox",game:"The Sandbox",quantity:2500,price:.45,stats:[{name:"Total Value",value:"$1,125"},{name:"APY",value:"5.2%"}],canEquip:!1,canUpgrade:!1,canSell:!0},{id:"4",name:"Virtual Land Parcel",type:"land",rarity:"epic",gameId:"decentraland",game:"Decentraland",collection:"Genesis City",quantity:1,price:1200,image:"https://via.placeholder.com/300x300?text=Land+Parcel",stats:[{name:"Size",value:"16x16"},{name:"District",value:"Fashion"},{name:"Traffic",value:"High"}],canEquip:!1,canUpgrade:!0,canSell:!0},{id:"5",name:"Healing Potion",type:"equipment",rarity:"common",gameId:"gods",game:"Gods Unchained",collection:"Consumables",quantity:25,price:2.5,stats:[{name:"Healing",value:"+50 HP"},{name:"Cooldown",value:"30s"}],canEquip:!0,canUpgrade:!1,canSell:!0}]}},M={args:{...C.args,title:"High-Value Gaming Portfolio",assets:[{id:"1",name:"Origin Axie #001",type:"nft",rarity:"mythic",gameId:"axie",game:"Axie Infinity",collection:"Origin Collection",quantity:1,price:15e3,image:"https://via.placeholder.com/300x300?text=Origin+Axie",stats:[{name:"Health",value:"61"},{name:"Speed",value:"61"},{name:"Skill",value:"61"},{name:"Morale",value:"61"}],canEquip:!1,canUpgrade:!1,canSell:!0},{id:"2",name:"Excalibur Legendary",type:"equipment",rarity:"mythic",gameId:"gods",game:"Gods Unchained",collection:"Mythic Artifacts",level:10,quantity:1,price:8500,image:"https://via.placeholder.com/300x300?text=Excalibur",stats:[{name:"Attack",value:"150"},{name:"Durability",value:"∞"},{name:"Special",value:"Holy"}],canEquip:!0,canUpgrade:!1,canSell:!0}]}};var H,L,j;C.parameters={...C.parameters,docs:{...(H=C.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    title: 'Game Assets',
    subtitle: 'Manage your gaming NFTs, tokens, and equipment',
    availableGames: [{
      id: 'axie',
      name: 'Axie Infinity'
    }, {
      id: 'gods',
      name: 'Gods Unchained'
    }, {
      id: 'sandbox',
      name: 'The Sandbox'
    }, {
      id: 'decentraland',
      name: 'Decentraland'
    }],
    assets: [{
      id: '1',
      name: 'Dragon Sword +5',
      type: 'equipment',
      rarity: 'legendary',
      gameId: 'gods',
      game: 'Gods Unchained',
      collection: 'Legendary Weapons',
      level: 5,
      quantity: 1,
      price: 850.00,
      image: 'https://via.placeholder.com/300x300?text=Dragon+Sword',
      stats: [{
        name: 'Attack',
        value: '95'
      }, {
        name: 'Durability',
        value: '100%'
      }, {
        name: 'Enchantment',
        value: 'Fire'
      }],
      canEquip: true,
      canUpgrade: true,
      canSell: true
    }, {
      id: '2',
      name: 'Mystic Axie #1234',
      type: 'nft',
      rarity: 'rare',
      gameId: 'axie',
      game: 'Axie Infinity',
      collection: 'Genesis Axies',
      quantity: 1,
      price: 450.00,
      image: 'https://via.placeholder.com/300x300?text=Mystic+Axie',
      stats: [{
        name: 'Health',
        value: '61'
      }, {
        name: 'Speed',
        value: '35'
      }, {
        name: 'Skill',
        value: '31'
      }, {
        name: 'Morale',
        value: '43'
      }],
      canEquip: false,
      canUpgrade: false,
      canSell: true
    }, {
      id: '3',
      name: 'SAND Tokens',
      type: 'token',
      rarity: 'common',
      gameId: 'sandbox',
      game: 'The Sandbox',
      quantity: 2500,
      price: 0.45,
      stats: [{
        name: 'Total Value',
        value: '$1,125'
      }, {
        name: 'APY',
        value: '5.2%'
      }],
      canEquip: false,
      canUpgrade: false,
      canSell: true
    }, {
      id: '4',
      name: 'Virtual Land Parcel',
      type: 'land',
      rarity: 'epic',
      gameId: 'decentraland',
      game: 'Decentraland',
      collection: 'Genesis City',
      quantity: 1,
      price: 1200.00,
      image: 'https://via.placeholder.com/300x300?text=Land+Parcel',
      stats: [{
        name: 'Size',
        value: '16x16'
      }, {
        name: 'District',
        value: 'Fashion'
      }, {
        name: 'Traffic',
        value: 'High'
      }],
      canEquip: false,
      canUpgrade: true,
      canSell: true
    }, {
      id: '5',
      name: 'Healing Potion',
      type: 'equipment',
      rarity: 'common',
      gameId: 'gods',
      game: 'Gods Unchained',
      collection: 'Consumables',
      quantity: 25,
      price: 2.50,
      stats: [{
        name: 'Healing',
        value: '+50 HP'
      }, {
        name: 'Cooldown',
        value: '30s'
      }],
      canEquip: true,
      canUpgrade: false,
      canSell: true
    }]
  }
}`,...(j=(L=C.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var F,N,B;M.parameters={...M.parameters,docs:{...(F=M.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title: 'High-Value Gaming Portfolio',
    assets: [{
      id: '1',
      name: 'Origin Axie #001',
      type: 'nft',
      rarity: 'mythic',
      gameId: 'axie',
      game: 'Axie Infinity',
      collection: 'Origin Collection',
      quantity: 1,
      price: 15000.00,
      image: 'https://via.placeholder.com/300x300?text=Origin+Axie',
      stats: [{
        name: 'Health',
        value: '61'
      }, {
        name: 'Speed',
        value: '61'
      }, {
        name: 'Skill',
        value: '61'
      }, {
        name: 'Morale',
        value: '61'
      }],
      canEquip: false,
      canUpgrade: false,
      canSell: true
    }, {
      id: '2',
      name: 'Excalibur Legendary',
      type: 'equipment',
      rarity: 'mythic',
      gameId: 'gods',
      game: 'Gods Unchained',
      collection: 'Mythic Artifacts',
      level: 10,
      quantity: 1,
      price: 8500.00,
      image: 'https://via.placeholder.com/300x300?text=Excalibur',
      stats: [{
        name: 'Attack',
        value: '150'
      }, {
        name: 'Durability',
        value: '∞'
      }, {
        name: 'Special',
        value: 'Holy'
      }],
      canEquip: true,
      canUpgrade: false,
      canSell: true
    }]
  }
}`,...(B=(N=M.parameters)==null?void 0:N.docs)==null?void 0:B.source}}};const Vt=["Default","HighValueCollection"];export{C as Default,M as HighValueCollection,Vt as __namedExportsOrder,Gt as default};
