(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[924],{2528:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/miscellaneous/faq",function(){return s(6313)}])},3108:function(e,t,s){"use strict";s.d(t,{Z:function(){return n}});var a=s(5893);function n(e){let{id:t,title:s,children:n,collapsed:i=!1}=e,r=t||"p-"+s.toLowerCase().replace(/[^a-zA-Z0-9]+/g,"-");return(0,a.jsxs)("div",{className:"collapse-group",children:[(0,a.jsxs)("h5",{className:"".concat(i?"collapsed":""),"data-bs-toggle":"collapse","data-bs-target":"#".concat(r),children:[(0,a.jsx)("i",{className:"bi bi-chevron-right"}),s]}),(0,a.jsx)("div",{className:"collapse ".concat(i?"":"show"),id:r,children:n})]},r)}},5131:function(e,t,s){"use strict";s.d(t,{Z:function(){return I}});var a=s(5893),n=s(4051),i=s(1555),r=s(682),o=s(3472),l=s(4373),c=s(9008),d=s.n(c),h=s(1664),m=s.n(h),u=s(9332);function f(){let e=(0,u.useRouter)();return(0,a.jsxs)("button",{className:"btn btn-sm btn-primary me-3",onClick:()=>e.back(),children:[(0,a.jsx)("i",{className:"bi bi-chevron-left me-1"}),"Back"]})}var p=JSON.parse('{"v":"Dr. Thiago Ferreira"}'),x=s(7294);class b{static setItem(e,t){localStorage.setItem(e,JSON.stringify(t))}static getItem(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,s=localStorage.getItem(e);return s?JSON.parse(s):t}}let j=Object.freeze({LIGHT:{id:"light",name:"Light",icon:"bi-sun-fill"},DARK:{id:"dark",name:"Dark",icon:"bi-moon-stars-fill"},AUTO:{id:"auto",name:"Auto",icon:"bi-circle-half"}});function v(e){b.setItem("color-theme-id",e.id)}function w(){let e=window.matchMedia("(prefers-color-scheme: dark)");return e.matches?j.DARK:j.LIGHT}function g(e){e===j.AUTO&&(e=w()),window.document.documentElement.setAttribute("data-bs-theme",e.id)}function y(e){let{value:t,handleClick:s,selected:n=!1}=e,i=n?(0,a.jsx)("i",{className:"bi bi-check2"}):(0,a.jsx)(a.Fragment,{});return(0,a.jsx)("li",{children:(0,a.jsxs)("a",{className:"dropdown-item d-flex align-items-center rounded ".concat(n?"active":""),href:"#",onClick:e=>s(e,t),"data-theme":t.id,children:[(0,a.jsx)("i",{className:"bi ".concat(t.icon)}),(0,a.jsx)("span",{className:"ms-3 me-auto",children:t.name}),i]})})}function N(){let[e,t]=(0,x.useState)(j.AUTO);function s(e,s){t(s),g(s),v(s)}return(0,x.useEffect)(()=>{let s=w(),a=function(){let e=b.getItem("color-theme-id");return e==j.AUTO.id?j.AUTO:e==j.DARK.id?j.DARK:e==j.LIGHT.id?j.LIGHT:null}();a?v===j.AUTO?(t(s),g(s)):(t(a),g(a)):g(s);let n=t=>{e==j.AUTO&&g(w())},i=window.matchMedia("(prefers-color-scheme: dark)");return i.addEventListener("change",n),()=>{i.removeEventListener("change",n)}},[e]),(0,a.jsxs)("li",{className:"nav-item dropdown",children:[(0,a.jsx)("a",{className:"nav-link dropdown-toggle",href:"#","data-bs-toggle":"dropdown",children:(0,a.jsx)("i",{className:"bi ".concat(e.icon)})}),(0,a.jsxs)("ul",{className:"dropdown-menu dropdown-menu-end p-1",children:[(0,a.jsx)(y,{value:j.LIGHT,handleClick:s,selected:e===j.LIGHT}),(0,a.jsx)(y,{value:j.DARK,handleClick:s,selected:e===j.DARK}),(0,a.jsx)(y,{value:j.AUTO,handleClick:s,selected:e===j.AUTO})]})]})}function k(e){let{active:t,href:s,icon:n,name:i,external:r=!1}=e;return t=t.toLowerCase()==i.toLowerCase()?"active":"",(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsxs)(m(),{href:s,className:"nav-link ".concat(t),children:[(0,a.jsx)("i",{className:"bi ps-2 ".concat(n," ")}),(0,a.jsx)("span",{className:"ms-3",children:i}),r&&(0,a.jsx)("i",{className:"float-end bi bi-box-arrow-up-right"})]})})}function I(e){let{children:t,menu:s,title:c="",hasGoBackButton:h=!1}=e;return c=c||s,(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(d(),{children:[(0,a.jsx)("title",{children:"".concat(c," - ").concat(p.v)}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]}),(0,a.jsx)("header",{children:(0,a.jsx)(l.Z,{className:"navbar-top border-bottom pt-3 pt-md-2 mt-5 mt-md-0",children:(0,a.jsxs)(r.Z,{fluid:!0,children:[(0,a.jsxs)("div",{className:"d-flex flex-row align-items-center",children:[h&&(0,a.jsx)(f,{}),(0,a.jsx)("span",{className:"navbar-brand",href:"#",children:c})]}),(0,a.jsx)(o.Z,{className:"me-auto"}),(0,a.jsx)(o.Z,{children:(0,a.jsx)(N,{})})]})})}),(0,a.jsx)("aside",{children:(0,a.jsxs)(l.Z,{expand:"md",fixed:"top",id:"sideNav",bg:"dark","data-bs-theme":"dark",children:[(0,a.jsxs)(r.Z,{fluid:!0,children:[(0,a.jsx)(m(),{href:"/",className:"navbar-brand d-block d-md-none",children:p.v}),(0,a.jsx)(l.Z.Toggle,{className:"custom-toggler"})]}),(0,a.jsxs)(r.Z,{fluid:!0,className:"d-none d-md-block mb-1 text-center",children:[(0,a.jsx)(m(),{href:"/",children:(0,a.jsx)("img",{src:"/images/profile.jpg",alt:"the user profile",width:"150px",className:"img-fluid rounded-2 border border-light border-2"})}),(0,a.jsxs)("div",{className:"d-flex flex-column mb-1",children:[(0,a.jsx)("h5",{className:"mb-2",children:p.v}),(0,a.jsx)("small",{className:"mb-2 text-secondary",children:"Assistant Professor"}),(0,a.jsx)("small",{className:"mb-0 text-secondary",children:"University of Michigan-Flint"})]}),(0,a.jsx)("hr",{className:"mx-2 mb-2"})]}),(0,a.jsx)(r.Z,{fluid:!0,className:"px-3",children:(0,a.jsx)(l.Z.Collapse,{id:"navbar",children:(0,a.jsxs)("ul",{className:"navbar-nav nav-pills mt-3 mt-md-0",children:[(0,a.jsx)(k,{active:s,href:"/",name:"Home",icon:"bi-house"}),(0,a.jsx)(k,{active:s,href:"/curriculum",name:"Curriculum",icon:"bi-file-earmark-text"}),(0,a.jsx)(k,{active:s,href:"/teaching",name:"Teaching",icon:"bi-person-workspace"}),(0,a.jsx)(k,{active:s,href:"/awards",name:"Awards",icon:"bi-trophy"}),(0,a.jsx)(k,{active:s,href:"/publications",name:"Publications",icon:"bi-journal-text"}),(0,a.jsx)(k,{active:s,href:"https://s3researchlab.github.io?utm_source=personal-website&utm_campaign=side-menu",name:"Research Lab",icon:"bi-globe",external:"true"}),(0,a.jsx)(k,{active:s,href:"/service",name:"Service",icon:"bi-people"}),(0,a.jsx)(k,{active:s,href:"/miscellaneous",name:"Miscellaneous",icon:"bi-puzzle"})]})})})]})}),(0,a.jsx)("main",{children:(0,a.jsx)(r.Z,{fluid:!0,className:"mt-3 test",children:(0,a.jsx)(n.Z,{children:(0,a.jsx)(i.Z,{sm:"12",children:t})})})})]})}},6313:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return r}});var a=s(5893),n=s(5131),i=s(3108);function r(){return(0,a.jsxs)(n.Z,{title:"FAQ",menu:"Miscellaneous",hasGoBackButton:!0,children:[(0,a.jsx)("p",{children:"These are questions I'm frequently asked."}),(0,a.jsxs)(i.Z,{title:"Will you write me a letter of recommendation?",collapsed:"true",id:"letter-of-recommendation",children:[(0,a.jsx)("p",{children:"Maybe. All of the following must be true before I commit to writing you a letter:"}),(0,a.jsxs)("ul",{className:"ms-4",children:[(0,a.jsx)("li",{children:"You've asked for it two weeks in advance of the deadline."}),(0,a.jsx)("li",{children:"You've given me all of the information you have about what is expected in the letter."}),(0,a.jsx)("li",{children:"You've shared with me why you need the letter."}),(0,a.jsx)("li",{children:"You've explained why I'm one of the best people in your network to write the letter."}),(0,a.jsx)("li",{children:"I've had multiple conversations about things beyond the scope of a class and its requirements (e.g., in office hours, in research, or other settings)."})]}),(0,a.jsx)("p",{children:"For many students, this is easy to satisfy. For example, undergraduate researchers in my research lab easily satisfy all of the criteria above. They don't even need to ask if I'll write; it's a given. But I receive many requests from students I've had in classes that I've never talked to. In these cases, what would I even say in the letter?"}),(0,a.jsx)("p",{className:"ps-4 text-secondary fst-italic",children:'"They were in my class, but I don\'t know them"'}),(0,a.jsx)("p",{children:"If you're in that situation, I would love to get to know you, but if I spent the time to do that with every student who asked for a letter, I would probably be spending more than a dozen hours a week meeting with students just to write letters. I definitely cannot do that; I have too many other responsibilities in research, teaching, and service."}),(0,a.jsx)("p",{children:"There are some exceptions to the policy above. If the \"letter\" you need is really just a form that I fill out attesting that I had you in class, I'm happy to do that. If you just need a reference for a job, I'm happy to be a reference; I rarely get called, and when I do, it's rarely onerous."})]}),(0,a.jsxs)(i.Z,{title:"What is the difference between computer science and informatics?",collapsed:"true",id:"computer-science-and-informatics",children:[(0,a.jsx)("p",{children:"Computer Science and Informatics are like we think about Physics versus Engineering: the former concerns itself with a phenomenon as it occurs in nature and the latter is concerned with applications of it for humanity."}),(0,a.jsx)("p",{children:"Computer Science fundamentally asks what is computing, what can be computed, how can it be computed. Informatics fundamentally asks what should be computed, how should computation be used, what role does computing play in society."}),(0,a.jsx)("p",{children:"If you find computing intrinsically interesting and wouldn't mind talking about it endlessly, Computer Science is a great major for you. If you just want use it as a tool to solve the world's problems, Informatics is a great major for you. Some people are interested in both. Maybe that's you! Both are competitive majors, both lead to wonderful jobs, and both will teach you a lot about the world, one from the perspective of computing, one from the perspective of people and society. Both perspectives are necessary and valuable."}),(0,a.jsxs)("p",{children:["Thanks ",(0,a.jsx)("a",{href:"https://faculty.washington.edu/ajko",children:"Dr. Amy J. Ko"})," for this great explanation. You can read more about it ",(0,a.jsx)("a",{href:"https://medium.com/bits-and-behavior/big-ideas-about-information-c09e4d9c60bd",children:"here"}),"."]})]})]})}}},function(e){e.O(0,[576,774,888,179],function(){return e(e.s=2528)}),_N_E=e.O()}]);