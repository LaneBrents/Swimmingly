(this["webpackJsonpjwt-boilerplate"]=this["webpackJsonpjwt-boilerplate"]||[]).push([[0],{142:function(e,t,n){},143:function(e,t,n){},153:function(e,t,n){},154:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(54),c=n.n(a),o=(n(141),n(142),n(8)),s=n(9),i=(n(143),n(14)),l=n(40),u=n(37),j=n(12),h=n.n(j),d=n(1);function b(e){return Object(d.jsx)("span",{className:"error",children:e.error})}var p=n(171),m=n(172),O=n(124),g=n(167),x=n(173),f=n(169);function v(){var e=localStorage.getItem("token");e&&(JSON.parse(atob(e.split(".")[1])).exp<Date.now()/1e3&&(localStorage.removeItem("token"),e=null));return e}var w={setToken:function(e){e?localStorage.setItem("token",e):localStorage.removeItem("token")},getToken:v,removeToken:function(){localStorage.removeItem("token")},getUserFromToken:function(){var e=v();return e?JSON.parse(atob(e.split(".")[1])).user:null}},k="/api/users/";var y={signup:function(e){return fetch(k+"signup",{method:"POST",body:e}).then((function(e){return e.ok?e.json():e.json().then((function(e){throw console.log(e),new Error(e.err)}))})).then((function(e){var t=e.token;return w.setToken(t)}))},logout:function(){w.removeToken()},login:function(e){return fetch(k+"login",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():e.json().then((function(e){throw console.log(e),new Error(e.err)}))})).then((function(e){var t=e.token;return w.setToken(t)}))},getUser:function(){return w.getUserFromToken()},getProfile:function(e){return console.log("getProfile calling"),fetch(k+e,{headers:{Authorization:"Bearer "+w.getToken()}}).then((function(e){if(e.ok)return e.json();throw new Error("Error from getProfile Request, check the server terminal!")}))}};function S(e,t){return e===t}function C(e){var t=Object(r.useState)({message:"",passwordError:!1}),n=Object(o.a)(t,2),a=n[0],c=n[1],j=Object(r.useState)({username:"",email:"",password:"",passwordConf:""}),v=Object(o.a)(j,2),w=v[0],k=v[1],C=Object(r.useState)(""),U=Object(o.a)(C,2),T=U[0],A=U[1],L=Object(s.g)();function E(e){k(Object(u.a)(Object(u.a)({},w),{},Object(l.a)({},e.target.name,e.target.value)))}function N(){return(N=Object(i.a)(h.a.mark((function t(n){var r,a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),S(w.password,w.passwordConf)){t.next=3;break}return t.abrupt("return",c({message:"Passwords Must Match!",passwordError:!0}));case 3:for(a in c({message:"",passwordError:!1}),(r=new FormData).append("photo",T),w)r.append(a,w[a]);return t.prev=7,t.next=10,y.signup(r);case 10:e.handleSignUpOrLogin(),L("/"),t.next=18;break;case 14:t.prev=14,t.t0=t.catch(7),console.log(t.t0),c({message:t.t0.message,passwordError:!1});case 18:case"end":return t.stop()}}),t,null,[[7,14]])})))).apply(this,arguments)}return Object(d.jsx)(p.a,{textAlign:"center",style:{height:"100vh",width:"100vw"},verticalAlign:"middle",children:Object(d.jsxs)(p.a.Column,{style:{maxWidth:450},children:[Object(d.jsxs)(m.a,{as:"h2",color:"teal",textAlign:"center",children:[Object(d.jsx)(O.a,{src:"https://i.imgur.com/s4LrnlU.png"})," Sign Up"]}),Object(d.jsxs)(g.a,{onSubmit:function(e){return N.apply(this,arguments)},children:[Object(d.jsxs)(x.a,{stacked:!0,children:[Object(d.jsx)(g.a.Input,{name:"username",placeholder:"username",value:w.username,onChange:E,required:!0}),Object(d.jsx)(g.a.Input,{type:"email",name:"email",placeholder:"email",value:w.email,onChange:E,required:!0}),Object(d.jsx)(g.a.Input,{error:a.passwordError,name:"password",type:"password",placeholder:"password",value:w.password,onChange:E,required:!0}),Object(d.jsx)(g.a.Input,{error:a.passwordError,name:"passwordConf",type:"password",placeholder:"Confirm Password",value:w.passwordConf,onChange:E,required:!0}),Object(d.jsx)(g.a.Field,{children:Object(d.jsx)(g.a.Input,{type:"file",name:"photo",placeholder:"upload image",onChange:function(e){console.log(e.target.files," < - this is e.target.files!"),A(e.target.files[0])}})}),Object(d.jsx)(f.a,{type:"submit",className:"btn",children:"Signup"})]}),a.message?Object(d.jsx)(b,{error:a.message}):null]})]})})}n(153);var U=n(20),T=n(168);function A(e){var t=Object(r.useState)(""),n=Object(o.a)(t,2),a=n[0],c=n[1],j=Object(r.useState)({email:"",password:""}),v=Object(o.a)(j,2),w=v[0],k=v[1],S=Object(s.g)();function C(e){k(Object(u.a)(Object(u.a)({},w),{},Object(l.a)({},e.target.name,e.target.value)))}function A(){return(A=Object(i.a)(h.a.mark((function t(n){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,t.next=4,y.login(w);case 4:e.handleSignUpOrLogin(),S("/dashboard"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),c(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}return Object(d.jsx)(p.a,{textAlign:"center",style:{height:"100vh",width:"100vw"},verticalAlign:"middle",children:Object(d.jsxs)(p.a.Column,{style:{maxWidth:450},children:[Object(d.jsxs)(m.a,{as:"h2",color:"teal",textAlign:"center",children:[Object(d.jsx)(O.a,{src:"https://i.imgur.com/s4LrnlU.png"})," Log-in to your account"]}),Object(d.jsx)(g.a,{onSubmit:function(e){return A.apply(this,arguments)},children:Object(d.jsxs)(x.a,{stacked:!0,children:[Object(d.jsx)(g.a.Input,{type:"email",name:"email",placeholder:"email",value:w.email,onChange:C,required:!0}),Object(d.jsx)(g.a.Input,{name:"password",type:"password",placeholder:"password",value:w.password,onChange:C,required:!0}),Object(d.jsx)(f.a,{color:"teal",fluid:!0,size:"large",type:"submit",className:"btn",children:"Login"})]})}),Object(d.jsxs)(T.a,{children:["New to us? ",Object(d.jsx)(U.b,{to:"/signup",children:"Sign Up"})]}),a?Object(d.jsx)(b,{error:a}):null]})})}var L=n(79);function E(e){var t=e.loggedUser,n=e.handleLogout;return console.log(t,"loggedUser in header"),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(m.a,{as:"h2",floated:"left",children:Object(d.jsx)(U.b,{to:"/dashboard",children:Object(d.jsx)(L.a,{name:"home"})})}),Object(d.jsx)(m.a,{as:"h2",floated:"center",children:t?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(U.b,{to:"/dashboard",children:" Dashboard "}),Object(d.jsx)(U.b,{to:"/MyTeam",children:" My Team "}),Object(d.jsx)(U.b,{to:"/Heatsheet",children:" Heatsheet "})]}):null}),Object(d.jsxs)(m.a,{as:"h2",floated:"right",children:[Object(d.jsx)(U.b,{to:"",onClick:n,children:"Logout"}),Object(d.jsx)(U.b,{to:"/".concat(null===t||void 0===t?void 0:t.username),children:Object(d.jsx)(O.a,{src:null!==t&&void 0!==t&&t.photoUrl?null===t||void 0===t?void 0:t.photoUrl:"https://react.semantic-ui.com/images/wireframe/square-image.png",avatar:!0})})]})]})}var N=n(166);function I(){return Object(d.jsx)(N.a,{size:"small",active:!0,children:"Loading"})}function P(e){var t=e.loggedUser,n=e.handleLogout,a=Object(r.useState)({}),c=Object(o.a)(a,2),l=(c[0],c[1]),u=Object(r.useState)(!0),j=Object(o.a)(u,2),m=j[0],O=j[1],g=Object(r.useState)(""),x=Object(o.a)(g,2),f=x[0],v=x[1],w=Object(s.h)().username,k=Object(r.useCallback)(Object(i.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.getProfile(w);case 3:t=e.sent,O(!1),l(t.data.user),console.log(t),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.message),v("Profile does not exist! You are in the wrong in place");case 13:case"end":return e.stop()}}),e,null,[[0,9]])}))),[w]);return Object(r.useEffect)((function(){console.log("firing!"),k()}),[w,k]),f?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(E,{handleLogout:n,loggedUser:t}),Object(d.jsx)(b,{error:f}),";"]}):m?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(E,{handleLogout:n,loggedUser:t}),Object(d.jsx)(I,{})]}):Object(d.jsxs)(p.a,{children:[Object(d.jsx)(p.a.Row,{children:Object(d.jsx)(p.a.Column,{children:Object(d.jsx)(E,{handleLogout:n,loggedUser:t})})}),Object(d.jsx)(p.a.Row,{}),Object(d.jsx)(p.a.Row,{centered:!0,children:Object(d.jsx)(p.a.Column,{style:{maxWidth:750}})})]})}var q=n(70);function F(e){var t=Object(r.useState)({meet:""}),n=Object(o.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)(""),i=Object(o.a)(s,2),l=i[0],u=i[1];return Object(d.jsx)(x.a,{children:Object(d.jsxs)(g.a,{onSubmit:function(t){t.preventDefault();var n=new FormData;n.append("photo",l),n.append("meet",a.meet),e.handleAddHeatsheet(n)},children:[Object(d.jsx)(g.a.Input,{className:"form-control",name:"meet",value:a.meet,placeholder:"What Swim Meet is this?",onChange:function(e){c({meet:e.target.value})},required:!0}),Object(d.jsx)(g.a.Field,{children:Object(d.jsx)(g.a.Input,{type:"file",name:"photo",placeholder:"Upload Heatsheet",onChange:function(e){console.log(e.target.files," < - this is e.target.files!"),u(e.target.files[0])}})}),Object(d.jsx)(f.a,{type:"submit",className:"btn",children:"Add Heatsheet"})]})})}var W="/api/heatsheet";function R(e){return fetch(W,{method:"POST",body:e,headers:{Authorization:"Bearer "+w.getToken()}}).then((function(e){if(e.ok)return e.json();throw new Error("Check your server terminal for error.")}))}function D(){return fetch(W,{headers:{Authorization:"Bearer "+w.getToken()}}).then((function(e){return e.ok?e.json():e.json().then((function(e){throw console.log(e),new Error(e.err,"<< response.err create(): heatsheetAPI")}))}))}function z(e){var t=e.loggedUser,n=e.handleLogout,a=Object(r.useState)(""),c=Object(o.a)(a,2),s=(c[0],c[1],Object(r.useState)(!0)),l=Object(o.a)(s,2),u=(l[0],l[1]),j=Object(r.useState)([]),b=Object(o.a)(j,2),m=(b[0],b[1]);function O(){return g.apply(this,arguments)}function g(){return(g=Object(i.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D();case 3:t=e.sent,m(Object(q.a)(t.data)),u(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),u(!1);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function x(){return x=Object(i.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u(!0),e.next=4,R(t);case 4:n=e.sent,console.log(n),O(),u(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("Error in the handleAddHeatsheet function: ",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])}))),x.apply(this,arguments)}return Object(r.useEffect)((function(){O()}),[]),Object(d.jsxs)(p.a,{centered:!0,children:[Object(d.jsx)(p.a.Row,{children:Object(d.jsx)(p.a.Column,{children:Object(d.jsx)(E,{handleLogout:n,loggedUser:t})})}),Object(d.jsx)(p.a.Row,{children:Object(d.jsx)(p.a.Column,{style:{maxWidth:450},children:Object(d.jsx)(F,{handleAddHeatsheet:function(e){return x.apply(this,arguments)}})})}),Object(d.jsx)(p.a.Row,{children:Object(d.jsx)(p.a.Column,{style:{maxWidth:450}})})]})}function B(e){Object(s.g)();var t=Object(r.useState)({name:"",grade:"",gender:"",events:""}),n=Object(o.a)(t,2),a=n[0],c=n[1];function j(e){c(Object(u.a)(Object(u.a)({},a),{},Object(l.a)({},e.target.name,e.target.value)))}function b(){return(b=Object(i.a)(h.a.mark((function t(n){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),console.log(a,"this is the state"),t.prev=2,t.next=5,e.handleAddSwimmer(a);case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(2),console.log(t.t0,"<- in AddSwimmer");case 10:case"end":return t.stop()}}),t,null,[[2,7]])})))).apply(this,arguments)}return Object(d.jsx)(x.a,{children:Object(d.jsxs)(g.a,{onSubmit:function(e){return b.apply(this,arguments)},children:[Object(d.jsx)("h2",{children:"Add a New Swimmer:"}),Object(d.jsx)(g.a.Input,{className:"form-control",name:"name",value:a.name,placeholder:"Name",onChange:j,required:!0}),Object(d.jsx)(g.a.Input,{className:"form-control",name:"grade",value:a.grade,placeholder:"Grade",onChange:j,required:!0}),Object(d.jsx)(g.a.Input,{className:"form-control",name:"gender",value:a.gender,placeholder:"Gender",onChange:j,required:!0}),Object(d.jsx)(g.a.Input,{className:"form-control",name:"events",value:a.events,placeholder:"Events",onChange:j,required:!0}),Object(d.jsx)(f.a,{type:"submit",className:"btn",children:"Add Swimmer and Events"})]})})}var H="/api/swimmer";function J(e){return console.log("this is the swimmer",e),fetch(H,{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json",Authorization:"Bearer "+w.getToken()}}).then((function(e){if(e.ok)return e.json();throw new Error("Check your server terminal for error.")}))}function M(){return fetch(H,{headers:{"Content-Type":"application/json",Authorization:"Bearer "+w.getToken()}}).then((function(e){return e.ok?e.json():e.json().then((function(e){throw console.log(e),new Error(e.err,"<< response.err create(): swimmerAPI")}))}))}function G(e){var t=e.loggedUser,n=e.handleLogout,a=Object(r.useState)(""),c=Object(o.a)(a,2),s=(c[0],c[1],Object(r.useState)(!0)),l=Object(o.a)(s,2),u=(l[0],l[1]),j=Object(r.useState)({}),b=Object(o.a)(j,2),m=(b[0],b[1],Object(r.useState)([])),O=Object(o.a)(m,2),g=O[0],x=O[1];function f(){return v.apply(this,arguments)}function v(){return(v=Object(i.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M();case 3:t=e.sent,x(Object(q.a)(t.data)),u(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),u(!1);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function w(){return w=Object(i.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u(!0),e.next=4,J(t);case 4:n=e.sent,console.log(n),f(),u(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("Error in the handleAddSwimmer function: ",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])}))),w.apply(this,arguments)}return Object(r.useEffect)((function(){f()}),[]),Object(d.jsxs)(p.a,{centered:!0,children:[Object(d.jsx)(p.a.Row,{children:Object(d.jsx)(p.a.Column,{children:Object(d.jsx)(E,{handleLogout:n,loggedUser:t})})}),Object(d.jsx)(p.a.Row,{children:Object(d.jsx)(p.a.Column,{style:{maxWidth:450},children:Object(d.jsx)(B,{handleAddSwimmer:function(e){return w.apply(this,arguments)}})})}),Object(d.jsx)(p.a.Row,{children:Object(d.jsx)(p.a.Column,{style:{maxWidth:450},children:g.map((function(e){return Object(d.jsx)(d.Fragment,{children:e.name})}))})})]})}function Y(e){var t=e.loggedUser,n=e.handleLogout;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{children:Object(d.jsx)(E,{handleLogout:n,loggedUser:t})}),Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("table",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Name"}),Object(d.jsx)("th",{children:"Grade"}),Object(d.jsx)("th",{children:"Gender"}),Object(d.jsx)("th",{children:"Events"}),Object(d.jsx)("th",{children:"Notes"})]}),Object(d.jsx)("tr",{})]})})]})}function $(e){var t=Object(r.useState)({name:""}),n=Object(o.a)(t,2),a=n[0],c=n[1];return Object(d.jsx)(x.a,{children:Object(d.jsxs)(g.a,{onSubmit:function(t){t.preventDefault();var n=new FormData;n.append("name",a.name),e.handleAddTeam(n)},children:[Object(d.jsx)(g.a.Input,{className:"form-control",name:"name",value:a.name,placeholder:"What's Your Team Name?",onChange:function(e){c({caption:e.target.value})},required:!0}),Object(d.jsx)(f.a,{type:"submit",className:"btn",children:"Create Team"})]})})}var K="/api/team";function Q(e){return fetch(K,{method:"POST",body:e,headers:{Authorization:"Bearer "+w.getToken()}}).then((function(e){if(e.ok)return e.json();throw new Error("Check your server terminal for error.")}))}function V(){return fetch(K,{headers:{Authorization:"Bearer "+w.getToken()}}).then((function(e){return e.ok?e.json():e.json().then((function(e){throw console.log(e),new Error(e.err,"<< response.err create(): teamAPI")}))}))}function X(e){var t=e.loggedUser,n=e.handleLogout,a=Object(r.useState)(""),c=Object(o.a)(a,2),s=(c[0],c[1],Object(r.useState)(!0)),l=Object(o.a)(s,2),u=(l[0],l[1]),j=Object(r.useState)([]),b=Object(o.a)(j,2),m=(b[0],b[1]);function O(){return g.apply(this,arguments)}function g(){return(g=Object(i.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,V();case 3:t=e.sent,m(Object(q.a)(t.data)),u(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),u(!1);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function x(){return x=Object(i.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u(!0),e.next=4,Q(t);case 4:n=e.sent,console.log(n),O(),u(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("Error in the handleAddTeam function: ",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])}))),x.apply(this,arguments)}return Object(r.useEffect)((function(){O()}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(E,{handleLogout:n,loggedUser:t}),Object(d.jsxs)("div",{className:"MyDashboard",children:[Object(d.jsx)("h2",{children:"Welcome to Swimmingly!"}),Object(d.jsx)("p",{children:"Swimmingly is an easy team manager that tracks your swim teams members as well as their times and events"}),Object(d.jsx)("h3",{children:"Get started below by creating a team!"})]}),Object(d.jsxs)(p.a,{children:[Object(d.jsx)(p.a.Row,{centered:!0,children:Object(d.jsx)($,{handleAddTeam:function(e){return x.apply(this,arguments)}})}),Object(d.jsx)(p.a.Row,{centered:!0,children:Object(d.jsx)(p.a.Column,{style:{maxWidth:750}})})]})]})}var Z=function(){var e=Object(r.useState)(y.getUser()),t=Object(o.a)(e,2),n=t[0],a=t[1];function c(){a(y.getUser())}function i(){y.logout(),a(null)}return console.log("this is the user",n),n?Object(d.jsxs)(s.d,{children:[Object(d.jsx)(s.b,{path:"/",element:Object(d.jsx)("h1",{children:"This is Home Page!"})}),Object(d.jsx)(s.b,{path:"/login",element:Object(d.jsx)(A,{handleSignUpOrLogin:c})}),Object(d.jsx)(s.b,{path:"/signup",element:Object(d.jsx)(C,{handleSignUpOrLogin:c})}),Object(d.jsx)(s.b,{path:"/:username",element:Object(d.jsx)(P,{loggedUser:n,handleLogout:i})}),Object(d.jsx)(s.b,{path:"/heatsheet",element:Object(d.jsx)(z,{loggedUser:n,handleLogout:i})}),Object(d.jsx)(s.b,{path:"/myteam",element:Object(d.jsx)(G,{loggedUser:n,handleLogout:i})}),Object(d.jsx)(s.b,{path:"/swimmer",element:Object(d.jsx)(Y,{loggedUser:n,handleLogout:i})}),Object(d.jsx)(s.b,{path:"/dashboard",element:Object(d.jsx)(X,{loggedUser:n,handleLogout:i})})]}):Object(d.jsxs)(s.d,{children:[Object(d.jsx)(s.b,{path:"/login",element:Object(d.jsx)(A,{handleSignUpOrLogin:c})}),Object(d.jsx)(s.b,{path:"/signup",element:Object(d.jsx)(C,{handleSignUpOrLogin:c})}),Object(d.jsx)(s.b,{path:"/*",element:Object(d.jsx)(s.a,{to:"/login"})})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(d.jsx)(U.a,{children:Object(d.jsx)(Z,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[154,1,2]]]);
//# sourceMappingURL=main.1807a7b6.chunk.js.map