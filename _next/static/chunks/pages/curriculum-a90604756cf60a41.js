(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[734],{5728:function(e,s,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/curriculum",function(){return i(5902)}])},2664:function(e,s,i){"use strict";i.d(s,{Z:function(){return S}});var n=i(5893),r=i(4051),a=i(1555),l=i(682),t=i(3472),c=i(896),o=i(9008),d=i.n(o),m=i(1664),h=i.n(m),x=i(9332);function u(){let e=(0,x.useRouter)();return(0,n.jsxs)("button",{className:"btn btn-sm btn-success me-3",onClick:()=>e.back(),children:[(0,n.jsx)("i",{className:"bi bi-chevron-left me-1"}),"Back"]})}var j=JSON.parse('{"v":"Dr. Thiago Ferreira"}'),f=i(7294);class g{static setItem(e,s){localStorage.setItem(e,JSON.stringify(s))}static getItem(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=localStorage.getItem(e);return i?JSON.parse(i):s}}let p=Object.freeze({LIGHT:{id:"light",name:"Light",icon:"bi-sun-fill"},DARK:{id:"dark",name:"Dark",icon:"bi-moon-stars-fill"},AUTO:{id:"auto",name:"Auto",icon:"bi-circle-half"}});function b(e){g.setItem("color-theme-id",e.id)}function v(){let e=window.matchMedia("(prefers-color-scheme: dark)");return e.matches?p.DARK:p.LIGHT}function N(e){e===p.AUTO&&(e=v()),window.document.documentElement.setAttribute("data-bs-theme",e.id)}function w(e){let{value:s,handleClick:i,selected:r=!1}=e,a=r?(0,n.jsx)("i",{className:"bi bi-check2"}):(0,n.jsx)(n.Fragment,{});return(0,n.jsx)("li",{children:(0,n.jsxs)("a",{className:"dropdown-item d-flex align-items-center rounded ".concat(r?"active":""),href:"#",onClick:e=>i(e,s),"data-theme":s.id,children:[(0,n.jsx)("i",{className:"bi ".concat(s.icon)}),(0,n.jsx)("span",{className:"ms-3 me-auto",children:s.name}),a]})})}function y(){let[e,s]=(0,f.useState)(p.AUTO);function i(e,i){s(i),N(i),b(i)}return(0,f.useEffect)(()=>{let i=v(),n=function(){let e=g.getItem("color-theme-id");return e==p.AUTO.id?p.AUTO:e==p.DARK.id?p.DARK:e==p.LIGHT.id?p.LIGHT:null}();n?b===p.AUTO?(s(i),N(i)):(s(n),N(n)):N(i);let r=s=>{e==p.AUTO&&N(v())},a=window.matchMedia("(prefers-color-scheme: dark)");return a.addEventListener("change",r),()=>{a.removeEventListener("change",r)}},[e]),(0,n.jsxs)("li",{className:"nav-item dropdown",children:[(0,n.jsx)("a",{className:"nav-link dropdown-toggle",href:"#","data-bs-toggle":"dropdown",children:(0,n.jsx)("i",{className:"bi ".concat(e.icon)})}),(0,n.jsxs)("ul",{className:"dropdown-menu dropdown-menu-end p-1",children:[(0,n.jsx)(w,{value:p.LIGHT,handleClick:i,selected:e===p.LIGHT}),(0,n.jsx)(w,{value:p.DARK,handleClick:i,selected:e===p.DARK}),(0,n.jsx)(w,{value:p.AUTO,handleClick:i,selected:e===p.AUTO})]})]})}function A(e){let{active:s,href:i,icon:r,name:a,external:l=!1}=e;return s=s.toLowerCase()==a.toLowerCase()?"active":"",(0,n.jsx)("li",{className:"nav-item",children:(0,n.jsxs)(h(),{href:i,className:"nav-link ".concat(s),children:[(0,n.jsx)("i",{className:"bi ps-2 ".concat(r," ")}),(0,n.jsx)("span",{className:"ms-3",children:a}),l&&(0,n.jsx)("i",{className:"float-end bi bi-box-arrow-up-right"})]})})}function S(e){let{children:s,menu:i,title:o="",hasGoBackButton:m=!1}=e;return o=o||i,(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(d(),{children:[(0,n.jsx)("title",{children:"".concat(o," - ").concat(j.v)}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]}),(0,n.jsx)("header",{children:(0,n.jsx)(c.Z,{className:"navbar-top border-bottom pt-3 pt-md-2 mt-5 mt-md-0",children:(0,n.jsxs)(l.Z,{fluid:!0,children:[(0,n.jsxs)("div",{className:"d-flex flex-row align-items-center",children:[m&&(0,n.jsx)(u,{}),(0,n.jsx)("span",{className:"navbar-brand",href:"#",children:o})]}),(0,n.jsx)(t.Z,{className:"me-auto"}),(0,n.jsx)(t.Z,{children:(0,n.jsx)(y,{})})]})})}),(0,n.jsx)("aside",{children:(0,n.jsxs)(c.Z,{expand:"md",fixed:"top",id:"sideNav",className:"bg-body-tertiary",children:[(0,n.jsxs)(l.Z,{fluid:!0,children:[(0,n.jsx)(h(),{href:"/",className:"navbar-brand d-block d-md-none",children:j.v}),(0,n.jsx)(c.Z.Toggle,{className:"custom-toggler"})]}),(0,n.jsxs)(l.Z,{fluid:!0,className:"d-none d-md-block mb-1 text-center",children:[(0,n.jsx)(h(),{href:"/",children:(0,n.jsx)("img",{src:"/images/profile.jpg",alt:"the user profile",width:"150px",className:"img-fluid rounded-2 border border-light border-2"})}),(0,n.jsxs)("div",{className:"d-flex flex-column mb-1",children:[(0,n.jsx)("h5",{className:"mt-3",children:j.v}),(0,n.jsx)("div",{className:"pt-1 small",children:"Assistant Professor"}),(0,n.jsx)("div",{className:"pt-1 small",children:"University of Michigan-Flint"})]}),(0,n.jsx)("hr",{className:"mx-2"})]}),(0,n.jsx)(l.Z,{fluid:!0,className:"px-3",children:(0,n.jsx)(c.Z.Collapse,{id:"navbar",children:(0,n.jsxs)("ul",{className:"navbar-nav nav-pills mt-3 mt-md-0",children:[(0,n.jsx)(A,{active:i,href:"/",name:"Home",icon:"bi-house"}),(0,n.jsx)(A,{active:i,href:"/curriculum",name:"Curriculum",icon:"bi-file-earmark-text"}),(0,n.jsx)(A,{active:i,href:"/teaching",name:"Teaching",icon:"bi-person-workspace"}),(0,n.jsx)(A,{active:i,href:"/awards",name:"Awards",icon:"bi-trophy"}),(0,n.jsx)(A,{active:i,href:"/publications",name:"Publications",icon:"bi-journal-text"}),(0,n.jsx)(A,{active:i,href:"https://s3researchlab.github.io?utm_source=personal-website&utm_campaign=side-menu",name:"Research Lab",icon:"bi-globe",external:"true"}),(0,n.jsx)(A,{active:i,href:"/service",name:"Service",icon:"bi-people"}),(0,n.jsx)(A,{active:i,href:"/miscellaneous",name:"Miscellaneous",icon:"bi-puzzle"})]})})})]})}),(0,n.jsx)("main",{children:(0,n.jsx)(l.Z,{fluid:!0,className:"mt-3 test",children:(0,n.jsx)(r.Z,{children:(0,n.jsx)(a.Z,{sm:"12",children:s})})})})]})}},2333:function(e,s,i){"use strict";i.d(s,{Z:function(){return a}});var n=i(5893),r=i(7294);function a(e){let{logo:s,name:i,location:a,children:l}=e,t=r.Children.map(l,(e,s)=>{let{props:i}=e;return(0,n.jsxs)("li",{className:"py-0 my-0 mt-2",children:[i.children," ",(0,n.jsx)("small",{className:"text-secondary",children:i.when})]},s)});return(0,n.jsxs)("div",{className:"d-flex my-3",children:[(0,n.jsx)("div",{className:"flex-shrink-0 d-none d-sm-block me-2",children:(0,n.jsx)("img",{src:s,alt:"logo",width:44,height:44,className:"img-fluid rounded border"})}),(0,n.jsx)("div",{className:"flex-grow-1 border-bottom",children:(0,n.jsxs)("div",{className:"py-0 px-0",children:[(0,n.jsx)("h6",{className:"py-0 my-0 fw-bold",children:i}),(0,n.jsx)("p",{className:"py-1 my-0 text-secondary",children:a}),(0,n.jsx)("ul",{className:"mt-2",children:t})]})})]})}},5902:function(e,s,i){"use strict";i.r(s),i.d(s,{default:function(){return l}});var n=i(5893);i(7294);var r=i(2664),a=i(2333);function l(){return(0,n.jsxs)(r.Z,{menu:"Curriculum",children:[(0,n.jsx)("p",{children:"Past and  current experiences on industry and academia"}),(0,n.jsx)("h5",{children:"Education"}),(0,n.jsxs)(a.Z,{name:"PhD Degree in Computer Science (2015 - 2019)",location:"Federal University of Paran\xe1, Brazil",logo:"/images/logos/ufpr.png",children:[(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"Title:"})," A preference-based approach for reducing the number of objectives applied to the variability testing of software product line"]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"Advisors:"})," Prof. Dr. Silvia Regina Vergilio"]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"Co-advisors:"})," Prof. Jerffeson Teixeira de Souza and Prof. Marouane Kessentini"]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"Sandwich PhD:"})," University of Michigan-Dearborn, USA - Prof. Dr. Marouane Kessentini"]})]}),(0,n.jsxs)(a.Z,{name:"Masters Degree in Computer Science (2013 - 2015)",location:"Cear\xe1 State University, Brazil",logo:"/images/logos/uece.png",children:[(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"Title:"})," Abordagens Interativas Usando Algoritmo de Otimiza\xe7\xe3o por Col\xf4nia de Formiga Para o Problema do Pr\xf3ximo Release (In Portuguese)"]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"Advisor:"})," Prof. Dr. Jerffeson Teixeira de Souza"]})]}),(0,n.jsxs)(a.Z,{name:"Bachelor's Degree in Computer Science (2007 - 2012)",location:"Cear\xe1 State University, Brazil",logo:"/images/logos/uece.png",children:[(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"Title:"})," Aplica\xe7\xe3o do Algoritmo de Colonia de Abelhas Simulada no Problema do Planejamento de Release de Software (In Portuguese)"]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"Advisor:"})," Prof. Dr. Jerffeson Teixeira de Souza"]})]}),(0,n.jsx)("h5",{children:"Experiences"}),(0,n.jsx)("p",{className:"my-4",children:"Academic Positions"}),(0,n.jsx)(a.Z,{name:"University of Michigan-Flint",location:"Flint, United States",logo:"/images/logos/um-flint.jpg",children:(0,n.jsx)("li",{when:"(Oct 2021 - Present)",children:"Assistant Professor"})}),(0,n.jsxs)(a.Z,{name:"University of Michigan-Dearborn",location:"Dearborn, United States",logo:"/images/logos/um-dearborn.jpg",children:[(0,n.jsx)("li",{when:"(Mar 2020 - Sep 2021)",children:"Postdoctoral Research Fellow"}),(0,n.jsx)("li",{when:"(Sep 2020 – Sep 2021)",children:"Intermittent Lecturer"}),(0,n.jsx)("li",{when:"(May 2017 - Oct 2017)",children:"Visiting Research Assistant"})]}),(0,n.jsx)(a.Z,{name:"Federal University of Technology - Paran\xe1",location:"Curitiba, Brazil",logo:"/images/logos/utfpr.jpg",children:(0,n.jsx)("li",{when:"(Mar 2018 - Dec 2019)",children:"Substitute Professor"})}),(0,n.jsx)("p",{className:"my-4",children:"Industrial Employment"}),(0,n.jsx)(a.Z,{name:"GeoSales Technology",location:"Fortaleza, Brazil",logo:"/images/logos/softsite.jpg",children:(0,n.jsx)("li",{when:"(Jul 2012 - Dec 2013)",children:"Software Developer"})}),(0,n.jsx)(a.Z,{name:"Odonto System Planos Odontol\xf3gicos",location:"Fortaleza, Brazil",logo:"/images/logos/odonto-system.png",children:(0,n.jsx)("li",{when:"(Jul 2009 - Jul 2010)",children:"Software Developer Intern"})})]})}}},function(e){e.O(0,[218,774,888,179],function(){return e(e.s=5728)}),_N_E=e.O()}]);