(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69a8ee1f"],{"10f3":function(e,t,c){},"78a7":function(e,t,c){"use strict";c.r(t);var l=c("7a23");const s={class:"container border"},d={class:"row"},a={class:"m-auto flex-grow-1 flex-column align-items-center justify-content-center"},i={class:"col d-flex"},o={class:"d-flex w-100 mr-5 pr-5 align-items-center"},r=Object(l["f"])('<div class="row"></div><div class="row row-cols-12 border text-light bg-dark"><div class="col"> Title </div><div class="col"> Reported By </div><div class="col"> Status </div><div class="col"> Last Modified </div></div>',2),n={key:0},b={key:0,class:"col-12 d-flex border"},u=Object(l["h"])("div",{class:"row row-cols-4 justify-content-center",style:{color:"var(--dark)"}},null,-1),j={class:"col"},O={key:0,class:"col"},g={key:1,class:"col",style:{color:"var(--danger)"}},p={key:2,class:"col",style:{color:"var(--dark)"}},f={class:"col"};function v(e,t,c,v,w,B){const h=Object(l["x"])("router-link");return Object(l["q"])(),Object(l["d"])("div",s,[Object(l["h"])("div",d,[Object(l["h"])("div",a,[Object(l["h"])("div",i,[Object(l["h"])("form",{onSubmit:t[3]||(t[3]=Object(l["F"])((...e)=>v.createBug&&v.createBug(...e),["prevent"]))},[Object(l["h"])("div",o,[Object(l["E"])(Object(l["h"])("input",{type:"text",class:"form-control",required:"true",placeholder:"Report new bug..","onUpdate:modelValue":t[1]||(t[1]=e=>v.state.newBug.title=e)},null,512),[[l["B"],v.state.newBug.title]]),Object(l["E"])(Object(l["h"])("input",{type:"text",class:"form-control",required:"true",placeholder:"description..","onUpdate:modelValue":t[2]||(t[2]=e=>v.state.newBug.description=e)},null,512),[[l["B"],v.state.newBug.description]]),Object(l["h"])("button",{type:"submit",class:["btn",{"btn-primary":v.state.newBug.title,"btn-danger":!v.state.newBug.title}],disabled:!v.state.newBug}," Report: ",10,["disabled"])])],32),Object(l["h"])("button",{class:["btn",{"btn-primary":v.state.filterClosed,"btn-danger":!v.state.filterClosed}],onClick:t[4]||(t[4]=e=>v.toggleFilter())}," filter closed ",2)]),r,v.bugs?(Object(l["q"])(),Object(l["d"])("div",n,[(Object(l["q"])(!0),Object(l["d"])(l["a"],null,Object(l["w"])(v.bugs,e=>(Object(l["q"])(),Object(l["d"])("div",{key:e.id,class:"d-flex border"},[v.state.filterClosed||!e.closed?(Object(l["q"])(),Object(l["d"])("div",b,[u,Object(l["h"])(h,{to:{name:"bug-details",params:{id:e.id}}},{default:Object(l["D"])(()=>[Object(l["h"])("div",j,Object(l["z"])(e.title),1)]),_:2},1032,["to"]),e.creatorId?(Object(l["q"])(),Object(l["d"])("div",O,Object(l["z"])(e.creatorId.name),1)):Object(l["e"])("",!0),e.closed?(Object(l["q"])(),Object(l["d"])("div",g,[Object(l["h"])("b",null,Object(l["z"])(e.closed?"Closed":"Open"),1)])):(Object(l["q"])(),Object(l["d"])("div",p,[Object(l["h"])("b",null,Object(l["z"])(e.closed?"Closed":"Open"),1)])),Object(l["h"])("div",f,Object(l["z"])(e.createdAt.split("T")[0].split("-").splice(1,2)[0])+" "+Object(l["z"])(e.createdAt.split("T")[0].split("-").splice(1,2)[1])+" "+Object(l["z"])(e.createdAt.split("T")[0].split("-").splice(0,1)[0]),1)])):Object(l["e"])("",!0)]))),128))])):Object(l["e"])("",!0)])])])}var w=c("a1e9"),B=c("5c40"),h=c("83fc"),m=c("af90"),y=c("5d40"),k={setup(){m["a"].getBugs();const e=Object(w["i"])({newBug:{title:"",description:""},activeBug:Object(B["d"])(()=>h["a"].activeBug),filterClosed:!0});return{state:e,account:Object(B["d"])(()=>h["a"].account),bugs:Object(B["d"])(()=>h["a"].bugs),createBug(){h["a"].newBug=e.newBug,m["a"].createBug(h["a"].newBug)},editBug(e){m["a"].updateBug()},async deleteBug(e){await y["a"].confirmAction("Please confirm this deletion!")&&m["a"].deleteBug()},toggleFilter(){e.filterClosed?e.filterClosed=!1:e.filterClosed=!0}}}};c("7fd6");k.render=v;t["default"]=k},"7fd6":function(e,t,c){"use strict";c("10f3")}}]);