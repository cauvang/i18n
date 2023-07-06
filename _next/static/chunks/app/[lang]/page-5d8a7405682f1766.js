(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[495,931],{1115:function(e,t,n){Promise.resolve().then(n.bind(n,1401))},1401:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return N}});var s=n(9268),a=n(6006),l=n(3225),r=n(4450),i=n(6394),c=n.n(i),o=n(5207),u=n(6008);let d=e=>e?"bg-blue-500 hover:bg-blue-700 text-white border border-blue-700":" hover:bg-offWhite text-grey";function h(){let e=(0,u.useRouter)();return(0,s.jsxs)(l.v,{as:"div",className:"relative inline-block text-left",children:[(0,s.jsx)("div",{children:(0,s.jsxs)(l.v.Button,{className:"py-2 px-4 gap-2.5 font-bold inline-flex w-full justify-center rounded-md bg-white  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50",children:["Languages",(0,s.jsx)(c(),{alt:"",src:"/images/down.png",width:32,height:32})]})}),(0,s.jsx)(r.u,{as:a.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,s.jsx)(l.v.Items,{className:"absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",children:(0,s.jsx)("div",{className:"py-1",children:o.a.locales.map(t=>(0,s.jsx)(l.v.Item,{children:n=>{let{active:a}=n;return(0,s.jsx)("button",{className:"".concat(d(a),"  px-4 py-2 text-sm w-full"),onClick:()=>{e.push("".concat(t,"/"))},children:t})}},t))})})})]})}var f=n(4824),x=n(1568),m=n(8316),p=n(5846),b=n.n(p);function j(e){let{tl:t}=e,{rootPath:n}=(0,m.S)();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("p",{className:"text-7xl text-primary text-center p-4",children:t.title}),(0,s.jsxs)("div",{className:"flex flex-row mt-8",children:[(0,s.jsx)(c(),{src:"images/vietnam-map.jpg",alt:"",width:800,height:800,priority:!0}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:t.location}),(0,s.jsx)("li",{children:t.area}),(0,s.jsx)("li",{className:"text-pink text-bold text-40",children:t.population}),(0,s.jsxs)("li",{children:[t.weather," ",(0,s.jsx)("br",{}),(0,s.jsxs)("span",{className:"pl-4",children:["\uD83D\uDD39 ",t.weatherNorth,(0,s.jsx)("br",{}),(0,s.jsxs)("span",{className:"pl-10",children:["\xa0 ⭐ ",t.weatherNorth1," \uD83C\uDF25"]}),(0,s.jsx)("br",{}),(0,s.jsxs)("span",{className:"pl-10",children:["\xa0 ⭐ ",t.weatherNorth2," \uD83C\uDF1E"]})]}),(0,s.jsx)("br",{}),(0,s.jsxs)("span",{className:"pl-4",children:["\uD83D\uDD39 ",t.weatherSouth,(0,s.jsx)("br",{}),(0,s.jsxs)("span",{className:"pl-10",children:["\xa0 ⭐ ",t.weatherSouth1," \uD83C\uDF1E"]}),(0,s.jsx)("br",{}),(0,s.jsxs)("span",{className:"pl-10",children:["\xa0 ⭐ ",t.weatherSouth2," \uD83C\uDF27"]})]})]}),(0,s.jsxs)("li",{children:["\xa0",(0,s.jsx)(b(),{className:"underline text-success",href:"".concat(n,"/food"),locale:!1,children:t.listing1})]}),(0,s.jsxs)("li",{children:["\xa0",(0,s.jsx)(b(),{className:"underline text-success",href:"".concat(n,"/places"),locale:!1,children:t.listing2})]})]})]})]})}function g(){let{data:e,isLoading:t}=function(){let e=(0,x.b)();return(0,f.useQuery)([e],async()=>{let t=await fetch("/api/".concat(e),{});if(!t.ok)throw Error("Network response was not ok");return t.json()})}();return(0,s.jsxs)("div",{className:"w-full",children:["Below content is load from backend",t&&(0,s.jsx)("p",{children:"Loading..."}),e&&(0,s.jsx)(j,{tl:e.home})]})}var w=n(7120);function v(){let{translation:e}=(0,w.b)("home");return(0,s.jsxs)("div",{className:"w-full",children:[(0,s.jsx)("p",{children:"Below content is static."}),(0,s.jsx)(j,{tl:e})]})}function N(){let[e,t]=(0,a.useState)("static"),n=e=>e?"bg-blue-500 hover:bg-blue-700 text-white border border-blue-700":" hover:bg-offWhite text-grey",{pathName:l,isHavingLocale:r}=(0,m.S)();return r||"/"==l?(0,s.jsxs)("main",{className:"p-7",children:[(0,s.jsxs)("div",{className:"flex justify-between",children:[(0,s.jsxs)("span",{className:"bg-white shadow-btn-white p-0.5 inline-flex cursor-pointer rounded-full",children:[(0,s.jsx)("button",{className:"rounded-full py-2 px-4 gap-2.5 font-bold ".concat(n("static"===e)),onClick:()=>t("static"),children:"Static Content"}),(0,s.jsx)("button",{className:"rounded-full py-2 px-4 gap-2.5 ".concat(n("dynamic"===e)),onClick:()=>t("dynamic"),children:"Dynamic Content"})]}),(0,s.jsx)(h,{})]}),"dynamic"===e&&(0,s.jsx)(g,{}),"static"===e&&(0,s.jsx)(v,{})]}):(0,u.notFound)()}},1568:function(e,t,n){"use strict";n.d(t,{b:function(){return l}});var s=n(6008),a=n(5207);function l(){let e=(0,s.usePathname)();return null===e?a.a.defaultLocale:e.includes("fr-ca")?"fr-ca":e.includes("vi")?"vi":a.a.defaultLocale}},8316:function(e,t,n){"use strict";n.d(t,{S:function(){return l}});var s=n(6008),a=n(5207);function l(){let e=(0,s.usePathname)(),t=null===e?"/":e.split("/"),n=null!=e&&a.a.locales.some(t=>e.includes(t));return{pathName:e,isHavingLocale:n,rootPath:n?t[0]+"/"+t[1]:t[0]}}},7120:function(e,t,n){"use strict";n.d(t,{b:function(){return c}});var s=n(6006),a=n(1568),l=n(5207);let r={"en-us":()=>({home:n.e(753).then(n.t.bind(n,2753,19)).then(e=>e.default),food:n.e(391).then(n.t.bind(n,391,19)).then(e=>e.default),places:n.e(767).then(n.t.bind(n,3767,19)).then(e=>e.default)}),"fr-ca":()=>({home:n.e(317).then(n.t.bind(n,4317,19)).then(e=>e.default),food:n.e(991).then(n.t.bind(n,8991,19)).then(e=>e.default),places:n.e(3).then(n.t.bind(n,6003,19)).then(e=>e.default)}),vi:()=>({home:n.e(231).then(n.t.bind(n,3231,19)).then(e=>e.default),food:n.e(223).then(n.t.bind(n,3223,19)).then(e=>e.default),places:n.e(568).then(n.t.bind(n,2568,19)).then(e=>e.default)})},i=async e=>r[e||l.a.defaultLocale];function c(e){let[t,n]=(0,s.useState)({}),l=(0,a.b)();return(0,s.useEffect)(()=>{let t=async()=>{let t=await i(l);n(await t()[e])};t()},[l,e]),{translation:t}}},5207:function(e,t,n){"use strict";n.d(t,{a:function(){return s}});let s={defaultLocale:"en-us",locales:["vi","en-us","fr-ca"],localeDetection:!1}}},function(e){e.O(0,[891,846,824,660,253,769,744],function(){return e(e.s=1115)}),_N_E=e.O()}]);