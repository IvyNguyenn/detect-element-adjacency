(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var o=a(1),r=a(4),n=a.n(r),c=a(5),i=a(3),l=a(6),h=a(7),d=a(9),s=a(8),u=(a(14),a(0)),b=function(e){Object(d.a)(a,e);var t=Object(s.a)(a);function a(e){var o;return Object(l.a)(this,a),(o=t.call(this,e)).randomColor=function(){var e=Math.floor(Math.random()*o.colors.length);return o.colors[e]},o.createBoardColor=function(){for(var e=o.state,t=e.width,a=e.height,r=[],n=0;n<a;n++){for(var c=[],i=0;i<t;i++){var l=o.randomColor();c.push({color:l,id:n+"-"+i})}r.push(c)}o.setState({board:r})},o.detectElementAdjacency=function(e,t,a){for(var r=o.state,n=r.board,c=r.width,l=r.height,h={vertical:[n[e][t].id],horizontal:[n[e][t].id]},d=e-1;d>=0&&n[d][t].color===a;d--)h.vertical.push(n[d][t].id);for(var s=e+1;s<l&&n[s][t].color===a;s++)h.vertical.push(n[s][t].id);h.vertical.length<3&&(h.vertical=[]);for(var u=t-1;u>=0&&n[e][u].color===a;u--)h.horizontal.push(n[e][u].id);for(var b=t+1;b<c&&n[e][b].color===a;b++)h.horizontal.push(n[e][b].id);h.horizontal.length<3&&(h.horizontal=[]),h=[].concat(Object(i.a)(h.vertical),Object(i.a)(h.horizontal));for(var v=n,j=0;j<l;j++)for(var m=0;m<c;m++){var f=h.includes(v[j][m].id);v[j][m].checked=f}o.setState({board:v})},o.handleChange=function(e){var t=e.target,a=t.name,r=t.value;o.setState(Object(c.a)({},a,r),(function(){o.createBoardColor()}))},o.colors=["#447473","#E79735","#5477A5"],o.state={board:[],width:6,height:5},o}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.createBoardColor()}},{key:"render",value:function(){var e=this,t=this.state,a=t.board,o=t.width,r=t.height;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"title-container",children:[Object(u.jsx)("h3",{className:"title",children:"Detect element adjacency"}),Object(u.jsx)("input",{type:"number",name:"width",min:5,max:20,value:o,onChange:this.handleChange}),"X",Object(u.jsx)("input",{type:"number",name:"height",min:5,max:20,value:r,onChange:this.handleChange}),Object(u.jsx)("button",{onClick:this.createBoardColor,children:"Reload"})]}),Object(u.jsx)("div",{className:"board",children:a.map((function(t,a){return Object(u.jsx)("div",{className:"board-row",children:t.map((function(t,o){return Object(u.jsxs)("div",{className:"board-col ".concat(t.checked?"checked":""),style:{backgroundColor:t.color},onClick:function(){return e.detectElementAdjacency(a,o,t.color)},children:[a,"-",o]},o+"col")}))},a)}))})]})}}]),a}(o.Component),v=document.getElementById("root");n.a.render(Object(u.jsx)(b,{}),v)}},[[16,1,2]]]);
//# sourceMappingURL=main.361b10b7.chunk.js.map