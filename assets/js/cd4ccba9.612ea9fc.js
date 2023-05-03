"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2642],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4769:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={slug:"welcome",title:"SCAYLE 2.1.3",authors:["scayle"],tags:["facebook","hello","docusaurus"]},l=void 0,i={permalink:"/releases/welcome",source:"@site/releases/2023-03-16-welcome/index.md",title:"SCAYLE 2.1.3",description:"SCAYLE Panel",date:"2023-03-16T00:00:00.000Z",formattedDate:"March 16, 2023",tags:[{label:"facebook",permalink:"/releases/tags/facebook"},{label:"hello",permalink:"/releases/tags/hello"},{label:"docusaurus",permalink:"/releases/tags/docusaurus"}],readingTime:.795,hasTruncateMarker:!1,authors:[{name:"SCAYLE Admin",title:"SCAYLE maintainer",url:"https://scayle.com",imageURL:"https://corporate.aboutyou.de/app/uploads/2021/11/logo-linkedin@8x.jpg",key:"scayle"}],frontMatter:{slug:"welcome",title:"SCAYLE 2.1.3",authors:["scayle"],tags:["facebook","hello","docusaurus"]},nextItem:{title:"SCAYLE 2.1.2",permalink:"/releases/long-blog-post"}},s={authorsImageUrls:[void 0]},u=[{value:"SCAYLE Panel",id:"scayle-panel",level:3},{value:"Storefront API",id:"storefront-api",level:3},{value:"Admin API",id:"admin-api",level:3}],p={toc:u},c="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(c,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"scayle-panel"},"SCAYLE Panel"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'We created a new import "Product Indexing" with which updated product information can be immediately indexed and cached by the Storefront API in order for the updates to be displayed in the shop storefront right away.'),(0,a.kt)("li",{parentName:"ul"},"We made some minor fixes and improvements.")),(0,a.kt)("h3",{id:"storefront-api"},"Storefront API"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We are now supporting category and attribute synonyms on the ",(0,a.kt)("inlineCode",{parentName:"li"},"typeahead")," endpoint.")),(0,a.kt)("h3",{id:"admin-api"},"Admin API"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We extended the product sorting functionality to support shop-country level")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/blog"},"Docusaurus blogging features")," are powered by the ",(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog"},"blog plugin"),"."),(0,a.kt)("p",null,"Simply add Markdown files (or folders) to the ",(0,a.kt)("inlineCode",{parentName:"p"},"blog")," directory."),(0,a.kt)("p",null,"Regular blog authors can be added to ",(0,a.kt)("inlineCode",{parentName:"p"},"authors.yml"),"."),(0,a.kt)("p",null,"The blog post date can be extracted from filenames, such as:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"2019-05-30-welcome.md")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"2019-05-30-welcome/index.md"))),(0,a.kt)("p",null,"A blog post folder can be convenient to co-locate blog post images:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Docusaurus Plushie",src:n(2672).Z,width:"1500",height:"500"})),(0,a.kt)("p",null,"The blog supports tags as well!"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"And if you don't want a blog"),": just delete this directory, and use ",(0,a.kt)("inlineCode",{parentName:"p"},"blog: false")," in your Docusaurus config."))}d.isMDXComponent=!0},2672:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/docusaurus-plushie-banner-a60f7593abca1e3eef26a9afa244e4fb.jpeg"}}]);