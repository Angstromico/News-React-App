(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{10:function(e,t,c){},11:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(5),l=c.n(s),r=(c(10),c(11),c(0)),i=function(){return Object(r.jsx)("header",{children:Object(r.jsx)("nav",{children:Object(r.jsx)("div",{className:"nav-wrapper light-blue darken-3",children:Object(r.jsx)("a",{href:"/",className:"brand-logo center",children:"Manuel News"})})})})},o=c(4),j=c(2),u=a.a.createContext(),d=function(e){var t=e.children,c=Object(n.useState)([]),a=Object(j.a)(c,2),s=a[0],l=a[1],i=Object(n.useState)([]),d=Object(j.a)(i,2),b=d[0],h=d[1],O=Object(n.useState)(!1),m=Object(j.a)(O,2),f=m[0],x=m[1],v=Object(n.useCallback)((function(e,t){var c="https://newsapi.org/v2/everything?q=".concat(e,"&from=").concat(t,"&sortBy=popularity&apiKey=").concat("2383458043a44daa9813db9753a3ff57");fetch(c).then((function(e){return e.json()})).then((function(e){l(e.articles);var t=e.articles.slice(0,e.articles.length/2);h(t),setTimeout((function(){x(!0)}),500)}))}),[]);Object(n.useEffect)((function(){var e=(new Date).getFullYear();v("general",e)}),[v]);var p=Object(n.useState)("general"),g=Object(j.a)(p,2),N=g[0],w=g[1],S=Object(n.useState)({allText:!1,more:"Read All Text"}),y=Object(j.a)(S,2),T=y[0],k=y[1],C=Object(n.useState)({c:!1,t:"See all the News"}),I=Object(j.a)(C,2),M=I[0],R=I[1];return Object(r.jsx)(u.Provider,{value:{information:s,handleSubmit:function(e){e.preventDefault(),x(!1);var t=(new Date).getFullYear();v(N,t)},value:N,setValue:w,read:T,showText:function(e){var t=T.allText;e.length<200&&k(Object(o.a)(Object(o.a)({},T),{},{allText:!0})),k(!1===t?{allText:!0,more:"Read Less"}:{allText:!1,more:"Read More"})},halfInfo:b,showHideAll:function(){M.c?(R({c:!1,t:"See all the News"}),h(s.slice(0,s.length/2))):(R({c:!0,t:"Show half of the news"}),h(s))},complete:M,animation:f,ternary:function(e,t){return e?t:""}},children:t})},b=function(){return Object(n.useContext)(u)},h=function(e){var t=e.info,c=t.url,n=t.urlToImage,a=t.title,s=t.description,l=t.source,i=b(),o=i.read,j=i.showText,u=i.animation,d=i.ternary,h=o.allText,O=o.more;return Object(r.jsx)("div",{className:"col s12 m6 l4 animation ".concat(d(u,"on")),children:Object(r.jsxs)("div",{className:"card",children:[Object(r.jsxs)("div",{className:"card-image",children:[Object(r.jsx)("img",{src:n,alt:a}),Object(r.jsx)("span",{className:"card-title",children:l.name})]}),Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsx)("h3",{className:"center",children:a}),Object(r.jsxs)("p",{children:[h?s:s.substring(0,200),Object(r.jsx)("span",{className:"center-flex",children:Object(r.jsx)("input",{type:"button",className:"btn-more",onClick:function(){return j(s)},value:O})})]})]}),Object(r.jsx)("div",{className:"card-action",children:Object(r.jsx)("a",{href:c,target:"_blank",rel:"noreferrer",className:"waves-effect waves-light btn",children:"Read More"})})]})})},O=function(){var e=b(),t=e.value,c=e.setValue,n=e.handleSubmit;return Object(r.jsx)(a.a.Fragment,{children:Object(r.jsx)("div",{className:"buscador row light-blue  darken-3 form white-color",children:Object(r.jsx)("div",{className:"col s12 m8 offset-m2",children:Object(r.jsxs)("form",{onSubmit:n,children:[Object(r.jsx)("legend",{className:"center",children:"News Categories"}),Object(r.jsx)("div",{className:"input-field col s12 m8",children:Object(r.jsxs)("select",{id:"select",value:t,onChange:function(e){return c(e.target.value)},children:[Object(r.jsx)("option",{value:"general",defaultValue:!0,children:"General"}),Object(r.jsx)("option",{value:"business",children:"Business"}),Object(r.jsx)("option",{value:"entertainment",children:"Entertainment"}),Object(r.jsx)("option",{value:"health",children:"Health"}),Object(r.jsx)("option",{value:"science",children:"Science"}),Object(r.jsx)("option",{value:"sports",children:"Sports"}),Object(r.jsx)("option",{value:"technology",children:"Technology"})]})}),Object(r.jsx)("div",{className:"col m4 s12 input-field enviar",children:Object(r.jsx)("input",{type:"submit",className:"darken-2 btn light-blue waves-effect waves-light",value:"Search"})})]})})})})},m=function(){var e=b(),t=e.halfInfo,c=e.complete,n=e.showHideAll,a=c.t;return Object(r.jsxs)("div",{className:"light-blue darken-2 news",children:[Object(r.jsx)(O,{}),Object(r.jsx)("div",{className:"row",children:t.map((function(e,t){return Object(r.jsx)(h,{info:e},t)}))}),Object(r.jsx)("div",{className:"col m4 s12 input-field enviar center-flex",children:Object(r.jsx)("input",{type:"submit",onClick:function(){return n()},className:"darken-2 btn light-blue waves-effect waves-light flash",value:a})})]})};var f=function(){return Object(r.jsxs)("section",{className:"app contenedor-app",children:[Object(r.jsx)(i,{}),Object(r.jsx)("div",{className:"container contenedor-noticias",children:Object(r.jsx)(m,{})})]})};l.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(d,{children:Object(r.jsx)(f,{})})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.f82b9935.chunk.js.map