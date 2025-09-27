import{c as P,b as i,f as e,d as s,t as n,n as k,F as w,g as A,k as re,h as o}from"./vue.esm-bundler-DxM0YtBV.js";const ie={class:"bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"},oe={class:"p-6 border-b border-gray-200 dark:border-gray-700"},se={class:"flex items-center justify-between mb-4"},le={class:"text-2xl font-bold text-gray-900 dark:text-white"},de={key:0,class:"text-gray-600 dark:text-gray-300 mt-1"},ce={class:"text-right"},me={key:0,class:"text-sm text-gray-500 dark:text-gray-400 mt-1"},ue={class:"p-6 border-b border-gray-200 dark:border-gray-700"},pe={class:"grid grid-cols-1 md:grid-cols-3 gap-6"},ge={class:"text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg"},ve={class:"text-2xl font-bold text-blue-600 dark:text-blue-400"},be={class:"text-sm text-gray-600 dark:text-gray-300 mt-1"},he={class:"text-xs text-gray-500 dark:text-gray-400 mt-1"},ye={class:"text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg"},fe={class:"text-2xl font-bold text-purple-600 dark:text-purple-400"},xe={key:0,class:"text-xs text-gray-500 dark:text-gray-400 mt-1"},Pe={class:"text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg"},ke={class:"text-2xl font-bold text-green-600 dark:text-green-400"},we={class:"text-xs text-gray-500 dark:text-gray-400 mt-1"},Ae={key:0,class:"p-6 border-b border-gray-200 dark:border-gray-700"},Se={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},Te={key:0,class:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},De={key:1,class:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},Ce={class:"flex-1"},Me={class:"font-medium text-gray-900 dark:text-white"},Ve={class:"text-sm text-gray-600 dark:text-gray-300 mt-1"},Re={key:0,class:"text-xs text-gray-500 dark:text-gray-400 mt-1"},Oe={key:1,class:"p-6 border-b border-gray-200 dark:border-gray-700"},qe={class:"grid grid-cols-2 md:grid-cols-4 gap-4"},Ne={class:"text-center"},Ue={class:"text-xl font-bold text-gray-900 dark:text-white"},Be={class:"text-center"},Ie={class:"text-xl font-bold text-gray-900 dark:text-white"},Ge={class:"text-center"},Ee={class:"text-xl font-bold text-gray-900 dark:text-white"},je={class:"text-center"},$e={class:"text-xl font-bold text-gray-900 dark:text-white"},Ze={key:2,class:"p-6 border-b border-gray-200 dark:border-gray-700"},Fe={class:"flex items-center justify-between mb-4"},Le={key:0,class:"p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg"},ze={class:"flex items-center justify-between"},Je={class:"font-medium text-gray-900 dark:text-white"},Ye={class:"text-sm text-gray-600 dark:text-gray-300 mt-1"},We={key:1,class:"mt-4"},_e={class:"text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"},He={class:"space-y-2"},Ke={class:"text-gray-600 dark:text-gray-300"},Qe={class:"font-medium text-gray-900 dark:text-white"},Xe={key:3,class:"p-6 border-b border-gray-200 dark:border-gray-700"},et={class:"space-y-3"},tt={class:"flex-1"},at={class:"text-sm font-medium text-gray-900 dark:text-white"},nt={class:"text-xs text-gray-500 dark:text-gray-400"},rt={key:0,class:"text-sm font-medium text-gray-900 dark:text-white"},it={class:"p-6"},ot={class:"flex flex-col sm:flex-row gap-3"},st=["disabled"],lt={key:0,class:"animate-spin -ml-1 mr-2 h-4 w-4 text-white",fill:"none",viewBox:"0 0 24 24"},x={__name:"DAOMembership",props:{title:{type:String,default:"DAO Membership"},subtitle:{type:String,default:""},membershipStatus:{type:String,default:"Active",validator:t=>["Active","Inactive","Pending","Banned"].includes(t)},memberSince:{type:String,default:null},votingPower:{type:[String,Number],default:"0"},governanceToken:{type:String,default:"GOV"},totalSupply:{type:[String,Number],default:"1000000"},membershipTier:{type:String,default:"Member"},nextTier:{type:String,default:null},nextTierRequirement:{type:String,default:null},participationRate:{type:[String,Number],default:"0"},votedProposals:{type:[String,Number],default:"0"},totalProposals:{type:[String,Number],default:"0"},benefits:{type:Array,default:()=>[]},daoStats:{type:Object,default:null},delegation:{type:Object,default:null},recentActivity:{type:Array,default:()=>[]},canCreateProposal:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},emits:["join-dao","increase-voting-power","view-proposals","create-proposal","manage-delegation","revoke-delegation"],setup(t,{emit:m}){const c=t,S=P(()=>c.membershipStatus.toLowerCase()==="active"),te=P(()=>!c.totalSupply||c.totalSupply===0?0:(parseFloat(c.votingPower)/parseFloat(c.totalSupply)*100).toFixed(3)),ae=P(()=>{switch(c.membershipStatus.toLowerCase()){case"active":return"bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";case"inactive":return"bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";case"pending":return"bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";case"banned":return"bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";default:return"bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"}}),ne=l=>{switch(l){case"vote":return"bg-blue-500";case"proposal":return"bg-purple-500";case"delegation":return"bg-yellow-500";case"join":return"bg-green-500";case"reward":return"bg-orange-500";default:return"bg-gray-500"}},T=l=>new Date(l).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}),D=l=>l?`${l.slice(0,6)}...${l.slice(-4)}`:"";return(l,a)=>(o(),i("div",ie,[e("div",oe,[e("div",se,[e("div",null,[e("h2",le,n(t.title||"DAO Membership"),1),t.subtitle?(o(),i("p",de,n(t.subtitle),1)):s("",!0)]),e("div",ce,[e("div",{class:k([ae.value,"px-3 py-1 text-sm font-medium rounded-full"])},n(t.membershipStatus),3),t.memberSince?(o(),i("div",me," Member since "+n(T(t.memberSince)),1)):s("",!0)])])]),e("div",ue,[e("div",pe,[e("div",ge,[e("div",ve,n(t.votingPower),1),e("div",be,n(t.governanceToken)+" Voting Power ",1),e("div",he,n(te.value)+"% of total supply ",1)]),e("div",ye,[e("div",fe,n(t.membershipTier),1),a[6]||(a[6]=e("div",{class:"text-sm text-gray-600 dark:text-gray-300 mt-1"}," Membership Tier ",-1)),t.nextTier?(o(),i("div",xe,n(t.nextTierRequirement)+" to "+n(t.nextTier),1)):s("",!0)]),e("div",Pe,[e("div",ke,n(t.participationRate)+"% ",1),a[7]||(a[7]=e("div",{class:"text-sm text-gray-600 dark:text-gray-300 mt-1"}," Participation Rate ",-1)),e("div",we,n(t.votedProposals)+"/"+n(t.totalProposals)+" proposals ",1)])])]),t.benefits&&t.benefits.length>0?(o(),i("div",Ae,[a[10]||(a[10]=e("h3",{class:"text-lg font-semibold text-gray-900 dark:text-white mb-4"}," Your Membership Benefits ",-1)),e("div",Se,[(o(!0),i(w,null,A(t.benefits,r=>(o(),i("div",{key:r.id,class:"flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg"},[e("div",{class:k([r.available?"text-green-500":"text-gray-400","mt-0.5"])},[r.available?(o(),i("svg",Te,[...a[8]||(a[8]=[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"},null,-1)])])):(o(),i("svg",De,[...a[9]||(a[9]=[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,-1)])]))],2),e("div",Ce,[e("div",Me,n(r.title),1),e("div",Ve,n(r.description),1),!r.available&&r.requirement?(o(),i("div",Re," Requires: "+n(r.requirement),1)):s("",!0)])]))),128))])])):s("",!0),t.daoStats?(o(),i("div",Oe,[a[15]||(a[15]=e("h3",{class:"text-lg font-semibold text-gray-900 dark:text-white mb-4"}," DAO Overview ",-1)),e("div",qe,[e("div",Ne,[e("div",Ue,n(t.daoStats.totalMembers.toLocaleString()),1),a[11]||(a[11]=e("div",{class:"text-sm text-gray-500 dark:text-gray-400"},"Total Members",-1))]),e("div",Be,[e("div",Ie,n(t.daoStats.activeProposals),1),a[12]||(a[12]=e("div",{class:"text-sm text-gray-500 dark:text-gray-400"},"Active Proposals",-1))]),e("div",Ge,[e("div",Ee," $"+n(t.daoStats.treasuryValue),1),a[13]||(a[13]=e("div",{class:"text-sm text-gray-500 dark:text-gray-400"},"Treasury Value",-1))]),e("div",je,[e("div",$e,n(t.daoStats.avgParticipation)+"% ",1),a[14]||(a[14]=e("div",{class:"text-sm text-gray-500 dark:text-gray-400"},"Avg Participation",-1))])])])):s("",!0),t.delegation?(o(),i("div",Ze,[e("div",Fe,[a[16]||(a[16]=e("h3",{class:"text-lg font-semibold text-gray-900 dark:text-white"}," Delegation Status ",-1)),e("button",{onClick:a[0]||(a[0]=r=>l.$emit("manage-delegation")),class:"text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"}," Manage ")]),t.delegation.isDelegating?(o(),i("div",Le,[e("div",ze,[e("div",null,[e("div",Je," Delegated to "+n(t.delegation.delegateName||D(t.delegation.delegate)),1),e("div",Ye,n(t.delegation.delegatedPower)+" "+n(t.governanceToken)+" voting power delegated ",1)]),e("button",{onClick:a[1]||(a[1]=r=>l.$emit("revoke-delegation")),class:"text-sm text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300"}," Revoke ")])])):s("",!0),t.delegation.delegatedTo.length>0?(o(),i("div",We,[e("div",_e," Delegated to you: "+n(t.delegation.totalDelegated)+" "+n(t.governanceToken),1),e("div",He,[(o(!0),i(w,null,A(t.delegation.delegatedTo,r=>(o(),i("div",{key:r.address,class:"flex items-center justify-between text-sm"},[e("span",Ke,n(r.name||D(r.address)),1),e("span",Qe,n(r.amount)+" "+n(t.governanceToken),1)]))),128))])])):s("",!0)])):s("",!0),t.recentActivity&&t.recentActivity.length>0?(o(),i("div",Xe,[a[17]||(a[17]=e("h3",{class:"text-lg font-semibold text-gray-900 dark:text-white mb-4"}," Recent Activity ",-1)),e("div",et,[(o(!0),i(w,null,A(t.recentActivity,r=>(o(),i("div",{key:r.id,class:"flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg"},[e("div",{class:k([ne(r.type),"w-2 h-2 rounded-full"])},null,2),e("div",tt,[e("div",at,n(r.description),1),e("div",nt,n(T(r.timestamp)),1)]),r.value?(o(),i("div",rt,n(r.value),1)):s("",!0)]))),128))])])):s("",!0),e("div",it,[e("div",ot,[S.value?s("",!0):(o(),i("button",{key:0,onClick:a[2]||(a[2]=r=>l.$emit("join-dao")),disabled:t.loading,class:"flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"},[t.loading?(o(),i("svg",lt,[...a[18]||(a[18]=[e("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1),e("path",{class:"opacity-75",fill:"currentColor",d:"m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)])])):s("",!0),a[19]||(a[19]=re(" Join DAO ",-1))],8,st)),S.value?(o(),i("button",{key:1,onClick:a[3]||(a[3]=r=>l.$emit("increase-voting-power")),class:"flex-1 sm:flex-none bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"}," Increase Voting Power ")):s("",!0),e("button",{onClick:a[4]||(a[4]=r=>l.$emit("view-proposals")),class:"flex-1 sm:flex-none border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium py-3 px-6 rounded-lg transition-colors"}," View Proposals "),t.canCreateProposal?(o(),i("button",{key:2,onClick:a[5]||(a[5]=r=>l.$emit("create-proposal")),class:"flex-1 sm:flex-none border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium py-3 px-6 rounded-lg transition-colors"}," Create Proposal ")):s("",!0)])])]))}};x.__docgenInfo={exportName:"default",displayName:"DAOMembership",description:"",tags:{},props:[{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"'DAO Membership'"}},{name:"subtitle",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"membershipStatus",type:{name:"string"},defaultValue:{func:!1,value:"'Active'"},values:["Active","Inactive","Pending","Banned"]},{name:"memberSince",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"votingPower",type:{name:"string|number"},defaultValue:{func:!1,value:"'0'"}},{name:"governanceToken",type:{name:"string"},defaultValue:{func:!1,value:"'GOV'"}},{name:"totalSupply",type:{name:"string|number"},defaultValue:{func:!1,value:"'1000000'"}},{name:"membershipTier",type:{name:"string"},defaultValue:{func:!1,value:"'Member'"}},{name:"nextTier",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"nextTierRequirement",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"participationRate",type:{name:"string|number"},defaultValue:{func:!1,value:"'0'"}},{name:"votedProposals",type:{name:"string|number"},defaultValue:{func:!1,value:"'0'"}},{name:"totalProposals",type:{name:"string|number"},defaultValue:{func:!1,value:"'0'"}},{name:"benefits",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"daoStats",type:{name:"object"},defaultValue:{func:!1,value:"null"}},{name:"delegation",type:{name:"object"},defaultValue:{func:!1,value:"null"}},{name:"recentActivity",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"canCreateProposal",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"loading",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"manage-delegation"},{name:"revoke-delegation"},{name:"join-dao"},{name:"increase-voting-power"},{name:"view-proposals"},{name:"create-proposal"}],sourceFiles:["/Users/steve/Projects/tnp.web.supaweb3/packages/ui/src/components/governance/DAOMembership.vue"]};const ct={title:"Governance/DAOMembership",component:x,parameters:{layout:"centered",docs:{description:{component:"A comprehensive DAO membership dashboard showing voting power, benefits, participation metrics, and delegation status."}}},decorators:[()=>({template:'<div class="min-w-[700px] max-w-[900px]"><story /></div>'})],tags:["autodocs"],argTypes:{title:{control:"text",description:"Dashboard title"},subtitle:{control:"text",description:"Dashboard subtitle"},membershipStatus:{control:"select",options:["Active","Inactive","Pending","Banned"],description:"Current membership status"},memberSince:{control:"text",description:"Membership start date"},votingPower:{control:"text",description:"User voting power amount"},governanceToken:{control:"text",description:"Governance token symbol"},membershipTier:{control:"text",description:"Current membership tier"},participationRate:{control:"number",description:"Voting participation percentage"},benefits:{control:"object",description:"Available membership benefits"},delegation:{control:"object",description:"Delegation status and information"},canCreateProposal:{control:"boolean",description:"User can create proposals"},loading:{control:"boolean",description:"Loading state"}}},d={args:{title:"DAO Membership",subtitle:"Manage your governance participation and benefits",membershipStatus:"Active",memberSince:"2024-03-15T10:00:00Z",votingPower:"25000",governanceToken:"SUPA",totalSupply:"2500000",membershipTier:"Silver",nextTier:"Gold",nextTierRequirement:"25,000 more SUPA",participationRate:"78",votedProposals:"14",totalProposals:"18",benefits:[{id:"1",title:"Voting Rights",description:"Vote on all governance proposals",available:!0},{id:"2",title:"Proposal Creation",description:"Create and submit proposals for community vote",available:!0},{id:"3",title:"Premium Support",description:"Priority customer support and technical assistance",available:!0},{id:"4",title:"Exclusive Events",description:"Access to member-only events and AMAs",available:!1,requirement:"Gold tier membership"},{id:"5",title:"Early Access",description:"Beta testing access for new features",available:!1,requirement:"Gold tier membership"},{id:"6",title:"Revenue Sharing",description:"Share in protocol revenue distribution",available:!1,requirement:"Platinum tier membership"}],daoStats:{totalMembers:12340,activeProposals:5,treasuryValue:"15.2M",avgParticipation:65},delegation:{isDelegating:!1,delegate:null,delegateName:null,delegatedPower:"0",totalDelegated:"8500",delegatedTo:[{address:"0x1234567890abcdef1234567890abcdef12345678",name:"Community Dev",amount:"2500"},{address:"0xabcdef1234567890abcdef1234567890abcdef12",name:null,amount:"6000"}]},recentActivity:[{id:"1",type:"vote",description:'Voted "For" on Treasury Allocation Proposal #42',timestamp:"2024-09-28T14:30:00Z",value:"2,500 SUPA"},{id:"2",type:"proposal",description:'Created proposal "Update Governance Parameters"',timestamp:"2024-09-25T09:15:00Z"},{id:"3",type:"delegation",description:"Received delegation from 0x1234...5678",timestamp:"2024-09-22T16:45:00Z",value:"2,500 SUPA"},{id:"4",type:"reward",description:"Received participation rewards",timestamp:"2024-09-20T12:00:00Z",value:"150 SUPA"}],canCreateProposal:!0,loading:!1}},u={args:{...d.args,title:"Welcome to the DAO",subtitle:"Complete your membership setup and start participating",membershipStatus:"Pending",memberSince:null,votingPower:"1000",membershipTier:"Bronze",nextTier:"Silver",nextTierRequirement:"9,000 more SUPA",participationRate:"0",votedProposals:"0",totalProposals:"18",benefits:[{id:"1",title:"Voting Rights",description:"Vote on all governance proposals",available:!1,requirement:"Complete membership verification"},{id:"2",title:"Proposal Creation",description:"Create and submit proposals for community vote",available:!1,requirement:"Silver tier membership"}],delegation:{isDelegating:!1,delegate:null,delegateName:null,delegatedPower:"0",totalDelegated:"0",delegatedTo:[]},recentActivity:[],canCreateProposal:!1}},p={args:{...d.args,title:"Power User Dashboard",subtitle:"Elite member with maximum governance participation",membershipStatus:"Active",memberSince:"2023-08-10T10:00:00Z",votingPower:"185000",membershipTier:"Platinum",nextTier:null,nextTierRequirement:null,participationRate:"96",votedProposals:"47",totalProposals:"49",benefits:[{id:"1",title:"Voting Rights",description:"Vote on all governance proposals",available:!0},{id:"2",title:"Proposal Creation",description:"Create and submit proposals for community vote",available:!0},{id:"3",title:"Premium Support",description:"Priority customer support and technical assistance",available:!0},{id:"4",title:"Exclusive Events",description:"Access to member-only events and AMAs",available:!0},{id:"5",title:"Early Access",description:"Beta testing access for new features",available:!0},{id:"6",title:"Revenue Sharing",description:"Share in protocol revenue distribution",available:!0},{id:"7",title:"Governance Council",description:"Eligible for governance council nomination",available:!0}],delegation:{isDelegating:!1,delegate:null,delegateName:null,delegatedPower:"0",totalDelegated:"45500",delegatedTo:[{address:"0x1111111111111111111111111111111111111111",name:"DevTeam Lead",amount:"15000"},{address:"0x2222222222222222222222222222222222222222",name:"Community Manager",amount:"12500"},{address:"0x3333333333333333333333333333333333333333",name:null,amount:"18000"}]}}},g={args:{...d.args,title:"Delegated Governance",subtitle:"Your voting power is currently delegated",delegation:{isDelegating:!0,delegate:"0x742d35cc6394c3f6cbbe21c6f53e85c40c614c5e",delegateName:"Core Development Team",delegatedPower:"25000",totalDelegated:"0",delegatedTo:[]}}},v={args:{...d.args,title:"Reactivate Membership",subtitle:"Your membership is currently inactive",membershipStatus:"Inactive",participationRate:"15",votedProposals:"3",totalProposals:"20",benefits:[{id:"1",title:"Voting Rights",description:"Vote on all governance proposals",available:!1,requirement:"Reactivate membership"},{id:"2",title:"Proposal Creation",description:"Create and submit proposals for community vote",available:!1,requirement:"Active membership status"}],canCreateProposal:!1}},b={args:{...d.args,title:"Join the DAO",subtitle:"Become a member to participate in governance",membershipStatus:"Inactive",memberSince:null,votingPower:"0",membershipTier:"None",nextTier:"Bronze",nextTierRequirement:"Acquire 1,000 SUPA tokens",participationRate:"0",votedProposals:"0",totalProposals:"18",benefits:[],delegation:null,recentActivity:[],canCreateProposal:!1}},h={args:{...d.args,loading:!0}},y={render:()=>({components:{DAOMembership:x},template:`
      <div class="space-y-6">
        <div class="text-center">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Interactive DAO Membership
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Manage membership, voting power, and governance participation
          </p>
        </div>

        <DAOMembership
          :membership-status="membershipStatus"
          :member-since="memberSince"
          :voting-power="votingPower"
          :governance-token="governanceToken"
          :total-supply="totalSupply"
          :membership-tier="membershipTier"
          :next-tier="nextTier"
          :next-tier-requirement="nextTierRequirement"
          :participation-rate="participationRate"
          :voted-proposals="votedProposals"
          :total-proposals="totalProposals"
          :benefits="benefits"
          :dao-stats="daoStats"
          :delegation="delegation"
          :recent-activity="recentActivity"
          :can-create-proposal="canCreateProposal"
          :loading="loading"
          title="Interactive DAO Dashboard"
          subtitle="Test all membership features and interactions"
          @join-dao="handleJoinDao"
          @increase-voting-power="handleIncreaseVotingPower"
          @view-proposals="handleViewProposals"
          @create-proposal="handleCreateProposal"
          @manage-delegation="handleManageDelegation"
          @revoke-delegation="handleRevokeDelegation"
        />

        <div v-if="lastAction" class="rounded-lg bg-gray-100 p-3 dark:bg-gray-800">
          <div class="text-sm font-medium text-gray-700 dark:text-gray-300">Last Action:</div>
          <pre class="mt-1 text-xs text-gray-600 dark:text-gray-400">{{ lastAction }}</pre>
        </div>
      </div>
    `,data(){return{membershipStatus:"Active",memberSince:"2024-03-15T10:00:00Z",votingPower:"25000",governanceToken:"SUPA",totalSupply:"2500000",membershipTier:"Silver",nextTier:"Gold",nextTierRequirement:"25,000 more SUPA",participationRate:"78",votedProposals:"14",totalProposals:"18",benefits:[{id:"1",title:"Voting Rights",description:"Vote on all governance proposals",available:!0},{id:"2",title:"Proposal Creation",description:"Create and submit proposals for community vote",available:!0},{id:"3",title:"Premium Support",description:"Priority customer support and technical assistance",available:!0},{id:"4",title:"Exclusive Events",description:"Access to member-only events and AMAs",available:!1,requirement:"Gold tier membership"}],daoStats:{totalMembers:12340,activeProposals:5,treasuryValue:"15.2M",avgParticipation:65},delegation:{isDelegating:!1,delegate:null,delegateName:null,delegatedPower:"0",totalDelegated:"8500",delegatedTo:[{address:"0x1234567890abcdef1234567890abcdef12345678",name:"Community Dev",amount:"2500"}]},recentActivity:[{id:"1",type:"vote",description:'Voted "For" on Treasury Allocation Proposal #42',timestamp:"2024-09-28T14:30:00Z",value:"2,500 SUPA"}],canCreateProposal:!0,loading:!1,lastAction:null}},methods:{async handleJoinDao(){this.loading=!0,this.lastAction="Joining DAO and acquiring membership...",setTimeout(()=>{this.membershipStatus="Active",this.memberSince=new Date().toISOString(),this.votingPower="1000",this.membershipTier="Bronze",this.loading=!1,this.lastAction="Successfully joined the DAO! Welcome aboard!"},3e3)},async handleIncreaseVotingPower(){this.loading=!0,this.lastAction="Increasing voting power through token acquisition...",setTimeout(()=>{const t=parseFloat(this.votingPower),m=5e3;this.votingPower=(t+m).toString(),t<5e4&&t+m>=5e4&&(this.membershipTier="Gold",this.nextTier="Platinum",this.nextTierRequirement="100,000 more SUPA"),this.loading=!1,this.lastAction=`Successfully increased voting power by ${m} ${this.governanceToken}!`},2500)},handleViewProposals(){this.lastAction="Opening governance proposals list..."},handleCreateProposal(){this.lastAction="Opening proposal creation interface..."},async handleManageDelegation(){this.lastAction="Opening delegation management interface..."},async handleRevokeDelegation(){this.loading=!0,this.lastAction="Revoking current delegation...",setTimeout(()=>{this.delegation.isDelegating=!1,this.delegation.delegate=null,this.delegation.delegateName=null,this.delegation.delegatedPower="0",this.loading=!1,this.lastAction="Successfully revoked delegation! You can now vote directly."},2e3)}}})},f={parameters:{backgrounds:{default:"dark"}},render:()=>({components:{DAOMembership:x},template:`
      <div class="dark">
        <div class="min-h-screen bg-gray-900 p-8">
          <DAOMembership
            membership-status="Active"
            member-since="2024-03-15T10:00:00Z"
            voting-power="25000"
            governance-token="SUPA"
            total-supply="2500000"
            membership-tier="Gold"
            participation-rate="89"
            voted-proposals="16"
            total-proposals="18"
            :benefits="[{
              id: '1',
              title: '🌙 Night Voting Rights',
              description: 'Vote on all governance proposals in beautiful dark mode',
              available: true
            }, {
              id: '2',
              title: '🚀 Dark Theme Proposals',
              description: 'Create elegant dark-themed proposals',
              available: true
            }]"
            :dao-stats="{
              totalMembers: 12340,
              activeProposals: 5,
              treasuryValue: '15.2M',
              avgParticipation: 65
            }"
            :delegation="{
              isDelegating: false,
              totalDelegated: '8500',
              delegatedTo: [{
                address: '0x1234567890abcdef1234567890abcdef12345678',
                name: 'Night Owl Dev',
                amount: '2500'
              }]
            }"
            :can-create-proposal="true"
            title="🌙 Night Mode DAO"
            subtitle="Beautiful dark theme governance dashboard"
          />
        </div>
      </div>
    `})};var C,M,V;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    title: 'DAO Membership',
    subtitle: 'Manage your governance participation and benefits',
    membershipStatus: 'Active',
    memberSince: '2024-03-15T10:00:00Z',
    votingPower: '25000',
    governanceToken: 'SUPA',
    totalSupply: '2500000',
    membershipTier: 'Silver',
    nextTier: 'Gold',
    nextTierRequirement: '25,000 more SUPA',
    participationRate: '78',
    votedProposals: '14',
    totalProposals: '18',
    benefits: [{
      id: '1',
      title: 'Voting Rights',
      description: 'Vote on all governance proposals',
      available: true
    }, {
      id: '2',
      title: 'Proposal Creation',
      description: 'Create and submit proposals for community vote',
      available: true
    }, {
      id: '3',
      title: 'Premium Support',
      description: 'Priority customer support and technical assistance',
      available: true
    }, {
      id: '4',
      title: 'Exclusive Events',
      description: 'Access to member-only events and AMAs',
      available: false,
      requirement: 'Gold tier membership'
    }, {
      id: '5',
      title: 'Early Access',
      description: 'Beta testing access for new features',
      available: false,
      requirement: 'Gold tier membership'
    }, {
      id: '6',
      title: 'Revenue Sharing',
      description: 'Share in protocol revenue distribution',
      available: false,
      requirement: 'Platinum tier membership'
    }],
    daoStats: {
      totalMembers: 12340,
      activeProposals: 5,
      treasuryValue: '15.2M',
      avgParticipation: 65
    },
    delegation: {
      isDelegating: false,
      delegate: null,
      delegateName: null,
      delegatedPower: '0',
      totalDelegated: '8500',
      delegatedTo: [{
        address: '0x1234567890abcdef1234567890abcdef12345678',
        name: 'Community Dev',
        amount: '2500'
      }, {
        address: '0xabcdef1234567890abcdef1234567890abcdef12',
        name: null,
        amount: '6000'
      }]
    },
    recentActivity: [{
      id: '1',
      type: 'vote',
      description: 'Voted "For" on Treasury Allocation Proposal #42',
      timestamp: '2024-09-28T14:30:00Z',
      value: '2,500 SUPA'
    }, {
      id: '2',
      type: 'proposal',
      description: 'Created proposal "Update Governance Parameters"',
      timestamp: '2024-09-25T09:15:00Z'
    }, {
      id: '3',
      type: 'delegation',
      description: 'Received delegation from 0x1234...5678',
      timestamp: '2024-09-22T16:45:00Z',
      value: '2,500 SUPA'
    }, {
      id: '4',
      type: 'reward',
      description: 'Received participation rewards',
      timestamp: '2024-09-20T12:00:00Z',
      value: '150 SUPA'
    }],
    canCreateProposal: true,
    loading: false
  }
}`,...(V=(M=d.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var R,O,q;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title: 'Welcome to the DAO',
    subtitle: 'Complete your membership setup and start participating',
    membershipStatus: 'Pending',
    memberSince: null,
    votingPower: '1000',
    membershipTier: 'Bronze',
    nextTier: 'Silver',
    nextTierRequirement: '9,000 more SUPA',
    participationRate: '0',
    votedProposals: '0',
    totalProposals: '18',
    benefits: [{
      id: '1',
      title: 'Voting Rights',
      description: 'Vote on all governance proposals',
      available: false,
      requirement: 'Complete membership verification'
    }, {
      id: '2',
      title: 'Proposal Creation',
      description: 'Create and submit proposals for community vote',
      available: false,
      requirement: 'Silver tier membership'
    }],
    delegation: {
      isDelegating: false,
      delegate: null,
      delegateName: null,
      delegatedPower: '0',
      totalDelegated: '0',
      delegatedTo: []
    },
    recentActivity: [],
    canCreateProposal: false
  }
}`,...(q=(O=u.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var N,U,B;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title: 'Power User Dashboard',
    subtitle: 'Elite member with maximum governance participation',
    membershipStatus: 'Active',
    memberSince: '2023-08-10T10:00:00Z',
    votingPower: '185000',
    membershipTier: 'Platinum',
    nextTier: null,
    nextTierRequirement: null,
    participationRate: '96',
    votedProposals: '47',
    totalProposals: '49',
    benefits: [{
      id: '1',
      title: 'Voting Rights',
      description: 'Vote on all governance proposals',
      available: true
    }, {
      id: '2',
      title: 'Proposal Creation',
      description: 'Create and submit proposals for community vote',
      available: true
    }, {
      id: '3',
      title: 'Premium Support',
      description: 'Priority customer support and technical assistance',
      available: true
    }, {
      id: '4',
      title: 'Exclusive Events',
      description: 'Access to member-only events and AMAs',
      available: true
    }, {
      id: '5',
      title: 'Early Access',
      description: 'Beta testing access for new features',
      available: true
    }, {
      id: '6',
      title: 'Revenue Sharing',
      description: 'Share in protocol revenue distribution',
      available: true
    }, {
      id: '7',
      title: 'Governance Council',
      description: 'Eligible for governance council nomination',
      available: true
    }],
    delegation: {
      isDelegating: false,
      delegate: null,
      delegateName: null,
      delegatedPower: '0',
      totalDelegated: '45500',
      delegatedTo: [{
        address: '0x1111111111111111111111111111111111111111',
        name: 'DevTeam Lead',
        amount: '15000'
      }, {
        address: '0x2222222222222222222222222222222222222222',
        name: 'Community Manager',
        amount: '12500'
      }, {
        address: '0x3333333333333333333333333333333333333333',
        name: null,
        amount: '18000'
      }]
    }
  }
}`,...(B=(U=p.parameters)==null?void 0:U.docs)==null?void 0:B.source}}};var I,G,E;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title: 'Delegated Governance',
    subtitle: 'Your voting power is currently delegated',
    delegation: {
      isDelegating: true,
      delegate: '0x742d35cc6394c3f6cbbe21c6f53e85c40c614c5e',
      delegateName: 'Core Development Team',
      delegatedPower: '25000',
      totalDelegated: '0',
      delegatedTo: []
    }
  }
}`,...(E=(G=g.parameters)==null?void 0:G.docs)==null?void 0:E.source}}};var j,$,Z;v.parameters={...v.parameters,docs:{...(j=v.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title: 'Reactivate Membership',
    subtitle: 'Your membership is currently inactive',
    membershipStatus: 'Inactive',
    participationRate: '15',
    votedProposals: '3',
    totalProposals: '20',
    benefits: [{
      id: '1',
      title: 'Voting Rights',
      description: 'Vote on all governance proposals',
      available: false,
      requirement: 'Reactivate membership'
    }, {
      id: '2',
      title: 'Proposal Creation',
      description: 'Create and submit proposals for community vote',
      available: false,
      requirement: 'Active membership status'
    }],
    canCreateProposal: false
  }
}`,...(Z=($=v.parameters)==null?void 0:$.docs)==null?void 0:Z.source}}};var F,L,z;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title: 'Join the DAO',
    subtitle: 'Become a member to participate in governance',
    membershipStatus: 'Inactive',
    memberSince: null,
    votingPower: '0',
    membershipTier: 'None',
    nextTier: 'Bronze',
    nextTierRequirement: 'Acquire 1,000 SUPA tokens',
    participationRate: '0',
    votedProposals: '0',
    totalProposals: '18',
    benefits: [],
    delegation: null,
    recentActivity: [],
    canCreateProposal: false
  }
}`,...(z=(L=b.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var J,Y,W;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    loading: true
  }
}`,...(W=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:W.source}}};var _,H,K;y.parameters={...y.parameters,docs:{...(_=y.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DAOMembership
    },
    template: \`
      <div class="space-y-6">
        <div class="text-center">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Interactive DAO Membership
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Manage membership, voting power, and governance participation
          </p>
        </div>

        <DAOMembership
          :membership-status="membershipStatus"
          :member-since="memberSince"
          :voting-power="votingPower"
          :governance-token="governanceToken"
          :total-supply="totalSupply"
          :membership-tier="membershipTier"
          :next-tier="nextTier"
          :next-tier-requirement="nextTierRequirement"
          :participation-rate="participationRate"
          :voted-proposals="votedProposals"
          :total-proposals="totalProposals"
          :benefits="benefits"
          :dao-stats="daoStats"
          :delegation="delegation"
          :recent-activity="recentActivity"
          :can-create-proposal="canCreateProposal"
          :loading="loading"
          title="Interactive DAO Dashboard"
          subtitle="Test all membership features and interactions"
          @join-dao="handleJoinDao"
          @increase-voting-power="handleIncreaseVotingPower"
          @view-proposals="handleViewProposals"
          @create-proposal="handleCreateProposal"
          @manage-delegation="handleManageDelegation"
          @revoke-delegation="handleRevokeDelegation"
        />

        <div v-if="lastAction" class="rounded-lg bg-gray-100 p-3 dark:bg-gray-800">
          <div class="text-sm font-medium text-gray-700 dark:text-gray-300">Last Action:</div>
          <pre class="mt-1 text-xs text-gray-600 dark:text-gray-400">{{ lastAction }}</pre>
        </div>
      </div>
    \`,
    data() {
      return {
        membershipStatus: 'Active',
        memberSince: '2024-03-15T10:00:00Z',
        votingPower: '25000',
        governanceToken: 'SUPA',
        totalSupply: '2500000',
        membershipTier: 'Silver',
        nextTier: 'Gold',
        nextTierRequirement: '25,000 more SUPA',
        participationRate: '78',
        votedProposals: '14',
        totalProposals: '18',
        benefits: [{
          id: '1',
          title: 'Voting Rights',
          description: 'Vote on all governance proposals',
          available: true
        }, {
          id: '2',
          title: 'Proposal Creation',
          description: 'Create and submit proposals for community vote',
          available: true
        }, {
          id: '3',
          title: 'Premium Support',
          description: 'Priority customer support and technical assistance',
          available: true
        }, {
          id: '4',
          title: 'Exclusive Events',
          description: 'Access to member-only events and AMAs',
          available: false,
          requirement: 'Gold tier membership'
        }],
        daoStats: {
          totalMembers: 12340,
          activeProposals: 5,
          treasuryValue: '15.2M',
          avgParticipation: 65
        },
        delegation: {
          isDelegating: false,
          delegate: null,
          delegateName: null,
          delegatedPower: '0',
          totalDelegated: '8500',
          delegatedTo: [{
            address: '0x1234567890abcdef1234567890abcdef12345678',
            name: 'Community Dev',
            amount: '2500'
          }]
        },
        recentActivity: [{
          id: '1',
          type: 'vote',
          description: 'Voted "For" on Treasury Allocation Proposal #42',
          timestamp: '2024-09-28T14:30:00Z',
          value: '2,500 SUPA'
        }],
        canCreateProposal: true,
        loading: false,
        lastAction: null
      };
    },
    methods: {
      async handleJoinDao() {
        this.loading = true;
        this.lastAction = \`Joining DAO and acquiring membership...\`;
        setTimeout(() => {
          this.membershipStatus = 'Active';
          this.memberSince = new Date().toISOString();
          this.votingPower = '1000';
          this.membershipTier = 'Bronze';
          this.loading = false;
          this.lastAction = \`Successfully joined the DAO! Welcome aboard!\`;
        }, 3000);
      },
      async handleIncreaseVotingPower() {
        this.loading = true;
        this.lastAction = \`Increasing voting power through token acquisition...\`;
        setTimeout(() => {
          const currentPower = parseFloat(this.votingPower);
          const increase = 5000;
          this.votingPower = (currentPower + increase).toString();
          if (currentPower < 50000 && currentPower + increase >= 50000) {
            this.membershipTier = 'Gold';
            this.nextTier = 'Platinum';
            this.nextTierRequirement = '100,000 more SUPA';
          }
          this.loading = false;
          this.lastAction = \`Successfully increased voting power by \${increase} \${this.governanceToken}!\`;
        }, 2500);
      },
      handleViewProposals() {
        this.lastAction = \`Opening governance proposals list...\`;
      },
      handleCreateProposal() {
        this.lastAction = \`Opening proposal creation interface...\`;
      },
      async handleManageDelegation() {
        this.lastAction = \`Opening delegation management interface...\`;
      },
      async handleRevokeDelegation() {
        this.loading = true;
        this.lastAction = \`Revoking current delegation...\`;
        setTimeout(() => {
          this.delegation.isDelegating = false;
          this.delegation.delegate = null;
          this.delegation.delegateName = null;
          this.delegation.delegatedPower = '0';
          this.loading = false;
          this.lastAction = \`Successfully revoked delegation! You can now vote directly.\`;
        }, 2000);
      }
    }
  })
}`,...(K=(H=y.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var Q,X,ee;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  render: () => ({
    components: {
      DAOMembership
    },
    template: \`
      <div class="dark">
        <div class="min-h-screen bg-gray-900 p-8">
          <DAOMembership
            membership-status="Active"
            member-since="2024-03-15T10:00:00Z"
            voting-power="25000"
            governance-token="SUPA"
            total-supply="2500000"
            membership-tier="Gold"
            participation-rate="89"
            voted-proposals="16"
            total-proposals="18"
            :benefits="[{
              id: '1',
              title: '🌙 Night Voting Rights',
              description: 'Vote on all governance proposals in beautiful dark mode',
              available: true
            }, {
              id: '2',
              title: '🚀 Dark Theme Proposals',
              description: 'Create elegant dark-themed proposals',
              available: true
            }]"
            :dao-stats="{
              totalMembers: 12340,
              activeProposals: 5,
              treasuryValue: '15.2M',
              avgParticipation: 65
            }"
            :delegation="{
              isDelegating: false,
              totalDelegated: '8500',
              delegatedTo: [{
                address: '0x1234567890abcdef1234567890abcdef12345678',
                name: 'Night Owl Dev',
                amount: '2500'
              }]
            }"
            :can-create-proposal="true"
            title="🌙 Night Mode DAO"
            subtitle="Beautiful dark theme governance dashboard"
          />
        </div>
      </div>
    \`
  })
}`,...(ee=(X=f.parameters)==null?void 0:X.docs)==null?void 0:ee.source}}};const mt=["Default","NewMember","PowerUser","DelegatedMember","InactiveMember","NonMember","Loading","Interactive","DarkMode"];export{f as DarkMode,d as Default,g as DelegatedMember,v as InactiveMember,y as Interactive,h as Loading,u as NewMember,b as NonMember,p as PowerUser,mt as __namedExportsOrder,ct as default};
