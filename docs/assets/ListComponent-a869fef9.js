import{d as x,k as b,u as n,l as g,o,c as a,m as u,a as t,F as v,r as y,t as s,n as f,e as h}from"./index-9ce7e9d6.js";import{S as r}from"./sweetalert2.all-7a835e31.js";const S={class:"overflow-x-auto w-full"},w={key:0,class:"table table-zebra w-full"},k=t("thead",null,[t("tr",null,[t("th",null,"Name"),t("th",null,"Citizen ID"),t("th",null,"Major"),t("th",null,"Student ID"),t("th",null,"GPA"),t("th")])],-1),C={class:"text-sm google-font"},N={class:"bg-slate-600"},D={class:"flex items-center space-x-3"},j=t("div",{class:"avatar"},[t("div",{class:"flex justify-center items-center w-12 h-12"},[t("i",{class:"fa-solid fa-user fa-lg"})])],-1),B={class:""},I={class:"font-base"},T={class:"badge badge-sm py-2 text-xs opacity-80"},z={class:"lg:text-sm text-xs"},M=t("br",null,null,-1),$=t("i",{class:"fa-solid fa-phone mr-2"},null,-1),F={class:"lg:text-sm text-xs"},L=t("br",null,null,-1),V={class:"lg:text-sm text-xs"},A={class:"lg:text-sm text-xs"},E=["onClick"],G=t("br",null,null,-1),P=["onClick"],R={key:1,class:"flex flex-col gap-3 justify-center items-center h-32"},U=t("i",{class:"pb-4 fa-regular fa-folder-open fa-2xl"},null,-1),W=t("h1",null,"Statement is empty!",-1),Y=t("hr",{class:"border-black w-6/12"},null,-1),q=t("h1",{class:"text-slate-500"},"Try to submit something!",-1),H=[U,W,Y,q],J={props:[],methods:{selectMajor(l){switch(l){case"sci":return"วิทยาศาตร์";case"plant":return"ผลิตกรรมการเกษตร์";default:return"วิทยาศาตร์"}},linkInfo(l){return r.fire({icon:"info",text:n().$state.userState[l].annotation,title:"Notation"})}}},Q=x({...J,__name:"ListComponent",setup(l){let d=b(n().userState);g(n().userState,()=>{d.value=n().userState});function m(i){r.fire({title:"Do you really want to remove this?",showDenyButton:!0,confirmButtonText:"Yes",denyButtonText:"Wait, no"}).then(_=>{_.isConfirmed?(n().removeIndexState(i),r.fire("State had been deleted","","success")):_.isDenied&&r.fire("Remove action was denied","","info")})}return(i,_)=>(o(),a("div",S,[u(d).length>0?(o(),a("table",w,[k,t("tbody",C,[(o(!0),a(v,null,y(u(d),(e,c)=>(o(),a("tr",N,[t("td",null,[t("div",D,[j,t("div",B,[t("div",I,s(e.prefixName)+" "+s(e.name),1),t("div",T,[t("i",{class:f([{"fa-solid fa-mars":e.prefixName==="นาย","fa-solid fa-venus":e.prefixName==="นางสาว"||e.prefixName==="นาง"},"fa-solid fa-person-half-dress mr-1"])},null,2)])])])]),t("td",z,[h(s(e.civilId)+" ",1),M,t("span",{class:f([c%2===0?"badge-ghost":"bg-opacity-80","badge py-2 badge-sm"])},[$,h(" "+s(e.tel),1)],2)]),t("td",F,[h(s(e.major)+" ",1),L,t("span",{class:f([c%2===0?"badge-ghost":"bg-opacity-80","badge py-2 badge-sm"])},"คณะ "+s(i.selectMajor(e.facility)),3)]),t("td",V,s(e.stuCode),1),t("td",A,s(e.gpa),1),t("th",null,[t("button",{onClick:p=>m(c),class:"btn btn-error text-white btn-xs"}," Delete ",8,E),G,t("button",{onClick:p=>i.linkInfo(c),class:"btn btn-info px-3 mt-1 text-white btn-xs"}," Note ",8,P)])]))),256))])])):(o(),a("div",R,H))]))}});export{Q as default};
