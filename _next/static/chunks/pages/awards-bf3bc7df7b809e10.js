(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[821],{3247:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/awards",function(){return n(324)}])},5634:function(e,s,n){"use strict";n.d(s,{Z:function(){return k}});var i=n(5893),a=n(3353),t=n(8888),r=n(8083),c=n(4847),l=n(1209),o=n(9008),d=n.n(o),m=n(1664),h=n.n(m),u=n(9332);function x(){let e=(0,u.useRouter)();return(0,i.jsxs)("button",{className:"btn btn-sm btn-primary me-3",onClick:()=>e.back(),children:[(0,i.jsx)("i",{className:"bi bi-chevron-left me-1"}),"Back"]})}var j=JSON.parse('{"v":"Dr. Thiago Ferreira"}'),f=n(7294);class b{static setItem(e,s){localStorage.setItem(e,JSON.stringify(s))}static getItem(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=localStorage.getItem(e);return n?JSON.parse(n):s}}let p=Object.freeze({LIGHT:{id:"light",name:"Light",icon:"bi-sun-fill"},DARK:{id:"dark",name:"Dark",icon:"bi-moon-stars-fill"},AUTO:{id:"auto",name:"Auto",icon:"bi-circle-half"}});function g(e){b.setItem("color-theme-id",e.id)}function v(){return window.matchMedia("(prefers-color-scheme: dark)").matches?p.DARK:p.LIGHT}function N(e){e===p.AUTO&&(e=v()),window.document.documentElement.setAttribute("data-bs-theme",e.id)}function w(e){let{value:s,handleClick:n,selected:a=!1}=e,t=a?(0,i.jsx)("i",{className:"bi bi-check2"}):(0,i.jsx)(i.Fragment,{});return(0,i.jsx)("li",{children:(0,i.jsxs)("a",{className:"dropdown-item d-flex align-items-center rounded ".concat(a?"active":""),href:"#",onClick:e=>n(e,s),"data-theme":s.id,children:[(0,i.jsx)("i",{className:"bi ".concat(s.icon)}),(0,i.jsx)("span",{className:"ms-3 me-auto",children:s.name}),t]})})}function A(){let[e,s]=(0,f.useState)(p.AUTO);function n(e,n){s(n),N(n),g(n)}return(0,f.useEffect)(()=>{let n=v(),i=function(){let e=b.getItem("color-theme-id");return e==p.AUTO.id?p.AUTO:e==p.DARK.id?p.DARK:e==p.LIGHT.id?p.LIGHT:null}();i?g===p.AUTO?(s(n),N(n)):(s(i),N(i)):N(n);let a=s=>{e==p.AUTO&&N(v())},t=window.matchMedia("(prefers-color-scheme: dark)");return t.addEventListener("change",a),()=>{t.removeEventListener("change",a)}},[e]),(0,i.jsxs)("li",{className:"nav-item dropdown",children:[(0,i.jsx)("a",{className:"nav-link dropdown-toggle",href:"#","data-bs-toggle":"dropdown",children:(0,i.jsx)("i",{className:"bi ".concat(e.icon)})}),(0,i.jsxs)("ul",{className:"dropdown-menu dropdown-menu-end p-1",children:[(0,i.jsx)(w,{value:p.LIGHT,handleClick:n,selected:e===p.LIGHT}),(0,i.jsx)(w,{value:p.DARK,handleClick:n,selected:e===p.DARK}),(0,i.jsx)(w,{value:p.AUTO,handleClick:n,selected:e===p.AUTO})]})]})}function T(e){let{active:s,href:n,icon:a,name:t,external:r=!1}=e;return s=s.toLowerCase()==t.toLowerCase()?"active":"",(0,i.jsx)("li",{className:"nav-item",children:(0,i.jsxs)(h(),{href:n,className:"nav-link ".concat(s),children:[(0,i.jsx)("i",{className:"bi ps-2 ".concat(a," ")}),(0,i.jsx)("span",{className:"ms-3",children:t}),r&&(0,i.jsx)("i",{className:"float-end bi bi-box-arrow-up-right"})]})})}function k(e){let{children:s,menu:n,title:o="",hasGoBackButton:m=!1}=e;return o=o||n,(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(d(),{children:[(0,i.jsx)("title",{children:"".concat(o," - ").concat(j.v)}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]}),(0,i.jsx)("header",{children:(0,i.jsx)(c.Z,{className:"navbar-top border-bottom pt-3 pt-md-2 mt-5 mt-md-0",children:(0,i.jsxs)(a.Z,{fluid:!0,children:[(0,i.jsxs)("div",{className:"d-flex flex-row align-items-center",children:[m&&(0,i.jsx)(x,{}),(0,i.jsx)("span",{className:"navbar-brand",href:"#",children:o})]}),(0,i.jsx)(l.Z,{className:"me-auto"}),(0,i.jsx)(l.Z,{children:(0,i.jsx)(A,{})})]})})}),(0,i.jsx)("aside",{children:(0,i.jsxs)(c.Z,{expand:"md",fixed:"top",id:"sideNav",bg:"dark","data-bs-theme":"dark",children:[(0,i.jsxs)(a.Z,{fluid:!0,children:[(0,i.jsx)(h(),{href:"/",className:"navbar-brand d-block d-md-none",children:j.v}),(0,i.jsx)(c.Z.Toggle,{className:"custom-toggler"})]}),(0,i.jsxs)(a.Z,{fluid:!0,className:"d-none d-md-block mb-1 text-center",children:[(0,i.jsx)(h(),{href:"/",children:(0,i.jsx)("img",{src:"/images/profile.jpg",alt:"the user profile",width:"150px",className:"img-fluid rounded-2 border border-light border-2"})}),(0,i.jsxs)("div",{className:"d-flex flex-column mb-1",children:[(0,i.jsx)("h5",{className:"mb-2",children:j.v}),(0,i.jsx)("small",{className:"mb-2 text-secondary",children:"Assistant Professor"}),(0,i.jsx)("small",{className:"mb-0 text-secondary",children:"University of Michigan-Flint"})]}),(0,i.jsx)("hr",{className:"mx-2 mb-2"})]}),(0,i.jsx)(a.Z,{fluid:!0,className:"px-3",children:(0,i.jsx)(c.Z.Collapse,{id:"navbar",children:(0,i.jsxs)("ul",{className:"navbar-nav nav-pills mt-3 mt-md-0",children:[(0,i.jsx)(T,{active:n,href:"/",name:"Home",icon:"bi-house"}),(0,i.jsx)(T,{active:n,href:"/curriculum",name:"Curriculum",icon:"bi-file-earmark-text"}),(0,i.jsx)(T,{active:n,href:"/teaching",name:"Teaching",icon:"bi-person-workspace"}),(0,i.jsx)(T,{active:n,href:"/awards",name:"Awards",icon:"bi-trophy"}),(0,i.jsx)(T,{active:n,href:"/publications",name:"Publications",icon:"bi-journal-text"}),(0,i.jsx)(T,{active:n,href:"https://s3researchlab.github.io?utm_source=personal-website&utm_campaign=side-menu",name:"Research Lab",icon:"bi-globe",external:"true"}),(0,i.jsx)(T,{active:n,href:"/service",name:"Service",icon:"bi-people"}),(0,i.jsx)(T,{active:n,href:"/miscellaneous",name:"Miscellaneous",icon:"bi-puzzle"})]})})})]})}),(0,i.jsx)("main",{children:(0,i.jsx)(a.Z,{fluid:!0,className:"mt-3 test",children:(0,i.jsx)(t.Z,{children:(0,i.jsx)(r.Z,{sm:"12",children:s})})})})]})}},324:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return r}});var i=n(5893),a=n(5634);function t(e){let{name:s,org:n}=e;return(0,i.jsxs)("li",{children:[s,(0,i.jsx)("br",{}),(0,i.jsx)("small",{className:"text-secondary",children:n})]})}function r(){return(0,i.jsxs)(a.Z,{menu:"Awards",children:[(0,i.jsx)("p",{children:"This is not the full list. We will update it as soon as possible."}),(0,i.jsx)("h5",{children:"Awards"}),(0,i.jsx)("ul",{children:(0,i.jsx)(t,{name:"Early Career Award Academic",org:"2023 HFRCC Research Symposium, Flint, United States"})}),(0,i.jsx)("h5",{children:"Recognitions"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)(t,{name:"Winter 2023 Golden Apple Recognition",org:"Thompson Center for Learning & Teaching, University of Michigan-Flint"}),(0,i.jsx)(t,{name:"Fall 2022 Golden Apple Recognition",org:"Thompson Center for Learning & Teaching, University of Michigan-Flint"})]})]})}}},function(e){e.O(0,[665,888,774,179],function(){return e(e.s=3247)}),_N_E=e.O()}]);