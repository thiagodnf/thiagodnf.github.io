(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[548],{9766:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/publications",function(){return s(8491)}])},5793:function(e,t,s){"use strict";s.d(t,{Z:function(){return CollapseGroup}});var a=s(5893);function CollapseGroup(e){let{id:t,title:s,children:n,collapsed:r=!1}=e,l=t||"p-"+s.toLowerCase().replace(/[^a-zA-Z0-9]+/g,"-");return(0,a.jsxs)("div",{className:"collapse-group",children:[(0,a.jsxs)("p",{className:"text-dark ".concat(r?"collapsed":""),"data-bs-toggle":"collapse","data-bs-target":"#".concat(l),children:[(0,a.jsx)("i",{className:"bi bi-chevron-right"}),s]}),(0,a.jsx)("div",{className:"collapse ".concat(r?"":"show"),id:l,children:n})]},l)}},2664:function(e,t,s){"use strict";s.d(t,{Z:function(){return Layout}});var a=s(5893),n=s(4051),r=s(1555),l=s(682),i=s(3472),o=s(4373),c=s(9008),d=s.n(c),m=s(1664),h=s.n(m),u=s(9332);function GoBackButton(){let e=(0,u.useRouter)();return(0,a.jsxs)("button",{className:"btn btn-sm btn-primary me-3",onClick:()=>e.back(),children:[(0,a.jsx)("i",{className:"bi bi-chevron-left me-1"}),"Back"]})}var x=JSON.parse('{"v":"Dr. Thiago Ferreira"}'),f=s(7294);let LocalStorageUtils=class LocalStorageUtils{static setItem(e,t){localStorage.setItem(e,JSON.stringify(t))}static getItem(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,s=localStorage.getItem(e);return s?JSON.parse(s):t}};let p=Object.freeze({LIGHT:{id:"light",name:"Light",icon:"bi-sun-fill"},DARK:{id:"dark",name:"Dark",icon:"bi-moon-stars-fill"},AUTO:{id:"auto",name:"Auto",icon:"bi-circle-half"}});function saveColorTheme(e){LocalStorageUtils.setItem("color-theme-id",e.id)}function getSystemColorTheme(){let e=window.matchMedia("(prefers-color-scheme: dark)");return e.matches?p.DARK:p.LIGHT}function changeColorThemeTo(e){e===p.AUTO&&(e=getSystemColorTheme()),window.document.documentElement.setAttribute("data-bs-theme",e.id),e===p.DARK?document.querySelector('meta[name="theme-color"]').setAttribute("content","#2C3035"):document.querySelector('meta[name="theme-color"]').setAttribute("content","#F8F9FA")}function Item(e){let{value:t,handleClick:s,selected:n=!1}=e,r=n?(0,a.jsx)("i",{className:"bi bi-check2"}):(0,a.jsx)(a.Fragment,{});return(0,a.jsx)("li",{children:(0,a.jsxs)("a",{className:"dropdown-item d-flex align-items-center rounded ".concat(n?"active":""),href:"#",onClick:e=>s(e,t),"data-theme":t.id,children:[(0,a.jsx)("i",{className:"bi ".concat(t.icon)}),(0,a.jsx)("span",{className:"ms-3 me-auto",children:t.name}),r]})})}function ColorThemeNavItem(){let[e,t]=(0,f.useState)(p.AUTO);function handleClick(e,s){t(s),changeColorThemeTo(s),saveColorTheme(s)}return(0,f.useEffect)(()=>{let s=getSystemColorTheme(),a=function(){let e=LocalStorageUtils.getItem("color-theme-id");return e==p.AUTO.id?p.AUTO:e==p.DARK.id?p.DARK:e==p.LIGHT.id?p.LIGHT:null}();a?saveColorTheme===p.AUTO?(t(s),changeColorThemeTo(s)):(t(a),changeColorThemeTo(a)):changeColorThemeTo(s);let handleDarkModeChange=t=>{e==p.AUTO&&changeColorThemeTo(getSystemColorTheme())},n=window.matchMedia("(prefers-color-scheme: dark)");return n.addEventListener("change",handleDarkModeChange),()=>{n.removeEventListener("change",handleDarkModeChange)}},[e]),(0,a.jsxs)("li",{className:"nav-item dropdown",children:[(0,a.jsx)("a",{className:"nav-link dropdown-toggle",href:"#","data-bs-toggle":"dropdown",children:(0,a.jsx)("i",{className:"bi ".concat(e.icon)})}),(0,a.jsxs)("ul",{className:"dropdown-menu dropdown-menu-end p-1",children:[(0,a.jsx)(Item,{value:p.LIGHT,handleClick:handleClick,selected:e===p.LIGHT}),(0,a.jsx)(Item,{value:p.DARK,handleClick:handleClick,selected:e===p.DARK}),(0,a.jsx)(Item,{value:p.AUTO,handleClick:handleClick,selected:e===p.AUTO})]})]})}function MenuItem(e){let{active:t,href:s,icon:n,name:r,external:l=!1}=e;return t=t.toLowerCase()==r.toLowerCase()?"active":"",(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsxs)(h(),{href:s,className:"nav-link ".concat(t),children:[(0,a.jsx)("i",{className:"bi ps-2 ".concat(n," ")}),(0,a.jsx)("span",{className:"ms-3",children:r}),l&&(0,a.jsx)("i",{className:"float-end bi bi-box-arrow-up-right"})]})})}function Layout(e){let{children:t,menu:s,title:c="",hasGoBackButton:m=!1}=e;return c=c||s,(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(d(),{children:[(0,a.jsx)("title",{children:"".concat(c," - ").concat(x.v)}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]}),(0,a.jsx)("header",{children:(0,a.jsx)(o.Z,{className:"navbar-top border-bottom pt-3 pt-md-2 mt-5 mt-md-0",children:(0,a.jsxs)(l.Z,{fluid:!0,children:[(0,a.jsxs)("div",{className:"d-flex flex-row align-items-center",children:[m&&(0,a.jsx)(GoBackButton,{}),(0,a.jsx)("span",{className:"navbar-brand",href:"#",children:c})]}),(0,a.jsx)(i.Z,{className:"me-auto"}),(0,a.jsx)(i.Z,{children:(0,a.jsx)(ColorThemeNavItem,{})})]})})}),(0,a.jsx)("aside",{children:(0,a.jsxs)(o.Z,{expand:"md",fixed:"top",id:"sideNav",className:"bg-body-tertiary",children:[(0,a.jsxs)(l.Z,{fluid:!0,children:[(0,a.jsx)(h(),{href:"/",className:"navbar-brand d-block d-md-none",children:x.v}),(0,a.jsx)(o.Z.Toggle,{className:"custom-toggler"})]}),(0,a.jsxs)(l.Z,{fluid:!0,className:"d-none d-md-block mb-1 text-center",children:[(0,a.jsx)(h(),{href:"/",children:(0,a.jsx)("img",{src:"/images/profile.jpg",alt:"the user profile",width:"150px",className:"img-fluid rounded-2 border border-light border-2"})}),(0,a.jsxs)("div",{className:"d-flex flex-column mb-1",children:[(0,a.jsx)("h5",{className:"mt-3",children:x.v}),(0,a.jsx)("div",{className:"pt-1 small",children:"Assistant Professor"}),(0,a.jsx)("div",{className:"pt-1 small",children:"University of Michigan-Flint"})]}),(0,a.jsx)("hr",{className:"mx-2"})]}),(0,a.jsx)(l.Z,{fluid:!0,className:"px-3",children:(0,a.jsx)(o.Z.Collapse,{id:"navbar",children:(0,a.jsxs)("ul",{className:"navbar-nav nav-pills mt-3 mt-md-0",children:[(0,a.jsx)(MenuItem,{active:s,href:"/",name:"Home",icon:"bi-house"}),(0,a.jsx)(MenuItem,{active:s,href:"/curriculum",name:"Curriculum",icon:"bi-file-earmark-text"}),(0,a.jsx)(MenuItem,{active:s,href:"/teaching",name:"Teaching",icon:"bi-person-workspace"}),(0,a.jsx)(MenuItem,{active:s,href:"/awards",name:"Awards",icon:"bi-trophy"}),(0,a.jsx)(MenuItem,{active:s,href:"/publications",name:"Publications",icon:"bi-journal-text"}),(0,a.jsx)(MenuItem,{active:s,href:"https://s3researchlab.github.io?utm_source=personal-website&utm_campaign=side-menu",name:"Research Lab",icon:"bi-globe",external:"true"}),(0,a.jsx)(MenuItem,{active:s,href:"/service",name:"Service",icon:"bi-people"}),(0,a.jsx)(MenuItem,{active:s,href:"/miscellaneous",name:"Miscellaneous",icon:"bi-puzzle"})]})})})]})}),(0,a.jsx)("main",{children:(0,a.jsx)(l.Z,{fluid:!0,className:"mt-3 test",children:(0,a.jsx)(n.Z,{children:(0,a.jsx)(r.Z,{sm:"12",children:t})})})})]})}},8491:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return c},default:function(){return PublicationsPage}});var a=s(5893),n=s(7294),r=s(1555),l=s(2664),i=s(5793);let o={journal:{order:1,title:"Refereed Journal Papers"},conference:{order:2,title:"Refereed Conference Papers"},book:{order:3,title:"Book Chapters"},"short-paper":{order:4,title:"Refereed Short Papers, Videos, Demos, and Posters"},"no-proceedings":{order:5,title:"Workshop and Conferences without Proceedings"},unrefereed:{order:6,title:"Unrefereed Publications"},"invited-talks":{order:7,title:"Major Invited Talks"},thesis:{order:8,title:"Thesis"},"under-review":{order:9,title:"Under Review"}};for(let e=2e3;e<2040;e++)o[e]={order:2040-e,title:e+""};var c=!0;function PublicationsPage(e){var t;let s,{entries:c}=e,[d,m]=(0,n.useState)("year"),[h,u]=(0,n.useState)(""),x=Array.from((t=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.filter(e=>!t||e.HTML.toLowerCase().includes(t.toLowerCase()))}(c.formatted,h),s=new Map,t.forEach(e=>{let t=e[d.toUpperCase()];s.has(t)||s.set(t,[]),s.get(t).push(e)}),s).keys()).sort((e,t)=>o[e].order-o[t].order).map(e=>{var t,n;let r;return t=e,n=s.get(e),t=o[t].title,r=n.map(e=>(0,a.jsx)("li",{className:"ms-1",children:(0,a.jsx)("span",{dangerouslySetInnerHTML:{__html:e.HTML}})},e.key)),(0,a.jsx)(i.Z,{title:t,children:(0,a.jsx)("ul",{children:r})},t)});return(0,a.jsxs)(l.Z,{menu:"Publications",children:[(0,a.jsx)("p",{children:"This is not the full list. We will update it as soon as possible."}),(0,a.jsxs)("form",{className:"row g-1 mb-3",children:[(0,a.jsx)(r.Z,{xs:"12",sm:"3",md:"2",lg:"2",xl:"1",children:(0,a.jsxs)("select",{className:"form-select",value:d,onChange:function(e){m(e.target.value)},children:[(0,a.jsx)("option",{value:"year",children:"Year"}),(0,a.jsx)("option",{value:"annote",children:"Type"})]})}),(0,a.jsx)(r.Z,{xs:"12",sm:"9",md:"10",lg:"10",xl:"11",children:(0,a.jsx)("input",{type:"search",className:"form-control",placeholder:"Search papers",autoComplete:"off",value:h,onChange:function(e){u(e.target.value)}})})]}),(0,a.jsx)("div",{className:"publications",children:x})]})}}},function(e){e.O(0,[576,774,888,179],function(){return e(e.s=9766)}),_N_E=e.O()}]);