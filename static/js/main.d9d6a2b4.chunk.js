(this["webpackJsonpstopwatch-sber"]=this["webpackJsonpstopwatch-sber"]||[]).push([[0],{42:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var c,r,a,i,o,u,s,j=n(1),b=n.n(j),d=n(28),O=n.n(d),h=(n(42),n(81)),l=n(4),m=n(78),f=n(0),p=n(2),x=Object(f.d)(m.a)(c||(c=Object(l.a)(["\n    @media (min-width: 650px) {\n        padding: 1rem;\n    }\n"]))),g=function(){return Object(p.jsx)(x,{back:!1,title:"\u041c\u043e\u0439 \u0441\u0435\u043a\u0443\u043d\u0434\u043e\u043c\u0435\u0440"})},S=n(9),y=n(83),T=n(82),v=n(75),_=n(76),E=n(33),R=n(3),w=function(e){return"".concat(e>9?"":"0").concat(e)},C={character:"sber",ms:0,s:0,m:0,h:0,isGoing:!1,points:[]},A=function(e,t){switch(t.type){case"SET_CHARACTER":return Object(R.a)(Object(R.a)({},e),{},{character:t.characterId});case"SET_H":return Object(R.a)(Object(R.a)({},e),{},{h:t.payload});case"SET_M":return Object(R.a)(Object(R.a)({},e),{},{m:t.payload});case"SET_MS":return Object(R.a)(Object(R.a)({},e),{},{ms:t.payload});case"SET_S":return Object(R.a)(Object(R.a)({},e),{},{s:t.payload});case"START_STOP_WATCH":return Object(R.a)(Object(R.a)({},e),{},{isGoing:!0});case"STOP_STOP_WATCH":return Object(R.a)(Object(R.a)({},e),{},{isGoing:!1});case"CLEAR_TIMER":return Object(R.a)(Object(R.a)({},e),{},{ms:0,s:0,m:0,h:0,points:[]});case"ADD_POINT":var n=Object(E.a)(e.points);return n.length<5&&n.push("".concat(w(e.h),":").concat(w(e.m),":").concat(w(e.s),":").concat(w(e.ms))),Object(R.a)(Object(R.a)({},e),{},{points:n});default:return e}},k=function(e){return{type:"SET_CHARACTER",characterId:e}},I=function(e){return{type:"SET_M",payload:e}},P=function(e){return{type:"SET_MS",payload:e}},W=function(e){return{type:"SET_S",payload:e}},H=function(e){return{type:"SET_H",payload:e}},M=function(){return{type:"CLEAR_TIMER"}},G=function(){return{type:"START_STOP_WATCH"}},D=function(){return{type:"STOP_STOP_WATCH"}},N=function(){return{type:"ADD_POINT"}},J=b.a.createContext([C,function(){return null}]),B=function(){return Object(j.useContext)(J)},F=Object(f.d)(y.a)(r||(r=Object(l.a)(["\n    max-width: max-content;\n    margin-left: auto;\n    margin-top: -2rem;\n    margin-bottom: 3rem;\n"]))),L=Object(f.d)(T.b)(a||(a=Object(l.a)(["\n    margin-top: 0.5rem;\n    margin-bottom: 0.5rem;\n"]))),z=b.a.memo((function(){var e=B(),t=Object(S.a)(e,2),n=t[0];t[1];return Object(p.jsx)(p.Fragment,{children:!!n.points.length&&Object(p.jsx)(F,{children:Object(p.jsx)(v.a,{style:{height:"100%",alignItems:"center"},children:Object(p.jsx)(_.a,{style:{height:"100%"},cover:!1,children:n.points.map((function(e,t){return Object(p.jsxs)(L,{children:["\u041a\u0440\u0443\u0433 ",t+1,": ",e]})}))})})})})})),q=n(79),K=n(73),Q=f.d.div(i||(i=Object(l.a)(["\n    display: flex;\n    justify-content: space-around;\n    /* width: 35rem; */\n    margin: auto;\n    margin-bottom: 3rem;\n"]))),U=f.d.div(o||(o=Object(l.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: #006eff2d;\n    border-radius: 0.8rem;\n    width: 4rem;\n    height: 5rem;\n"]))),V=f.d.div(u||(u=Object(l.a)(["\n    width: 31rem;\n    margin: 0 auto;\n    margin-top: 1rem;\n    text-align: center;\n    @media (max-width: 650px) {\n        width: 325px;\n        margin: 0 auto;\n        margin-top: 4rem;\n    }\n"]))),X=Object(f.d)(q.a)(s||(s=Object(l.a)(["\n    width: 9rem;\n    @media (max-width: 650px) {\n        width: 6.4rem;\n    }\n"]))),Y=b.a.memo((function(){var e=function(){var e=B(),t=Object(S.a)(e,2),n=t[0],c=n.ms,r=n.s,a=n.m,i=n.h,o=n.isGoing,u=n.points,s=t[1],b=Object(j.useRef)(),d=Object(j.useRef)(0),O=Object(j.useRef)(0),h=Object(j.useRef)(0),l=Object(j.useRef)(0),m=Object(j.useRef)(!1);return d.current=c,O.current=r,h.current=a,l.current=i,m.current=o,Object(j.useEffect)((function(){b.current&&clearInterval(b.current),o&&(b.current=setInterval((function(){m.current&&(d.current<99?s(P(d.current+1)):(s(P(0)),O.current<59?s(W(O.current+1)):(s(W(0)),h.current<59?s(I(h.current+1)):(s(I(0)),s(H(l.current+1))))))}),10))}),[o]),{ms:c,s:r,m:a,h:i,startStopWatch:function(){s(G())},pauseStopWatch:function(){s(D())},resetStopWatch:function(){s(D()),s(M())},isGoing:o,addRound:function(){s(N())},roundsNumber:u.length}}(),t=e.h,n=e.m,c=e.isGoing,r=e.ms,a=e.s,i=e.pauseStopWatch,o=e.startStopWatch,u=e.resetStopWatch,s=e.addRound,b=e.roundsNumber,d=Boolean(r||a||n||t);return Object(p.jsxs)(V,{children:[Object(p.jsx)(K.a,{style:{fontSize:"2.2rem"},children:Object(p.jsxs)(Q,{children:[Object(p.jsx)(U,{children:w(t)}),Object(p.jsx)(U,{children:w(n)}),Object(p.jsx)(U,{children:w(a)}),Object(p.jsx)(U,{children:w(r)})]})}),Object(p.jsxs)(Q,{children:[!c&&Object(p.jsx)(X,{view:"accent",text:"\u0421\u0442\u0430\u0440\u0442",onClick:o}),c&&Object(p.jsx)(X,{view:"secondary",text:"\u041f\u0430\u0443\u0437\u0430",onClick:i}),d&&Object(p.jsx)(X,{view:"secondary",text:"\u041a\u0440\u0443\u0433",onClick:s,disabled:b>=5}),d&&Object(p.jsx)(X,{view:"critical",text:"\u0421\u0442\u043e\u043f",onClick:u})]})]})}));var Z,$=function(){return Object(p.jsxs)(h.a,{children:[Object(p.jsx)(g,{}),Object(p.jsx)(Y,{}),Object(p.jsx)(z,{})]})},ee=n(80),te=n(77),ne=function(e){return Object(te.a)({getState:e})},ce=b.a.createContext(ne((function(){}))),re=function(e){var t=e.children,n=B(),c=Object(S.a)(n,2),r=c[0],a=c[1],i=Object(j.useRef)(),o=Object(j.useRef)(r);return o.current=r,Object(j.useEffect)((function(){console.log("useEffect"),i.current=function(e,t){var n=ne(t);return n.on("data",(function(t){var n=t.smart_app_data,c=t.type,r=t.character;n&&(console.log(n),e(n)),"character"===c&&e(k(r.id))})),n}(a,(function(){return o.current}))}),[]),Object(p.jsx)(ce.Provider,{value:i.current,children:t})},ae=n(17),ie=n(15),oe={sber:Object(f.b)(ae.darkSber),eva:Object(f.b)(ae.darkEva),joy:Object(f.b)(ae.darkJoy)},ue=Object(f.b)(Z||(Z=Object(l.a)(["\n  html:root {\n    padding-top: 1rem;\n    min-height: 100vh;\n    color: ",";\n    background-color: ",";\n    background-image: ",";\n  }\n"])),ie.f,ie.a,ie.b),se=function(e){var t=e.character,n=Object(j.useMemo)((function(){return oe[t]}),[t]);return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(ue,{}),Object(p.jsx)(n,{})]})},je=function(e){var t=e.children,n=Object(j.useReducer)(A,C),c=Object(S.a)(n,2),r=c[0],a=c[1];return Object(p.jsxs)(J.Provider,{value:[r,a],children:[Object(p.jsx)(se,{character:r.character}),t]})},be=function(e){var t=e.children;return Object(p.jsx)(je,{children:Object(p.jsx)(re,{children:Object(p.jsx)(ee.a,{children:t})})})};O.a.render(Object(p.jsx)(b.a.StrictMode,{children:Object(p.jsx)(be,{children:Object(p.jsx)($,{})})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.d9d6a2b4.chunk.js.map