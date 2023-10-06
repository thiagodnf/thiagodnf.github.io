(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[790],{7550:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/miscellaneous/invited-talks",function(){return n(8126)}])},2664:function(e,t,n){"use strict";n.d(t,{Z:function(){return Layout}});var a=n(5893),s=n(4051),i=n(1555),r=n(682),l=n(3472),c=n(4373),o=n(9008),m=n.n(o),d=n(1664),h=n.n(d),u=n(9332);function GoBackButton(){let e=(0,u.useRouter)();return(0,a.jsxs)("button",{className:"btn btn-sm btn-primary me-3",onClick:()=>e.back(),children:[(0,a.jsx)("i",{className:"bi bi-chevron-left me-1"}),"Back"]})}var x=JSON.parse('{"v":"Dr. Thiago Ferreira"}'),j=n(7294);let LocalStorageUtils=class LocalStorageUtils{static setItem(e,t){localStorage.setItem(e,JSON.stringify(t))}static getItem(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=localStorage.getItem(e);return n?JSON.parse(n):t}};let b=Object.freeze({LIGHT:{id:"light",name:"Light",icon:"bi-sun-fill"},DARK:{id:"dark",name:"Dark",icon:"bi-moon-stars-fill"},AUTO:{id:"auto",name:"Auto",icon:"bi-circle-half"}});function saveColorTheme(e){LocalStorageUtils.setItem("color-theme-id",e.id)}function getSystemColorTheme(){let e=window.matchMedia("(prefers-color-scheme: dark)");return e.matches?b.DARK:b.LIGHT}function changeColorThemeTo(e){e===b.AUTO&&(e=getSystemColorTheme()),window.document.documentElement.setAttribute("data-bs-theme",e.id),e===b.DARK?document.querySelector('meta[name="theme-color"]').setAttribute("content","#2C3035"):document.querySelector('meta[name="theme-color"]').setAttribute("content","#F8F9FA")}function Item(e){let{value:t,handleClick:n,selected:s=!1}=e,i=s?(0,a.jsx)("i",{className:"bi bi-check2"}):(0,a.jsx)(a.Fragment,{});return(0,a.jsx)("li",{children:(0,a.jsxs)("a",{className:"dropdown-item d-flex align-items-center rounded ".concat(s?"active":""),href:"#",onClick:e=>n(e,t),"data-theme":t.id,children:[(0,a.jsx)("i",{className:"bi ".concat(t.icon)}),(0,a.jsx)("span",{className:"ms-3 me-auto",children:t.name}),i]})})}function ColorThemeNavItem(){let[e,t]=(0,j.useState)(b.AUTO);function handleClick(e,n){t(n),changeColorThemeTo(n),saveColorTheme(n)}return(0,j.useEffect)(()=>{let n=getSystemColorTheme(),a=function(){let e=LocalStorageUtils.getItem("color-theme-id");return e==b.AUTO.id?b.AUTO:e==b.DARK.id?b.DARK:e==b.LIGHT.id?b.LIGHT:null}();a?saveColorTheme===b.AUTO?(t(n),changeColorThemeTo(n)):(t(a),changeColorThemeTo(a)):changeColorThemeTo(n);let handleDarkModeChange=t=>{e==b.AUTO&&changeColorThemeTo(getSystemColorTheme())},s=window.matchMedia("(prefers-color-scheme: dark)");return s.addEventListener("change",handleDarkModeChange),()=>{s.removeEventListener("change",handleDarkModeChange)}},[e]),(0,a.jsxs)("li",{className:"nav-item dropdown",children:[(0,a.jsx)("a",{className:"nav-link dropdown-toggle",href:"#","data-bs-toggle":"dropdown",children:(0,a.jsx)("i",{className:"bi ".concat(e.icon)})}),(0,a.jsxs)("ul",{className:"dropdown-menu dropdown-menu-end p-1",children:[(0,a.jsx)(Item,{value:b.LIGHT,handleClick:handleClick,selected:e===b.LIGHT}),(0,a.jsx)(Item,{value:b.DARK,handleClick:handleClick,selected:e===b.DARK}),(0,a.jsx)(Item,{value:b.AUTO,handleClick:handleClick,selected:e===b.AUTO})]})]})}function MenuItem(e){let{active:t,href:n,icon:s,name:i,external:r=!1}=e;return t=t.toLowerCase()==i.toLowerCase()?"active":"",(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsxs)(h(),{href:n,className:"nav-link ".concat(t),children:[(0,a.jsx)("i",{className:"bi ps-2 ".concat(s," ")}),(0,a.jsx)("span",{className:"ms-3",children:i}),r&&(0,a.jsx)("i",{className:"float-end bi bi-box-arrow-up-right"})]})})}function Layout(e){let{children:t,menu:n,title:o="",hasGoBackButton:d=!1}=e;return o=o||n,(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(m(),{children:[(0,a.jsx)("title",{children:"".concat(o," - ").concat(x.v)}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]}),(0,a.jsx)("header",{children:(0,a.jsx)(c.Z,{className:"navbar-top border-bottom pt-3 pt-md-2 mt-5 mt-md-0",children:(0,a.jsxs)(r.Z,{fluid:!0,children:[(0,a.jsxs)("div",{className:"d-flex flex-row align-items-center",children:[d&&(0,a.jsx)(GoBackButton,{}),(0,a.jsx)("span",{className:"navbar-brand",href:"#",children:o})]}),(0,a.jsx)(l.Z,{className:"me-auto"}),(0,a.jsx)(l.Z,{children:(0,a.jsx)(ColorThemeNavItem,{})})]})})}),(0,a.jsx)("aside",{children:(0,a.jsxs)(c.Z,{expand:"md",fixed:"top",id:"sideNav",className:"bg-body-tertiary",children:[(0,a.jsxs)(r.Z,{fluid:!0,children:[(0,a.jsx)(h(),{href:"/",className:"navbar-brand d-block d-md-none",children:x.v}),(0,a.jsx)(c.Z.Toggle,{className:"custom-toggler"})]}),(0,a.jsxs)(r.Z,{fluid:!0,className:"d-none d-md-block mb-1 text-center",children:[(0,a.jsx)(h(),{href:"/",children:(0,a.jsx)("img",{src:"/images/profile.jpg",alt:"the user profile",width:"150px",className:"img-fluid rounded-2 border border-light border-2"})}),(0,a.jsxs)("div",{className:"d-flex flex-column mb-1",children:[(0,a.jsx)("h5",{className:"mt-3",children:x.v}),(0,a.jsx)("div",{className:"pt-1 small",children:"Assistant Professor"}),(0,a.jsx)("div",{className:"pt-1 small text-secondary",children:"University of Michigan-Flint"})]}),(0,a.jsx)("hr",{className:"mx-2"})]}),(0,a.jsx)(r.Z,{fluid:!0,className:"px-3",children:(0,a.jsx)(c.Z.Collapse,{id:"navbar",children:(0,a.jsxs)("ul",{className:"navbar-nav nav-pills mt-3 mt-md-0",children:[(0,a.jsx)(MenuItem,{active:n,href:"/",name:"Home",icon:"bi-house"}),(0,a.jsx)(MenuItem,{active:n,href:"/curriculum",name:"Curriculum",icon:"bi-file-earmark-text"}),(0,a.jsx)(MenuItem,{active:n,href:"/teaching",name:"Teaching",icon:"bi-person-workspace"}),(0,a.jsx)(MenuItem,{active:n,href:"/awards",name:"Awards",icon:"bi-trophy"}),(0,a.jsx)(MenuItem,{active:n,href:"/publications",name:"Publications",icon:"bi-journal-text"}),(0,a.jsx)(MenuItem,{active:n,href:"https://s3researchlab.github.io?utm_source=personal-website&utm_campaign=side-menu",name:"Research Lab",icon:"bi-globe",external:"true"}),(0,a.jsx)(MenuItem,{active:n,href:"/service",name:"Service",icon:"bi-people"}),(0,a.jsx)(MenuItem,{active:n,href:"/miscellaneous",name:"Miscellaneous",icon:"bi-puzzle"})]})})})]})}),(0,a.jsx)("main",{children:(0,a.jsx)(r.Z,{fluid:!0,className:"mt-3 test",children:(0,a.jsx)(s.Z,{children:(0,a.jsx)(i.Z,{sm:"12",children:t})})})})]})}},8126:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return InvitedTalksPage}});var a=n(5893),s=n(2664);function Item(e){let{key:t,title:n,subtitle:s}=e;return(0,a.jsxs)("li",{children:[(0,a.jsx)("span",{children:n}),s&&(0,a.jsx)("span",{className:"d-block text-secondary",children:s})]},t)}function InvitedTalksPage(){return(0,a.jsxs)(s.Z,{title:"Invited Talks",menu:"Miscellaneous",hasGoBackButton:!0,children:[(0,a.jsx)("p",{children:"Occasions where I was invited to speak about my expertise/research."}),(0,a.jsx)("h5",{children:"Seminars"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)(Item,{title:"A Preference-based Approach For Reducing The Number Of Objectives Applied To The Variability Testing Of Software Product Line",subtitle:"CIS Research Seminar, University of Michigan-Dearborn, United States, October 10, 2021"}),(0,a.jsx)(Item,{title:"Chatbot Demo - Integration in your Classroom",subtitle:"CIS Research Seminar, University of Michigan-Dearborn, United States, April 30, 2020"})]})]})}}},function(e){e.O(0,[576,774,888,179],function(){return e(e.s=7550)}),_N_E=e.O()}]);