(this["webpackJsonpreact-timeline"]=this["webpackJsonpreact-timeline"]||[]).push([[0],[,,function(e){e.exports=JSON.parse('{"person":"Ada Lovelace","events":[{"person":"Adele Goldberg","status":"In Smalltalk, everything happens somewhere else.","timeStamp":"2018-05-18T22:12:03Z"},{"person":"Erica Baker","status":"Every once in a while, life affords you the opportunity to have real, authentic, genuine happiness. It\'s up to you to see it. Pay attention.","timeStamp":"2018-05-18T22:19:40Z"},{"person":"Aubrey Tang","status":"The art of computer programming is a blend of mathematics and poetry.","timeStamp":"2018-05-18T22:41:19Z"},{"person":"Julia Evans","status":"no seriously what if we replaced tech books with informative concise 30 page zines though","timeStamp":"2018-05-18T23:02:44Z"},{"person":"Stephanie Hurlburt","status":"I don\u2019t think you can do good work if you\u2019re not at least occasionally talking to a person you\u2019re building for.","timeStamp":"2018-05-18T23:09:38Z"},{"person":"Yan Zhu","status":"//for a good time, paste this into twitter page console: c=new AudioContext;n=setInterval(\\"for(n+=7,i=k,P=\'\u25b2.\\\\\\n\';i-=1/k;P+=P[i%2?(i%2*j-j+n/k^j)&1:2])j=k/i;doc.innerHTML=P;with(c.createOscillator())frequency.value=200*(j+n/k^j),connect(c.destination),start(),stop(n/k)\\",k=64)","timeStamp":"2018-05-18T23:51:01Z"}]}')},,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);n(1);var s=n(4),a=n.n(s),o=(n(10),n(11),n(2)),i=(n(12),n(13),n(5)),r=n.n(i),c=n(0),l=function(e){var t=r()(e.time),n=t.format("MMMM Do YYYY, h:mm:ss a"),s=t.fromNow();return Object(c.jsx)("span",{title:n,children:s})},m=function(e){return Object(c.jsxs)("article",{className:"timeline-event",children:[Object(c.jsx)("p",{className:"event-person",children:e.person}),Object(c.jsx)("p",{className:"event-status",children:e.status}),Object(c.jsx)("p",{className:"event-time",children:Object(c.jsx)(l,{time:e.time})})]})},p=function(e){var t=e.events.map((function(e){return Object(c.jsx)(m,{person:e.person,status:e.status,time:e.timeStamp},e.timeStamp)}));return Object(c.jsx)("section",{className:"timeline",children:t})};var u=function(){return console.log(o),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("header",{className:"App-header",children:Object(c.jsxs)("h1",{className:"App-title",children:[o.person,"'s social media feed"]})}),Object(c.jsx)("main",{className:"App-main",children:Object(c.jsx)(p,{events:o.events})})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(c.jsx)(u,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[16,1,2]]]);
//# sourceMappingURL=main.b16fb739.chunk.js.map