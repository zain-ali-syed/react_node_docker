(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(7),l=n.n(r),o=n(1),u=n(2),i=n(4),s=n(3),m=n(5),h=function(e){var t=e.first_name,n=e.last_name,a=e.email;return c.a.createElement("div",null,c.a.createElement("h1",null,"".concat(t," ").concat(n)),c.a.createElement("p",null,a))},f=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).state={contacts:[]},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:4000").then(function(e){return e.json()}).then(function(t){return e.setState(function(){return{contacts:t}})})}},{key:"render",value:function(){var e=this.state.contacts;return console.log(e),e.length?c.a.createElement("div",null,e.map(function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(h,Object.assign({},e,{key:e.email})),c.a.createElement("hr",null))})):c.a.createElement("div",null,"Loading ")}}]),t}(a.Component),p=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement(f,null)}}]),t}(a.Component);l.a.render(c.a.createElement(p,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.3ad8d507.chunk.js.map