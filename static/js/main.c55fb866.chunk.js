(this["webpackJsonpfire-chat"]=this["webpackJsonpfire-chat"]||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var c=n(4),i=n.n(c),r=n(13),a=n.n(r),o=(n(21),n(12)),s=(n(22),n(9)),u=(n(28),n(24),n(15)),j=n(16),d=n(5);s.a.initializeApp({apiKey:"AIzaSyD-HSxkEyYw7RVGGTm7KTZwfev7z3l5Sic",authDomain:"firechat-35474.firebaseapp.com",projectId:"firechat-35474",storageBucket:"firechat-35474.appspot.com",messagingSenderId:"193726300442",appId:"1:193726300442:web:4a18067b6e2651441baca3",measurementId:"G-1DPM4MSDQM"});var b=s.a.auth(),h=s.a.firestore();var f=function(){var e=Object(u.a)(b),t=Object(o.a)(e,1)[0];return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("header",{children:Object(d.jsx)(c,{})}),Object(d.jsx)("section",{children:t?Object(d.jsx)(i,{}):Object(d.jsx)(n,{})})]});function n(){return Object(d.jsx)("button",{onClick:function(){var e=new s.a.auth.GoogleAuthProvider;b.signInWithPopup(e)},children:"Sig In With Google"})}function c(){return b.currentUser&&Object(d.jsx)("button",{onClick:function(){return b.signOut()},children:"Sign Out"})}function i(){var e=h.collection("messages").orderBy("createdAt").limit(25),t=Object(j.a)(e,{idField:"id"}),n=Object(o.a)(t,1)[0];return Object(d.jsx)("div",{children:n&&n.map((function(e){return Object(d.jsx)(r,{message:e},e.id)}))})}function r(e){var t=e.message,n=t.text;t.uid;return Object(d.jsx)("p",{children:n})}},l=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),r(e),a(e)}))};a.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root")),l()}},[[27,1,2]]]);
//# sourceMappingURL=main.c55fb866.chunk.js.map