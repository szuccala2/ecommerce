(this.webpackJsonpprove=this.webpackJsonpprove||[]).push([[0],{101:function(e,c,t){"use strict";t.r(c);var r=t(0),a=t.n(r),i=t(30),n=t.n(i),l=(t(87),t.p,t(88),t(13)),s=t(148),o=t(150),u=t(152),d=t(151),b=t(145),j=t(2);function v(e){var c=e.selected,t=e.setSelected;return Object(j.jsx)(o.a,{sx:{display:"flex",flexDirection:"column","& > *":{m:2}},children:Object(j.jsxs)(d.a,{"aria-label":"outlined button group",children:[Object(j.jsx)(u.a,{sx:{boxShadow:2},variant:"in"==c?"contained":"outlined",onClick:function(){t("in"==c?"none":"in")},children:"IN STOCK"}),Object(j.jsx)(u.a,{sx:{boxShadow:2},variant:"out"==c?"contained":"outlined",onClick:function(){t("out"==c?"none":"out")},children:"OUT OF STOCK"})]})})}function m(e){var c=e.searchTerm,t=e.setSearchTerm;return Object(j.jsx)(o.a,{component:"form",sx:{"& > :not(style)":{},display:"flex"},noValidate:!0,autoComplete:"off",children:Object(j.jsxs)(s.a,{container:!0,direction:"row",spacing:{xs:1},children:[Object(j.jsx)(s.a,{item:!0,xs:11,md:8,children:Object(j.jsx)(b.a,{label:"search",variant:"outlined",value:c,onChange:function(e){t(e.target.value)},sx:{mt:1,ml:1,width:"22vw"}})}),Object(j.jsx)(s.a,{item:!0,xs:1,md:4,children:Object(j.jsx)(u.a,{variant:"contained",onClick:function(){t("")},sx:{mt:2.3,ml:2},children:"RESET"})})]})})}function p(e){var c=e.selected,t=e.setSelected,r=e.searchTerm,a=e.setSearchTerm;return Object(j.jsx)(o.a,{sx:{height:80,borderBottom:"1px solid black"},children:Object(j.jsxs)(s.a,{container:!0,direction:"row",children:[Object(j.jsx)(s.a,{item:!0,xs:4,children:Object(j.jsx)("img",{src:"https://via.placeholder.com/150x80"})}),Object(j.jsx)(s.a,{item:!0,xs:5,md:4,children:Object(j.jsx)(v,{selected:c,setSelected:t})}),Object(j.jsx)(s.a,{item:!0,xs:3,md:4,children:Object(j.jsx)(m,{setSearchTerm:a,searchTerm:r})})]})})}function h(e){e.selected,e.setSelected,e.searchTerm,e.setSearchTerm;return Object(j.jsx)(o.a,{sx:{backgroundColor:"darkgray",height:"auto"},p:4,children:Object(j.jsx)(s.a,{container:!0,justifyContent:"end",children:Object(j.jsxs)(s.a,{item:!0,children:[Object(j.jsx)("a",{style:{color:"blue"},children:"TWITTER"})," | ",Object(j.jsx)("a",{style:{color:"blue"},children:"FACEBOOK"})]})})})}var x=t(155),O=t(157),y=t(156),U=t(154),S=t(158),C=t(149),f=t(144),k=t(21),D=Object(k.a)();function P(){return Object(j.jsx)(f.a,{direction:"row",spacing:1,children:Object(j.jsx)(C.a,{label:"In stock"})})}function g(e){var c=e.prod,t=e.det;return Object(j.jsx)(x.a,{sx:t?{maxWidth:500}:{},children:Object(j.jsxs)(S.a,{onClick:function(){t?D.push("/"):D.push("/prod/".concat(c.UPC))},children:[Object(j.jsx)(y.a,{component:"img",height:"auto",image:"https://via.placeholder.com/350",alt:"product"}),Object(j.jsxs)(O.a,{children:[Object(j.jsxs)(U.a,{gutterBottom:!0,variant:"h5",component:"div",children:[c.name,Object(j.jsxs)(U.a,{variant:"subtitle1",color:"text.secondary",children:["\u20ac",c.price.current.value]})]}),c.availability.stock>0&&Object(j.jsx)(P,{})]})]})})}var T=[{UPC:"1",name:"Turbine\u2122 Rotor",price:{current:{value:206},currency:"USD"},availability:{stock:1},variants:[]},{UPC:"2",name:"ERIKA COLOR",price:{current:{value:167},currency:"USD"},availability:{stock:10},variants:[{UPC:"3",name:"ERIKA COLOR",price:{current:{value:132},currency:"USD"},availability:{stock:0}},{UPC:"4",name:"ERIKA COLOR",price:{current:{value:157},currency:"USD"},availability:{stock:2}}]},{UPC:"4",name:"AVIATOR",price:{current:{value:154},currency:"USD"},availability:{stock:1},variants:[{UPC:"5",name:"AVIATOR",price:{current:{value:204},currency:"USD"},availability:{stock:16}},{UPC:"6",name:"AVIATOR",price:{current:{value:204},currency:"USD"},availability:{stock:3}},{UPC:"7",name:"AVIATOR",price:{current:{value:204},currency:"USD"},availability:{stock:11}},{UPC:"8",name:"AVIATOR",price:{current:{value:154},currency:"USD"},availability:{stock:3}},{UPC:"9",name:"AVIATOR",price:{current:{value:154},currency:"USD"},availability:{stock:2}},{UPC:"10",name:"AVIATOR",price:{current:{value:204},currency:"USD"},availability:{stock:2}},{UPC:"11",name:"AVIATOR",price:{current:{value:204},currency:"USD"},availability:{stock:3}}]},{UPC:"12",name:"Round",price:{current:{value:244},currency:"USD"},availability:{stock:226},variants:[]},{UPC:"13",name:"ROUND METAL",price:{current:{value:204},currency:"USD"},availability:{stock:9},variants:[{UPC:"14",name:"ROUND METAL",price:{current:{value:154},currency:"USD"},availability:{stock:14}},{UPC:"15",name:"ROUND METAL",price:{current:{value:153},currency:"USD"},availability:{stock:4}},{UPC:"16",name:"ROUND METAL",price:{current:{value:204},currency:"USD"},availability:{stock:9}}]},{UPC:"17",name:"Old fashion",price:{current:{value:186},currency:"USD"},availability:{stock:1},variants:[{UPC:"18",name:"Old fashion",price:{current:{value:186},currency:"USD"},availability:{stock:5}},{UPC:"19",name:"Old fashion",price:{current:{value:186},currency:"USD"},availability:{stock:6}},{UPC:"20",name:"Old fashion",price:{current:{value:156},currency:"USD"},availability:{stock:0}},{UPC:"21",name:"Old fashion",price:{current:{value:156},currency:"USD"},availability:{stock:0}}]},{UPC:"22",name:"Springfield XL",price:{current:{value:186},currency:"USD"},availability:{stock:0},variants:[{UPC:"23",name:"Springfield XL",price:{current:{value:156},currency:"USD"},availability:{stock:2}},{UPC:"24",name:"Springfield XL",price:{current:{value:186},currency:"USD"},availability:{stock:2}},{UPC:"25",name:"Springfield XL",price:{current:{value:186},currency:"USD"},availability:{stock:1}},{UPC:"26",name:"Springfield XL",price:{current:{value:156},currency:"USD"},availability:{stock:0}},{UPC:"27",name:"Springfield XL",price:{current:{value:156},currency:"USD"},availability:{stock:1}},{UPC:"28",name:"Springfield XL",price:{current:{value:156},currency:"USD"},availability:{stock:0}},{UPC:"29",name:"Springfield XL",price:{current:{value:156},currency:"USD"},availability:{stock:0}},{UPC:"30",name:"Springfield XL",price:{current:{value:136},currency:"USD"},availability:{stock:0}}]}];function A(){var e=r.useState("none"),c=Object(l.a)(e,2),t=c[0],a=c[1],i=r.useState(""),n=Object(l.a)(i,2),o=n[0],u=n[1];return Object(j.jsxs)(s.a,{container:!0,wrap:"nowrap",sx:{height:"100vh",flexGrow:1},direction:"column",children:[Object(j.jsx)(s.a,{item:!0,xs:1,children:Object(j.jsx)(p,{selected:t,setSelected:a,setSearchTerm:u,searchTerm:o})}),Object(j.jsx)(s.a,{item:!0,xs:10,children:Object(j.jsx)(s.a,{container:!0,spacing:2,p:2,rowSpacing:{xs:5,md:2},children:null===T||void 0===T?void 0:T.filter((function(e){switch(t){case"in":return e.availability.stock>0;case"out":return e.availability.stock<=0;default:return!0}})).filter((function(e){return e.name.toLowerCase().includes(o.toLowerCase())})).map((function(e,c){return Object(j.jsx)(s.a,{item:!0,xs:3,children:Object(j.jsx)(g,{prod:e},e.UPC)})}))})}),Object(j.jsx)(s.a,{item:!0,xs:1,children:Object(j.jsx)(h,{})})]})}function R(e){return Object(j.jsx)("div",{children:Object(j.jsx)(g,{prod:T.find((function(c){return c.UPC===e.match.params.id})),det:!0})})}var L=t(16);var w=function(){return Object(j.jsxs)(L.c,{children:[Object(j.jsx)(L.a,{path:"/prod/:id",component:R}),Object(j.jsx)(L.a,{exact:!0,path:"/",component:A})]})},I=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,159)).then((function(c){var t=c.getCLS,r=c.getFID,a=c.getFCP,i=c.getLCP,n=c.getTTFB;t(e),r(e),a(e),i(e),n(e)}))},E=t(54);n.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(E.a,{basename:"/ecommerce",children:Object(j.jsx)(w,{})})}),document.getElementById("root")),I()},87:function(e,c,t){},88:function(e,c,t){}},[[101,1,2]]]);
//# sourceMappingURL=main.c4beff9b.chunk.js.map