"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9262],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},410:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={title:"Introduction",description:"Guide contents, 'What is SCAYLE?', and Requirements",sidebar_position:1},i="SCAYLE Panel",s={unversionedId:"panel/overview/intro",id:"panel/overview/intro",title:"Introduction",description:"Guide contents, 'What is SCAYLE?', and Requirements",source:"@site/docs/panel/overview/01-intro.md",sourceDirName:"panel/overview",slug:"/panel/overview/intro",permalink:"/docs/next/panel/overview/intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/panel/overview/01-intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Introduction",description:"Guide contents, 'What is SCAYLE?', and Requirements",sidebar_position:1},sidebar:"panel",previous:{title:"Overview",permalink:"/docs/next/category/overview"},next:{title:"Sign in",permalink:"/docs/next/panel/overview/sign-in"}},l={},u=[{value:"What is SCAYLE?",id:"what-is-scayle",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Environments",id:"environments",level:2},{value:"Support",id:"support",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(p,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"scayle-panel"},"SCAYLE Panel"),(0,a.kt)("p",null,"The SCAYLE Panel is the user interface to administer and manage shops and product data. This guide covers all capabilities and features of the Panel. It is structured into the following sections:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"getting-started#what-is-scayle"},"Getting Started")),": sign in, dashboard, and search"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"shops-overview"},"Shops")),": shop management (e.g., shop categories, assortment), customers and orders, products (e.g., product data, media, adding products), discounts & offers, internationalization, and storefront"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"product-configuration"},"Settings")),": audit logs, API keys, global configurations, product data structure (e.g., attributes, master categories), merchants, and data imports"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"checkout-settings-overview"},"Checkout")),": checkout configurations and customizations, email templates, shipping and delivery options"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"addons-intro"},"Add-Ons")),": available add-ons with a focus on the Customer Service Add-On    ")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"SCAYLE Panel",src:n(7208).Z,width:"1280",height:"720"}),"\n",(0,a.kt)("em",{parentName:"p"},"SCAYLE Panel")),(0,a.kt)("p",null,"SCAYLE also includes APIs for developers to manage data and build the e-commerce storefront. For details about the APIs, please see the ",(0,a.kt)("a",{parentName:"p",href:"../../../dev/admin-api/introduction"},"Admin API Guide")," and the ",(0,a.kt)("a",{parentName:"p",href:"../../../dev/storefront-api/introduction"},"Storefront API Guide"),". "),(0,a.kt)("h2",{id:"what-is-scayle"},"What is SCAYLE?"),(0,a.kt)("p",null,"SCAYLE is an API-based e-commerce system. It serves as a central data core for online retailers to configure their shops. SCAYLE offers modularity and the ability to connect to your existing systems or third-party software. You can create and manage any number of shops with just one SCAYLE instance. All data is organized centrally, with the ability to use individual categories, assortments, and filters for each shop. "),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"A team of integration managers and developers will support you with setting up SCAYLE.")),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,"As part of the onboarding integration process, SCAYLE developers implement your instance according to your specific needs. Once everything is set up, each user gets an ",(0,a.kt)("a",{parentName:"p",href:"user-and-roles-overview"},"account"),", meeting the ",(0,a.kt)("a",{parentName:"p",href:"authentication#password-standards"},"security and password standards"),". You and other users can then start working with the system. "),(0,a.kt)("p",null,"You access the SCAYLE Panel online with a browser. Currently, the SCAYLE Panel is optimised for the latest version of Google Chrome."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"We recommend that you always access SCAYLE with a secure and stable connection.")),(0,a.kt)("h2",{id:"environments"},"Environments"),(0,a.kt)("p",null,"A SCAYLE instance will have different environments:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Preview"),(0,a.kt)("li",{parentName:"ul"},"Test"),(0,a.kt)("li",{parentName:"ul"},"Live")),(0,a.kt)("p",null,"All users get access to the ",(0,a.kt)("em",{parentName:"p"},"test")," and ",(0,a.kt)("em",{parentName:"p"},"live")," environments. This allows you to prepare and control everything before releasing it to the live environment. The color of the logo changes depending on which environment you are currently working in. Users need a separate account for each environment."),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},"Switch Environment")," function in the upper right corner of the Panel allows you to quickly switch between different environments without leaving the page you are viewing."),(0,a.kt)("h2",{id:"support"},"Support"),(0,a.kt)("p",null,"If you can\u2019t find what you\u2019re looking for in our guides, don\u2019t hesitate to reach out to us with any issue, big or small. You can do so in the ",(0,a.kt)("a",{parentName:"p",href:"../../../support-center"},"contact form here")," or send us an email at ",(0,a.kt)("a",{parentName:"p",href:"mailto:cloud-jira@aboutyou.de"},"cloud-jira@aboutyou.de"),"."))}d.isMDXComponent=!0},7208:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/dashboard_en_medium_16x9-b94db8d0917206bc1e0e412dfe08aedf.png"}}]);