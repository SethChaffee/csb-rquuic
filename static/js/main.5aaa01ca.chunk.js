(this["webpackJsonpdnd-kit-example"]=this["webpackJsonpdnd-kit-example"]||[]).push([[0],{19:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r(12),i=r.n(c),a=r(3),d=r(8),l=r(4);function s(e){var t=Object(d.c)({id:e.id}),r=t.isOver,n=t.setNodeRef,c={color:r?"green":void 0};return Object(l.jsx)("div",{ref:n,style:c,children:e.children})}var o=r(1),j=r(2);function b(e){var t=Object(d.b)({id:e.id}),r=t.attributes,n=t.listeners,c=t.setNodeRef,i=t.transform,a=i?{transform:j.a.Translate.toString(i)}:void 0;return Object(l.jsx)("button",Object(o.a)(Object(o.a)(Object(o.a)({ref:c,className:"draggable-item",style:a},n),r),{},{children:e.children}))}function u(){var e=Object(n.useState)(null),t=Object(a.a)(e,2),r=t[0],c=t[1],i=Object(l.jsx)(b,{id:"draggable",data:{hello:1},children:"Drag me"});return Object(l.jsxs)(d.a,{onDragEnd:function(e){var t=e.over;console.log({event:e}),c(t?t.id:null)},children:[null===r?i:null,Object(l.jsx)("div",{style:{display:"flex"},children:["A","B","C"].map((function(e){return Object(l.jsx)(s,{id:e,children:r===e?i:"Drop here"},e)}))})]})}var O=document.getElementById("root");i.a.render(Object(l.jsx)(n.StrictMode,{children:Object(l.jsx)(u,{})}),O)}},[[19,1,2]]]);
//# sourceMappingURL=main.5aaa01ca.chunk.js.map