(function(e){function t(t){for(var n,c,s=t[0],i=t[1],u=t[2],l=0,d=[];l<s.length;l++)c=s[l],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&d.push(r[c][0]),r[c]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);b&&b(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,c=1;c<a.length;c++){var s=a[c];0!==r[s]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},c={app:0},r={app:0},o=[];function s(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d0c19e3":"89995ac1","chunk-2d0d0b79":"dfc2fee9","chunk-69a8ee1f":"a605e0c4"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(e){var t=[],a={"chunk-69a8ee1f":1};c[e]?t.push(c[e]):0!==c[e]&&a[e]&&t.push(c[e]=new Promise((function(t,a){for(var n="css/"+({}[e]||e)+"."+{"chunk-2d0c19e3":"31d6cfe0","chunk-2d0d0b79":"31d6cfe0","chunk-69a8ee1f":"54b12866"}[e]+".css",r=i.p+n,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var u=o[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===r))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===n||l===r)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var n=t&&t.target&&t.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete c[e],b.parentNode.removeChild(b),a(o)},b.href=r;var g=document.getElementsByTagName("head")[0];g.appendChild(b)})).then((function(){c[e]=0})));var n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,a){n=r[e]=[t,a]}));t.push(n[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(b);var a=r[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+c+")",d.name="ChunkLoadError",d.type=n,d.request=c,a[1](d)}r[e]=void 0}};var b=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var b=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"01ac":function(e,t,a){"use strict";a.r(t);var n=a("7a23");const c={class:"bg-white rounded"},r={class:"text-center"},o={class:"container-fluid"},s={class:"row"},i={class:"col-md-12"},u={class:"col-12 card p-3",id:"list-form"},l={class:"w-100 align-items-center"};function d(e,t,a,d,b,g){return Object(n["q"])(!0),Object(n["d"])(n["a"],null,Object(n["w"])(d.bugs,a=>(Object(n["q"])(),Object(n["d"])("div",{key:a.id,class:"col-lg-4 listing my-3"},[Object(n["h"])("div",c,[Object(n["h"])("div",r,[Object(n["h"])("div",o,[Object(n["h"])("div",s,[Object(n["h"])("h5",i,Object(n["z"])(a.title),1),Object(n["h"])("a",{onClick:t=>e.editBug(a.id),class:"card-link primary"},"Edit",8,["onClick"]),Object(n["h"])("a",{onClick:e=>d.deleteBug(a.id),class:"card-link danger"},"Delete",8,["onClick"]),Object(n["h"])("a",{onClick:e=>d.createNote(a.id),class:"card-link primary"},"Add List",8,["onClick"]),Object(n["h"])("a",{onClick:t=>e.deleteNote(a.id,e.list.id),class:"card-link danger"},"Delete List",8,["onClick"]),Object(n["h"])("div",u,[Object(n["h"])("form",{onSubmit:t[3]||(t[3]=Object(n["F"])((...t)=>e.createList&&e.createList(...t),["prevent"]))},[Object(n["h"])("div",l,[Object(n["E"])(Object(n["h"])("input",{type:"text",class:"form-control",placeholder:"title","onUpdate:modelValue":t[1]||(t[1]=e=>d.state.title=e)},null,512),[[n["B"],d.state.title]]),Object(n["E"])(Object(n["h"])("input",{type:"text",class:"form-control",placeholder:"name","onUpdate:modelValue":t[2]||(t[2]=e=>d.state.name=e)},null,512),[[n["B"],d.state.name]]),Object(n["h"])("button",{type:"submit",class:["btn",{"btn-primary":d.state.title,"btn-danger":!d.state.name}],disabled:!d.state.title}," Add List ",10,["disabled"])])],32)])])])])])]))),128)}var b=a("5c40"),g=a("a1e9"),h=a("83fc"),p=a("6c02"),f=a("af90"),O=a("5a80"),m={setup(){const e=Object(p["c"])();Object(b["v"])(()=>f["a"].getBugs());const t=Object(g["i"])({title:"",name:""});return{state:t,async createNote(){h["a"].currentNote=await({name:t.title,descriptiom:t.name,bugid:e.params.id}),O["a"].createNote(h["a"].currentNote),t.title="",t.name=""},async editNote(){t.title=h["a"].currentNote.name,t.name=h["a"].currentNote.description},bugs:Object(b["d"])(()=>h["a"].bugs),Currentbug:Object(b["d"])(()=>h["a"].activeBug),async deleteBug(){await f["a"].deleteBug(e.params.id)}}}};m.render=d;t["default"]=m},"16a4":function(e,t,a){},1835:function(e,t,a){},"2b20":function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a("bc3a"),c=a.n(n),r=a("8c89");const o=c.a.create({baseURL:r["b"],timeout:8e3})},"41cb":function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a("6c02"),c=a("8816");function r(e){return()=>a("a2f9")(`./${e}.vue`)}const o=[{path:"/",name:"Home",component:r("HomePage")},{path:"/bugs",name:"Bugs",component:r("Bug")},{path:"/bugDetails/id:/:id",name:"bug-details",component:r("BugDetailsPage")},{path:"/about",name:"About",component:r("AboutPage")},{path:"/account",name:"Account",component:r("AccountPage"),beforeEnter:c["a"]}],s=Object(n["a"])({linkActiveClass:"router-link-active",linkExactActiveClass:"router-link-exact-active",history:Object(n["b"])(),routes:o})},"56d7":function(e,t,a){"use strict";a.r(t);a("5363"),a("1157"),a("4989");var n=a("7a23");const c=Object(n["h"])("footer",null,[Object(n["h"])("div",{class:"bg-dark text-light text-center p-4"}," Made with 💖 by CodeWorks ")],-1);function r(e,t,a,r,o,s){const i=Object(n["x"])("Navbar"),u=Object(n["x"])("router-view");return Object(n["q"])(),Object(n["d"])(n["a"],null,[Object(n["h"])("header",null,[Object(n["h"])(i)]),Object(n["h"])("main",null,[Object(n["h"])(u)]),c],64)}var o=a("83fc"),s={name:"App",setup(){return{appState:Object(n["b"])(()=>o["a"])}}};a("5d0a");s.render=r;var i=s;function u(e){const t=a("ccc2");t.keys().forEach(a=>{const n=t(a),c=n.default||n,r=c.name||a.substr(a.lastIndexOf("/")+1).replace(/\.\w+$/,"");e.component(r,c)})}var l=a("41cb");const d=Object(n["c"])(i);u(d),d.use(l["a"]).mount("#app")},"5a80":function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a("83fc"),c=a("8a4e"),r=a("2b20");class o{async getNotes(e){try{const t=await r["a"].get("/api/bugs/"+e+"/notes");e&&(n["a"].notes=t.data),c["a"].log("Check getNotes",t.data)}catch(t){c["a"].error("Problem in NotesService getNotes",t)}}async createNote(e){try{const t=await r["a"].post("/api/notes",e);c["a"].log(t.data),n["a"].Notes.push(t.data)}catch(t){c["a"].error("Problem in NotesService createNote",t)}}async deleteNote(e,t){try{let a=null;a=await r["a"].delete("api/notes/"+e,t),c["a"].log(a.data),c["a"].log("Delete Notes",a.data)}catch(a){c["a"].error("Problem in NotesService Delete Note",a)}}async editNote(e,t){try{let a=null;a=await r["a"].put("api/notes/"+e,t),c["a"].log(a.data),c["a"].log("Edit Notes",a.data)}catch(a){c["a"].error("Problem in NotesService Edit Note",a)}}}const s=new o},"5d0a":function(e,t,a){"use strict";a("7da4")},"5d40":function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a("3d20"),c=a.n(n);class r{static async confirmAction(e="Are you sure?",t="You won't be able to revert this!",a="warning",n="Yes, delete it!"){try{const r=await c.a.fire({title:e,text:t,icon:a,showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:n});return!!r.isConfirmed}catch(r){return!1}}static toast(e="Warning!",t="warning",a="top-end",n=3e3,r=!0){c.a.fire({title:e,icon:t,position:a,timer:n,timerProgressBar:r,toast:!0,showConfirmButton:!1})}}},6428:function(e,t,a){"use strict";a("1835")},"74f4":function(e,t,a){"use strict";a("16a4")},"7da4":function(e,t,a){},"83fc":function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a("7a23");const c=Object(n["u"])({user:{},account:{},bugs:[],activeBug:{},notes:[],newBug:{}})},"8a4e":function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a("8c89");function c(e,t){if(n["d"])console[e](`[${e}] :: ${(new Date).toLocaleTimeString()} :: `,...t);else{switch(e){case"log":case"assert":return}console[e](`[${e}] :: ${(new Date).toLocaleTimeString()} :: `,...t)}}const r={log(){c("log",arguments)},error(){c("error",arguments)},warn(){c("warn",arguments)},assert(){c("assert",arguments)},trace(){c("trace",arguments)}}},"8c89":function(e,t,a){"use strict";a.d(t,"d",(function(){return n})),a.d(t,"b",(function(){return c})),a.d(t,"e",(function(){return r})),a.d(t,"a",(function(){return o})),a.d(t,"c",(function(){return s}));const n=window.location.origin.includes("localhost"),c=n?"http://localhost:3000":"",r="wanderse.us.auth0.com",o="http://bug-log.com/",s="eIVgP4CebMWv0gU4n5ixT5ybxKerQI7x"},"9d8d":function(e,t,a){"use strict";a.r(t);var n=a("7a23"),c=a("f52d"),r=a.n(c);const o=Object(n["G"])("data-v-2424924f");Object(n["t"])("data-v-2424924f");const s={class:"navbar navbar-expand-lg navbar-dark bg-dark"},i=Object(n["h"])("div",{class:"d-flex flex-column align-items-center"},[Object(n["h"])("img",{alt:"logo",src:r.a,height:"45"})],-1),u=Object(n["h"])("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(n["h"])("span",{class:"navbar-toggler-icon"})],-1),l={class:"collapse navbar-collapse",id:"navbarText"},d={class:"navbar-nav mr-auto"},b={class:"nav-item"},g=Object(n["g"])(" Bugs Page "),h={class:"nav-item"},p=Object(n["g"])(" About "),f={class:"navbar-text"},O={key:1,class:"dropdown"},m={class:"mx-3"},v=Object(n["h"])("div",{class:"list-group-item list-group-item-action hoverable"}," Account ",-1);Object(n["r"])();const j=o((e,t,a,c,r,j)=>{const y=Object(n["x"])("router-link");return Object(n["q"])(),Object(n["d"])("nav",s,[Object(n["h"])(y,{class:"navbar-brand d-flex",to:{name:"Home"}},{default:o(()=>[i]),_:1}),u,Object(n["h"])("div",l,[Object(n["h"])("ul",d,[Object(n["h"])("li",b,[Object(n["h"])(y,{to:{name:"Home"},class:"nav-link"},{default:o(()=>[g]),_:1})]),Object(n["h"])("li",h,[Object(n["h"])(y,{to:{name:"About"},class:"nav-link"},{default:o(()=>[p]),_:1})])]),Object(n["h"])("span",f,[c.user.isAuthenticated?(Object(n["q"])(),Object(n["d"])("div",O,[Object(n["h"])("div",{class:"dropdown-toggle",onClick:t[2]||(t[2]=e=>c.state.dropOpen=!c.state.dropOpen)},[Object(n["h"])("img",{src:c.user.picture,alt:"user photo",height:"40",class:"rounded"},null,8,["src"]),Object(n["h"])("span",m,Object(n["z"])(c.user.name),1)]),Object(n["h"])("div",{class:["dropdown-menu p-0 list-group w-100",{show:c.state.dropOpen}],onClick:t[4]||(t[4]=e=>c.state.dropOpen=!1)},[Object(n["h"])(y,{to:{name:"Account"}},{default:o(()=>[v]),_:1}),Object(n["h"])("div",{class:"list-group-item list-group-item-action hoverable",onClick:t[3]||(t[3]=(...e)=>c.logout&&c.logout(...e))}," logout ")],2)])):(Object(n["q"])(),Object(n["d"])("button",{key:0,class:"btn btn-outline-primary text-uppercase",onClick:t[1]||(t[1]=(...e)=>c.login&&c.login(...e))}," Login "))])])])});var y=a("8816"),w=a("83fc"),k=a("8c89"),N=a("41cb"),C=a("8a4e"),x=a("2b20");class E{async getAccount(){try{const e=await x["a"].get("/account");w["a"].account=e.data}catch(e){C["a"].error("HAVE YOU STARTED YOUR SERVER YET???",e)}}}const B=new E;var A=a("8e27");let T=!1,P=[];const S={connection:"connection",connected:"connected",disconnect:"disconnect",authenticate:"authenticate",authenticated:"authenticated",userConnected:"userConnected",userDisconnected:"userDisconnected",error:"error"};class D{constructor(e=k["b"]){this.socket=Object(A["io"])(e||k["b"]),this.on(S.connected,this.onConnected).on(S.authenticated,this.onAuthenticated).on(S.error,this.onError)}on(e,t){return this.socket.on(e,t.bind(this)),this}onConnected(e){C["a"].log("[SOCKET_CONNECTION]",e),T=!0}onAuthenticated(e){C["a"].log("[SOCKET_AUTHENTICATED]",e);const t=[...P];P=[],t.forEach(e=>{this.emit(e.action,e.payload)})}authenticate(e){this.socket.emit(S.authenticate,e)}onError(e){C["a"].error("[SOCKET_ERROR]",e)}emit(e,t){if(!T)return C["a"].log("[ENQUEING_ACTION]",{action:e,payload:t}),P.push({action:e,payload:t});this.socket.emit(e,t)}}var _=a("5d40");class U extends D{constructor(){super(),this.on("error",this.onError)}onError(e){C["a"].error("[SOCKET_ERROR]",e),_["a"].toast(e.message,"error")}}const L=new U;var q=a("af90");const R=Object(y["b"])({domain:k["e"],clientId:k["c"],audience:k["a"],useRefreshTokens:!0,onRedirectCallback:e=>{N["a"].push(e&&e.targetUrl?e.targetUrl:window.location.pathname)}});async function I(e){if(!R.isAuthenticated)return e;const t=1e3*R.identity.exp,a=t<Date.now(),n=t<Date.now()+432e5;return a?await R.loginWithPopup():n&&await R.getTokenSilently(),x["a"].defaults.headers.authorization=R.bearer,L.authenticate(R.bearer),e}R.on(R.AUTH_EVENTS.AUTHENTICATED,(async function(){x["a"].defaults.headers.authorization=R.bearer,x["a"].interceptors.request.use(I),w["a"].user=R.user,await B.getAccount(),L.authenticate(R.bearer),q["a"].getBugs()}));var H={name:"Navbar",setup(){const e=Object(n["u"])({dropOpen:!1});return{state:e,user:Object(n["b"])(()=>w["a"].user),async login(){R.loginWithPopup()},async logout(){R.logout({returnTo:window.location.origin})}}}};a("74f4");H.render=j,H.__scopeId="data-v-2424924f";t["default"]=H},a2f9:function(e,t,a){var n={"./AboutPage.vue":["478b","chunk-2d0c19e3"],"./BugDetailsPage.vue":["68bc","chunk-2d0d0b79"],"./HomePage.vue":["78a7","chunk-69a8ee1f"]};function c(e){if(!a.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],c=t[0];return a.e(t[1]).then((function(){return a(c)}))}c.keys=function(){return Object.keys(n)},c.id="a2f9",e.exports=c},af90:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a("83fc"),c=a("8a4e"),r=a("2b20"),o=a("41cb");class s{async getBugs(){try{let e=null;e=await r["a"].get("/api/bugs"),n["a"].bugs=e.data,c["a"].log("Check getBugsAll",n["a"].bugs)}catch(e){c["a"].error("Problem in BugsService get Bugs",e)}}async getBugDetails(e){try{let t=null;t=await r["a"].get("/api/bugs/"+e),c["a"].log("suspect res Data",t.data),n["a"].activeBug=t.data,c["a"].log("Check getBugsDetails",n["a"].bugs)}catch(t){c["a"].error("Problem in BugsService getBugDetails",t)}}async deleteBug(e){try{await r["a"].delete("/api/bugs/"+e)}catch(t){c["a"].error("Problem in BugsService Delete Bug",t)}}async createBug(e){try{let t=null;t=await r["a"].post("/api/bugs/",e),c["a"].log(t.data),n["a"].activeBug=t.data,o["a"].push({name:"bug-details",params:{id:t.data.id}})}catch(t){c["a"].error("Problem in BugsService Create Bug",t)}}async updateBug(e,t){try{let a=null;a=await r["a"].delete("/api/bugs/"+e,t),c["a"].log(a.data),c["a"].log("Delete Bugss",a.data)}catch(a){c["a"].error("Problem in BugsService Update Bug",a)}}}const i=new s},ccc2:function(e,t,a){var n={"./Bug.vue":"01ac","./Notes.vue":"f125","./navbar.vue":"9d8d"};function c(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}c.keys=function(){return Object.keys(n)},c.resolve=r,e.exports=c,c.id="ccc2"},f125:function(e,t,a){"use strict";a.r(t);var n=a("7a23");const c={key:0},r={class:"col d-flex flex-wrap space-between"},o={class:"col-12 d-flex space-between "},s={class:"col-2"},i={key:0,class:"card m-2 p-2 bg-danger shadow"},u={class:"row"},l={class:"col-md-12 p-3"},d={class:"row"},b={class:"col-12 d-flex justify-content-center p-3"};function g(e,t,a,g,h,p){return g.state.notes?(Object(n["q"])(),Object(n["d"])("div",c,[(Object(n["q"])(!0),Object(n["d"])(n["a"],null,Object(n["w"])(g.state.notes,e=>(Object(n["q"])(),Object(n["d"])("div",{class:"col-12 d-flex space-between border",key:e.id,"note:note":""},[Object(n["h"])("div",r,[Object(n["h"])("span",null,[Object(n["h"])("img",{class:"rounded-pill",style:{height:"30px"},src:e.creator.picture,alt:"nogetty"},null,8,["src"]),Object(n["h"])("p",null,Object(n["z"])(e.creator.email),1)]),Object(n["h"])("div",o,[Object(n["h"])("span",null,[Object(n["h"])("i",{class:"fa fa-edit text-primary mx-1",onClick:t=>g.state.activeNoteEdit=e.id,"aria-hidden":"true"},null,8,["onClick"])]),Object(n["g"])(" "+Object(n["z"])(e.body)+" ",1),Object(n["h"])("div",s,[Object(n["h"])("span",null,[Object(n["h"])("i",{class:"\r\n                  fa\r\n                  fa-trash\r\n                  text-danger",onClick:t=>g.deleteNote(e),"aria-hidden":"true"},null,8,["onClick"])]),g.state.activeNoteEdit==e.id?(Object(n["q"])(),Object(n["d"])("form",i,[Object(n["h"])("div",u,[Object(n["h"])("div",l,[Object(n["E"])(Object(n["h"])("input",{class:"mx-2 rounded text-center p-2","onUpdate:modelValue":t[1]||(t[1]=e=>g.state.newNote.body=e)},null,512),[[n["B"],g.state.newNote.body]])])]),Object(n["h"])("div",d,[Object(n["h"])("div",b,[Object(n["h"])("button",{type:"submit",class:"submit-edit mx-3 btn btn-primary",onClick:t=>g.editNote(e)}," Submit ",8,["onClick"]),Object(n["h"])("button",{type:"button",class:"cancel-edit mx-3 btn btn-primary",onClick:t[2]||(t[2]=e=>g.state.activeNoteEdit="")}," Cancel ")])])])):Object(n["e"])("",!0)])])])]))),128))])):Object(n["e"])("",!0)}var h=a("5a80"),p=a("5d40"),f=a("83fc"),O=a("6c02"),m={setup(){const e=Object(O["c"])();h["a"].getNotes(e.params.id);const t=Object(n["u"])({newNote:{bug:{},body:""},notes:Object(n["b"])(()=>f["a"].notes),user:Object(n["b"])(()=>f["a"].user),activeNoteEdit:""});return{state:t,async deleteNote(e){await p["a"].confirmAction("Please confirm this deletion!")&&h["a"].deleteNote(e.id)},async editNote(e){h["a"].editNote(e.id)},bugs:Object(n["b"])(()=>f["a"].bugs),notes:Object(n["b"])(()=>f["a"].notes)}}};a("6428");m.render=g;t["default"]=m},f52d:function(e,t,a){e.exports=a.p+"img/image.578381c2.png"}});