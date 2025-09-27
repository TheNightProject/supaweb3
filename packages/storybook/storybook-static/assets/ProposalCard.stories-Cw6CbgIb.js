import{c as i,b as c,f as e,d as p,t as r,n as m,p as v,k as we,h as u}from"./vue.esm-bundler-DxM0YtBV.js";const ke={class:"bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"},Te={class:"p-6 border-b border-gray-200 dark:border-gray-700"},Ae={class:"flex items-start justify-between mb-4"},Pe={class:"flex-1"},De={class:"flex items-center gap-3 mb-2"},Se={class:"text-sm font-medium text-gray-500 dark:text-gray-400"},Ve={class:"text-xl font-bold text-gray-900 dark:text-white mb-2"},Fe={class:"text-gray-600 dark:text-gray-300 text-sm leading-relaxed"},Ce={class:"ml-4 text-right"},Ze={class:"text-2xl font-bold text-gray-900 dark:text-white"},$e={class:"text-sm text-gray-500 dark:text-gray-400"},Ie={class:"grid grid-cols-2 md:grid-cols-4 gap-4"},qe={class:"text-sm font-medium text-gray-900 dark:text-white"},Ue={class:"text-sm font-medium text-gray-900 dark:text-white"},Me={class:"text-sm font-medium text-gray-900 dark:text-white"},je={class:"text-sm font-medium text-gray-900 dark:text-white"},Oe={class:"p-6 border-b border-gray-200 dark:border-gray-700"},Le={class:"flex items-center justify-between mb-4"},Ne={class:"text-sm text-gray-500 dark:text-gray-400"},Re={class:"space-y-3"},_e={class:"flex justify-between items-center mb-1"},Be={class:"text-sm font-medium text-gray-900 dark:text-white"},Ee={class:"w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3"},Ge={class:"flex justify-between items-center mb-1"},He={class:"text-sm font-medium text-gray-900 dark:text-white"},Qe={class:"w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3"},ze={class:"flex justify-between items-center mb-1"},Xe={class:"text-sm font-medium text-gray-900 dark:text-white"},Ye={class:"w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3"},Je={class:"mt-4"},Ke={class:"flex justify-between items-center mb-1"},We={class:"text-sm font-medium text-gray-900 dark:text-white"},et={class:"w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2"},tt={key:0,class:"text-xs text-blue-600 dark:text-blue-400 mt-1"},ot={class:"p-6 border-b border-gray-200 dark:border-gray-700"},rt={class:"grid grid-cols-1 md:grid-cols-3 gap-4"},at={class:"text-sm font-medium text-gray-900 dark:text-white"},st={class:"text-sm font-medium text-gray-900 dark:text-white"},nt={key:0,class:"p-4 bg-blue-50 dark:bg-blue-900/20 border-b border-gray-200 dark:border-gray-700"},it={class:"flex items-center justify-between"},lt={class:"flex items-center gap-2"},dt={class:"text-sm font-medium text-gray-700 dark:text-gray-300"},ct={class:"text-sm text-gray-600 dark:text-gray-400"},ut={class:"p-6"},pt={class:"flex flex-col sm:flex-row gap-3"},gt=["disabled"],mt={key:0,class:"animate-spin -ml-1 mr-2 h-4 w-4 text-white",fill:"none",viewBox:"0 0 24 24"},D={__name:"ProposalCard",props:{proposal:{type:Object,required:!0,validator:t=>t&&typeof t.id<"u"&&typeof t.title=="string"&&typeof t.description=="string"&&typeof t.status=="string"},userVote:{type:Object,default:null},showDelegate:{type:Boolean,default:!0},loading:{type:Boolean,default:!1}},emits:["vote","view-details","delegate"],setup(t,{emit:vt}){const s=t,d=i(()=>s.proposal.votesFor+s.proposal.votesAgainst+s.proposal.votesAbstain),C=i(()=>d.value===0?0:Math.round(s.proposal.votesFor/d.value*100)),Z=i(()=>d.value===0?0:Math.round(s.proposal.votesAgainst/d.value*100)),$=i(()=>d.value===0?0:Math.round(s.proposal.votesAbstain/d.value*100)),S=i(()=>{const n=s.proposal.totalSupply||1e6;return Math.round(d.value/n*100)}),I=i(()=>S.value>=s.proposal.quorum),me=i(()=>{switch(s.proposal.status.toLowerCase()){case"active":return"bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";case"pending":return"bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";case"executed":return"bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";case"failed":return"bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";case"cancelled":return"bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";default:return"bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"}}),ve=i(()=>{if(!s.proposal.priority)return"";switch(s.proposal.priority.toLowerCase()){case"high":return"bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";case"medium":return"bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200";case"low":return"bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";default:return"bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"}}),ye=i(()=>{if(!s.userVote)return"";switch(s.userVote.choice.toLowerCase()){case"for":return"bg-green-500";case"against":return"bg-red-500";case"abstain":return"bg-yellow-500";default:return"bg-gray-500"}}),xe=i(()=>s.proposal.status.toLowerCase()==="active"&&new Date(s.proposal.endTime)>new Date),fe=i(()=>{const n=new Date,l=new Date(s.proposal.endTime)-n;if(l<=0)return"Voting ended";const g=Math.floor(l/(1e3*60*60*24)),F=Math.floor(l%(1e3*60*60*24)/(1e3*60*60)),q=Math.floor(l%(1e3*60*60)/(1e3*60));return g>0?`${g}d ${F}h`:F>0?`${F}h ${q}m`:`${q}m`}),be=i(()=>{const n=new Date,l=new Date(s.proposal.endTime)-n,g=l/(1e3*60*60);return l<=0?"text-gray-500 dark:text-gray-400":g<24?"text-red-600 dark:text-red-400":g<72?"text-yellow-600 dark:text-yellow-400":"text-gray-900 dark:text-white"}),V=n=>new Date(n).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),he=n=>n?`${n.slice(0,6)}...${n.slice(-4)}`:"";return(n,o)=>(u(),c("div",ke,[e("div",Te,[e("div",Ae,[e("div",Pe,[e("div",De,[e("span",Se,r(t.proposal.type),1),e("span",{class:m([me.value,"px-2 py-1 text-xs font-medium rounded-full"])},r(t.proposal.status),3),t.proposal.priority?(u(),c("span",{key:0,class:m([ve.value,"px-2 py-1 text-xs font-medium rounded-full"])},r(t.proposal.priority),3)):p("",!0)]),e("h3",Ve,r(t.proposal.title),1),e("p",Fe,r(t.proposal.description),1)]),e("div",Ce,[e("div",Ze," #"+r(t.proposal.id),1),e("div",$e,r(V(t.proposal.createdAt)),1)])]),e("div",Ie,[e("div",null,[o[3]||(o[3]=e("div",{class:"text-xs text-gray-500 dark:text-gray-400 mb-1"},"Proposer",-1)),e("div",qe,r(he(t.proposal.proposer)),1)]),e("div",null,[o[4]||(o[4]=e("div",{class:"text-xs text-gray-500 dark:text-gray-400 mb-1"},"Voting Power",-1)),e("div",Ue,r(t.proposal.proposerVotingPower)+" "+r(t.proposal.governanceToken),1)]),e("div",null,[o[5]||(o[5]=e("div",{class:"text-xs text-gray-500 dark:text-gray-400 mb-1"},"Quorum",-1)),e("div",Me,r(t.proposal.quorum)+"% ",1)]),e("div",null,[o[6]||(o[6]=e("div",{class:"text-xs text-gray-500 dark:text-gray-400 mb-1"},"Threshold",-1)),e("div",je,r(t.proposal.threshold)+"% ",1)])])]),e("div",Oe,[e("div",Le,[o[7]||(o[7]=e("h4",{class:"text-lg font-semibold text-gray-900 dark:text-white"}," Voting Results ",-1)),e("div",Ne,r(d.value.toLocaleString())+" votes cast ",1)]),e("div",Re,[e("div",null,[e("div",_e,[o[8]||(o[8]=e("span",{class:"text-sm font-medium text-green-600 dark:text-green-400"}," For ",-1)),e("span",Be,r(t.proposal.votesFor.toLocaleString())+" ("+r(C.value)+"%) ",1)]),e("div",Ee,[e("div",{class:"bg-green-500 h-3 rounded-full transition-all duration-500",style:v({width:`${C.value}%`})},null,4)])]),e("div",null,[e("div",Ge,[o[9]||(o[9]=e("span",{class:"text-sm font-medium text-red-600 dark:text-red-400"}," Against ",-1)),e("span",He,r(t.proposal.votesAgainst.toLocaleString())+" ("+r(Z.value)+"%) ",1)]),e("div",Qe,[e("div",{class:"bg-red-500 h-3 rounded-full transition-all duration-500",style:v({width:`${Z.value}%`})},null,4)])]),e("div",null,[e("div",ze,[o[10]||(o[10]=e("span",{class:"text-sm font-medium text-yellow-600 dark:text-yellow-400"}," Abstain ",-1)),e("span",Xe,r(t.proposal.votesAbstain.toLocaleString())+" ("+r($.value)+"%) ",1)]),e("div",Ye,[e("div",{class:"bg-yellow-500 h-3 rounded-full transition-all duration-500",style:v({width:`${$.value}%`})},null,4)])])]),e("div",Je,[e("div",Ke,[o[11]||(o[11]=e("span",{class:"text-sm font-medium text-gray-700 dark:text-gray-300"}," Quorum Progress ",-1)),e("span",We,r(S.value)+"% / "+r(t.proposal.quorum)+"% ",1)]),e("div",et,[e("div",{class:m([I.value?"bg-blue-500":"bg-gray-400","h-2 rounded-full transition-all duration-500"]),style:v({width:`${Math.min(S.value,100)}%`})},null,6)]),I.value?(u(),c("div",tt," ✓ Quorum met ")):p("",!0)])]),e("div",ot,[e("div",rt,[e("div",null,[o[12]||(o[12]=e("div",{class:"text-xs text-gray-500 dark:text-gray-400 mb-1"},"Start Time",-1)),e("div",at,r(V(t.proposal.startTime)),1)]),e("div",null,[o[13]||(o[13]=e("div",{class:"text-xs text-gray-500 dark:text-gray-400 mb-1"},"End Time",-1)),e("div",st,r(V(t.proposal.endTime)),1)]),e("div",null,[o[14]||(o[14]=e("div",{class:"text-xs text-gray-500 dark:text-gray-400 mb-1"},"Time Remaining",-1)),e("div",{class:m([be.value,"text-sm font-medium"])},r(fe.value),3)])])]),t.userVote?(u(),c("div",nt,[e("div",it,[e("div",lt,[e("div",{class:m([ye.value,"w-3 h-3 rounded-full"])},null,2),e("span",dt," You voted: "+r(t.userVote.choice),1)]),e("div",ct,r(t.userVote.votingPower)+" "+r(t.proposal.governanceToken),1)])])):p("",!0),e("div",ut,[e("div",pt,[xe.value?(u(),c("button",{key:0,onClick:o[0]||(o[0]=l=>n.$emit("vote",t.proposal)),disabled:t.loading,class:"flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"},[t.loading?(u(),c("svg",mt,[...o[15]||(o[15]=[e("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1),e("path",{class:"opacity-75",fill:"currentColor",d:"m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)])])):p("",!0),we(" "+r(t.userVote?"Change Vote":"Vote Now"),1)],8,gt)):p("",!0),e("button",{onClick:o[1]||(o[1]=l=>n.$emit("view-details",t.proposal)),class:"flex-1 sm:flex-none border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium py-3 px-6 rounded-lg transition-colors"}," View Details "),t.showDelegate?(u(),c("button",{key:1,onClick:o[2]||(o[2]=l=>n.$emit("delegate",t.proposal)),class:"flex-1 sm:flex-none border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium py-3 px-6 rounded-lg transition-colors"}," Delegate ")):p("",!0)])])]))}};D.__docgenInfo={exportName:"default",displayName:"ProposalCard",description:"",tags:{},props:[{name:"proposal",type:{name:"object"},required:!0},{name:"userVote",type:{name:"object"},defaultValue:{func:!1,value:"null"}},{name:"showDelegate",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"loading",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"vote"},{name:"view-details"},{name:"delegate"}],sourceFiles:["/Users/steve/Projects/tnp.web.supaweb3/packages/ui/src/components/governance/ProposalCard.vue"]};const xt={title:"Governance/ProposalCard",component:D,parameters:{layout:"centered",docs:{description:{component:"A comprehensive governance proposal card with voting progress, quorum tracking, and user interaction capabilities."}}},decorators:[()=>({template:'<div class="min-w-[600px] max-w-[800px]"><story /></div>'})],tags:["autodocs"],argTypes:{proposal:{control:"object",description:"Proposal data object"},userVote:{control:"object",description:"User current vote if any"},showDelegate:{control:"boolean",description:"Show delegation button"},loading:{control:"boolean",description:"Loading state"}}},a={args:{proposal:{id:"42",title:"Increase Treasury Allocation for Developer Grants",description:"This proposal aims to allocate an additional 500,000 SUPA tokens from the treasury to fund developer grants for building ecosystem tools and applications.",type:"Treasury",status:"Active",proposer:"0x742d35cc6394c3f6cbbe21c6f53e85c40c614c5e",proposerVotingPower:"25,000",governanceToken:"SUPA",quorum:10,threshold:50,votesFor:125e3,votesAgainst:45e3,votesAbstain:15e3,totalSupply:25e5,startTime:"2024-09-25T10:00:00Z",endTime:"2024-10-02T10:00:00Z",createdAt:"2024-09-24T15:30:00Z"},userVote:null,showDelegate:!0,loading:!1}},y={args:{...a.args,userVote:{choice:"For",votingPower:"1,250",timestamp:"2024-09-26T14:20:00Z"}}},x={args:{...a.args,proposal:{...a.args.proposal,title:"Emergency Protocol Upgrade",description:"Critical security update required to address recently discovered vulnerability in the staking contract.",priority:"High",type:"Security",status:"Active",votesFor:85e4,votesAgainst:25e3,votesAbstain:5e3,endTime:"2024-09-30T23:59:59Z"}}},f={args:{...a.args,proposal:{...a.args.proposal,title:"Update Governance Parameters",description:"Proposal to adjust voting thresholds and quorum requirements for future proposals.",votesFor:45e3,votesAgainst:12e3,votesAbstain:3e3,quorum:15}}},b={args:{...a.args,proposal:{...a.args.proposal,title:"Community Fund Reallocation",description:"Reallocate unused funds from previous grants to marketing and partnership initiatives.",endTime:new Date(Date.now()+2*60*60*1e3).toISOString(),votesFor:185e3,votesAgainst:95e3,votesAbstain:25e3}}},h={args:{...a.args,proposal:{...a.args.proposal,title:"Increase Block Rewards",description:"Successfully executed proposal to increase validator block rewards by 15%.",status:"Executed",endTime:"2024-09-20T10:00:00Z",votesFor:92e4,votesAgainst:85e3,votesAbstain:45e3},userVote:{choice:"For",votingPower:"2,500",timestamp:"2024-09-18T09:15:00Z"}}},w={args:{...a.args,proposal:{...a.args.proposal,title:"Reduce Transaction Fees",description:"Failed proposal to reduce network transaction fees due to insufficient support.",status:"Failed",endTime:"2024-09-15T10:00:00Z",votesFor:65e3,votesAgainst:285e3,votesAbstain:35e3}}},k={args:{...a.args,proposal:{...a.args.proposal,title:"NFT Marketplace Integration",description:"Proposal to integrate native NFT marketplace functionality into the protocol.",status:"Pending",startTime:new Date(Date.now()+24*60*60*1e3).toISOString(),endTime:new Date(Date.now()+8*24*60*60*1e3).toISOString(),votesFor:0,votesAgainst:0,votesAbstain:0}}},T={args:{...a.args,loading:!0}},A={render:()=>({components:{ProposalCard:D},template:`
      <div class="space-y-6">
        <div class="text-center">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Interactive Proposal Card
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Vote, view details, and interact with governance proposals
          </p>
        </div>

        <ProposalCard
          :proposal="proposal"
          :user-vote="userVote"
          :loading="loading"
          :show-delegate="true"
          @vote="handleVote"
          @view-details="handleViewDetails"
          @delegate="handleDelegate"
        />

        <div v-if="lastAction" class="rounded-lg bg-gray-100 p-3 dark:bg-gray-800">
          <div class="text-sm font-medium text-gray-700 dark:text-gray-300">Last Action:</div>
          <pre class="mt-1 text-xs text-gray-600 dark:text-gray-400">{{ lastAction }}</pre>
        </div>
      </div>
    `,data(){return{proposal:{id:"42",title:"Interactive Treasury Proposal",description:"This is an interactive proposal where you can test voting functionality and see real-time updates.",type:"Treasury",status:"Active",proposer:"0x742d35cc6394c3f6cbbe21c6f53e85c40c614c5e",proposerVotingPower:"25,000",governanceToken:"SUPA",quorum:10,threshold:50,votesFor:125e3,votesAgainst:45e3,votesAbstain:15e3,totalSupply:25e5,startTime:"2024-09-25T10:00:00Z",endTime:"2024-10-02T10:00:00Z",createdAt:"2024-09-24T15:30:00Z"},userVote:null,loading:!1,lastAction:null}},methods:{async handleVote(t){this.loading=!0,this.lastAction=`Opening vote interface for proposal #${t.id}...`,setTimeout(()=>{this.userVote={choice:"For",votingPower:"1,250",timestamp:new Date().toISOString()},this.proposal.votesFor+=1250,this.loading=!1,this.lastAction=`Successfully voted "For" on proposal #${t.id}!`},2e3)},handleViewDetails(t){this.lastAction=`Viewing detailed information for proposal #${t.id}: "${t.title}"`},handleDelegate(t){this.lastAction=`Opening delegation interface for proposal #${t.id}`}}})},P={parameters:{backgrounds:{default:"dark"}},render:()=>({components:{ProposalCard:D},template:`
      <div class="dark">
        <div class="min-h-screen bg-gray-900 p-8">
          <ProposalCard
            :proposal="{
              id: '42',
              title: '🌙 Night Mode Governance',
              description: 'Beautiful dark theme proposal card with comprehensive voting interface and real-time progress tracking.',
              type: 'UI/UX',
              status: 'Active',
              priority: 'Medium',
              proposer: '0x742d35cc6394c3f6cbbe21c6f53e85c40c614c5e',
              proposerVotingPower: '25,000',
              governanceToken: 'SUPA',
              quorum: 10,
              threshold: 50,
              votesFor: 125000,
              votesAgainst: 45000,
              votesAbstain: 15000,
              totalSupply: 2500000,
              startTime: '2024-09-25T10:00:00Z',
              endTime: '2024-10-02T10:00:00Z',
              createdAt: '2024-09-24T15:30:00Z'
            }"
            :user-vote="{
              choice: 'For',
              votingPower: '2,500',
              timestamp: '2024-09-26T14:20:00Z'
            }"
            :show-delegate="true"
          />
        </div>
      </div>
    `})};var U,M,j;a.parameters={...a.parameters,docs:{...(U=a.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    proposal: {
      id: '42',
      title: 'Increase Treasury Allocation for Developer Grants',
      description: 'This proposal aims to allocate an additional 500,000 SUPA tokens from the treasury to fund developer grants for building ecosystem tools and applications.',
      type: 'Treasury',
      status: 'Active',
      proposer: '0x742d35cc6394c3f6cbbe21c6f53e85c40c614c5e',
      proposerVotingPower: '25,000',
      governanceToken: 'SUPA',
      quorum: 10,
      threshold: 50,
      votesFor: 125000,
      votesAgainst: 45000,
      votesAbstain: 15000,
      totalSupply: 2500000,
      startTime: '2024-09-25T10:00:00Z',
      endTime: '2024-10-02T10:00:00Z',
      createdAt: '2024-09-24T15:30:00Z'
    },
    userVote: null,
    showDelegate: true,
    loading: false
  }
}`,...(j=(M=a.parameters)==null?void 0:M.docs)==null?void 0:j.source}}};var O,L,N;y.parameters={...y.parameters,docs:{...(O=y.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    userVote: {
      choice: 'For',
      votingPower: '1,250',
      timestamp: '2024-09-26T14:20:00Z'
    }
  }
}`,...(N=(L=y.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var R,_,B;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    proposal: {
      ...Default.args.proposal,
      title: 'Emergency Protocol Upgrade',
      description: 'Critical security update required to address recently discovered vulnerability in the staking contract.',
      priority: 'High',
      type: 'Security',
      status: 'Active',
      votesFor: 850000,
      votesAgainst: 25000,
      votesAbstain: 5000,
      endTime: '2024-09-30T23:59:59Z'
    }
  }
}`,...(B=(_=x.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var E,G,H;f.parameters={...f.parameters,docs:{...(E=f.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    proposal: {
      ...Default.args.proposal,
      title: 'Update Governance Parameters',
      description: 'Proposal to adjust voting thresholds and quorum requirements for future proposals.',
      votesFor: 45000,
      votesAgainst: 12000,
      votesAbstain: 3000,
      quorum: 15
    }
  }
}`,...(H=(G=f.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var Q,z,X;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    proposal: {
      ...Default.args.proposal,
      title: 'Community Fund Reallocation',
      description: 'Reallocate unused funds from previous grants to marketing and partnership initiatives.',
      endTime: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(),
      // 2 hours from now
      votesFor: 185000,
      votesAgainst: 95000,
      votesAbstain: 25000
    }
  }
}`,...(X=(z=b.parameters)==null?void 0:z.docs)==null?void 0:X.source}}};var Y,J,K;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    proposal: {
      ...Default.args.proposal,
      title: 'Increase Block Rewards',
      description: 'Successfully executed proposal to increase validator block rewards by 15%.',
      status: 'Executed',
      endTime: '2024-09-20T10:00:00Z',
      votesFor: 920000,
      votesAgainst: 85000,
      votesAbstain: 45000
    },
    userVote: {
      choice: 'For',
      votingPower: '2,500',
      timestamp: '2024-09-18T09:15:00Z'
    }
  }
}`,...(K=(J=h.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var W,ee,te;w.parameters={...w.parameters,docs:{...(W=w.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    proposal: {
      ...Default.args.proposal,
      title: 'Reduce Transaction Fees',
      description: 'Failed proposal to reduce network transaction fees due to insufficient support.',
      status: 'Failed',
      endTime: '2024-09-15T10:00:00Z',
      votesFor: 65000,
      votesAgainst: 285000,
      votesAbstain: 35000
    }
  }
}`,...(te=(ee=w.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var oe,re,ae;k.parameters={...k.parameters,docs:{...(oe=k.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    proposal: {
      ...Default.args.proposal,
      title: 'NFT Marketplace Integration',
      description: 'Proposal to integrate native NFT marketplace functionality into the protocol.',
      status: 'Pending',
      startTime: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
      // 1 day from now
      endTime: new Date(Date.now() + 8 * 24 * 60 * 60 * 1000).toISOString(),
      // 8 days from now
      votesFor: 0,
      votesAgainst: 0,
      votesAbstain: 0
    }
  }
}`,...(ae=(re=k.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var se,ne,ie;T.parameters={...T.parameters,docs:{...(se=T.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    loading: true
  }
}`,...(ie=(ne=T.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var le,de,ce;A.parameters={...A.parameters,docs:{...(le=A.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ProposalCard
    },
    template: \`
      <div class="space-y-6">
        <div class="text-center">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Interactive Proposal Card
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Vote, view details, and interact with governance proposals
          </p>
        </div>

        <ProposalCard
          :proposal="proposal"
          :user-vote="userVote"
          :loading="loading"
          :show-delegate="true"
          @vote="handleVote"
          @view-details="handleViewDetails"
          @delegate="handleDelegate"
        />

        <div v-if="lastAction" class="rounded-lg bg-gray-100 p-3 dark:bg-gray-800">
          <div class="text-sm font-medium text-gray-700 dark:text-gray-300">Last Action:</div>
          <pre class="mt-1 text-xs text-gray-600 dark:text-gray-400">{{ lastAction }}</pre>
        </div>
      </div>
    \`,
    data() {
      return {
        proposal: {
          id: '42',
          title: 'Interactive Treasury Proposal',
          description: 'This is an interactive proposal where you can test voting functionality and see real-time updates.',
          type: 'Treasury',
          status: 'Active',
          proposer: '0x742d35cc6394c3f6cbbe21c6f53e85c40c614c5e',
          proposerVotingPower: '25,000',
          governanceToken: 'SUPA',
          quorum: 10,
          threshold: 50,
          votesFor: 125000,
          votesAgainst: 45000,
          votesAbstain: 15000,
          totalSupply: 2500000,
          startTime: '2024-09-25T10:00:00Z',
          endTime: '2024-10-02T10:00:00Z',
          createdAt: '2024-09-24T15:30:00Z'
        },
        userVote: null,
        loading: false,
        lastAction: null
      };
    },
    methods: {
      async handleVote(proposal) {
        this.loading = true;
        this.lastAction = \`Opening vote interface for proposal #\${proposal.id}...\`;
        setTimeout(() => {
          // Simulate vote submission
          this.userVote = {
            choice: 'For',
            votingPower: '1,250',
            timestamp: new Date().toISOString()
          };

          // Update vote counts
          this.proposal.votesFor += 1250;
          this.loading = false;
          this.lastAction = \`Successfully voted "For" on proposal #\${proposal.id}!\`;
        }, 2000);
      },
      handleViewDetails(proposal) {
        this.lastAction = \`Viewing detailed information for proposal #\${proposal.id}: "\${proposal.title}"\`;
      },
      handleDelegate(proposal) {
        this.lastAction = \`Opening delegation interface for proposal #\${proposal.id}\`;
      }
    }
  })
}`,...(ce=(de=A.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var ue,pe,ge;P.parameters={...P.parameters,docs:{...(ue=P.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  render: () => ({
    components: {
      ProposalCard
    },
    template: \`
      <div class="dark">
        <div class="min-h-screen bg-gray-900 p-8">
          <ProposalCard
            :proposal="{
              id: '42',
              title: '🌙 Night Mode Governance',
              description: 'Beautiful dark theme proposal card with comprehensive voting interface and real-time progress tracking.',
              type: 'UI/UX',
              status: 'Active',
              priority: 'Medium',
              proposer: '0x742d35cc6394c3f6cbbe21c6f53e85c40c614c5e',
              proposerVotingPower: '25,000',
              governanceToken: 'SUPA',
              quorum: 10,
              threshold: 50,
              votesFor: 125000,
              votesAgainst: 45000,
              votesAbstain: 15000,
              totalSupply: 2500000,
              startTime: '2024-09-25T10:00:00Z',
              endTime: '2024-10-02T10:00:00Z',
              createdAt: '2024-09-24T15:30:00Z'
            }"
            :user-vote="{
              choice: 'For',
              votingPower: '2,500',
              timestamp: '2024-09-26T14:20:00Z'
            }"
            :show-delegate="true"
          />
        </div>
      </div>
    \`
  })
}`,...(ge=(pe=P.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};const ft=["Default","UserVoted","HighPriority","QuorumNotMet","ClosingProposal","ExecutedProposal","FailedProposal","PendingProposal","Loading","Interactive","DarkMode"];export{b as ClosingProposal,P as DarkMode,a as Default,h as ExecutedProposal,w as FailedProposal,x as HighPriority,A as Interactive,T as Loading,k as PendingProposal,f as QuorumNotMet,y as UserVoted,ft as __namedExportsOrder,xt as default};
