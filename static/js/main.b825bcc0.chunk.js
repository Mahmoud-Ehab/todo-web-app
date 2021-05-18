(this.webpackJsonptodo_react_app=this.webpackJsonptodo_react_app||[]).push([[0],{25:function(e,t,a){},26:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(8),c=a.n(r),l=a(9),s=(a(24),a(25),a(26),a(18)),o=a(3),d=function(e){return Object(o.jsxs)("div",{className:"d-flex flex-row align-items-center",style:{height:100,backgroundColor:"#1f90ff"},children:[Object(o.jsx)("img",{alt:"logo",src:"logo.png",height:100}),Object(o.jsx)("p",{className:"h2 text-light w-75 text-center",children:"You have ToDo..."})]})},u=a(16),f=function(e){var t=e.deadline-Date.now()<864e5,a=e.selected?{backgroundColor:"rgba(82, 160, 255, 0.75)",border:"solid rgba(82, 160, 255, 0.2) 2px",boxShadow:"rgba(0, 0, 0, 0.25) 0px 5px 10px 2px",color:"white"}:{},n={backgroundColor:"rgba(150, ".concat(100*(e.deadline-Date.now())/864e5,", 0, 0.75)"),boxShadow:"rgba(0, 0, 0, 0.25) 0px 5px 10px 2px",margin:5,color:"white"};return Object(o.jsxs)(u.a,{className:"taskRow d-flex justify-content-between p-3 mx-3 user-select-none ".concat(t&&"animate__animated animate__headShake animate__delay-1s"),style:t&&!e.selected?n:a,id:e.id,onClick:e.onClickHandler,children:[Object(o.jsx)("label",{className:"d-flex lead mx-3",style:{transform:"translateY(4px)"},id:e.id,onClick:e.onClickHandler,children:e.title}),Object(o.jsx)("img",{id:"rmvBtn",alt:"delete",src:"delete.svg",onClick:function(){e.rmvTaskHandler(e.id)}})]})},j=function(e){var t=Object(n.useState)(null),a=Object(l.a)(t,2),i=a[0],r=a[1];Object(n.useEffect)((function(){e.selectedTaskListener(i)}),[i]);var c=function(e){r(e.target.id)};return Object(o.jsx)("div",{id:"tasksDiv",style:{padding:10},children:e.tasks.map((function(t){return Object(o.jsx)(f,{id:t.id,selectedTaskId:i,rmvTaskHandler:e.rmvTaskHandler,title:t.title,deadline:new Date(t.deadline).getTime(),selected:t.id==i,onClickHandler:c})}))})},m=a(7),h=a(17),b=function(e){return Object(o.jsxs)(m.a,{onSubmit:function(t){t.preventDefault();var a=document.getElementById("formTitle"),n=document.getElementById("formDescription"),i=document.getElementById("formDate"),r={id:e.taskId,title:a.value,description:n.value,deadline:i.value};e.submitHandler(r),a.value="",n.value="",i.value=""},children:[Object(o.jsx)(m.a.Group,{children:Object(o.jsx)(m.a.Control,{type:"title",id:"formTitle",placeholder:"Task Title",required:!0})}),Object(o.jsx)(m.a.Group,{children:Object(o.jsx)("textarea",{className:"form-control",id:"formDescription",type:"description",placeholder:"Task Description",required:!0,style:{width:"100%"}})}),Object(o.jsx)(m.a.Group,{children:Object(o.jsx)("input",{className:"form-control",id:"formDate",type:"datetime-local",placeholder:"mm/dd/yyyy, hh:mm AM",required:!0,style:{width:"100%"}})}),Object(o.jsx)(m.a.Group,{children:Object(o.jsx)(h.a,{variant:"success",type:"submit",children:"Add Task"})})]})},p=a(19),x=function(e){var t=new Date(e.deadline).getTime()-Date.now();return Object(o.jsxs)("div",{className:"container mb-4 p-4 bg-light",children:[Object(o.jsx)("p",{className:"lead",children:e.title}),Object(o.jsx)("p",{className:"text-break",children:e.description}),Object(o.jsx)(p.a,{className:"shadow-sm",style:{backgroundColor:"rgba(150,".concat(100*t/864e5,",0)"),color:"#ffffff"},children:t>0?function(e){var t=Math.floor(e/864e5);e-=24*t*60*60*1e3;var a=Math.floor(e/36e5);return e-=60*a*60*1e3,t+" days "+a+" hours "+Math.floor(e/6e4)+" minutes."}(t):e.deadline})]})};var g=function(){var e=Object(n.useState)(localStorage.getItem("TodoApp_Tasks")?JSON.parse(localStorage.getItem("TodoApp_Tasks")):[]),t=Object(l.a)(e,2),a=t[0],i=t[1],r=Object(n.useState)(null),c=Object(l.a)(r,2),u=c[0],f=c[1];return Object(n.useEffect)((function(){localStorage.setItem("TodoApp_Tasks",JSON.stringify(a))}),[a]),Object(o.jsx)(s.a,{className:"d-flex flex-row animate__animated animate__bounceInDown",style:{height:"100vh"},children:Object(o.jsxs)("div",{className:"d-flex flex-row flex-wrap m-auto shadow",style:{width:"100%"},children:[Object(o.jsxs)("div",{id:"left_div",children:[Object(o.jsx)(d,{}),Object(o.jsx)(j,{tasks:a,rmvTaskHandler:function(e){i((function(){return a.filter((function(t){return t.id!==e}))})),f(null)},selectedTaskListener:function(e){var t=a.filter((function(t){return t.id==e}));f(t[0])}})]}),Object(o.jsxs)("div",{id:"right_div",className:"p-3",children:[u&&Object(o.jsx)(x,{title:u.title,description:u.description,deadline:u.deadline}),Object(o.jsx)(b,{submitHandler:function(e){i((function(t){for(var a=[],n=-1,i=0;i<t.length;i++){var r=new Date(t[i].deadline).getTime();if(new Date(e.deadline).getTime()<r){a.push(e),a.push(t[i]),n=i+1;break}a.push(t[i])}if(-1===n)a.push(e);else for(;n<t.length;n++)a.push(t[n]);return[].concat(a)}))},taskId:function e(t){for(var n=t,i=0;i<a.length;i++)if(a[i].id==n){n=e(Math.floor(100*Math.random()));break}return n}(Math.floor(100*Math.random()))})]})]})})},O=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,33)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),i(e),r(e),c(e)}))};c.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(g,{})}),document.getElementById("root")),O()}},[[31,1,2]]]);
//# sourceMappingURL=main.b825bcc0.chunk.js.map