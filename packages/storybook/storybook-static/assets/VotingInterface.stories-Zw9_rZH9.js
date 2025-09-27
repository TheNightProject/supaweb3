import{r as m,c as Y,b as l,f as e,d as g,t as n,F,g as O,w as h,v as S,k as ke,h as i,n as I,G as Ve}from"./vue.esm-bundler-DxM0YtBV.js";const Pe={class:"bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"},De={class:"p-6 border-b border-gray-200 dark:border-gray-700"},Ce={class:"flex items-center justify-between mb-4"},Ae={class:"text-2xl font-bold text-gray-900 dark:text-white"},Te={class:"text-right"},Re={class:"text-xl font-bold text-blue-600 dark:text-blue-400"},Se={key:0,class:"text-gray-600 dark:text-gray-300"},Ie={key:0,class:"p-6 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900"},$e={class:"text-lg font-semibold text-gray-900 dark:text-white mb-2"},Ue={class:"text-gray-600 dark:text-gray-300 text-sm mb-4"},Ne={class:"grid grid-cols-2 md:grid-cols-4 gap-4 text-sm"},Ye={class:"ml-1 font-medium text-gray-900 dark:text-white"},Fe={class:"ml-1 font-medium text-gray-900 dark:text-white"},Oe={class:"ml-1 font-medium text-gray-900 dark:text-white"},Be={class:"ml-1 font-medium text-gray-900 dark:text-white"},Ge={key:1,class:"p-4 bg-blue-50 dark:bg-blue-900/20 border-b border-gray-200 dark:border-gray-700"},je={class:"flex items-center justify-between"},Me={class:"flex items-center gap-3"},Ee={class:"text-sm font-medium text-gray-700 dark:text-gray-300"},Le={class:"p-6"},qe={class:"mb-6"},Ze={class:"space-y-3"},He={class:"flex items-center gap-3"},We=["value","disabled"],ze={class:"text-sm text-gray-500 dark:text-gray-400"},Xe={key:0,class:"text-right"},Qe={class:"text-sm text-gray-500 dark:text-gray-400"},Je={key:0,class:"mb-6"},Ke=["disabled"],_e={key:1,class:"mb-6"},et={class:"flex items-center gap-4"},tt=["max","disabled"],at={class:"text-sm font-medium text-gray-900 dark:text-white min-w-[100px] text-right"},ot={class:"text-xs text-gray-500 dark:text-gray-400 mt-1"},nt={key:2,class:"mb-6"},st={class:"space-y-3"},rt={key:0},lt={class:"grid grid-cols-1 sm:grid-cols-2 gap-3"},it=["onClick","disabled"],dt={class:"font-medium text-gray-900 dark:text-white"},gt={class:"text-sm text-gray-500 dark:text-gray-400"},ut={class:"flex gap-2"},ct=["disabled"],vt=["disabled"],pt={class:"flex flex-col sm:flex-row gap-3"},mt=["disabled"],ht={key:0,class:"animate-spin -ml-1 mr-2 h-4 w-4 text-white",fill:"none",viewBox:"0 0 24 24"},ft={key:3,class:"mt-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg"},C={__name:"VotingInterface",props:{title:{type:String,default:"Cast Your Vote"},subtitle:{type:String,default:""},proposal:{type:Object,default:null},userVotingPower:{type:[String,Number],default:"0"},governanceToken:{type:String,default:"GOV"},delegation:{type:Object,default:null},suggestedDelegates:{type:Array,default:()=>[]},showReason:{type:Boolean,default:!0},showDelegation:{type:Boolean,default:!0},showCurrentResults:{type:Boolean,default:!1},allowPartialVoting:{type:Boolean,default:!1},hasVoted:{type:Boolean,default:!1},canVote:{type:Boolean,default:!0},loading:{type:Boolean,default:!1}},emits:["vote","delegate","revoke-delegation","view-vote-history"],setup(t,{emit:u}){const s=t,A=u,c=m(""),T=m(""),v=m(s.userVotingPower),p=m(""),R=m(!1),pe=[{value:"for",label:"For",description:"Vote in favor of this proposal",textClass:"text-green-600 dark:text-green-400",selectedClass:"border-green-300 bg-green-50 dark:border-green-600 dark:bg-green-900/20"},{value:"against",label:"Against",description:"Vote against this proposal",textClass:"text-red-600 dark:text-red-400",selectedClass:"border-red-300 bg-red-50 dark:border-red-600 dark:bg-red-900/20"},{value:"abstain",label:"Abstain",description:"Abstain from voting but count toward quorum",textClass:"text-yellow-600 dark:text-yellow-400",selectedClass:"border-yellow-300 bg-yellow-50 dark:border-yellow-600 dark:bg-yellow-900/20"}],me=Y(()=>c.value&&s.canVote&&!s.loading),he=Y(()=>!s.userVotingPower||s.userVotingPower===0?0:Math.round(v.value/s.userVotingPower*100)),$=r=>{if(!s.proposal)return 0;switch(r){case"for":return s.proposal.votesFor||0;case"against":return s.proposal.votesAgainst||0;case"abstain":return s.proposal.votesAbstain||0;default:return 0}},fe=r=>{if(!s.proposal)return 0;const a=(s.proposal.votesFor||0)+(s.proposal.votesAgainst||0)+(s.proposal.votesAbstain||0);return a===0?0:Math.round($(r)/a*100)},be=()=>{const r={choice:c.value,reason:T.value,votingPower:s.allowPartialVoting?v.value:s.userVotingPower,proposal:s.proposal};A("vote",r),R.value=!0,setTimeout(()=>{R.value=!1},3e3)},ye=r=>{A("delegate",{delegate:r.address,delegateName:r.name,proposal:s.proposal})},we=()=>{p.value&&A("delegate",{delegate:p.value,proposal:s.proposal})},xe=r=>new Date(r).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),U=r=>r?`${r.slice(0,6)}...${r.slice(-4)}`:"";return(r,a)=>(i(),l("div",Pe,[e("div",De,[e("div",Ce,[e("h2",Ae,n(t.title||"Cast Your Vote"),1),e("div",Te,[a[6]||(a[6]=e("div",{class:"text-sm text-gray-500 dark:text-gray-400"},"Your Voting Power",-1)),e("div",Re,n(t.userVotingPower)+" "+n(t.governanceToken),1)])]),t.subtitle?(i(),l("p",Se,n(t.subtitle),1)):g("",!0)]),t.proposal?(i(),l("div",Ie,[e("h3",$e," Proposal #"+n(t.proposal.id)+": "+n(t.proposal.title),1),e("p",Ue,n(t.proposal.description),1),e("div",Ne,[e("div",null,[a[7]||(a[7]=e("span",{class:"text-gray-500 dark:text-gray-400"},"Type:",-1)),e("span",Ye,n(t.proposal.type),1)]),e("div",null,[a[8]||(a[8]=e("span",{class:"text-gray-500 dark:text-gray-400"},"Quorum:",-1)),e("span",Fe,n(t.proposal.quorum)+"%",1)]),e("div",null,[a[9]||(a[9]=e("span",{class:"text-gray-500 dark:text-gray-400"},"Threshold:",-1)),e("span",Oe,n(t.proposal.threshold)+"%",1)]),e("div",null,[a[10]||(a[10]=e("span",{class:"text-gray-500 dark:text-gray-400"},"Ends:",-1)),e("span",Be,n(xe(t.proposal.endTime)),1)])])])):g("",!0),t.delegation?(i(),l("div",Ge,[e("div",je,[e("div",Me,[a[11]||(a[11]=e("div",{class:"w-2 h-2 bg-blue-500 rounded-full"},null,-1)),e("span",Ee," You have delegated your voting power to "+n(U(t.delegation.delegate)),1)]),e("button",{onClick:a[0]||(a[0]=o=>r.$emit("revoke-delegation")),class:"text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"}," Revoke ")])])):g("",!0),e("div",Le,[e("div",qe,[a[12]||(a[12]=e("h4",{class:"text-lg font-semibold text-gray-900 dark:text-white mb-4"}," Select Your Vote ",-1)),e("div",Ze,[(i(),l(F,null,O(pe,o=>e("label",{key:o.value,class:I(["flex items-center justify-between p-4 border-2 rounded-lg cursor-pointer transition-all",c.value===o.value?o.selectedClass:"border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"])},[e("div",He,[h(e("input",{type:"radio",value:o.value,"onUpdate:modelValue":a[1]||(a[1]=N=>c.value=N),disabled:!t.canVote||t.loading,class:"w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"},null,8,We),[[Ve,c.value]]),e("div",null,[e("div",{class:I([o.textClass,"font-medium"])},n(o.label),3),e("div",ze,n(o.description),1)])]),t.showCurrentResults?(i(),l("div",Xe,[e("div",{class:I([o.textClass,"font-medium"])},n($(o.value).toLocaleString()),3),e("div",Qe,n(fe(o.value))+"% ",1)])):g("",!0)],2)),64))])]),t.showReason?(i(),l("div",Je,[a[13]||(a[13]=e("label",{class:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"}," Reason for Vote (Optional) ",-1)),h(e("textarea",{"onUpdate:modelValue":a[2]||(a[2]=o=>T.value=o),disabled:!t.canVote||t.loading,placeholder:"Explain your vote decision...",rows:"3",class:"w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"},null,8,Ke),[[S,T.value]])])):g("",!0),t.allowPartialVoting?(i(),l("div",_e,[a[14]||(a[14]=e("label",{class:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"}," Voting Power to Use ",-1)),e("div",et,[h(e("input",{type:"range","onUpdate:modelValue":a[3]||(a[3]=o=>v.value=o),min:0,max:t.userVotingPower,step:.01,disabled:!t.canVote||t.loading,class:"flex-1"},null,8,tt),[[S,v.value]]),e("div",at,n(v.value)+" "+n(t.governanceToken),1)]),e("div",ot,n(he.value)+"% of your total voting power ",1)])):g("",!0),t.showDelegation&&!t.delegation?(i(),l("div",nt,[a[17]||(a[17]=e("h4",{class:"text-lg font-semibold text-gray-900 dark:text-white mb-4"}," Or Delegate Your Vote ",-1)),e("div",st,[t.suggestedDelegates.length>0?(i(),l("div",rt,[a[15]||(a[15]=e("label",{class:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"}," Suggested Delegates ",-1)),e("div",lt,[(i(!0),l(F,null,O(t.suggestedDelegates,o=>(i(),l("button",{key:o.address,onClick:N=>ye(o),disabled:t.loading,class:"p-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-left transition-colors"},[e("div",dt,n(o.name||U(o.address)),1),e("div",gt,n(o.votingPower)+" "+n(t.governanceToken)+" • "+n(o.participationRate)+"% participation ",1)],8,it))),128))])])):g("",!0),e("div",null,[a[16]||(a[16]=e("label",{class:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"}," Or Enter Delegate Address ",-1)),e("div",ut,[h(e("input",{type:"text","onUpdate:modelValue":a[4]||(a[4]=o=>p.value=o),disabled:t.loading,placeholder:"0x...",class:"flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"},null,8,ct),[[S,p.value]]),e("button",{onClick:we,disabled:!p.value||t.loading,class:"bg-gray-600 hover:bg-gray-700 disabled:bg-gray-400 text-white font-medium py-2 px-4 rounded-lg transition-colors"}," Delegate ",8,vt)])])])])):g("",!0),e("div",pt,[e("button",{onClick:be,disabled:!me.value||t.loading,class:"flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"},[t.loading?(i(),l("svg",ht,[...a[18]||(a[18]=[e("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1),e("path",{class:"opacity-75",fill:"currentColor",d:"m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)])])):g("",!0),ke(" "+n(t.hasVoted?"Change Vote":"Submit Vote"),1)],8,mt),t.hasVoted?(i(),l("button",{key:0,onClick:a[5]||(a[5]=o=>r.$emit("view-vote-history")),class:"flex-1 sm:flex-none border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium py-3 px-6 rounded-lg transition-colors"}," Vote History ")):g("",!0)]),R.value?(i(),l("div",ft,[...a[19]||(a[19]=[e("div",{class:"flex items-center gap-2"},[e("svg",{class:"w-5 h-5 text-green-600 dark:text-green-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})]),e("span",{class:"text-sm font-medium text-green-800 dark:text-green-200"}," Vote submitted successfully! ")],-1)])])):g("",!0)])]))}};C.__docgenInfo={exportName:"default",displayName:"VotingInterface",description:"",tags:{},props:[{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"'Cast Your Vote'"}},{name:"subtitle",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"proposal",type:{name:"object"},defaultValue:{func:!1,value:"null"}},{name:"userVotingPower",type:{name:"string|number"},defaultValue:{func:!1,value:"'0'"}},{name:"governanceToken",type:{name:"string"},defaultValue:{func:!1,value:"'GOV'"}},{name:"delegation",type:{name:"object"},defaultValue:{func:!1,value:"null"}},{name:"suggestedDelegates",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"showReason",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"showDelegation",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"showCurrentResults",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"allowPartialVoting",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hasVoted",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"canVote",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"loading",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"revoke-delegation"},{name:"view-vote-history"},{name:"vote"},{name:"delegate"}],sourceFiles:["/Users/steve/Projects/tnp.web.supaweb3/packages/ui/src/components/governance/VotingInterface.vue"]};const yt={title:"Governance/VotingInterface",component:C,parameters:{layout:"centered",docs:{description:{component:"A comprehensive voting interface with delegation options, voting power management, and reason capture for governance proposals."}}},decorators:[()=>({template:'<div class="min-w-[600px] max-w-[800px]"><story /></div>'})],tags:["autodocs"],argTypes:{title:{control:"text",description:"Interface title"},subtitle:{control:"text",description:"Interface subtitle"},proposal:{control:"object",description:"Proposal data"},userVotingPower:{control:"text",description:"User voting power amount"},governanceToken:{control:"text",description:"Governance token symbol"},delegation:{control:"object",description:"Current delegation status"},showReason:{control:"boolean",description:"Show vote reason input"},showDelegation:{control:"boolean",description:"Show delegation options"},showCurrentResults:{control:"boolean",description:"Show current voting results"},allowPartialVoting:{control:"boolean",description:"Allow partial voting power usage"},hasVoted:{control:"boolean",description:"User has already voted"},canVote:{control:"boolean",description:"User can vote on proposal"},loading:{control:"boolean",description:"Loading state"}}},d={args:{title:"Cast Your Vote",subtitle:"Participate in governance by voting on this proposal",proposal:{id:"42",title:"Increase Developer Grant Funding",description:"Allocate additional treasury funds to support ecosystem development through developer grants and hackathons.",type:"Treasury",quorum:10,threshold:50,endTime:"2024-10-02T10:00:00Z",votesFor:125e3,votesAgainst:45e3,votesAbstain:15e3},userVotingPower:"2500",governanceToken:"SUPA",delegation:null,suggestedDelegates:[{address:"0x1234567890abcdef1234567890abcdef12345678",name:"Core Dev Team",votingPower:"125,000",participationRate:"95"},{address:"0xabcdef1234567890abcdef1234567890abcdef12",name:"Community Council",votingPower:"89,500",participationRate:"87"}],showReason:!0,showDelegation:!0,showCurrentResults:!1,allowPartialVoting:!1,hasVoted:!1,canVote:!0,loading:!1}},f={args:{...d.args,title:"Vote on Active Proposal",subtitle:"See current results and cast your vote",showCurrentResults:!0}},b={args:{...d.args,title:"Change Your Vote",subtitle:"You have already voted on this proposal. You can change your vote if needed.",hasVoted:!0,showCurrentResults:!0}},y={args:{...d.args,title:"Voting Delegated",subtitle:"Your voting power has been delegated. You can revoke delegation to vote directly.",delegation:{delegate:"0x1234567890abcdef1234567890abcdef12345678",delegateName:"Core Dev Team",delegatedPower:"2500"},canVote:!1}},w={args:{...d.args,title:"Advanced Voting Options",subtitle:"Use partial voting power and delegate the rest",allowPartialVoting:!0,userVotingPower:"10000"}},x={args:{...d.args,title:"Insufficient Voting Power",subtitle:"You need governance tokens to participate in voting",userVotingPower:"0",canVote:!1,showDelegation:!1}},k={args:{...d.args,title:"Voting Period Ended",subtitle:"This proposal voting period has concluded",proposal:{...d.args.proposal,endTime:"2024-09-20T10:00:00Z"},canVote:!1,showCurrentResults:!0}},V={args:{...d.args,loading:!0}},P={render:()=>({components:{VotingInterface:C},template:`
      <div class="space-y-6">
        <div class="text-center">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Interactive Voting Interface
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Cast votes, delegate voting power, and manage governance participation
          </p>
        </div>

        <VotingInterface
          :proposal="proposal"
          :user-voting-power="userVotingPower"
          :governance-token="governanceToken"
          :delegation="delegation"
          :suggested-delegates="suggestedDelegates"
          :show-reason="true"
          :show-delegation="true"
          :show-current-results="showCurrentResults"
          :allow-partial-voting="allowPartialVoting"
          :has-voted="hasVoted"
          :can-vote="canVote"
          :loading="loading"
          title="Interactive Governance Vote"
          subtitle="Test all voting features in this interactive example"
          @vote="handleVote"
          @delegate="handleDelegate"
          @revoke-delegation="handleRevokeDelegation"
          @view-vote-history="handleViewVoteHistory"
        />

        <div v-if="lastAction" class="rounded-lg bg-gray-100 p-3 dark:bg-gray-800">
          <div class="text-sm font-medium text-gray-700 dark:text-gray-300">Last Action:</div>
          <pre class="mt-1 text-xs text-gray-600 dark:text-gray-400">{{ lastAction }}</pre>
        </div>
      </div>
    `,data(){return{proposal:{id:"42",title:"Interactive Governance Proposal",description:"Test proposal for demonstrating voting functionality with real-time updates and interaction capabilities.",type:"Treasury",quorum:10,threshold:50,endTime:"2024-10-02T10:00:00Z",votesFor:125e3,votesAgainst:45e3,votesAbstain:15e3},userVotingPower:"2500",governanceToken:"SUPA",delegation:null,suggestedDelegates:[{address:"0x1234567890abcdef1234567890abcdef12345678",name:"Core Dev Team",votingPower:"125,000",participationRate:"95"},{address:"0xabcdef1234567890abcdef1234567890abcdef12",name:"Community Council",votingPower:"89,500",participationRate:"87"}],showCurrentResults:!1,allowPartialVoting:!1,hasVoted:!1,canVote:!0,loading:!1,lastAction:null}},methods:{async handleVote(t){this.loading=!0,this.lastAction=`Submitting vote: ${t.choice} with ${t.votingPower} ${this.governanceToken}...`,setTimeout(()=>{const u=parseFloat(t.votingPower);switch(t.choice){case"for":this.proposal.votesFor+=u;break;case"against":this.proposal.votesAgainst+=u;break;case"abstain":this.proposal.votesAbstain+=u;break}this.hasVoted=!0,this.showCurrentResults=!0,this.loading=!1,this.lastAction=`Successfully voted "${t.choice}" with ${t.votingPower} ${this.governanceToken}!${t.reason?` Reason: "${t.reason}"`:""}`},2500)},async handleDelegate(t){this.loading=!0,this.lastAction=`Delegating voting power to ${t.delegateName||t.delegate}...`,setTimeout(()=>{this.delegation={delegate:t.delegate,delegateName:t.delegateName,delegatedPower:this.userVotingPower},this.canVote=!1,this.loading=!1,this.lastAction=`Successfully delegated ${this.userVotingPower} ${this.governanceToken} to ${t.delegateName||t.delegate}!`},2e3)},async handleRevokeDelegation(){this.loading=!0,this.lastAction="Revoking delegation...",setTimeout(()=>{this.delegation=null,this.canVote=!0,this.loading=!1,this.lastAction="Successfully revoked delegation! You can now vote directly."},1500)},handleViewVoteHistory(){this.lastAction="Opening vote history for user..."}}})},D={parameters:{backgrounds:{default:"dark"}},render:()=>({components:{VotingInterface:C},template:`
      <div class="dark">
        <div class="min-h-screen bg-gray-900 p-8">
          <VotingInterface
            :proposal="{
              id: '42',
              title: '🌙 Dark Mode Governance',
              description: 'Beautiful dark theme voting interface with comprehensive delegation and voting power management.',
              type: 'UI/UX',
              quorum: 10,
              threshold: 50,
              endTime: '2024-10-02T10:00:00Z',
              votesFor: 125000,
              votesAgainst: 45000,
              votesAbstain: 15000
            }"
            user-voting-power="2500"
            governance-token="SUPA"
            :suggested-delegates="[{
              address: '0x1234567890abcdef1234567890abcdef12345678',
              name: 'Night Owl Council',
              votingPower: '125,000',
              participationRate: '98'
            }]"
            title="🌙 Night Mode Voting"
            subtitle="Elegant dark theme governance interface"
            :show-reason="true"
            :show-delegation="true"
            :show-current-results="true"
            :can-vote="true"
          />
        </div>
      </div>
    `})};var B,G,j;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    title: 'Cast Your Vote',
    subtitle: 'Participate in governance by voting on this proposal',
    proposal: {
      id: '42',
      title: 'Increase Developer Grant Funding',
      description: 'Allocate additional treasury funds to support ecosystem development through developer grants and hackathons.',
      type: 'Treasury',
      quorum: 10,
      threshold: 50,
      endTime: '2024-10-02T10:00:00Z',
      votesFor: 125000,
      votesAgainst: 45000,
      votesAbstain: 15000
    },
    userVotingPower: '2500',
    governanceToken: 'SUPA',
    delegation: null,
    suggestedDelegates: [{
      address: '0x1234567890abcdef1234567890abcdef12345678',
      name: 'Core Dev Team',
      votingPower: '125,000',
      participationRate: '95'
    }, {
      address: '0xabcdef1234567890abcdef1234567890abcdef12',
      name: 'Community Council',
      votingPower: '89,500',
      participationRate: '87'
    }],
    showReason: true,
    showDelegation: true,
    showCurrentResults: false,
    allowPartialVoting: false,
    hasVoted: false,
    canVote: true,
    loading: false
  }
}`,...(j=(G=d.parameters)==null?void 0:G.docs)==null?void 0:j.source}}};var M,E,L;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title: 'Vote on Active Proposal',
    subtitle: 'See current results and cast your vote',
    showCurrentResults: true
  }
}`,...(L=(E=f.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var q,Z,H;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title: 'Change Your Vote',
    subtitle: 'You have already voted on this proposal. You can change your vote if needed.',
    hasVoted: true,
    showCurrentResults: true
  }
}`,...(H=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:H.source}}};var W,z,X;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title: 'Voting Delegated',
    subtitle: 'Your voting power has been delegated. You can revoke delegation to vote directly.',
    delegation: {
      delegate: '0x1234567890abcdef1234567890abcdef12345678',
      delegateName: 'Core Dev Team',
      delegatedPower: '2500'
    },
    canVote: false
  }
}`,...(X=(z=y.parameters)==null?void 0:z.docs)==null?void 0:X.source}}};var Q,J,K;w.parameters={...w.parameters,docs:{...(Q=w.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title: 'Advanced Voting Options',
    subtitle: 'Use partial voting power and delegate the rest',
    allowPartialVoting: true,
    userVotingPower: '10000'
  }
}`,...(K=(J=w.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var _,ee,te;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title: 'Insufficient Voting Power',
    subtitle: 'You need governance tokens to participate in voting',
    userVotingPower: '0',
    canVote: false,
    showDelegation: false
  }
}`,...(te=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ae,oe,ne;k.parameters={...k.parameters,docs:{...(ae=k.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title: 'Voting Period Ended',
    subtitle: 'This proposal voting period has concluded',
    proposal: {
      ...Default.args.proposal,
      endTime: '2024-09-20T10:00:00Z'
    },
    canVote: false,
    showCurrentResults: true
  }
}`,...(ne=(oe=k.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var se,re,le;V.parameters={...V.parameters,docs:{...(se=V.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    loading: true
  }
}`,...(le=(re=V.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var ie,de,ge;P.parameters={...P.parameters,docs:{...(ie=P.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => ({
    components: {
      VotingInterface
    },
    template: \`
      <div class="space-y-6">
        <div class="text-center">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Interactive Voting Interface
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Cast votes, delegate voting power, and manage governance participation
          </p>
        </div>

        <VotingInterface
          :proposal="proposal"
          :user-voting-power="userVotingPower"
          :governance-token="governanceToken"
          :delegation="delegation"
          :suggested-delegates="suggestedDelegates"
          :show-reason="true"
          :show-delegation="true"
          :show-current-results="showCurrentResults"
          :allow-partial-voting="allowPartialVoting"
          :has-voted="hasVoted"
          :can-vote="canVote"
          :loading="loading"
          title="Interactive Governance Vote"
          subtitle="Test all voting features in this interactive example"
          @vote="handleVote"
          @delegate="handleDelegate"
          @revoke-delegation="handleRevokeDelegation"
          @view-vote-history="handleViewVoteHistory"
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
          title: 'Interactive Governance Proposal',
          description: 'Test proposal for demonstrating voting functionality with real-time updates and interaction capabilities.',
          type: 'Treasury',
          quorum: 10,
          threshold: 50,
          endTime: '2024-10-02T10:00:00Z',
          votesFor: 125000,
          votesAgainst: 45000,
          votesAbstain: 15000
        },
        userVotingPower: '2500',
        governanceToken: 'SUPA',
        delegation: null,
        suggestedDelegates: [{
          address: '0x1234567890abcdef1234567890abcdef12345678',
          name: 'Core Dev Team',
          votingPower: '125,000',
          participationRate: '95'
        }, {
          address: '0xabcdef1234567890abcdef1234567890abcdef12',
          name: 'Community Council',
          votingPower: '89,500',
          participationRate: '87'
        }],
        showCurrentResults: false,
        allowPartialVoting: false,
        hasVoted: false,
        canVote: true,
        loading: false,
        lastAction: null
      };
    },
    methods: {
      async handleVote(voteData) {
        this.loading = true;
        this.lastAction = \`Submitting vote: \${voteData.choice} with \${voteData.votingPower} \${this.governanceToken}...\`;
        setTimeout(() => {
          // Update proposal vote counts
          const voteAmount = parseFloat(voteData.votingPower);
          switch (voteData.choice) {
            case 'for':
              this.proposal.votesFor += voteAmount;
              break;
            case 'against':
              this.proposal.votesAgainst += voteAmount;
              break;
            case 'abstain':
              this.proposal.votesAbstain += voteAmount;
              break;
          }
          this.hasVoted = true;
          this.showCurrentResults = true;
          this.loading = false;
          this.lastAction = \`Successfully voted "\${voteData.choice}" with \${voteData.votingPower} \${this.governanceToken}!\${voteData.reason ? \` Reason: "\${voteData.reason}"\` : ''}\`;
        }, 2500);
      },
      async handleDelegate(delegationData) {
        this.loading = true;
        this.lastAction = \`Delegating voting power to \${delegationData.delegateName || delegationData.delegate}...\`;
        setTimeout(() => {
          this.delegation = {
            delegate: delegationData.delegate,
            delegateName: delegationData.delegateName,
            delegatedPower: this.userVotingPower
          };
          this.canVote = false;
          this.loading = false;
          this.lastAction = \`Successfully delegated \${this.userVotingPower} \${this.governanceToken} to \${delegationData.delegateName || delegationData.delegate}!\`;
        }, 2000);
      },
      async handleRevokeDelegation() {
        this.loading = true;
        this.lastAction = \`Revoking delegation...\`;
        setTimeout(() => {
          this.delegation = null;
          this.canVote = true;
          this.loading = false;
          this.lastAction = \`Successfully revoked delegation! You can now vote directly.\`;
        }, 1500);
      },
      handleViewVoteHistory() {
        this.lastAction = \`Opening vote history for user...\`;
      }
    }
  })
}`,...(ge=(de=P.parameters)==null?void 0:de.docs)==null?void 0:ge.source}}};var ue,ce,ve;D.parameters={...D.parameters,docs:{...(ue=D.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  render: () => ({
    components: {
      VotingInterface
    },
    template: \`
      <div class="dark">
        <div class="min-h-screen bg-gray-900 p-8">
          <VotingInterface
            :proposal="{
              id: '42',
              title: '🌙 Dark Mode Governance',
              description: 'Beautiful dark theme voting interface with comprehensive delegation and voting power management.',
              type: 'UI/UX',
              quorum: 10,
              threshold: 50,
              endTime: '2024-10-02T10:00:00Z',
              votesFor: 125000,
              votesAgainst: 45000,
              votesAbstain: 15000
            }"
            user-voting-power="2500"
            governance-token="SUPA"
            :suggested-delegates="[{
              address: '0x1234567890abcdef1234567890abcdef12345678',
              name: 'Night Owl Council',
              votingPower: '125,000',
              participationRate: '98'
            }]"
            title="🌙 Night Mode Voting"
            subtitle="Elegant dark theme governance interface"
            :show-reason="true"
            :show-delegation="true"
            :show-current-results="true"
            :can-vote="true"
          />
        </div>
      </div>
    \`
  })
}`,...(ve=(ce=D.parameters)==null?void 0:ce.docs)==null?void 0:ve.source}}};const wt=["Default","WithResults","AlreadyVoted","WithDelegation","PartialVoting","NoVotingPower","VotingClosed","Loading","Interactive","DarkMode"];export{b as AlreadyVoted,D as DarkMode,d as Default,P as Interactive,V as Loading,x as NoVotingPower,w as PartialVoting,k as VotingClosed,y as WithDelegation,f as WithResults,wt as __namedExportsOrder,yt as default};
