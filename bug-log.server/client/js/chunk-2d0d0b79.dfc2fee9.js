(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d0b79"],{"68bc":function(t,e,c){"use strict";c.r(e);var a=c("7a23");const s=Object(a["G"])("data-v-336a5466");Object(a["t"])("data-v-336a5466");const l={class:"container-fluid"},d={class:"row"},i={class:"col-12"},b={class:"col d-flex m-auto w-100 mr-5 pr-5"},o={class:"col d-flex"},n={key:0,class:"card mt-5",style:{"max-width":"560px"}},r={class:"row"},O={class:"col"},j={key:0,class:"col-md-12 my-5"},u={class:"card mb-3",style:{"max-width":"540px"}},p={class:"row g-0"},g={class:"col-12"},v={class:"col-md-8"},h={class:"card-body"},m={class:"card-title"},w={class:"card-text"},B=Object(a["g"])(" Status:"),y={class:"card-text"},N={class:"text-muted"},f=Object(a["g"])(" created: "),x={class:"text-muted"},z=Object(a["g"])(" updated: "),A={class:"text-muted"};Object(a["r"])();const k=s((t,e,c,s,k,T)=>{const q=Object(a["x"])("Notes");return Object(a["q"])(),Object(a["d"])("div",l,[Object(a["h"])("div",d,[Object(a["h"])("div",i,[Object(a["h"])("button",{class:"btn btn-danger",onClick:e[1]||(e[1]=t=>s.deleteBug())}," Del (close it) "),Object(a["h"])("div",b,[Object(a["h"])("div",o,[s.activeBug?(Object(a["q"])(),Object(a["d"])("div",n)):Object(a["e"])("",!0),Object(a["h"])("div",r,[Object(a["h"])("div",O,[s.activeBug.creatorId?(Object(a["q"])(),Object(a["d"])("div",j,[Object(a["h"])("div",u,[Object(a["h"])("div",p,[Object(a["h"])("div",g,[Object(a["h"])("img",{src:s.activeBug.creator.picture,class:"rounded-pill py-2",alt:"nogetty"},null,8,["src"])]),Object(a["h"])("div",v,[Object(a["h"])("div",h,[Object(a["h"])("h5",m,Object(a["z"])(s.activeBug.title),1),Object(a["h"])("p",w,Object(a["z"])(s.activeBug.description),1),Object(a["h"])("p",null,Object(a["z"])(s.activeBug.creatorId.email),1),B,Object(a["h"])("p",null,Object(a["z"])(1==s.activeBug.closed?"Closed":"Open"),1),Object(a["h"])("p",y,[Object(a["h"])("small",N,[Object(a["h"])("p",null,[f,Object(a["h"])("small",x,Object(a["z"])(s.activeBug.createdAt.split("T")[0].split("-").splice(1,2)[0])+" "+Object(a["z"])(s.activeBug.createdAt.split("T")[0].split("-").splice(1,2)[1])+" "+Object(a["z"])(s.activeBug.createdAt.split("T")[0].split("-").splice(0,1)[0]),1)]),Object(a["h"])("p",null,[z,Object(a["h"])("small",A,Object(a["z"])(s.activeBug.updatedAt.split("T")[0].split("-").splice(1,2)[0])+" "+Object(a["z"])(s.activeBug.updatedAt.split("T")[0].split("-").splice(1,2)[1])+" "+Object(a["z"])(s.activeBug.updatedAt.split("T")[0].split("-").splice(0,1)[0]),1)])])])])])])]),Object(a["h"])("form",{onSubmit:e[3]||(e[3]=Object(a["F"])(t=>s.createNote(),["prevent"]))},[Object(a["E"])(Object(a["h"])("input",{class:"form-control","onUpdate:modelValue":e[2]||(e[2]=t=>s.state.newNote.body=t),required:"true",placeholder:"add new Note"},null,512),[[a["B"],s.state.newNote.body]]),Object(a["h"])("button",{type:"submit",class:["btn",{"btn-primary":s.state.newNote.body,"btn-danger":!s.state.newNote.body}],disabled:!s.state.newNote}," Report ",10,["disabled"])],32),Object(a["h"])(q,{class:"col my-3 border"})])):Object(a["e"])("",!0)])])])])])])])});var T=c("6c02"),q=c("5c40"),D=c("a1e9"),C=c("83fc"),I=c("af90"),J=c("5a80"),P=c("5d40"),S={setup(){const t=Object(T["c"])();Object(q["O"])(()=>{I["a"].getBugDetails(t.params.id)});const e=Object(D["i"])({newNote:{bug:{},body:""},notes:Object(q["d"])(()=>C["a"].notes)});return{state:e,async deleteNote(){await P["a"].confirmAction("Please confirm this deletion!")&&J["a"].deleteNote()},bugs:Object(q["d"])(()=>C["a"].bugs),notes:Object(q["d"])(()=>C["a"].notes),activeBug:Object(q["d"])(()=>C["a"].activeBug),getBugDetails(){I["a"].getBugDetails(t.params.id)},createNote(){e.newNote.bug=C["a"].activeBug,J["a"].createNote(e.newNote)},async deleteBug(){await P["a"].confirmAction("Please confirm this deletion/Closing!")&&I["a"].deleteBug(t.params.id)}}}};S.render=k,S.__scopeId="data-v-336a5466";e["default"]=S}}]);