(this.webpackJsonpfirst_template=this.webpackJsonpfirst_template||[]).push([[0],{38:function(e,t,a){e.exports=a(70)},43:function(e,t,a){},44:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},45:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(33),l=a.n(r),i=(a(43),a(4)),o=(a(44),a(45),a(12)),s=a.n(o),u=a(2),m=a(18),f=a.n(m),d=a(82),p="https://4cce06fecf8c.ngrok.io",E=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),r=a[0],l=a[1];return c.a.createElement("div",{className:"input__wrapper"},c.a.createElement("div",{className:"input__title__container",style:r?{color:"#ad5050",transition:".2s all"}:{transition:".2s all"}},e.title),c.a.createElement("input",{className:"reg__input",onFocus:function(){return l(!0)},onBlur:function(){return l(!1)},value:e.value,onChange:function(t){return e.change(t.target.value)},type:"password"===e.title||"confirm password"===e.title?"password":"text",placeholder:""}),"email"===e.title&&c.a.createElement("div",{className:"input__subtitle"},"ERR"===e.freeEmailStatus&&c.a.createElement("span",null,"\u0414\u043e\u043b\u0431\u0430\u0435\u0431 \u0432\u0432\u0435\u0434\u0438 \u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u043e"),"NO"===e.freeEmailStatus&&c.a.createElement("span",null,"\u0422\u0430\u043a\u043e\u0439 \u043f\u0438\u0434\u0430\u0440 \u0443\u0436\u0435 \u0435\u0441\u0442\u044c"),"LOAD"===e.freeEmailStatus&&c.a.createElement(d.a,{size:20}),"OK"===e.freeEmailStatus&&c.a.createElement("span",{style:{color:"#4fb065"}},"\u0422\u0430\u043a\u043e\u0439 \u043f\u0438\u0434\u0430\u0440\u0441\u043a\u043e\u0439 \u043f\u043e\u0447\u0442\u044b \u043d\u0438 \u0443 \u043a\u043e\u0433\u043e \u043d\u0435\u0442")),"username"===e.title&&c.a.createElement("div",{className:"input__subtitle"},"NO"===e.freeNameStatus&&c.a.createElement("span",null,"\u041a\u043e\u0440\u0435\u0448\u0435\u0439 \u0436\u043e\u043f\u043e\u0451\u0431\u043e\u0432 \u043d\u0430\u043c \u043d\u0435 \u043d\u0430\u0434\u043e"),"LOAD"===e.freeNameStatus&&c.a.createElement(d.a,{size:20}),"OK"===e.freeNameStatus&&c.a.createElement("span",{style:{color:"#4fb065"}},"\u0422\u044b \u0443 \u043d\u0430\u0441 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u043f\u0438\u0434\u0440\u0438\u043b\u0430")))},O=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(""),o=Object(i.a)(l,2),u=o[0],m=o[1],O=Object(n.useState)(""),v=Object(i.a)(O,2),b=v[0],_=v[1],h=Object(n.useState)(""),g=Object(i.a)(h,2),w=g[0],S=g[1],N=Object(n.useState)(""),j=Object(i.a)(N,2),y=j[0],R=j[1],T=Object(n.useState)(""),k=Object(i.a)(T,2),z=k[0],A=k[1],D=Object(n.useState)(null),I=Object(i.a)(D,2),C=I[0],L=I[1],J=Object(n.useState)(null),B=Object(i.a)(J,2),K=B[0],x=B[1],G=Object(n.useState)(null),P=Object(i.a)(G,2);P[0],P[1];Object(n.useEffect)((function(){""===w?(L(null),clearTimeout(window.emailTime)):(clearTimeout(window.emailTime),window.emailTime=setTimeout((function(){L("LOAD"),!function(e){return/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(String(e).toLowerCase())}(w)?L("ERR"):s.a.post("".concat(p,"/isfreemail"),JSON.stringify({mail:w})).then((function(e){L(200===e.status?"OK":"NO"),console.log("response = ",e)})).catch((function(e){L("NO")}))}),1e3))}),[w]),Object(n.useEffect)((function(){""===b?(x(null),clearTimeout(window.nameTime)):(clearTimeout(window.nameTime),window.nameTime=setTimeout((function(){x("LOAD"),s.a.post("".concat(p,"/isfreeuname"),JSON.stringify({username:b})).then((function(e){x("OK")})).catch((function(e){x("NO")}))}),1e3))}),[b]),Object(n.useEffect)((function(){C}),[C]);return c.a.createElement("div",{className:"signup__container"},c.a.createElement(E,{title:"full name",value:u,change:m}),c.a.createElement(E,{title:"username",value:b,change:_,freeNameStatus:K}),c.a.createElement(E,{title:"email",value:w,change:S,freeEmailStatus:C}),c.a.createElement(E,{title:"password",value:y,change:R}),c.a.createElement(E,{title:"confirm password",value:z,change:A,password:y}),c.a.createElement("div",{className:"button__container",onClick:function(){return r(!0),void s()({url:"".concat(p,"/signup"),method:"post",headers:{},data:JSON.stringify({fullName:u,username:b,email:w,password:f()(y)})}).then((function(e){r(!1),alert("nice")})).catch((function(e){}))}},c.a.createElement("span",{style:a?{display:"none"}:{}},"Sign up"),c.a.createElement("div",{className:"loader__wrapper",style:a?{}:{display:"none"}},c.a.createElement(d.a,{color:"primary",size:25}))))},v=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(""),o=Object(i.a)(l,2),u=o[0],m=o[1],O=Object(n.useState)(!1),v=Object(i.a)(O,2),b=v[0],_=v[1];return c.a.createElement("div",{className:"signup__container"},c.a.createElement(E,{title:"username",value:a,change:r}),c.a.createElement(E,{title:"password",value:u,change:m}),c.a.createElement("div",{className:"button__container",onClick:function(){return _(!0),void s()({url:"".concat(p,".io/signup"),method:"post",headers:{},data:JSON.stringify({username:a,password:f()(u)})}).then((function(e){_(!1),alert("nice")})).catch((function(e){}))}},c.a.createElement("span",{style:b?{display:"none"}:{}},"Sign in"),c.a.createElement("div",{className:"loader__wrapper",style:b?{}:{display:"none"}},c.a.createElement(d.a,{color:"primary",size:25}))))};function b(e,t){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var a=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(t);return null===a?"":decodeURIComponent(a[1].replace(/\+/g," "))}var _=function(e){console.log("props = ",e);var t=Object(n.useState)("LOAD"),a=Object(i.a)(t,2),r=a[0],l=a[1];return Object(n.useEffect)((function(){if("confirmemail"===b("type",e.location.search)){var t=b("token",e.location.search),a=b("mail",e.location.search);if(console.log("mail:",a),console.log("token:",t),!t||!a)return void l("BAD__PARAMS");s()({url:"".concat(p,"/verify"),method:"post",headers:{},data:JSON.stringify({email:a,token:t})}).then((function(e){l("OK")})).catch((function(e){l("ERR")}))}else l("RED__SIGN")}),[r]),"RED__SIGN"===r?c.a.createElement(u.a,{to:"/sign"}):"LOAD"===r?c.a.createElement("div",null,"loading..."):"BAD__PARAMS"===r?c.a.createElement("div",null,"bad params"):"ERR"===r?c.a.createElement("div",null,"err"):"OK"===r?c.a.createElement(u.a,{to:"/profile"}):void 0},h=function(){var e=Object(n.useState)(1),t=Object(i.a)(e,2),a=t[0],r=t[1];return c.a.createElement("div",{id:"wrapper"},c.a.createElement(u.d,null,c.a.createElement(u.b,{path:"/sign",render:function(){return c.a.createElement("div",{className:"main__container"},c.a.createElement("div",{className:"reg__container"},c.a.createElement("div",{className:"swap__container"},c.a.createElement("div",{className:"swap__element",onClick:function(){return r(1)},style:1===a?{color:"#c96f6f"}:{}},"SIGN UP"),c.a.createElement("div",{className:"swap__element",onClick:function(){return r(2)},style:2===a?{color:"#c96f6f"}:{}},"SIGN IN")),c.a.createElement("div",{style:{width:"100%"}},1===a&&c.a.createElement(O,null),2===a&&c.a.createElement(v,null))))}}),c.a.createElement(u.b,{path:"/profile",render:function(e){return c.a.createElement("div",null,"PROFILE BITCH")}}),c.a.createElement(u.b,{path:"/",render:function(e){return c.a.createElement(_,e)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var g=a(17);l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(g.a,null,c.a.createElement(h,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.8640bff7.chunk.js.map