import{E as qe,r as N,c as s,o as Le,i as F,b as r,d as I,n as d,p as De,t as q,f as Pe,h as i}from"./vue.esm-bundler-DxM0YtBV.js";const Re=["src","alt"],je=["innerHTML"],Ue=["title"],t=qe({__name:"SupaWeb3Avatar",props:{address:{},ensName:{},ensAvatar:{},src:{},alt:{default:"User avatar"},size:{default:"md"},shape:{default:"rounded"},showInitials:{type:Boolean,default:!0},initials:{},status:{},showStatus:{type:Boolean,default:!1},statusTooltip:{default:""},badge:{},badgePosition:{default:"top-right"},className:{},generatedType:{default:"gradient"},customColors:{}},emits:["click","error"],setup(n,{emit:ye}){const e=n,Se=ye,b=N(!1),z=N(null),B=s(()=>b.value?null:e.src||e.ensAvatar),we=s(()=>e.initials?e.initials:e.ensName?e.ensName.split(".")[0].slice(0,2).toUpperCase():e.address?e.address.slice(2,4).toUpperCase():"??"),Ae=s(()=>["relative inline-block",e.className].filter(Boolean).join(" ")),ke=s(()=>({xs:"w-6 h-6",sm:"w-8 h-8",md:"w-10 h-10",lg:"w-12 h-12",xl:"w-14 h-14","2xl":"w-16 h-16","3xl":"w-24 h-24"})[e.size]),We=s(()=>({circle:"rounded-full",square:"rounded-md",rounded:"rounded-xl"})[e.shape]),C=s(()=>[ke.value,We.value,"overflow-hidden object-cover shadow-sm ring-1 ring-black/5 dark:ring-white/10"].join(" ")),ze=s(()=>{const a=e.address||e.ensName||"";if(!a)return{};const l=a.split("").reduce((o,p)=>p.charCodeAt(0)+((o<<5)-o),0),c=[["#667EEA","#764BA2"],["#F093FB","#F5576C"],["#4FACFE","#00F2FE"],["#43E97B","#38F9D7"],["#FA709A","#FEE140"],["#30CFD0","#330867"],["#A8EDEA","#FED6E3"],["#FF6B6B","#FFE66D"]],Ie=["#3B82F6","#10B981","#EF4444","#F59E0B","#6366F1","#EC4899","#06B6D4","#10B981"],E=Math.abs(l)%c.length;if(e.generatedType==="gradient"){const[o,p]=c[E];return{background:`linear-gradient(135deg, ${o}, ${p})`}}else if(e.generatedType==="pattern"){const[o,p]=c[E];return{background:`linear-gradient(45deg, ${o}, ${p})`}}else return{backgroundColor:Ie[E]}}),Ce=s(()=>{const a="flex items-center justify-center text-white";return!e.address&&!e.ensName?`${a} bg-gray-200 dark:bg-gray-700 !text-gray-500 dark:!text-gray-400`:a}),Ee=s(()=>`${{xs:"text-[10px]",sm:"text-[13px]",md:"text-base",lg:"text-xl",xl:"text-2xl","2xl":"text-3xl","3xl":"text-5xl"}[e.size]} font-bold text-white leading-none`),Be=s(()=>({xs:"w-3 h-3",sm:"w-4 h-4",md:"w-5 h-5",lg:"w-6 h-6",xl:"w-7 h-7","2xl":"w-8 h-8","3xl":"w-12 h-12"})[e.size]),Te=s(()=>{const a={xs:"w-1.5 h-1.5",sm:"w-2 h-2",md:"w-2.5 h-2.5",lg:"w-3 h-3",xl:"w-3.5 h-3.5","2xl":"w-4 h-4","3xl":"w-5 h-5"},l={circle:"bottom-0 right-0",square:"bottom-0.5 right-0.5",rounded:"bottom-0.5 right-0.5"},c={online:"bg-green-500",offline:"bg-gray-400 dark:bg-gray-600",away:"bg-yellow-500",busy:"bg-red-500"};return["absolute",a[e.size],l[e.shape],c[e.status||"offline"],"rounded-full","ring-2 ring-white dark:ring-gray-900"].join(" ")}),Ne=s(()=>["absolute",{"top-right":"top-0 right-0 -translate-y-1/3 translate-x-1/3","top-left":"top-0 left-0 -translate-y-1/3 -translate-x-1/3","bottom-right":"bottom-0 right-0 translate-y-1/3 translate-x-1/3","bottom-left":"bottom-0 left-0 translate-y-1/3 -translate-x-1/3"}[e.badgePosition||"top-right"],"px-1.5 py-0.5","text-xs font-medium","bg-red-500 text-white","rounded-full","ring-2 ring-white dark:ring-gray-900"].join(" ")),Fe=()=>{b.value=!0,Se("error",new Error("Failed to load image"))},T=()=>{z.value=null};return Le(()=>{e.address&&!e.src&&!e.ensAvatar&&T()}),F(()=>e.address,()=>{e.address&&!e.src&&!e.ensAvatar&&T()}),F(()=>e.src,()=>{b.value=!1}),(a,l)=>(i(),r("div",{class:d(Ae.value)},[B.value&&!b.value?(i(),r("img",{key:0,src:B.value,alt:n.alt,class:d(C.value),onError:Fe},null,42,Re)):z.value?(i(),r("div",{key:1,class:d(C.value),innerHTML:z.value},null,10,je)):(i(),r("div",{key:2,class:d([C.value,Ce.value]),style:De(ze.value)},[(n.address||n.ensName)&&n.showInitials?(i(),r("span",{key:0,class:d(Ee.value)},q(we.value),3)):(i(),r("svg",{key:1,class:d(Be.value),fill:"currentColor",viewBox:"0 0 24 24"},[...l[0]||(l[0]=[Pe("path",{d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"},null,-1)])],2))],6)),n.showStatus&&n.status?(i(),r("div",{key:3,class:d(Te.value),title:n.statusTooltip},null,10,Ue)):I("",!0),n.badge?(i(),r("div",{key:4,class:d(Ne.value)},q(n.badge),3)):I("",!0)],2))}});t.__docgenInfo={exportName:"default",displayName:"SupaWeb3Avatar",description:"",tags:{},props:[{name:"address",required:!1,type:{name:"string"}},{name:"ensName",required:!1,type:{name:"string"}},{name:"ensAvatar",required:!1,type:{name:"string"}},{name:"src",required:!1,type:{name:"string"}},{name:"alt",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'User avatar'"}},{name:"size",required:!1,type:{name:"AvatarSize"},defaultValue:{func:!1,value:"'md'"}},{name:"shape",required:!1,type:{name:"AvatarShape"},defaultValue:{func:!1,value:"'rounded'"}},{name:"showInitials",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"initials",required:!1,type:{name:"string"}},{name:"status",required:!1,type:{name:"AvatarStatus"}},{name:"showStatus",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"statusTooltip",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"badge",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"badgePosition",required:!1,type:{name:"union",elements:[{name:'"top-right"'},{name:'"top-left"'},{name:'"bottom-right"'},{name:'"bottom-left"'}]},defaultValue:{func:!1,value:"'top-right'"}},{name:"className",required:!1,type:{name:"string"}},{name:"generatedType",required:!1,type:{name:"union",elements:[{name:'"gradient"'},{name:'"pattern"'},{name:'"solid"'}]},defaultValue:{func:!1,value:"'gradient'"}},{name:"customColors",required:!1,type:{name:"Array",elements:[{name:"string"}]}}],events:[{name:"click",type:{names:["MouseEvent"]}},{name:"error",type:{names:["Error"]}}],sourceFiles:["/Users/steve/Projects/tnp.web.supaweb3/packages/ui/src/components/identity/SupaWeb3Avatar.vue"]};const Ge={title:"Identity/SupaWeb3Avatar",component:t,parameters:{layout:"centered",docs:{description:{component:"A versatile avatar component for Web3 profiles with generated avatars from addresses, ENS support, status indicators, and badges."}}},tags:["autodocs"],argTypes:{address:{control:"text",description:"Wallet address for generating avatar"},ensName:{control:"text",description:"ENS name for the user"},ensAvatar:{control:"text",description:"ENS avatar URL"},src:{control:"text",description:"Direct image URL for avatar"},alt:{control:"text",description:"Alt text for the avatar image"},size:{control:"select",options:["xs","sm","md","lg","xl","2xl","3xl"],description:"Size of the avatar"},shape:{control:"select",options:["circle","square","rounded"],description:"Shape of the avatar"},showInitials:{control:"boolean",description:"Show initials instead of icon for generated avatars"},initials:{control:"text",description:"Custom initials to display"},status:{control:"select",options:["online","offline","away","busy"],description:"User status indicator"},showStatus:{control:"boolean",description:"Show status indicator"},statusTooltip:{control:"text",description:"Tooltip for status indicator"},badge:{control:"text",description:"Badge content (text or number)"},badgePosition:{control:"select",options:["top-right","top-left","bottom-right","bottom-left"],description:"Position of the badge"},className:{control:"text",description:"Additional CSS classes"},generatedType:{control:"select",options:["gradient","pattern","solid"],description:"Type of generated avatar"}}},u={args:{address:"0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3",shape:"rounded"}},g={args:{src:"https://i.pravatar.cc/150?img=3",alt:"User Avatar"}},m={args:{ensName:"vitalik.eth",address:"0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045",showInitials:!0}},v={render:()=>({components:{SupaWeb3Avatar:t},template:`
      <div class="flex items-center gap-4">
        <SupaWeb3Avatar
          address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
          size="xs"
          shape="rounded"
        />
        <SupaWeb3Avatar
          address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
          size="sm"
          shape="rounded"
        />
        <SupaWeb3Avatar
          address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
          size="md"
          shape="rounded"
        />
        <SupaWeb3Avatar
          address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
          size="lg"
          shape="rounded"
        />
        <SupaWeb3Avatar
          address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
          size="xl"
          shape="rounded"
        />
        <SupaWeb3Avatar
          address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
          size="2xl"
          shape="rounded"
        />
        <SupaWeb3Avatar
          address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
          size="3xl"
          shape="rounded"
        />
      </div>
    `})},x={render:()=>({components:{SupaWeb3Avatar:t},template:`
      <div class="flex items-center gap-6">
        <div class="text-center">
          <SupaWeb3Avatar
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            shape="circle"
            size="lg"
          />
          <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Circle</p>
        </div>
        <div class="text-center">
          <SupaWeb3Avatar
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            shape="square"
            size="lg"
          />
          <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Square</p>
        </div>
        <div class="text-center">
          <SupaWeb3Avatar
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            shape="rounded"
            size="lg"
          />
          <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Rounded</p>
        </div>
      </div>
    `})},f={render:()=>({components:{SupaWeb3Avatar:t},template:`
      <div class="space-y-4">
        <div>
          <h3 class="text-sm font-medium mb-3">Gradient Avatars</h3>
          <div class="flex items-center gap-3">
            <SupaWeb3Avatar
              address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
              generated-type="gradient"
              size="lg"
              shape="rounded"
              :show-initials="true"
            />
            <SupaWeb3Avatar
              address="0x1234567890123456789012345678901234567890"
              generated-type="gradient"
              size="lg"
              shape="rounded"
              :show-initials="true"
            />
            <SupaWeb3Avatar
              address="0xabcdefabcdefabcdefabcdefabcdefabcdefabcd"
              generated-type="gradient"
              size="lg"
              shape="rounded"
              :show-initials="true"
            />
            <SupaWeb3Avatar
              address="0x9876543210987654321098765432109876543210"
              generated-type="gradient"
              size="lg"
              shape="rounded"
              :show-initials="true"
            />
          </div>
        </div>

        <div>
          <h3 class="text-sm font-medium mb-3">Solid Color Avatars</h3>
          <div class="flex items-center gap-3">
            <SupaWeb3Avatar
              address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
              generated-type="solid"
              size="lg"
            />
            <SupaWeb3Avatar
              address="0x1234567890123456789012345678901234567890"
              generated-type="solid"
              size="lg"
            />
            <SupaWeb3Avatar
              address="0xabcdefabcdefabcdefabcdefabcdefabcdefabcd"
              generated-type="solid"
              size="lg"
            />
            <SupaWeb3Avatar
              address="0x9876543210987654321098765432109876543210"
              generated-type="solid"
              size="lg"
            />
          </div>
        </div>

        <div>
          <h3 class="text-sm font-medium mb-3">With Initials</h3>
          <div class="flex items-center gap-3">
            <SupaWeb3Avatar
              address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
              :show-initials="true"
              size="lg"
            />
            <SupaWeb3Avatar
              ens-name="alice.eth"
              :show-initials="true"
              size="lg"
            />
            <SupaWeb3Avatar
              initials="JD"
              :show-initials="true"
              size="lg"
            />
            <SupaWeb3Avatar
              ens-name="cryptopunk.eth"
              :show-initials="true"
              size="lg"
            />
          </div>
        </div>
      </div>
    `})},h={render:()=>({components:{SupaWeb3Avatar:t},template:`
      <div class="flex items-center gap-6">
        <div class="text-center">
          <SupaWeb3Avatar
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            :show-status="true"
            status="online"
            status-tooltip="Active now"
            size="lg"
          />
          <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Online</p>
        </div>
        <div class="text-center">
          <SupaWeb3Avatar
            address="0x1234567890123456789012345678901234567890"
            :show-status="true"
            status="away"
            status-tooltip="Away"
            size="lg"
          />
          <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Away</p>
        </div>
        <div class="text-center">
          <SupaWeb3Avatar
            address="0xabcdefabcdefabcdefabcdefabcdefabcdefabcd"
            :show-status="true"
            status="busy"
            status-tooltip="Do not disturb"
            size="lg"
          />
          <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Busy</p>
        </div>
        <div class="text-center">
          <SupaWeb3Avatar
            address="0x9876543210987654321098765432109876543210"
            :show-status="true"
            status="offline"
            status-tooltip="Offline"
            size="lg"
          />
          <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Offline</p>
        </div>
      </div>
    `})},y={render:()=>({components:{SupaWeb3Avatar:t},template:`
      <div class="grid grid-cols-2 gap-8">
        <div class="flex items-center gap-4">
          <SupaWeb3Avatar
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            badge="3"
            badge-position="top-right"
            size="lg"
          />
          <span class="text-sm">Top Right Badge</span>
        </div>

        <div class="flex items-center gap-4">
          <SupaWeb3Avatar
            address="0x1234567890123456789012345678901234567890"
            badge="New"
            badge-position="top-left"
            size="lg"
          />
          <span class="text-sm">Top Left Badge</span>
        </div>

        <div class="flex items-center gap-4">
          <SupaWeb3Avatar
            address="0xabcdefabcdefabcdefabcdefabcdefabcdefabcd"
            badge="99+"
            badge-position="bottom-right"
            size="lg"
          />
          <span class="text-sm">Bottom Right Badge</span>
        </div>

        <div class="flex items-center gap-4">
          <SupaWeb3Avatar
            address="0x9876543210987654321098765432109876543210"
            badge="!"
            badge-position="bottom-left"
            size="lg"
          />
          <span class="text-sm">Bottom Left Badge</span>
        </div>
      </div>
    `})},S={render:()=>({components:{SupaWeb3Avatar:t},template:`
      <div class="flex items-center gap-6">
        <SupaWeb3Avatar
          address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
          :show-status="true"
          status="online"
          badge="3"
          size="xl"
        />
        <SupaWeb3Avatar
          ens-name="alice.eth"
          :show-initials="true"
          :show-status="true"
          status="away"
          badge="New"
          size="xl"
        />
        <SupaWeb3Avatar
          src="https://i.pravatar.cc/150?img=5"
          :show-status="true"
          status="busy"
          badge="99+"
          size="xl"
        />
      </div>
    `})},w={render:()=>({components:{SupaWeb3Avatar:t},template:`
      <div class="space-y-6">
        <div>
          <h3 class="text-sm font-medium mb-3">Stacked Avatars</h3>
          <div class="flex -space-x-3">
            <SupaWeb3Avatar
              address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
              size="lg"
              class="ring-2 ring-white dark:ring-gray-800"
            />
            <SupaWeb3Avatar
              address="0x1234567890123456789012345678901234567890"
              size="lg"
              class="ring-2 ring-white dark:ring-gray-800"
            />
            <SupaWeb3Avatar
              address="0xabcdefabcdefabcdefabcdefabcdefabcdefabcd"
              size="lg"
              class="ring-2 ring-white dark:ring-gray-800"
            />
            <SupaWeb3Avatar
              address="0x9876543210987654321098765432109876543210"
              size="lg"
              class="ring-2 ring-white dark:ring-gray-800"
            />
            <div class="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-sm font-medium ring-2 ring-white dark:ring-gray-800">
              +5
            </div>
          </div>
        </div>

        <div>
          <h3 class="text-sm font-medium mb-3">Avatar List</h3>
          <div class="flex gap-2">
            <SupaWeb3Avatar
              address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
              size="md"
            />
            <SupaWeb3Avatar
              address="0x1234567890123456789012345678901234567890"
              size="md"
            />
            <SupaWeb3Avatar
              address="0xabcdefabcdefabcdefabcdefabcdefabcdefabcd"
              size="md"
            />
            <SupaWeb3Avatar
              address="0x9876543210987654321098765432109876543210"
              size="md"
            />
          </div>
        </div>
      </div>
    `})},A={render:()=>({components:{SupaWeb3Avatar:t},template:`
      <div class="space-y-6">
        <div class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          <h3 class="text-sm font-semibold mb-3">User Profile Card</h3>
          <div class="flex items-center gap-4">
            <SupaWeb3Avatar
              address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
              size="2xl"
              :show-status="true"
              status="online"
            />
            <div>
              <h4 class="font-semibold">Alice.eth</h4>
              <p class="text-sm text-gray-600 dark:text-gray-400">0x742d...bEb3</p>
              <div class="flex items-center gap-2 mt-1">
                <span class="text-xs px-2 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded">Verified</span>
                <span class="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded">NFT Holder</span>
              </div>
            </div>
          </div>
        </div>

        <div class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          <h3 class="text-sm font-semibold mb-3">Comment Thread</h3>
          <div class="space-y-3">
            <div class="flex gap-3">
              <SupaWeb3Avatar
                address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
                size="sm"
              />
              <div class="flex-1">
                <p class="text-sm font-medium">0x742d...bEb3</p>
                <p class="text-sm text-gray-600 dark:text-gray-400">Great project! Looking forward to the next update.</p>
              </div>
            </div>
            <div class="flex gap-3">
              <SupaWeb3Avatar
                address="0x1234567890123456789012345678901234567890"
                size="sm"
              />
              <div class="flex-1">
                <p class="text-sm font-medium">0x1234...7890</p>
                <p class="text-sm text-gray-600 dark:text-gray-400">Agreed! The UI looks amazing.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          <h3 class="text-sm font-semibold mb-3">Transaction History</h3>
          <div class="space-y-2">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <SupaWeb3Avatar
                  address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
                  size="xs"
                />
                <span class="text-sm">Sent to 0xabcd...efab</span>
              </div>
              <span class="text-sm font-medium">-0.5 ETH</span>
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <SupaWeb3Avatar
                  address="0x9876543210987654321098765432109876543210"
                  size="xs"
                />
                <span class="text-sm">Received from 0x9876...3210</span>
              </div>
              <span class="text-sm font-medium text-green-600 dark:text-green-400">+1.2 ETH</span>
            </div>
          </div>
        </div>

        <div class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          <h3 class="text-sm font-semibold mb-3">Team Members</h3>
          <div class="flex items-center gap-4">
            <SupaWeb3Avatar
              src="https://i.pravatar.cc/150?img=3"
              :show-status="true"
              status="online"
              size="lg"
            />
            <SupaWeb3Avatar
              src="https://i.pravatar.cc/150?img=5"
              :show-status="true"
              status="away"
              badge="2"
              size="lg"
            />
            <SupaWeb3Avatar
              src="https://i.pravatar.cc/150?img=8"
              :show-status="true"
              status="offline"
              size="lg"
            />
            <SupaWeb3Avatar
              address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
              :show-status="true"
              status="busy"
              size="lg"
            />
          </div>
        </div>
      </div>
    `})},k={render:()=>({components:{SupaWeb3Avatar:t},data(){return{address:"0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3",ensName:"",src:"",size:"lg",shape:"circle",generatedType:"gradient",showInitials:!1,initials:"",showStatus:!1,status:"online",badge:"",badgePosition:"top-right"}},template:`
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
            <label class="block text-sm font-medium mb-2">Image URL</label>
            <input
              v-model="src"
              type="text"
              placeholder="https://..."
              class="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600"
            />
          </div>

          <div>
            <label class="block text-sm font-medium mb-2">Custom Initials</label>
            <input
              v-model="initials"
              type="text"
              maxlength="2"
              class="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600"
            />
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
              <option value="2xl">2X Large</option>
              <option value="3xl">3X Large</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium mb-2">Shape</label>
            <select
              v-model="shape"
              class="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600"
            >
              <option value="circle">Circle</option>
              <option value="square">Square</option>
              <option value="rounded">Rounded</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium mb-2">Generated Type</label>
            <select
              v-model="generatedType"
              class="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600"
            >
              <option value="gradient">Gradient</option>
              <option value="solid">Solid</option>
              <option value="pattern">Pattern</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium mb-2">Status</label>
            <select
              v-model="status"
              class="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600"
            >
              <option value="online">Online</option>
              <option value="away">Away</option>
              <option value="busy">Busy</option>
              <option value="offline">Offline</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium mb-2">Badge</label>
            <input
              v-model="badge"
              type="text"
              placeholder="3, New, 99+, etc."
              class="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600"
            />
          </div>

          <div>
            <label class="block text-sm font-medium mb-2">Badge Position</label>
            <select
              v-model="badgePosition"
              class="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600"
            >
              <option value="top-right">Top Right</option>
              <option value="top-left">Top Left</option>
              <option value="bottom-right">Bottom Right</option>
              <option value="bottom-left">Bottom Left</option>
            </select>
          </div>
        </div>

        <div class="flex flex-wrap gap-4">
          <label class="flex items-center gap-2">
            <input v-model="showInitials" type="checkbox" />
            <span class="text-sm">Show Initials</span>
          </label>

          <label class="flex items-center gap-2">
            <input v-model="showStatus" type="checkbox" />
            <span class="text-sm">Show Status</span>
          </label>
        </div>

        <div class="border-t pt-6">
          <h3 class="text-lg font-semibold mb-4">Preview</h3>
          <div class="flex items-center justify-center p-8 border rounded-lg bg-gray-50 dark:bg-gray-800">
            <SupaWeb3Avatar
              :address="address"
              :ens-name="ensName"
              :src="src"
              :size="size"
              :shape="shape"
              :generated-type="generatedType"
              :show-initials="showInitials"
              :initials="initials"
              :show-status="showStatus"
              :status="status"
              :badge="badge"
              :badge-position="badgePosition"
            />
          </div>
        </div>
      </div>
    `})},W={parameters:{backgrounds:{default:"dark"}},decorators:[()=>({template:'<div class="dark bg-gray-900 p-8"><story /></div>'})],render:()=>({components:{SupaWeb3Avatar:t},template:`
      <div class="flex items-center gap-4">
        <SupaWeb3Avatar
          address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
          size="lg"
        />
        <SupaWeb3Avatar
          address="0x1234567890123456789012345678901234567890"
          size="lg"
          :show-status="true"
          status="online"
        />
        <SupaWeb3Avatar
          ens-name="alice.eth"
          :show-initials="true"
          size="lg"
          badge="3"
        />
        <SupaWeb3Avatar
          src="https://i.pravatar.cc/150?img=8"
          size="lg"
          :show-status="true"
          status="away"
        />
      </div>
    `})};var L,D,P;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    address: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3',
    shape: 'rounded'
  }
}`,...(P=(D=u.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var R,j,U;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    src: 'https://i.pravatar.cc/150?img=3',
    alt: 'User Avatar'
  }
}`,...(U=(j=g.parameters)==null?void 0:j.docs)==null?void 0:U.source}}};var M,G,V;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ensName: 'vitalik.eth',
    address: '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045',
    showInitials: true
  }
}`,...(V=(G=m.parameters)==null?void 0:G.docs)==null?void 0:V.source}}};var O,H,$;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => ({
    components: {
      SupaWeb3Avatar
    },
    template: \`
      <div class="flex items-center gap-4">
        <SupaWeb3Avatar
          address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
          size="xs"
          shape="rounded"
        />
        <SupaWeb3Avatar
          address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
          size="sm"
          shape="rounded"
        />
        <SupaWeb3Avatar
          address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
          size="md"
          shape="rounded"
        />
        <SupaWeb3Avatar
          address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
          size="lg"
          shape="rounded"
        />
        <SupaWeb3Avatar
          address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
          size="xl"
          shape="rounded"
        />
        <SupaWeb3Avatar
          address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
          size="2xl"
          shape="rounded"
        />
        <SupaWeb3Avatar
          address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
          size="3xl"
          shape="rounded"
        />
      </div>
    \`
  })
}`,...($=(H=v.parameters)==null?void 0:H.docs)==null?void 0:$.source}}};var X,J,K;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => ({
    components: {
      SupaWeb3Avatar
    },
    template: \`
      <div class="flex items-center gap-6">
        <div class="text-center">
          <SupaWeb3Avatar
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            shape="circle"
            size="lg"
          />
          <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Circle</p>
        </div>
        <div class="text-center">
          <SupaWeb3Avatar
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            shape="square"
            size="lg"
          />
          <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Square</p>
        </div>
        <div class="text-center">
          <SupaWeb3Avatar
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            shape="rounded"
            size="lg"
          />
          <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Rounded</p>
        </div>
      </div>
    \`
  })
}`,...(K=(J=x.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,Y,Z;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => ({
    components: {
      SupaWeb3Avatar
    },
    template: \`
      <div class="space-y-4">
        <div>
          <h3 class="text-sm font-medium mb-3">Gradient Avatars</h3>
          <div class="flex items-center gap-3">
            <SupaWeb3Avatar
              address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
              generated-type="gradient"
              size="lg"
              shape="rounded"
              :show-initials="true"
            />
            <SupaWeb3Avatar
              address="0x1234567890123456789012345678901234567890"
              generated-type="gradient"
              size="lg"
              shape="rounded"
              :show-initials="true"
            />
            <SupaWeb3Avatar
              address="0xabcdefabcdefabcdefabcdefabcdefabcdefabcd"
              generated-type="gradient"
              size="lg"
              shape="rounded"
              :show-initials="true"
            />
            <SupaWeb3Avatar
              address="0x9876543210987654321098765432109876543210"
              generated-type="gradient"
              size="lg"
              shape="rounded"
              :show-initials="true"
            />
          </div>
        </div>

        <div>
          <h3 class="text-sm font-medium mb-3">Solid Color Avatars</h3>
          <div class="flex items-center gap-3">
            <SupaWeb3Avatar
              address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
              generated-type="solid"
              size="lg"
            />
            <SupaWeb3Avatar
              address="0x1234567890123456789012345678901234567890"
              generated-type="solid"
              size="lg"
            />
            <SupaWeb3Avatar
              address="0xabcdefabcdefabcdefabcdefabcdefabcdefabcd"
              generated-type="solid"
              size="lg"
            />
            <SupaWeb3Avatar
              address="0x9876543210987654321098765432109876543210"
              generated-type="solid"
              size="lg"
            />
          </div>
        </div>

        <div>
          <h3 class="text-sm font-medium mb-3">With Initials</h3>
          <div class="flex items-center gap-3">
            <SupaWeb3Avatar
              address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
              :show-initials="true"
              size="lg"
            />
            <SupaWeb3Avatar
              ens-name="alice.eth"
              :show-initials="true"
              size="lg"
            />
            <SupaWeb3Avatar
              initials="JD"
              :show-initials="true"
              size="lg"
            />
            <SupaWeb3Avatar
              ens-name="cryptopunk.eth"
              :show-initials="true"
              size="lg"
            />
          </div>
        </div>
      </div>
    \`
  })
}`,...(Z=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var _,ee,ae;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => ({
    components: {
      SupaWeb3Avatar
    },
    template: \`
      <div class="flex items-center gap-6">
        <div class="text-center">
          <SupaWeb3Avatar
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            :show-status="true"
            status="online"
            status-tooltip="Active now"
            size="lg"
          />
          <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Online</p>
        </div>
        <div class="text-center">
          <SupaWeb3Avatar
            address="0x1234567890123456789012345678901234567890"
            :show-status="true"
            status="away"
            status-tooltip="Away"
            size="lg"
          />
          <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Away</p>
        </div>
        <div class="text-center">
          <SupaWeb3Avatar
            address="0xabcdefabcdefabcdefabcdefabcdefabcdefabcd"
            :show-status="true"
            status="busy"
            status-tooltip="Do not disturb"
            size="lg"
          />
          <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Busy</p>
        </div>
        <div class="text-center">
          <SupaWeb3Avatar
            address="0x9876543210987654321098765432109876543210"
            :show-status="true"
            status="offline"
            status-tooltip="Offline"
            size="lg"
          />
          <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Offline</p>
        </div>
      </div>
    \`
  })
}`,...(ae=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var se,te,ne;y.parameters={...y.parameters,docs:{...(se=y.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => ({
    components: {
      SupaWeb3Avatar
    },
    template: \`
      <div class="grid grid-cols-2 gap-8">
        <div class="flex items-center gap-4">
          <SupaWeb3Avatar
            address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
            badge="3"
            badge-position="top-right"
            size="lg"
          />
          <span class="text-sm">Top Right Badge</span>
        </div>

        <div class="flex items-center gap-4">
          <SupaWeb3Avatar
            address="0x1234567890123456789012345678901234567890"
            badge="New"
            badge-position="top-left"
            size="lg"
          />
          <span class="text-sm">Top Left Badge</span>
        </div>

        <div class="flex items-center gap-4">
          <SupaWeb3Avatar
            address="0xabcdefabcdefabcdefabcdefabcdefabcdefabcd"
            badge="99+"
            badge-position="bottom-right"
            size="lg"
          />
          <span class="text-sm">Bottom Right Badge</span>
        </div>

        <div class="flex items-center gap-4">
          <SupaWeb3Avatar
            address="0x9876543210987654321098765432109876543210"
            badge="!"
            badge-position="bottom-left"
            size="lg"
          />
          <span class="text-sm">Bottom Left Badge</span>
        </div>
      </div>
    \`
  })
}`,...(ne=(te=y.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var re,de,ie;S.parameters={...S.parameters,docs:{...(re=S.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => ({
    components: {
      SupaWeb3Avatar
    },
    template: \`
      <div class="flex items-center gap-6">
        <SupaWeb3Avatar
          address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
          :show-status="true"
          status="online"
          badge="3"
          size="xl"
        />
        <SupaWeb3Avatar
          ens-name="alice.eth"
          :show-initials="true"
          :show-status="true"
          status="away"
          badge="New"
          size="xl"
        />
        <SupaWeb3Avatar
          src="https://i.pravatar.cc/150?img=5"
          :show-status="true"
          status="busy"
          badge="99+"
          size="xl"
        />
      </div>
    \`
  })
}`,...(ie=(de=S.parameters)==null?void 0:de.docs)==null?void 0:ie.source}}};var le,oe,ce;w.parameters={...w.parameters,docs:{...(le=w.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => ({
    components: {
      SupaWeb3Avatar
    },
    template: \`
      <div class="space-y-6">
        <div>
          <h3 class="text-sm font-medium mb-3">Stacked Avatars</h3>
          <div class="flex -space-x-3">
            <SupaWeb3Avatar
              address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
              size="lg"
              class="ring-2 ring-white dark:ring-gray-800"
            />
            <SupaWeb3Avatar
              address="0x1234567890123456789012345678901234567890"
              size="lg"
              class="ring-2 ring-white dark:ring-gray-800"
            />
            <SupaWeb3Avatar
              address="0xabcdefabcdefabcdefabcdefabcdefabcdefabcd"
              size="lg"
              class="ring-2 ring-white dark:ring-gray-800"
            />
            <SupaWeb3Avatar
              address="0x9876543210987654321098765432109876543210"
              size="lg"
              class="ring-2 ring-white dark:ring-gray-800"
            />
            <div class="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-sm font-medium ring-2 ring-white dark:ring-gray-800">
              +5
            </div>
          </div>
        </div>

        <div>
          <h3 class="text-sm font-medium mb-3">Avatar List</h3>
          <div class="flex gap-2">
            <SupaWeb3Avatar
              address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
              size="md"
            />
            <SupaWeb3Avatar
              address="0x1234567890123456789012345678901234567890"
              size="md"
            />
            <SupaWeb3Avatar
              address="0xabcdefabcdefabcdefabcdefabcdefabcdefabcd"
              size="md"
            />
            <SupaWeb3Avatar
              address="0x9876543210987654321098765432109876543210"
              size="md"
            />
          </div>
        </div>
      </div>
    \`
  })
}`,...(ce=(oe=w.parameters)==null?void 0:oe.docs)==null?void 0:ce.source}}};var pe,be,ue;A.parameters={...A.parameters,docs:{...(pe=A.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => ({
    components: {
      SupaWeb3Avatar
    },
    template: \`
      <div class="space-y-6">
        <div class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          <h3 class="text-sm font-semibold mb-3">User Profile Card</h3>
          <div class="flex items-center gap-4">
            <SupaWeb3Avatar
              address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
              size="2xl"
              :show-status="true"
              status="online"
            />
            <div>
              <h4 class="font-semibold">Alice.eth</h4>
              <p class="text-sm text-gray-600 dark:text-gray-400">0x742d...bEb3</p>
              <div class="flex items-center gap-2 mt-1">
                <span class="text-xs px-2 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded">Verified</span>
                <span class="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded">NFT Holder</span>
              </div>
            </div>
          </div>
        </div>

        <div class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          <h3 class="text-sm font-semibold mb-3">Comment Thread</h3>
          <div class="space-y-3">
            <div class="flex gap-3">
              <SupaWeb3Avatar
                address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
                size="sm"
              />
              <div class="flex-1">
                <p class="text-sm font-medium">0x742d...bEb3</p>
                <p class="text-sm text-gray-600 dark:text-gray-400">Great project! Looking forward to the next update.</p>
              </div>
            </div>
            <div class="flex gap-3">
              <SupaWeb3Avatar
                address="0x1234567890123456789012345678901234567890"
                size="sm"
              />
              <div class="flex-1">
                <p class="text-sm font-medium">0x1234...7890</p>
                <p class="text-sm text-gray-600 dark:text-gray-400">Agreed! The UI looks amazing.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          <h3 class="text-sm font-semibold mb-3">Transaction History</h3>
          <div class="space-y-2">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <SupaWeb3Avatar
                  address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
                  size="xs"
                />
                <span class="text-sm">Sent to 0xabcd...efab</span>
              </div>
              <span class="text-sm font-medium">-0.5 ETH</span>
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <SupaWeb3Avatar
                  address="0x9876543210987654321098765432109876543210"
                  size="xs"
                />
                <span class="text-sm">Received from 0x9876...3210</span>
              </div>
              <span class="text-sm font-medium text-green-600 dark:text-green-400">+1.2 ETH</span>
            </div>
          </div>
        </div>

        <div class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          <h3 class="text-sm font-semibold mb-3">Team Members</h3>
          <div class="flex items-center gap-4">
            <SupaWeb3Avatar
              src="https://i.pravatar.cc/150?img=3"
              :show-status="true"
              status="online"
              size="lg"
            />
            <SupaWeb3Avatar
              src="https://i.pravatar.cc/150?img=5"
              :show-status="true"
              status="away"
              badge="2"
              size="lg"
            />
            <SupaWeb3Avatar
              src="https://i.pravatar.cc/150?img=8"
              :show-status="true"
              status="offline"
              size="lg"
            />
            <SupaWeb3Avatar
              address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
              :show-status="true"
              status="busy"
              size="lg"
            />
          </div>
        </div>
      </div>
    \`
  })
}`,...(ue=(be=A.parameters)==null?void 0:be.docs)==null?void 0:ue.source}}};var ge,me,ve;k.parameters={...k.parameters,docs:{...(ge=k.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => ({
    components: {
      SupaWeb3Avatar
    },
    data() {
      return {
        address: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3',
        ensName: '',
        src: '',
        size: 'lg' as const,
        shape: 'circle' as const,
        generatedType: 'gradient' as const,
        showInitials: false,
        initials: '',
        showStatus: false,
        status: 'online' as const,
        badge: '',
        badgePosition: 'top-right' as const
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
            <label class="block text-sm font-medium mb-2">Image URL</label>
            <input
              v-model="src"
              type="text"
              placeholder="https://..."
              class="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600"
            />
          </div>

          <div>
            <label class="block text-sm font-medium mb-2">Custom Initials</label>
            <input
              v-model="initials"
              type="text"
              maxlength="2"
              class="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600"
            />
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
              <option value="2xl">2X Large</option>
              <option value="3xl">3X Large</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium mb-2">Shape</label>
            <select
              v-model="shape"
              class="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600"
            >
              <option value="circle">Circle</option>
              <option value="square">Square</option>
              <option value="rounded">Rounded</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium mb-2">Generated Type</label>
            <select
              v-model="generatedType"
              class="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600"
            >
              <option value="gradient">Gradient</option>
              <option value="solid">Solid</option>
              <option value="pattern">Pattern</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium mb-2">Status</label>
            <select
              v-model="status"
              class="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600"
            >
              <option value="online">Online</option>
              <option value="away">Away</option>
              <option value="busy">Busy</option>
              <option value="offline">Offline</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium mb-2">Badge</label>
            <input
              v-model="badge"
              type="text"
              placeholder="3, New, 99+, etc."
              class="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600"
            />
          </div>

          <div>
            <label class="block text-sm font-medium mb-2">Badge Position</label>
            <select
              v-model="badgePosition"
              class="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600"
            >
              <option value="top-right">Top Right</option>
              <option value="top-left">Top Left</option>
              <option value="bottom-right">Bottom Right</option>
              <option value="bottom-left">Bottom Left</option>
            </select>
          </div>
        </div>

        <div class="flex flex-wrap gap-4">
          <label class="flex items-center gap-2">
            <input v-model="showInitials" type="checkbox" />
            <span class="text-sm">Show Initials</span>
          </label>

          <label class="flex items-center gap-2">
            <input v-model="showStatus" type="checkbox" />
            <span class="text-sm">Show Status</span>
          </label>
        </div>

        <div class="border-t pt-6">
          <h3 class="text-lg font-semibold mb-4">Preview</h3>
          <div class="flex items-center justify-center p-8 border rounded-lg bg-gray-50 dark:bg-gray-800">
            <SupaWeb3Avatar
              :address="address"
              :ens-name="ensName"
              :src="src"
              :size="size"
              :shape="shape"
              :generated-type="generatedType"
              :show-initials="showInitials"
              :initials="initials"
              :show-status="showStatus"
              :status="status"
              :badge="badge"
              :badge-position="badgePosition"
            />
          </div>
        </div>
      </div>
    \`
  })
}`,...(ve=(me=k.parameters)==null?void 0:me.docs)==null?void 0:ve.source}}};var xe,fe,he;W.parameters={...W.parameters,docs:{...(xe=W.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
      SupaWeb3Avatar
    },
    template: \`
      <div class="flex items-center gap-4">
        <SupaWeb3Avatar
          address="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb3"
          size="lg"
        />
        <SupaWeb3Avatar
          address="0x1234567890123456789012345678901234567890"
          size="lg"
          :show-status="true"
          status="online"
        />
        <SupaWeb3Avatar
          ens-name="alice.eth"
          :show-initials="true"
          size="lg"
          badge="3"
        />
        <SupaWeb3Avatar
          src="https://i.pravatar.cc/150?img=8"
          size="lg"
          :show-status="true"
          status="away"
        />
      </div>
    \`
  })
}`,...(he=(fe=W.parameters)==null?void 0:fe.docs)==null?void 0:he.source}}};const Ve=["Default","WithImage","WithENS","Sizes","Shapes","GeneratedTypes","WithStatus","WithBadges","CombinedFeatures","AvatarGroup","RealWorldExamples","Interactive","DarkMode"];export{w as AvatarGroup,S as CombinedFeatures,W as DarkMode,u as Default,f as GeneratedTypes,k as Interactive,A as RealWorldExamples,x as Shapes,v as Sizes,y as WithBadges,m as WithENS,g as WithImage,h as WithStatus,Ve as __namedExportsOrder,Ge as default};
