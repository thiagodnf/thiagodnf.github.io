(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[491],{1551:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/miscellaneous/links",function(){return n(3259)}])},272:function(e,s,n){"use strict";n.d(s,{Z:function(){return A}});var i=n(5893),a=n(682),t=n(4051),c=n(1555),r=n(6709),l=n(3472),d=n(9008),o=n.n(d),m=n(1664),h=n.n(m),u=n(9332);function x(){let e=(0,u.useRouter)();return(0,i.jsxs)("button",{className:"btn btn-sm btn-primary me-3",onClick:()=>e.back(),children:[(0,i.jsx)("i",{className:"bi bi-chevron-left me-1"}),"Back"]})}var f=JSON.parse('{"v":"Dr. Thiago Ferreira"}'),j=n(7294);class b{static setItem(e,s){localStorage.setItem(e,JSON.stringify(s))}static getItem(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=localStorage.getItem(e);return n?JSON.parse(n):s}}let p=Object.freeze({LIGHT:{id:"light",name:"Light",icon:"bi-sun-fill"},DARK:{id:"dark",name:"Dark",icon:"bi-moon-stars-fill"},AUTO:{id:"auto",name:"Auto",icon:"bi-circle-half"}});function v(e){b.setItem("color-theme-id",e.id)}function g(){return window.matchMedia("(prefers-color-scheme: dark)").matches?p.DARK:p.LIGHT}function N(e){e===p.AUTO&&(e=g()),window.document.documentElement.setAttribute("data-bs-theme",e.id)}function w(e){let{value:s,handleClick:n,selected:a=!1}=e,t=a?(0,i.jsx)("i",{className:"bi bi-check2"}):(0,i.jsx)(i.Fragment,{});return(0,i.jsx)("li",{children:(0,i.jsxs)("a",{className:"dropdown-item d-flex align-items-center rounded ".concat(a?"active":""),href:"#",onClick:e=>n(e,s),"data-theme":s.id,children:[(0,i.jsx)("i",{className:"bi ".concat(s.icon)}),(0,i.jsx)("span",{className:"ms-3 me-auto",children:s.name}),t]})})}function k(){let[e,s]=(0,j.useState)(p.AUTO);function n(e,n){s(n),N(n),v(n)}return(0,j.useEffect)(()=>{let n=g(),i=function(){let e=b.getItem("color-theme-id");return e==p.AUTO.id?p.AUTO:e==p.DARK.id?p.DARK:e==p.LIGHT.id?p.LIGHT:null}();i?v===p.AUTO?(s(n),N(n)):(s(i),N(i)):N(n);let a=s=>{e==p.AUTO&&N(g())},t=window.matchMedia("(prefers-color-scheme: dark)");return t.addEventListener("change",a),()=>{t.removeEventListener("change",a)}},[e]),(0,i.jsxs)("li",{className:"nav-item dropdown",children:[(0,i.jsx)("a",{className:"nav-link dropdown-toggle",href:"#","data-bs-toggle":"dropdown",children:(0,i.jsx)("i",{className:"bi ".concat(e.icon)})}),(0,i.jsxs)("ul",{className:"dropdown-menu dropdown-menu-end p-1",children:[(0,i.jsx)(w,{value:p.LIGHT,handleClick:n,selected:e===p.LIGHT}),(0,i.jsx)(w,{value:p.DARK,handleClick:n,selected:e===p.DARK}),(0,i.jsx)(w,{value:p.AUTO,handleClick:n,selected:e===p.AUTO})]})]})}function T(e){let{active:s,href:n,icon:a,name:t,external:c=!1}=e;return s=s.toLowerCase()==t.toLowerCase()?"active":"",(0,i.jsx)("li",{className:"nav-item",children:(0,i.jsxs)(h(),{href:n,className:"nav-link ".concat(s),children:[(0,i.jsx)("i",{className:"bi ps-2 ".concat(a," ")}),(0,i.jsx)("span",{className:"ms-3",children:t}),c&&(0,i.jsx)("i",{className:"float-end bi bi-box-arrow-up-right"})]})})}function A(e){let{children:s,menu:n,title:d="",hasGoBackButton:m=!1}=e;return d=d||n,(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o(),{children:[(0,i.jsx)("title",{children:"".concat(d," - ").concat(f.v)}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]}),(0,i.jsx)("header",{children:(0,i.jsx)(r.Z,{className:"navbar-top border-bottom pt-3 pt-md-2 mt-5 mt-md-0",children:(0,i.jsxs)(a.Z,{fluid:!0,children:[(0,i.jsxs)("div",{className:"d-flex flex-row align-items-center",children:[m&&(0,i.jsx)(x,{}),(0,i.jsx)("span",{className:"navbar-brand",href:"#",children:d})]}),(0,i.jsx)(l.Z,{className:"me-auto"}),(0,i.jsx)(l.Z,{children:(0,i.jsx)(k,{})})]})})}),(0,i.jsx)("aside",{children:(0,i.jsxs)(r.Z,{expand:"md",fixed:"top",id:"sideNav",bg:"dark","data-bs-theme":"dark",children:[(0,i.jsxs)(a.Z,{fluid:!0,children:[(0,i.jsx)(h(),{href:"/",className:"navbar-brand d-block d-md-none",children:f.v}),(0,i.jsx)(r.Z.Toggle,{className:"custom-toggler"})]}),(0,i.jsxs)(a.Z,{fluid:!0,className:"d-none d-md-block mb-1 text-center",children:[(0,i.jsx)(h(),{href:"/",children:(0,i.jsx)("img",{src:"/images/profile.jpg",alt:"the user profile",width:"150px",className:"img-fluid rounded-2 border border-light border-2"})}),(0,i.jsxs)("div",{className:"d-flex flex-column mb-1",children:[(0,i.jsx)("h5",{className:"mb-2",children:f.v}),(0,i.jsx)("small",{className:"mb-2 text-secondary",children:"Assistant Professor"}),(0,i.jsx)("small",{className:"mb-0 text-secondary",children:"University of Michigan-Flint"})]}),(0,i.jsx)("hr",{className:"mx-2 mb-2"})]}),(0,i.jsx)(a.Z,{fluid:!0,className:"px-3",children:(0,i.jsx)(r.Z.Collapse,{id:"navbar",children:(0,i.jsxs)("ul",{className:"navbar-nav nav-pills mt-3 mt-md-0",children:[(0,i.jsx)(T,{active:n,href:"/",name:"Home",icon:"bi-house"}),(0,i.jsx)(T,{active:n,href:"/curriculum",name:"Curriculum",icon:"bi-file-earmark-text"}),(0,i.jsx)(T,{active:n,href:"/teaching",name:"Teaching",icon:"bi-person-workspace"}),(0,i.jsx)(T,{active:n,href:"/awards",name:"Awards",icon:"bi-trophy"}),(0,i.jsx)(T,{active:n,href:"/publications",name:"Publications",icon:"bi-journal-text"}),(0,i.jsx)(T,{active:n,href:"https://s3researchlab.github.io?utm_source=personal-website&utm_campaign=side-menu",name:"Research Lab",icon:"bi-globe",external:"true"}),(0,i.jsx)(T,{active:n,href:"/service",name:"Service",icon:"bi-people"}),(0,i.jsx)(T,{active:n,href:"/miscellaneous",name:"Miscellaneous",icon:"bi-puzzle"})]})})})]})}),(0,i.jsx)("main",{children:(0,i.jsx)(a.Z,{fluid:!0,className:"mt-3 test",children:(0,i.jsx)(t.Z,{children:(0,i.jsx)(c.Z,{sm:"12",children:s})})})})]})}},3259:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return c}});var i=n(5893),a=n(272);function t(e){let{href:s,children:n}=e;return(0,i.jsx)("li",{children:(0,i.jsx)("a",{target:"_blank",href:s,children:n})})}function c(){return(0,i.jsxs)(a.Z,{title:"Links",menu:"Miscellaneous",hasGoBackButton:!0,children:[(0,i.jsx)("p",{children:"Many things of different kinds"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)(t,{href:"https://andreas-zeller.info/2021/04/15/the-devils-guide-to-incremental-research.html",children:"The Devil's Guide to Incremental Research"}),(0,i.jsx)(t,{href:"https://faculty.washington.edu/ajko/advice#goodwriting",children:"How can I become a good technical writer?"})]})]})}}},function(e){e.O(0,[576,888,774,179],function(){return e(e.s=1551)}),_N_E=e.O()}]);