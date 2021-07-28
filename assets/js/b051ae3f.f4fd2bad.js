"use strict";(self.webpackChunk_graphql_mesh_website=self.webpackChunk_graphql_mesh_website||[]).push([[3708],{5318:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(m,c(c({ref:t},p),{},{components:r})):n.createElement(m,c({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var s=2;s<i;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9747:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var n=r(9603),a=r(120),i=(r(7378),r(5318)),c=["components"],o={id:"cache-redis",title:"Redis Cache",sidebar_label:"Redis"},l={unversionedId:"cache/cache-redis",id:"cache/cache-redis",isDocsHomePage:!1,title:"Redis Cache",description:"This caching strategy will use your Redis instance as the storage.",source:"@site/docs/cache/redis.md",sourceDirName:"cache",slug:"/cache/cache-redis",permalink:"/docs/cache/cache-redis",editUrl:"https://github.com/urigo/graphql-mesh/edit/master/website/docs/cache/redis.md",version:"current",sidebar_label:"Redis",frontMatter:{id:"cache-redis",title:"Redis Cache",sidebar_label:"Redis"},sidebar:"sidebar",previous:{title:"LocalForage",permalink:"/docs/cache/localforage"},next:{title:"@graphql-mesh/cli",permalink:"/docs/api/modules/cli"}},s=[{value:"How to use?",id:"how-to-use",children:[]},{value:"Config API Reference",id:"config-api-reference",children:[]}],p={toc:s};function u(e){var t=e.components,r=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This caching strategy will use your Redis instance as the storage."),(0,i.kt)("p",null,"To get started with this caching strategy, install it from npm:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"yarn add @graphql-mesh/cache-redis\n")),(0,i.kt)("h2",{id:"how-to-use"},"How to use?"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"cache:\n    redis:\n        host: localhost\n        port: 9876\n        password: MY_SECRET_PASSWORD\n")),(0,i.kt)("h2",{id:"config-api-reference"},"Config API Reference"),(0,i.kt)("p",null,(0,i.kt)("ul",{parentName:"p"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"host")," (type: ",(0,i.kt)("inlineCode",{parentName:"li"},"String"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"port")," (type: ",(0,i.kt)("inlineCode",{parentName:"li"},"Int"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"password")," (type: ",(0,i.kt)("inlineCode",{parentName:"li"},"String"),")"))))}u.isMDXComponent=!0}}]);