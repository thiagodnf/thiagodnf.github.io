(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[491],{1551:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/miscellaneous/links",function(){return s(526)}])},2664:function(e,n,s){"use strict";s.d(n,{Z:function(){return T}});var i=s(5893),t=s(4051),a=s(1555),c=s(682),r=s(3472),l=s(896),o=s(9008),d=s.n(o),m=s(1664),h=s.n(m),u=s(9332);function x(){let e=(0,u.useRouter)();return(0,i.jsxs)("button",{className:"btn btn-sm btn-primary me-3",onClick:()=>e.back(),children:[(0,i.jsx)("i",{className:"bi bi-chevron-left me-1"}),"Back"]})}var f=JSON.parse('{"v":"Dr. Thiago Ferreira"}'),j=s(7294);class b{static setItem(e,n){localStorage.setItem(e,JSON.stringify(n))}static getItem(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,s=localStorage.getItem(e);return s?JSON.parse(s):n}}let p=Object.freeze({LIGHT:{id:"light",name:"Light",icon:"bi-sun-fill"},DARK:{id:"dark",name:"Dark",icon:"bi-moon-stars-fill"},AUTO:{id:"auto",name:"Auto",icon:"bi-circle-half"}});function v(e){b.setItem("color-theme-id",e.id)}function g(){let e=window.matchMedia("(prefers-color-scheme: dark)");return e.matches?p.DARK:p.LIGHT}function N(e){e===p.AUTO&&(e=g()),window.document.documentElement.setAttribute("data-bs-theme",e.id),e===p.DARK?document.querySelector('meta[name="theme-color"]').setAttribute("content","#2C3035"):document.querySelector('meta[name="theme-color"]').setAttribute("content","#F8F9FA")}function w(e){let{value:n,handleClick:s,selected:t=!1}=e,a=t?(0,i.jsx)("i",{className:"bi bi-check2"}):(0,i.jsx)(i.Fragment,{});return(0,i.jsx)("li",{children:(0,i.jsxs)("a",{className:"dropdown-item d-flex align-items-center rounded ".concat(t?"active":""),href:"#",onClick:e=>s(e,n),"data-theme":n.id,children:[(0,i.jsx)("i",{className:"bi ".concat(n.icon)}),(0,i.jsx)("span",{className:"ms-3 me-auto",children:n.name}),a]})})}function k(){let[e,n]=(0,j.useState)(p.AUTO);function s(e,s){n(s),N(s),v(s)}return(0,j.useEffect)(()=>{let s=g(),i=function(){let e=b.getItem("color-theme-id");return e==p.AUTO.id?p.AUTO:e==p.DARK.id?p.DARK:e==p.LIGHT.id?p.LIGHT:null}();i?v===p.AUTO?(n(s),N(s)):(n(i),N(i)):N(s);let t=n=>{e==p.AUTO&&N(g())},a=window.matchMedia("(prefers-color-scheme: dark)");return a.addEventListener("change",t),()=>{a.removeEventListener("change",t)}},[e]),(0,i.jsxs)("li",{className:"nav-item dropdown",children:[(0,i.jsx)("a",{className:"nav-link dropdown-toggle",href:"#","data-bs-toggle":"dropdown",children:(0,i.jsx)("i",{className:"bi ".concat(e.icon)})}),(0,i.jsxs)("ul",{className:"dropdown-menu dropdown-menu-end p-1",children:[(0,i.jsx)(w,{value:p.LIGHT,handleClick:s,selected:e===p.LIGHT}),(0,i.jsx)(w,{value:p.DARK,handleClick:s,selected:e===p.DARK}),(0,i.jsx)(w,{value:p.AUTO,handleClick:s,selected:e===p.AUTO})]})]})}function A(e){let{active:n,href:s,icon:t,name:a,external:c=!1}=e;return n=n.toLowerCase()==a.toLowerCase()?"active":"",(0,i.jsx)("li",{className:"nav-item",children:(0,i.jsxs)(h(),{href:s,className:"nav-link ".concat(n),children:[(0,i.jsx)("i",{className:"bi ps-2 ".concat(t," ")}),(0,i.jsx)("span",{className:"ms-3",children:a}),c&&(0,i.jsx)("i",{className:"float-end bi bi-box-arrow-up-right"})]})})}function T(e){let{children:n,menu:s,title:o="",hasGoBackButton:m=!1}=e;return o=o||s,(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(d(),{children:[(0,i.jsx)("title",{children:"".concat(o," - ").concat(f.v)}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]}),(0,i.jsx)("header",{children:(0,i.jsx)(l.Z,{className:"navbar-top border-bottom pt-3 pt-md-2 mt-5 mt-md-0",children:(0,i.jsxs)(c.Z,{fluid:!0,children:[(0,i.jsxs)("div",{className:"d-flex flex-row align-items-center",children:[m&&(0,i.jsx)(x,{}),(0,i.jsx)("span",{className:"navbar-brand",href:"#",children:o})]}),(0,i.jsx)(r.Z,{className:"me-auto"}),(0,i.jsx)(r.Z,{children:(0,i.jsx)(k,{})})]})})}),(0,i.jsx)("aside",{children:(0,i.jsxs)(l.Z,{expand:"md",fixed:"top",id:"sideNav",className:"bg-body-tertiary",children:[(0,i.jsxs)(c.Z,{fluid:!0,children:[(0,i.jsx)(h(),{href:"/",className:"navbar-brand d-block d-md-none",children:f.v}),(0,i.jsx)(l.Z.Toggle,{className:"custom-toggler"})]}),(0,i.jsxs)(c.Z,{fluid:!0,className:"d-none d-md-block mb-1 text-center",children:[(0,i.jsx)(h(),{href:"/",children:(0,i.jsx)("img",{src:"/images/profile.jpg",alt:"the user profile",width:"150px",className:"img-fluid rounded-2 border border-light border-2"})}),(0,i.jsxs)("div",{className:"d-flex flex-column mb-1",children:[(0,i.jsx)("h5",{className:"mt-3",children:f.v}),(0,i.jsx)("div",{className:"pt-1 small",children:"Assistant Professor"}),(0,i.jsx)("div",{className:"pt-1 small",children:"University of Michigan-Flint"})]}),(0,i.jsx)("hr",{className:"mx-2"})]}),(0,i.jsx)(c.Z,{fluid:!0,className:"px-3",children:(0,i.jsx)(l.Z.Collapse,{id:"navbar",children:(0,i.jsxs)("ul",{className:"navbar-nav nav-pills mt-3 mt-md-0",children:[(0,i.jsx)(A,{active:s,href:"/",name:"Home",icon:"bi-house"}),(0,i.jsx)(A,{active:s,href:"/curriculum",name:"Curriculum",icon:"bi-file-earmark-text"}),(0,i.jsx)(A,{active:s,href:"/teaching",name:"Teaching",icon:"bi-person-workspace"}),(0,i.jsx)(A,{active:s,href:"/awards",name:"Awards",icon:"bi-trophy"}),(0,i.jsx)(A,{active:s,href:"/publications",name:"Publications",icon:"bi-journal-text"}),(0,i.jsx)(A,{active:s,href:"https://s3researchlab.github.io?utm_source=personal-website&utm_campaign=side-menu",name:"Research Lab",icon:"bi-globe",external:"true"}),(0,i.jsx)(A,{active:s,href:"/service",name:"Service",icon:"bi-people"}),(0,i.jsx)(A,{active:s,href:"/miscellaneous",name:"Miscellaneous",icon:"bi-puzzle"})]})})})]})}),(0,i.jsx)("main",{children:(0,i.jsx)(c.Z,{fluid:!0,className:"mt-3 test",children:(0,i.jsx)(t.Z,{children:(0,i.jsx)(a.Z,{sm:"12",children:n})})})})]})}},526:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return c}});var i=s(5893),t=s(2664);function a(e){let{href:n,children:s}=e;return(0,i.jsx)("li",{children:(0,i.jsx)("a",{target:"_blank",href:n,children:s})})}function c(){return(0,i.jsxs)(t.Z,{title:"Links",menu:"Miscellaneous",hasGoBackButton:!0,children:[(0,i.jsx)("p",{children:"Many things of different kinds"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)(a,{href:"https://andreas-zeller.info/2021/04/15/the-devils-guide-to-incremental-research.html",children:"The Devil's Guide to Incremental Research"}),(0,i.jsx)(a,{href:"https://faculty.washington.edu/ajko/advice#goodwriting",children:"How can I become a good technical writer?"})]})]})}}},function(e){e.O(0,[218,774,888,179],function(){return e(e.s=1551)}),_N_E=e.O()}]);