(this["webpackJsonpmosnter-cards"]=this["webpackJsonpmosnter-cards"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),r=n(3),o=n.n(r),a=(n(12),n(4)),i=n(5),l=n(7),u=n(6),h=(n(13),n(14),n(15),n(0)),d=function(e){return console.log(e.monsters),Object(h.jsxs)("div",{className:"card-container",children:[Object(h.jsx)("img",{src:"https://robohash.org/".concat(e.monsters.id,"?set=set2size=180x180"),alt:"monster images"}),Object(h.jsx)("h2",{className:"App",children:e.monsters.name}),Object(h.jsx)("p",{className:"App",children:e.monsters.email})]})},j=function(e){return Object(h.jsx)("div",{className:"card-list",children:e.monster.map((function(e){return Object(h.jsx)(d,{monsters:e},e.id)}))})},m=(n(17),function(e){var t=e.placeholder,n=e.evenHandler;return Object(h.jsx)("input",{className:"search App",type:"search",placeholder:t,onChange:n})}),p=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).state={monster:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monster:t})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.monster,s=t.searchField,c=n.filter((function(e){return e.name.toLowerCase().includes(s)}));return console.log(c),Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{className:"heading App",children:"Monster Cards"}),Object(h.jsx)(m,{placeholder:"search the robots",evenHandler:function(t){e.setState({searchField:t.target.value},(function(){return console.log(e.state.searchField)}))}}),Object(h.jsx)(j,{monster:c})]})}}]),n}(s.Component),f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),s(e),c(e),r(e),o(e)}))};o.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(p,{})}),document.getElementById("root")),f()}],[[18,1,2]]]);
//# sourceMappingURL=main.b2081533.chunk.js.map