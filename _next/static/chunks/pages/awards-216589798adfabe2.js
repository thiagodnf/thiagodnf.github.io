(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[821],{3247:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/awards",function(){return i(324)}])},5634:function(e,n,i){"use strict";i.d(n,{Z:function(){return k}});var s=i(5893),a=i(3353),t=i(8888),r=i(8083),c=i(4847),l=i(1209),o=i(9008),d=i.n(o),m=i(1664),h=i.n(m),u=i(9332);function x(){let e=(0,u.useRouter)();return(0,s.jsxs)("button",{className:"btn btn-sm btn-primary me-3",onClick:()=>e.back(),children:[(0,s.jsx)("i",{className:"bi bi-chevron-left me-1"}),"Back"]})}var j=JSON.parse('{"v":"Dr. Thiago Ferreira"}'),f=i(7294);class b{static setItem(e,n){localStorage.setItem(e,JSON.stringify(n))}static getItem(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=localStorage.getItem(e);return i?JSON.parse(i):n}}let g=Object.freeze({LIGHT:{id:"light",name:"Light",icon:"bi-sun-fill"},DARK:{id:"dark",name:"Dark",icon:"bi-moon-stars-fill"},AUTO:{id:"auto",name:"Auto",icon:"bi-circle-half"}});function p(e){b.setItem("color-theme-id",e.id)}function v(){return window.matchMedia("(prefers-color-scheme: dark)").matches?g.DARK:g.LIGHT}function N(e){e===g.AUTO&&(e=v()),window.document.documentElement.setAttribute("data-bs-theme",e.id)}function w(e){let{value:n,handleClick:i,selected:a=!1}=e,t=a?(0,s.jsx)("i",{className:"bi bi-check2"}):(0,s.jsx)(s.Fragment,{});return(0,s.jsx)("li",{children:(0,s.jsxs)("a",{className:"dropdown-item d-flex align-items-center rounded ".concat(a?"active":""),href:"#",onClick:e=>i(e,n),"data-theme":n.id,children:[(0,s.jsx)("i",{className:"bi ".concat(n.icon)}),(0,s.jsx)("span",{className:"ms-3 me-auto",children:n.name}),t]})})}function T(){let[e,n]=(0,f.useState)(g.AUTO);function i(e,i){n(i),N(i),p(i)}return(0,f.useEffect)(()=>{let i=v(),s=function(){let e=b.getItem("color-theme-id");return e==g.AUTO.id?g.AUTO:e==g.DARK.id?g.DARK:e==g.LIGHT.id?g.LIGHT:null}();s?p===g.AUTO?(n(i),N(i)):(n(s),N(s)):N(i);let a=n=>{e==g.AUTO&&N(v())},t=window.matchMedia("(prefers-color-scheme: dark)");return t.addEventListener("change",a),()=>{t.removeEventListener("change",a)}},[e]),(0,s.jsxs)("li",{className:"nav-item dropdown",children:[(0,s.jsx)("a",{className:"nav-link dropdown-toggle",href:"#","data-bs-toggle":"dropdown",children:(0,s.jsx)("i",{className:"bi ".concat(e.icon)})}),(0,s.jsxs)("ul",{className:"dropdown-menu dropdown-menu-end p-1",children:[(0,s.jsx)(w,{value:g.LIGHT,handleClick:i,selected:e===g.LIGHT}),(0,s.jsx)(w,{value:g.DARK,handleClick:i,selected:e===g.DARK}),(0,s.jsx)(w,{value:g.AUTO,handleClick:i,selected:e===g.AUTO})]})]})}function A(e){let{active:n,href:i,icon:a,name:t,external:r=!1}=e;return n=n.toLowerCase()==t.toLowerCase()?"active":"",(0,s.jsx)("li",{className:"nav-item",children:(0,s.jsxs)(h(),{href:i,className:"nav-link ".concat(n),children:[(0,s.jsx)("i",{className:"bi ps-2 ".concat(a," ")}),(0,s.jsx)("span",{className:"ms-3",children:t}),r&&(0,s.jsx)("i",{className:"float-end bi bi-box-arrow-up-right"})]})})}function k(e){let{children:n,menu:i,title:o="",hasGoBackButton:m=!1}=e;return o=o||i,(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(d(),{children:[(0,s.jsx)("title",{children:"".concat(o," - ").concat(j.v)}),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]}),(0,s.jsx)("header",{children:(0,s.jsx)(c.Z,{className:"navbar-top border-bottom pt-3 pt-md-2 mt-5 mt-md-0",children:(0,s.jsxs)(a.Z,{fluid:!0,children:[(0,s.jsxs)("div",{className:"d-flex flex-row align-items-center",children:[m&&(0,s.jsx)(x,{}),(0,s.jsx)("span",{className:"navbar-brand",href:"#",children:o})]}),(0,s.jsx)(l.Z,{className:"me-auto"}),(0,s.jsx)(l.Z,{children:(0,s.jsx)(T,{})})]})})}),(0,s.jsx)("aside",{children:(0,s.jsxs)(c.Z,{expand:"md",fixed:"top",id:"sideNav",bg:"dark","data-bs-theme":"dark",children:[(0,s.jsxs)(a.Z,{fluid:!0,children:[(0,s.jsx)(h(),{href:"/",className:"navbar-brand d-block d-md-none",children:j.v}),(0,s.jsx)(c.Z.Toggle,{className:"custom-toggler"})]}),(0,s.jsxs)(a.Z,{fluid:!0,className:"d-none d-md-block mb-1 text-center",children:[(0,s.jsx)(h(),{href:"/",children:(0,s.jsx)("img",{src:"/images/profile.jpg",alt:"the user profile",width:"150px",className:"img-fluid rounded-2 border border-light border-2"})}),(0,s.jsxs)("div",{className:"d-flex flex-column mb-1",children:[(0,s.jsx)("h5",{className:"mb-2",children:j.v}),(0,s.jsx)("small",{className:"mb-2 text-secondary",children:"Assistant Professor"}),(0,s.jsx)("small",{className:"mb-0 text-secondary",children:"University of Michigan-Flint"})]}),(0,s.jsx)("hr",{className:"mx-2 mb-2"})]}),(0,s.jsx)(a.Z,{fluid:!0,className:"px-3",children:(0,s.jsx)(c.Z.Collapse,{id:"navbar",children:(0,s.jsxs)("ul",{className:"navbar-nav nav-pills mt-3 mt-md-0",children:[(0,s.jsx)(A,{active:i,href:"/",name:"Home",icon:"bi-house"}),(0,s.jsx)(A,{active:i,href:"/curriculum",name:"Curriculum",icon:"bi-file-earmark-text"}),(0,s.jsx)(A,{active:i,href:"/teaching",name:"Teaching",icon:"bi-person-workspace"}),(0,s.jsx)(A,{active:i,href:"/awards",name:"Awards",icon:"bi-trophy"}),(0,s.jsx)(A,{active:i,href:"/publications",name:"Publications",icon:"bi-journal-text"}),(0,s.jsx)(A,{active:i,href:"https://s3researchlab.github.io?utm_source=personal-website&utm_campaign=side-menu",name:"Research Lab",icon:"bi-globe",external:"true"}),(0,s.jsx)(A,{active:i,href:"/service",name:"Service",icon:"bi-people"}),(0,s.jsx)(A,{active:i,href:"/miscellaneous",name:"Miscellaneous",icon:"bi-puzzle"})]})})})]})}),(0,s.jsx)("main",{children:(0,s.jsx)(a.Z,{fluid:!0,className:"mt-3 test",children:(0,s.jsx)(t.Z,{children:(0,s.jsx)(r.Z,{sm:"12",children:n})})})})]})}},324:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return r}});var s=i(5893),a=i(5634);function t(e){let{name:n,org:i}=e;return(0,s.jsxs)("li",{children:[n,(0,s.jsx)("br",{}),(0,s.jsx)("small",{className:"text-secondary",children:i})]})}function r(){return(0,s.jsxs)(a.Z,{menu:"Awards",children:[(0,s.jsx)("p",{children:"This is not the full list. We will update it as soon as possible."}),(0,s.jsx)("h5",{children:"Awards"}),(0,s.jsxs)("ul",{children:[(0,s.jsx)(t,{name:"2024 Lois Matz Rosen Junior Faculty Excellence in Teaching",org:"Thompson Center for Learning & Teaching, University of Michigan-Flint"}),(0,s.jsx)(t,{name:"Early Career Award Academic",org:"2023 HFRCC Research Symposium, Flint, United States"})]}),(0,s.jsx)("h5",{children:"Nominations"}),(0,s.jsx)("ul",{children:(0,s.jsx)(t,{name:"Outstanding Student Organization Advisor Nomination",org:"2024 Celebrating Wolverine Excellence (CWE), University of Michigan-Flint"})}),(0,s.jsx)("h5",{children:"Recognitions"}),(0,s.jsxs)("ul",{children:[(0,s.jsx)(t,{name:"Winter 2023 Golden Apple Recognition",org:"Thompson Center for Learning & Teaching, University of Michigan-Flint"}),(0,s.jsx)(t,{name:"Fall 2022 Golden Apple Recognition",org:"Thompson Center for Learning & Teaching, University of Michigan-Flint"})]})]})}}},function(e){e.O(0,[665,888,774,179],function(){return e(e.s=3247)}),_N_E=e.O()}]);