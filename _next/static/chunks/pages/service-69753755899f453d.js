(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[423],{7816:function(e,s,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/service",function(){return i(9048)}])},5131:function(e,s,i){"use strict";i.d(s,{Z:function(){return T}});var n=i(5893),t=i(4051),a=i(1555),r=i(682),l=i(3472),c=i(4373),o=i(9008),d=i.n(o),m=i(1664),h=i.n(m),u=i(9332);function x(){let e=(0,u.useRouter)();return(0,n.jsxs)("button",{className:"btn btn-sm btn-primary me-3",onClick:()=>e.back(),children:[(0,n.jsx)("i",{className:"bi bi-chevron-left me-1"}),"Back"]})}var j=JSON.parse('{"v":"Dr. Thiago Ferreira"}'),b=i(7294);class f{static setItem(e,s){localStorage.setItem(e,JSON.stringify(s))}static getItem(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=localStorage.getItem(e);return i?JSON.parse(i):s}}let p=Object.freeze({LIGHT:{id:"light",name:"Light",icon:"bi-sun-fill"},DARK:{id:"dark",name:"Dark",icon:"bi-moon-stars-fill"},AUTO:{id:"auto",name:"Auto",icon:"bi-circle-half"}});function v(e){f.setItem("color-theme-id",e.id)}function N(){let e=window.matchMedia("(prefers-color-scheme: dark)");return e.matches?p.DARK:p.LIGHT}function g(e){e===p.AUTO&&(e=N()),window.document.documentElement.setAttribute("data-bs-theme",e.id),e===p.DARK?document.querySelector('meta[name="theme-color"]').setAttribute("content","#2C3035"):document.querySelector('meta[name="theme-color"]').setAttribute("content","#F8F9FA")}function w(e){let{value:s,handleClick:i,selected:t=!1}=e,a=t?(0,n.jsx)("i",{className:"bi bi-check2"}):(0,n.jsx)(n.Fragment,{});return(0,n.jsx)("li",{children:(0,n.jsxs)("a",{className:"dropdown-item d-flex align-items-center rounded ".concat(t?"active":""),href:"#",onClick:e=>i(e,s),"data-theme":s.id,children:[(0,n.jsx)("i",{className:"bi ".concat(s.icon)}),(0,n.jsx)("span",{className:"ms-3 me-auto",children:s.name}),a]})})}function k(){let[e,s]=(0,b.useState)(p.AUTO);function i(e,i){s(i),g(i),v(i)}return(0,b.useEffect)(()=>{let i=N(),n=function(){let e=f.getItem("color-theme-id");return e==p.AUTO.id?p.AUTO:e==p.DARK.id?p.DARK:e==p.LIGHT.id?p.LIGHT:null}();n?v===p.AUTO?(s(i),g(i)):(s(n),g(n)):g(i);let t=s=>{e==p.AUTO&&g(N())},a=window.matchMedia("(prefers-color-scheme: dark)");return a.addEventListener("change",t),()=>{a.removeEventListener("change",t)}},[e]),(0,n.jsxs)("li",{className:"nav-item dropdown",children:[(0,n.jsx)("a",{className:"nav-link dropdown-toggle",href:"#","data-bs-toggle":"dropdown",children:(0,n.jsx)("i",{className:"bi ".concat(e.icon)})}),(0,n.jsxs)("ul",{className:"dropdown-menu dropdown-menu-end p-1",children:[(0,n.jsx)(w,{value:p.LIGHT,handleClick:i,selected:e===p.LIGHT}),(0,n.jsx)(w,{value:p.DARK,handleClick:i,selected:e===p.DARK}),(0,n.jsx)(w,{value:p.AUTO,handleClick:i,selected:e===p.AUTO})]})]})}function A(e){let{active:s,href:i,icon:t,name:a,external:r=!1}=e;return s=s.toLowerCase()==a.toLowerCase()?"active":"",(0,n.jsx)("li",{className:"nav-item",children:(0,n.jsxs)(h(),{href:i,className:"nav-link ".concat(s),children:[(0,n.jsx)("i",{className:"bi ps-2 ".concat(t," ")}),(0,n.jsx)("span",{className:"ms-3",children:a}),r&&(0,n.jsx)("i",{className:"float-end bi bi-box-arrow-up-right"})]})})}function T(e){let{children:s,menu:i,title:o="",hasGoBackButton:m=!1}=e;return o=o||i,(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(d(),{children:[(0,n.jsx)("title",{children:"".concat(o," - ").concat(j.v)}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]}),(0,n.jsx)("header",{children:(0,n.jsx)(c.Z,{className:"navbar-top border-bottom pt-3 pt-md-2 mt-5 mt-md-0",children:(0,n.jsxs)(r.Z,{fluid:!0,children:[(0,n.jsxs)("div",{className:"d-flex flex-row align-items-center",children:[m&&(0,n.jsx)(x,{}),(0,n.jsx)("span",{className:"navbar-brand",href:"#",children:o})]}),(0,n.jsx)(l.Z,{className:"me-auto"}),(0,n.jsx)(l.Z,{children:(0,n.jsx)(k,{})})]})})}),(0,n.jsx)("aside",{children:(0,n.jsxs)(c.Z,{expand:"md",fixed:"top",id:"sideNav",className:"bg-body-tertiary",children:[(0,n.jsxs)(r.Z,{fluid:!0,children:[(0,n.jsx)(h(),{href:"/",className:"navbar-brand d-block d-md-none",children:j.v}),(0,n.jsx)(c.Z.Toggle,{className:"custom-toggler"})]}),(0,n.jsxs)(r.Z,{fluid:!0,className:"d-none d-md-block mb-1 text-center",children:[(0,n.jsx)(h(),{href:"/",children:(0,n.jsx)("img",{src:"/images/profile.jpg",alt:"the user profile",width:"150px",className:"img-fluid rounded-2 border border-light border-2"})}),(0,n.jsxs)("div",{className:"d-flex flex-column mb-1",children:[(0,n.jsx)("h5",{className:"mb-2",children:j.v}),(0,n.jsx)("small",{className:"mb-2",children:"Assistant Professor"}),(0,n.jsx)("small",{className:"mb-0 text-secondary",children:"University of Michigan-Flint"})]}),(0,n.jsx)("hr",{className:"mx-2 mb-2"})]}),(0,n.jsx)(r.Z,{fluid:!0,className:"px-3",children:(0,n.jsx)(c.Z.Collapse,{id:"navbar",children:(0,n.jsxs)("ul",{className:"navbar-nav nav-pills mt-3 mt-md-0",children:[(0,n.jsx)(A,{active:i,href:"/",name:"Home",icon:"bi-house"}),(0,n.jsx)(A,{active:i,href:"/curriculum",name:"Curriculum",icon:"bi-file-earmark-text"}),(0,n.jsx)(A,{active:i,href:"/teaching",name:"Teaching",icon:"bi-person-workspace"}),(0,n.jsx)(A,{active:i,href:"/awards",name:"Awards",icon:"bi-trophy"}),(0,n.jsx)(A,{active:i,href:"/publications",name:"Publications",icon:"bi-journal-text"}),(0,n.jsx)(A,{active:i,href:"https://s3researchlab.github.io?utm_source=personal-website&utm_campaign=side-menu",name:"Research Lab",icon:"bi-globe",external:"true"}),(0,n.jsx)(A,{active:i,href:"/service",name:"Service",icon:"bi-people"}),(0,n.jsx)(A,{active:i,href:"/miscellaneous",name:"Miscellaneous",icon:"bi-puzzle"})]})})})]})}),(0,n.jsx)("main",{children:(0,n.jsx)(r.Z,{fluid:!0,className:"mt-3 test",children:(0,n.jsx)(t.Z,{children:(0,n.jsx)(a.Z,{sm:"12",children:s})})})})]})}},9048:function(e,s,i){"use strict";i.r(s),i.d(s,{__N_SSG:function(){return r},default:function(){return l}});var n=i(5893),t=i(5131);function a(e){let{title:s,subtitle:i=[]}=e,t=i.map((e,s)=>(0,n.jsx)("small",{className:"me-2 badge fw-normal text-primary-emphasis bg-primary-subtle border border-primary-subtle",children:e},s));return(0,n.jsxs)("li",{children:[(0,n.jsx)("span",{className:"d-block",children:s}),t]})}var r=!0;function l(e){let{services:s}=e,i=s.journalReviewer.map((e,s)=>(0,n.jsx)(a,{title:e},s)),r=s.sessionChair.map((e,s)=>(0,n.jsx)(a,{title:e},s)),l=s.programChair.map((e,s)=>(0,n.jsx)(a,{title:e.title,subtitle:e.roles},s)),c=s.committeeMember.map((e,s)=>(0,n.jsx)(a,{title:e.title,subtitle:e.roles},s));return(0,n.jsxs)(t.Z,{menu:"Service",children:[(0,n.jsx)("p",{children:"This is not the full list. We will update it as soon as possible."}),(0,n.jsx)("h5",{children:"Journal Reviewer"}),(0,n.jsx)("ul",{children:i}),(0,n.jsx)("h5",{children:"Program Committee Chair"}),(0,n.jsx)("ul",{children:l}),(0,n.jsx)("h5",{children:"Program Committee Member"}),(0,n.jsx)("ul",{children:c}),(0,n.jsx)("h5",{children:"Session Chair of Conferences"}),(0,n.jsx)("ul",{children:r})]})}}},function(e){e.O(0,[576,774,888,179],function(){return e(e.s=7816)}),_N_E=e.O()}]);