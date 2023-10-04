(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[734],{5728:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/curriculum",function(){return s(5902)}])},2664:function(e,n,s){"use strict";s.d(n,{Z:function(){return Layout}});var i=s(5893),a=s(4051),r=s(1555),l=s(682),t=s(3472),o=s(4373),c=s(9008),d=s.n(c),m=s(1664),h=s.n(m),u=s(9332);function GoBackButton(){let e=(0,u.useRouter)();return(0,i.jsxs)("button",{className:"btn btn-sm btn-primary me-3",onClick:()=>e.back(),children:[(0,i.jsx)("i",{className:"bi bi-chevron-left me-1"}),"Back"]})}var x=JSON.parse('{"v":"Dr. Thiago Ferreira"}'),g=s(7294);let LocalStorageUtils=class LocalStorageUtils{static setItem(e,n){localStorage.setItem(e,JSON.stringify(n))}static getItem(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,s=localStorage.getItem(e);return s?JSON.parse(s):n}};let j=Object.freeze({LIGHT:{id:"light",name:"Light",icon:"bi-sun-fill"},DARK:{id:"dark",name:"Dark",icon:"bi-moon-stars-fill"},AUTO:{id:"auto",name:"Auto",icon:"bi-circle-half"}});function saveColorTheme(e){LocalStorageUtils.setItem("color-theme-id",e.id)}function getSystemColorTheme(){let e=window.matchMedia("(prefers-color-scheme: dark)");return e.matches?j.DARK:j.LIGHT}function changeColorThemeTo(e){e===j.AUTO&&(e=getSystemColorTheme()),window.document.documentElement.setAttribute("data-bs-theme",e.id),e===j.DARK?document.querySelector('meta[name="theme-color"]').setAttribute("content","#2C3035"):document.querySelector('meta[name="theme-color"]').setAttribute("content","#F8F9FA")}function Item(e){let{value:n,handleClick:s,selected:a=!1}=e,r=a?(0,i.jsx)("i",{className:"bi bi-check2"}):(0,i.jsx)(i.Fragment,{});return(0,i.jsx)("li",{children:(0,i.jsxs)("a",{className:"dropdown-item d-flex align-items-center rounded ".concat(a?"active":""),href:"#",onClick:e=>s(e,n),"data-theme":n.id,children:[(0,i.jsx)("i",{className:"bi ".concat(n.icon)}),(0,i.jsx)("span",{className:"ms-3 me-auto",children:n.name}),r]})})}function ColorThemeNavItem(){let[e,n]=(0,g.useState)(j.AUTO);function handleClick(e,s){n(s),changeColorThemeTo(s),saveColorTheme(s)}return(0,g.useEffect)(()=>{let s=getSystemColorTheme(),i=function(){let e=LocalStorageUtils.getItem("color-theme-id");return e==j.AUTO.id?j.AUTO:e==j.DARK.id?j.DARK:e==j.LIGHT.id?j.LIGHT:null}();i?saveColorTheme===j.AUTO?(n(s),changeColorThemeTo(s)):(n(i),changeColorThemeTo(i)):changeColorThemeTo(s);let handleDarkModeChange=n=>{e==j.AUTO&&changeColorThemeTo(getSystemColorTheme())},a=window.matchMedia("(prefers-color-scheme: dark)");return a.addEventListener("change",handleDarkModeChange),()=>{a.removeEventListener("change",handleDarkModeChange)}},[e]),(0,i.jsxs)("li",{className:"nav-item dropdown",children:[(0,i.jsx)("a",{className:"nav-link dropdown-toggle",href:"#","data-bs-toggle":"dropdown",children:(0,i.jsx)("i",{className:"bi ".concat(e.icon)})}),(0,i.jsxs)("ul",{className:"dropdown-menu dropdown-menu-end p-1",children:[(0,i.jsx)(Item,{value:j.LIGHT,handleClick:handleClick,selected:e===j.LIGHT}),(0,i.jsx)(Item,{value:j.DARK,handleClick:handleClick,selected:e===j.DARK}),(0,i.jsx)(Item,{value:j.AUTO,handleClick:handleClick,selected:e===j.AUTO})]})]})}function MenuItem(e){let{active:n,href:s,icon:a,name:r,external:l=!1}=e;return n=n.toLowerCase()==r.toLowerCase()?"active":"",(0,i.jsx)("li",{className:"nav-item",children:(0,i.jsxs)(h(),{href:s,className:"nav-link ".concat(n),children:[(0,i.jsx)("i",{className:"bi ps-2 ".concat(a," ")}),(0,i.jsx)("span",{className:"ms-3",children:r}),l&&(0,i.jsx)("i",{className:"float-end bi bi-box-arrow-up-right"})]})})}function Layout(e){let{children:n,menu:s,title:c="",hasGoBackButton:m=!1}=e;return c=c||s,(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(d(),{children:[(0,i.jsx)("title",{children:"".concat(c," - ").concat(x.v)}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]}),(0,i.jsx)("header",{children:(0,i.jsx)(o.Z,{className:"navbar-top border-bottom pt-3 pt-md-2 mt-5 mt-md-0",children:(0,i.jsxs)(l.Z,{fluid:!0,children:[(0,i.jsxs)("div",{className:"d-flex flex-row align-items-center",children:[m&&(0,i.jsx)(GoBackButton,{}),(0,i.jsx)("span",{className:"navbar-brand",href:"#",children:c})]}),(0,i.jsx)(t.Z,{className:"me-auto"}),(0,i.jsx)(t.Z,{children:(0,i.jsx)(ColorThemeNavItem,{})})]})})}),(0,i.jsx)("aside",{children:(0,i.jsxs)(o.Z,{expand:"md",fixed:"top",id:"sideNav",className:"bg-body-tertiary",children:[(0,i.jsxs)(l.Z,{fluid:!0,children:[(0,i.jsx)(h(),{href:"/",className:"navbar-brand d-block d-md-none",children:x.v}),(0,i.jsx)(o.Z.Toggle,{className:"custom-toggler"})]}),(0,i.jsxs)(l.Z,{fluid:!0,className:"d-none d-md-block mb-1 text-center",children:[(0,i.jsx)(h(),{href:"/",children:(0,i.jsx)("img",{src:"/images/profile.jpg",alt:"the user profile",width:"150px",className:"img-fluid rounded-2 border border-light border-2"})}),(0,i.jsxs)("div",{className:"d-flex flex-column mb-1",children:[(0,i.jsx)("h5",{className:"mt-3",children:x.v}),(0,i.jsx)("div",{className:"pt-1 small",children:"Assistant Professor"}),(0,i.jsx)("div",{className:"pt-1 small",children:"University of Michigan-Flint"})]}),(0,i.jsx)("hr",{className:"mx-2"})]}),(0,i.jsx)(l.Z,{fluid:!0,className:"px-3",children:(0,i.jsx)(o.Z.Collapse,{id:"navbar",children:(0,i.jsxs)("ul",{className:"navbar-nav nav-pills mt-3 mt-md-0",children:[(0,i.jsx)(MenuItem,{active:s,href:"/",name:"Home",icon:"bi-house"}),(0,i.jsx)(MenuItem,{active:s,href:"/curriculum",name:"Curriculum",icon:"bi-file-earmark-text"}),(0,i.jsx)(MenuItem,{active:s,href:"/teaching",name:"Teaching",icon:"bi-person-workspace"}),(0,i.jsx)(MenuItem,{active:s,href:"/awards",name:"Awards",icon:"bi-trophy"}),(0,i.jsx)(MenuItem,{active:s,href:"/publications",name:"Publications",icon:"bi-journal-text"}),(0,i.jsx)(MenuItem,{active:s,href:"https://s3researchlab.github.io?utm_source=personal-website&utm_campaign=side-menu",name:"Research Lab",icon:"bi-globe",external:"true"}),(0,i.jsx)(MenuItem,{active:s,href:"/service",name:"Service",icon:"bi-people"}),(0,i.jsx)(MenuItem,{active:s,href:"/miscellaneous",name:"Miscellaneous",icon:"bi-puzzle"})]})})})]})}),(0,i.jsx)("main",{children:(0,i.jsx)(l.Z,{fluid:!0,className:"mt-3 test",children:(0,i.jsx)(a.Z,{children:(0,i.jsx)(r.Z,{sm:"12",children:n})})})})]})}},2333:function(e,n,s){"use strict";s.d(n,{Z:function(){return Media}});var i=s(5893),a=s(7294);function Media(e){let{logo:n,name:s,location:r,children:l}=e,t=a.Children.map(l,(e,n)=>{let{props:s}=e;return(0,i.jsxs)("li",{className:"py-0 my-0 mt-2",children:[s.children," ",(0,i.jsx)("small",{className:"text-secondary",children:s.when})]},n)});return(0,i.jsxs)("div",{className:"d-flex my-3",children:[(0,i.jsx)("div",{className:"flex-shrink-0 d-none d-sm-block me-2",children:(0,i.jsx)("img",{src:n,alt:"logo",width:44,height:44,className:"img-fluid rounded border"})}),(0,i.jsx)("div",{className:"flex-grow-1 border-bottom",children:(0,i.jsxs)("div",{className:"py-0 px-0",children:[(0,i.jsx)("h6",{className:"py-0 my-0 fw-bold",children:s}),(0,i.jsx)("p",{className:"py-1 my-0 text-secondary",children:r}),(0,i.jsx)("ul",{className:"mt-2",children:t})]})})]})}},5902:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return CurriculumPage}});var i=s(5893);s(7294);var a=s(2664),r=s(2333);function CurriculumPage(){return(0,i.jsxs)(a.Z,{menu:"Curriculum",children:[(0,i.jsx)("p",{children:"Past and  current experiences on industry and academia"}),(0,i.jsx)("h5",{children:"Education"}),(0,i.jsxs)(r.Z,{name:"PhD Degree in Computer Science (2015 - 2019)",location:"Federal University of Paran\xe1, Brazil",logo:"/images/logos/ufpr.png",children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:"Title:"})," A preference-based approach for reducing the number of objectives applied to the variability testing of software product line"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:"Advisors:"})," Prof. Dr. Silvia Regina Vergilio"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:"Co-advisors:"})," Prof. Jerffeson Teixeira de Souza and Prof. Marouane Kessentini"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:"Sandwich PhD:"})," University of Michigan-Dearborn, USA - Prof. Dr. Marouane Kessentini"]})]}),(0,i.jsxs)(r.Z,{name:"Masters Degree in Computer Science (2013 - 2015)",location:"Cear\xe1 State University, Brazil",logo:"/images/logos/uece.png",children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:"Title:"})," Abordagens Interativas Usando Algoritmo de Otimiza\xe7\xe3o por Col\xf4nia de Formiga Para o Problema do Pr\xf3ximo Release (In Portuguese)"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:"Advisor:"})," Prof. Dr. Jerffeson Teixeira de Souza"]})]}),(0,i.jsxs)(r.Z,{name:"Bachelor's Degree in Computer Science (2007 - 2012)",location:"Cear\xe1 State University, Brazil",logo:"/images/logos/uece.png",children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:"Title:"})," Aplica\xe7\xe3o do Algoritmo de Colonia de Abelhas Simulada no Problema do Planejamento de Release de Software (In Portuguese)"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:"Advisor:"})," Prof. Dr. Jerffeson Teixeira de Souza"]})]}),(0,i.jsx)("h5",{children:"Experiences"}),(0,i.jsx)("p",{className:"my-4",children:"Academic Positions"}),(0,i.jsx)(r.Z,{name:"University of Michigan-Flint",location:"Flint, United States",logo:"/images/logos/um-flint.jpg",children:(0,i.jsx)("li",{when:"(Oct 2021 - Present)",children:"Assistant Professor"})}),(0,i.jsxs)(r.Z,{name:"University of Michigan-Dearborn",location:"Dearborn, United States",logo:"/images/logos/um-dearborn.jpg",children:[(0,i.jsx)("li",{when:"(Mar 2020 - Sep 2021)",children:"Postdoctoral Research Fellow"}),(0,i.jsx)("li",{when:"(Sep 2020 – Sep 2021)",children:"Intermittent Lecturer"}),(0,i.jsx)("li",{when:"(May 2017 - Oct 2017)",children:"Visiting Research Assistant"})]}),(0,i.jsx)(r.Z,{name:"Federal University of Technology - Paran\xe1",location:"Curitiba, Brazil",logo:"/images/logos/utfpr.jpg",children:(0,i.jsx)("li",{when:"(Mar 2018 - Dec 2019)",children:"Substitute Professor"})}),(0,i.jsx)("p",{className:"my-4",children:"Industrial Employment"}),(0,i.jsx)(r.Z,{name:"GeoSales Technology",location:"Fortaleza, Brazil",logo:"/images/logos/softsite.jpg",children:(0,i.jsx)("li",{when:"(Jul 2012 - Dec 2013)",children:"Software Developer"})}),(0,i.jsx)(r.Z,{name:"Odonto System Planos Odontol\xf3gicos",location:"Fortaleza, Brazil",logo:"/images/logos/odonto-system.png",children:(0,i.jsx)("li",{when:"(Jul 2009 - Jul 2010)",children:"Software Developer Intern"})})]})}}},function(e){e.O(0,[576,774,888,179],function(){return e(e.s=5728)}),_N_E=e.O()}]);