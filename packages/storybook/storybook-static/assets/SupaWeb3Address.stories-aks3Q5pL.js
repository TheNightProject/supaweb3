import{E as fe,r as N,c as r,b as d,d as c,K as ye,n as l,f as p,t as S,H as he,I as Ce,h as o}from"./vue.esm-bundler-DxM0YtBV.js";const ke=["title"],we=["title"],Se=["title"],Ae={key:0,class:"fixed top-4 right-4 z-50 px-4 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm rounded-lg shadow-lg"},t=fe({__name:"SupaWeb3Address",props:{address:{},ensName:{},variant:{default:"default"},size:{default:"md"},truncate:{type:Boolean,default:!0},truncateLength:{default:4},showCopyButton:{type:Boolean,default:!0},copyOnly:{type:Boolean,default:!1},showAvatar:{type:Boolean,default:!1},avatarPosition:{default:"left"},linkTo:{},className:{},copyTooltip:{default:"Copy address"},toastMessage:{default:"Address copied!"},toastDuration:{default:2e3}},emits:["copy","click"],setup(a,{emit:pe}){const e=a,A=pe,i=N(!1),w=N(!1),B=r(()=>e.ensName||e.address),W=r(()=>{if(e.ensName)return e.ensName;if(!e.truncate||e.address.length<=e.truncateLength*2+6)return e.address;const n=e.address.slice(0,e.truncateLength+2),s=e.address.slice(-e.truncateLength);return`${n}...${s}`}),ue=r(()=>["inline-flex items-center gap-2",e.className].filter(Boolean).join(" ")),be=r(()=>({xs:"text-xs px-2 py-0.5",sm:"text-sm px-2.5 py-1",md:"text-base px-3 py-1.5",lg:"text-lg px-4 py-2",xl:"text-xl px-5 py-2.5"})[e.size]),me=r(()=>({default:"bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700",outline:"border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800",ghost:"text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800",link:"text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline-offset-2 hover:underline"})[e.variant]),E=r(()=>["font-mono rounded-lg transition-all duration-200",be.value,me.value,e.copyOnly?"cursor-default":"cursor-pointer"].join(" ")),ve=r(()=>[{xs:"p-1",sm:"p-1.5",md:"p-2",lg:"p-2.5",xl:"p-3"}[e.size],"rounded-lg transition-all duration-200","text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200","hover:bg-gray-100 dark:hover:bg-gray-800",i.value?"text-green-600 dark:text-green-400":""].join(" ")),z=r(()=>({xs:"w-3 h-3",sm:"w-3.5 h-3.5",md:"w-4 h-4",lg:"w-5 h-5",xl:"w-6 h-6"})[e.size]),L=r(()=>[{xs:"w-5 h-5",sm:"w-6 h-6",md:"w-8 h-8",lg:"w-10 h-10",xl:"w-12 h-12"}[e.size],"rounded-full overflow-hidden"].join(" ")),xe=async()=>{try{await navigator.clipboard.writeText(e.address),i.value=!0,w.value=!0,A("copy",e.address),setTimeout(()=>{i.value=!1,w.value=!1},e.toastDuration)}catch(n){console.error("Failed to copy address:",n)}},ge=()=>{e.linkTo&&window.open(e.linkTo,"_blank"),A("click",e.address)};return(n,s)=>(o(),d("div",{class:l(ue.value)},[a.showAvatar&&a.avatarPosition==="left"?(o(),d("div",{key:0,class:l(L.value)},[...s[0]||(s[0]=[p("div",{class:"bg-gradient-to-br from-blue-500 to-purple-500"},null,-1)])],2)):c("",!0),a.copyOnly?(o(),d("span",{key:2,class:l(E.value),title:B.value||a.address},S(W.value),11,we)):(o(),d("button",{key:1,onClick:ge,class:l(E.value),title:B.value||a.address},S(W.value),11,ke)),a.showAvatar&&a.avatarPosition==="right"?(o(),d("div",{key:3,class:l(L.value)},[...s[1]||(s[1]=[p("div",{class:"bg-gradient-to-br from-blue-500 to-purple-500"},null,-1)])],2)):c("",!0),a.showCopyButton?(o(),d("button",{key:4,onClick:xe,class:l(ve.value),title:a.copyTooltip},[i.value?(o(),d("svg",{key:1,xmlns:"http://www.w3.org/2000/svg",class:l(z.value),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[...s[3]||(s[3]=[p("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"},null,-1)])],2)):(o(),d("svg",{key:0,xmlns:"http://www.w3.org/2000/svg",class:l(z.value),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[...s[2]||(s[2]=[p("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"},null,-1)])],2))],10,Se)):c("",!0),ye(Ce,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"opacity-0 transform scale-95","enter-to-class":"opacity-100 transform scale-100","leave-active-class":"transition ease-in duration-150","leave-from-class":"opacity-100 transform scale-100","leave-to-class":"opacity-0 transform scale-95"},{default:he(()=>[w.value?(o(),d("div",Ae,S(a.toastMessage),1)):c("",!0)]),_:1})],2))}});t.__docgenInfo={exportName:"default",displayName:"SupaWeb3Address",description:"",tags:{},props:[{name:"address",required:!0,type:{name:"string"}},{name:"ensName",required:!1,type:{name:"string"}},{name:"variant",required:!1,type:{name:"AddressVariant"},defaultValue:{func:!1,value:"'default'"}},{name:"size",required:!1,type:{name:"AddressSize"},defaultValue:{func:!1,value:"'md'"}},{name:"truncate",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"truncateLength",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"4"}},{name:"showCopyButton",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"copyOnly",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showAvatar",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"avatarPosition",required:!1,type:{name:"AvatarPosition"},defaultValue:{func:!1,value:"'left'"}},{name:"linkTo",required:!1,type:{name:"string"}},{name:"className",required:!1,type:{name:"string"}},{name:"copyTooltip",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Copy address'"}},{name:"toastMessage",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Address copied!'"}},{name:"toastDuration",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"2000"}}],events:[{name:"copy",type:{names:["string"]}},{name:"click",type:{names:["string"]}}],sourceFiles:["/Users/steve/Projects/tnp.web.supaweb3/packages/ui/src/components/identity/SupaWeb3Address.vue"]};const We={title:"Identity/SupaWeb3Address",component:t,parameters:{layout:"centered",docs:{description:{component:"A smart wallet address display component with truncation, copy functionality, and ENS support. Perfect for showing wallet addresses in a user-friendly format."}}},tags:["autodocs"],argTypes:{address:{control:"text",description:"The wallet address to display"},ensName:{control:"text",description:"Optional ENS name to display instead of address"},variant:{control:"select",options:["default","outline","ghost","link"],description:"Visual style variant"},size:{control:"select",options:["xs","sm","md","lg","xl"],description:"Size of the address display"},truncate:{control:"boolean",description:"Whether to truncate the address"},truncateLength:{control:{type:"range",min:2,max:10,step:1},description:"Number of characters to show at start and end when truncated"},showCopyButton:{control:"boolean",description:"Show copy to clipboard button"},copyOnly:{control:"boolean",description:"Make address non-clickable, only copyable"},showAvatar:{control:"boolean",description:"Show avatar/identicon"},avatarPosition:{control:"select",options:["left","right","none"],description:"Position of the avatar"},linkTo:{control:"text",description:"URL to link to when clicked (e.g., Etherscan)"},className:{control:"text",description:"Additional CSS classes"},copyTooltip:{control:"text",description:"Tooltip text for copy button"},toastMessage:{control:"text",description:"Message to show when copied"},toastDuration:{control:{type:"range",min:500,max:5e3,step:500},description:"Duration of toast message in milliseconds"}}},u={args:{address:"0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"}},b={args:{address:"0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3",ensName:"vitalik.eth"}},m={render:()=>({components:{SupaWeb3Address:t},template:`
      <div class="space-y-4">
        <div class="flex items-center gap-4">
          <span class="text-sm font-medium w-20">Default:</span>
          <SupaWeb3Address
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            variant="default"
          />
        </div>
        <div class="flex items-center gap-4">
          <span class="text-sm font-medium w-20">Outline:</span>
          <SupaWeb3Address
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            variant="outline"
          />
        </div>
        <div class="flex items-center gap-4">
          <span class="text-sm font-medium w-20">Ghost:</span>
          <SupaWeb3Address
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            variant="ghost"
          />
        </div>
        <div class="flex items-center gap-4">
          <span class="text-sm font-medium w-20">Link:</span>
          <SupaWeb3Address
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            variant="link"
          />
        </div>
      </div>
    `})},v={render:()=>({components:{SupaWeb3Address:t},template:`
      <div class="space-y-4">
        <div class="flex items-center gap-4">
          <span class="text-xs font-medium w-12">XS:</span>
          <SupaWeb3Address
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            size="xs"
          />
        </div>
        <div class="flex items-center gap-4">
          <span class="text-sm font-medium w-12">SM:</span>
          <SupaWeb3Address
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            size="sm"
          />
        </div>
        <div class="flex items-center gap-4">
          <span class="text-base font-medium w-12">MD:</span>
          <SupaWeb3Address
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            size="md"
          />
        </div>
        <div class="flex items-center gap-4">
          <span class="text-lg font-medium w-12">LG:</span>
          <SupaWeb3Address
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            size="lg"
          />
        </div>
        <div class="flex items-center gap-4">
          <span class="text-xl font-medium w-12">XL:</span>
          <SupaWeb3Address
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            size="xl"
          />
        </div>
      </div>
    `})},x={render:()=>({components:{SupaWeb3Address:t},template:`
      <div class="space-y-4">
        <div>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Full Address (no truncation):</p>
          <SupaWeb3Address
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            :truncate="false"
          />
        </div>
        <div>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Truncate 2 characters:</p>
          <SupaWeb3Address
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            :truncate-length="2"
          />
        </div>
        <div>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Truncate 4 characters (default):</p>
          <SupaWeb3Address
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            :truncate-length="4"
          />
        </div>
        <div>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Truncate 6 characters:</p>
          <SupaWeb3Address
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            :truncate-length="6"
          />
        </div>
        <div>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Truncate 8 characters:</p>
          <SupaWeb3Address
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            :truncate-length="8"
          />
        </div>
      </div>
    `})},g={render:()=>({components:{SupaWeb3Address:t},template:`
      <div class="space-y-4">
        <div>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Avatar on left:</p>
          <SupaWeb3Address
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            :show-avatar="true"
            avatar-position="left"
          />
        </div>
        <div>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Avatar on right:</p>
          <SupaWeb3Address
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            :show-avatar="true"
            avatar-position="right"
          />
        </div>
        <div>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">With ENS and avatar:</p>
          <SupaWeb3Address
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            ens-name="vitalik.eth"
            :show-avatar="true"
            avatar-position="left"
          />
        </div>
      </div>
    `})},f={render:()=>({components:{SupaWeb3Address:t},template:`
      <div class="space-y-4">
        <div>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">With copy button (default):</p>
          <SupaWeb3Address
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            :show-copy-button="true"
          />
        </div>
        <div>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Without copy button:</p>
          <SupaWeb3Address
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            :show-copy-button="false"
          />
        </div>
        <div>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Copy only (non-clickable):</p>
          <SupaWeb3Address
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            :copy-only="true"
          />
        </div>
        <div>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Custom copy tooltip:</p>
          <SupaWeb3Address
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            copy-tooltip="Copy wallet address"
          />
        </div>
      </div>
    `})},y={args:{address:"0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3",linkTo:"https://etherscan.io/address/0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3",variant:"link"}},h={render:()=>({components:{SupaWeb3Address:t},template:`
      <div class="space-y-6">
        <div class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          <h3 class="text-sm font-semibold mb-3">Transaction List Item</h3>
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <span class="text-sm text-gray-600 dark:text-gray-400">From:</span>
              <SupaWeb3Address
                address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
                size="sm"
                :show-avatar="true"
              />
            </div>
            <span class="text-sm font-medium">0.5 ETH</span>
          </div>
        </div>

        <div class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          <h3 class="text-sm font-semibold mb-3">User Profile Card</h3>
          <div class="flex items-center gap-4">
            <div class="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500"></div>
            <div>
              <SupaWeb3Address
                address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
                ens-name="alice.eth"
                size="lg"
                variant="ghost"
                :show-copy-button="false"
              />
              <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">Member since 2021</p>
            </div>
          </div>
        </div>

        <div class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          <h3 class="text-sm font-semibold mb-3">Compact Header</h3>
          <div class="flex items-center justify-between">
            <span class="text-sm">Connected:</span>
            <SupaWeb3Address
              address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
              size="xs"
              variant="outline"
              :truncate-length="3"
            />
          </div>
        </div>

        <div class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          <h3 class="text-sm font-semibold mb-3">Footer Link</h3>
          <SupaWeb3Address
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            variant="link"
            size="sm"
            link-to="https://etherscan.io/address/0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            :show-copy-button="false"
          />
        </div>
      </div>
    `})},C={render:()=>({components:{SupaWeb3Address:t},data(){return{address:"0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3",ensName:"",variant:"default",size:"md",truncate:!0,truncateLength:4,showCopyButton:!0,copyOnly:!1,showAvatar:!1,avatarPosition:"left",copyCount:0,clickCount:0}},template:`
      <div class="w-full max-w-2xl space-y-6">
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium mb-2">Address</label>
            <input
              v-model="address"
              type="text"
              class="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600"
            />
          </div>

          <div>
            <label class="block text-sm font-medium mb-2">ENS Name</label>
            <input
              v-model="ensName"
              type="text"
              placeholder="vitalik.eth"
              class="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600"
            />
          </div>

          <div>
            <label class="block text-sm font-medium mb-2">Variant</label>
            <select
              v-model="variant"
              class="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600"
            >
              <option value="default">Default</option>
              <option value="outline">Outline</option>
              <option value="ghost">Ghost</option>
              <option value="link">Link</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium mb-2">Size</label>
            <select
              v-model="size"
              class="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600"
            >
              <option value="xs">Extra Small</option>
              <option value="sm">Small</option>
              <option value="md">Medium</option>
              <option value="lg">Large</option>
              <option value="xl">Extra Large</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium mb-2">Truncate Length: {{ truncateLength }}</label>
            <input
              v-model="truncateLength"
              type="range"
              min="2"
              max="10"
              class="w-full"
            />
          </div>

          <div>
            <label class="block text-sm font-medium mb-2">Avatar Position</label>
            <select
              v-model="avatarPosition"
              class="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600"
            >
              <option value="left">Left</option>
              <option value="right">Right</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>

        <div class="flex flex-wrap gap-4">
          <label class="flex items-center gap-2">
            <input v-model="truncate" type="checkbox" />
            <span class="text-sm">Truncate</span>
          </label>

          <label class="flex items-center gap-2">
            <input v-model="showCopyButton" type="checkbox" />
            <span class="text-sm">Show Copy Button</span>
          </label>

          <label class="flex items-center gap-2">
            <input v-model="copyOnly" type="checkbox" />
            <span class="text-sm">Copy Only</span>
          </label>

          <label class="flex items-center gap-2">
            <input v-model="showAvatar" type="checkbox" />
            <span class="text-sm">Show Avatar</span>
          </label>
        </div>

        <div class="border-t pt-6">
          <h3 class="text-lg font-semibold mb-4">Preview</h3>
          <div class="flex items-center justify-center p-8 border rounded-lg bg-gray-50 dark:bg-gray-800">
            <SupaWeb3Address
              :address="address"
              :ens-name="ensName"
              :variant="variant"
              :size="size"
              :truncate="truncate"
              :truncate-length="truncateLength"
              :show-copy-button="showCopyButton"
              :copy-only="copyOnly"
              :show-avatar="showAvatar"
              :avatar-position="avatarPosition"
              @copy="copyCount++"
              @click="clickCount++"
            />
          </div>
          <div class="mt-4 flex gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>Copied: {{ copyCount }} times</span>
            <span>Clicked: {{ clickCount }} times</span>
          </div>
        </div>
      </div>
    `})},k={parameters:{backgrounds:{default:"dark"}},decorators:[()=>({template:'<div class="dark bg-gray-900 p-8"><story /></div>'})],render:()=>({components:{SupaWeb3Address:t},template:`
      <div class="space-y-4">
        <SupaWeb3Address
          address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
          variant="default"
        />
        <SupaWeb3Address
          address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
          variant="outline"
        />
        <SupaWeb3Address
          address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
          variant="ghost"
        />
        <SupaWeb3Address
          address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
          variant="link"
        />
      </div>
    `})};var T,O,P;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    address: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3'
  }
}`,...(P=(O=u.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var V,M,D;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    address: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3',
    ensName: 'vitalik.eth'
  }
}`,...(D=(M=b.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var q,j,F;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => ({
    components: {
      SupaWeb3Address
    },
    template: \`
      <div class="space-y-4">
        <div class="flex items-center gap-4">
          <span class="text-sm font-medium w-20">Default:</span>
          <SupaWeb3Address
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            variant="default"
          />
        </div>
        <div class="flex items-center gap-4">
          <span class="text-sm font-medium w-20">Outline:</span>
          <SupaWeb3Address
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            variant="outline"
          />
        </div>
        <div class="flex items-center gap-4">
          <span class="text-sm font-medium w-20">Ghost:</span>
          <SupaWeb3Address
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            variant="ghost"
          />
        </div>
        <div class="flex items-center gap-4">
          <span class="text-sm font-medium w-20">Link:</span>
          <SupaWeb3Address
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            variant="link"
          />
        </div>
      </div>
    \`
  })
}`,...(F=(j=m.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var I,G,H;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => ({
    components: {
      SupaWeb3Address
    },
    template: \`
      <div class="space-y-4">
        <div class="flex items-center gap-4">
          <span class="text-xs font-medium w-12">XS:</span>
          <SupaWeb3Address
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            size="xs"
          />
        </div>
        <div class="flex items-center gap-4">
          <span class="text-sm font-medium w-12">SM:</span>
          <SupaWeb3Address
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            size="sm"
          />
        </div>
        <div class="flex items-center gap-4">
          <span class="text-base font-medium w-12">MD:</span>
          <SupaWeb3Address
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            size="md"
          />
        </div>
        <div class="flex items-center gap-4">
          <span class="text-lg font-medium w-12">LG:</span>
          <SupaWeb3Address
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            size="lg"
          />
        </div>
        <div class="flex items-center gap-4">
          <span class="text-xl font-medium w-12">XL:</span>
          <SupaWeb3Address
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            size="xl"
          />
        </div>
      </div>
    \`
  })
}`,...(H=(G=v.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var R,U,X;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => ({
    components: {
      SupaWeb3Address
    },
    template: \`
      <div class="space-y-4">
        <div>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Full Address (no truncation):</p>
          <SupaWeb3Address
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            :truncate="false"
          />
        </div>
        <div>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Truncate 2 characters:</p>
          <SupaWeb3Address
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            :truncate-length="2"
          />
        </div>
        <div>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Truncate 4 characters (default):</p>
          <SupaWeb3Address
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            :truncate-length="4"
          />
        </div>
        <div>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Truncate 6 characters:</p>
          <SupaWeb3Address
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            :truncate-length="6"
          />
        </div>
        <div>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Truncate 8 characters:</p>
          <SupaWeb3Address
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            :truncate-length="8"
          />
        </div>
      </div>
    \`
  })
}`,...(X=(U=x.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var $,K,J;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => ({
    components: {
      SupaWeb3Address
    },
    template: \`
      <div class="space-y-4">
        <div>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Avatar on left:</p>
          <SupaWeb3Address
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            :show-avatar="true"
            avatar-position="left"
          />
        </div>
        <div>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Avatar on right:</p>
          <SupaWeb3Address
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            :show-avatar="true"
            avatar-position="right"
          />
        </div>
        <div>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">With ENS and avatar:</p>
          <SupaWeb3Address
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            ens-name="vitalik.eth"
            :show-avatar="true"
            avatar-position="left"
          />
        </div>
      </div>
    \`
  })
}`,...(J=(K=g.parameters)==null?void 0:K.docs)==null?void 0:J.source}}};var Q,Y,Z;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => ({
    components: {
      SupaWeb3Address
    },
    template: \`
      <div class="space-y-4">
        <div>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">With copy button (default):</p>
          <SupaWeb3Address
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            :show-copy-button="true"
          />
        </div>
        <div>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Without copy button:</p>
          <SupaWeb3Address
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            :show-copy-button="false"
          />
        </div>
        <div>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Copy only (non-clickable):</p>
          <SupaWeb3Address
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            :copy-only="true"
          />
        </div>
        <div>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Custom copy tooltip:</p>
          <SupaWeb3Address
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            copy-tooltip="Copy wallet address"
          />
        </div>
      </div>
    \`
  })
}`,...(Z=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var _,ee,ae;y.parameters={...y.parameters,docs:{...(_=y.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    address: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3',
    linkTo: 'https://etherscan.io/address/0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3',
    variant: 'link'
  }
}`,...(ae=(ee=y.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var se,te,ne;h.parameters={...h.parameters,docs:{...(se=h.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => ({
    components: {
      SupaWeb3Address
    },
    template: \`
      <div class="space-y-6">
        <div class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          <h3 class="text-sm font-semibold mb-3">Transaction List Item</h3>
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <span class="text-sm text-gray-600 dark:text-gray-400">From:</span>
              <SupaWeb3Address
                address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
                size="sm"
                :show-avatar="true"
              />
            </div>
            <span class="text-sm font-medium">0.5 ETH</span>
          </div>
        </div>

        <div class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          <h3 class="text-sm font-semibold mb-3">User Profile Card</h3>
          <div class="flex items-center gap-4">
            <div class="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500"></div>
            <div>
              <SupaWeb3Address
                address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
                ens-name="alice.eth"
                size="lg"
                variant="ghost"
                :show-copy-button="false"
              />
              <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">Member since 2021</p>
            </div>
          </div>
        </div>

        <div class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          <h3 class="text-sm font-semibold mb-3">Compact Header</h3>
          <div class="flex items-center justify-between">
            <span class="text-sm">Connected:</span>
            <SupaWeb3Address
              address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
              size="xs"
              variant="outline"
              :truncate-length="3"
            />
          </div>
        </div>

        <div class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          <h3 class="text-sm font-semibold mb-3">Footer Link</h3>
          <SupaWeb3Address
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            variant="link"
            size="sm"
            link-to="https://etherscan.io/address/0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            :show-copy-button="false"
          />
        </div>
      </div>
    \`
  })
}`,...(ne=(te=h.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var re,de,oe;C.parameters={...C.parameters,docs:{...(re=C.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => ({
    components: {
      SupaWeb3Address
    },
    data() {
      return {
        address: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3',
        ensName: '',
        variant: 'default' as const,
        size: 'md' as const,
        truncate: true,
        truncateLength: 4,
        showCopyButton: true,
        copyOnly: false,
        showAvatar: false,
        avatarPosition: 'left' as const,
        copyCount: 0,
        clickCount: 0
      };
    },
    template: \`
      <div class="w-full max-w-2xl space-y-6">
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium mb-2">Address</label>
            <input
              v-model="address"
              type="text"
              class="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600"
            />
          </div>

          <div>
            <label class="block text-sm font-medium mb-2">ENS Name</label>
            <input
              v-model="ensName"
              type="text"
              placeholder="vitalik.eth"
              class="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600"
            />
          </div>

          <div>
            <label class="block text-sm font-medium mb-2">Variant</label>
            <select
              v-model="variant"
              class="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600"
            >
              <option value="default">Default</option>
              <option value="outline">Outline</option>
              <option value="ghost">Ghost</option>
              <option value="link">Link</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium mb-2">Size</label>
            <select
              v-model="size"
              class="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600"
            >
              <option value="xs">Extra Small</option>
              <option value="sm">Small</option>
              <option value="md">Medium</option>
              <option value="lg">Large</option>
              <option value="xl">Extra Large</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium mb-2">Truncate Length: {{ truncateLength }}</label>
            <input
              v-model="truncateLength"
              type="range"
              min="2"
              max="10"
              class="w-full"
            />
          </div>

          <div>
            <label class="block text-sm font-medium mb-2">Avatar Position</label>
            <select
              v-model="avatarPosition"
              class="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600"
            >
              <option value="left">Left</option>
              <option value="right">Right</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>

        <div class="flex flex-wrap gap-4">
          <label class="flex items-center gap-2">
            <input v-model="truncate" type="checkbox" />
            <span class="text-sm">Truncate</span>
          </label>

          <label class="flex items-center gap-2">
            <input v-model="showCopyButton" type="checkbox" />
            <span class="text-sm">Show Copy Button</span>
          </label>

          <label class="flex items-center gap-2">
            <input v-model="copyOnly" type="checkbox" />
            <span class="text-sm">Copy Only</span>
          </label>

          <label class="flex items-center gap-2">
            <input v-model="showAvatar" type="checkbox" />
            <span class="text-sm">Show Avatar</span>
          </label>
        </div>

        <div class="border-t pt-6">
          <h3 class="text-lg font-semibold mb-4">Preview</h3>
          <div class="flex items-center justify-center p-8 border rounded-lg bg-gray-50 dark:bg-gray-800">
            <SupaWeb3Address
              :address="address"
              :ens-name="ensName"
              :variant="variant"
              :size="size"
              :truncate="truncate"
              :truncate-length="truncateLength"
              :show-copy-button="showCopyButton"
              :copy-only="copyOnly"
              :show-avatar="showAvatar"
              :avatar-position="avatarPosition"
              @copy="copyCount++"
              @click="clickCount++"
            />
          </div>
          <div class="mt-4 flex gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>Copied: {{ copyCount }} times</span>
            <span>Clicked: {{ clickCount }} times</span>
          </div>
        </div>
      </div>
    \`
  })
}`,...(oe=(de=C.parameters)==null?void 0:de.docs)==null?void 0:oe.source}}};var le,ie,ce;k.parameters={...k.parameters,docs:{...(le=k.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
      SupaWeb3Address
    },
    template: \`
      <div class="space-y-4">
        <SupaWeb3Address
          address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
          variant="default"
        />
        <SupaWeb3Address
          address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
          variant="outline"
        />
        <SupaWeb3Address
          address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
          variant="ghost"
        />
        <SupaWeb3Address
          address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
          variant="link"
        />
      </div>
    \`
  })
}`,...(ce=(ie=k.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};const Ee=["Default","WithENS","Variants","Sizes","TruncationOptions","WithAvatar","CopyOptions","LinkedAddress","RealWorldExamples","Interactive","DarkMode"];export{f as CopyOptions,k as DarkMode,u as Default,C as Interactive,y as LinkedAddress,h as RealWorldExamples,v as Sizes,x as TruncationOptions,m as Variants,g as WithAvatar,b as WithENS,Ee as __namedExportsOrder,We as default};
