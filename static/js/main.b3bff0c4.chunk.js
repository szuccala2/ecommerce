(this.webpackJsonpprove=this.webpackJsonpprove||[]).push([[0],{80:function(e,t,c){},81:function(e,t,c){},94:function(e,t,c){"use strict";c.r(t);var r=c(0),n=c.n(r),a=c(31),i=c.n(a),l=(c(80),c(81),c(13)),o=c(143),s=c(145),u=c(147),d=c(146),b=c(140),j=c(2);function v(e){var t=e.selected,c=e.setSelected;return Object(j.jsx)(s.a,{sx:{display:"flex",flexDirection:"column","& > *":{m:2}},children:Object(j.jsxs)(d.a,{"aria-label":"outlined button group",children:[Object(j.jsx)(u.a,{sx:{boxShadow:2},variant:"in"===t?"contained":"outlined",onClick:function(){c("in"===t?"none":"in")},children:"IN STOCK"}),Object(j.jsx)(u.a,{sx:{boxShadow:2},variant:"out"===t?"contained":"outlined",onClick:function(){c("out"===t?"none":"out")},children:"OUT OF STOCK"})]})})}function m(e){var t=e.searchTerm,c=e.setSearchTerm;return Object(j.jsx)(s.a,{component:"form",sx:{"& > :not(style)":{},display:"flex"},noValidate:!0,autoComplete:"off",children:Object(j.jsxs)(o.a,{container:!0,direction:"row",spacing:{xs:1},children:[Object(j.jsx)(o.a,{item:!0,xs:11,md:8,children:Object(j.jsx)(b.a,{label:"search",variant:"outlined",value:t,onChange:function(e){c(e.target.value)},sx:{mt:1,ml:1,width:"22vw"}})}),Object(j.jsx)(o.a,{item:!0,xs:1,md:4,children:Object(j.jsx)(u.a,{variant:"contained",onClick:function(){c("")},sx:{mt:2.3,ml:2},children:"RESET"})})]})})}function h(e){var t=e.selected,c=e.setSelected,r=e.searchTerm,n=e.setSearchTerm;return Object(j.jsx)(s.a,{sx:{height:80,borderBottom:"1px solid black"},children:Object(j.jsxs)(o.a,{container:!0,direction:"row",children:[Object(j.jsx)(o.a,{item:!0,xs:4,children:Object(j.jsx)("img",{src:"https://via.placeholder.com/150x80",alt:"logo"})}),Object(j.jsx)(o.a,{item:!0,xs:5,md:4,children:Object(j.jsx)(v,{selected:t,setSelected:c})}),Object(j.jsx)(o.a,{item:!0,xs:3,md:4,children:Object(j.jsx)(m,{setSearchTerm:n,searchTerm:r})})]})})}var p=c(30);function x(e){e.selected,e.setSelected,e.searchTerm,e.setSearchTerm;return Object(j.jsx)(s.a,{sx:{backgroundColor:"darkgray",height:"auto"},p:4,children:Object(j.jsx)(o.a,{container:!0,justifyContent:"end",children:Object(j.jsxs)(o.a,{item:!0,children:[Object(j.jsx)(p.b,{style:{color:"blue",textDecoration:"none"},onClick:function(){return window.location="https://theuselessweb.com/"},children:"TWITTER"})," |",Object(j.jsx)(p.b,{style:{color:"blue",textDecoration:"none"},onClick:function(){return window.location="https://theuselessweb.com/"},children:"FACEBOOK"})]})})})}var O=c(148),y=c(150),U=c(149),S=c(151),C=c(144),f=c(139);function k(){return Object(j.jsx)(f.a,{direction:"row",spacing:1,children:Object(j.jsx)(C.a,{label:"In stock"})})}function D(e){var t=e.prod,c=e.det;return Object(j.jsx)(O.a,{sx:c?{maxWidth:450}:{},children:Object(j.jsxs)(p.b,{to:c?"/":"/prod/".concat(t.UPC),style:{textDecoration:"none",color:"black"},children:[Object(j.jsx)(U.a,{component:"img",height:"auto",image:"https://via.placeholder.com/350",alt:"product"}),Object(j.jsxs)(y.a,{children:[Object(j.jsxs)(S.a,{gutterBottom:!0,variant:"h5",component:"div",children:[t.name,Object(j.jsxs)(S.a,{variant:"subtitle1",color:"text.secondary",children:["\u20ac",t.price.current.value]})]}),t.availability.stock>0&&Object(j.jsx)(k,{})]})]})})}var P=[{UPC:"1",name:"Turbine\u2122 Rotor",price:{current:{value:206},currency:"USD"},availability:{stock:1},variants:[]},{UPC:"2",name:"ERIKA COLOR",price:{current:{value:167},currency:"USD"},availability:{stock:10},variants:[{UPC:"3",name:"ERIKA COLOR",price:{current:{value:132},currency:"USD"},availability:{stock:0}},{UPC:"4",name:"ERIKA COLOR",price:{current:{value:157},currency:"USD"},availability:{stock:2}}]},{UPC:"4",name:"AVIATOR",price:{current:{value:154},currency:"USD"},availability:{stock:1},variants:[{UPC:"5",name:"AVIATOR",price:{current:{value:204},currency:"USD"},availability:{stock:16}},{UPC:"6",name:"AVIATOR",price:{current:{value:204},currency:"USD"},availability:{stock:3}},{UPC:"7",name:"AVIATOR",price:{current:{value:204},currency:"USD"},availability:{stock:11}},{UPC:"8",name:"AVIATOR",price:{current:{value:154},currency:"USD"},availability:{stock:3}},{UPC:"9",name:"AVIATOR",price:{current:{value:154},currency:"USD"},availability:{stock:2}},{UPC:"10",name:"AVIATOR",price:{current:{value:204},currency:"USD"},availability:{stock:2}},{UPC:"11",name:"AVIATOR",price:{current:{value:204},currency:"USD"},availability:{stock:3}}]},{UPC:"12",name:"Round",price:{current:{value:244},currency:"USD"},availability:{stock:226},variants:[]},{UPC:"13",name:"ROUND METAL",price:{current:{value:204},currency:"USD"},availability:{stock:9},variants:[{UPC:"14",name:"ROUND METAL",price:{current:{value:154},currency:"USD"},availability:{stock:14}},{UPC:"15",name:"ROUND METAL",price:{current:{value:153},currency:"USD"},availability:{stock:4}},{UPC:"16",name:"ROUND METAL",price:{current:{value:204},currency:"USD"},availability:{stock:9}}]},{UPC:"17",name:"Old fashion",price:{current:{value:186},currency:"USD"},availability:{stock:1},variants:[{UPC:"18",name:"Old fashion",price:{current:{value:186},currency:"USD"},availability:{stock:5}},{UPC:"19",name:"Old fashion",price:{current:{value:186},currency:"USD"},availability:{stock:6}},{UPC:"20",name:"Old fashion",price:{current:{value:156},currency:"USD"},availability:{stock:0}},{UPC:"21",name:"Old fashion",price:{current:{value:156},currency:"USD"},availability:{stock:0}}]},{UPC:"22",name:"Springfield XL",price:{current:{value:186},currency:"USD"},availability:{stock:0},variants:[{UPC:"23",name:"Springfield XL",price:{current:{value:156},currency:"USD"},availability:{stock:2}},{UPC:"24",name:"Springfield XL",price:{current:{value:186},currency:"USD"},availability:{stock:2}},{UPC:"25",name:"Springfield XL",price:{current:{value:186},currency:"USD"},availability:{stock:1}},{UPC:"26",name:"Springfield XL",price:{current:{value:156},currency:"USD"},availability:{stock:0}},{UPC:"27",name:"Springfield XL",price:{current:{value:156},currency:"USD"},availability:{stock:1}},{UPC:"28",name:"Springfield XL",price:{current:{value:156},currency:"USD"},availability:{stock:0}},{UPC:"29",name:"Springfield XL",price:{current:{value:156},currency:"USD"},availability:{stock:0}},{UPC:"30",name:"Springfield XL",price:{current:{value:136},currency:"USD"},availability:{stock:0}}]}];function g(){var e=r.useState("none"),t=Object(l.a)(e,2),c=t[0],n=t[1],a=r.useState(""),i=Object(l.a)(a,2),s=i[0],u=i[1];return Object(j.jsxs)(o.a,{container:!0,wrap:"nowrap",sx:{height:"100vh",flexGrow:1},direction:"column",children:[Object(j.jsx)(o.a,{item:!0,xs:1,children:Object(j.jsx)(h,{selected:c,setSelected:n,setSearchTerm:u,searchTerm:s})}),Object(j.jsx)(o.a,{item:!0,xs:10,children:Object(j.jsx)(o.a,{container:!0,spacing:2,p:2,rowSpacing:{xs:5,md:2},children:null===P||void 0===P?void 0:P.filter((function(e){switch(c){case"in":return e.availability.stock>0;case"out":return e.availability.stock<=0;default:return!0}})).filter((function(e){return e.name.toLowerCase().includes(s.toLowerCase())})).map((function(e,t){return Object(j.jsx)(o.a,{item:!0,xs:3,children:Object(j.jsx)(D,{prod:e})},e.UPC)}))})}),Object(j.jsx)(o.a,{item:!0,xs:1,children:Object(j.jsx)(x,{})})]})}function T(e){return Object(j.jsx)("div",{children:Object(j.jsx)(D,{prod:P.find((function(t){return t.UPC===e.match.params.id})),det:!0})})}var w=c(16);var A=function(){return Object(j.jsxs)(w.c,{children:[Object(j.jsx)(w.a,{path:"/tw",component:function(){return window.location="https://theuselessweb.com/",null}}),Object(j.jsx)(w.a,{path:"/prod/:id",component:T}),Object(j.jsx)(w.a,{path:"/",component:g})]})},R=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,153)).then((function(t){var c=t.getCLS,r=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),r(e),n(e),a(e),i(e)}))};i.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(p.a,{basename:"/ecommerce",children:Object(j.jsx)(A,{})})}),document.getElementById("root")),R()}},[[94,1,2]]]);
//# sourceMappingURL=main.b3bff0c4.chunk.js.map