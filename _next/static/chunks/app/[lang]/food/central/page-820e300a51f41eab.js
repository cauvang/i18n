(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[685,477],{6087:function(e,t,n){Promise.resolve().then(n.bind(n,2541))},2541:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var a=n(9268),c=n(7120),l=n(5370);function s(){let{translation:e}=(0,c.b)("food"),t=[];for(let e=1;e<=10;e++)t.push(["centralFood".concat(e),"centralFood".concat(e,"Explain")]);return(0,a.jsxs)("div",{className:"p-7",children:[(0,a.jsx)("p",{className:"text-7xl text-primary text-center p-4",children:e.centralFood}),(0,a.jsx)("div",{className:"mt-8 gap-12 grid grid-cols-2 text-secondary",children:t.map(t=>{let[n,c]=t;return(0,a.jsx)(l.FoodDetail,{imageSrc:n,name:e[n],detail:e[c]},n)})})]})}},5370:function(e,t,n){"use strict";n.r(t),n.d(t,{FoodDetail:function(){return d},default:function(){return f}});var a=n(9268),c=n(8316),l=n(7120),s=n(6394),r=n.n(s),o=n(5846),i=n.n(o);let d=e=>{let{imageSrc:t,name:n,detail:c}=e;return(0,a.jsxs)("span",{children:[(0,a.jsxs)("p",{className:"text-4xl text-secondaryUK  h-24",children:[" ▪ ",n]}),(0,a.jsx)("div",{className:"relative w-ful h-96 my-4",children:(0,a.jsx)(r(),{src:"/images/food/".concat(t,".jpeg"),alt:"",fill:!0})}),c]})},u=e=>{let{imageSrc:t,name:n,detail:c}=e;return(0,a.jsxs)("span",{className:"text-secondary",children:[(0,a.jsxs)("p",{className:"text-4xl text-secondaryUK  h-24",children:[" ▪ ",n]}),(0,a.jsx)(r(),{className:"my-4",src:"/images/food/".concat(t,".jpeg"),alt:"",width:400,height:400}),c]})};function f(){let{translation:e}=(0,l.b)("food"),{rootPath:t}=(0,c.S)(),n=[];for(let e=1;e<=4;e++)n.push(["food".concat(e),"food".concat(e,"Explain")]);let s=[];for(let e=1;e<=4;e++)s.push(["beverage".concat(e),"beverage".concat(e,"Explain")]);return(0,a.jsxs)("div",{className:"p-7",children:[(0,a.jsx)("p",{className:"text-7xl text-primary text-center p-4",children:e.title}),(0,a.jsxs)("div",{className:"mt-8 gap-12 grid grid-cols-4 text-secondary",children:[n.map(t=>{let[n,c]=t;return(0,a.jsx)(d,{imageSrc:n,name:e[n],detail:e[c]},n)}),s.map(t=>{let[n,c]=t;return(0,a.jsx)(u,{imageSrc:n,name:e[n],detail:e[c]},n)})]}),(0,a.jsxs)("div",{className:"flex flex-col text-success mt-24",children:[(0,a.jsxs)(i(),{href:"".concat(t,"/food/north"),locale:!1,children:["▪ ",e.north]}),(0,a.jsxs)(i(),{href:"".concat(t,"/food/south"),locale:!1,children:["▪ ",e.south]}),(0,a.jsxs)(i(),{href:"".concat(t,"/food/central"),locale:!1,children:["▪ ",e.central]})]})]})}},1568:function(e,t,n){"use strict";n.d(t,{b:function(){return l}});var a=n(6008),c=n(5207);function l(){let e=(0,a.usePathname)();return null===e?c.a.defaultLocale:e.includes("fr-ca")?"fr-ca":e.includes("vi")?"vi":c.a.defaultLocale}},8316:function(e,t,n){"use strict";n.d(t,{S:function(){return l}});var a=n(6008),c=n(5207);function l(){let e=(0,a.usePathname)(),t=null===e?"/":e.split("/"),n=null!=e&&c.a.locales.some(t=>e.includes(t));return{pathName:e,isHavingLocale:n,rootPath:n?t[0]+"/"+t[1]:t[0]}}},7120:function(e,t,n){"use strict";n.d(t,{b:function(){return o}});var a=n(6006),c=n(1568),l=n(5207);let s={"en-us":()=>({home:n.e(753).then(n.t.bind(n,2753,19)).then(e=>e.default),food:n.e(391).then(n.t.bind(n,391,19)).then(e=>e.default),places:n.e(767).then(n.t.bind(n,3767,19)).then(e=>e.default)}),"fr-ca":()=>({home:n.e(317).then(n.t.bind(n,4317,19)).then(e=>e.default),food:n.e(991).then(n.t.bind(n,8991,19)).then(e=>e.default),places:n.e(3).then(n.t.bind(n,6003,19)).then(e=>e.default)}),vi:()=>({home:n.e(231).then(n.t.bind(n,3231,19)).then(e=>e.default),food:n.e(223).then(n.t.bind(n,3223,19)).then(e=>e.default),places:n.e(568).then(n.t.bind(n,2568,19)).then(e=>e.default)})},r=async e=>s[e||l.a.defaultLocale];function o(e){let[t,n]=(0,a.useState)({}),l=(0,c.b)();return(0,a.useEffect)(()=>{let t=async()=>{let t=await r(l);n(await t()[e])};t()},[l,e]),{translation:t}}},5207:function(e,t,n){"use strict";n.d(t,{a:function(){return a}});let a={defaultLocale:"en-us",locales:["vi","en-us","fr-ca"],localeDetection:!1}}},function(e){e.O(0,[891,846,253,769,744],function(){return e(e.s=6087)}),_N_E=e.O()}]);