(this["webpackJsonpstopwatch-sber"]=this["webpackJsonpstopwatch-sber"]||[]).push([[0],{42:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var c,r,a,i,o,u,s,j,b=n(1),d=n.n(b),O=n(28),h=n.n(O),l=(n(42),n(81)),m=n(4),f=n(78),p=n(0),x=n(2),g=Object(p.d)(f.a)(c||(c=Object(m.a)(["\n    @media (min-width: 650px) {\n        padding: 1rem;\n    }\n"]))),y=function(){return Object(x.jsx)(g,{back:!1,title:"\u041c\u043e\u0439 \u0441\u0435\u043a\u0443\u043d\u0434\u043e\u043c\u0435\u0440"})},S=n(9),v=n(83),T=n(82),_=n(75),w=n(76),E=n(33),R=n(3),C=function(e){return"".concat(e>9?"":"0").concat(e)},A={character:"sber",ms:0,s:0,m:0,h:0,isGoing:!1,points:[]},k=function(e,t){switch(t.type){case"SET_CHARACTER":return Object(R.a)(Object(R.a)({},e),{},{character:t.characterId});case"SET_H":return Object(R.a)(Object(R.a)({},e),{},{h:t.payload});case"SET_M":return Object(R.a)(Object(R.a)({},e),{},{m:t.payload});case"SET_MS":return Object(R.a)(Object(R.a)({},e),{},{ms:t.payload});case"SET_S":return Object(R.a)(Object(R.a)({},e),{},{s:t.payload});case"START_STOP_WATCH":return Object(R.a)(Object(R.a)({},e),{},{isGoing:!0});case"STOP_STOP_WATCH":return Object(R.a)(Object(R.a)({},e),{},{isGoing:!1});case"CLEAR_TIMER":return Object(R.a)(Object(R.a)({},e),{},{ms:0,s:0,m:0,h:0,points:[]});case"ADD_POINT":var n=Object(E.a)(e.points);return n.length<5&&n.push("".concat(C(e.h),":").concat(C(e.m),":").concat(C(e.s),":").concat(C(e.ms))),Object(R.a)(Object(R.a)({},e),{},{points:n});default:return e}},I=function(e){return{type:"SET_CHARACTER",characterId:e}},P=function(e){return{type:"SET_M",payload:e}},W=function(e){return{type:"SET_MS",payload:e}},H=function(e){return{type:"SET_S",payload:e}},M=function(e){return{type:"SET_H",payload:e}},G=function(){return{type:"CLEAR_TIMER"}},D=function(){return{type:"START_STOP_WATCH"}},N=function(){return{type:"STOP_STOP_WATCH"}},J=function(){return{type:"ADD_POINT"}},B=d.a.createContext([A,function(){return null}]),F=function(){return Object(b.useContext)(B)},L=Object(p.d)(v.a)(r||(r=Object(m.a)(["\n    /* max-width: max-content; */\n"]))),z=p.d.div(a||(a=Object(m.a)(["\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: end;\n    margin-top: -2rem;\n    margin-bottom: 4rem;\n    @media (max-width: 650px) {\n        bottom: 9rem;\n    }\n"]))),q=Object(p.d)(T.b)(i||(i=Object(m.a)(["\n    margin-top: 0.5rem;\n    margin-bottom: 0.5rem;\n"]))),K=d.a.memo((function(){var e=F(),t=Object(S.a)(e,2),n=t[0];t[1];return Object(x.jsx)(x.Fragment,{children:!!n.points.length&&Object(x.jsx)(z,{children:Object(x.jsx)(L,{children:Object(x.jsx)(_.a,{style:{height:"100%",alignItems:"center"},children:Object(x.jsx)(w.a,{style:{height:"100%"},cover:!1,children:n.points.map((function(e,t){return Object(x.jsxs)(q,{children:["\u041a\u0440\u0443\u0433 ",t+1,": ",e]})}))})})})})})})),Q=n(79),U=n(73),V=p.d.div(o||(o=Object(m.a)(["\n    display: flex;\n    justify-content: space-around;\n    /* width: 35rem; */\n    margin: auto;\n    margin-bottom: 3rem;\n"]))),X=p.d.div(u||(u=Object(m.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: #006eff2d;\n    border-radius: 0.8rem;\n    width: 4rem;\n    height: 5rem;\n"]))),Y=p.d.div(s||(s=Object(m.a)(["\n    width: 31rem;\n    margin: 0 auto;\n    margin-top: 1rem;\n    text-align: center;\n    @media (max-width: 650px) {\n        width: 325px;\n        margin: 0 auto;\n        margin-top: 4rem;\n    }\n"]))),Z=Object(p.d)(Q.a)(j||(j=Object(m.a)(["\n    width: 9rem;\n    @media (max-width: 650px) {\n        width: 6.4rem;\n    }\n"]))),$=d.a.memo((function(){var e=function(){var e=F(),t=Object(S.a)(e,2),n=t[0],c=n.ms,r=n.s,a=n.m,i=n.h,o=n.isGoing,u=n.points,s=t[1],j=Object(b.useRef)(),d=Object(b.useRef)(0),O=Object(b.useRef)(0),h=Object(b.useRef)(0),l=Object(b.useRef)(0),m=Object(b.useRef)(!1);return d.current=c,O.current=r,h.current=a,l.current=i,m.current=o,Object(b.useEffect)((function(){j.current&&clearInterval(j.current),o&&(j.current=setInterval((function(){m.current&&(d.current<99?s(W(d.current+1)):(s(W(0)),O.current<59?s(H(O.current+1)):(s(H(0)),h.current<59?s(P(h.current+1)):(s(P(0)),s(M(l.current+1))))))}),10))}),[o]),{ms:c,s:r,m:a,h:i,startStopWatch:function(){s(D())},pauseStopWatch:function(){s(N())},resetStopWatch:function(){s(N()),s(G())},isGoing:o,addRound:function(){s(J())},roundsNumber:u.length}}(),t=e.h,n=e.m,c=e.isGoing,r=e.ms,a=e.s,i=e.pauseStopWatch,o=e.startStopWatch,u=e.resetStopWatch,s=e.addRound,j=e.roundsNumber,d=Boolean(r||a||n||t);return Object(x.jsxs)(Y,{children:[Object(x.jsx)(U.a,{style:{fontSize:"2.2rem"},children:Object(x.jsxs)(V,{children:[Object(x.jsx)(X,{children:C(t)}),Object(x.jsx)(X,{children:C(n)}),Object(x.jsx)(X,{children:C(a)}),Object(x.jsx)(X,{children:C(r)})]})}),Object(x.jsxs)(V,{children:[!c&&Object(x.jsx)(Z,{view:"accent",text:"\u0421\u0442\u0430\u0440\u0442",onClick:o}),c&&Object(x.jsx)(Z,{view:"secondary",text:"\u041f\u0430\u0443\u0437\u0430",onClick:i}),d&&Object(x.jsx)(Z,{view:"secondary",text:"\u041a\u0440\u0443\u0433",onClick:s,disabled:j>=5}),d&&Object(x.jsx)(Z,{view:"critical",text:"\u0421\u0442\u043e\u043f",onClick:u})]})]})}));var ee,te=function(){return Object(x.jsxs)(l.a,{children:[Object(x.jsx)(y,{}),Object(x.jsx)($,{}),Object(x.jsx)(K,{})]})},ne=n(80),ce=n(77),re=function(e){return Object(ce.a)({getState:e})},ae=d.a.createContext(re((function(){}))),ie=function(e){var t=e.children,n=F(),c=Object(S.a)(n,2),r=c[0],a=c[1],i=Object(b.useRef)(),o=Object(b.useRef)(r);return o.current=r,Object(b.useEffect)((function(){console.log("useEffect"),i.current=function(e,t){var n=re(t);return n.on("data",(function(t){var n=t.smart_app_data,c=t.type,r=t.character;n&&(console.log(n),e(n)),"character"===c&&e(I(r.id))})),n}(a,(function(){return o.current}))}),[]),Object(x.jsx)(ae.Provider,{value:i.current,children:t})},oe=n(17),ue=n(15),se={sber:Object(p.b)(oe.darkSber),eva:Object(p.b)(oe.darkEva),joy:Object(p.b)(oe.darkJoy)},je=Object(p.b)(ee||(ee=Object(m.a)(["\n  html:root {\n    padding-top: 1rem;\n    min-height: 100vh;\n    color: ",";\n    background-color: ",";\n    background-image: ",";\n  }\n"])),ue.f,ue.a,ue.b),be=function(e){var t=e.character,n=Object(b.useMemo)((function(){return se[t]}),[t]);return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(je,{}),Object(x.jsx)(n,{})]})},de=function(e){var t=e.children,n=Object(b.useReducer)(k,A),c=Object(S.a)(n,2),r=c[0],a=c[1];return Object(x.jsxs)(B.Provider,{value:[r,a],children:[Object(x.jsx)(be,{character:r.character}),t]})},Oe=function(e){var t=e.children;return Object(x.jsx)(de,{children:Object(x.jsx)(ie,{children:Object(x.jsx)(ne.a,{children:t})})})};h.a.render(Object(x.jsx)(d.a.StrictMode,{children:Object(x.jsx)(Oe,{children:Object(x.jsx)(te,{})})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.a442ba0a.chunk.js.map