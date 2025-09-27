import{E as Le,c as l,b as t,n as o,d as r,f as u,F as j,g as q,K as Ue,t as h,h as s}from"./vue.esm-bundler-DxM0YtBV.js";import{_ as Ee}from"./Web3Icon-CMoc-ptT.js";const Ne={key:0,class:"flex-shrink-0"},$e={key:0,class:"h-5 bg-gray-200 dark:bg-gray-700 rounded-full w-16 animate-pulse"},Fe={key:0},Me=["onClick"],k=Le({__name:"TokenBalance",props:{token:{},layout:{default:"vertical"},size:{default:"md"},showUsdValue:{type:Boolean,default:!1},showTokenName:{type:Boolean,default:!0},showFullName:{type:Boolean,default:!1},showPriceChange:{type:Boolean,default:!0},showSecondaryInfo:{type:Boolean,default:!0},showPrice:{type:Boolean,default:!1},showActions:{type:Boolean,default:!1},actions:{default:()=>[]},loading:{type:Boolean,default:!1},clickable:{type:Boolean,default:!1},className:{}},emits:["click","action"],setup(e,{emit:v}){const n=e,y=l(()=>{const a=n.token.decimals||18,c=n.token.balance/Math.pow(10,a);return c>=1e6?`${(c/1e6).toFixed(2)}M`:c>=1e3?`${(c/1e3).toFixed(2)}K`:c>=1?c.toFixed(4):c.toFixed(6)}),D=l(()=>{if(!n.token.usdPrice)return"$0.00";const a=n.token.decimals||18,d=n.token.balance/Math.pow(10,a)*n.token.usdPrice;return d>=1e6?`$${(d/1e6).toFixed(2)}M`:d>=1e3?`$${(d/1e3).toFixed(2)}K`:d>=1?`$${d.toFixed(2)}`:`$${d.toFixed(4)}`}),I=l(()=>{if(n.token.priceChange===void 0)return"";const a=n.token.priceChange;return`${a>=0?"+":""}${a.toFixed(2)}%`}),m=a=>a>=1?a.toFixed(2):a>=.01?a.toFixed(4):a.toFixed(6),p=l(()=>({xs:16,sm:20,md:24,lg:32,xl:40})[n.size]),V=l(()=>["token-balance","bg-white dark:bg-gray-900","border border-gray-200 dark:border-gray-700","rounded-xl shadow-sm",n.clickable?"cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 hover:shadow-md hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200":"",n.className].filter(Boolean).join(" ")),L=l(()=>({vertical:"flex flex-col items-center text-center space-y-3 p-4",horizontal:"flex items-center space-x-4 p-4",compact:"flex items-center justify-between p-3","icon-only":"flex justify-center p-2","text-only":"flex flex-col space-y-2 p-3"})[n.layout]),Te=l(()=>{const a="flex-shrink-0 relative";return n.layout==="vertical"?`${a} mb-1`:n.layout==="horizontal"?`${a} mr-1`:n.layout==="compact"?`${a} mr-1`:a}),U=l(()=>n.layout==="vertical"?"flex flex-col items-center space-y-2 w-full":n.layout==="horizontal"?"flex-1 min-w-0 space-y-1":n.layout==="compact"?"flex-1 min-w-0":"space-y-2"),E=l(()=>[{xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-base",xl:"text-lg"}[n.size],n.layout==="compact"?"truncate":"","font-medium text-gray-700 dark:text-gray-300 mb-1"].filter(Boolean).join(" ")),we=l(()=>"mr-2"),Ce=l(()=>"text-gray-600 dark:text-gray-400 font-medium"),N=l(()=>n.layout==="compact"?"flex items-center justify-between space-x-3":n.layout==="horizontal"?"flex items-center space-x-3":"flex flex-col items-center space-y-1 w-full"),$=l(()=>[{xs:"text-sm",sm:"text-base",md:"text-lg",lg:"text-xl",xl:"text-2xl"}[n.size],"font-bold text-gray-900 dark:text-white tracking-tight"].join(" ")),Be=l(()=>"text-green-600 dark:text-green-400 font-bold tracking-tight"),ze=l(()=>["flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium",(n.token.priceChange||0)>=0?"bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400":"bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400"].join(" ")),F=l(()=>"w-3 h-3 flex-shrink-0"),Se=l(()=>"font-medium whitespace-nowrap"),M=l(()=>["text-xs text-gray-500 dark:text-gray-400 mt-1",n.layout==="vertical"?"text-center":"",n.layout==="compact"?"text-right":""].filter(Boolean).join(" ")),Ae=l(()=>"block text-gray-500 dark:text-gray-400"),Pe=l(()=>"block text-green-600 dark:text-green-400 font-medium"),De=l(()=>"block text-gray-500 dark:text-gray-400"),H=l(()=>n.layout==="vertical"?"flex space-x-3 mt-3":n.layout==="horizontal"?"flex space-x-3 ml-4 me-2 flex-shrink-0":n.layout==="compact"?"flex space-x-3 ml-auto me-2 flex-shrink-0":"flex space-x-3"),Ie=l(()=>[...["px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-200","border border-transparent","focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"],"bg-blue-50 text-blue-700 border-blue-200","hover:bg-blue-100 hover:border-blue-300 hover:shadow-sm","dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800","dark:hover:bg-blue-900/50 dark:hover:border-blue-700","me-1 last:me-0"].join(" ")),Ve=l(()=>["rounded-lg animate-pulse bg-gray-200 dark:bg-gray-700",{16:"w-4 h-4",20:"w-5 h-5",24:"w-6 h-6",32:"w-8 h-8",40:"w-10 h-10"}[p.value]||"w-6 h-6"].join(" "));return(a,c)=>(s(),t("div",{class:o(V.value)},[e.loading?(s(),t("div",{key:0,class:o(L.value)},[e.layout!=="text-only"?(s(),t("div",Ne,[u("div",{class:o(Ve.value)},null,2)])):r("",!0),e.layout!=="icon-only"?(s(),t("div",{key:1,class:o(U.value)},[e.showTokenName?(s(),t("div",{key:0,class:o(E.value)},[...c[0]||(c[0]=[u("div",{class:"h-4 bg-gray-200 dark:bg-gray-700 rounded w-16 animate-pulse"},null,-1)])],2)):r("",!0),u("div",{class:o(N.value)},[u("div",{class:o($.value)},[...c[1]||(c[1]=[u("div",{class:"h-6 bg-gray-200 dark:bg-gray-700 rounded w-20 animate-pulse"},null,-1)])],2),e.showPriceChange?(s(),t("div",$e)):r("",!0)],2),e.showSecondaryInfo?(s(),t("div",{key:1,class:o(M.value)},[...c[2]||(c[2]=[u("div",{class:"h-3 bg-gray-200 dark:bg-gray-700 rounded w-12 animate-pulse"},null,-1)])],2)):r("",!0)],2)):r("",!0),e.showActions?(s(),t("div",{key:2,class:o(H.value)},[(s(),t(j,null,q(3,d=>u("div",{key:d,class:"h-7 w-12 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"})),64))],2)):r("",!0)],2)):(s(),t("div",{key:1,class:o(L.value)},[e.layout!=="text-only"?(s(),t("div",{key:0,class:o(Te.value)},[Ue(Ee,{type:"tokens",variant:"branded",symbol:e.token.symbol,size:p.value,"fallback-text":e.token.symbol.slice(0,2)},null,8,["symbol","size","fallback-text"])],2)):r("",!0),e.layout!=="icon-only"?(s(),t("div",{key:1,class:o(U.value)},[e.showTokenName?(s(),t("div",{key:0,class:o(E.value)},[e.showFullName&&e.token.name?(s(),t("span",{key:0,class:o(we.value)},h(e.token.name),3)):r("",!0),u("span",{class:o(Ce.value)},h(e.token.symbol),3)],2)):r("",!0),u("div",{class:o(N.value)},[u("div",{class:o($.value)},[e.showUsdValue?(s(),t("span",{key:1,class:o(Be.value)},h(D.value),3)):(s(),t("span",Fe,h(y.value),1))],2),e.showPriceChange&&e.token.priceChange!==void 0?(s(),t("div",{key:0,class:o(ze.value)},[e.token.priceChange>0?(s(),t("svg",{key:0,class:o(F.value),fill:"currentColor",viewBox:"0 0 20 20"},[...c[3]||(c[3]=[u("path",{"fill-rule":"evenodd",d:"M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L10 4.414 6.707 7.707a1 1 0 01-1.414 0z","clip-rule":"evenodd"},null,-1)])],2)):e.token.priceChange<0?(s(),t("svg",{key:1,class:o(F.value),fill:"currentColor",viewBox:"0 0 20 20"},[...c[4]||(c[4]=[u("path",{"fill-rule":"evenodd",d:"M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L10 15.586l3.293-3.293a1 1 0 011.414 0z","clip-rule":"evenodd"},null,-1)])],2)):r("",!0),u("span",{class:o(Se.value)},h(I.value),3)],2)):r("",!0)],2),e.showSecondaryInfo?(s(),t("div",{key:1,class:o(M.value)},[e.showUsdValue?(s(),t("span",{key:0,class:o(Ae.value)},h(y.value),3)):e.token.usdPrice?(s(),t("span",{key:1,class:o(Pe.value)},h(D.value),3)):r("",!0),e.token.usdPrice&&e.showPrice?(s(),t("span",{key:2,class:o(De.value)}," $"+h(m(e.token.usdPrice))+" per "+h(e.token.symbol),3)):r("",!0)],2)):r("",!0)],2)):r("",!0),e.showActions?(s(),t("div",{key:2,class:o(H.value)},[(s(!0),t(j,null,q(e.actions,d=>(s(),t("button",{key:d.label,onClick:He=>a.$emit("action",d.id,e.token),class:o(Ie.value)},h(d.label),11,Me))),128))],2)):r("",!0)],2))],2))}});k.__docgenInfo={exportName:"default",displayName:"TokenBalance",description:"",tags:{},props:[{name:"token",required:!0,type:{name:"TokenData"}},{name:"layout",required:!1,type:{name:"TokenLayout"},defaultValue:{func:!1,value:"'vertical'"}},{name:"size",required:!1,type:{name:"TokenSize"},defaultValue:{func:!1,value:"'md'"}},{name:"showUsdValue",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showTokenName",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"showFullName",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showPriceChange",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"showSecondaryInfo",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"showPrice",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showActions",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"actions",required:!1,type:{name:"Array",elements:[{name:"TokenAction"}]},defaultValue:{func:!1,value:"() => []"}},{name:"loading",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"clickable",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"className",required:!1,type:{name:"string"}}],events:[{name:"action",type:{names:["string"]}},{name:"click",type:{names:["TokenData"]}}],sourceFiles:["/Users/steve/Projects/tnp.web.supaweb3/packages/ui/src/components/tokens/TokenBalance.vue"]};const Oe={title:"Tokens/TokenBalance",component:k,parameters:{layout:"centered",docs:{description:{component:"A comprehensive token balance display component with multiple layouts, USD values, price changes, and action buttons. Integrates with Web3Icon for token logos."}}},tags:["autodocs"],argTypes:{layout:{control:"select",options:["vertical","horizontal","compact","icon-only","text-only"],description:"Layout style for the token display"},size:{control:"select",options:["xs","sm","md","lg","xl"],description:"Size of the component"},showUsdValue:{control:"boolean",description:"Show USD value as primary display"},showTokenName:{control:"boolean",description:"Show token name/symbol"},showFullName:{control:"boolean",description:"Show full token name"},showPriceChange:{control:"boolean",description:"Show price change indicator"},showSecondaryInfo:{control:"boolean",description:"Show secondary information"},showPrice:{control:"boolean",description:"Show price per token"},showActions:{control:"boolean",description:"Show action buttons"},loading:{control:"boolean",description:"Show loading state"},clickable:{control:"boolean",description:"Make the component clickable"}}},i={ETH:{symbol:"ETH",name:"Ethereum",balance:25e17,decimals:18,usdPrice:2340.5,priceChange:5.24},USDC:{symbol:"USDC",name:"USD Coin",balance:125e7,decimals:6,usdPrice:1,priceChange:.01},MATIC:{symbol:"MATIC",name:"Polygon",balance:5e21,decimals:18,usdPrice:.85,priceChange:-2.15},DAI:{symbol:"DAI",name:"Dai Stablecoin",balance:5e20,decimals:18,usdPrice:.998,priceChange:-.05},BTC:{symbol:"BTC",name:"Bitcoin",balance:5e6,decimals:8,usdPrice:43250,priceChange:3.78}},P=[{id:"send",label:"Send"},{id:"swap",label:"Swap"},{id:"buy",label:"Buy"}],g={args:{token:i.ETH,layout:"vertical",size:"md"}},b={render:()=>({components:{TokenBalance:k},template:`
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-semibold mb-4">Vertical Layout</h3>
          <div class="grid grid-cols-3 gap-4">
            <TokenBalance
              v-for="token in tokens"
              :key="token.symbol"
              :token="token"
              layout="vertical"
              class=""
            />
          </div>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">Horizontal Layout</h3>
          <div class="space-y-3">
            <TokenBalance
              v-for="token in tokens"
              :key="token.symbol"
              :token="token"
              layout="horizontal"
              class=""
            />
          </div>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">Compact Layout</h3>
          <div class="space-y-2">
            <TokenBalance
              v-for="token in tokens"
              :key="token.symbol"
              :token="token"
              layout="compact"
              class="p-3 border rounded-lg"
            />
          </div>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">Icon Only</h3>
          <div class="flex gap-4">
            <TokenBalance
              v-for="token in tokens"
              :key="token.symbol"
              :token="token"
              layout="icon-only"
              size="lg"
              class="p-3 border rounded-lg"
            />
          </div>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">Text Only</h3>
          <div class="space-y-2">
            <TokenBalance
              v-for="token in tokens"
              :key="token.symbol"
              :token="token"
              layout="text-only"
              class="p-3 border rounded-lg"
            />
          </div>
        </div>
      </div>
    `,setup(){return{tokens:[i.ETH,i.USDC,i.MATIC]}}})},f={render:()=>({components:{TokenBalance:k},template:`
      <div class="space-y-6">
        <div v-for="size in sizes" :key="size">
          <h3 class="text-lg font-semibold mb-4 capitalize">{{ size }} Size</h3>
          <div class="grid grid-cols-3 gap-4">
            <TokenBalance
              :token="token"
              :size="size"
              layout="vertical"
              class=""
            />
            <TokenBalance
              :token="token"
              :size="size"
              layout="horizontal"
              class=""
            />
            <TokenBalance
              :token="token"
              :size="size"
              layout="compact"
              class=""
            />
          </div>
        </div>
      </div>
    `,setup(){const e=["xs","sm","md","lg","xl"],v=i.ETH;return{sizes:e,token:v}}})},x={render:()=>({components:{TokenBalance:k},template:`
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-semibold mb-4">Token Amount Primary</h3>
          <div class="grid grid-cols-2 gap-4">
            <TokenBalance
              v-for="token in tokens"
              :key="token.symbol"
              :token="token"
              layout="vertical"
              :show-usd-value="false"
              class=""
            />
          </div>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">USD Value Primary</h3>
          <div class="grid grid-cols-2 gap-4">
            <TokenBalance
              v-for="token in tokens"
              :key="token.symbol"
              :token="token"
              layout="vertical"
              :show-usd-value="true"
              class=""
            />
          </div>
        </div>
      </div>
    `,setup(){return{tokens:[i.ETH,i.BTC]}}})},T={render:()=>({components:{TokenBalance:k},template:`
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-semibold mb-4">Positive Price Changes</h3>
          <div class="grid grid-cols-2 gap-4">
            <TokenBalance
              v-for="token in positiveTokens"
              :key="token.symbol"
              :token="token"
              layout="horizontal"
              class=""
            />
          </div>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">Negative Price Changes</h3>
          <div class="grid grid-cols-2 gap-4">
            <TokenBalance
              v-for="token in negativeTokens"
              :key="token.symbol"
              :token="token"
              layout="horizontal"
              class=""
            />
          </div>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">Without Price Changes</h3>
          <div class="grid grid-cols-2 gap-4">
            <TokenBalance
              v-for="token in neutralTokens"
              :key="token.symbol"
              :token="token"
              layout="horizontal"
              :show-price-change="false"
              class=""
            />
          </div>
        </div>
      </div>
    `,setup(){const e=[i.ETH,i.BTC],v=[i.MATIC,i.DAI],n=[i.USDC];return{positiveTokens:e,negativeTokens:v,neutralTokens:n}}})},w={args:{token:i.ETH,layout:"horizontal",showActions:!0,actions:P},render:e=>({components:{TokenBalance:k},setup(){return{args:e,handleAction:(n,y)=>{alert(`Action "${n}" clicked for ${y.symbol}`)}}},template:`
      <TokenBalance
        v-bind="args"
        @action="handleAction"
        class=""
      />
    `})},C={render:()=>({components:{TokenBalance:k},template:`
      <div class="space-y-4 max-w-md">
        <h3 class="text-xl font-bold">My Portfolio</h3>
        <div class="space-y-3">
          <TokenBalance
            v-for="token in portfolio"
            :key="token.symbol"
            :token="token"
            layout="horizontal"
            :show-usd-value="true"
            :show-actions="true"
            :actions="actions"
            clickable
            class="hover:shadow-md transition-shadow"
            @click="handleTokenClick"
            @action="handleAction"
          />
        </div>
        <div class="pt-4 border-t">
          <div class="flex justify-between items-center">
            <span class="font-medium">Total Portfolio Value</span>
            <span class="text-lg font-bold text-green-600">{{ totalValue }}</span>
          </div>
        </div>
      </div>
    `,setup(){const e=[i.ETH,i.USDC,i.MATIC,i.DAI,i.BTC],v=P,n=m=>{if(!m.usdPrice)return 0;const p=m.decimals||18;return m.balance/Math.pow(10,p)*m.usdPrice},y=e.reduce((m,p)=>m+n(p),0).toLocaleString("en-US",{style:"currency",currency:"USD"});return{portfolio:e,actions:v,totalValue:y,handleTokenClick:m=>{alert(`Clicked on ${m.symbol}`)},handleAction:(m,p)=>{alert(`Action "${m}" for ${p.symbol}`)}}}})},B={render:()=>({components:{TokenBalance:k},template:`
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-semibold mb-4">Basic Loading States</h3>
          <div class="grid grid-cols-2 gap-6">
            <div>
              <h4 class="text-sm font-medium mb-2 text-gray-600">Vertical Layout</h4>
              <TokenBalance
                :token="token"
                layout="vertical"
                loading
                class=""
              />
            </div>
            <div>
              <h4 class="text-sm font-medium mb-2 text-gray-600">Horizontal Layout</h4>
              <TokenBalance
                :token="token"
                layout="horizontal"
                loading
                class=""
              />
            </div>
            <div>
              <h4 class="text-sm font-medium mb-2 text-gray-600">Compact Layout</h4>
              <TokenBalance
                :token="token"
                layout="compact"
                loading
                class=""
              />
            </div>
            <div>
              <h4 class="text-sm font-medium mb-2 text-gray-600">Icon Only</h4>
              <TokenBalance
                :token="token"
                layout="icon-only"
                loading
                class=""
              />
            </div>
          </div>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">Loading with Features</h3>
          <div class="grid grid-cols-1 gap-4">
            <div>
              <h4 class="text-sm font-medium mb-2 text-gray-600">With Actions & Price Changes</h4>
              <TokenBalance
                :token="token"
                layout="horizontal"
                :show-actions="true"
                :actions="actions"
                :show-price-change="true"
                :show-secondary-info="true"
                loading
                class=""
              />
            </div>

            <div>
              <h4 class="text-sm font-medium mb-2 text-gray-600">Vertical with All Features</h4>
              <div class="max-w-xs">
                <TokenBalance
                  :token="token"
                  layout="vertical"
                  :show-actions="true"
                  :actions="actions"
                  :show-price-change="true"
                  :show-secondary-info="true"
                  :show-price="true"
                  loading
                  class=""
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">Different Sizes</h3>
          <div class="grid grid-cols-3 gap-4">
            <div>
              <h4 class="text-sm font-medium mb-2 text-gray-600">Small</h4>
              <TokenBalance
                :token="token"
                layout="horizontal"
                size="sm"
                loading
                class=""
              />
            </div>
            <div>
              <h4 class="text-sm font-medium mb-2 text-gray-600">Medium</h4>
              <TokenBalance
                :token="token"
                layout="horizontal"
                size="md"
                loading
                class=""
              />
            </div>
            <div>
              <h4 class="text-sm font-medium mb-2 text-gray-600">Large</h4>
              <TokenBalance
                :token="token"
                layout="horizontal"
                size="lg"
                loading
                class=""
              />
            </div>
          </div>
        </div>
      </div>
    `,setup(){return{token:i.ETH,actions:P}}})},z={render:()=>({components:{TokenBalance:k},template:`
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-semibold mb-4">Full Information</h3>
          <TokenBalance
            :token="token"
            layout="vertical"
            :show-full-name="true"
            :show-price="true"
            :show-secondary-info="true"
            :show-price-change="true"
            class=""
          />
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">Minimal Display</h3>
          <TokenBalance
            :token="token"
            layout="compact"
            :show-token-name="false"
            :show-price-change="false"
            :show-secondary-info="false"
            class=""
          />
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">Price Focus</h3>
          <TokenBalance
            :token="token"
            layout="horizontal"
            :show-usd-value="true"
            :show-price="true"
            :show-price-change="true"
            class=""
          />
        </div>
      </div>
    `,setup(){return{token:i.ETH}}})},S={parameters:{backgrounds:{default:"dark"}},decorators:[()=>({template:'<div class="dark bg-gray-900 p-8"><story /></div>'})],render:()=>({components:{TokenBalance:k},template:`
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-semibold mb-4 text-white">Portfolio in Dark Mode</h3>
          <div class="space-y-3">
            <TokenBalance
              v-for="token in tokens"
              :key="token.symbol"
              :token="token"
              layout="horizontal"
              :show-usd-value="true"
              class=""
            />
          </div>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4 text-white">Different Layouts</h3>
          <div class="grid grid-cols-3 gap-4">
            <TokenBalance
              :token="tokens[0]"
              layout="vertical"
              class=""
            />
            <TokenBalance
              :token="tokens[1]"
              layout="compact"
              class=""
            />
            <TokenBalance
              :token="tokens[2]"
              layout="icon-only"
              size="lg"
              class=""
            />
          </div>
        </div>
      </div>
    `,setup(){return{tokens:[i.ETH,i.USDC,i.MATIC]}}})},A={render:()=>({components:{TokenBalance:k},data(){return{selectedToken:"ETH",selectedLayout:"vertical",selectedSize:"md",showUsdValue:!1,showTokenName:!0,showFullName:!1,showPriceChange:!0,showSecondaryInfo:!0,showPrice:!1,showActions:!1,loading:!1,clickable:!1}},computed:{currentToken(){return i[this.selectedToken]}},template:`
      <div class="space-y-6 max-w-4xl">
        <div class="grid grid-cols-3 gap-6">
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium mb-2">Token</label>
              <select v-model="selectedToken" class="w-full p-2 border rounded-lg">
                <option value="ETH">Ethereum (ETH)</option>
                <option value="USDC">USD Coin (USDC)</option>
                <option value="MATIC">Polygon (MATIC)</option>
                <option value="DAI">Dai (DAI)</option>
                <option value="BTC">Bitcoin (BTC)</option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-medium mb-2">Layout</label>
              <select v-model="selectedLayout" class="w-full p-2 border rounded-lg">
                <option value="vertical">Vertical</option>
                <option value="horizontal">Horizontal</option>
                <option value="compact">Compact</option>
                <option value="icon-only">Icon Only</option>
                <option value="text-only">Text Only</option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-medium mb-2">Size</label>
              <select v-model="selectedSize" class="w-full p-2 border rounded-lg">
                <option value="xs">Extra Small</option>
                <option value="sm">Small</option>
                <option value="md">Medium</option>
                <option value="lg">Large</option>
                <option value="xl">Extra Large</option>
              </select>
            </div>
          </div>

          <div class="space-y-4">
            <div class="space-y-2">
              <label class="flex items-center">
                <input v-model="showUsdValue" type="checkbox" class="mr-2" />
                Show USD Value Primary
              </label>
              <label class="flex items-center">
                <input v-model="showTokenName" type="checkbox" class="mr-2" />
                Show Token Name
              </label>
              <label class="flex items-center">
                <input v-model="showFullName" type="checkbox" class="mr-2" />
                Show Full Name
              </label>
              <label class="flex items-center">
                <input v-model="showPriceChange" type="checkbox" class="mr-2" />
                Show Price Change
              </label>
            </div>
          </div>

          <div class="space-y-4">
            <div class="space-y-2">
              <label class="flex items-center">
                <input v-model="showSecondaryInfo" type="checkbox" class="mr-2" />
                Show Secondary Info
              </label>
              <label class="flex items-center">
                <input v-model="showPrice" type="checkbox" class="mr-2" />
                Show Price Per Token
              </label>
              <label class="flex items-center">
                <input v-model="showActions" type="checkbox" class="mr-2" />
                Show Actions
              </label>
              <label class="flex items-center">
                <input v-model="loading" type="checkbox" class="mr-2" />
                Loading State
              </label>
              <label class="flex items-center">
                <input v-model="clickable" type="checkbox" class="mr-2" />
                Clickable
              </label>
            </div>
          </div>
        </div>

        <div class="border-t pt-6">
          <h3 class="text-lg font-semibold mb-4">Preview</h3>
          <div class="flex items-center justify-center p-8 border rounded-lg bg-gray-50 dark:bg-gray-800">
            <TokenBalance
              :token="currentToken"
              :layout="selectedLayout"
              :size="selectedSize"
              :show-usd-value="showUsdValue"
              :show-token-name="showTokenName"
              :show-full-name="showFullName"
              :show-price-change="showPriceChange"
              :show-secondary-info="showSecondaryInfo"
              :show-price="showPrice"
              :show-actions="showActions"
              :actions="showActions ? sampleActions : []"
              :loading="loading"
              :clickable="clickable"
              class=""
              @click="handleClick"
              @action="handleAction"
            />
          </div>
          <div class="mt-4 text-center">
            <code class="text-sm bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
              layout="{{ selectedLayout }}" size="{{ selectedSize }}" token="{{ selectedToken }}"
            </code>
          </div>
        </div>
      </div>
    `,methods:{handleClick(e){alert(`Clicked on ${e.symbol}`)},handleAction(e,v){alert(`Action "${e}" for ${v.symbol}`)}},setup(){return{sampleActions:P}}})};var O,W,K;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    token: sampleTokens.ETH,
    layout: 'vertical',
    size: 'md'
  }
}`,...(K=(W=g.parameters)==null?void 0:W.docs)==null?void 0:K.source}}};var G,J,Q;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TokenBalance
    },
    template: \`
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-semibold mb-4">Vertical Layout</h3>
          <div class="grid grid-cols-3 gap-4">
            <TokenBalance
              v-for="token in tokens"
              :key="token.symbol"
              :token="token"
              layout="vertical"
              class=""
            />
          </div>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">Horizontal Layout</h3>
          <div class="space-y-3">
            <TokenBalance
              v-for="token in tokens"
              :key="token.symbol"
              :token="token"
              layout="horizontal"
              class=""
            />
          </div>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">Compact Layout</h3>
          <div class="space-y-2">
            <TokenBalance
              v-for="token in tokens"
              :key="token.symbol"
              :token="token"
              layout="compact"
              class="p-3 border rounded-lg"
            />
          </div>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">Icon Only</h3>
          <div class="flex gap-4">
            <TokenBalance
              v-for="token in tokens"
              :key="token.symbol"
              :token="token"
              layout="icon-only"
              size="lg"
              class="p-3 border rounded-lg"
            />
          </div>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">Text Only</h3>
          <div class="space-y-2">
            <TokenBalance
              v-for="token in tokens"
              :key="token.symbol"
              :token="token"
              layout="text-only"
              class="p-3 border rounded-lg"
            />
          </div>
        </div>
      </div>
    \`,
    setup() {
      const tokens = [sampleTokens.ETH, sampleTokens.USDC, sampleTokens.MATIC];
      return {
        tokens
      };
    }
  })
}`,...(Q=(J=b.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var R,X,Y;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TokenBalance
    },
    template: \`
      <div class="space-y-6">
        <div v-for="size in sizes" :key="size">
          <h3 class="text-lg font-semibold mb-4 capitalize">{{ size }} Size</h3>
          <div class="grid grid-cols-3 gap-4">
            <TokenBalance
              :token="token"
              :size="size"
              layout="vertical"
              class=""
            />
            <TokenBalance
              :token="token"
              :size="size"
              layout="horizontal"
              class=""
            />
            <TokenBalance
              :token="token"
              :size="size"
              layout="compact"
              class=""
            />
          </div>
        </div>
      </div>
    \`,
    setup() {
      const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];
      const token = sampleTokens.ETH;
      return {
        sizes,
        token
      };
    }
  })
}`,...(Y=(X=f.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,_,ee;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TokenBalance
    },
    template: \`
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-semibold mb-4">Token Amount Primary</h3>
          <div class="grid grid-cols-2 gap-4">
            <TokenBalance
              v-for="token in tokens"
              :key="token.symbol"
              :token="token"
              layout="vertical"
              :show-usd-value="false"
              class=""
            />
          </div>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">USD Value Primary</h3>
          <div class="grid grid-cols-2 gap-4">
            <TokenBalance
              v-for="token in tokens"
              :key="token.symbol"
              :token="token"
              layout="vertical"
              :show-usd-value="true"
              class=""
            />
          </div>
        </div>
      </div>
    \`,
    setup() {
      const tokens = [sampleTokens.ETH, sampleTokens.BTC];
      return {
        tokens
      };
    }
  })
}`,...(ee=(_=x.parameters)==null?void 0:_.docs)==null?void 0:ee.source}}};var ne,oe,ae;T.parameters={...T.parameters,docs:{...(ne=T.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TokenBalance
    },
    template: \`
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-semibold mb-4">Positive Price Changes</h3>
          <div class="grid grid-cols-2 gap-4">
            <TokenBalance
              v-for="token in positiveTokens"
              :key="token.symbol"
              :token="token"
              layout="horizontal"
              class=""
            />
          </div>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">Negative Price Changes</h3>
          <div class="grid grid-cols-2 gap-4">
            <TokenBalance
              v-for="token in negativeTokens"
              :key="token.symbol"
              :token="token"
              layout="horizontal"
              class=""
            />
          </div>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">Without Price Changes</h3>
          <div class="grid grid-cols-2 gap-4">
            <TokenBalance
              v-for="token in neutralTokens"
              :key="token.symbol"
              :token="token"
              layout="horizontal"
              :show-price-change="false"
              class=""
            />
          </div>
        </div>
      </div>
    \`,
    setup() {
      const positiveTokens = [sampleTokens.ETH, sampleTokens.BTC];
      const negativeTokens = [sampleTokens.MATIC, sampleTokens.DAI];
      const neutralTokens = [sampleTokens.USDC];
      return {
        positiveTokens,
        negativeTokens,
        neutralTokens
      };
    }
  })
}`,...(ae=(oe=T.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var te,se,le;w.parameters={...w.parameters,docs:{...(te=w.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    token: sampleTokens.ETH,
    layout: 'horizontal',
    showActions: true,
    actions: sampleActions
  },
  render: args => ({
    components: {
      TokenBalance
    },
    setup() {
      const handleAction = (actionId: string, token: TokenData) => {
        alert(\`Action "\${actionId}" clicked for \${token.symbol}\`);
      };
      return {
        args,
        handleAction
      };
    },
    template: \`
      <TokenBalance
        v-bind="args"
        @action="handleAction"
        class=""
      />
    \`
  })
}`,...(le=(se=w.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};var ie,ce,re;C.parameters={...C.parameters,docs:{...(ie=C.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TokenBalance
    },
    template: \`
      <div class="space-y-4 max-w-md">
        <h3 class="text-xl font-bold">My Portfolio</h3>
        <div class="space-y-3">
          <TokenBalance
            v-for="token in portfolio"
            :key="token.symbol"
            :token="token"
            layout="horizontal"
            :show-usd-value="true"
            :show-actions="true"
            :actions="actions"
            clickable
            class="hover:shadow-md transition-shadow"
            @click="handleTokenClick"
            @action="handleAction"
          />
        </div>
        <div class="pt-4 border-t">
          <div class="flex justify-between items-center">
            <span class="font-medium">Total Portfolio Value</span>
            <span class="text-lg font-bold text-green-600">{{ totalValue }}</span>
          </div>
        </div>
      </div>
    \`,
    setup() {
      const portfolio = [sampleTokens.ETH, sampleTokens.USDC, sampleTokens.MATIC, sampleTokens.DAI, sampleTokens.BTC];
      const actions = sampleActions;
      const calculateUsdValue = (token: TokenData) => {
        if (!token.usdPrice) return 0;
        const decimals = token.decimals || 18;
        const balance = token.balance / Math.pow(10, decimals);
        return balance * token.usdPrice;
      };
      const totalValue = portfolio.reduce((sum, token) => sum + calculateUsdValue(token), 0).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      });
      const handleTokenClick = (token: TokenData) => {
        alert(\`Clicked on \${token.symbol}\`);
      };
      const handleAction = (actionId: string, token: TokenData) => {
        alert(\`Action "\${actionId}" for \${token.symbol}\`);
      };
      return {
        portfolio,
        actions,
        totalValue,
        handleTokenClick,
        handleAction
      };
    }
  })
}`,...(re=(ce=C.parameters)==null?void 0:ce.docs)==null?void 0:re.source}}};var de,ue,me;B.parameters={...B.parameters,docs:{...(de=B.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TokenBalance
    },
    template: \`
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-semibold mb-4">Basic Loading States</h3>
          <div class="grid grid-cols-2 gap-6">
            <div>
              <h4 class="text-sm font-medium mb-2 text-gray-600">Vertical Layout</h4>
              <TokenBalance
                :token="token"
                layout="vertical"
                loading
                class=""
              />
            </div>
            <div>
              <h4 class="text-sm font-medium mb-2 text-gray-600">Horizontal Layout</h4>
              <TokenBalance
                :token="token"
                layout="horizontal"
                loading
                class=""
              />
            </div>
            <div>
              <h4 class="text-sm font-medium mb-2 text-gray-600">Compact Layout</h4>
              <TokenBalance
                :token="token"
                layout="compact"
                loading
                class=""
              />
            </div>
            <div>
              <h4 class="text-sm font-medium mb-2 text-gray-600">Icon Only</h4>
              <TokenBalance
                :token="token"
                layout="icon-only"
                loading
                class=""
              />
            </div>
          </div>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">Loading with Features</h3>
          <div class="grid grid-cols-1 gap-4">
            <div>
              <h4 class="text-sm font-medium mb-2 text-gray-600">With Actions & Price Changes</h4>
              <TokenBalance
                :token="token"
                layout="horizontal"
                :show-actions="true"
                :actions="actions"
                :show-price-change="true"
                :show-secondary-info="true"
                loading
                class=""
              />
            </div>

            <div>
              <h4 class="text-sm font-medium mb-2 text-gray-600">Vertical with All Features</h4>
              <div class="max-w-xs">
                <TokenBalance
                  :token="token"
                  layout="vertical"
                  :show-actions="true"
                  :actions="actions"
                  :show-price-change="true"
                  :show-secondary-info="true"
                  :show-price="true"
                  loading
                  class=""
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">Different Sizes</h3>
          <div class="grid grid-cols-3 gap-4">
            <div>
              <h4 class="text-sm font-medium mb-2 text-gray-600">Small</h4>
              <TokenBalance
                :token="token"
                layout="horizontal"
                size="sm"
                loading
                class=""
              />
            </div>
            <div>
              <h4 class="text-sm font-medium mb-2 text-gray-600">Medium</h4>
              <TokenBalance
                :token="token"
                layout="horizontal"
                size="md"
                loading
                class=""
              />
            </div>
            <div>
              <h4 class="text-sm font-medium mb-2 text-gray-600">Large</h4>
              <TokenBalance
                :token="token"
                layout="horizontal"
                size="lg"
                loading
                class=""
              />
            </div>
          </div>
        </div>
      </div>
    \`,
    setup() {
      const token = sampleTokens.ETH;
      const actions = sampleActions;
      return {
        token,
        actions
      };
    }
  })
}`,...(me=(ue=B.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var ke,ve,he;z.parameters={...z.parameters,docs:{...(ke=z.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TokenBalance
    },
    template: \`
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-semibold mb-4">Full Information</h3>
          <TokenBalance
            :token="token"
            layout="vertical"
            :show-full-name="true"
            :show-price="true"
            :show-secondary-info="true"
            :show-price-change="true"
            class=""
          />
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">Minimal Display</h3>
          <TokenBalance
            :token="token"
            layout="compact"
            :show-token-name="false"
            :show-price-change="false"
            :show-secondary-info="false"
            class=""
          />
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">Price Focus</h3>
          <TokenBalance
            :token="token"
            layout="horizontal"
            :show-usd-value="true"
            :show-price="true"
            :show-price-change="true"
            class=""
          />
        </div>
      </div>
    \`,
    setup() {
      const token = sampleTokens.ETH;
      return {
        token
      };
    }
  })
}`,...(he=(ve=z.parameters)==null?void 0:ve.docs)==null?void 0:he.source}}};var pe,ye,ge;S.parameters={...S.parameters,docs:{...(pe=S.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  decorators: [() => ({
    template: '<div class="dark bg-gray-900 p-8"><story /></div>'
  })],
  render: () => ({
    components: {
      TokenBalance
    },
    template: \`
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-semibold mb-4 text-white">Portfolio in Dark Mode</h3>
          <div class="space-y-3">
            <TokenBalance
              v-for="token in tokens"
              :key="token.symbol"
              :token="token"
              layout="horizontal"
              :show-usd-value="true"
              class=""
            />
          </div>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4 text-white">Different Layouts</h3>
          <div class="grid grid-cols-3 gap-4">
            <TokenBalance
              :token="tokens[0]"
              layout="vertical"
              class=""
            />
            <TokenBalance
              :token="tokens[1]"
              layout="compact"
              class=""
            />
            <TokenBalance
              :token="tokens[2]"
              layout="icon-only"
              size="lg"
              class=""
            />
          </div>
        </div>
      </div>
    \`,
    setup() {
      const tokens = [sampleTokens.ETH, sampleTokens.USDC, sampleTokens.MATIC];
      return {
        tokens
      };
    }
  })
}`,...(ge=(ye=S.parameters)==null?void 0:ye.docs)==null?void 0:ge.source}}};var be,fe,xe;A.parameters={...A.parameters,docs:{...(be=A.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TokenBalance
    },
    data() {
      return {
        selectedToken: 'ETH',
        selectedLayout: 'vertical' as const,
        selectedSize: 'md' as const,
        showUsdValue: false,
        showTokenName: true,
        showFullName: false,
        showPriceChange: true,
        showSecondaryInfo: true,
        showPrice: false,
        showActions: false,
        loading: false,
        clickable: false
      };
    },
    computed: {
      currentToken() {
        return sampleTokens[this.selectedToken as keyof typeof sampleTokens];
      }
    },
    template: \`
      <div class="space-y-6 max-w-4xl">
        <div class="grid grid-cols-3 gap-6">
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium mb-2">Token</label>
              <select v-model="selectedToken" class="w-full p-2 border rounded-lg">
                <option value="ETH">Ethereum (ETH)</option>
                <option value="USDC">USD Coin (USDC)</option>
                <option value="MATIC">Polygon (MATIC)</option>
                <option value="DAI">Dai (DAI)</option>
                <option value="BTC">Bitcoin (BTC)</option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-medium mb-2">Layout</label>
              <select v-model="selectedLayout" class="w-full p-2 border rounded-lg">
                <option value="vertical">Vertical</option>
                <option value="horizontal">Horizontal</option>
                <option value="compact">Compact</option>
                <option value="icon-only">Icon Only</option>
                <option value="text-only">Text Only</option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-medium mb-2">Size</label>
              <select v-model="selectedSize" class="w-full p-2 border rounded-lg">
                <option value="xs">Extra Small</option>
                <option value="sm">Small</option>
                <option value="md">Medium</option>
                <option value="lg">Large</option>
                <option value="xl">Extra Large</option>
              </select>
            </div>
          </div>

          <div class="space-y-4">
            <div class="space-y-2">
              <label class="flex items-center">
                <input v-model="showUsdValue" type="checkbox" class="mr-2" />
                Show USD Value Primary
              </label>
              <label class="flex items-center">
                <input v-model="showTokenName" type="checkbox" class="mr-2" />
                Show Token Name
              </label>
              <label class="flex items-center">
                <input v-model="showFullName" type="checkbox" class="mr-2" />
                Show Full Name
              </label>
              <label class="flex items-center">
                <input v-model="showPriceChange" type="checkbox" class="mr-2" />
                Show Price Change
              </label>
            </div>
          </div>

          <div class="space-y-4">
            <div class="space-y-2">
              <label class="flex items-center">
                <input v-model="showSecondaryInfo" type="checkbox" class="mr-2" />
                Show Secondary Info
              </label>
              <label class="flex items-center">
                <input v-model="showPrice" type="checkbox" class="mr-2" />
                Show Price Per Token
              </label>
              <label class="flex items-center">
                <input v-model="showActions" type="checkbox" class="mr-2" />
                Show Actions
              </label>
              <label class="flex items-center">
                <input v-model="loading" type="checkbox" class="mr-2" />
                Loading State
              </label>
              <label class="flex items-center">
                <input v-model="clickable" type="checkbox" class="mr-2" />
                Clickable
              </label>
            </div>
          </div>
        </div>

        <div class="border-t pt-6">
          <h3 class="text-lg font-semibold mb-4">Preview</h3>
          <div class="flex items-center justify-center p-8 border rounded-lg bg-gray-50 dark:bg-gray-800">
            <TokenBalance
              :token="currentToken"
              :layout="selectedLayout"
              :size="selectedSize"
              :show-usd-value="showUsdValue"
              :show-token-name="showTokenName"
              :show-full-name="showFullName"
              :show-price-change="showPriceChange"
              :show-secondary-info="showSecondaryInfo"
              :show-price="showPrice"
              :show-actions="showActions"
              :actions="showActions ? sampleActions : []"
              :loading="loading"
              :clickable="clickable"
              class=""
              @click="handleClick"
              @action="handleAction"
            />
          </div>
          <div class="mt-4 text-center">
            <code class="text-sm bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
              layout="{{ selectedLayout }}" size="{{ selectedSize }}" token="{{ selectedToken }}"
            </code>
          </div>
        </div>
      </div>
    \`,
    methods: {
      handleClick(token: TokenData) {
        alert(\`Clicked on \${token.symbol}\`);
      },
      handleAction(actionId: string, token: TokenData) {
        alert(\`Action "\${actionId}" for \${token.symbol}\`);
      }
    },
    setup() {
      return {
        sampleActions
      };
    }
  })
}`,...(xe=(fe=A.parameters)==null?void 0:fe.docs)==null?void 0:xe.source}}};const We=["Default","Layouts","Sizes","UsdDisplay","PriceChanges","WithActions","Portfolio","LoadingStates","CustomizationOptions","DarkMode","Interactive"];export{z as CustomizationOptions,S as DarkMode,g as Default,A as Interactive,b as Layouts,B as LoadingStates,C as Portfolio,T as PriceChanges,f as Sizes,x as UsdDisplay,w as WithActions,We as __namedExportsOrder,Oe as default};
