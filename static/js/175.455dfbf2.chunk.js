"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[175],{175:function(e,n,r){r.r(n),r.d(n,{default:function(){return m}});var t=r(861),c=r(439),a=r(757),i=r.n(a),s=r(791),o=r(171),u=r(689),p=r(87),l=r(134),h={container:"MoveInfo_container__GDDz8"},f=r(184),d=function(e){var n=e.movie;return(0,f.jsxs)("div",{className:h.container,children:[n.poster_path?(0,f.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(n.poster_path),alt:n.title}):(0,f.jsx)("img",{src:"https://www.sheringtonprimary.co.uk/wp-content/uploads/film.jpg",alt:"Default"}),(0,f.jsxs)("div",{className:h.item,children:[(0,f.jsx)("h2",{children:n.title}),(0,f.jsxs)("p",{children:["User score: ",n.vote_average]}),(0,f.jsx)("h3",{children:"Overview"}),(0,f.jsx)("p",{children:n.overview}),(0,f.jsx)("h3",{children:"Genres"}),(0,f.jsx)("p",{children:n.genres.map((function(e){return e.name})).join(", ")})]})]})},v="AdditionalInfo_container__Ol9jh",x=function(){return(0,f.jsxs)("div",{className:v,children:[(0,f.jsx)("h3",{children:"Additional information"}),(0,f.jsxs)("ul",{children:[(0,f.jsx)("li",{children:(0,f.jsx)(p.rU,{to:"cast",children:"Cast"})}),(0,f.jsx)("li",{children:(0,f.jsx)(p.rU,{to:"reviews",children:"Reviews"})})]})]})},m=function(){var e,n,r=(0,u.UO)().movieId,a=(0,s.useState)(null),h=(0,c.Z)(a,2),v=h[0],m=h[1],j=(0,u.TH)(),w=(0,s.useRef)(null!==(e=null===(n=j.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/");return(0,s.useEffect)((function(){var e=function(){var e=(0,t.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.TP)(r);case 3:n=e.sent,m(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error searching movie:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[r]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(p.rU,{to:w.current,children:[(0,f.jsx)(l.FtK,{}),"go back"]}),v&&(0,f.jsx)(d,{movie:v}),(0,f.jsx)(x,{}),(0,f.jsx)(s.Suspense,{fallback:(0,f.jsx)("div",{children:"Loading subpage..."}),children:(0,f.jsx)(u.j3,{})})]})}},171:function(e,n,r){r.d(n,{Hg:function(){return u},IR:function(){return f},M1:function(){return l},TP:function(){return p},tx:function(){return h}});var t=r(861),c=r(757),a=r.n(c),i=r(243),s="https://api.themoviedb.org/3/",o={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZDhiMzA3Yjc3Nzc0MWQwN2QwZTg4NTgzMzkyMWE4NCIsInN1YiI6IjY0OTcyMmRlYjM0NDA5MDBlMjcxYWNkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-nGnsxic-Eqjb3RquRboL6o3Q58xkv1131q1IZQJtUA"}},u=function(){var e=(0,t.Z)(a().mark((function e(){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"trending/movie/day?language=en-US"),o);case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(a().mark((function e(n){var r,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"movie/").concat(n),o);case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(a().mark((function e(n){var r,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"movie/").concat(n,"/credits"),o);case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=(0,t.Z)(a().mark((function e(n){var r,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"movie/").concat(n,"/reviews"),o);case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(a().mark((function e(n){var r,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"search/movie?query=").concat(n,"&page=1"),o);case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=175.455dfbf2.chunk.js.map