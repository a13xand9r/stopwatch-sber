(this["webpackJsonpstopwatch-sber"]=this["webpackJsonpstopwatch-sber"]||[]).push([[0],{42:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var c,r,a,o,i,s,u=n(1),j=n.n(u),b=n(28),d=n.n(b),O=(n(42),n(81)),l=n(78),h=n(2),m=function(){return Object(h.jsx)(l.a,{back:!1,title:"\u041c\u043e\u0439 \u0441\u0435\u043a\u0443\u043d\u0434\u043e\u043c\u0435\u0440"})},f=n(9),p=n(7),x=n(83),g=n(82),y=n(75),S=n(76),T=n(0),v=n(33),_=n(3),E=function(e){return"".concat(e>9?"":"0").concat(e)},R={character:"sber",ms:0,s:0,m:0,h:0,isGoing:!1,points:[]},w=function(e,t){switch(t.type){case"SET_CHARACTER":return Object(_.a)(Object(_.a)({},e),{},{character:t.characterId});case"SET_H":return Object(_.a)(Object(_.a)({},e),{},{h:t.payload});case"SET_M":return Object(_.a)(Object(_.a)({},e),{},{m:t.payload});case"SET_MS":return Object(_.a)(Object(_.a)({},e),{},{ms:t.payload});case"SET_S":return Object(_.a)(Object(_.a)({},e),{},{s:t.payload});case"START_STOP_WATCH":return Object(_.a)(Object(_.a)({},e),{},{isGoing:!0});case"STOP_STOP_WATCH":return Object(_.a)(Object(_.a)({},e),{},{isGoing:!1});case"CLEAR_TIMER":return Object(_.a)(Object(_.a)({},e),{},{ms:0,s:0,m:0,h:0,points:[]});case"ADD_POINT":var n=Object(v.a)(e.points);return n.length<5&&n.push("".concat(E(e.h),":").concat(E(e.m),":").concat(E(e.s),":").concat(E(e.ms))),Object(_.a)(Object(_.a)({},e),{},{points:n});default:return e}},C=function(e){return{type:"SET_CHARACTER",characterId:e}},A=function(e){return{type:"SET_M",payload:e}},k=function(e){return{type:"SET_MS",payload:e}},I=function(e){return{type:"SET_S",payload:e}},P=function(e){return{type:"SET_H",payload:e}},W=function(){return{type:"CLEAR_TIMER"}},H=function(){return{type:"START_STOP_WATCH"}},M=function(){return{type:"STOP_STOP_WATCH"}},G=function(){return{type:"ADD_POINT"}},D=j.a.createContext([R,function(){return null}]),N=function(){return Object(u.useContext)(D)},J=Object(T.d)(x.a)(c||(c=Object(p.a)(["\n    position: absolute;\n    bottom: 3rem;\n    right: 2rem;\n    @media (max-width: 650px) {\n        bottom: 8rem;\n    }\n"]))),B=Object(T.d)(g.b)(r||(r=Object(p.a)(["\n    margin-top: 0.5rem;\n    margin-bottom: 0.5rem;\n"]))),F=j.a.memo((function(){var e=N(),t=Object(f.a)(e,2),n=t[0];t[1];return console.log("Component2 render"),Object(h.jsx)(h.Fragment,{children:!!n.points.length&&Object(h.jsx)(J,{children:Object(h.jsx)(y.a,{style:{height:"100%",alignItems:"center"},children:Object(h.jsx)(S.a,{style:{height:"100%"},cover:!1,children:n.points.map((function(e,t){return Object(h.jsxs)(B,{children:["\u041a\u0440\u0443\u0433 ",t+1,": ",e]})}))})})})})})),L=n(79),z=n(73),q=T.d.div(a||(a=Object(p.a)(["\n    display: flex;\n    justify-content: space-around;\n    /* width: 35rem; */\n    margin: auto;\n    margin-bottom: 3rem;\n"]))),K=T.d.div(o||(o=Object(p.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: #006eff2d;\n    border-radius: 0.8rem;\n    width: 4rem;\n    height: 5rem;\n"]))),Q=T.d.div(i||(i=Object(p.a)(["\n    width: 31rem;\n    margin: 5rem auto;\n    text-align: center;\n    @media (max-width: 650px) {\n        width: 325px;\n    }\n"]))),U=Object(T.d)(L.a)(s||(s=Object(p.a)(["\n    width: 9rem;\n    @media (max-width: 650px) {\n        width: 6.4rem;\n    }\n"]))),V=j.a.memo((function(){var e=function(){var e=N(),t=Object(f.a)(e,2),n=t[0],c=n.ms,r=n.s,a=n.m,o=n.h,i=n.isGoing,s=n.points,j=t[1],b=Object(u.useRef)(),d=Object(u.useRef)(0),O=Object(u.useRef)(0),l=Object(u.useRef)(0),h=Object(u.useRef)(0);return d.current=c,O.current=r,l.current=a,h.current=o,100===c&&console.log(c),Object(u.useEffect)((function(){b.current&&clearInterval(b.current),i&&(b.current=setInterval((function(){d.current<99?j(k(d.current+1)):(j(k(0)),O.current<59?j(I(O.current+1)):(j(I(0)),l.current<59?j(A(l.current+1)):(j(A(0)),j(P(h.current+1)))))}),10))}),[i]),{ms:c,s:r,m:a,h:o,startStopWatch:function(){j(H())},pauseStopWatch:function(){j(M())},resetStopWatch:function(){j(M()),j(W())},isGoing:i,addRound:function(){j(G())},roundsNumber:s.length}}(),t=e.h,n=e.m,c=e.isGoing,r=e.ms,a=e.s,o=e.pauseStopWatch,i=e.startStopWatch,s=e.resetStopWatch,j=e.addRound,b=e.roundsNumber,d=Boolean(r||a||n||t);return Object(h.jsxs)(Q,{children:[Object(h.jsx)(z.a,{style:{fontSize:"2.2rem"},children:Object(h.jsxs)(q,{children:[Object(h.jsx)(K,{children:E(t)}),Object(h.jsx)(K,{children:E(n)}),Object(h.jsx)(K,{children:E(a)}),Object(h.jsx)(K,{children:E(r)})]})}),Object(h.jsxs)(q,{children:[!c&&Object(h.jsx)(U,{view:"accent",text:"\u0421\u0442\u0430\u0440\u0442",onClick:i}),c&&Object(h.jsx)(U,{view:"secondary",text:"\u041f\u0430\u0443\u0437\u0430",onClick:o}),d&&Object(h.jsx)(U,{view:"secondary",text:"\u041a\u0440\u0443\u0433",onClick:j,disabled:b>=5}),d&&Object(h.jsx)(U,{view:"critical",text:"\u0421\u0442\u043e\u043f",onClick:s})]})]})}));var X,Y=function(){return Object(h.jsxs)(O.a,{children:[Object(h.jsx)(m,{}),Object(h.jsx)(V,{}),Object(h.jsx)(F,{})]})},Z=n(80),$=n(77),ee=function(e){return Object($.a)({getState:e})},te=j.a.createContext(ee((function(){}))),ne=function(e){var t=e.children,n=N(),c=Object(f.a)(n,2),r=c[0],a=c[1],o=Object(u.useRef)(),i=Object(u.useRef)(r);return i.current=r,Object(u.useEffect)((function(){console.log("useEffect"),o.current=function(e,t){var n=ee(t);return n.on("data",(function(t){var n=t.smart_app_data,c=t.type,r=t.character;console.log("data type",c),n&&(console.log(n),e(n)),"character"===c&&e(C(r.id))})),n}(a,(function(){return i.current}))}),[]),Object(h.jsx)(te.Provider,{value:o.current,children:t})},ce=n(17),re=n(15),ae={sber:Object(T.b)(ce.darkSber),eva:Object(T.b)(ce.darkEva),joy:Object(T.b)(ce.darkJoy)},oe=Object(T.b)(X||(X=Object(p.a)(["\n  html:root {\n    padding-top: 1rem;\n    min-height: 100vh;\n    color: ",";\n    background-color: ",";\n    background-image: ",";\n  }\n"])),re.f,re.a,re.b),ie=function(e){var t=e.character,n=Object(u.useMemo)((function(){return ae[t]}),[t]);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(oe,{}),Object(h.jsx)(n,{})]})},se=function(e){var t=e.children,n=Object(u.useReducer)(w,R),c=Object(f.a)(n,2),r=c[0],a=c[1];return Object(h.jsxs)(D.Provider,{value:[r,a],children:[Object(h.jsx)(ie,{character:r.character}),t]})},ue=function(e){var t=e.children;return Object(h.jsx)(se,{children:Object(h.jsx)(ne,{children:Object(h.jsx)(Z.a,{children:t})})})};d.a.render(Object(h.jsx)(j.a.StrictMode,{children:Object(h.jsx)(ue,{children:Object(h.jsx)(Y,{})})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.456deb80.chunk.js.map