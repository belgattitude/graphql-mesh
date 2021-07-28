"use strict";(self.webpackChunk_graphql_mesh_website=self.webpackChunk_graphql_mesh_website||[]).push([[4195],{6661:function(e,t,a){a.r(t),a.d(t,{default:function(){return w}});var n=a(9603),r=a(7378),o=a(42),i=a.n(o),l=a(711),c=a(1142),s={features:"features_3azU",featureImage:"featureImage_ZtzX",buttons:"buttons_1r9m",header:"header_2zn2",npmBadge:"npmBadge_1c6j",bannerVideo:"bannerVideo_3dhQ"},m="button_1VTR",u="buttonContained_2pV-",p=function(e){return r.createElement("button",(0,n.Z)({},e,{className:i()(e.contained?u:m,e.className)}),e.children)},d=a(9559),h="picker_3XiF",g="container_1zEf",f="blur_23ac",E={OpenAPI:{"JavaScript Wiki":"openapi-javascript-wiki","Location Weather":"openapi-location-weather",YouTrack:"openapi-youtrack",Stripe:"openapi-stripe",StackExchange:"openapi-stackexchange","WeatherBit on React App":"openapi-react-weatherbit"},"JSON Schema":{"Fake API":"json-schema-example","Covid-19 Statistics":"json-schema-covid","Subscriptions, Webhooks & Live Queries":"json-schema-subscriptions"},OData:{TripPin:"odata-trippin","Microsoft Graph":"odata-microsoft"},SOAP:{"Country Info":"soap-country-info"},MySQL:{Rfam:"mysql-rfam"},SQLite:{Chinook:"sqlite-chinook"},"Apollo Federation":{"Apollo Federation Example":"federation-example"},"Apache Thrift":{Calculator:"thrift-calculator"}},b=function(){var e=(0,r.useState)("json-schema-example"),t=e[0],a=e[1],n=(0,r.useState)(!0),o=n[0],i=n[1];return r.createElement("div",null,r.createElement("div",{className:h},"Choose Live Example: ",r.createElement("select",{value:t,onChange:function(e){i(!0),a(e.target.value)}},Object.keys(E).map((function(e){return r.createElement("optgroup",{key:e,label:e},Object.keys(E[e]).map((function(t){return r.createElement("option",{key:t,label:t,value:E[e][t]},t)})))})))),r.createElement("div",{className:g},r.createElement("iframe",{src:"https://codesandbox.io/embed/github/Urigo/graphql-mesh/tree/master/examples/"+t+"?fontsize=14&hidenavigation=1&theme=dark&module=%2F.meshrc.yml",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},className:o?f:"",title:t,allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin",onLoad:function(){return i(!1)}})))},v=[{title:r.createElement(r.Fragment,null,"GraphQL as a Query Language"),imageUrl:"img/GraphQL_Logo.svg",description:r.createElement(r.Fragment,null,"Use GraphQL as a query language to fetch data from your data-sources directly, without the need for a running gateway server, or any other bottleneck.")},{title:r.createElement(r.Fragment,null,"Any Data Source"),imageUrl:"img/mesh-example.png",description:r.createElement(r.Fragment,null,"With GraphQL Mesh, you can use GraphQL query language to fetch from (almost) any data source, without changing the source or modify it's code.")},{title:r.createElement(r.Fragment,null,"Open Source"),imageUrl:"img/open-source.svg",description:r.createElement(r.Fragment,null,"GraphQL Mesh is free and open-source, and been built with the community. You can contribute, extend and have your custom logic easily.")}];function y(e){var t=e.imageUrl,a=e.title,n=e.description,o=(0,c.Z)(t);return r.createElement("div",{className:i()("col col--4",s.feature)},o&&r.createElement("div",{className:"text--center"},r.createElement("img",{className:s.featureImage,src:o,alt:a})),r.createElement("h3",null,a),r.createElement("p",null,n))}var w=function(){var e=(0,r.useState)(!1),t=e[0],a=e[1];return r.createElement(l.Z,{title:"GraphQL Mesh",description:""},r.createElement("header",{className:s.header},r.createElement("div",{className:s.bannerVideoContainer},r.createElement("video",{className:s.bannerVideo,width:"100%",height:"100%",playsInline:!0,autoPlay:!0,muted:!0,loop:!0},r.createElement("source",{src:"/video/medium_1200X345.webm",type:"video/webm"}),r.createElement("source",{src:"/video/medium_1200X345.mp4",type:"video/mp4"}))),r.createElement("img",{className:s.npmBadge,alt:"npm",src:"https://img.shields.io/npm/v/@graphql-mesh/cli?color=%231BCBE2&label=stable&style=for-the-badge"}),r.createElement("div",{className:s.buttons},r.createElement(p,{onClick:function(){return a(!0)}},"Try it out Live"),r.createElement(d.Z,{to:"/docs/getting-started/introduction"},r.createElement(p,null,"View Docs")))),t&&r.createElement("div",{className:s.liveDemo},r.createElement("a",{id:"live-demo"}),r.createElement(b,null)),r.createElement("main",null,v&&v.length&&r.createElement("section",{className:s.features},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},v.map((function(e,t){return r.createElement(y,(0,n.Z)({key:t},e))})))))))}}}]);