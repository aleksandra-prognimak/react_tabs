(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{12:function(t,e,c){},14:function(t,e,c){"use strict";c.r(e);var n=c(3),a=c.n(n),i=c(5),s=c(1),d=(c(10),c(11),c(12),c(4)),b=c.n(d),l=c(0),o=function(t){var e=t.tabs,c=t.selectedTab,n=t.setSelectedTab,a=e.find((function(t){return t.id===c.id}))||e[0];return Object(l.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(l.jsx)("div",{className:"tabs is-boxed",children:Object(l.jsx)("ul",{children:e.map((function(t){return Object(l.jsx)("li",{"data-cy":"Tab",className:b()({"is-active":t.id===a.id}),children:Object(l.jsx)("a",{href:"#".concat(t.id),"data-cy":"TabLink",onClick:function(){return function(t){t.id!==c.id&&n(t)}(t)},children:t.title})},t.id)}))})}),Object(l.jsx)("div",{className:"block","data-cy":"TabContent",children:a.content})]})},r=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],j=function(){var t=Object(s.useState)(r[0]),e=Object(i.a)(t,2),c=e[0],n=e[1];return Object(l.jsxs)("div",{className:"section",children:[Object(l.jsx)("h1",{className:"title",children:"Selected tab is ".concat(c.title)}),Object(l.jsx)(o,{tabs:r,selectedTab:c,setSelectedTab:n})]})};a.a.render(Object(l.jsx)(j,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.ee13a06e.chunk.js.map