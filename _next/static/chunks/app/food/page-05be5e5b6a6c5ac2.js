(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[370,912],{652:function(e,t,n){Promise.resolve().then(n.bind(n,5370))},5370:function(e,t,n){"use strict";n.r(t),n.d(t,{FoodDetail:function(){return u},default:function(){return f}});var a=n(9268),l=n(8316),c=n(7120),s=n(6394),r=n.n(s),o=n(5846),i=n.n(o);let u=e=>{let{imageSrc:t,name:n,detail:l}=e;return(0,a.jsxs)("span",{children:[(0,a.jsxs)("p",{className:"text-4xl text-secondaryUK  h-24",children:[" ▪ ",n]}),(0,a.jsx)("div",{className:"relative w-ful h-96 my-4",children:(0,a.jsx)(r(),{src:"/images/food/".concat(t,".jpeg"),alt:"",fill:!0})}),l]})},d=e=>{let{imageSrc:t,name:n,detail:l}=e;return(0,a.jsxs)("span",{className:"text-secondary",children:[(0,a.jsxs)("p",{className:"text-4xl text-secondaryUK  h-24",children:[" ▪ ",n]}),(0,a.jsx)(r(),{className:"my-4",src:"/images/food/".concat(t,".jpeg"),alt:"",width:400,height:400}),l]})};function f(){let{translation:e}=(0,c.b)("food"),{rootPath:t}=(0,l.S)(),n=[];for(let e=1;e<=4;e++)n.push(["food".concat(e),"food".concat(e,"Explain")]);let s=[];for(let e=1;e<=4;e++)s.push(["beverage".concat(e),"beverage".concat(e,"Explain")]);return(0,a.jsxs)("div",{className:"p-7",children:[(0,a.jsx)("p",{className:"text-7xl text-primary text-center p-4",children:e.title}),(0,a.jsxs)("div",{className:"mt-8 gap-12 grid grid-cols-4 text-secondary",children:[n.map(t=>{let[n,l]=t;return(0,a.jsx)(u,{imageSrc:n,name:e[n],detail:e[l]},n)}),s.map(t=>{let[n,l]=t;return(0,a.jsx)(d,{imageSrc:n,name:e[n],detail:e[l]},n)})]}),(0,a.jsxs)("div",{className:"flex flex-col text-success mt-24",children:[(0,a.jsxs)(i(),{href:"".concat(t,"/food/north"),locale:!1,children:["▪ ",e.north]}),(0,a.jsxs)(i(),{href:"".concat(t,"/food/south"),locale:!1,children:["▪ ",e.south]}),(0,a.jsxs)(i(),{href:"".concat(t,"/food/central"),locale:!1,children:["▪ ",e.central]})]})]})}},1568:function(e,t,n){"use strict";n.d(t,{b:function(){return c}});var a=n(6008),l=n(5207);function c(){let e=(0,a.usePathname)();return null===e?l.a.defaultLocale:e.includes("fr-ca")?"fr-ca":e.includes("vi")?"vi":l.a.defaultLocale}},8316:function(e,t,n){"use strict";n.d(t,{S:function(){return c}});var a=n(6008),l=n(5207);function c(){let e=(0,a.usePathname)(),t=null===e?"/":e.split("/"),n=null!=e&&l.a.locales.some(t=>e.includes(t));return{pathName:e,isHavingLocale:n,rootPath:n?t[0]+"/"+t[1]:t[0]}}},7120:function(e,t,n){"use strict";n.d(t,{b:function(){return o}});var a=n(6006),l=n(1568),c=n(5207);let s={"en-us":()=>({home:n.e(753).then(n.t.bind(n,2753,19)).then(e=>e.default),food:n.e(391).then(n.t.bind(n,391,19)).then(e=>e.default),places:n.e(767).then(n.t.bind(n,3767,19)).then(e=>e.default)}),"fr-ca":()=>({home:n.e(317).then(n.t.bind(n,4317,19)).then(e=>e.default),food:n.e(991).then(n.t.bind(n,8991,19)).then(e=>e.default),places:n.e(3).then(n.t.bind(n,6003,19)).then(e=>e.default)}),vi:()=>({home:n.e(231).then(n.t.bind(n,3231,19)).then(e=>e.default),food:n.e(223).then(n.t.bind(n,3223,19)).then(e=>e.default),places:n.e(568).then(n.t.bind(n,2568,19)).then(e=>e.default)})},r=async e=>s[e||c.a.defaultLocale];function o(e){let[t,n]=(0,a.useState)({}),c=(0,l.b)();return(0,a.useEffect)(()=>{let t=async()=>{let t=await r(c);n(await t()[e])};t()},[c,e]),{translation:t}}},5207:function(e,t,n){"use strict";n.d(t,{a:function(){return a}});let a={defaultLocale:"en-us",locales:["vi","en-us","fr-ca"],localeDetection:!1}}},function(e){e.O(0,[891,846,253,769,744],function(){return e(e.s=652)}),_N_E=e.O()}]);