"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[580],{2664:function(e,a,s){s.d(a,{Z:function(){return A}});var t=s(5893),r=s(4051),i=s(1555),n=s(682),c=s(3472),l=s(896),d=s(9008),o=s.n(d),m=s(1664),h=s.n(m),u=s(9332);function x(){let e=(0,u.useRouter)();return(0,t.jsxs)("button",{className:"btn btn-sm btn-primary me-3",onClick:()=>e.back(),children:[(0,t.jsx)("i",{className:"bi bi-chevron-left me-1"}),"Back"]})}var j=JSON.parse('{"v":"Dr. Thiago Ferreira"}'),f=s(7294);class b{static setItem(e,a){localStorage.setItem(e,JSON.stringify(a))}static getItem(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,s=localStorage.getItem(e);return s?JSON.parse(s):a}}let v=Object.freeze({LIGHT:{id:"light",name:"Light",icon:"bi-sun-fill"},DARK:{id:"dark",name:"Dark",icon:"bi-moon-stars-fill"},AUTO:{id:"auto",name:"Auto",icon:"bi-circle-half"}});function p(e){b.setItem("color-theme-id",e.id)}function g(){let e=window.matchMedia("(prefers-color-scheme: dark)");return e.matches?v.DARK:v.LIGHT}function N(e){e===v.AUTO&&(e=g()),window.document.documentElement.setAttribute("data-bs-theme",e.id),e===v.DARK?document.querySelector('meta[name="theme-color"]').setAttribute("content","#2C3035"):document.querySelector('meta[name="theme-color"]').setAttribute("content","#F8F9FA")}function w(e){let{value:a,handleClick:s,selected:r=!1}=e,i=r?(0,t.jsx)("i",{className:"bi bi-check2"}):(0,t.jsx)(t.Fragment,{});return(0,t.jsx)("li",{children:(0,t.jsxs)("a",{className:"dropdown-item d-flex align-items-center rounded ".concat(r?"active":""),href:"#",onClick:e=>s(e,a),"data-theme":a.id,children:[(0,t.jsx)("i",{className:"bi ".concat(a.icon)}),(0,t.jsx)("span",{className:"ms-3 me-auto",children:a.name}),i]})})}function Z(){let[e,a]=(0,f.useState)(v.AUTO);function s(e,s){a(s),N(s),p(s)}return(0,f.useEffect)(()=>{let s=g(),t=function(){let e=b.getItem("color-theme-id");return e==v.AUTO.id?v.AUTO:e==v.DARK.id?v.DARK:e==v.LIGHT.id?v.LIGHT:null}();t?p===v.AUTO?(a(s),N(s)):(a(t),N(t)):N(s);let r=a=>{e==v.AUTO&&N(g())},i=window.matchMedia("(prefers-color-scheme: dark)");return i.addEventListener("change",r),()=>{i.removeEventListener("change",r)}},[e]),(0,t.jsxs)("li",{className:"nav-item dropdown",children:[(0,t.jsx)("a",{className:"nav-link dropdown-toggle",href:"#","data-bs-toggle":"dropdown",children:(0,t.jsx)("i",{className:"bi ".concat(e.icon)})}),(0,t.jsxs)("ul",{className:"dropdown-menu dropdown-menu-end p-1",children:[(0,t.jsx)(w,{value:v.LIGHT,handleClick:s,selected:e===v.LIGHT}),(0,t.jsx)(w,{value:v.DARK,handleClick:s,selected:e===v.DARK}),(0,t.jsx)(w,{value:v.AUTO,handleClick:s,selected:e===v.AUTO})]})]})}function k(e){let{active:a,href:s,icon:r,name:i,external:n=!1}=e;return a=a.toLowerCase()==i.toLowerCase()?"active":"",(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsxs)(h(),{href:s,className:"nav-link ".concat(a),children:[(0,t.jsx)("i",{className:"bi ps-2 ".concat(r," ")}),(0,t.jsx)("span",{className:"ms-3",children:i}),n&&(0,t.jsx)("i",{className:"float-end bi bi-box-arrow-up-right"})]})})}function A(e){let{children:a,menu:s,title:d="",hasGoBackButton:m=!1}=e;return d=d||s,(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o(),{children:[(0,t.jsx)("title",{children:"".concat(d," - ").concat(j.v)}),(0,t.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]}),(0,t.jsx)("header",{children:(0,t.jsx)(l.Z,{className:"navbar-top border-bottom pt-3 pt-md-2 mt-5 mt-md-0",children:(0,t.jsxs)(n.Z,{fluid:!0,children:[(0,t.jsxs)("div",{className:"d-flex flex-row align-items-center",children:[m&&(0,t.jsx)(x,{}),(0,t.jsx)("span",{className:"navbar-brand",href:"#",children:d})]}),(0,t.jsx)(c.Z,{className:"me-auto"}),(0,t.jsx)(c.Z,{children:(0,t.jsx)(Z,{})})]})})}),(0,t.jsx)("aside",{children:(0,t.jsxs)(l.Z,{expand:"md",fixed:"top",id:"sideNav",className:"bg-body-tertiary",children:[(0,t.jsxs)(n.Z,{fluid:!0,children:[(0,t.jsx)(h(),{href:"/",className:"navbar-brand d-block d-md-none",children:j.v}),(0,t.jsx)(l.Z.Toggle,{className:"custom-toggler"})]}),(0,t.jsxs)(n.Z,{fluid:!0,className:"d-none d-md-block mb-1 text-center",children:[(0,t.jsx)(h(),{href:"/",children:(0,t.jsx)("img",{src:"/images/profile.jpg",alt:"the user profile",width:"150px",className:"img-fluid rounded-2 border border-light border-2"})}),(0,t.jsxs)("div",{className:"d-flex flex-column mb-1",children:[(0,t.jsx)("h5",{className:"mt-3",children:j.v}),(0,t.jsx)("div",{className:"pt-1 small",children:"Assistant Professor"}),(0,t.jsx)("div",{className:"pt-1 small",children:"University of Michigan-Flint"})]}),(0,t.jsx)("hr",{className:"mx-2"})]}),(0,t.jsx)(n.Z,{fluid:!0,className:"px-3",children:(0,t.jsx)(l.Z.Collapse,{id:"navbar",children:(0,t.jsxs)("ul",{className:"navbar-nav nav-pills mt-3 mt-md-0",children:[(0,t.jsx)(k,{active:s,href:"/",name:"Home",icon:"bi-house"}),(0,t.jsx)(k,{active:s,href:"/curriculum",name:"Curriculum",icon:"bi-file-earmark-text"}),(0,t.jsx)(k,{active:s,href:"/teaching",name:"Teaching",icon:"bi-person-workspace"}),(0,t.jsx)(k,{active:s,href:"/awards",name:"Awards",icon:"bi-trophy"}),(0,t.jsx)(k,{active:s,href:"/publications",name:"Publications",icon:"bi-journal-text"}),(0,t.jsx)(k,{active:s,href:"https://s3researchlab.github.io?utm_source=personal-website&utm_campaign=side-menu",name:"Research Lab",icon:"bi-globe",external:"true"}),(0,t.jsx)(k,{active:s,href:"/service",name:"Service",icon:"bi-people"}),(0,t.jsx)(k,{active:s,href:"/miscellaneous",name:"Miscellaneous",icon:"bi-puzzle"})]})})})]})}),(0,t.jsx)("main",{children:(0,t.jsx)(n.Z,{fluid:!0,className:"mt-3 test",children:(0,t.jsx)(r.Z,{children:(0,t.jsx)(i.Z,{sm:"12",children:a})})})})]})}},8182:function(e,a,s){s.d(a,{Z:function(){return Z}});var t=s(4184),r=s.n(t),i=s(7294),n=s(6792),c=s(6611),l=s(1822),d=s(5893);let o=i.forwardRef(({bsPrefix:e,className:a,variant:s,as:t="img",...i},c)=>{let l=(0,n.vE)(e,"card-img");return(0,d.jsx)(t,{ref:c,className:r()(s?`${l}-${s}`:l,a),...i})});o.displayName="CardImg";var m=s(9059);let h=i.forwardRef(({bsPrefix:e,className:a,as:s="div",...t},c)=>{let l=(0,n.vE)(e,"card-header"),o=(0,i.useMemo)(()=>({cardHeaderBsPrefix:l}),[l]);return(0,d.jsx)(m.Z.Provider,{value:o,children:(0,d.jsx)(s,{ref:c,...t,className:r()(a,l)})})});h.displayName="CardHeader";let u=(0,l.Z)("h5"),x=(0,l.Z)("h6"),j=(0,c.Z)("card-body"),f=(0,c.Z)("card-title",{Component:u}),b=(0,c.Z)("card-subtitle",{Component:x}),v=(0,c.Z)("card-link",{Component:"a"}),p=(0,c.Z)("card-text",{Component:"p"}),g=(0,c.Z)("card-footer"),N=(0,c.Z)("card-img-overlay"),w=i.forwardRef(({bsPrefix:e,className:a,bg:s,text:t,border:i,body:c=!1,children:l,as:o="div",...m},h)=>{let u=(0,n.vE)(e,"card");return(0,d.jsx)(o,{ref:h,...m,className:r()(a,u,s&&`bg-${s}`,t&&`text-${t}`,i&&`border-${i}`),children:c?(0,d.jsx)(j,{children:l}):l})});w.displayName="Card";var Z=Object.assign(w,{Img:o,Title:f,Subtitle:b,Body:j,Link:v,Text:p,Header:h,Footer:g,ImgOverlay:N})}}]);